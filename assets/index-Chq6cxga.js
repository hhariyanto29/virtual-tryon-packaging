var Bp=Object.defineProperty;var zp=(n,e,t)=>e in n?Bp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Je=(n,e,t)=>zp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Xs=[],$n=()=>{},Md=()=>!1,ua=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Dc=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Ic=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hp=Object.prototype.hasOwnProperty,at=(n,e)=>Hp.call(n,e),Be=Array.isArray,$s=n=>Zr(n)==="[object Map]",Sd=n=>Zr(n)==="[object Set]",vh=n=>Zr(n)==="[object Date]",Ye=n=>typeof n=="function",Rt=n=>typeof n=="string",Dn=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",bd=n=>(lt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),wd=Object.prototype.toString,Zr=n=>wd.call(n),Gp=n=>Zr(n).slice(8,-1),Ed=n=>Zr(n)==="[object Object]",da=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tr=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vp=/-\w/g,Pn=fa(n=>n.replace(Vp,e=>e.slice(1).toUpperCase())),Wp=/\B([A-Z])/g,vs=fa(n=>n.replace(Wp,"-$1").toLowerCase()),Td=fa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ua=fa(n=>n?`on${Td(n)}`:""),Wn=(n,e)=>!Object.is(n,e),zo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ad=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Uc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Xp=n=>{const e=Rt(n)?Number(n):NaN;return isNaN(e)?n:e};let xh;const pa=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ma(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?jp(i):ma(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||lt(n))return n}const $p=/;(?![^(]*\))/g,qp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function jp(n){const e={};return n.replace(Yp,"").split($p).forEach(t=>{if(t){const i=t.split(qp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mt(n){let e="";if(Rt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=mt(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=Lc(Kp);function Cd(n){return!!n||n===""}function Jp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Nc(n[i],e[i]);return t}function Nc(n,e){if(n===e)return!0;let t=vh(n),i=vh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Dn(n),i=Dn(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?Jp(n,e):!1;if(t=lt(n),i=lt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Nc(n[o],e[o]))return!1}}return String(n)===String(e)}const Rd=n=>!!(n&&n.__v_isRef===!0),Ge=n=>Rt(n)?n:n==null?"":Be(n)||lt(n)&&(n.toString===wd||!Ye(n.toString))?Rd(n)?Ge(n.value):JSON.stringify(n,Pd,2):String(n),Pd=(n,e)=>Rd(e)?Pd(n,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Na(i,r)+" =>"]=s,t),{})}:Sd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Na(t))}:Dn(e)?Na(e):lt(e)&&!Be(e)&&!Ed(e)?String(e):e,Na=(n,e="")=>{var t;return Dn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dd(n){return new Ld(n)}function Id(){return Wt}function Qp(n,e=!1){Wt&&Wt.cleanups.push(n)}let _t;const Fa=new WeakSet;class Ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yh(this),Od(this);const e=_t,t=Ln;_t=this,Ln=!0;try{return this.fn()}finally{kd(this),_t=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kc(e);this.deps=this.depsTail=void 0,yh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let Nd=0,Ar,Cr;function Fd(n,e=!1){if(n.flags|=8,e){n.next=Cr,Cr=n;return}n.next=Ar,Ar=n}function Fc(){Nd++}function Oc(){if(--Nd>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ar;){let e=Ar;for(Ar=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),kc(i),em(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Rl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===kr)||(n.globalVersion=kr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const e=n.dep,t=_t,i=Ln;_t=n,Ln=!0;try{Od(n);const s=n.fn(n._value);(e.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{_t=t,Ln=i,kd(n),n.flags&=-3}}function kc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)kc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function em(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const zd=[];function Mi(){zd.push(Ln),Ln=!1}function Si(){const n=zd.pop();Ln=n===void 0?!0:n}function yh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let kr=0;class tm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!Ln||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new tm(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,Hd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=i)}return t}trigger(e){this.version++,kr++,this.notify(e)}notify(e){Fc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Oc()}}}function Hd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Zo=new WeakMap,ds=Symbol(""),Pl=Symbol(""),Br=Symbol("");function Xt(n,e,t){if(Ln&&_t){let i=Zo.get(n);i||Zo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Bc),s.map=i,s.key=t),s.track()}}function fi(n,e,t,i,s,r){const o=Zo.get(n);if(!o){kr++;return}const a=l=>{l&&l.trigger()};if(Fc(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&da(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,f)=>{(f==="length"||f===Br||!Dn(f)&&f>=h)&&a(u)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),$s(n)&&a(o.get(Pl)));break;case"delete":l||(a(o.get(ds)),$s(n)&&a(o.get(Pl)));break;case"set":$s(n)&&a(o.get(ds));break}}Oc()}function nm(n,e){const t=Zo.get(n);return t&&t.get(e)}function Ss(n){const e=nt(n);return e===n?e:(Xt(e,"iterate",Br),dn(n)?e:e.map(In))}function ga(n){return Xt(n=nt(n),"iterate",Br),n}function Hn(n,e){return bi(n)?Qs(xi(n)?In(e):e):In(e)}const im={__proto__:null,[Symbol.iterator](){return Oa(this,Symbol.iterator,n=>Hn(this,n))},concat(...n){return Ss(this).concat(...n.map(e=>Be(e)?Ss(e):e))},entries(){return Oa(this,"entries",n=>(n[1]=Hn(this,n[1]),n))},every(n,e){return ni(this,"every",n,e,void 0,arguments)},filter(n,e){return ni(this,"filter",n,e,t=>t.map(i=>Hn(this,i)),arguments)},find(n,e){return ni(this,"find",n,e,t=>Hn(this,t),arguments)},findIndex(n,e){return ni(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ni(this,"findLast",n,e,t=>Hn(this,t),arguments)},findLastIndex(n,e){return ni(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ni(this,"forEach",n,e,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return Ss(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,e){return ni(this,"map",n,e,void 0,arguments)},pop(){return fr(this,"pop")},push(...n){return fr(this,"push",n)},reduce(n,...e){return Mh(this,"reduce",n,e)},reduceRight(n,...e){return Mh(this,"reduceRight",n,e)},shift(){return fr(this,"shift")},some(n,e){return ni(this,"some",n,e,void 0,arguments)},splice(...n){return fr(this,"splice",n)},toReversed(){return Ss(this).toReversed()},toSorted(n){return Ss(this).toSorted(n)},toSpliced(...n){return Ss(this).toSpliced(...n)},unshift(...n){return fr(this,"unshift",n)},values(){return Oa(this,"values",n=>Hn(this,n))}};function Oa(n,e,t){const i=ga(n),s=i[e]();return i!==n&&!dn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const sm=Array.prototype;function ni(n,e,t,i,s,r){const o=ga(n),a=o!==n&&!dn(n),l=o[e];if(l!==sm[e]){const u=l.apply(n,r);return a?In(u):u}let c=t;o!==n&&(a?c=function(u,f){return t.call(this,Hn(n,u),f,n)}:t.length>2&&(c=function(u,f){return t.call(this,u,f,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Mh(n,e,t,i){const s=ga(n),r=s!==n&&!dn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,h,u){return a&&(a=!1,c=Hn(n,c)),t.call(this,c,Hn(n,h),u,n)}):t.length>3&&(o=function(c,h,u){return t.call(this,c,h,u,n)}));const l=s[e](o,...i);return a?Hn(n,l):l}function ka(n,e,t){const i=nt(n);Xt(i,"iterate",Br);const s=i[e](...t);return(s===-1||s===!1)&&_a(t[0])?(t[0]=nt(t[0]),i[e](...t)):s}function fr(n,e,t=[]){Mi(),Fc();const i=nt(n)[e].apply(n,t);return Oc(),Si(),i}const rm=Lc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Dn));function om(n){Dn(n)||(n=String(n));const e=nt(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?gm:qd:r?$d:Xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=im[t]))return l;if(t==="hasOwnProperty")return om}const a=Reflect.get(e,t,At(e)?e:i);if((Dn(t)?Gd.has(t):rm(t))||(s||Xt(e,"get",t),r))return a;if(At(a)){const l=o&&da(t)?a:a.value;return s&&lt(l)?Dl(l):l}return lt(a)?s?Dl(a):Jr(a):a}}class Wd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Be(e)&&da(t);if(!this._isShallow){const c=bi(r);if(!dn(i)&&!bi(i)&&(r=nt(r),i=nt(i)),!o&&At(r)&&!At(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,At(e)?e:s);return e===nt(s)&&(a?Wn(i,r)&&fi(e,"set",t,i):fi(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&fi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Dn(t)||!Gd.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",Be(e)?"length":ds),Reflect.ownKeys(e)}}class am extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lm=new Wd,cm=new am,hm=new Wd(!0);const Ll=n=>n,ro=n=>Reflect.getPrototypeOf(n);function um(n,e,t){return function(...i){const s=this.__v_raw,r=nt(s),o=$s(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Ll:e?Qs:In;return!e&&Xt(r,"iterate",l?Pl:ds),Ut(Object.create(c),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:a?[h(u[0]),h(u[1])]:h(u),done:f}}})}}function oo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function dm(n,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);n||(Wn(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=ro(o),c=e?Ll:n?Qs:In;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(nt(s),"iterate",ds),s.size},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return n||(Wn(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?Ll:n?Qs:In;return!n&&Xt(l,"iterate",ds),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return Ut(t,n?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(s){const r=nt(this),o=ro(r),a=nt(s),l=!e&&!dn(s)&&!bi(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!e&&!dn(r)&&!bi(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=ro(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Wn(r,h)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=ro(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=um(s,n,e)}),t}function zc(n,e){const t=dm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const fm={get:zc(!1,!1)},pm={get:zc(!1,!0)},mm={get:zc(!0,!1)};const Xd=new WeakMap,$d=new WeakMap,qd=new WeakMap,gm=new WeakMap;function _m(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vm(n){return n.__v_skip||!Object.isExtensible(n)?0:_m(Gp(n))}function Jr(n){return bi(n)?n:Hc(n,!1,lm,fm,Xd)}function xm(n){return Hc(n,!1,hm,pm,$d)}function Dl(n){return Hc(n,!0,cm,mm,qd)}function Hc(n,e,t,i,s){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=vm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function xi(n){return bi(n)?xi(n.__v_raw):!!(n&&n.__v_isReactive)}function bi(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function _a(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Gc(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Ad(n,"__v_skip",!0),n}const In=n=>lt(n)?Jr(n):n,Qs=n=>lt(n)?Dl(n):n;function At(n){return n?n.__v_isRef===!0:!1}function Oe(n){return ym(n,!1)}function ym(n,e){return At(n)?n:new Mm(n,e)}class Mm{constructor(e,t){this.dep=new Bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||dn(e)||bi(e);e=i?e:nt(e),Wn(e,t)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function Yd(n){return At(n)?n.value:n}const Sm={get:(n,e,t)=>e==="__v_raw"?n:Yd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return At(s)&&!At(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function jd(n){return xi(n)?n:new Proxy(n,Sm)}function bm(n){const e=Be(n)?new Array(n.length):{};for(const t in n)e[t]=Em(n,t);return e}class wm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let s=!0,r=e;if(!Be(e)||!da(String(t)))do s=!_a(r)||dn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Yd(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&At(this._raw[this._key])){const t=this._object[this._key];if(At(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return nm(this._raw,this._key)}}function Em(n,e,t){return new wm(n,e,t)}class Tm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Am(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new Tm(i,s,t)}const ao={},Jo=new WeakMap;let as;function Cm(n,e=!1,t=as){if(t){let i=Jo.get(t);i||Jo.set(t,i=[]),i.push(n)}}function Rm(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:dn(M)||s===!1||s===0?pi(M,1):pi(M);let h,u,f,d,g=!1,x=!1;if(At(n)?(u=()=>n.value,g=dn(n)):xi(n)?(u=()=>c(n),g=!0):Be(n)?(x=!0,g=n.some(M=>xi(M)||dn(M)),u=()=>n.map(M=>{if(At(M))return M.value;if(xi(M))return c(M);if(Ye(M))return l?l(M,2):M()})):Ye(n)?e?u=l?()=>l(n,2):n:u=()=>{if(f){Mi();try{f()}finally{Si()}}const M=as;as=h;try{return l?l(n,3,[d]):n(d)}finally{as=M}}:u=$n,e&&s){const M=u,I=s===!0?1/0:s;u=()=>pi(M(),I)}const m=Id(),p=()=>{h.stop(),m&&m.active&&Ic(m.effects,h)};if(r&&e){const M=e;e=(...I)=>{M(...I),p()}}let E=x?new Array(n.length).fill(ao):ao;const w=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(e){const I=h.run();if(s||g||(x?I.some((L,U)=>Wn(L,E[U])):Wn(I,E))){f&&f();const L=as;as=h;try{const U=[I,E===ao?void 0:x&&E[0]===ao?[]:E,d];E=I,l?l(e,3,U):e(...U)}finally{as=L}}}else h.run()};return a&&a(w),h=new Ud(u),h.scheduler=o?()=>o(w,!1):w,d=M=>Cm(M,!1,h),f=h.onStop=()=>{const M=Jo.get(h);if(M){if(l)l(M,4);else for(const I of M)I();Jo.delete(h)}},e?i?w(!0):E=h.run():o?o(w.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function pi(n,e=1/0,t){if(e<=0||!lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,At(n))pi(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)pi(n[i],e,t);else if(Sd(n)||$s(n))n.forEach(i=>{pi(i,e,t)});else if(Ed(n)){for(const i in n)pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(n,e,t,i){try{return i?n(...i):n()}catch(s){va(s,e,t)}}function Un(n,e,t,i){if(Ye(n)){const s=Qr(n,e,t,i);return s&&bd(s)&&s.catch(r=>{va(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Un(n[r],e,t,i));return s}}function va(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){Mi(),Qr(r,null,10,[n,l,c]),Si();return}}Pm(n,t,s,i,o)}function Pm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Jt=[];let kn=-1;const qs=[];let Ni=null,zs=0;const Kd=Promise.resolve();let Qo=null;function Zd(n){const e=Qo||Kd;return n?e.then(this?n.bind(this):n):e}function Lm(n){let e=kn+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,s=Jt[i],r=zr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Vc(n){if(!(n.flags&1)){const e=zr(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=zr(t)?Jt.push(n):Jt.splice(Lm(e),0,n),n.flags|=1,Jd()}}function Jd(){Qo||(Qo=Kd.then(ef))}function Dm(n){Be(n)?qs.push(...n):Ni&&n.id===-1?Ni.splice(zs+1,0,n):n.flags&1||(qs.push(n),n.flags|=1),Jd()}function Sh(n,e,t=kn+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qd(n){if(qs.length){const e=[...new Set(qs)].sort((t,i)=>zr(t)-zr(i));if(qs.length=0,Ni){Ni.push(...e);return}for(Ni=e,zs=0;zs<Ni.length;zs++){const t=Ni[zs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ni=null,zs=0}}const zr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ef(n){try{for(kn=0;kn<Jt.length;kn++){const e=Jt[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<Jt.length;kn++){const e=Jt[kn];e&&(e.flags&=-2)}kn=-1,Jt.length=0,Qd(),Qo=null,(Jt.length||qs.length)&&ef()}}let qt=null,tf=null;function ea(n){const e=qt;return qt=n,tf=n&&n.type.__scopeId||null,e}function Fi(n,e=qt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ia(-1);const r=ea(e);let o;try{o=n(...s)}finally{ea(r),i._d&&ia(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bi(n,e){if(qt===null)return n;const t=wa(qt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=pt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ki(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Mi(),Un(l,t,8,[n.el,a,n,e]),Si())}}function Im(n,e){if(Qt){let t=Qt.provides;const i=Qt.parent&&Qt.parent.provides;i===t&&(t=Qt.provides=Object.create(i)),t[n]=e}}function Rr(n,e,t=!1){const i=qc();if(i||fs){let s=fs?fs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}function Um(){return!!(qc()||fs)}const Nm=Symbol.for("v-scx"),Fm=()=>Rr(Nm);function Xn(n,e,t){return nf(n,e,t)}function nf(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ut({},t),l=e&&i||!e&&r!=="post";let c;if(Wr){if(r==="sync"){const d=Fm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=$n,d.resume=$n,d.pause=$n,d}}const h=Qt;a.call=(d,g,x)=>Un(d,h,g,x);let u=!1;r==="post"?a.scheduler=d=>{rn(d,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,g)=>{g?d():Vc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,h&&(d.id=h.uid,d.i=h))};const f=Rm(n,e,a);return Wr&&(c?c.push(f):l&&f()),f}function Om(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?sf(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=eo(this),a=nf(s,r.bind(i),t);return o(),a}function sf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const km=Symbol("_vte"),rf=n=>n.__isTeleport,Bn=Symbol("_leaveCb"),pr=Symbol("_enterCb");function Bm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ma(()=>{n.isMounted=!0}),ff(()=>{n.isUnmounting=!0}),n}const gn=[Function,Array],of={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},af=n=>{const e=n.subTree;return e.component?af(e.component):e},zm={name:"BaseTransition",props:of,setup(n,{slots:e}){const t=qc(),i=Bm();return()=>{const s=e.default&&hf(e.default(),!0);if(!s||!s.length)return;const r=lf(s),o=nt(n),{mode:a}=o;if(i.isLeaving)return Ba(r);const l=bh(r);if(!l)return Ba(r);let c=Il(l,o,i,t,u=>c=u);l.type!==$t&&Hr(l,c);let h=t.subTree&&bh(t.subTree);if(h&&h.type!==$t&&!cs(h,l)&&af(t).type!==$t){let u=Il(h,o,i,t);if(Hr(h,u),a==="out-in"&&l.type!==$t)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete u.afterLeave,h=void 0},Ba(r);a==="in-out"&&l.type!==$t?u.delayLeave=(f,d,g)=>{const x=cf(i,h);x[String(h.key)]=h,f[Bn]=()=>{d(),f[Bn]=void 0,delete c.delayedLeave,h=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function lf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==$t){e=t;break}}return e}const Hm=zm;function cf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Il(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:h,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:w}=e,M=String(n.key),I=cf(t,n),L=(v,_)=>{v&&Un(v,i,9,_)},U=(v,_)=>{const P=_[1];L(v,_),Be(v)?v.every(O=>O.length<=1)&&P():v.length<=1&&P()},C={mode:o,persisted:a,beforeEnter(v){let _=l;if(!t.isMounted)if(r)_=m||l;else return;v[Bn]&&v[Bn](!0);const P=I[M];P&&cs(n,P)&&P.el[Bn]&&P.el[Bn](),L(_,[v])},enter(v){if(I[M]===n)return;let _=c,P=h,O=u;if(!t.isMounted)if(r)_=p||c,P=E||h,O=w||u;else return;let D=!1;v[pr]=V=>{D||(D=!0,V?L(O,[v]):L(P,[v]),C.delayedLeave&&C.delayedLeave(),v[pr]=void 0)};const F=v[pr].bind(null,!1);_?U(_,[v,F]):F()},leave(v,_){const P=String(n.key);if(v[pr]&&v[pr](!0),t.isUnmounting)return _();L(f,[v]);let O=!1;v[Bn]=F=>{O||(O=!0,_(),F?L(x,[v]):L(g,[v]),v[Bn]=void 0,I[P]===n&&delete I[P])};const D=v[Bn].bind(null,!1);I[P]=n,d?U(d,[v,D]):D()},clone(v){const _=Il(v,e,t,i,s);return s&&s(_),_}};return C}function Ba(n){if(xa(n))return n=Xi(n),n.children=null,n}function bh(n){if(!xa(n))return rf(n.type)&&n.children?lf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ye(t.default))return t.default()}}function Hr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Mt?(o.patchFlag&128&&s++,i=i.concat(hf(o.children,e,a))):(e||o.type!==$t)&&i.push(a!=null?Xi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Nn(n,e){return Ye(n)?Ut({name:n.name},e,{setup:n}):n}function uf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ta=new WeakMap;function Pr(n,e,t,i,s=!1){if(Be(n)){n.forEach((x,m)=>Pr(x,e&&(Be(e)?e[m]:e),t,i,s));return}if(Ys(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Pr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?wa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===pt?a.refs={}:a.refs,u=a.setupState,f=nt(u),d=u===pt?Md:x=>wh(h,x)?!1:at(f,x),g=(x,m)=>!(m&&wh(h,m));if(c!=null&&c!==l){if(Eh(e),Rt(c))h[c]=null,d(c)&&(u[c]=null);else if(At(c)){const x=e;g(c,x.k)&&(c.value=null),x.k&&(h[x.k]=null)}}if(Ye(l))Qr(l,a,12,[o,h]);else{const x=Rt(l),m=At(l);if(x||m){const p=()=>{if(n.f){const E=x?d(l)?u[l]:h[l]:g()||!n.k?l.value:h[n.k];if(s)Be(E)&&Ic(E,r);else if(Be(E))E.includes(r)||E.push(r);else if(x)h[l]=[r],d(l)&&(u[l]=h[l]);else{const w=[r];g(l,n.k)&&(l.value=w),n.k&&(h[n.k]=w)}}else x?(h[l]=o,d(l)&&(u[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const E=()=>{p(),ta.delete(n)};E.id=-1,ta.set(n,E),rn(E,t)}else Eh(n),p()}}}function Eh(n){const e=ta.get(n);e&&(e.flags|=8,ta.delete(n))}pa().requestIdleCallback;pa().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,xa=n=>n.type.__isKeepAlive;function Gm(n,e){df(n,"a",e)}function Vm(n,e){df(n,"da",e)}function df(n,e,t=Qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ya(e,i,t),t){let s=t.parent;for(;s&&s.parent;)xa(s.parent.vnode)&&Wm(i,e,t,s),s=s.parent}}function Wm(n,e,t,i){const s=ya(e,n,i,!0);ar(()=>{Ic(i[e],s)},t)}function ya(n,e,t=Qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Mi();const a=eo(t),l=Un(e,t,n,o);return a(),Si(),l});return i?s.unshift(r):s.push(r),r}}const wi=n=>(e,t=Qt)=>{(!Wr||n==="sp")&&ya(n,(...i)=>e(...i),t)},Xm=wi("bm"),Ma=wi("m"),$m=wi("bu"),qm=wi("u"),ff=wi("bum"),ar=wi("um"),Ym=wi("sp"),jm=wi("rtg"),Km=wi("rtc");function Zm(n,e=Qt){ya("ec",n,e)}const Jm=Symbol.for("v-ndc");function qn(n,e,t,i){let s;const r=t,o=Be(n);if(o||Rt(n)){const a=o&&xi(n);let l=!1,c=!1;a&&(l=!dn(n),c=bi(n),n=ga(n)),s=new Array(n.length);for(let h=0,u=n.length;h<u;h++)s[h]=e(l?c?Qs(In(n[h])):In(n[h]):n[h],h,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(lt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];s[l]=e(n[h],h,l,r)}}else s=[];return s}function Th(n,e,t={},i,s){if(qt.ce||qt.parent&&Ys(qt.parent)&&qt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Me(),kl(Mt,null,[tt("slot",t,i&&i())],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Me();const o=r&&pf(r(t)),a=t.key||o&&o.key,l=kl(Mt,{key:(a&&!Dn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function pf(n){return n.some(e=>Vr(e)?!(e.type===$t||e.type===Mt&&!pf(e.children)):!0)?n:null}const Ul=n=>n?Uf(n)?wa(n):Ul(n.parent):null,Lr=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ul(n.parent),$root:n=>Ul(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gf(n),$forceUpdate:n=>n.f||(n.f=()=>{Vc(n.update)}),$nextTick:n=>n.n||(n.n=Zd.bind(n.proxy)),$watch:n=>Om.bind(n)}),za=(n,e)=>n!==pt&&!n.__isScriptSetup&&at(n,e),Qm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(za(i,e))return o[e]=1,i[e];if(s!==pt&&at(s,e))return o[e]=2,s[e];if(at(r,e))return o[e]=3,r[e];if(t!==pt&&at(t,e))return o[e]=4,t[e];Nl&&(o[e]=0)}}const c=Lr[e];let h,u;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==pt&&at(t,e))return o[e]=4,t[e];if(u=l.config.globalProperties,at(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return za(s,e)?(s[e]=t,!0):i!==pt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==pt&&a[0]!=="$"&&at(n,a)||za(e,a)||at(r,a)||at(i,a)||at(Lr,a)||at(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ah(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nl=!0;function eg(n){const e=gf(n),t=n.proxy,i=n.ctx;Nl=!1,e.beforeCreate&&Ch(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:f,beforeUpdate:d,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:w,unmounted:M,render:I,renderTracked:L,renderTriggered:U,errorCaptured:C,serverPrefetch:v,expose:_,inheritAttrs:P,components:O,directives:D,filters:F}=e;if(c&&tg(c,i,null),o)for(const K in o){const Y=o[K];Ye(Y)&&(i[K]=Y.bind(t))}if(s){const K=s.call(t,t);lt(K)&&(n.data=Jr(K))}if(Nl=!0,r)for(const K in r){const Y=r[K],ce=Ye(Y)?Y.bind(t,t):Ye(Y.get)?Y.get.bind(t,t):$n,pe=!Ye(Y)&&Ye(Y.set)?Y.set.bind(t):$n,xe=un({get:ce,set:pe});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Re=>xe.value=Re})}if(a)for(const K in a)mf(a[K],i,t,K);if(l){const K=Ye(l)?l.call(t):l;Reflect.ownKeys(K).forEach(Y=>{Im(Y,K[Y])})}h&&Ch(h,n,"c");function z(K,Y){Be(Y)?Y.forEach(ce=>K(ce.bind(t))):Y&&K(Y.bind(t))}if(z(Xm,u),z(Ma,f),z($m,d),z(qm,g),z(Gm,x),z(Vm,m),z(Zm,C),z(Km,L),z(jm,U),z(ff,E),z(ar,M),z(Ym,v),Be(_))if(_.length){const K=n.exposed||(n.exposed={});_.forEach(Y=>{Object.defineProperty(K,Y,{get:()=>t[Y],set:ce=>t[Y]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===$n&&(n.render=I),P!=null&&(n.inheritAttrs=P),O&&(n.components=O),D&&(n.directives=D),v&&uf(n)}function tg(n,e,t=$n){Be(n)&&(n=Fl(n));for(const i in n){const s=n[i];let r;lt(s)?"default"in s?r=Rr(s.from||i,s.default,!0):r=Rr(s.from||i):r=Rr(s),At(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ch(n,e,t){Un(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function mf(n,e,t,i){let s=i.includes(".")?sf(t,i):()=>t[i];if(Rt(n)){const r=e[n];Ye(r)&&Xn(s,r)}else if(Ye(n))Xn(s,n.bind(t));else if(lt(n))if(Be(n))n.forEach(r=>mf(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&Xn(s,r,n)}}function gf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>na(l,c,o,!0)),na(l,e,o)),lt(e)&&r.set(e,l),l}function na(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&na(n,r,t,!0),s&&s.forEach(o=>na(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ng[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ng={data:Rh,props:Ph,emits:Ph,methods:Sr,computed:Sr,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Sr,directives:Sr,watch:sg,provide:Rh,inject:ig};function Rh(n,e){return e?n?function(){return Ut(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function ig(n,e){return Sr(Fl(n),Fl(e))}function Fl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function Sr(n,e){return n?Ut(Object.create(null),n,e):e}function Ph(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Ut(Object.create(null),Ah(n),Ah(e??{})):e}function sg(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function _f(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rg=0;function og(n,e){return function(i,s=null){Ye(i)||(i=Ut({},i)),s!=null&&!lt(s)&&(s=null);const r=_f(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:rg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:kg,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ye(h.install)?(o.add(h),h.install(c,...u)):Ye(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,f){if(!l){const d=c._ceVNode||tt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,h,f),l=!0,c._container=h,h.__vue_app__=c,wa(d.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Un(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=fs;fs=c;try{return h()}finally{fs=u}}};return c}}let fs=null;const ag=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pn(e)}Modifiers`]||n[`${vs(e)}Modifiers`];function lg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),o=r&&ag(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Rt(h)?h.trim():h)),o.number&&(s=t.map(Uc)));let a,l=i[a=Ua(e)]||i[a=Ua(Pn(e))];!l&&r&&(l=i[a=Ua(vs(e))]),l&&Un(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Un(c,n,6,s)}}const cg=new WeakMap;function vf(n,e,t=!1){const i=t?cg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const h=vf(c,e,!0);h&&(a=!0,Ut(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(lt(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Ut(o,r),lt(n)&&i.set(n,o),o)}function Sa(n,e){return!n||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,vs(e))||at(n,e))}function Lh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:f,setupState:d,ctx:g,inheritAttrs:x}=n,m=ea(n);let p,E;try{if(t.shapeFlag&4){const M=s||i,I=M;p=Gn(c.call(I,M,h,u,d,f,g)),E=a}else{const M=e;p=Gn(M.length>1?M(u,{attrs:a,slots:o,emit:l}):M(u,null)),E=e.props?a:hg(a)}}catch(M){Dr.length=0,va(M,n,1),p=tt($t)}let w=p;if(E&&x!==!1){const M=Object.keys(E),{shapeFlag:I}=w;M.length&&I&7&&(r&&M.some(Dc)&&(E=ug(E,r)),w=Xi(w,E,!1,!0))}return t.dirs&&(w=Xi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Hr(w,t.transition),p=w,ea(m),p}const hg=n=>{let e;for(const t in n)(t==="class"||t==="style"||ua(t))&&((e||(e={}))[t]=n[t]);return e},ug=(n,e)=>{const t={};for(const i in n)(!Dc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function dg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Dh(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const f=h[u];if(xf(o,i,f)&&!Sa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Dh(i,o,c):!0:!!o;return!1}function Dh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(xf(e,n,r)&&!Sa(t,r))return!0}return!1}function xf(n,e,t){const i=n[t],s=e[t];return t==="style"&&lt(i)&&lt(s)?!Nc(i,s):i!==s}function fg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const yf={},Mf=()=>Object.create(yf),Sf=n=>Object.getPrototypeOf(n)===yf;function pg(n,e,t,i=!1){const s={},r=Mf();n.propsDefaults=Object.create(null),bf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:xm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function mg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=nt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let f=h[u];if(Sa(n.emitsOptions,f))continue;const d=e[f];if(l)if(at(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Pn(f);s[g]=Ol(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{bf(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!at(e,u)&&((h=vs(u))===u||!at(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=Ol(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!at(e,u))&&(delete r[u],c=!0)}c&&fi(n.attrs,"set","")}function bf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Tr(l))continue;const c=e[l];let h;s&&at(s,h=Pn(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:Sa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=nt(t),c=a||pt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=Ol(s,l,u,c[u],n,!at(c,u))}}return o}function Ol(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=eo(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vs(t))&&(i=!0))}return i}const gg=new WeakMap;function wf(n,e,t=!1){const i=t?gg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ye(n)){const h=u=>{l=!0;const[f,d]=wf(u,e,!0);Ut(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return lt(n)&&i.set(n,Xs),Xs;if(Be(r))for(let h=0;h<r.length;h++){const u=Pn(r[h]);Ih(u)&&(o[u]=pt)}else if(r)for(const h in r){const u=Pn(h);if(Ih(u)){const f=r[h],d=o[u]=Be(f)||Ye(f)?{type:f}:Ut({},f),g=d.type;let x=!1,m=!0;if(Be(g))for(let p=0;p<g.length;++p){const E=g[p],w=Ye(E)&&E.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(m=!1)}else x=Ye(g)&&g.name==="Boolean";d[0]=x,d[1]=m,(x||at(d,"default"))&&a.push(u)}}const c=[o,a];return lt(n)&&i.set(n,c),c}function Ih(n){return n[0]!=="$"&&!Tr(n)}const Wc=n=>n==="_"||n==="_ctx"||n==="$stable",Xc=n=>Be(n)?n.map(Gn):[Gn(n)],_g=(n,e,t)=>{if(e._n)return e;const i=Fi((...s)=>Xc(e(...s)),t);return i._c=!1,i},Ef=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Wc(s))continue;const r=n[s];if(Ye(r))e[s]=_g(s,r,i);else if(r!=null){const o=Xc(r);e[s]=()=>o}}},Tf=(n,e)=>{const t=Xc(e);n.slots.default=()=>t},Af=(n,e,t)=>{for(const i in e)(t||!Wc(i))&&(n[i]=e[i])},vg=(n,e,t)=>{const i=n.slots=Mf();if(n.vnode.shapeFlag&32){const s=e._;s?(Af(i,e,t),t&&Ad(i,"_",s,!0)):Ef(e,i)}else e&&Tf(n,e)},xg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Af(s,e,t):(r=!e.$stable,Ef(e,s)),o=e}else e&&(Tf(n,e),o={default:1});if(r)for(const a in s)!Wc(a)&&o[a]==null&&delete s[a]},rn=wg;function yg(n){return Mg(n)}function Mg(n,e){const t=pa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:f,setScopeId:d=$n,insertStaticContent:g}=n,x=(T,N,y,G=null,H=null,$=null,Z=void 0,ie=null,Q=!!N.dynamicChildren)=>{if(T===N)return;T&&!cs(T,N)&&(G=de(T),Re(T,H,$,!0),T=null),N.patchFlag===-2&&(Q=!1,N.dynamicChildren=null);const{type:b,ref:S,shapeFlag:k}=N;switch(b){case ba:m(T,N,y,G);break;case $t:p(T,N,y,G);break;case Ho:T==null&&E(N,y,G,Z);break;case Mt:O(T,N,y,G,H,$,Z,ie,Q);break;default:k&1?I(T,N,y,G,H,$,Z,ie,Q):k&6?D(T,N,y,G,H,$,Z,ie,Q):(k&64||k&128)&&b.process(T,N,y,G,H,$,Z,ie,Q,Pe)}S!=null&&H?Pr(S,T&&T.ref,$,N||T,!N):S==null&&T&&T.ref!=null&&Pr(T.ref,null,$,T,!0)},m=(T,N,y,G)=>{if(T==null)i(N.el=a(N.children),y,G);else{const H=N.el=T.el;N.children!==T.children&&c(H,N.children)}},p=(T,N,y,G)=>{T==null?i(N.el=l(N.children||""),y,G):N.el=T.el},E=(T,N,y,G)=>{[T.el,T.anchor]=g(T.children,N,y,G,T.el,T.anchor)},w=({el:T,anchor:N},y,G)=>{let H;for(;T&&T!==N;)H=f(T),i(T,y,G),T=H;i(N,y,G)},M=({el:T,anchor:N})=>{let y;for(;T&&T!==N;)y=f(T),s(T),T=y;s(N)},I=(T,N,y,G,H,$,Z,ie,Q)=>{if(N.type==="svg"?Z="svg":N.type==="math"&&(Z="mathml"),T==null)L(N,y,G,H,$,Z,ie,Q);else{const b=T.el&&T.el._isVueCE?T.el:null;try{b&&b._beginPatch(),v(T,N,H,$,Z,ie,Q)}finally{b&&b._endPatch()}}},L=(T,N,y,G,H,$,Z,ie)=>{let Q,b;const{props:S,shapeFlag:k,transition:j,dirs:ee}=T;if(Q=T.el=o(T.type,$,S&&S.is,S),k&8?h(Q,T.children):k&16&&C(T.children,Q,null,G,H,Ha(T,$),Z,ie),ee&&Ki(T,null,G,"created"),U(Q,T,T.scopeId,Z,G),S){for(const fe in S)fe!=="value"&&!Tr(fe)&&r(Q,fe,null,S[fe],$,G);"value"in S&&r(Q,"value",null,S.value,$),(b=S.onVnodeBeforeMount)&&On(b,G,T)}ee&&Ki(T,null,G,"beforeMount");const J=Sg(H,j);J&&j.beforeEnter(Q),i(Q,N,y),((b=S&&S.onVnodeMounted)||J||ee)&&rn(()=>{b&&On(b,G,T),J&&j.enter(Q),ee&&Ki(T,null,G,"mounted")},H)},U=(T,N,y,G,H)=>{if(y&&d(T,y),G)for(let $=0;$<G.length;$++)d(T,G[$]);if(H){let $=H.subTree;if(N===$||Lf($.type)&&($.ssContent===N||$.ssFallback===N)){const Z=H.vnode;U(T,Z,Z.scopeId,Z.slotScopeIds,H.parent)}}},C=(T,N,y,G,H,$,Z,ie,Q=0)=>{for(let b=Q;b<T.length;b++){const S=T[b]=ie?di(T[b]):Gn(T[b]);x(null,S,N,y,G,H,$,Z,ie)}},v=(T,N,y,G,H,$,Z)=>{const ie=N.el=T.el;let{patchFlag:Q,dynamicChildren:b,dirs:S}=N;Q|=T.patchFlag&16;const k=T.props||pt,j=N.props||pt;let ee;if(y&&Zi(y,!1),(ee=j.onVnodeBeforeUpdate)&&On(ee,y,N,T),S&&Ki(N,T,y,"beforeUpdate"),y&&Zi(y,!0),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&h(ie,""),b?_(T.dynamicChildren,b,ie,y,G,Ha(N,H),$):Z||Y(T,N,ie,null,y,G,Ha(N,H),$,!1),Q>0){if(Q&16)P(ie,k,j,y,H);else if(Q&2&&k.class!==j.class&&r(ie,"class",null,j.class,H),Q&4&&r(ie,"style",k.style,j.style,H),Q&8){const J=N.dynamicProps;for(let fe=0;fe<J.length;fe++){const le=J[fe],ge=k[le],ke=j[le];(ke!==ge||le==="value")&&r(ie,le,ge,ke,H,y)}}Q&1&&T.children!==N.children&&h(ie,N.children)}else!Z&&b==null&&P(ie,k,j,y,H);((ee=j.onVnodeUpdated)||S)&&rn(()=>{ee&&On(ee,y,N,T),S&&Ki(N,T,y,"updated")},G)},_=(T,N,y,G,H,$,Z)=>{for(let ie=0;ie<N.length;ie++){const Q=T[ie],b=N[ie],S=Q.el&&(Q.type===Mt||!cs(Q,b)||Q.shapeFlag&198)?u(Q.el):y;x(Q,b,S,null,G,H,$,Z,!0)}},P=(T,N,y,G,H)=>{if(N!==y){if(N!==pt)for(const $ in N)!Tr($)&&!($ in y)&&r(T,$,N[$],null,H,G);for(const $ in y){if(Tr($))continue;const Z=y[$],ie=N[$];Z!==ie&&$!=="value"&&r(T,$,ie,Z,H,G)}"value"in y&&r(T,"value",N.value,y.value,H)}},O=(T,N,y,G,H,$,Z,ie,Q)=>{const b=N.el=T?T.el:a(""),S=N.anchor=T?T.anchor:a("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:ee}=N;ee&&(ie=ie?ie.concat(ee):ee),T==null?(i(b,y,G),i(S,y,G),C(N.children||[],y,S,H,$,Z,ie,Q)):k>0&&k&64&&j&&T.dynamicChildren&&T.dynamicChildren.length===j.length?(_(T.dynamicChildren,j,y,H,$,Z,ie),(N.key!=null||H&&N===H.subTree)&&Cf(T,N,!0)):Y(T,N,y,S,H,$,Z,ie,Q)},D=(T,N,y,G,H,$,Z,ie,Q)=>{N.slotScopeIds=ie,T==null?N.shapeFlag&512?H.ctx.activate(N,y,G,Z,Q):F(N,y,G,H,$,Z,Q):V(T,N,Q)},F=(T,N,y,G,H,$,Z)=>{const ie=T.component=Lg(T,G,H);if(xa(T)&&(ie.ctx.renderer=Pe),Dg(ie,!1,Z),ie.asyncDep){if(H&&H.registerDep(ie,z,Z),!T.el){const Q=ie.subTree=tt($t);p(null,Q,N,y),T.placeholder=Q.el}}else z(ie,T,N,y,H,$,Z)},V=(T,N,y)=>{const G=N.component=T.component;if(dg(T,N,y))if(G.asyncDep&&!G.asyncResolved){K(G,N,y);return}else G.next=N,G.update();else N.el=T.el,G.vnode=N},z=(T,N,y,G,H,$,Z)=>{const ie=()=>{if(T.isMounted){let{next:k,bu:j,u:ee,parent:J,vnode:fe}=T;{const ye=Rf(T);if(ye){k&&(k.el=fe.el,K(T,k,Z)),ye.asyncDep.then(()=>{rn(()=>{T.isUnmounted||b()},H)});return}}let le=k,ge;Zi(T,!1),k?(k.el=fe.el,K(T,k,Z)):k=fe,j&&zo(j),(ge=k.props&&k.props.onVnodeBeforeUpdate)&&On(ge,J,k,fe),Zi(T,!0);const ke=Lh(T),he=T.subTree;T.subTree=ke,x(he,ke,u(he.el),de(he),T,H,$),k.el=ke.el,le===null&&fg(T,ke.el),ee&&rn(ee,H),(ge=k.props&&k.props.onVnodeUpdated)&&rn(()=>On(ge,J,k,fe),H)}else{let k;const{el:j,props:ee}=N,{bm:J,m:fe,parent:le,root:ge,type:ke}=T,he=Ys(N);Zi(T,!1),J&&zo(J),!he&&(k=ee&&ee.onVnodeBeforeMount)&&On(k,le,N),Zi(T,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(ke,T.parent?T.parent.type:void 0);const ye=T.subTree=Lh(T);x(null,ye,y,G,T,H,$),N.el=ye.el}if(fe&&rn(fe,H),!he&&(k=ee&&ee.onVnodeMounted)){const ye=N;rn(()=>On(k,le,ye),H)}(N.shapeFlag&256||le&&Ys(le.vnode)&&le.vnode.shapeFlag&256)&&T.a&&rn(T.a,H),T.isMounted=!0,N=y=G=null}};T.scope.on();const Q=T.effect=new Ud(ie);T.scope.off();const b=T.update=Q.run.bind(Q),S=T.job=Q.runIfDirty.bind(Q);S.i=T,S.id=T.uid,Q.scheduler=()=>Vc(S),Zi(T,!0),b()},K=(T,N,y)=>{N.component=T;const G=T.vnode.props;T.vnode=N,T.next=null,mg(T,N.props,G,y),xg(T,N.children,y),Mi(),Sh(T),Si()},Y=(T,N,y,G,H,$,Z,ie,Q=!1)=>{const b=T&&T.children,S=T?T.shapeFlag:0,k=N.children,{patchFlag:j,shapeFlag:ee}=N;if(j>0){if(j&128){pe(b,k,y,G,H,$,Z,ie,Q);return}else if(j&256){ce(b,k,y,G,H,$,Z,ie,Q);return}}ee&8?(S&16&&Ce(b,H,$),k!==b&&h(y,k)):S&16?ee&16?pe(b,k,y,G,H,$,Z,ie,Q):Ce(b,H,$,!0):(S&8&&h(y,""),ee&16&&C(k,y,G,H,$,Z,ie,Q))},ce=(T,N,y,G,H,$,Z,ie,Q)=>{T=T||Xs,N=N||Xs;const b=T.length,S=N.length,k=Math.min(b,S);let j;for(j=0;j<k;j++){const ee=N[j]=Q?di(N[j]):Gn(N[j]);x(T[j],ee,y,null,H,$,Z,ie,Q)}b>S?Ce(T,H,$,!0,!1,k):C(N,y,G,H,$,Z,ie,Q,k)},pe=(T,N,y,G,H,$,Z,ie,Q)=>{let b=0;const S=N.length;let k=T.length-1,j=S-1;for(;b<=k&&b<=j;){const ee=T[b],J=N[b]=Q?di(N[b]):Gn(N[b]);if(cs(ee,J))x(ee,J,y,null,H,$,Z,ie,Q);else break;b++}for(;b<=k&&b<=j;){const ee=T[k],J=N[j]=Q?di(N[j]):Gn(N[j]);if(cs(ee,J))x(ee,J,y,null,H,$,Z,ie,Q);else break;k--,j--}if(b>k){if(b<=j){const ee=j+1,J=ee<S?N[ee].el:G;for(;b<=j;)x(null,N[b]=Q?di(N[b]):Gn(N[b]),y,J,H,$,Z,ie,Q),b++}}else if(b>j)for(;b<=k;)Re(T[b],H,$,!0),b++;else{const ee=b,J=b,fe=new Map;for(b=J;b<=j;b++){const _e=N[b]=Q?di(N[b]):Gn(N[b]);_e.key!=null&&fe.set(_e.key,b)}let le,ge=0;const ke=j-J+1;let he=!1,ye=0;const Fe=new Array(ke);for(b=0;b<ke;b++)Fe[b]=0;for(b=ee;b<=k;b++){const _e=T[b];if(ge>=ke){Re(_e,H,$,!0);continue}let Xe;if(_e.key!=null)Xe=fe.get(_e.key);else for(le=J;le<=j;le++)if(Fe[le-J]===0&&cs(_e,N[le])){Xe=le;break}Xe===void 0?Re(_e,H,$,!0):(Fe[Xe-J]=b+1,Xe>=ye?ye=Xe:he=!0,x(_e,N[Xe],y,null,H,$,Z,ie,Q),ge++)}const He=he?bg(Fe):Xs;for(le=He.length-1,b=ke-1;b>=0;b--){const _e=J+b,Xe=N[_e],qe=N[_e+1],ct=_e+1<S?qe.el||Pf(qe):G;Fe[b]===0?x(null,Xe,y,ct,H,$,Z,ie,Q):he&&(le<0||b!==He[le]?xe(Xe,y,ct,2):le--)}}},xe=(T,N,y,G,H=null)=>{const{el:$,type:Z,transition:ie,children:Q,shapeFlag:b}=T;if(b&6){xe(T.component.subTree,N,y,G);return}if(b&128){T.suspense.move(N,y,G);return}if(b&64){Z.move(T,N,y,Pe);return}if(Z===Mt){i($,N,y);for(let k=0;k<Q.length;k++)xe(Q[k],N,y,G);i(T.anchor,N,y);return}if(Z===Ho){w(T,N,y);return}if(G!==2&&b&1&&ie)if(G===0)ie.beforeEnter($),i($,N,y),rn(()=>ie.enter($),H);else{const{leave:k,delayLeave:j,afterLeave:ee}=ie,J=()=>{T.ctx.isUnmounted?s($):i($,N,y)},fe=()=>{$._isLeaving&&$[Bn](!0),k($,()=>{J(),ee&&ee()})};j?j($,J,fe):fe()}else i($,N,y)},Re=(T,N,y,G=!1,H=!1)=>{const{type:$,props:Z,ref:ie,children:Q,dynamicChildren:b,shapeFlag:S,patchFlag:k,dirs:j,cacheIndex:ee}=T;if(k===-2&&(H=!1),ie!=null&&(Mi(),Pr(ie,null,y,T,!0),Si()),ee!=null&&(N.renderCache[ee]=void 0),S&256){N.ctx.deactivate(T);return}const J=S&1&&j,fe=!Ys(T);let le;if(fe&&(le=Z&&Z.onVnodeBeforeUnmount)&&On(le,N,T),S&6)ue(T.component,y,G);else{if(S&128){T.suspense.unmount(y,G);return}J&&Ki(T,null,N,"beforeUnmount"),S&64?T.type.remove(T,N,y,Pe,G):b&&!b.hasOnce&&($!==Mt||k>0&&k&64)?Ce(b,N,y,!1,!0):($===Mt&&k&384||!H&&S&16)&&Ce(Q,N,y),G&&We(T)}(fe&&(le=Z&&Z.onVnodeUnmounted)||J)&&rn(()=>{le&&On(le,N,T),J&&Ki(T,null,N,"unmounted")},y)},We=T=>{const{type:N,el:y,anchor:G,transition:H}=T;if(N===Mt){oe(y,G);return}if(N===Ho){M(T);return}const $=()=>{s(y),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(T.shapeFlag&1&&H&&!H.persisted){const{leave:Z,delayLeave:ie}=H,Q=()=>Z(y,$);ie?ie(T.el,$,Q):Q()}else $()},oe=(T,N)=>{let y;for(;T!==N;)y=f(T),s(T),T=y;s(N)},ue=(T,N,y)=>{const{bum:G,scope:H,job:$,subTree:Z,um:ie,m:Q,a:b}=T;Uh(Q),Uh(b),G&&zo(G),H.stop(),$&&($.flags|=8,Re(Z,T,N,y)),ie&&rn(ie,N),rn(()=>{T.isUnmounted=!0},N)},Ce=(T,N,y,G=!1,H=!1,$=0)=>{for(let Z=$;Z<T.length;Z++)Re(T[Z],N,y,G,H)},de=T=>{if(T.shapeFlag&6)return de(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const N=f(T.anchor||T.el),y=N&&N[km];return y?f(y):N};let Le=!1;const ze=(T,N,y)=>{let G;T==null?N._vnode&&(Re(N._vnode,null,null,!0),G=N._vnode.component):x(N._vnode||null,T,N,null,null,null,y),N._vnode=T,Le||(Le=!0,Sh(G),Qd(),Le=!1)},Pe={p:x,um:Re,m:xe,r:We,mt:F,mc:C,pc:Y,pbc:_,n:de,o:n};return{render:ze,hydrate:void 0,createApp:og(ze)}}function Ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Sg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Cf(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Cf(o,a)),a.type===ba&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===$t&&!a.el&&(a.el=o.el)}}function bg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Rf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rf(e)}function Uh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Pf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Pf(e.subTree):null}const Lf=n=>n.__isSuspense;function wg(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Dm(n)}const Mt=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),Dr=[];let hn=null;function Me(n=!1){Dr.push(hn=n?null:[])}function Eg(){Dr.pop(),hn=Dr[Dr.length-1]||null}let Gr=1;function ia(n,e=!1){Gr+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function Df(n){return n.dynamicChildren=Gr>0?hn||Xs:null,Eg(),Gr>0&&hn&&hn.push(n),n}function be(n,e,t,i,s,r){return Df(A(n,e,t,i,s,r,!0))}function kl(n,e,t,i,s){return Df(tt(n,e,t,i,s,!0))}function Vr(n){return n?n.__v_isVNode===!0:!1}function cs(n,e){return n.type===e.type&&n.key===e.key}const If=({key:n})=>n??null,Go=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||At(n)||Ye(n)?{i:qt,r:n,k:e,f:!!t}:n:null);function A(n,e=null,t=null,i=0,s=null,r=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&If(e),ref:e&&Go(e),scopeId:tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return a?($c(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Gr>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const tt=Tg;function Tg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Jm)&&(n=$t),Vr(n)){const a=Xi(n,e,!0);return t&&$c(a,t),Gr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(Fg(n)&&(n=n.__vccOpts),e){e=Ag(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=mt(a)),lt(l)&&(_a(l)&&!Be(l)&&(l=Ut({},l)),e.style=ma(l))}const o=Rt(n)?1:Lf(n)?128:rf(n)?64:lt(n)?4:Ye(n)?2:0;return A(n,e,t,i,s,o,r,!0)}function Ag(n){return n?_a(n)||Sf(n)?Ut({},n):n:null}function Xi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Cg(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&If(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(Go(e)):[r,Go(e)]:Go(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hr(h,l.clone(h)),h}function Gi(n=" ",e=0){return tt(ba,null,n,e)}function zn(n,e){const t=tt(Ho,null,n);return t.staticCount=e,t}function Lt(n="",e=!1){return e?(Me(),kl($t,null,n)):tt($t,null,n)}function Gn(n){return n==null||typeof n=="boolean"?tt($t):Be(n)?tt(Mt,null,n.slice()):Vr(n)?di(n):tt(ba,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xi(n)}function $c(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$c(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Sf(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),i&64?(t=16,e=[Gi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Cg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=mt([e.class,i.class]));else if(s==="style")e.style=ma([e.style,i.style]);else if(ua(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){Un(n,e,7,[t,i])}const Rg=_f();let Pg=0;function Lg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Rg,r={uid:Pg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wf(i,s),emitsOptions:vf(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=lg.bind(null,r),n.ce&&n.ce(r),r}let Qt=null;const qc=()=>Qt||qt;let sa,Bl;{const n=pa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};sa=e("__VUE_INSTANCE_SETTERS__",t=>Qt=t),Bl=e("__VUE_SSR_SETTERS__",t=>Wr=t)}const eo=n=>{const e=Qt;return sa(n),n.scope.on(),()=>{n.scope.off(),sa(e)}},Nh=()=>{Qt&&Qt.scope.off(),sa(null)};function Uf(n){return n.vnode.shapeFlag&4}let Wr=!1;function Dg(n,e=!1,t=!1){e&&Bl(e);const{props:i,children:s}=n.vnode,r=Uf(n);pg(n,i,r,e),vg(n,s,t||e);const o=r?Ig(n,e):void 0;return e&&Bl(!1),o}function Ig(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qm);const{setup:i}=t;if(i){Mi();const s=n.setupContext=i.length>1?Ng(n):null,r=eo(n),o=Qr(i,n,0,[n.props,s]),a=bd(o);if(Si(),r(),(a||n.sp)&&!Ys(n)&&uf(n),a){if(o.then(Nh,Nh),e)return o.then(l=>{Fh(n,l)}).catch(l=>{va(l,n,0)});n.asyncDep=o}else Fh(n,o)}else Nf(n)}function Fh(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=jd(e)),Nf(n)}function Nf(n,e,t){const i=n.type;n.render||(n.render=i.render||$n);{const s=eo(n);Mi();try{eg(n)}finally{Si(),s()}}}const Ug={get(n,e){return Xt(n,"get",""),n[e]}};function Ng(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ug),slots:n.slots,emit:n.emit,expose:e}}function wa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jd(Gc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}})):n.proxy}function Fg(n){return Ye(n)&&"__vccOpts"in n}const un=(n,e)=>Am(n,e,Wr);function Og(n,e,t){try{ia(-1);const i=arguments.length;return i===2?lt(e)&&!Be(e)?Vr(e)?tt(n,null,[e]):tt(n,e):tt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Vr(t)&&(t=[t]),tt(n,e,t))}finally{ia(1)}}const kg="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zl;const Oh=typeof window<"u"&&window.trustedTypes;if(Oh)try{zl=Oh.createPolicy("vue",{createHTML:n=>n})}catch{}const Ff=zl?n=>zl.createHTML(n):n=>n,Bg="http://www.w3.org/2000/svg",zg="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,kh=ui&&ui.createElement("template"),Hg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ui.createElementNS(Bg,n):e==="mathml"?ui.createElementNS(zg,n):t?ui.createElement(n,{is:t}):ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{kh.innerHTML=Ff(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=kh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ai="transition",mr="animation",Xr=Symbol("_vtc"),Of={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gg=Ut({},of,Of),Vg=n=>(n.displayName="Transition",n.props=Gg,n),Wg=Vg((n,{slots:e})=>Og(Hm,Xg(n),e)),Ji=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},Bh=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function Xg(n){const e={};for(const O in n)O in Of||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:h=a,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=$g(s),x=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:w,onLeave:M,onLeaveCancelled:I,onBeforeAppear:L=p,onAppear:U=E,onAppearCancelled:C=w}=e,v=(O,D,F,V)=>{O._enterCancelled=V,Qi(O,D?h:a),Qi(O,D?c:o),F&&F()},_=(O,D)=>{O._isLeaving=!1,Qi(O,u),Qi(O,d),Qi(O,f),D&&D()},P=O=>(D,F)=>{const V=O?U:E,z=()=>v(D,O,F);Ji(V,[D,z]),zh(()=>{Qi(D,O?l:r),ii(D,O?h:a),Bh(V)||Hh(D,i,x,z)})};return Ut(e,{onBeforeEnter(O){Ji(p,[O]),ii(O,r),ii(O,o)},onBeforeAppear(O){Ji(L,[O]),ii(O,l),ii(O,c)},onEnter:P(!1),onAppear:P(!0),onLeave(O,D){O._isLeaving=!0;const F=()=>_(O,D);ii(O,u),O._enterCancelled?(ii(O,f),Wh(O)):(Wh(O),ii(O,f)),zh(()=>{O._isLeaving&&(Qi(O,u),ii(O,d),Bh(M)||Hh(O,i,m,F))}),Ji(M,[O,F])},onEnterCancelled(O){v(O,!1,void 0,!0),Ji(w,[O])},onAppearCancelled(O){v(O,!0,void 0,!0),Ji(C,[O])},onLeaveCancelled(O){_(O),Ji(I,[O])}})}function $g(n){if(n==null)return null;if(lt(n))return[Ga(n.enter),Ga(n.leave)];{const e=Ga(n);return[e,e]}}function Ga(n){return Xp(n)}function ii(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Xr]||(n[Xr]=new Set)).add(e)}function Qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Xr];t&&(t.delete(e),t.size||(n[Xr]=void 0))}function zh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let qg=0;function Hh(n,e,t,i){const s=n._endId=++qg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Yg(n,e);if(!o)return i();const c=o+"end";let h=0;const u=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++h>=l&&u()};setTimeout(()=>{h<l&&u()},a+1),n.addEventListener(c,f)}function Yg(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Ai}Delay`),r=i(`${Ai}Duration`),o=Gh(s,r),a=i(`${mr}Delay`),l=i(`${mr}Duration`),c=Gh(a,l);let h=null,u=0,f=0;e===Ai?o>0&&(h=Ai,u=o,f=r.length):e===mr?c>0&&(h=mr,u=c,f=l.length):(u=Math.max(o,c),h=u>0?o>c?Ai:mr:null,f=h?h===Ai?r.length:l.length:0);const d=h===Ai&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ai}Property`).toString());return{type:h,timeout:u,propCount:f,hasTransform:d}}function Gh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Vh(t)+Vh(n[i])))}function Vh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Wh(n){return(n?n.ownerDocument:document).body.offsetHeight}function jg(n,e,t){const i=n[Xr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xh=Symbol("_vod"),Kg=Symbol("_vsh"),Zg=Symbol(""),Jg=/(?:^|;)\s*display\s*:/;function Qg(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vo(i,a,"")}else for(const o in e)t[o]==null&&Vo(i,o,"");for(const o in t)o==="display"&&(r=!0),Vo(i,o,t[o])}else if(s){if(e!==t){const o=i[Zg];o&&(t+=";"+o),i.cssText=t,r=Jg.test(t)}}else e&&n.removeAttribute("style");Xh in n&&(n[Xh]=r?i.display:"",n[Kg]&&(i.display="none"))}const $h=/\s*!important$/;function Vo(n,e,t){if(Be(t))t.forEach(i=>Vo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=e0(n,e);$h.test(t)?n.setProperty(vs(i),t.replace($h,""),"important"):n[i]=t}}const qh=["Webkit","Moz","ms"],Va={};function e0(n,e){const t=Va[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return Va[e]=i;i=Td(i);for(let s=0;s<qh.length;s++){const r=qh[s]+i;if(r in n)return Va[e]=r}return e}const Yh="http://www.w3.org/1999/xlink";function jh(n,e,t,i,s,r=Zp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yh,e.slice(6,e.length)):n.setAttributeNS(Yh,e,t):t==null||r&&!Cd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Dn(t)?String(t):t)}function Kh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ff(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Hs(n,e,t,i){n.addEventListener(e,t,i)}function t0(n,e,t,i){n.removeEventListener(e,t,i)}const Zh=Symbol("_vei");function n0(n,e,t,i,s=null){const r=n[Zh]||(n[Zh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=i0(e);if(i){const c=r[e]=o0(i,s);Hs(n,a,c,l)}else o&&(t0(n,a,o,l),r[e]=void 0)}}const Jh=/(?:Once|Passive|Capture)$/;function i0(n){let e;if(Jh.test(n)){e={};let i;for(;i=n.match(Jh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vs(n.slice(2)),e]}let Wa=0;const s0=Promise.resolve(),r0=()=>Wa||(s0.then(()=>Wa=0),Wa=Date.now());function o0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Un(a0(i,t.value),e,5,[i])};return t.value=n,t.attached=r0(),t}function a0(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Qh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,l0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?jg(n,i,o):e==="style"?Qg(n,t,i):ua(e)?Dc(e)||n0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c0(n,e,i,o))?(Kh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jh(n,e,i,o,r,e!=="value")):n._isVueCE&&(h0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?Kh(n,Pn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jh(n,e,i,o))};function c0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qh(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&Rt(t)?!1:e in n}function h0(n,e){const t=n._def.props;if(!t)return!1;const i=Pn(e);return Array.isArray(t)?t.some(s=>Pn(s)===i):Object.keys(t).some(s=>Pn(s)===i)}const eu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>zo(e,t):e};function u0(n){n.target.composing=!0}function tu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign");function nu(n,e,t){return e&&(n=n.trim()),t&&(n=Uc(n)),n}const zi={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Xa]=eu(s);const r=i||s.props&&s.props.type==="number";Hs(n,e?"change":"input",o=>{o.target.composing||n[Xa](nu(n.value,t,r))}),(t||r)&&Hs(n,"change",()=>{n.value=nu(n.value,t,r)}),e||(Hs(n,"compositionstart",u0),Hs(n,"compositionend",tu),Hs(n,"change",tu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Xa]=eu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Uc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},d0=["ctrl","shift","alt","meta"],f0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>d0.some(t=>n[`${t}Key`]&&!e.includes(t))},Wo=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=f0[e[o]];if(a&&a(s,e))return}return n(s,...r)})},p0=Ut({patchProp:l0},Hg);let iu;function m0(){return iu||(iu=yg(p0))}const g0=(...n)=>{const e=m0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=v0(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,_0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function v0(n){return Rt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kf;const Ea=n=>kf=n,Bf=Symbol();function Hl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ir;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ir||(Ir={}));function x0(){const n=Dd(!0),e=n.run(()=>Oe({}));let t=[],i=[];const s=Gc({install(r){Ea(s),s._a=r,r.provide(Bf,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const zf=()=>{};function su(n,e,t,i=zf){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Id()&&Qp(s),s}function bs(n,...e){n.slice().forEach(t=>{t(...e)})}const y0=n=>n(),ru=Symbol(),$a=Symbol();function Gl(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Hl(s)&&Hl(i)&&n.hasOwnProperty(t)&&!At(i)&&!xi(i)?n[t]=Gl(s,i):n[t]=i}return n}const M0=Symbol();function S0(n){return!Hl(n)||!n.hasOwnProperty(M0)}const{assign:Ui}=Object;function b0(n){return!!(At(n)&&n.effect)}function w0(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const h=bm(t.state.value[n]);return Ui(h,r,Object.keys(o||{}).reduce((u,f)=>(u[f]=Gc(un(()=>{Ea(t);const d=t._s.get(n);return o[f].call(d,d)})),u),{}))}return l=Hf(n,c,e,t,i,!0),l}function Hf(n,e,t={},i,s,r){let o;const a=Ui({actions:{}},t),l={deep:!0};let c,h,u=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let x;function m(C){let v;c=h=!1,typeof C=="function"?(C(i.state.value[n]),v={type:Ir.patchFunction,storeId:n,events:d}):(Gl(i.state.value[n],C),v={type:Ir.patchObject,payload:C,storeId:n,events:d});const _=x=Symbol();Zd().then(()=>{x===_&&(c=!0)}),h=!0,bs(u,v,i.state.value[n])}const p=r?function(){const{state:v}=t,_=v?v():{};this.$patch(P=>{Ui(P,_)})}:zf;function E(){o.stop(),u=[],f=[],i._s.delete(n)}const w=(C,v="")=>{if(ru in C)return C[$a]=v,C;const _=function(){Ea(i);const P=Array.from(arguments),O=[],D=[];function F(K){O.push(K)}function V(K){D.push(K)}bs(f,{args:P,name:_[$a],store:I,after:F,onError:V});let z;try{z=C.apply(this&&this.$id===n?this:I,P)}catch(K){throw bs(D,K),K}return z instanceof Promise?z.then(K=>(bs(O,K),K)).catch(K=>(bs(D,K),Promise.reject(K))):(bs(O,z),z)};return _[ru]=!0,_[$a]=v,_},M={_p:i,$id:n,$onAction:su.bind(null,f),$patch:m,$reset:p,$subscribe(C,v={}){const _=su(u,C,v.detached,()=>P()),P=o.run(()=>Xn(()=>i.state.value[n],O=>{(v.flush==="sync"?h:c)&&C({storeId:n,type:Ir.direct,events:d},O)},Ui({},l,v)));return _},$dispose:E},I=Jr(M);i._s.set(n,I);const U=(i._a&&i._a.runWithContext||y0)(()=>i._e.run(()=>(o=Dd()).run(()=>e({action:w}))));for(const C in U){const v=U[C];if(At(v)&&!b0(v)||xi(v))r||(g&&S0(v)&&(At(v)?v.value=g[C]:Gl(v,g[C])),i.state.value[n][C]=v);else if(typeof v=="function"){const _=w(v,C);U[C]=_,a.actions[C]=v}}return Ui(I,U),Ui(nt(I),U),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:C=>{m(v=>{Ui(v,C)})}}),i._p.forEach(C=>{Ui(I,o.run(()=>C({store:I,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(I.$state,g),c=!0,h=!0,I}/*! #__NO_SIDE_EFFECTS__ */function E0(n,e,t){let i,s;const r=typeof e=="function";i=n,s=r?t:e;function o(a,l){const c=Um();return a=a||(c?Rr(Bf,null):null),a&&Ea(a),a=kf,a._s.has(i)||(r?Hf(i,e,s,a):w0(i,s,a)),a._s.get(i)}return o.$id=i,o}const T0={class:"top-toolbar"},A0={class:"toolbar-controls"},C0={class:"toolbar-group"},R0={class:"zoom-display"},P0={class:"zoom-value"},L0={class:"toolbar-group"},D0={class:"toolbar-group"},I0={class:"toolbar-group"},U0=["title"],N0={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F0={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O0=Nn({__name:"TopToolbar",props:{zoom:{},viewPreset:{},autoRotate:{type:Boolean},showGrid:{type:Boolean},isDark:{type:Boolean}},emits:["zoom-in","zoom-out","zoom-fit","view-preset","toggle-auto-rotate","toggle-grid","toggle-theme"],setup(n){return(e,t)=>(Me(),be("div",T0,[t[25]||(t[25]=zn('<div class="logo-section" data-v-fdbab8bf><div class="logo-icon" data-v-fdbab8bf><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M3 3H21V21H3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M3 9H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M9 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M15 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3 15H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path></svg></div><h1 class="title" data-v-fdbab8bf>Bungkus Indonesia</h1></div>',1)),A("div",A0,[t[21]||(t[21]=zn('<div class="toolbar-group" data-v-fdbab8bf><button class="toolbar-btn" disabled="true" title="Undo (Ctrl+Z)" data-v-fdbab8bf><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M4 6L2 8L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M2 8H10C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg></button><button class="toolbar-btn" disabled="true" title="Redo (Ctrl+Y)" data-v-fdbab8bf><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M12 6L14 8L12 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M14 8H6C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg></button></div><div class="toolbar-divider" data-v-fdbab8bf></div>',2)),A("div",C0,[A("button",{class:"toolbar-btn",onClick:t[0]||(t[0]=i=>e.$emit("zoom-out")),title:"Zoom Out (-)"},[...t[10]||(t[10]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),A("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"})],-1)])]),A("div",R0,[A("span",P0,Ge(n.zoom)+"%",1)]),A("button",{class:"toolbar-btn",onClick:t[1]||(t[1]=i=>e.$emit("zoom-in")),title:"Zoom In (+)"},[...t[11]||(t[11]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),A("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),A("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"})],-1)])]),A("button",{class:"toolbar-btn",onClick:t[2]||(t[2]=i=>e.$emit("zoom-fit")),title:"Fit to Screen (Space)"},[...t[12]||(t[12]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M5 5L3 3M5 11L3 13M11 5L13 3M11 11L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),A("rect",{x:"4",y:"4",width:"8",height:"8",rx:"1",stroke:"currentColor","stroke-width":"1.5"})],-1)])])]),t[22]||(t[22]=A("div",{class:"toolbar-divider"},null,-1)),A("div",L0,[A("button",{class:mt(["toolbar-btn",{active:n.viewPreset==="front"}]),onClick:t[3]||(t[3]=i=>e.$emit("view-preset","front")),title:"Front View (1)"},[...t[13]||(t[13]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("rect",{x:"3",y:"3",width:"10",height:"10",rx:"1",stroke:"currentColor","stroke-width":"1.5"}),A("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5"}),A("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2),A("button",{class:mt(["toolbar-btn",{active:n.viewPreset==="back"}]),onClick:t[4]||(t[4]=i=>e.$emit("view-preset","back")),title:"Back View (2)"},[...t[14]||(t[14]=[zn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></rect><path d="M8 3V13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><circle cx="8" cy="8" r="1" fill="currentColor" data-v-fdbab8bf></circle></svg>',1)])],2),A("button",{class:mt(["toolbar-btn",{active:n.viewPreset==="top"}]),onClick:t[5]||(t[5]=i=>e.$emit("view-preset","top")),title:"Top View (3)"},[...t[15]||(t[15]=[zn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></rect><path d="M8 3V13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M5 11L11 5" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path></svg>',1)])],2),A("button",{class:mt(["toolbar-btn",{active:n.viewPreset==="isometric"}]),onClick:t[6]||(t[6]=i=>e.$emit("view-preset","isometric")),title:"Isometric View (4)"},[...t[16]||(t[16]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org2000/svg"},[A("path",{d:"M3 13L8 3L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),A("path",{d:"M3 13H13",stroke:"currentColor","stroke-width":"1.5"}),A("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2)]),t[23]||(t[23]=A("div",{class:"toolbar-divider"},null,-1)),A("div",D0,[A("button",{class:mt(["toolbar-btn",{active:n.autoRotate}]),onClick:t[7]||(t[7]=i=>e.$emit("toggle-auto-rotate")),title:"Auto Rotate (R)"},[...t[17]||(t[17]=[zn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></circle><path d="M8 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3 8H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg>',1)])],2),A("button",{class:mt(["toolbar-btn",{active:n.showGrid}]),onClick:t[8]||(t[8]=i=>e.$emit("toggle-grid")),title:"Toggle Grid (G)"},[...t[18]||(t[18]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",stroke:"currentColor","stroke-width":"1.5"}),A("path",{d:"M8 2V14",stroke:"currentColor","stroke-width":"1.5"}),A("path",{d:"M2 8H14",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2)]),t[24]||(t[24]=A("div",{class:"toolbar-divider"},null,-1)),A("div",I0,[A("button",{class:"toolbar-btn",onClick:t[9]||(t[9]=i=>e.$emit("toggle-theme")),title:n.isDark?"Switch to Light Theme":"Switch to Dark Theme"},[n.isDark?(Me(),be("svg",N0,[...t[19]||(t[19]=[zn('<circle cx="8" cy="8" r="4" fill="currentColor" data-v-fdbab8bf></circle><path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path>',9)])])):(Me(),be("svg",F0,[...t[20]||(t[20]=[zn('<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path>',9)])]))],8,U0)])])]))}}),Zn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},k0=Zn(O0,[["__scopeId","data-v-fdbab8bf"]]),B0={class:"panel-header"},z0={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H0={key:0,d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},G0={key:1,d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},V0={key:0,class:"panel-content"},W0={class:"category-tabs"},X0=["onClick"],$0={class:"search-section"},q0={class:"search-input-wrapper"},Y0={class:"template-grid"},j0=["onClick"],K0={class:"template-thumbnail"},Z0={key:0,class:"premium-badge"},J0={class:"template-info"},Q0={class:"template-name"},e_={class:"template-dimensions"},t_={class:"template-tags"},n_={key:0,class:"template-tag-more"},i_={key:0,class:"empty-state"},s_={key:1,class:"collapsed-content"},r_=Nn({__name:"LeftPanel",props:{selectedTemplate:{}},emits:["select-template"],setup(n,{emit:e}){const t=e,i=Oe(!1),s=Oe("all"),r=Oe(""),o=[{id:"all",name:"All"},{id:"boxes",name:"Boxes"},{id:"bottles",name:"Bottles"},{id:"bags",name:"Bags"},{id:"tubes",name:"Tubes"},{id:"custom",name:"Custom"}],a=[{id:"1",name:"Standard Box",dimensions:"10×8×6 cm",category:"boxes",tags:["basic","standard"],isPremium:!1},{id:"2",name:"Premium Gift Box",dimensions:"15×12×8 cm",category:"boxes",tags:["gift","luxury"],isPremium:!0},{id:"3",name:"Wine Bottle",dimensions:"30×9×9 cm",category:"bottles",tags:["beverage","glass"],isPremium:!1},{id:"4",name:"Perfume Bottle",dimensions:"12×4×4 cm",category:"bottles",tags:["cosmetic","luxury"],isPremium:!0},{id:"5",name:"Paper Bag",dimensions:"25×15×8 cm",category:"bags",tags:["eco","retail"],isPremium:!1},{id:"6",name:"Cosmetic Tube",dimensions:"15×5×5 cm",category:"tubes",tags:["cosmetic","plastic"],isPremium:!1},{id:"7",name:"Custom Box A",dimensions:"20×15×10 cm",category:"custom",tags:["custom","large"],isPremium:!0},{id:"8",name:"Custom Box B",dimensions:"8×8×8 cm",category:"custom",tags:["custom","cube"],isPremium:!1}],l=un(()=>{let f=a;if(s.value!=="all"&&(f=f.filter(d=>d.category===s.value)),r.value.trim()){const d=r.value.toLowerCase();f=f.filter(g=>g.name.toLowerCase().includes(d)||g.tags.some(x=>x.toLowerCase().includes(d)))}return f}),c=()=>{i.value=!i.value},h=f=>{t("select-template",f)},u=()=>{};return(f,d)=>(Me(),be("div",{class:mt(["left-panel",{collapsed:i.value}])},[A("div",B0,[A("button",{class:"collapse-btn",onClick:c},[(Me(),be("svg",z0,[i.value?(Me(),be("path",H0)):(Me(),be("path",G0))]))]),d[1]||(d[1]=A("h3",{class:"panel-title"},"Template Gallery",-1))]),i.value?(Me(),be("div",s_,[A("button",{class:"expand-btn",onClick:c,title:"Expand panel"},[...d[6]||(d[6]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),d[7]||(d[7]=A("div",{class:"collapsed-label"},"Templates",-1))])):(Me(),be("div",V0,[A("div",W0,[(Me(),be(Mt,null,qn(o,g=>A("button",{key:g.id,class:mt(["category-tab",{active:s.value===g.id}]),onClick:x=>s.value=g.id},Ge(g.name),11,X0)),64))]),A("div",$0,[A("div",q0,[d[2]||(d[2]=A("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"search-icon"},[A("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor","stroke-width":"1.5"}),A("path",{d:"M10 10L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})],-1)),Bi(A("input",{"onUpdate:modelValue":d[0]||(d[0]=g=>r.value=g),type:"text",placeholder:"Search templates...",class:"search-input",onInput:u},null,544),[[zi,r.value]])])]),A("div",Y0,[(Me(!0),be(Mt,null,qn(l.value,g=>{var x;return Me(),be("div",{key:g.id,class:mt(["template-item",{active:((x=n.selectedTemplate)==null?void 0:x.id)===g.id}]),onClick:m=>h(g)},[A("div",K0,[d[4]||(d[4]=zn('<div class="template-preview" data-v-0a985f77><div class="box-preview" data-v-0a985f77><div class="box-front" data-v-0a985f77></div><div class="box-top" data-v-0a985f77></div><div class="box-side" data-v-0a985f77></div></div></div>',1)),g.isPremium?(Me(),be("div",Z0,[...d[3]||(d[3]=[A("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z",fill:"currentColor",stroke:"currentColor","stroke-width":"0.5"})],-1)])])):Lt("",!0)]),A("div",J0,[A("h4",Q0,Ge(g.name),1),A("p",e_,Ge(g.dimensions),1),A("div",t_,[(Me(!0),be(Mt,null,qn(g.tags.slice(0,2),m=>(Me(),be("span",{key:m,class:"template-tag"},Ge(m),1))),128)),g.tags.length>2?(Me(),be("span",n_," +"+Ge(g.tags.length-2),1)):Lt("",!0)])])],10,j0)}),128))]),l.value.length===0?(Me(),be("div",i_,[...d[5]||(d[5]=[zn('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="empty-icon" data-v-0a985f77><rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="2" data-v-0a985f77></rect><path d="M16 16H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a985f77></path><path d="M16 24H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a985f77></path><path d="M16 32H24" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a985f77></path></svg><p class="empty-text" data-v-0a985f77>No templates found</p><p class="empty-subtext" data-v-0a985f77>Try a different search term</p>',3)])])):Lt("",!0)]))],2))}}),o_=Zn(r_,[["__scopeId","data-v-0a985f77"]]),a_={class:"design-uploader"},l_={class:"upload-text"},c_={class:"text-lg font-semibold text-gray-800"},h_={class:"text-sm text-gray-500 mt-1"},u_={key:0,class:"error-message"},d_={class:"flex items-center gap-2"},f_={class:"text-sm font-medium text-red-700"},p_={key:1,class:"image-preview"},m_={class:"preview-image-container"},g_=["src","alt"],__={key:0,class:"loading-overlay"},v_={key:1,class:"image-info"},x_={class:"info-grid"},y_={class:"info-item"},M_={class:"info-value"},S_={key:0,class:"info-item"},b_={class:"info-value"},w_={class:"info-item"},E_={class:"info-value"},T_={key:2,class:"texture-fit-options"},A_={class:"fit-buttons"},C_=["onClick"],R_={class:"fit-icon"},P_={class:"fit-label"},L_={key:3,class:"apply-buttons"},D_=["disabled"],ou=10*1024*1024,I_=Nn({__name:"DesignUploader",props:{selectedFace:{default:null}},emits:["upload","apply-to-face","apply-to-all","clear"],setup(n,{emit:e}){const t=n,i=e,s=Oe(null),r=Oe(null),o=Oe(!1),a=Oe(null),l=Oe(null),c=Oe(null),h=Oe(!1),u=Oe(null),f=Oe("cover"),d=["image/png","image/jpeg","image/jpg","image/svg+xml","image/webp"],g=[{value:"stretch",label:"Stretch",icon:"↔️"},{value:"contain",label:"Contain",icon:"📐"},{value:"cover",label:"Cover",icon:"🖼️"}],x=D=>D.size>ou?(c.value=`File too large. Maximum size is ${v(ou)}.`,!1):d.includes(D.type)?(c.value=null,!0):(c.value="Invalid file type. Please upload PNG, JPG, JPEG, SVG, or WebP.",!1),m=D=>{x(D)&&(a.value=D,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL(D),u.value=null,h.value=!0,i("upload",D))},p=D=>{D.preventDefault(),o.value=!0},E=D=>{D.preventDefault(),o.value=!1},w=D=>{var z;D.preventDefault(),o.value=!1;const F=(z=D.dataTransfer)==null?void 0:z.files;if(!(F!=null&&F.length))return;const V=F[0];m(V)},M=D=>{var z;const F=D.target,V=(z=F.files)==null?void 0:z[0];V&&(m(V),F.value="")},I=()=>{var D;(D=r.value)==null||D.click()},L=()=>{l.value&&(URL.revokeObjectURL(l.value),l.value=null),a.value=null,u.value=null,c.value=null,i("clear")},U=D=>{const F=D.target;h.value=!1,u.value={dimensions:{width:F.naturalWidth,height:F.naturalHeight}}},C=()=>{h.value=!1,c.value="Failed to load image preview."},v=D=>{if(D===0)return"0 Bytes";const F=1024,V=["Bytes","KB","MB","GB"],z=Math.floor(Math.log(D)/Math.log(F));return parseFloat((D/Math.pow(F,z)).toFixed(2))+" "+V[z]},_=D=>{f.value=D},P=()=>{!a.value||!t.selectedFace||i("apply-to-face",{face:t.selectedFace,file:a.value,fit:f.value})},O=()=>{a.value&&i("apply-to-all",{file:a.value,fit:f.value})};return ar(()=>{l.value&&URL.revokeObjectURL(l.value)}),(D,F)=>{var V,z,K;return Me(),be("div",a_,[A("div",{ref_key:"dropZoneRef",ref:s,class:mt(["drop-zone",{"drag-over":o.value,"has-file":a.value}]),onDragover:Wo(p,["prevent"]),onDragleave:Wo(E,["prevent"]),onDrop:Wo(w,["prevent"])},[F[1]||(F[1]=A("div",{class:"upload-icon"},[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})])],-1)),A("div",l_,[A("p",c_,Ge(a.value?a.value.name:"Drag & drop your design here"),1),A("p",h_,Ge(a.value?"Click to change or drop another file":"or click to browse"),1),F[0]||(F[0]=A("p",{class:"text-xs text-gray-400 mt-2"}," Supports: PNG, JPG, JPEG, SVG, WebP • Max 10MB ",-1))]),A("input",{ref_key:"fileInputRef",ref:r,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:M},null,544),A("button",{type:"button",class:"browse-btn",onClick:I}," Browse Files ")],34),c.value?(Me(),be("div",u_,[A("div",d_,[F[2]||(F[2]=A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),A("span",f_,Ge(c.value),1)])])):Lt("",!0),l.value?(Me(),be("div",p_,[A("div",{class:"preview-header"},[F[4]||(F[4]=A("h3",{class:"text-sm font-medium text-gray-700"},"Preview",-1)),A("button",{type:"button",class:"clear-btn",onClick:L},[...F[3]||(F[3]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])]),A("div",m_,[A("img",{src:l.value,alt:((V=a.value)==null?void 0:V.name)||"Preview",class:"preview-image",onLoad:U,onError:C},null,40,g_),h.value?(Me(),be("div",__,[...F[5]||(F[5]=[A("div",{class:"loading-spinner"},null,-1),A("p",{class:"loading-text"},"Loading preview...",-1)])])):Lt("",!0),u.value?(Me(),be("div",v_,[A("div",x_,[A("div",y_,[F[6]||(F[6]=A("span",{class:"info-label"},"Size:",-1)),A("span",M_,Ge(v(((z=a.value)==null?void 0:z.size)||0)),1)]),u.value.dimensions?(Me(),be("div",S_,[F[7]||(F[7]=A("span",{class:"info-label"},"Dimensions:",-1)),A("span",b_,Ge(u.value.dimensions.width)+" × "+Ge(u.value.dimensions.height),1)])):Lt("",!0),A("div",w_,[F[8]||(F[8]=A("span",{class:"info-label"},"Type:",-1)),A("span",E_,Ge(((K=a.value)==null?void 0:K.type)||"Unknown"),1)])])])):Lt("",!0)])])):Lt("",!0),l.value?(Me(),be("div",T_,[F[9]||(F[9]=A("h3",{class:"text-sm font-medium text-gray-700 mb-3"},"Texture Fit",-1)),A("div",A_,[(Me(),be(Mt,null,qn(g,Y=>A("button",{key:Y.value,type:"button",class:mt(["fit-button",{active:f.value===Y.value}]),onClick:ce=>_(Y.value)},[A("span",R_,Ge(Y.icon),1),A("span",P_,Ge(Y.label),1)],10,C_)),64))])])):Lt("",!0),l.value?(Me(),be("div",L_,[A("button",{type:"button",class:"apply-btn apply-selected",disabled:!n.selectedFace,onClick:P},[...F[10]||(F[10]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),Gi(" Apply to Selected Face ",-1)])],8,D_),A("button",{type:"button",class:"apply-btn apply-all",onClick:O},[...F[11]||(F[11]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"})],-1),Gi(" Apply to All Faces ",-1)])])])):Lt("",!0)])}}}),U_=Zn(I_,[["__scopeId","data-v-0e73d30a"]]),N_=["title"],F_={key:0,class:"texture-preview"},O_=["src","alt"],k_={class:"texture-overlay"},B_={class:"texture-label"},z_={key:1,class:"empty-face"},H_={class:"face-icon"},G_={class:"face-label"},V_={key:2,class:"selection-indicator"},W_=Nn({__name:"FaceButton",props:{face:{},isSelected:{type:Boolean},textureUrl:{}},emits:["click"],setup(n){const e=n,t=()=>({front:"⬆️",back:"⬇️",left:"⬅️",right:"➡️",top:"🔺",bottom:"🔻"})[e.face],i=()=>e.face.charAt(0).toUpperCase()+e.face.slice(1);return(s,r)=>(Me(),be("button",{type:"button",class:mt(["face-button",{selected:n.isSelected,"has-texture":n.textureUrl,[n.face]:!0}]),onClick:r[0]||(r[0]=o=>s.$emit("click")),title:`${n.face.charAt(0).toUpperCase()+n.face.slice(1)} Face`},[n.textureUrl?(Me(),be("div",F_,[A("img",{src:n.textureUrl,alt:`${n.face} texture`,class:"texture-image"},null,8,O_),A("div",k_,[A("span",B_,Ge(i()),1)])])):(Me(),be("div",z_,[A("div",H_,Ge(t()),1),A("div",G_,Ge(i()),1)])),n.isSelected?(Me(),be("div",V_,[...r[1]||(r[1]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):Lt("",!0)],10,N_))}}),ws=Zn(W_,[["__scopeId","data-v-fde2d244"]]),X_={class:"face-selector"},$_={class:"selector-header"},q_={class:"text-sm text-gray-500"},Y_={class:"box-diagram"},j_={class:"face-row top-row"},K_={class:"face-row middle-row"},Z_={class:"middle-faces"},J_={class:"face-row bottom-row"},Q_={class:"thumbnails-grid"},ev=["onClick"],tv={class:"thumbnail-container"},nv={key:0,class:"texture-preview"},iv=["src","alt"],sv={class:"thumbnail-overlay"},rv=["onClick"],ov={key:1,class:"empty-thumbnail"},av={class:"empty-icon"},lv={class:"face-label"},cv={class:"label-text"},hv={key:0,class:"texture-indicator"},uv={key:0,class:"face-actions"},dv={class:"actions-header"},fv={class:"font-medium text-gray-800"},pv={class:"action-buttons"},mv=["disabled"],gv=["disabled"],_v={class:"texture-summary"},vv={class:"summary-item"},xv={class:"summary-value"},yv={class:"summary-item"},Mv={class:"summary-value"},Sv=Nn({__name:"FaceSelector",props:{selectedFace:{default:null},textures:{default:()=>({front:null,back:null,left:null,right:null,top:null,bottom:null})}},emits:["select","remove-texture","copy-to-others","reset-all"],setup(n,{emit:e}){const t=n,i=e,s=["front","back","left","right","top","bottom"],r=un(()=>s.filter(f=>t.textures[f]).length),o=f=>({front:"⬆️",back:"⬇️",left:"⬅️",right:"➡️",top:"🔺",bottom:"🔻"})[f],a=f=>t.textures[f]||null,l=f=>{i("select",f)},c=f=>{i("remove-texture",f)},h=()=>{t.selectedFace&&i("copy-to-others",t.selectedFace)},u=()=>{i("reset-all")};return(f,d)=>(Me(),be("div",X_,[A("div",$_,[d[7]||(d[7]=A("h3",{class:"text-lg font-semibold text-gray-800"},"Face Selection",-1)),A("div",q_,Ge(n.selectedFace?`Selected: ${n.selectedFace}`:"Click a face to select"),1)]),A("div",Y_,[A("div",j_,[d[8]||(d[8]=A("div",{class:"face-placeholder"},null,-1)),tt(ws,{face:"top","is-selected":n.selectedFace==="top","texture-url":a("top"),onClick:d[0]||(d[0]=g=>l("top"))},null,8,["is-selected","texture-url"]),d[9]||(d[9]=A("div",{class:"face-placeholder"},null,-1))]),A("div",K_,[tt(ws,{face:"left","is-selected":n.selectedFace==="left","texture-url":a("left"),onClick:d[1]||(d[1]=g=>l("left"))},null,8,["is-selected","texture-url"]),A("div",Z_,[tt(ws,{face:"front","is-selected":n.selectedFace==="front","texture-url":a("front"),onClick:d[2]||(d[2]=g=>l("front"))},null,8,["is-selected","texture-url"]),tt(ws,{face:"back","is-selected":n.selectedFace==="back","texture-url":a("back"),onClick:d[3]||(d[3]=g=>l("back"))},null,8,["is-selected","texture-url"])]),tt(ws,{face:"right","is-selected":n.selectedFace==="right","texture-url":a("right"),onClick:d[4]||(d[4]=g=>l("right"))},null,8,["is-selected","texture-url"])]),A("div",J_,[d[10]||(d[10]=A("div",{class:"face-placeholder"},null,-1)),tt(ws,{face:"bottom","is-selected":n.selectedFace==="bottom","texture-url":a("bottom"),onClick:d[5]||(d[5]=g=>l("bottom"))},null,8,["is-selected","texture-url"]),d[11]||(d[11]=A("div",{class:"face-placeholder"},null,-1))])]),A("div",Q_,[(Me(),be(Mt,null,qn(s,g=>A("div",{key:g,class:mt(["thumbnail-item",{selected:n.selectedFace===g}]),onClick:x=>l(g)},[A("div",tv,[a(g)?(Me(),be("div",nv,[A("img",{src:a(g),alt:`${g} texture`,class:"thumbnail-image"},null,8,iv),A("div",sv,[A("button",{type:"button",class:"remove-btn",onClick:Wo(x=>c(g),["stop"]),title:"Remove texture"},[...d[12]||(d[12]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)])],8,rv)])])):(Me(),be("div",ov,[A("div",av,Ge(o(g)),1)])),A("div",lv,[A("span",cv,Ge(g.charAt(0).toUpperCase()+g.slice(1)),1),a(g)?(Me(),be("span",hv,[...d[13]||(d[13]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 text-green-500",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):Lt("",!0)])])],10,ev)),64))]),n.selectedFace?(Me(),be("div",uv,[A("div",dv,[A("h4",fv,Ge(n.selectedFace.charAt(0).toUpperCase()+n.selectedFace.slice(1))+" Face Actions ",1)]),A("div",pv,[A("button",{type:"button",class:"action-btn reset-face",disabled:!a(n.selectedFace),onClick:d[6]||(d[6]=g=>c(n.selectedFace))},[...d[14]||(d[14]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Gi(" Clear Texture ",-1)])],8,mv),A("button",{type:"button",class:"action-btn copy-face",disabled:!a(n.selectedFace),onClick:h},[...d[15]||(d[15]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),A("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})],-1),Gi(" Copy to Others ",-1)])],8,gv)]),A("div",{class:"global-actions"},[A("button",{type:"button",class:"global-btn reset-all",onClick:u},[...d[16]||(d[16]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[A("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"})],-1),Gi(" Reset All Textures ",-1)])])])])):Lt("",!0),A("div",_v,[A("div",vv,[d[17]||(d[17]=A("span",{class:"summary-label"},"Textured Faces:",-1)),A("span",xv,Ge(r.value)+" / "+Ge(s.length),1)]),A("div",yv,[d[18]||(d[18]=A("span",{class:"summary-label"},"Selected Face:",-1)),A("span",Mv,Ge(n.selectedFace?n.selectedFace.charAt(0).toUpperCase()+n.selectedFace.slice(1):"None"),1)])])]))}}),bv=Zn(Sv,[["__scopeId","data-v-0bd4bfed"]]),wv="modulepreload",Ev=function(n){return"/virtual-tryon-packaging/"+n},au={},Tv=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Ev(l),l in au)return;au[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":wv,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="170",js={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Av=0,lu=1,Cv=2,Gf=1,Vf=2,hi=3,$i=0,on=1,kt=2,Vi=0,Ks=1,cu=2,hu=3,uu=4,Rv=5,hs=100,Pv=101,Lv=102,Dv=103,Iv=104,Uv=200,Nv=201,Fv=202,Ov=203,Vl=204,Wl=205,kv=206,Bv=207,zv=208,Hv=209,Gv=210,Vv=211,Wv=212,Xv=213,$v=214,Xl=0,$l=1,ql=2,er=3,Yl=4,jl=5,Kl=6,Zl=7,Wf=0,qv=1,Yv=2,Wi=0,jv=1,Kv=2,Zv=3,Xf=4,Jv=5,Qv=6,ex=7,$f=300,tr=301,nr=302,ra=303,Jl=304,Ta=306,Ql=1e3,gi=1001,ec=1002,fn=1003,tx=1004,lo=1005,en=1006,qa=1007,Hi=1008,jn=1009,qf=1010,Yf=1011,$r=1012,jc=1013,ps=1014,yn=1015,_i=1016,Kc=1017,Zc=1018,ir=1020,jf=35902,Kf=1021,Jc=1022,Mn=1023,Zf=1024,Jf=1025,Zs=1026,sr=1027,Qf=1028,Qc=1029,ep=1030,eh=1031,th=1033,Xo=33776,$o=33777,qo=33778,Yo=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37808,cc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,xc=37819,yc=37820,Mc=37821,jo=36492,Sc=36494,bc=36495,tp=36283,wc=36284,Ec=36285,Tc=36286,nx=3200,ix=3201,np=0,sx=1,ki="",Zt="srgb",xs="srgb-linear",Aa="linear",dt="srgb",Es=7680,du=519,rx=512,ox=513,ax=514,ip=515,lx=516,cx=517,hx=518,ux=519,fu=35044,pu="300 es",vi=2e3,oa=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,Ac=180/Math.PI;function lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function dx(n,e){return(n%e+e)%e}function Ya(n,e,t){return(1-t)*n+t*e}function gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fx={DEG2RAD:Ur};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],E=s[1],w=s[4],M=s[7],I=s[2],L=s[5],U=s[8];return r[0]=o*x+a*E+l*I,r[3]=o*m+a*w+l*L,r[6]=o*p+a*M+l*U,r[1]=c*x+h*E+u*I,r[4]=c*m+h*w+u*L,r[7]=c*p+h*M+u*U,r[2]=f*x+d*E+g*I,r[5]=f*m+d*w+g*L,r[8]=f*p+d*M+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Ze;function sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function px(){const n=qr("canvas");return n.style.display="block",n}const mu={};function br(n){n in mu||(mu[n]=!0,console.warn(n))}function mx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function gx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _x(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(n.r=Js(n.r),n.g=Js(n.g),n.b=Js(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ki?Aa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const gu=[.64,.33,.3,.6,.15,.06],_u=[.2126,.7152,.0722],vu=[.3127,.329],xu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[xs]:{primaries:gu,whitePoint:vu,transfer:Aa,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:_u,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:gu,whitePoint:vu,transfer:dt,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:_u,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}});let Ts;class vx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=qr("canvas")),Ts.width=e.width,Ts.height=e.height;const i=Ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xx=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ka(s[o].image)):r.push(Ka(s[o]))}else r=Ka(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yx=0;class Bt extends ys{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=gi,s=gi,r=en,o=Hi,a=Mn,l=jn,c=Bt.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=lr(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=$f;Bt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(d+1)/2,I=(p+1)/2,L=(h+f)/4,U=(u+x)/4,C=(g+m)/4;return w>M&&w>I?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=L/i,r=U/i):M>I?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=L/s,r=C/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=U/r,s=C/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mx extends ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Mx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class op extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sx extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*x,E=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const I=Math.sqrt(w),L=Math.atan2(I,p*E);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const M=a*E;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+x*M,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new B,Mu=new ms;class to{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),ho.subVectors(this.max,_r),As.subVectors(e.a,_r),Cs.subVectors(e.b,_r),Rs.subVectors(e.c,_r),Ci.subVectors(Cs,As),Ri.subVectors(Rs,Cs),es.subVectors(As,Rs);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-es.z,es.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,es.z,0,-es.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-es.y,es.x,0];return!Ja(t,As,Cs,Rs,ho)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,As,Cs,Rs,ho))?!1:(uo.crossVectors(Ci,Ri),t=[uo.x,uo.y,uo.z],Ja(t,As,Cs,Rs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,co=new to,As=new B,Cs=new B,Rs=new B,Ci=new B,Ri=new B,es=new B,_r=new B,ho=new B,uo=new B,ts=new B;function Ja(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=i.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bx=new to,vr=new B,Qa=new B;class Ca{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Qa)),this.expandByPoint(vr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new B,el=new B,fo=new B,Pi=new B,tl=new B,po=new B,nl=new B;class nh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){el.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(el);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=Pi.dot(this.direction),l=-Pi.dot(fo),c=Pi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(el).addScaledVector(fo,f),d}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,s,r){tl.subVectors(t,e),po.subVectors(i,e),nl.crossVectors(tl,po);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(po.crossVectors(Pi,po));if(l<0)return null;const c=a*this.direction.dot(tl.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Ex)}lookAt(e,t,i){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Li.crossVectors(i,ln),Li.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Li.crossVectors(i,ln)),Li.normalize(),mo.crossVectors(ln,Li),s[0]=Li.x,s[4]=mo.x,s[8]=ln.x,s[1]=Li.y,s[5]=mo.y,s[9]=ln.y,s[2]=Li.z,s[6]=mo.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],E=i[3],w=i[7],M=i[11],I=i[15],L=s[0],U=s[4],C=s[8],v=s[12],_=s[1],P=s[5],O=s[9],D=s[13],F=s[2],V=s[6],z=s[10],K=s[14],Y=s[3],ce=s[7],pe=s[11],xe=s[15];return r[0]=o*L+a*_+l*F+c*Y,r[4]=o*U+a*P+l*V+c*ce,r[8]=o*C+a*O+l*z+c*pe,r[12]=o*v+a*D+l*K+c*xe,r[1]=h*L+u*_+f*F+d*Y,r[5]=h*U+u*P+f*V+d*ce,r[9]=h*C+u*O+f*z+d*pe,r[13]=h*v+u*D+f*K+d*xe,r[2]=g*L+x*_+m*F+p*Y,r[6]=g*U+x*P+m*V+p*ce,r[10]=g*C+x*O+m*z+p*pe,r[14]=g*v+x*D+m*K+p*xe,r[3]=E*L+w*_+M*F+I*Y,r[7]=E*U+w*P+M*V+I*ce,r[11]=E*C+w*O+M*z+I*pe,r[15]=E*v+w*D+M*K+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],E=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,w=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,I=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,L=t*E+i*w+s*M+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=E*U,e[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*U,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*U,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*U,e[4]=w*U,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*U,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*U,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*U,e[8]=M*U,e[9]=(g*u*r-h*x*r-g*i*d+t*x*d+h*i*p-t*u*p)*U,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*U,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*U,e[12]=I*U,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*m+t*u*m)*U,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*U,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,E=l*c,w=l*h,M=l*u,I=i.x,L=i.y,U=i.z;return s[0]=(1-(x+p))*I,s[1]=(d+M)*I,s[2]=(g-w)*I,s[3]=0,s[4]=(d-M)*L,s[5]=(1-(f+p))*L,s[6]=(m+E)*L,s[7]=0,s[8]=(g+w)*U,s[9]=(m-E)*U,s[10]=(1-(f+x))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=vi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===vi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h;let g,x;if(a===vi)g=(o+r)*u,x=-2*u;else if(a===oa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ps=new B,Cn=new yt,wx=new B(0,0,0),Ex=new B(1,1,1),Li=new B,mo=new B,ln=new B,Su=new yt,bu=new ms;class Kn{constructor(e=0,t=0,i=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tx=0;const wu=new B,Ls=new ms,oi=new yt,go=new B,xr=new B,Ax=new B,Cx=new ms,Eu=new B(1,0,0),Tu=new B(0,1,0),Au=new B(0,0,1),Cu={type:"added"},Rx={type:"removed"},Ds={type:"childadded",child:null},il={type:"childremoved",child:null};class zt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new B,t=new Kn,i=new ms,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(xr,go,this.up):oi.lookAt(go,xr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(oi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rx),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}zt.DEFAULT_UP=new B(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new B,ai=new B,sl=new B,li=new B,Is=new B,Us=new B,Ru=new B,rl=new B,ol=new B,al=new B,ll=new Et,cl=new Et,hl=new Et;class xn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Rn.subVectors(s,t),ai.subVectors(i,t),sl.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ai),l=Rn.dot(sl),c=ai.dot(ai),h=ai.dot(sl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,i),hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(e,t,i,s){return Rn.subVectors(i,t),ai.subVectors(e,t),Rn.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Rn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Us.subVectors(r,i),rl.subVectors(e,i);const l=Is.dot(rl),c=Us.dot(rl);if(l<=0&&c<=0)return t.copy(i);ol.subVectors(e,s);const h=Is.dot(ol),u=Us.dot(ol);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Is,o);al.subVectors(e,r);const d=Is.dot(al),g=Us.dot(al);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Us,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ru.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Ru,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Is,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},_o={h:0,s:0,l:0};function ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=dx(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return it.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Dt(Vt.r*255,0,255))*65536+Math.round(Dt(Vt.g*255,0,255))*256+Math.round(Dt(Vt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Zt){it.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(_o);const i=Ya(Di.h,_o.h,t),s=Ya(Di.s,_o.s,t),r=Ya(Di.l,_o.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ve;Ve.NAMES=lp;let Px=0;class cr extends ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=lr(),this.name="",this.blending=Ks,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rr extends cr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mi=Lx();function Lx(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Dx(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Dt(n,-65504,65504),mi.floatView[0]=n;const e=mi.uint32View[0],t=e>>23&511;return mi.baseTable[t]+((e&8388607)>>mi.shiftTable[t])}function Ix(n){const e=n>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[e]+(n&1023)]+mi.exponentTable[e],mi.floatView[0]}const vo={toHalfFloat:Dx,fromHalfFloat:Ix},Pt=new B,xo=new re;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fu,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fu&&(e.usage=this.usage),e}}class cp extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hp extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ux=0;const _n=new yt,dl=new zt,Ns=new B,cn=new to,yr=new to,Ot=new B;class Yt extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sp(e)?hp:cp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(cn.min,yr.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,yr.max),cn.expandByPoint(Ot)):(cn.expandByPoint(yr.min),cn.expandByPoint(yr.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),Ot.add(Ns)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new B,l[C]=new B;const c=new B,h=new B,u=new B,f=new re,d=new re,g=new re,x=new B,m=new B;function p(C,v,_){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(x),a[v].add(x),a[_].add(x),l[C].add(m),l[v].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,v=E.length;C<v;++C){const _=E[C],P=_.start,O=_.count;for(let D=P,F=P+O;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const w=new B,M=new B,I=new B,L=new B;function U(C){I.fromBufferAttribute(s,C),L.copy(I);const v=a[C];w.copy(v),w.sub(I.multiplyScalar(I.dot(v))).normalize(),M.crossVectors(L,v);const P=M.dot(l[C])<0?-1:1;o.setXYZW(C,w.x,w.y,w.z,P)}for(let C=0,v=E.length;C<v;++C){const _=E[C],P=_.start,O=_.count;for(let D=P,F=P+O;D<F;D+=3)U(e.getX(D+0)),U(e.getX(D+1)),U(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new yt,ns=new nh,yo=new Ca,Lu=new B,Mo=new B,So=new B,bo=new B,fl=new B,wo=new B,Du=new B,Eo=new B;class we extends zt{constructor(e=new Yt,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(fl.fromBufferAttribute(u,e),o?wo.addScaledVector(fl,h):wo.addScaledVector(fl.sub(t),h))}t.add(wo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(yo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(yo,Lu)===null||ns.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Pu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Pu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,I=w;M<I;M+=3){const L=a.getX(M),U=a.getX(M+1),C=a.getX(M+2);s=To(this,p,e,i,c,h,u,L,U,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const E=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);s=To(this,o,e,i,c,h,u,E,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,I=w;M<I;M+=3){const L=M,U=M+1,C=M+2;s=To(this,p,e,i,c,h,u,L,U,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const E=m,w=m+1,M=m+2;s=To(this,o,e,i,c,h,u,E,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nx(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:n}}function To(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Mo),n.getVertexPosition(l,So),n.getVertexPosition(c,bo);const h=Nx(n,e,t,i,Mo,So,bo,Du);if(h){const u=new B;xn.getBarycoord(Du,Mo,So,bo,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};xn.getNormal(Mo,So,bo,f.normal),h.face=f,h.barycoord=u}return h}let Ct=class up extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(x,m,p,E,w,M,I,L,U,C,v){const _=M/U,P=I/C,O=M/2,D=I/2,F=L/2,V=U+1,z=C+1;let K=0,Y=0;const ce=new B;for(let pe=0;pe<z;pe++){const xe=pe*P-D;for(let Re=0;Re<V;Re++){const We=Re*_-O;ce[x]=We*E,ce[m]=xe*w,ce[p]=F,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[p]=L>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Re/U),u.push(1-pe/C),K+=1}}for(let pe=0;pe<C;pe++)for(let xe=0;xe<U;xe++){const Re=f+xe+V*pe,We=f+xe+V*(pe+1),oe=f+(xe+1)+V*(pe+1),ue=f+(xe+1)+V*pe;l.push(Re,We,ue),l.push(We,oe,ue),Y+=6}a.addGroup(d,Y,v),d+=Y,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=or(n[t]);for(const s in i)e[s]=i[s]}return e}function Fx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ox={clone:or,merge:Kt};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends cr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fp extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new B,Iu=new re,Uu=new re;class vn extends fp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Uu),t.subVectors(Uu,Iu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class zx extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Fs,Os,e,t);s.layers=this.layers,this.add(s);const r=new vn(Fs,Os,e,t);r.layers=this.layers,this.add(r);const o=new vn(Fs,Os,e,t);o.layers=this.layers,this.add(o);const a=new vn(Fs,Os,e,t);a.layers=this.layers,this.add(a);const l=new vn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new vn(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pp extends Bt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hx extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Vi});r.uniforms.tEquirect.value=t;const o=new we(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=en),new zx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const pl=new B,Gx=new B,Vx=new Ze;class Oi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=pl.subVectors(i,t).cross(Gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vx.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Ca,Ao=new B;class ih{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],E=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+h,m+g,M+E).normalize(),i[3].setComponents(l-o,f-h,m-g,M-E).normalize(),i[4].setComponents(l-a,f-u,m-x,M-w).normalize(),t===vi)i[5].setComponents(l+a,f+u,m+x,M+w).normalize();else if(t===oa)i[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wx(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class wt extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const E=p*f-o;for(let w=0;w<c;w++){const M=w*u-r;g.push(M,-E,0),x.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const w=E+c*p,M=E+c*(p+1),I=E+1+c*(p+1),L=E+1+c*p;d.push(w,M,L),d.push(M,I,L)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Xx,alphahash_pars_fragment:$x,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:jx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Jx,batching_pars_vertex:Qx,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:hy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:vy,emissivemap_fragment:xy,emissivemap_pars_fragment:yy,colorspace_fragment:My,colorspace_pars_fragment:Sy,envmap_fragment:by,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ey,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:Py,fog_pars_fragment:Ly,gradientmap_pars_fragment:Dy,lightmap_pars_fragment:Iy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Fy,lights_toon_fragment:ky,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:$y,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:Ky,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:sM,morphnormal_vertex:rM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:hM,normal_pars_vertex:uM,normal_vertex:dM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,opaque_fragment:vM,packing:xM,premultiplied_alpha_fragment:yM,project_vertex:MM,dithering_fragment:SM,dithering_pars_fragment:bM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:AM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:PM,skinning_pars_vertex:LM,skinning_vertex:DM,skinnormal_vertex:IM,specularmap_fragment:UM,specularmap_pars_fragment:NM,tonemapping_fragment:FM,tonemapping_pars_fragment:OM,transmission_fragment:kM,transmission_pars_fragment:BM,uv_pars_fragment:zM,uv_pars_vertex:HM,uv_vertex:GM,worldpos_vertex:VM,background_vert:WM,background_frag:XM,backgroundCube_vert:$M,backgroundCube_frag:qM,cube_vert:YM,cube_frag:jM,depth_vert:KM,depth_frag:ZM,distanceRGBA_vert:JM,distanceRGBA_frag:QM,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:s1,meshbasic_frag:r1,meshlambert_vert:o1,meshlambert_frag:a1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:h1,meshnormal_frag:u1,meshphong_vert:d1,meshphong_frag:f1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:_1,points_vert:v1,points_frag:x1,shadow_vert:y1,shadow_frag:M1,sprite_vert:S1,sprite_frag:b1},ve={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Vn={basic:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Kt([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Kt([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Kt([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Kt([ve.common,ve.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Kt([ve.lights,ve.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Vn.physical={uniforms:Kt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Co={r:0,b:0,g:0},ss=new Kn,w1=new yt;function E1(n,e,t,i,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function x(E){let w=!1;const M=g(E);M===null?p(a,l):M&&M.isColor&&(p(M,1),w=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===Ta)?(h===void 0&&(h=new we(new Ct(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:or(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ss.copy(w.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(ss)),h.material.toneMapped=it.getTransfer(M.colorSpace)!==dt,(u!==M||f!==M.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new we(new wt(2,2),new Yi({name:"BackgroundMaterial",uniforms:or(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,w){E.getRGB(Co,dp(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:m}}function T1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(_,P,O,D,F){let V=!1;const z=u(D,O,P);r!==z&&(r=z,c(r.object)),V=d(_,D,O,F),V&&g(_,D,O,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(_,P,O,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,P,O){const D=O.wireframe===!0;let F=i[_.id];F===void 0&&(F={},i[_.id]=F);let V=F[P.id];V===void 0&&(V={},F[P.id]=V);let z=V[D];return z===void 0&&(z=f(l()),V[D]=z),z}function f(_){const P=[],O=[],D=[];for(let F=0;F<t;F++)P[F]=0,O[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:D,object:_,attributes:{},index:null}}function d(_,P,O,D){const F=r.attributes,V=P.attributes;let z=0;const K=O.getAttributes();for(const Y in K)if(K[Y].location>=0){const pe=F[Y];let xe=V[Y];if(xe===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(xe=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(xe=_.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function g(_,P,O,D){const F={},V=P.attributes;let z=0;const K=O.getAttributes();for(const Y in K)if(K[Y].location>=0){let pe=V[Y];pe===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor));const xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),F[Y]=xe,z++}r.attributes=F,r.attributesNum=z,r.index=D}function x(){const _=r.newAttributes;for(let P=0,O=_.length;P<O;P++)_[P]=0}function m(_){p(_,0)}function p(_,P){const O=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;O[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),F[_]!==P&&(n.vertexAttribDivisor(_,P),F[_]=P)}function E(){const _=r.newAttributes,P=r.enabledAttributes;for(let O=0,D=P.length;O<D;O++)P[O]!==_[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function w(_,P,O,D,F,V,z){z===!0?n.vertexAttribIPointer(_,P,O,F,V):n.vertexAttribPointer(_,P,O,D,F,V)}function M(_,P,O,D){x();const F=D.attributes,V=O.getAttributes(),z=P.defaultAttributeValues;for(const K in V){const Y=V[K];if(Y.location>=0){let ce=F[K];if(ce===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ce!==void 0){const pe=ce.normalized,xe=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const We=Re.buffer,oe=Re.type,ue=Re.bytesPerElement,Ce=oe===n.INT||oe===n.UNSIGNED_INT||ce.gpuType===jc;if(ce.isInterleavedBufferAttribute){const de=ce.data,Le=de.stride,ze=ce.offset;if(de.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)p(Y.location+Pe,de.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)m(Y.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Pe=0;Pe<Y.locationSize;Pe++)w(Y.location+Pe,xe/Y.locationSize,oe,pe,Le*ue,(ze+xe/Y.locationSize*Pe)*ue,Ce)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)p(Y.location+de,ce.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);n.bindBuffer(n.ARRAY_BUFFER,We);for(let de=0;de<Y.locationSize;de++)w(Y.location+de,xe/Y.locationSize,oe,pe,xe*ue,xe/Y.locationSize*de*ue,Ce)}}else if(z!==void 0){const pe=z[K];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Y.location,pe);break;case 3:n.vertexAttrib3fv(Y.location,pe);break;case 4:n.vertexAttrib4fv(Y.location,pe);break;default:n.vertexAttrib1fv(Y.location,pe)}}}}E()}function I(){C();for(const _ in i){const P=i[_];for(const O in P){const D=P[O];for(const F in D)h(D[F].object),delete D[F];delete P[O]}delete i[_]}}function L(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const O in P){const D=P[O];for(const F in D)h(D[F].object),delete D[F];delete P[O]}delete i[_.id]}function U(_){for(const P in i){const O=i[P];if(O[_.id]===void 0)continue;const D=O[_.id];for(const F in D)h(D[F].object),delete D[F];delete O[_.id]}}function C(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function A1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Mn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const C=U===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==jn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==yn&&!C)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:I,maxSamples:L}}function R1(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Oi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,w=E*4;let M=p.clippingState||null;l.value=M,M=h(g,f,w,d);for(let I=0;I!==w;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=d;w!==x;++w,M+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function P1(n){let e=new WeakMap;function t(o,a){return a===ra?o.mapping=tr:a===Jl&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===Jl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class gp extends fp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,Nu=[.125,.215,.35,.446,.526,.582],us=20,ml=new gp,Fu=new Ve;let gl=null,_l=0,vl=0,xl=!1;const ls=(1+Math.sqrt(5))/2,ks=1/ls,Ou=[new B(-ls,ks,0),new B(ls,ks,0),new B(-ks,0,ls),new B(ks,0,ls),new B(0,ls,-ks),new B(0,ls,ks),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,_l,vl),this._renderer.xr.enabled=xl,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:_i,format:Mn,colorSpace:xs,depthBuffer:!1},s=Bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L1(r)),this._blurMaterial=D1(r,e,t)}return s}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,i,s){const a=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Fu),h.toneMapping=Wi,h.autoClear=!1;const d=new rr({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new we(new Ct,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Fu),x=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Ro(s,E*w,p>2?w:0,w,w),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ml)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ou[(s-r-1)%Ou.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new we(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*us-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let E=0;for(let U=0;U<us;++U){const C=U/x,v=Math.exp(-C*C/2);p.push(v),U===0?E+=v:U<m&&(E+=2*v)}for(let U=0;U<p.length;U++)p[U]=p[U]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const M=this._sizeLods[s],I=3*M*(s>w-Vs?s-w+Vs:0),L=4*(this._cubeSize-M);Ro(t,I,L,3*M,2*M),l.setRenderTarget(t),l.render(u,ml)}}function L1(n){const e=[],t=[],i=[];let s=n;const r=n-Vs+1+Nu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Vs?l=Nu[o-n+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*d),w=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let L=0;L<d;L++){const U=L%3*2/3-1,C=L>2?0:-1,v=[U,C,0,U+2/3,C,0,U+2/3,C+1,0,U,C,0,U+2/3,C+1,0,U,C+1,0];E.set(v,x*g*L),w.set(f,m*g*L);const _=[L,L,L,L,L,L];M.set(_,p*g*L)}const I=new Yt;I.setAttribute("position",new Yn(E,x)),I.setAttribute("uv",new Yn(w,m)),I.setAttribute("faceIndex",new Yn(M,p)),e.push(I),s>Vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bu(n,e,t){const i=new qi(n,e,t);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function D1(n,e,t){const i=new Float32Array(us),s=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zu(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Hu(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ra||l===Jl,h=l===tr||l===nr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ku(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new ku(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function U1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function N1(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const E=d.array;x=d.version;for(let w=0,M=E.length;w<M;w+=3){const I=E[w+0],L=E[w+1],U=E[w+2];f.push(I,L,L,U,U,I)}}else if(g!==void 0){const E=g.array;x=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){const I=w+0,L=w+1,U=w+2;f.push(I,L,L,U,U,I)}}else return;const m=new(sp(f)?hp:cp)(f,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function F1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*x[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function O1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function k1(n,e,t){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let _=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*L*4*u),C=new op(U,I,L,u);C.type=yn,C.needsUpdate=!0;const v=M*4;for(let P=0;P<u;P++){const O=p[P],D=E[P],F=w[P],V=I*L*4*P;for(let z=0;z<O.count;z++){const K=z*v;g===!0&&(s.fromBufferAttribute(O,z),U[V+K+0]=s.x,U[V+K+1]=s.y,U[V+K+2]=s.z,U[V+K+3]=0),x===!0&&(s.fromBufferAttribute(D,z),U[V+K+4]=s.x,U[V+K+5]=s.y,U[V+K+6]=s.z,U[V+K+7]=0),m===!0&&(s.fromBufferAttribute(F,z),U[V+K+8]=s.x,U[V+K+9]=s.y,U[V+K+10]=s.z,U[V+K+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new re(I,L)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function B1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class _p extends Bt{constructor(e,t,i,s,r,o,a,l,c,h=Zs){if(h!==Zs&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zs&&(i=ps),i===void 0&&h===sr&&(i=ir),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vp=new Bt,Gu=new _p(1,1),xp=new op,yp=new Sx,Mp=new pp,Vu=[],Wu=[],Xu=new Float32Array(16),$u=new Float32Array(9),qu=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ra(n,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function V1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function W1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),Ft(t,i)}}function X1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Ft(t,i)}}function $1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),Ft(t,i)}}function q1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function Z1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function tS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=ip,r=Gu):r=vp,t.setTexture2D(e||r,s)}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yp,s)}function iS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mp,s)}function sS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xp,s)}function rS(n){switch(n){case 5126:return z1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return X1;case 35676:return $1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return j1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return J1;case 36295:return Q1;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return sS}}function oS(n,e){n.uniform1fv(this.addr,e)}function aS(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function lS(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function cS(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function hS(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uS(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dS(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fS(n,e){n.uniform1iv(this.addr,e)}function pS(n,e){n.uniform2iv(this.addr,e)}function mS(n,e){n.uniform3iv(this.addr,e)}function gS(n,e){n.uniform4iv(this.addr,e)}function _S(n,e){n.uniform1uiv(this.addr,e)}function vS(n,e){n.uniform2uiv(this.addr,e)}function xS(n,e){n.uniform3uiv(this.addr,e)}function yS(n,e){n.uniform4uiv(this.addr,e)}function MS(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vp,r[o])}function SS(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yp,r[o])}function bS(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mp,r[o])}function wS(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xp,r[o])}function ES(n){switch(n){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return cS;case 35674:return hS;case 35675:return uS;case 35676:return dS;case 5124:case 35670:return fS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return wS}}class TS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rS(t.type)}}class AS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ES(t.type)}}class CS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const yl=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function RS(n,e,t){const i=n.name,s=i.length;for(yl.lastIndex=0;;){const r=yl.exec(i),o=yl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yu(t,c===void 0?new TS(a,n,e):new AS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new CS(a),Yu(t,u)),t=u}}}class Ko{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);RS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ju(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const PS=37297;let LS=0;function DS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ku=new Ze;function IS(n){it._getMatrix(Ku,it.workingColorSpace,n);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+DS(n.getShaderSource(e),o)}else return s}function US(n,e){const t=IS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function NS(n,e){let t;switch(e){case jv:t="Linear";break;case Kv:t="Reinhard";break;case Zv:t="Cineon";break;case Xf:t="ACESFilmic";break;case Qv:t="AgX";break;case ex:t="Neutral";break;case Jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new B;function FS(){it.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function kS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function Ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(zS,GS)}const HS=new Map;function GS(n,e){let t=Qe[e];if(t===void 0){const i=HS.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}const VS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(n){return n.replace(VS,WS)}function WS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function td(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function $S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function YS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case qv:e="ENVMAP_BLENDING_MIX";break;case Yv:e="ENVMAP_BLENDING_ADD";break}return e}function jS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function KS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=XS(t),c=$S(t),h=qS(t),u=YS(t),f=jS(t),d=OS(t),g=kS(r),x=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Wi?NS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),FS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Cc(o),o=Ju(o,t),o=Qu(o,t),a=Cc(a),a=Ju(a,t),a=Qu(a,t),o=ed(o),a=ed(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=E+m+o,M=E+p+a,I=ju(s,s.VERTEX_SHADER,w),L=ju(s,s.FRAGMENT_SHADER,M);s.attachShader(x,I),s.attachShader(x,L),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(I).trim(),F=s.getShaderInfoLog(L).trim();let V=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,L);else{const K=Zu(s,I,"vertex"),Y=Zu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||F==="")&&(z=!1);z&&(P.diagnostics={runnable:V,programLog:O,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(I),s.deleteShader(L),C=new Ko(s,x),v=BS(s,x)}let C;this.getUniforms=function(){return C===void 0&&U(this),C};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,PS)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}let ZS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QS(e),t.set(e,i)),i}}class QS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function eb(n,e,t,i,s,r,o){const a=new ap,l=new JS,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,_,P,O,D){const F=O.fog,V=D.geometry,z=v.isMeshStandardMaterial?O.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),Y=K&&K.mapping===Ta?K.image.height:null,ce=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const pe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=pe!==void 0?pe.length:0;let Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let We,oe,ue,Ce;if(ce){const ht=Vn[ce];We=ht.vertexShader,oe=ht.fragmentShader}else We=v.vertexShader,oe=v.fragmentShader,l.update(v),ue=l.getVertexShaderID(v),Ce=l.getFragmentShaderID(v);const de=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,Pe=D.isBatchedMesh===!0,et=!!v.map,T=!!v.matcap,N=!!K,y=!!v.aoMap,G=!!v.lightMap,H=!!v.bumpMap,$=!!v.normalMap,Z=!!v.displacementMap,ie=!!v.emissiveMap,Q=!!v.metalnessMap,b=!!v.roughnessMap,S=v.anisotropy>0,k=v.clearcoat>0,j=v.dispersion>0,ee=v.iridescence>0,J=v.sheen>0,fe=v.transmission>0,le=S&&!!v.anisotropyMap,ge=k&&!!v.clearcoatMap,ke=k&&!!v.clearcoatNormalMap,he=k&&!!v.clearcoatRoughnessMap,ye=ee&&!!v.iridescenceMap,Fe=ee&&!!v.iridescenceThicknessMap,He=J&&!!v.sheenColorMap,_e=J&&!!v.sheenRoughnessMap,Xe=!!v.specularMap,qe=!!v.specularColorMap,ct=!!v.specularIntensityMap,W=fe&&!!v.transmissionMap,Se=fe&&!!v.thicknessMap,se=!!v.gradientMap,ae=!!v.alphaMap,Ae=v.alphaTest>0,Ee=!!v.alphaHash,je=!!v.extensions;let bt=Wi;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Ht={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:oe,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:Ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:xs,alphaToCoverage:!!v.alphaToCoverage,map:et,matcap:T,envMap:N,envMapMode:N&&K.mapping,envMapCubeUVHeight:Y,aoMap:y,lightMap:G,bumpMap:H,normalMap:$,displacementMap:f&&Z,emissiveMap:ie,normalMapObjectSpace:$&&v.normalMapType===sx,normalMapTangentSpace:$&&v.normalMapType===np,metalnessMap:Q,roughnessMap:b,anisotropy:S,anisotropyMap:le,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:ke,clearcoatRoughnessMap:he,dispersion:j,iridescence:ee,iridescenceMap:ye,iridescenceThicknessMap:Fe,sheen:J,sheenColorMap:He,sheenRoughnessMap:_e,specularMap:Xe,specularColorMap:qe,specularIntensityMap:ct,transmission:fe,transmissionMap:W,thicknessMap:Se,gradientMap:se,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ae,alphaHash:Ee,combine:v.combine,mapUv:et&&x(v.map.channel),aoMapUv:y&&x(v.aoMap.channel),lightMapUv:G&&x(v.lightMap.channel),bumpMapUv:H&&x(v.bumpMap.channel),normalMapUv:$&&x(v.normalMap.channel),displacementMapUv:Z&&x(v.displacementMap.channel),emissiveMapUv:ie&&x(v.emissiveMap.channel),metalnessMapUv:Q&&x(v.metalnessMap.channel),roughnessMapUv:b&&x(v.roughnessMap.channel),anisotropyMapUv:le&&x(v.anisotropyMap.channel),clearcoatMapUv:ge&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(v.sheenRoughnessMap.channel),specularMapUv:Xe&&x(v.specularMap.channel),specularColorMapUv:qe&&x(v.specularColorMap.channel),specularIntensityMapUv:ct&&x(v.specularIntensityMap.channel),transmissionMapUv:W&&x(v.transmissionMap.channel),thicknessMapUv:Se&&x(v.thicknessMap.channel),alphaMapUv:ae&&x(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(et||ae),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:et&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:ie&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kt,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:je&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&v.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)_.push(P),_.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(E(_,v),w(_,v),_.push(n.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function E(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function w(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const _=g[v.type];let P;if(_){const O=Vn[_];P=Ox.clone(O.uniforms)}else P=v.uniforms;return P}function I(v,_){let P;for(let O=0,D=h.length;O<D;O++){const F=h[O];if(F.cacheKey===_){P=F,++P.usedTimes;break}}return P===void 0&&(P=new KS(n,_,v,r),h.push(P)),P}function L(v){if(--v.usedTimes===0){const _=h.indexOf(v);h[_]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:C}}function tb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function id(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||nb),i.length>1&&i.sort(f||nd),s.length>1&&s.sort(f||nd)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ib(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new id,n.set(i,[o])):s>=r.length?(o=new id,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ve};break;case"SpotLight":t={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function rb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ob=0;function ab(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lb(n){const e=new sb,t=rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new yt,o=new yt;function a(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,E=0,w=0,M=0,I=0,L=0,U=0;c.sort(ab);for(let v=0,_=c.length;v<_;v++){const P=c[v],O=P.color,D=P.intensity,F=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*D,u+=O.g*D,f+=O.b*D;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],D);U++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,Y=t.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=P.shadow.matrix,E++}i.directional[d]=z,d++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(O).multiplyScalar(D),z.distance=F,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[x]=z;const K=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,K.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=V,M++}x++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(O).multiplyScalar(D),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=z,m++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const K=P.shadow,Y=t.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=z,g++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(D),z.groundColor.copy(P.groundColor).multiplyScalar(D),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==w||C.numSpotShadows!==M||C.numSpotMaps!==I||C.numLightProbes!==U)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=w,C.numSpotShadows=M,C.numSpotMaps=I,C.numLightProbes=U,i.version=ob++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const w=c[p];if(w.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(w.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function sd(n){const e=new lb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new sd(n),e.set(s,[a])):r>=o.length?(a=new sd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class hb extends cr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ub extends cr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pb(n,e,t){let i=new ih;const s=new re,r=new re,o=new Et,a=new hb({depthPacking:ix}),l=new ub,c={},h=t.maxTextureSize,u={[$i]:on,[on]:$i,[kt]:kt},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:db,fragmentShader:fb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new we(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let p=this.type;this.render=function(L,U,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const v=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Vi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=p!==hi&&this.type===hi,F=p===hi&&this.type!==hi;for(let V=0,z=L.length;V<z;V++){const K=L[V],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ce=Y.getFrameExtents();if(s.multiply(ce),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,Y.mapSize.y=r.y)),Y.map===null||D===!0||F===!0){const xe=this.type!==hi?{minFilter:fn,magFilter:fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new qi(s.x,s.y,xe),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const pe=Y.getViewportCount();for(let xe=0;xe<pe;xe++){const Re=Y.getViewport(xe);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),O.viewport(o),Y.updateMatrices(K,xe),i=Y.getFrustum(),M(U,C,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===hi&&E(Y,C),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,_,P)};function E(L,U){const C=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,C,f,x,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,C,d,x,null)}function w(L,U,C,v){let _=null;const P=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)_=P;else if(_=C.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const O=_.uuid,D=U.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let V=F[D];V===void 0&&(V=_.clone(),F[D]=V,U.addEventListener("dispose",I)),_=V}if(_.visible=U.visible,_.wireframe=U.wireframe,v===hi?_.side=U.shadowSide!==null?U.shadowSide:U.side:_.side=U.shadowSide!==null?U.shadowSide:u[U.side],_.alphaMap=U.alphaMap,_.alphaTest=U.alphaTest,_.map=U.map,_.clipShadows=U.clipShadows,_.clippingPlanes=U.clippingPlanes,_.clipIntersection=U.clipIntersection,_.displacementMap=U.displacementMap,_.displacementScale=U.displacementScale,_.displacementBias=U.displacementBias,_.wireframeLinewidth=U.wireframeLinewidth,_.linewidth=U.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=n.properties.get(_);O.light=C}return _}function M(L,U,C,v,_){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===hi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const D=e.update(L),F=L.material;if(Array.isArray(F)){const V=D.groups;for(let z=0,K=V.length;z<K;z++){const Y=V[z],ce=F[Y.materialIndex];if(ce&&ce.visible){const pe=w(L,ce,v,_);L.onBeforeShadow(n,L,U,C,D,pe,Y),n.renderBufferDirect(C,null,D,pe,L,Y),L.onAfterShadow(n,L,U,C,D,pe,Y)}}}else if(F.visible){const V=w(L,F,v,_);L.onBeforeShadow(n,L,U,C,D,V,null),n.renderBufferDirect(C,null,D,V,L,null),L.onAfterShadow(n,L,U,C,D,V,null)}}const O=L.children;for(let D=0,F=O.length;D<F;D++)M(O[D],U,C,v,_)}function I(L){L.target.removeEventListener("dispose",I);for(const C in c){const v=c[C],_=L.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const mb={[Xl]:$l,[ql]:Kl,[Yl]:Zl,[er]:jl,[$l]:Xl,[Kl]:ql,[Zl]:Yl,[jl]:er};function gb(n,e){function t(){let W=!1;const Se=new Et;let se=null;const ae=new Et(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!W&&(n.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Ee,je,bt,Ht){Ht===!0&&(Ae*=bt,Ee*=bt,je*=bt),Se.set(Ae,Ee,je,bt),ae.equals(Se)===!1&&(n.clearColor(Ae,Ee,je,bt),ae.copy(Se))},reset:function(){W=!1,se=null,ae.set(-1,0,0,0)}}}function i(){let W=!1,Se=!1,se=null,ae=null,Ae=null;return{setReversed:function(Ee){if(Se!==Ee){const je=e.get("EXT_clip_control");Se?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const bt=Ae;Ae=null,this.setClear(bt)}Se=Ee},getReversed:function(){return Se},setTest:function(Ee){Ee?de(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!W&&(n.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(Se&&(Ee=mb[Ee]),ae!==Ee){switch(Ee){case Xl:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case jl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){Ae!==Ee&&(Se&&(Ee=1-Ee),n.clearDepth(Ee),Ae=Ee)},reset:function(){W=!1,se=null,ae=null,Ae=null,Se=!1}}}function s(){let W=!1,Se=null,se=null,ae=null,Ae=null,Ee=null,je=null,bt=null,Ht=null;return{setTest:function(ht){W||(ht?de(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ht){Se!==ht&&!W&&(n.stencilMask(ht),Se=ht)},setFunc:function(ht,En,ei){(se!==ht||ae!==En||Ae!==ei)&&(n.stencilFunc(ht,En,ei),se=ht,ae=En,Ae=ei)},setOp:function(ht,En,ei){(Ee!==ht||je!==En||bt!==ei)&&(n.stencilOp(ht,En,ei),Ee=ht,je=En,bt=ei)},setLocked:function(ht){W=ht},setClear:function(ht){Ht!==ht&&(n.clearStencil(ht),Ht=ht)},reset:function(){W=!1,Se=null,se=null,ae=null,Ae=null,Ee=null,je=null,bt=null,Ht=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,w=null,M=null,I=null,L=null,U=new Ve(0,0,0),C=0,v=!1,_=null,P=null,O=null,D=null,F=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=K>=2);let ce=null,pe={};const xe=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),We=new Et().fromArray(xe),oe=new Et().fromArray(Re);function ue(W,Se,se,ae){const Ae=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(W,Ee),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<se;je++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Se+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ee}const Ce={};Ce[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(er),H(!1),$(lu),de(n.CULL_FACE),y(Vi);function de(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function Le(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function ze(W,Se){return u[W]!==Se?(n.bindFramebuffer(W,Se),u[W]=Se,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Se),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Pe(W,Se){let se=d,ae=!1;if(W){se=f.get(Se),se===void 0&&(se=[],f.set(Se,se));const Ae=W.textures;if(se.length!==Ae.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,je=Ae.length;Ee<je;Ee++)se[Ee]=n.COLOR_ATTACHMENT0+Ee;se.length=Ae.length,ae=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ae=!0);ae&&n.drawBuffers(se)}function et(W){return g!==W?(n.useProgram(W),g=W,!0):!1}const T={[hs]:n.FUNC_ADD,[Pv]:n.FUNC_SUBTRACT,[Lv]:n.FUNC_REVERSE_SUBTRACT};T[Dv]=n.MIN,T[Iv]=n.MAX;const N={[Uv]:n.ZERO,[Nv]:n.ONE,[Fv]:n.SRC_COLOR,[Vl]:n.SRC_ALPHA,[Gv]:n.SRC_ALPHA_SATURATE,[zv]:n.DST_COLOR,[kv]:n.DST_ALPHA,[Ov]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[Hv]:n.ONE_MINUS_DST_COLOR,[Bv]:n.ONE_MINUS_DST_ALPHA,[Vv]:n.CONSTANT_COLOR,[Wv]:n.ONE_MINUS_CONSTANT_COLOR,[Xv]:n.CONSTANT_ALPHA,[$v]:n.ONE_MINUS_CONSTANT_ALPHA};function y(W,Se,se,ae,Ae,Ee,je,bt,Ht,ht){if(W===Vi){x===!0&&(Le(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),W!==Rv){if(W!==m||ht!==v){if((p!==hs||M!==hs)&&(n.blendEquation(n.FUNC_ADD),p=hs,M=hs),ht)switch(W){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.ONE,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}E=null,w=null,I=null,L=null,U.set(0,0,0),C=0,m=W,v=ht}return}Ae=Ae||Se,Ee=Ee||se,je=je||ae,(Se!==p||Ae!==M)&&(n.blendEquationSeparate(T[Se],T[Ae]),p=Se,M=Ae),(se!==E||ae!==w||Ee!==I||je!==L)&&(n.blendFuncSeparate(N[se],N[ae],N[Ee],N[je]),E=se,w=ae,I=Ee,L=je),(bt.equals(U)===!1||Ht!==C)&&(n.blendColor(bt.r,bt.g,bt.b,Ht),U.copy(bt),C=Ht),m=W,v=!1}function G(W,Se){W.side===kt?Le(n.CULL_FACE):de(n.CULL_FACE);let se=W.side===on;Se&&(se=!se),H(se),W.blending===Ks&&W.transparent===!1?y(Vi):y(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const ae=W.stencilWrite;a.setTest(ae),ae&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ie(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(W){_!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),_=W)}function $(W){W!==Av?(de(n.CULL_FACE),W!==P&&(W===lu?n.cullFace(n.BACK):W===Cv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),P=W}function Z(W){W!==O&&(z&&n.lineWidth(W),O=W)}function ie(W,Se,se){W?(de(n.POLYGON_OFFSET_FILL),(D!==Se||F!==se)&&(n.polygonOffset(Se,se),D=Se,F=se)):Le(n.POLYGON_OFFSET_FILL)}function Q(W){W?de(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function b(W){W===void 0&&(W=n.TEXTURE0+V-1),ce!==W&&(n.activeTexture(W),ce=W)}function S(W,Se,se){se===void 0&&(ce===null?se=n.TEXTURE0+V-1:se=ce);let ae=pe[se];ae===void 0&&(ae={type:void 0,texture:void 0},pe[se]=ae),(ae.type!==W||ae.texture!==Se)&&(ce!==se&&(n.activeTexture(se),ce=se),n.bindTexture(W,Se||Ce[W]),ae.type=W,ae.texture=Se)}function k(){const W=pe[ce];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(W){We.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),We.copy(W))}function _e(W){oe.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),oe.copy(W))}function Xe(W,Se){let se=c.get(Se);se===void 0&&(se=new WeakMap,c.set(Se,se));let ae=se.get(W);ae===void 0&&(ae=n.getUniformBlockIndex(Se,W.name),se.set(W,ae))}function qe(W,Se){const ae=c.get(Se).get(W);l.get(Se)!==ae&&(n.uniformBlockBinding(Se,ae,W.__bindingPointIndex),l.set(Se,ae))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,pe={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,w=null,M=null,I=null,L=null,U=new Ve(0,0,0),C=0,v=!1,_=null,P=null,O=null,D=null,F=null,We.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Le,bindFramebuffer:ze,drawBuffers:Pe,useProgram:et,setBlending:y,setMaterial:G,setFlipSided:H,setCullFace:$,setLineWidth:Z,setPolygonOffset:ie,setScissorTest:Q,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:ye,texImage3D:Fe,updateUBOMapping:Xe,uniformBlockBinding:qe,texStorage2D:ke,texStorage3D:he,texSubImage2D:J,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:He,viewport:_e,reset:ct}}function rd(n,e,t,i){const s=_b(i);switch(t){case Kf:return n*e;case Zf:return n*e;case Jf:return n*e*2;case Qf:return n*e/s.components*s.byteLength;case Qc:return n*e/s.components*s.byteLength;case ep:return n*e*2/s.components*s.byteLength;case eh:return n*e*2/s.components*s.byteLength;case Jc:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case th:return n*e*4/s.components*s.byteLength;case Xo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jo:case Sc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tp:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ec:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _b(n){switch(n){case jn:case qf:return{byteLength:1,components:1};case $r:case Yf:case _i:return{byteLength:2,components:1};case Kc:case Zc:return{byteLength:2,components:4};case ps:case jc:case yn:return{byteLength:4,components:1};case jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return d?new OffscreenCanvas(b,S):qr("canvas")}function x(b,S,k){let j=1;const ee=Q(b);if((ee.width>k||ee.height>k)&&(j=k/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(j*ee.width),fe=Math.floor(j*ee.height);u===void 0&&(u=g(J,fe));const le=S?g(J,fe):u;return le.width=J,le.height=fe,le.getContext("2d").drawImage(b,0,0,J,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+fe+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(b,S,k,j,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=S;if(S===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),S===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const fe=ee?Aa:it.getTransfer(j);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=fe===dt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(b,S){let k;return b?S===null||S===ps||S===ir?k=n.DEPTH24_STENCIL8:S===yn?k=n.DEPTH32F_STENCIL8:S===$r&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ps||S===ir?k=n.DEPTH_COMPONENT24:S===yn?k=n.DEPTH_COMPONENT32F:S===$r&&(k=n.DEPTH_COMPONENT16),k}function I(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==fn&&b.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function L(b){const S=b.target;S.removeEventListener("dispose",L),C(S),S.isVideoTexture&&h.delete(S)}function U(b){const S=b.target;S.removeEventListener("dispose",U),_(S)}function C(b){const S=i.get(b);if(S.__webglInit===void 0)return;const k=b.source,j=f.get(k);if(j){const ee=j[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(b),Object.keys(j).length===0&&f.delete(k)}i.remove(b)}function v(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const k=b.source,j=f.get(k);delete j[S.__cacheKey],o.memory.textures--}function _(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ee=0;ee<S.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let j=0,ee=k.length;j<ee;j++){const J=i.get(k[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[j])}i.remove(b)}let P=0;function O(){P=0}function D(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function F(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function V(b,S){const k=i.get(b);if(b.isVideoTexture&&Z(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,b,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function z(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){oe(k,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function K(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){oe(k,b,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function Y(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){ue(k,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const ce={[Ql]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},pe={[fn]:n.NEAREST,[tx]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},xe={[rx]:n.NEVER,[ux]:n.ALWAYS,[ox]:n.LESS,[ip]:n.LEQUAL,[ax]:n.EQUAL,[hx]:n.GEQUAL,[lx]:n.GREATER,[cx]:n.NOTEQUAL};function Re(b,S){if(S.type===yn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===qa||S.magFilter===lo||S.magFilter===Hi||S.minFilter===en||S.minFilter===qa||S.minFilter===lo||S.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ce[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ce[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ce[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==lo&&S.minFilter!==Hi||S.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function We(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",L));const j=S.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const J=F(S);if(J!==b.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[J].usedTimes++;const fe=ee[b.__cacheKey];fe!==void 0&&(ee[b.__cacheKey].usedTimes--,fe.usedTimes===0&&v(S)),b.__cacheKey=J,b.__webglTexture=ee[J].texture}return k}function oe(b,S,k){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);const ee=We(b,S),J=S.source;t.bindTexture(j,b.__webglTexture,n.TEXTURE0+k);const fe=i.get(J);if(J.version!==fe.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const le=it.getPrimaries(it.workingColorSpace),ge=S.colorSpace===ki?null:it.getPrimaries(S.colorSpace),ke=S.colorSpace===ki||le===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let he=x(S.image,!1,s.maxTextureSize);he=ie(S,he);const ye=r.convert(S.format,S.colorSpace),Fe=r.convert(S.type);let He=w(S.internalFormat,ye,Fe,S.colorSpace,S.isVideoTexture);Re(j,S);let _e;const Xe=S.mipmaps,qe=S.isVideoTexture!==!0,ct=fe.__version===void 0||ee===!0,W=J.dataReady,Se=I(S,he);if(S.isDepthTexture)He=M(S.format===sr,S.type),ct&&(qe?t.texStorage2D(n.TEXTURE_2D,1,He,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,He,he.width,he.height,0,ye,Fe,null));else if(S.isDataTexture)if(Xe.length>0){qe&&ct&&t.texStorage2D(n.TEXTURE_2D,Se,He,Xe[0].width,Xe[0].height);for(let se=0,ae=Xe.length;se<ae;se++)_e=Xe[se],qe?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,se,He,_e.width,_e.height,0,ye,Fe,_e.data);S.generateMipmaps=!1}else qe?(ct&&t.texStorage2D(n.TEXTURE_2D,Se,He,he.width,he.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,ye,Fe,he.data)):t.texImage2D(n.TEXTURE_2D,0,He,he.width,he.height,0,ye,Fe,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,He,Xe[0].width,Xe[0].height,he.depth);for(let se=0,ae=Xe.length;se<ae;se++)if(_e=Xe[se],S.format!==Mn)if(ye!==null)if(qe){if(W)if(S.layerUpdates.size>0){const Ae=rd(_e.width,_e.height,S.format,S.type);for(const Ee of S.layerUpdates){const je=_e.data.subarray(Ee*Ae/_e.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ee,_e.width,_e.height,1,ye,je)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,he.depth,ye,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,He,_e.width,_e.height,he.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,he.depth,ye,Fe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,He,_e.width,_e.height,he.depth,0,ye,Fe,_e.data)}else{qe&&ct&&t.texStorage2D(n.TEXTURE_2D,Se,He,Xe[0].width,Xe[0].height);for(let se=0,ae=Xe.length;se<ae;se++)_e=Xe[se],S.format!==Mn?ye!==null?qe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,se,He,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,Fe,_e.data):t.texImage2D(n.TEXTURE_2D,se,He,_e.width,_e.height,0,ye,Fe,_e.data)}else if(S.isDataArrayTexture)if(qe){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,He,he.width,he.height,he.depth),W)if(S.layerUpdates.size>0){const se=rd(he.width,he.height,S.format,S.type);for(const ae of S.layerUpdates){const Ae=he.data.subarray(ae*se/he.data.BYTES_PER_ELEMENT,(ae+1)*se/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,ye,Fe,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ye,Fe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,he.width,he.height,he.depth,0,ye,Fe,he.data);else if(S.isData3DTexture)qe?(ct&&t.texStorage3D(n.TEXTURE_3D,Se,He,he.width,he.height,he.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ye,Fe,he.data)):t.texImage3D(n.TEXTURE_3D,0,He,he.width,he.height,he.depth,0,ye,Fe,he.data);else if(S.isFramebufferTexture){if(ct)if(qe)t.texStorage2D(n.TEXTURE_2D,Se,He,he.width,he.height);else{let se=he.width,ae=he.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,He,se,ae,0,ye,Fe,null),se>>=1,ae>>=1}}else if(Xe.length>0){if(qe&&ct){const se=Q(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Se,He,se.width,se.height)}for(let se=0,ae=Xe.length;se<ae;se++)_e=Xe[se],qe?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye,Fe,_e):t.texImage2D(n.TEXTURE_2D,se,He,ye,Fe,_e);S.generateMipmaps=!1}else if(qe){if(ct){const se=Q(he);t.texStorage2D(n.TEXTURE_2D,Se,He,se.width,se.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Fe,he)}else t.texImage2D(n.TEXTURE_2D,0,He,ye,Fe,he);m(S)&&p(j),fe.__version=J.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ue(b,S,k){if(S.image.length!==6)return;const j=We(b,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const J=i.get(ee);if(ee.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const fe=it.getPrimaries(it.workingColorSpace),le=S.colorSpace===ki?null:it.getPrimaries(S.colorSpace),ge=S.colorSpace===ki||fe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ke=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let ae=0;ae<6;ae++)!ke&&!he?ye[ae]=x(S.image[ae],!0,s.maxCubemapSize):ye[ae]=he?S.image[ae].image:S.image[ae],ye[ae]=ie(S,ye[ae]);const Fe=ye[0],He=r.convert(S.format,S.colorSpace),_e=r.convert(S.type),Xe=w(S.internalFormat,He,_e,S.colorSpace),qe=S.isVideoTexture!==!0,ct=J.__version===void 0||j===!0,W=ee.dataReady;let Se=I(S,Fe);Re(n.TEXTURE_CUBE_MAP,S);let se;if(ke){qe&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Xe,Fe.width,Fe.height);for(let ae=0;ae<6;ae++){se=ye[ae].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const Ee=se[Ae];S.format!==Mn?He!==null?qe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Ee.width,Ee.height,He,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Xe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,Ee.width,Ee.height,He,_e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,Xe,Ee.width,Ee.height,0,He,_e,Ee.data)}}}else{if(se=S.mipmaps,qe&&ct){se.length>0&&Se++;const ae=Q(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){qe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ye[ae].width,ye[ae].height,He,_e,ye[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,ye[ae].width,ye[ae].height,0,He,_e,ye[ae].data);for(let Ae=0;Ae<se.length;Ae++){const je=se[Ae].image[ae].image;qe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,je.width,je.height,He,_e,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Xe,je.width,je.height,0,He,_e,je.data)}}else{qe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,He,_e,ye[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,He,_e,ye[ae]);for(let Ae=0;Ae<se.length;Ae++){const Ee=se[Ae];qe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,He,_e,Ee.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,Xe,He,_e,Ee.image[ae])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),J.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ce(b,S,k,j,ee,J){const fe=r.convert(k.format,k.colorSpace),le=r.convert(k.type),ge=w(k.internalFormat,fe,le,k.colorSpace),ke=i.get(S),he=i.get(k);if(he.__renderTarget=S,!ke.__hasExternalTextures){const ye=Math.max(1,S.width>>J),Fe=Math.max(1,S.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,ge,ye,Fe,S.depth,0,fe,le,null):t.texImage2D(ee,J,ge,ye,Fe,0,fe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,he.__webglTexture,0,H(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,he.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(b,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer){const j=S.depthTexture,ee=j&&j.isDepthTexture?j.type:null,J=M(S.stencilBuffer,ee),fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=H(S);$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,J,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,b)}else{const j=S.textures;for(let ee=0;ee<j.length;ee++){const J=j[ee],fe=r.convert(J.format,J.colorSpace),le=r.convert(J.type),ge=w(J.internalFormat,fe,le,J.colorSpace),ke=H(S);k&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ge,S.width,S.height):$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const ee=j.__webglTexture,J=H(S);if(S.depthTexture.format===Zs)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===sr)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ze(b){const S=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=j}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),de(S.__webglDepthbuffer[j],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),de(S.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(b,S,k){const j=i.get(b);S!==void 0&&Ce(j.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ze(b)}function et(b){const S=b.texture,k=i.get(b),j=i.get(S);b.addEventListener("dispose",U);const ee=b.textures,J=b.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let ge=0;ge<S.mipmaps.length;ge++)k.__webglFramebuffer[le][ge]=n.createFramebuffer()}else k.__webglFramebuffer[le]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)k.__webglFramebuffer[le]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(fe)for(let le=0,ge=ee.length;le<ge;le++){const ke=i.get(ee[le]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&$(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const ge=ee[le];k.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const ke=r.convert(ge.format,ge.colorSpace),he=r.convert(ge.type),ye=w(ge.internalFormat,ke,he,ge.colorSpace,b.isXRRenderTarget===!0),Fe=H(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,k.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),de(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Re(n.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Ce(k.__webglFramebuffer[le][ge],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else Ce(k.__webglFramebuffer[le],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,ge=ee.length;le<ge;le++){const ke=ee[le],he=i.get(ke);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Re(n.TEXTURE_2D,ke),Ce(k.__webglFramebuffer,b,ke,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Re(le,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Ce(k.__webglFramebuffer[ge],b,S,n.COLOR_ATTACHMENT0,le,ge);else Ce(k.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,le,0);m(S)&&p(le),t.unbindTexture()}b.depthBuffer&&ze(b)}function T(b){const S=b.textures;for(let k=0,j=S.length;k<j;k++){const ee=S[k];if(m(ee)){const J=E(b),fe=i.get(ee).__webglTexture;t.bindTexture(J,fe),p(J),t.unbindTexture()}}}const N=[],y=[];function G(b){if(b.samples>0){if($(b)===!1){const S=b.textures,k=b.width,j=b.height;let ee=n.COLOR_BUFFER_BIT;const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(b),le=S.length>1;if(le)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const ke=i.get(S[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,ee,n.NEAREST),l===!0&&(N.length=0,y.length=0,N.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(N.push(J),y.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const ke=i.get(S[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function H(b){return Math.min(s.maxSamples,b.samples)}function $(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Z(b){const S=o.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function ie(b,S){const k=b.colorSpace,j=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==xs&&k!==ki&&(it.getTransfer(k)===dt?(j!==Mn||ee!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Pe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=$}function xb(n,e){function t(i,s=ki){let r;const o=it.getTransfer(s);if(i===jn)return n.UNSIGNED_BYTE;if(i===Kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qf)return n.BYTE;if(i===Yf)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===jc)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===yn)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Kf)return n.ALPHA;if(i===Jc)return n.RGB;if(i===Mn)return n.RGBA;if(i===Zf)return n.LUMINANCE;if(i===Jf)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===sr)return n.DEPTH_STENCIL;if(i===Qf)return n.RED;if(i===Qc)return n.RED_INTEGER;if(i===ep)return n.RG;if(i===eh)return n.RG_INTEGER;if(i===th)return n.RGBA_INTEGER;if(i===Xo||i===$o||i===qo||i===Yo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Sc||i===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tp||i===wc||i===Ec||i===Tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class yb extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:Sb,fragmentShader:bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new wt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eb extends ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=new wb,m=t.getContextAttributes();let p=null,E=null;const w=[],M=[],I=new re;let L=null;const U=new vn;U.viewport=new Et;const C=new vn;C.viewport=new Et;const v=[U,C],_=new yb;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ue=w[oe];return ue===void 0&&(ue=new Ml,w[oe]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(oe){let ue=w[oe];return ue===void 0&&(ue=new Ml,w[oe]=ue),ue.getGripSpace()},this.getHand=function(oe){let ue=w[oe];return ue===void 0&&(ue=new Ml,w[oe]=ue),ue.getHandSpace()};function D(oe){const ue=M.indexOf(oe.inputSource);if(ue===-1)return;const Ce=w[ue];Ce!==void 0&&(Ce.update(oe.inputSource,oe.frame,c||o),Ce.dispatchEvent({type:oe.type,data:oe.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",V);for(let oe=0;oe<w.length;oe++){const ue=M[oe];ue!==null&&(M[oe]=null,w[oe].disconnect(ue))}P=null,O=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,E=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new qi(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Ce=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?sr:Zs,Ce=m.stencil?ir:ps);const Le={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new qi(f.textureWidth,f.textureHeight,{format:Mn,type:jn,depthTexture:new _p(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(oe){for(let ue=0;ue<oe.removed.length;ue++){const Ce=oe.removed[ue],de=M.indexOf(Ce);de>=0&&(M[de]=null,w[de].disconnect(Ce))}for(let ue=0;ue<oe.added.length;ue++){const Ce=oe.added[ue];let de=M.indexOf(Ce);if(de===-1){for(let ze=0;ze<w.length;ze++)if(ze>=M.length){M.push(Ce),de=ze;break}else if(M[ze]===null){M[ze]=Ce,de=ze;break}if(de===-1)break}const Le=w[de];Le&&Le.connect(Ce)}}const z=new B,K=new B;function Y(oe,ue,Ce){z.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(Ce.matrixWorld);const de=z.distanceTo(K),Le=ue.projectionMatrix.elements,ze=Ce.projectionMatrix.elements,Pe=Le[14]/(Le[10]-1),et=Le[14]/(Le[10]+1),T=(Le[9]+1)/Le[5],N=(Le[9]-1)/Le[5],y=(Le[8]-1)/Le[0],G=(ze[8]+1)/ze[0],H=Pe*y,$=Pe*G,Z=de/(-y+G),ie=Z*-y;if(ue.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ie),oe.translateZ(Z),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Le[10]===-1)oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Q=Pe+Z,b=et+Z,S=H-ie,k=$+(de-ie),j=T*et/b*Q,ee=N*et/b*Q;oe.projectionMatrix.makePerspective(S,k,j,ee,Q,b),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ce(oe,ue){ue===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ue.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ue=oe.near,Ce=oe.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Ce=x.depthFar)),_.near=C.near=U.near=ue,_.far=C.far=U.far=Ce,(P!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,O=_.far),U.layers.mask=oe.layers.mask|2,C.layers.mask=oe.layers.mask|4,_.layers.mask=U.layers.mask|C.layers.mask;const de=oe.parent,Le=_.cameras;ce(_,de);for(let ze=0;ze<Le.length;ze++)ce(Le[ze],de);Le.length===2?Y(_,U,C):_.projectionMatrix.copy(U.projectionMatrix),pe(oe,_,de)};function pe(oe,ue,Ce){Ce===null?oe.matrix.copy(ue.matrixWorld):(oe.matrix.copy(Ce.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ue.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Ac*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let xe=null;function Re(oe,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){const Ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let de=!1;Ce.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let ze=0;ze<Ce.length;ze++){const Pe=Ce[ze];let et=null;if(d!==null)et=d.getViewport(Pe);else{const N=u.getViewSubImage(f,Pe);et=N.viewport,ze===0&&(e.setRenderTargetTextures(E,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(E))}let T=v[ze];T===void 0&&(T=new vn,T.layers.enable(ze),T.viewport=new Et,v[ze]=T),T.matrix.fromArray(Pe.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Pe.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(et.x,et.y,et.width,et.height),ze===0&&(_.matrix.copy(T.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(T)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ze=u.getDepthInformation(Ce[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,s.renderState)}}for(let Ce=0;Ce<w.length;Ce++){const de=M[Ce],Le=w[Ce];de!==null&&Le!==void 0&&Le.update(de,ue,c||o)}xe&&xe(oe,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const We=new mp;We.setAnimationLoop(Re),this.setAnimationLoop=function(oe){xe=oe},this.dispose=function(){}}}const rs=new Kn,Tb=new yt;function Ab(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),w=E.envMap,M=E.envMapRotation;w&&(m.envMap.value=w,rs.copy(M),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(rs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const M=w.program;i.uniformBlockBinding(E,M)}function c(E,w){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const I=w.program;i.updateUBOMapping(E,I);const L=e.render.frame;r[E.id]!==L&&(f(E),r[E.id]=L)}function h(E){const w=u();E.__bindingPointIndex=w;const M=n.createBuffer(),I=E.__size,L=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=s[E.id],M=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,U=M.length;L<U;L++){const C=Array.isArray(M[L])?M[L]:[M[L]];for(let v=0,_=C.length;v<_;v++){const P=C[v];if(d(P,L,v,I)===!0){const O=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let V=0;V<D.length;V++){const z=D[V],K=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+F,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,w,M,I){const L=E.value,U=w+"_"+M;if(I[U]===void 0)return typeof L=="number"||typeof L=="boolean"?I[U]=L:I[U]=L.clone(),!0;{const C=I[U];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return I[U]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function g(E){const w=E.uniforms;let M=0;const I=16;for(let U=0,C=w.length;U<C;U++){const v=Array.isArray(w[U])?w[U]:[w[U]];for(let _=0,P=v.length;_<P;_++){const O=v[_],D=Array.isArray(O.value)?O.value:[O.value];for(let F=0,V=D.length;F<V;F++){const z=D[F],K=x(z),Y=M%I,ce=Y%K.boundary,pe=Y+ce;M+=ce,pe!==0&&I-pe<K.storage&&(M+=I-pe),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const L=M%I;return L>0&&(M+=I-L),E.__size=M,E.__cache={},this}function x(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Rb{constructor(e={}){const{canvas:t=px(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=Wi,this.toneMappingExposure=1;const M=this;let I=!1,L=0,U=0,C=null,v=-1,_=null;const P=new Et,O=new Et;let D=null;const F=new Ve(0);let V=0,z=t.width,K=t.height,Y=1,ce=null,pe=null;const xe=new Et(0,0,z,K),Re=new Et(0,0,z,K);let We=!1;const oe=new ih;let ue=!1,Ce=!1;const de=new yt,Le=new yt,ze=new B,Pe=new Et,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let T=!1;function N(){return C===null?Y:1}let y=i;function G(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),y===null){const X="webgl2";if(y=G(X,R),y===null)throw G(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let H,$,Z,ie,Q,b,S,k,j,ee,J,fe,le,ge,ke,he,ye,Fe,He,_e,Xe,qe,ct,W;function Se(){H=new U1(y),H.init(),qe=new xb(y,H),$=new C1(y,H,e,qe),Z=new gb(y,H),$.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ie=new O1(y),Q=new tb,b=new vb(y,H,Z,Q,$,qe,ie),S=new P1(M),k=new I1(M),j=new Wx(y),ct=new T1(y,j),ee=new N1(y,j,ie,ct),J=new B1(y,ee,j,ie),He=new k1(y,$,b),he=new R1(Q),fe=new eb(M,S,k,H,$,ct,he),le=new Ab(M,Q),ge=new ib,ke=new cb(H),Fe=new E1(M,S,k,Z,J,d,l),ye=new pb(M,J,$),W=new Cb(y,ie,$,Z),_e=new A1(y,H,ie),Xe=new F1(y,H,ie),ie.programs=fe.programs,M.capabilities=$,M.extensions=H,M.properties=Q,M.renderLists=ge,M.shadowMap=ye,M.state=Z,M.info=ie}Se();const se=new Eb(M,y);this.xr=se,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=H.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=H.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,X,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=X,t.width=Math.floor(R*Y),t.height=Math.floor(X*Y),te===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(z*Y,K*Y).floor()},this.setDrawingBufferSize=function(R,X,te){z=R,K=X,Y=te,t.width=Math.floor(R*te),t.height=Math.floor(X*te),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,X,te,ne){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,X,te,ne),Z.viewport(P.copy(xe).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Re)},this.setScissor=function(R,X,te,ne){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,X,te,ne),Z.scissor(O.copy(Re).multiplyScalar(Y).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(R){Z.setScissorTest(We=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){pe=R},this.getClearColor=function(R){return R.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(R=!0,X=!0,te=!0){let ne=0;if(R){let q=!1;if(C!==null){const me=C.texture.format;q=me===th||me===eh||me===Qc}if(q){const me=C.texture.type,Te=me===jn||me===ps||me===$r||me===ir||me===Kc||me===Zc,De=Fe.getClearColor(),Ie=Fe.getClearAlpha(),$e=De.r,Ke=De.g,Ue=De.b;Te?(g[0]=$e,g[1]=Ke,g[2]=Ue,g[3]=Ie,y.clearBufferuiv(y.COLOR,0,g)):(x[0]=$e,x[1]=Ke,x[2]=Ue,x[3]=Ie,y.clearBufferiv(y.COLOR,0,x))}else ne|=y.COLOR_BUFFER_BIT}X&&(ne|=y.DEPTH_BUFFER_BIT),te&&(ne|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ge.dispose(),ke.dispose(),Q.dispose(),S.dispose(),k.dispose(),J.dispose(),ct.dispose(),W.dispose(),fe.dispose(),se.dispose(),se.removeEventListener("sessionstart",hh),se.removeEventListener("sessionend",uh),ji.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=ie.autoReset,X=ye.enabled,te=ye.autoUpdate,ne=ye.needsUpdate,q=ye.type;Se(),ie.autoReset=R,ye.enabled=X,ye.autoUpdate=te,ye.needsUpdate=ne,ye.type=q}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function je(R){const X=R.target;X.removeEventListener("dispose",je),bt(X)}function bt(R){Ht(R),Q.remove(R)}function Ht(R){const X=Q.get(R).programs;X!==void 0&&(X.forEach(function(te){fe.releaseProgram(te)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,te,ne,q,me){X===null&&(X=et);const Te=q.isMesh&&q.matrixWorld.determinant()<0,De=Fp(R,X,te,ne,q);Z.setMaterial(ne,Te);let Ie=te.index,$e=1;if(ne.wireframe===!0){if(Ie=ee.getWireframeAttribute(te),Ie===void 0)return;$e=2}const Ke=te.drawRange,Ue=te.attributes.position;let st=Ke.start*$e,gt=(Ke.start+Ke.count)*$e;me!==null&&(st=Math.max(st,me.start*$e),gt=Math.min(gt,(me.start+me.count)*$e)),Ie!==null?(st=Math.max(st,0),gt=Math.min(gt,Ie.count)):Ue!=null&&(st=Math.max(st,0),gt=Math.min(gt,Ue.count));const vt=gt-st;if(vt<0||vt===1/0)return;ct.setup(q,ne,De,te,Ie);let tn,rt=_e;if(Ie!==null&&(tn=j.get(Ie),rt=Xe,rt.setIndex(tn)),q.isMesh)ne.wireframe===!0?(Z.setLineWidth(ne.wireframeLinewidth*N()),rt.setMode(y.LINES)):rt.setMode(y.TRIANGLES);else if(q.isLine){let Ne=ne.linewidth;Ne===void 0&&(Ne=1),Z.setLineWidth(Ne*N()),q.isLineSegments?rt.setMode(y.LINES):q.isLineLoop?rt.setMode(y.LINE_LOOP):rt.setMode(y.LINE_STRIP)}else q.isPoints?rt.setMode(y.POINTS):q.isSprite&&rt.setMode(y.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)rt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ne=q._multiDrawStarts,ti=q._multiDrawCounts,ot=q._multiDrawCount,Tn=Ie?j.get(Ie).bytesPerElement:1,Ms=Q.get(ne).currentProgram.getUniforms();for(let an=0;an<ot;an++)Ms.setValue(y,"_gl_DrawID",an),rt.render(Ne[an]/Tn,ti[an])}else if(q.isInstancedMesh)rt.renderInstances(st,vt,q.count);else if(te.isInstancedBufferGeometry){const Ne=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ti=Math.min(te.instanceCount,Ne);rt.renderInstances(st,vt,ti)}else rt.render(st,vt)};function ht(R,X,te){R.transparent===!0&&R.side===kt&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,so(R,X,te),R.side=$i,R.needsUpdate=!0,so(R,X,te),R.side=kt):so(R,X,te)}this.compile=function(R,X,te=null){te===null&&(te=R),p=ke.get(te),p.init(X),w.push(p),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),R!==te&&R.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ne=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const De=me[Te];ht(De,te,q),ne.add(De)}else ht(me,te,q),ne.add(me)}),w.pop(),p=null,ne},this.compileAsync=function(R,X,te=null){const ne=this.compile(R,X,te);return new Promise(q=>{function me(){if(ne.forEach(function(Te){Q.get(Te).currentProgram.isReady()&&ne.delete(Te)}),ne.size===0){q(R);return}setTimeout(me,10)}H.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let En=null;function ei(R){En&&En(R)}function hh(){ji.stop()}function uh(){ji.start()}const ji=new mp;ji.setAnimationLoop(ei),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(R){En=R,se.setAnimationLoop(R),R===null?ji.stop():ji.start()},se.addEventListener("sessionstart",hh),se.addEventListener("sessionend",uh),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,X,C),p=ke.get(R,w.length),p.init(X),w.push(p),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),oe.setFromProjectionMatrix(Le),Ce=this.localClippingEnabled,ue=he.init(this.clippingPlanes,Ce),m=ge.get(R,E.length),m.init(),E.push(m),se.enabled===!0&&se.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&Ia(me,X,-1/0,M.sortObjects)}Ia(R,X,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ce,pe),T=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,T&&Fe.addToRenderList(m,R),this.info.render.frame++,ue===!0&&he.beginShadows();const te=p.state.shadowsArray;ye.render(te,R,X),ue===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const me=X.cameras;if(q.length>0)for(let Te=0,De=me.length;Te<De;Te++){const Ie=me[Te];fh(ne,q,R,Ie)}T&&Fe.render(R);for(let Te=0,De=me.length;Te<De;Te++){const Ie=me[Te];dh(m,R,Ie,Ie.viewport)}}else q.length>0&&fh(ne,q,R,X),T&&Fe.render(R),dh(m,R,X);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(M,R,X),ct.resetDefaultState(),v=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],ue===!0&&he.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ia(R,X,te,ne){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){ne&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const Te=J.update(R),De=R.material;De.visible&&m.push(R,Te,De,te,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const Te=J.update(R),De=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Pe.copy(Te.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(De)){const Ie=Te.groups;for(let $e=0,Ke=Ie.length;$e<Ke;$e++){const Ue=Ie[$e],st=De[Ue.materialIndex];st&&st.visible&&m.push(R,Te,st,te,Pe.z,Ue)}}else De.visible&&m.push(R,Te,De,te,Pe.z,null)}}const me=R.children;for(let Te=0,De=me.length;Te<De;Te++)Ia(me[Te],X,te,ne)}function dh(R,X,te,ne){const q=R.opaque,me=R.transmissive,Te=R.transparent;p.setupLightsView(te),ue===!0&&he.setGlobalState(M.clippingPlanes,te),ne&&Z.viewport(P.copy(ne)),q.length>0&&io(q,X,te),me.length>0&&io(me,X,te),Te.length>0&&io(Te,X,te),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fh(R,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new qi(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?_i:jn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const me=p.state.transmissionRenderTarget[ne.id],Te=ne.viewport||P;me.setSize(Te.z,Te.w);const De=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(F),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),T&&Fe.render(te);const Ie=M.toneMapping;M.toneMapping=Wi;const $e=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),ue===!0&&he.setGlobalState(M.clippingPlanes,ne),io(R,te,ne),b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me),H.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ue=0,st=X.length;Ue<st;Ue++){const gt=X[Ue],vt=gt.object,tn=gt.geometry,rt=gt.material,Ne=gt.group;if(rt.side===kt&&vt.layers.test(ne.layers)){const ti=rt.side;rt.side=on,rt.needsUpdate=!0,ph(vt,te,ne,tn,rt,Ne),rt.side=ti,rt.needsUpdate=!0,Ke=!0}}Ke===!0&&(b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me))}M.setRenderTarget(De),M.setClearColor(F,V),$e!==void 0&&(ne.viewport=$e),M.toneMapping=Ie}function io(R,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,me=R.length;q<me;q++){const Te=R[q],De=Te.object,Ie=Te.geometry,$e=ne===null?Te.material:ne,Ke=Te.group;De.layers.test(te.layers)&&ph(De,X,te,Ie,$e,Ke)}}function ph(R,X,te,ne,q,me){R.onBeforeRender(M,X,te,ne,q,me),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(M,X,te,ne,R,me),q.transparent===!0&&q.side===kt&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,M.renderBufferDirect(te,X,ne,q,R,me),q.side=$i,q.needsUpdate=!0,M.renderBufferDirect(te,X,ne,q,R,me),q.side=kt):M.renderBufferDirect(te,X,ne,q,R,me),R.onAfterRender(M,X,te,ne,q,me)}function so(R,X,te){X.isScene!==!0&&(X=et);const ne=Q.get(R),q=p.state.lights,me=p.state.shadowsArray,Te=q.state.version,De=fe.getParameters(R,q.state,me,X,te),Ie=fe.getProgramCacheKey(De);let $e=ne.programs;ne.environment=R.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(R.isMeshStandardMaterial?k:S).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",je),$e=new Map,ne.programs=$e);let Ke=$e.get(Ie);if(Ke!==void 0){if(ne.currentProgram===Ke&&ne.lightsStateVersion===Te)return gh(R,De),Ke}else De.uniforms=fe.getUniforms(R),R.onBeforeCompile(De,M),Ke=fe.acquireProgram(De,Ie),$e.set(Ie,Ke),ne.uniforms=De.uniforms;const Ue=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=he.uniform),gh(R,De),ne.needsLights=kp(R),ne.lightsStateVersion=Te,ne.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=Ke,ne.uniformsList=null,Ke}function mh(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Ko.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function gh(R,X){const te=Q.get(R);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Fp(R,X,te,ne,q){X.isScene!==!0&&(X=et),b.resetTextureUnits();const me=X.fog,Te=ne.isMeshStandardMaterial?X.environment:null,De=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xs,Ie=(ne.isMeshStandardMaterial?k:S).get(ne.envMap||Te),$e=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ue=!!te.morphAttributes.position,st=!!te.morphAttributes.normal,gt=!!te.morphAttributes.color;let vt=Wi;ne.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(vt=M.toneMapping);const tn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,rt=tn!==void 0?tn.length:0,Ne=Q.get(ne),ti=p.state.lights;if(ue===!0&&(Ce===!0||R!==_)){const mn=R===_&&ne.id===v;he.setState(ne,R,mn)}let ot=!1;ne.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ti.state.version||Ne.outputColorSpace!==De||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Ie||ne.fog===!0&&Ne.fog!==me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==he.numPlanes||Ne.numIntersection!==he.numIntersection)||Ne.vertexAlphas!==$e||Ne.vertexTangents!==Ke||Ne.morphTargets!==Ue||Ne.morphNormals!==st||Ne.morphColors!==gt||Ne.toneMapping!==vt||Ne.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ne.__version=ne.version);let Tn=Ne.currentProgram;ot===!0&&(Tn=so(ne,X,q));let Ms=!1,an=!1,ur=!1;const xt=Tn.getUniforms(),Fn=Ne.uniforms;if(Z.useProgram(Tn.program)&&(Ms=!0,an=!0,ur=!0),ne.id!==v&&(v=ne.id,an=!0),Ms||_!==R){Z.buffers.depth.getReversed()?(de.copy(R.projectionMatrix),gx(de),_x(de),xt.setValue(y,"projectionMatrix",de)):xt.setValue(y,"projectionMatrix",R.projectionMatrix),xt.setValue(y,"viewMatrix",R.matrixWorldInverse);const Ei=xt.map.cameraPosition;Ei!==void 0&&Ei.setValue(y,ze.setFromMatrixPosition(R.matrixWorld)),$.logarithmicDepthBuffer&&xt.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&xt.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,an=!0,ur=!0)}if(q.isSkinnedMesh){xt.setOptional(y,q,"bindMatrix"),xt.setOptional(y,q,"bindMatrixInverse");const mn=q.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),xt.setValue(y,"boneTexture",mn.boneTexture,b))}q.isBatchedMesh&&(xt.setOptional(y,q,"batchingTexture"),xt.setValue(y,"batchingTexture",q._matricesTexture,b),xt.setOptional(y,q,"batchingIdTexture"),xt.setValue(y,"batchingIdTexture",q._indirectTexture,b),xt.setOptional(y,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(y,"batchingColorTexture",q._colorsTexture,b));const dr=te.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&He.update(q,te,Tn),(an||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,xt.setValue(y,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Fn.envMap.value=Ie,Fn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Fn.envMapIntensity.value=X.environmentIntensity),an&&(xt.setValue(y,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&Op(Fn,ur),me&&ne.fog===!0&&le.refreshFogUniforms(Fn,me),le.refreshMaterialUniforms(Fn,ne,Y,K,p.state.transmissionRenderTarget[R.id]),Ko.upload(y,mh(Ne),Fn,b)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ko.upload(y,mh(Ne),Fn,b),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&xt.setValue(y,"center",q.center),xt.setValue(y,"modelViewMatrix",q.modelViewMatrix),xt.setValue(y,"normalMatrix",q.normalMatrix),xt.setValue(y,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const mn=ne.uniformsGroups;for(let Ei=0,Ti=mn.length;Ei<Ti;Ei++){const _h=mn[Ei];W.update(_h,Tn),W.bind(_h,Tn)}}return Tn}function Op(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function kp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,te){Q.get(R.texture).__webglTexture=X,Q.get(R.depthTexture).__webglTexture=te;const ne=Q.get(R);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const te=Q.get(R);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,te=0){C=R,L=X,U=te;let ne=!0,q=null,me=!1,Te=!1;if(R){const Ie=Q.get(R);if(Ie.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(y.FRAMEBUFFER,null),ne=!1;else if(Ie.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Ie.__hasExternalTextures)b.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ue=R.depthTexture;if(Ie.__boundDepthTexture!==Ue){if(Ue!==null&&Q.has(Ue)&&(R.width!==Ue.image.width||R.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Te=!0);const Ke=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?q=Ke[X][te]:q=Ke[X],me=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?q=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?q=Ke[te]:q=Ke,P.copy(R.viewport),O.copy(R.scissor),D=R.scissorTest}else P.copy(xe).multiplyScalar(Y).floor(),O.copy(Re).multiplyScalar(Y).floor(),D=We;if(Z.bindFramebuffer(y.FRAMEBUFFER,q)&&ne&&Z.drawBuffers(R,q),Z.viewport(P),Z.scissor(O),Z.setScissorTest(D),me){const Ie=Q.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie.__webglTexture,te)}else if(Te){const Ie=Q.get(R.texture),$e=X||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ie.__webglTexture,te||0,$e)}v=-1},this.readRenderTargetPixels=function(R,X,te,ne,q,me,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){Z.bindFramebuffer(y.FRAMEBUFFER,De);try{const Ie=R.texture,$e=Ie.format,Ke=Ie.type;if(!$.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ne&&te>=0&&te<=R.height-q&&y.readPixels(X,te,ne,q,qe.convert($e),qe.convert(Ke),me)}finally{const Ie=C!==null?Q.get(C).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,X,te,ne,q,me,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){const Ie=R.texture,$e=Ie.format,Ke=Ie.type;if(!$.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-ne&&te>=0&&te<=R.height-q){Z.bindFramebuffer(y.FRAMEBUFFER,De);const Ue=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ue),y.bufferData(y.PIXEL_PACK_BUFFER,me.byteLength,y.STREAM_READ),y.readPixels(X,te,ne,q,qe.convert($e),qe.convert(Ke),0);const st=C!==null?Q.get(C).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,st);const gt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await mx(y,gt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ue),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,me),y.deleteBuffer(Ue),y.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,te=0){R.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const ne=Math.pow(2,-te),q=Math.floor(R.image.width*ne),me=Math.floor(R.image.height*ne),Te=X!==null?X.x:0,De=X!==null?X.y:0;b.setTexture2D(R,0),y.copyTexSubImage2D(y.TEXTURE_2D,te,0,0,Te,De,q,me),Z.unbindTexture()},this.copyTextureToTexture=function(R,X,te=null,ne=null,q=0){R.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,R=arguments[1],X=arguments[2],q=arguments[3]||0,te=null);let me,Te,De,Ie,$e,Ke,Ue,st,gt;const vt=R.isCompressedTexture?R.mipmaps[q]:R.image;te!==null?(me=te.max.x-te.min.x,Te=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,Ie=te.min.x,$e=te.min.y,Ke=te.isBox3?te.min.z:0):(me=vt.width,Te=vt.height,De=vt.depth||1,Ie=0,$e=0,Ke=0),ne!==null?(Ue=ne.x,st=ne.y,gt=ne.z):(Ue=0,st=0,gt=0);const tn=qe.convert(X.format),rt=qe.convert(X.type);let Ne;X.isData3DTexture?(b.setTexture3D(X,0),Ne=y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),Ne=y.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),Ne=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,X.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,X.unpackAlignment);const ti=y.getParameter(y.UNPACK_ROW_LENGTH),ot=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Tn=y.getParameter(y.UNPACK_SKIP_PIXELS),Ms=y.getParameter(y.UNPACK_SKIP_ROWS),an=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ie),y.pixelStorei(y.UNPACK_SKIP_ROWS,$e),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ke);const ur=R.isDataArrayTexture||R.isData3DTexture,xt=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Fn=Q.get(R),dr=Q.get(X),mn=Q.get(Fn.__renderTarget),Ei=Q.get(dr.__renderTarget);Z.bindFramebuffer(y.READ_FRAMEBUFFER,mn.__webglFramebuffer),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<De;Ti++)ur&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,q,Ke+Ti),R.isDepthTexture?(xt&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Q.get(X).__webglTexture,q,gt+Ti),y.blitFramebuffer(Ie,$e,me,Te,Ue,st,me,Te,y.DEPTH_BUFFER_BIT,y.NEAREST)):xt?y.copyTexSubImage3D(Ne,q,Ue,st,gt+Ti,Ie,$e,me,Te):y.copyTexSubImage2D(Ne,q,Ue,st,gt+Ti,Ie,$e,me,Te);Z.bindFramebuffer(y.READ_FRAMEBUFFER,null),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else xt?R.isDataTexture||R.isData3DTexture?y.texSubImage3D(Ne,q,Ue,st,gt,me,Te,De,tn,rt,vt.data):X.isCompressedArrayTexture?y.compressedTexSubImage3D(Ne,q,Ue,st,gt,me,Te,De,tn,vt.data):y.texSubImage3D(Ne,q,Ue,st,gt,me,Te,De,tn,rt,vt):R.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,q,Ue,st,me,Te,tn,rt,vt.data):R.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,q,Ue,st,vt.width,vt.height,tn,vt.data):y.texSubImage2D(y.TEXTURE_2D,q,Ue,st,me,Te,tn,rt,vt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ti),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Tn),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ms),y.pixelStorei(y.UNPACK_SKIP_IMAGES,an),q===0&&X.generateMipmaps&&y.generateMipmap(Ne),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,X,te=null,ne=null,q=0){return R.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,R=arguments[2],X=arguments[3],q=arguments[4]||0),br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,te,ne,q)},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){L=0,U=0,C=null,Z.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Pb extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lb extends Bt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=fn,h=fn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn extends cr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new B,la=new B,od=new yt,Mr=new nh,Lo=new Ca,Sl=new B,ad=new B;class Db extends zt{constructor(e=new Yt,t=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)aa.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=aa.distanceTo(la);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;od.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=h.getX(x),E=h.getX(x+1),w=Do(this,e,Mr,l,p,E);w&&t.push(w)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(d),p=Do(this,e,Mr,l,x,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=Do(this,e,Mr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Do(this,e,Mr,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Do(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(aa.fromBufferAttribute(o,s),la.fromBufferAttribute(o,r),t.distanceSqToSegment(aa,la,Sl,ad)>i)return;Sl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Sl);if(!(l<e.near||l>e.far))return{distance:l,point:ad.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ld=new B,cd=new B;class wn extends Db{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ld.fromBufferAttribute(t,s),cd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ld.distanceTo(cd);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ib extends Bt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new B,s=[],r=[],o=[],a=new B,l=new yt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Dt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Dt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rh extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ub extends rh{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Io=new B,bl=new oh,wl=new oh,El=new oh;class ah extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),bl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),wl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),El.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(bl.calc(l),wl.calc(l),El.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hd(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Nb(n,e){const t=1-n;return t*t*e}function Fb(n,e){return 2*(1-n)*n*e}function Ob(n,e){return n*n*e}function Nr(n,e,t,i){return Nb(n,e)+Fb(n,t)+Ob(n,i)}function kb(n,e){const t=1-n;return t*t*t*e}function Bb(n,e){const t=1-n;return 3*t*t*n*e}function zb(n,e){return 3*(1-n)*n*n*e}function Hb(n,e){return n*n*n*e}function Fr(n,e,t,i,s){return kb(n,e)+Bb(n,t)+zb(n,i)+Hb(n,s)}class Sp extends Jn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gb extends Jn{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y),Fr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bp extends Jn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vb extends Jn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wp extends Jn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ep extends Jn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y),Nr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(hd(a,l.x,c.x,h.x,u.x),hd(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var ca=Object.freeze({__proto__:null,ArcCurve:Ub,CatmullRomCurve3:ah,CubicBezierCurve:Sp,CubicBezierCurve3:Gb,EllipseCurve:rh,LineCurve:bp,LineCurve3:Vb,QuadraticBezierCurve:wp,QuadraticBezierCurve3:Ep,SplineCurve:Tp});class Wb extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ca[s.type]().fromJSON(s))}return this}}class ud extends Wb{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new bp(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new wp(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Sp(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Tp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new rh(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gs extends Yt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Dt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new B,f=new re,d=new B,g=new B,x=new B;let m=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let E=0;E<=t;E++){const w=i+E*h*s,M=Math.sin(w),I=Math.cos(w);for(let L=0;L<=e.length-1;L++){u.x=e[L].x*M,u.y=e[L].y,u.z=e[L].x*I,o.push(u.x,u.y,u.z),f.x=E/t,f.y=L/(e.length-1),a.push(f.x,f.y);const U=l[3*L+0]*M,C=l[3*L+1],v=l[3*L+0]*I;c.push(U,C,v)}}for(let E=0;E<t;E++)for(let w=0;w<e.length-1;w++){const M=w+E*e.length,I=M,L=M+e.length,U=M+e.length+1,C=M+1;r.push(I,L,C),r.push(U,C,L)}this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.points,e.segments,e.phiStart,e.phiLength)}}class Tt extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=i/2;let p=0;E(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(d,2));function E(){const M=new B,I=new B;let L=0;const U=(t-e)/i;for(let C=0;C<=r;C++){const v=[],_=C/r,P=_*(t-e)+e;for(let O=0;O<=s;O++){const D=O/s,F=D*l+a,V=Math.sin(F),z=Math.cos(F);I.x=P*V,I.y=-_*i+m,I.z=P*z,u.push(I.x,I.y,I.z),M.set(V,U,z).normalize(),f.push(M.x,M.y,M.z),d.push(D,1-_),v.push(g++)}x.push(v)}for(let C=0;C<s;C++)for(let v=0;v<r;v++){const _=x[v][C],P=x[v+1][C],O=x[v+1][C+1],D=x[v][C+1];(e>0||v!==0)&&(h.push(_,P,D),L+=3),(t>0||v!==r-1)&&(h.push(P,O,D),L+=3)}c.addGroup(p,L,0),p+=L}function w(M){const I=g,L=new re,U=new B;let C=0;const v=M===!0?e:t,_=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const F=O/s*l+a,V=Math.cos(F),z=Math.sin(F);U.x=v*z,U.y=m*_,U.z=v*V,u.push(U.x,U.y,U.z),f.push(0,_,0),L.x=V*.5+.5,L.y=z*.5*_+.5,d.push(L.x,L.y),g++}for(let O=0;O<s;O++){const D=I+O,F=P+O;M===!0?h.push(F,F+1,D):h.push(F+1,F,D),C+=3}c.addGroup(p,C,M===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Uo=new B,No=new B,Tl=new B,Fo=new xn;class Sn extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ur*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:p}=Fo;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Fo.getNormal(Tl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const w=(E+1)%3,M=u[E],I=u[w],L=Fo[h[E]],U=Fo[h[w]],C=`${M}_${I}`,v=`${I}_${M}`;v in f&&f[v]?(Tl.dot(f[v].normal)<=r&&(d.push(L.x,L.y,L.z),d.push(U.x,U.y,U.z)),f[v]=null):C in f||(f[C]={index0:c[E],index1:c[w],normal:Tl.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:m}=f[g];Uo.fromBufferAttribute(a,x),No.fromBufferAttribute(a,m),d.push(Uo.x,Uo.y,Uo.z),d.push(No.x,No.y,No.z)}this.setAttribute("position",new ut(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ap extends ud{constructor(e){super(e),this.uuid=lr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ud().fromJSON(s))}return this}}const Xb={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Cp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(i&&(r=Kb(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Yr(r,o,t,a,l,d,0),o}};function Cp(n,e,t,i,s){let r,o;if(s===aw(n,e,t,i)>0)for(r=e;r<t;r+=i)o=dd(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=dd(r,n[r],n[r+1],o);return o&&Pa(o,o.next)&&(Kr(o),o=o.next),o}function _s(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Pa(t,t.next)||St(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Yr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&tw(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?qb(n,i,s,r):$b(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Kr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Yb(_s(n),e,t),Yr(n,e,t,i,s,r,2)):o===2&&jb(n,e,t,i,s,r):Yr(_s(n),e,t,i,s,r,1);break}}}function $b(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ws(s,a,r,l,o,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qb(n,e,t,i){const s=n.prev,r=n,o=n.next;if(St(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Rc(d,g,e,t,i),E=Rc(x,m,e,t,i);let w=n.prevZ,M=n.nextZ;for(;w&&w.z>=p&&M&&M.z<=E;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Ws(a,h,l,u,c,f,w.x,w.y)&&St(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ws(a,h,l,u,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Ws(a,h,l,u,c,f,w.x,w.y)&&St(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ws(a,h,l,u,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Yb(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Pa(s,r)&&Rp(s,i,i.next,r)&&jr(s,r)&&jr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Kr(i),Kr(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function jb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sw(o,a)){let l=Pp(o,a);o=_s(o,o.next),l=_s(l,l.next),Yr(o,e,t,i,s,r,0),Yr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Kb(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Cp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(iw(c));for(s.sort(Zb),r=0;r<s.length;r++)t=Jb(s[r],t);return t}function Zb(n,e){return n.x-e.x}function Jb(n,e){const t=Qb(n,e);if(!t)return e;const i=Pp(t,n);return _s(i,i.next),_s(t,t.next)}function Qb(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ws(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),jr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&ew(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function ew(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function tw(n,e,t,i){let s=n;do s.z===0&&(s.z=Rc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,nw(s)}function nw(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Rc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function iw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ws(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function sw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rw(n,e)&&(jr(n,e)&&jr(e,n)&&ow(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||Pa(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Pa(n,e){return n.x===e.x&&n.y===e.y}function Rp(n,e,t,i){const s=ko(St(n,e,t)),r=ko(St(n,e,i)),o=ko(St(t,i,n)),a=ko(St(t,i,e));return!!(s!==r&&o!==a||s===0&&Oo(n,t,e)||r===0&&Oo(n,i,e)||o===0&&Oo(t,n,i)||a===0&&Oo(t,e,i))}function Oo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ko(n){return n>0?1:n<0?-1:0}function rw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function jr(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function ow(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pp(n,e){const t=new Pc(n.i,n.x,n.y),i=new Pc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function dd(n,e,t,i){const s=new Pc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aw(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Or{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Or.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];fd(e),pd(i,e);let o=e.length;t.forEach(fd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,pd(i,t[l]);const a=Xb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function fd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function pd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class lh extends Yt{constructor(e=new Ap([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:lw;let w,M=!1,I,L,U,C;p&&(w=p.getSpacedPoints(h),M=!0,f=!1,I=p.computeFrenetFrames(h,!1),L=new B,U=new B,C=new B),f||(m=0,d=0,g=0,x=0);const v=a.extractPoints(c);let _=v.shape;const P=v.holes;if(!Or.isClockWise(_)){_=_.reverse();for(let T=0,N=P.length;T<N;T++){const y=P[T];Or.isClockWise(y)&&(P[T]=y.reverse())}}const D=Or.triangulateShape(_,P),F=_;for(let T=0,N=P.length;T<N;T++){const y=P[T];_=_.concat(y)}function V(T,N,y){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(N,y)}const z=_.length,K=D.length;function Y(T,N,y){let G,H,$;const Z=T.x-N.x,ie=T.y-N.y,Q=y.x-T.x,b=y.y-T.y,S=Z*Z+ie*ie,k=Z*b-ie*Q;if(Math.abs(k)>Number.EPSILON){const j=Math.sqrt(S),ee=Math.sqrt(Q*Q+b*b),J=N.x-ie/j,fe=N.y+Z/j,le=y.x-b/ee,ge=y.y+Q/ee,ke=((le-J)*b-(ge-fe)*Q)/(Z*b-ie*Q);G=J+Z*ke-T.x,H=fe+ie*ke-T.y;const he=G*G+H*H;if(he<=2)return new re(G,H);$=Math.sqrt(he/2)}else{let j=!1;Z>Number.EPSILON?Q>Number.EPSILON&&(j=!0):Z<-Number.EPSILON?Q<-Number.EPSILON&&(j=!0):Math.sign(ie)===Math.sign(b)&&(j=!0),j?(G=-ie,H=Z,$=Math.sqrt(S)):(G=Z,H=ie,$=Math.sqrt(S/2))}return new re(G/$,H/$)}const ce=[];for(let T=0,N=F.length,y=N-1,G=T+1;T<N;T++,y++,G++)y===N&&(y=0),G===N&&(G=0),ce[T]=Y(F[T],F[y],F[G]);const pe=[];let xe,Re=ce.concat();for(let T=0,N=P.length;T<N;T++){const y=P[T];xe=[];for(let G=0,H=y.length,$=H-1,Z=G+1;G<H;G++,$++,Z++)$===H&&($=0),Z===H&&(Z=0),xe[G]=Y(y[G],y[$],y[Z]);pe.push(xe),Re=Re.concat(xe)}for(let T=0;T<m;T++){const N=T/m,y=d*Math.cos(N*Math.PI/2),G=g*Math.sin(N*Math.PI/2)+x;for(let H=0,$=F.length;H<$;H++){const Z=V(F[H],ce[H],G);de(Z.x,Z.y,-y)}for(let H=0,$=P.length;H<$;H++){const Z=P[H];xe=pe[H];for(let ie=0,Q=Z.length;ie<Q;ie++){const b=V(Z[ie],xe[ie],G);de(b.x,b.y,-y)}}}const We=g+x;for(let T=0;T<z;T++){const N=f?V(_[T],Re[T],We):_[T];M?(U.copy(I.normals[0]).multiplyScalar(N.x),L.copy(I.binormals[0]).multiplyScalar(N.y),C.copy(w[0]).add(U).add(L),de(C.x,C.y,C.z)):de(N.x,N.y,0)}for(let T=1;T<=h;T++)for(let N=0;N<z;N++){const y=f?V(_[N],Re[N],We):_[N];M?(U.copy(I.normals[T]).multiplyScalar(y.x),L.copy(I.binormals[T]).multiplyScalar(y.y),C.copy(w[T]).add(U).add(L),de(C.x,C.y,C.z)):de(y.x,y.y,u/h*T)}for(let T=m-1;T>=0;T--){const N=T/m,y=d*Math.cos(N*Math.PI/2),G=g*Math.sin(N*Math.PI/2)+x;for(let H=0,$=F.length;H<$;H++){const Z=V(F[H],ce[H],G);de(Z.x,Z.y,u+y)}for(let H=0,$=P.length;H<$;H++){const Z=P[H];xe=pe[H];for(let ie=0,Q=Z.length;ie<Q;ie++){const b=V(Z[ie],xe[ie],G);M?de(b.x,b.y+w[h-1].y,w[h-1].x+y):de(b.x,b.y,u+y)}}}oe(),ue();function oe(){const T=s.length/3;if(f){let N=0,y=z*N;for(let G=0;G<K;G++){const H=D[G];Le(H[2]+y,H[1]+y,H[0]+y)}N=h+m*2,y=z*N;for(let G=0;G<K;G++){const H=D[G];Le(H[0]+y,H[1]+y,H[2]+y)}}else{for(let N=0;N<K;N++){const y=D[N];Le(y[2],y[1],y[0])}for(let N=0;N<K;N++){const y=D[N];Le(y[0]+z*h,y[1]+z*h,y[2]+z*h)}}i.addGroup(T,s.length/3-T,0)}function ue(){const T=s.length/3;let N=0;Ce(F,N),N+=F.length;for(let y=0,G=P.length;y<G;y++){const H=P[y];Ce(H,N),N+=H.length}i.addGroup(T,s.length/3-T,1)}function Ce(T,N){let y=T.length;for(;--y>=0;){const G=y;let H=y-1;H<0&&(H=T.length-1);for(let $=0,Z=h+m*2;$<Z;$++){const ie=z*$,Q=z*($+1),b=N+G+ie,S=N+H+ie,k=N+H+Q,j=N+G+Q;ze(b,S,k,j)}}}function de(T,N,y){l.push(T),l.push(N),l.push(y)}function Le(T,N,y){Pe(T),Pe(N),Pe(y);const G=s.length/3,H=E.generateTopUV(i,s,G-3,G-2,G-1);et(H[0]),et(H[1]),et(H[2])}function ze(T,N,y,G){Pe(T),Pe(N),Pe(G),Pe(N),Pe(y),Pe(G);const H=s.length/3,$=E.generateSideWallUV(i,s,H-6,H-3,H-2,H-1);et($[0]),et($[1]),et($[3]),et($[1]),et($[2]),et($[3])}function Pe(T){s.push(l[T*3+0]),s.push(l[T*3+1]),s.push(l[T*3+2])}function et(T){r.push(T.x),r.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return cw(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ca[s.type]().fromJSON(s)),new lh(i,e.options)}}const lw={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(f,1-g),new re(x,1-p)]:[new re(a,1-l),new re(h,1-u),new re(d,1-g),new re(m,1-p)]}};function cw(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class La extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new B,f=new B,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const E=[],w=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){const L=I/t;u.x=-e*Math.cos(s+L*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+L*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(L+M,1-w),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const w=h[p][E+1],M=h[p][E],I=h[p+1][E],L=h[p+1][E+1];(p!==0||o>0)&&d.push(w,M,L),(p!==i-1||l<Math.PI)&&d.push(M,I,L)}this.setIndex(d),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Da extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new B,u=new B,f=new B;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(x,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}let hw=class Lp extends Yt{constructor(e=new Ep(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new re;let h=new B;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(d,2));function x(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),E(),p()}function m(w){h=e.getPointAt(w/t,h);const M=o.normals[w],I=o.binormals[w];for(let L=0;L<=s;L++){const U=L/s*Math.PI*2,C=Math.sin(U),v=-Math.cos(U);l.x=v*M.x+C*I.x,l.y=v*M.y+C*I.y,l.z=v*M.z+C*I.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let M=1;M<=s;M++){const I=(s+1)*(w-1)+(M-1),L=(s+1)*w+(M-1),U=(s+1)*w+M,C=(s+1)*(w-1)+M;g.push(I,L,C),g.push(L,U,C)}}function E(){for(let w=0;w<=t;w++)for(let M=0;M<=s;M++)c.x=w/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lp(new ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};class bn extends cr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uw extends bn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const ha={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const fw=new dw;class no{constructor(e){this.manager=e!==void 0?e:fw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}no.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class pw extends Error{constructor(e,t){super(e),this.response=t}}class mw extends no{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ha.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:i,onError:s});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ci[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){E();function E(){u.read().then(({done:w,value:M})=>{if(w)p.close();else{x+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let L=0,U=h.length;L<U;L++){const C=h[L];C.onProgress&&C.onProgress(I)}p.enqueue(M),E()}},w=>{p.error(w)})}}});return new Response(m)}else throw new pw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ha.add(e,c);const h=ci[e];delete ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gw extends no{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ha.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=qr("img");function l(){h(),ha.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class _w extends no{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Lb,a=new mw(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:gi,o.wrapT=c.wrapT!==void 0?c.wrapT:gi,o.magFilter=c.magFilter!==void 0?c.magFilter:en,o.minFilter=c.minFilter!==void 0?c.minFilter:en,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Hi),c.mipmapCount===1&&(o.minFilter=en),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Dp extends no{constructor(e){super(e)}load(e,t,i,s){const r=new Bt,o=new gw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ip extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Al=new yt,md=new B,gd=new B;class vw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ih,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;md.setFromMatrixPosition(e.matrixWorld),t.position.copy(md),gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gd),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xw extends vw{constructor(){super(new gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _d extends Ip{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new xw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yw extends Ip{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mw extends wn{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ve(i),s=new Ve(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}const h=new Yt;h.setAttribute("position",new ut(l,3)),h.setAttribute("color",new ut(c,3));const u=new pn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sw extends ys{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);class os{static async captureCanvas(e,t,i,s){return new Promise((r,o)=>{try{const{format:a,quality:l,width:c,height:h,background:u,resolutionMultiplier:f}=s,d=new re;e.getSize(d);const g=e.getPixelRatio(),x=new Ve,m=e.getClearAlpha();e.getClearColor(x);const p=c*f,E=h*f,w=new qi(p,E,{samples:4,format:a==="png"?Mn:Jc,type:jn});if(u==="transparent")e.setClearColor(0,0);else if(u==="white")e.setClearColor(16777215,1);else{const _=new Ve(u);e.setClearColor(_,1)}e.setRenderTarget(w),e.setSize(p,E),e.setPixelRatio(1),e.render(t,i);const M=new Uint8Array(p*E*4);e.readRenderTargetPixels(w,0,0,p,E,M);const I=document.createElement("canvas");I.width=c,I.height=h;const L=I.getContext("2d");if(!L)throw new Error("Failed to get canvas context");const U=L.createImageData(p,E);U.data.set(M);const C=document.createElement("canvas");C.width=p,C.height=E;const v=C.getContext("2d");if(!v)throw new Error("Failed to get temp canvas context");v.putImageData(U,0,0),L.imageSmoothingEnabled=!0,L.imageSmoothingQuality="high",L.drawImage(C,0,0,p,E,0,0,c,h),I.toBlob(_=>{_?(e.setRenderTarget(null),e.setSize(d.width,d.height),e.setPixelRatio(g),e.setClearColor(x,m),w.dispose(),r(_)):o(new Error("Failed to create blob"))},a==="png"?"image/png":"image/jpeg",a==="jpg"?l:void 0)}catch(a){o(a)}})}static generateFilename(e="mockup",t,i){const r=(i||new Date).toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,19);return`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${r}.${t}`}static downloadBlob(e,t){const i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}static async batchExport(e,t,i,s){const{angles:r,...o}=s,a=[],l=i.position.clone(),c=i.rotation.clone();for(const h of r){this.setCameraForAngle(i,h);const u=await this.captureCanvas(e,t,i,o);a.push(u)}return i.position.copy(l),i.rotation.copy(c),a}static setCameraForAngle(e,t){switch(t){case"front":e.position.set(0,0,15),e.lookAt(0,0,0);break;case"back":e.position.set(0,0,-15),e.lookAt(0,0,0);break;case"top":e.position.set(0,15,0),e.lookAt(0,0,0);break;case"isometric":e.position.set(15,15,15),e.lookAt(0,0,0);break}}static async createZip(e,t){try{const i=await Tv(()=>import("./jszip.min-BiHF8TMC.js").then(r=>r.j),[]),s=new i.default;for(let r=0;r<e.length;r++)s.file(t[r],e[r]);return await s.generateAsync({type:"blob"})}catch(i){throw console.error("Failed to create ZIP:",i),new Error("Failed to create ZIP archive. Please try exporting individual images.")}}}const bw={class:"bg-white rounded-xl shadow-lg p-6"},ww={class:"space-y-6"},Ew={class:"grid grid-cols-2 gap-3"},Tw=["onClick"],Aw={class:"grid grid-cols-3 gap-3"},Cw=["onClick"],Rw={class:"text-center"},Pw={class:"font-medium text-gray-800"},Lw={class:"text-xs text-gray-500 mt-1"},Dw={key:0},Iw={class:"flex items-center justify-between mb-2"},Uw={class:"text-sm font-medium text-indigo-600"},Nw={class:"grid grid-cols-3 gap-3 mb-4"},Fw=["onClick"],Ow={class:"text-xs font-medium text-gray-700"},kw={key:0,class:"mt-4"},Bw={class:"flex items-center gap-3"},zw={class:"border-t border-gray-200 pt-6"},Hw={class:"bg-gray-50 rounded-lg p-4"},Gw={class:"flex items-center justify-between mb-2"},Vw={class:"text-sm font-medium text-gray-800"},Ww={class:"flex items-center justify-between mb-2"},Xw={class:"text-sm font-medium text-gray-800"},$w={class:"flex items-center justify-between"},qw={class:"text-sm font-medium text-gray-800"},Yw={class:"space-y-3"},jw=["disabled"],Kw={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Zw={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Jw=["disabled"],Qw={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},eE={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},tE={class:"flex items-center gap-2"},nE={key:0,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},iE={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},sE={class:"text-sm font-medium"},rE=Nn({__name:"ExportPanel",props:{templateName:{default:"mockup"},sceneManager:{}},emits:["export","batchExport","error"],setup(n,{emit:e}){const t=n,i=e,s=["png","jpg"],r=Oe("png"),o=[{label:"Standard",value:1,dimensions:"1920×1080"},{label:"HD",value:2,dimensions:"3840×2160"},{label:"Ultra",value:4,dimensions:"7680×4320"}],a=Oe(1),l=Oe(90),c=[{label:"Transparent",value:"transparent"},{label:"White",value:"white"},{label:"Custom",value:"custom"}],h=Oe("transparent"),u=Oe("#3b82f6"),f=Oe(!1),d=Oe(null),g=un(()=>{const _=a.value;return`${1920*_}×${1080*_}`}),x=un(()=>os.generateFilename(t.templateName,r.value)),m=un(()=>{const C=r.value==="png"?"~2-5 MB":"~0.5-2 MB",v=a.value;return v===2?`~${C} × 2`:v===4?`~${C} × 4`:C}),p=()=>{/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(u.value)||(u.value="#3b82f6")},E=()=>h.value==="custom"?u.value:h.value,w=()=>({format:r.value,quality:l.value/100,width:1920,height:1080,background:E(),resolutionMultiplier:a.value}),M=()=>({angles:["front","back","top","isometric"],...w()}),I=(C,v,_=3e3)=>{d.value={type:C,message:v},setTimeout(()=>{d.value=null},_)},L=async()=>{if(!(f.value||!t.sceneManager)){f.value=!0,d.value=null;try{const C=t.sceneManager.getRenderer(),v=t.sceneManager.getScene(),_=t.sceneManager.getCamera(),P=w(),O=await os.captureCanvas(C,v,_,P),D=os.generateFilename(t.templateName,P.format);os.downloadBlob(O,D),i("export",O,D),I("success",`Image exported successfully: ${D}`)}catch(C){console.error("Export failed:",C),i("error",C),I("error","Failed to export image. Please try again.")}finally{f.value=!1}}},U=async()=>{if(!(f.value||!t.sceneManager)){f.value=!0,d.value=null;try{const C=t.sceneManager.getRenderer(),v=t.sceneManager.getScene(),_=t.sceneManager.getCamera(),P=M(),O=await os.batchExport(C,v,_,P),D=P.angles.map(z=>{const Y=new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,19);return`${t.templateName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${z}-${Y}.${P.format}`}),F=await os.createZip(O,D),V=`${t.templateName}-angles-${new Date().toISOString().slice(0,10)}.zip`;os.downloadBlob(F,V),i("batchExport",O,D),I("success",`Batch exported successfully: ${V}`)}catch(C){console.error("Batch export failed:",C),i("error",C),I("error","Failed to export batch. Please try again.")}finally{f.value=!1}}};return Xn(r,C=>{C==="png"&&h.value==="transparent"||C==="jpg"&&h.value==="transparent"&&(h.value="white")}),Xn(h,C=>{r.value==="jpg"&&C==="transparent"&&(h.value="white")}),(C,v)=>(Me(),be("div",bw,[v[20]||(v[20]=A("h2",{class:"text-xl font-semibold mb-4 text-gray-800"},"Export Settings",-1)),A("div",ww,[A("div",null,[v[3]||(v[3]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Format",-1)),A("div",Ew,[(Me(),be(Mt,null,qn(s,_=>A("button",{key:_,onClick:P=>r.value=_,class:mt(["px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium",r.value===_?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"])},Ge(_.toUpperCase()),11,Tw)),64))])]),A("div",null,[v[4]||(v[4]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Resolution",-1)),A("div",Aw,[(Me(),be(Mt,null,qn(o,_=>A("button",{key:_.value,onClick:P=>a.value=_.value,class:mt(["px-3 py-3 rounded-lg border-2 transition-all duration-200",a.value===_.value?"border-indigo-500 bg-indigo-50":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"])},[A("div",Rw,[A("div",Pw,Ge(_.label),1),A("div",Lw,Ge(_.dimensions),1)])],10,Cw)),64))])]),r.value==="jpg"?(Me(),be("div",Dw,[A("div",Iw,[v[5]||(v[5]=A("label",{class:"text-sm font-medium text-gray-700"},"Quality",-1)),A("span",Uw,Ge(l.value)+"%",1)]),Bi(A("input",{"onUpdate:modelValue":v[0]||(v[0]=_=>l.value=_),type:"range",min:"50",max:"100",step:"5",class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"},null,512),[[zi,l.value]]),v[6]||(v[6]=A("div",{class:"flex justify-between text-xs text-gray-500 mt-1"},[A("span",null,"Low"),A("span",null,"Medium"),A("span",null,"High")],-1))])):Lt("",!0),A("div",null,[v[9]||(v[9]=A("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Background",-1)),A("div",Nw,[(Me(),be(Mt,null,qn(c,_=>A("button",{key:_.value,onClick:P=>h.value=_.value,class:mt(["px-3 py-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center",h.value===_.value?"border-indigo-500 bg-indigo-50":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"])},[A("div",{class:"w-8 h-8 rounded-full mb-2 border border-gray-300",style:ma({backgroundColor:_.value==="transparent"?"transparent":_.value==="white"?"#ffffff":_.value,backgroundImage:_.value==="transparent"?"linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb)":"none",backgroundSize:"20px 20px",backgroundPosition:"0 0, 10px 10px"})},null,4),A("span",Ow,Ge(_.label),1)],10,Fw)),64))]),h.value==="custom"?(Me(),be("div",kw,[v[7]||(v[7]=A("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Custom Color",-1)),A("div",Bw,[Bi(A("input",{"onUpdate:modelValue":v[1]||(v[1]=_=>u.value=_),type:"color",class:"w-12 h-12 cursor-pointer rounded-lg border border-gray-300"},null,512),[[zi,u.value]]),Bi(A("input",{"onUpdate:modelValue":v[2]||(v[2]=_=>u.value=_),type:"text",placeholder:"#RRGGBB",class:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",onInput:p},null,544),[[zi,u.value]])]),v[8]||(v[8]=A("div",{class:"mt-2 text-xs text-gray-500"}," Enter hex color code or use the color picker ",-1))])):Lt("",!0)]),A("div",zw,[v[13]||(v[13]=A("h3",{class:"text-sm font-medium text-gray-700 mb-3"},"Preview",-1)),A("div",Hw,[A("div",Gw,[v[10]||(v[10]=A("span",{class:"text-sm text-gray-600"},"File name:",-1)),A("span",Vw,Ge(x.value),1)]),A("div",Ww,[v[11]||(v[11]=A("span",{class:"text-sm text-gray-600"},"Dimensions:",-1)),A("span",Xw,Ge(g.value),1)]),A("div",$w,[v[12]||(v[12]=A("span",{class:"text-sm text-gray-600"},"Size:",-1)),A("span",qw,Ge(m.value),1)])])]),A("div",Yw,[A("button",{onClick:L,disabled:f.value,class:mt(["w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",f.value?"bg-indigo-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700 text-white"])},[f.value?(Me(),be("svg",Kw,[...v[14]||(v[14]=[A("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),A("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):(Me(),be("svg",Zw,[...v[15]||(v[15]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},null,-1)])])),Gi(" "+Ge(f.value?"Exporting...":"Export Image"),1)],10,jw),A("button",{onClick:U,disabled:f.value,class:mt(["w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",f.value?"bg-gray-400 cursor-not-allowed":"bg-gray-600 hover:bg-gray-700 text-white"])},[f.value?(Me(),be("svg",Qw,[...v[16]||(v[16]=[A("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),A("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):(Me(),be("svg",eE,[...v[17]||(v[17]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},null,-1)])])),Gi(" "+Ge(f.value?"Exporting...":"Export All Angles (ZIP)"),1)],10,Jw),d.value?(Me(),be("div",{key:0,class:mt(["mt-3 p-3 rounded-lg",d.value.type==="success"?"bg-green-50 text-green-700":"bg-red-50 text-red-700"])},[A("div",tE,[d.value.type==="success"?(Me(),be("svg",nE,[...v[18]||(v[18]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(Me(),be("svg",iE,[...v[19]||(v[19]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])),A("span",sE,Ge(d.value.message),1)])],2)):Lt("",!0)])])]))}}),oE=Zn(rE,[["__scopeId","data-v-53750bee"]]),aE={class:"accordion-section"},lE={class:"accordion-title"},cE={class:"title-text"},hE={key:0,class:"accordion-content"},uE=Nn({__name:"AccordionSection",props:{title:{},isExpanded:{type:Boolean}},emits:["toggle"],setup(n){return(e,t)=>(Me(),be("div",aE,[A("button",{class:"accordion-header",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},[A("div",lE,[Th(e.$slots,"icon",{},()=>[t[1]||(t[1]=A("div",{class:"default-icon"},[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",stroke:"currentColor","stroke-width":"1.5"})])],-1))]),A("span",cE,Ge(n.title),1)]),A("div",{class:mt(["accordion-chevron",{rotated:!n.isExpanded}])},[...t[2]||(t[2]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M4 6L8 10L12 6",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)]),tt(Wg,{name:"accordion"},{default:Fi(()=>[n.isExpanded?(Me(),be("div",hE,[Th(e.$slots,"default",{},void 0,!0)])):Lt("",!0)]),_:3})]))}}),Bs=Zn(uE,[["__scopeId","data-v-f1dafb0d"]]),dE={class:"panel-header"},fE={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pE={key:0,d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},mE={key:1,d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},gE={key:0,class:"panel-content"},_E={class:"accordion"},vE={class:"material-options"},xE={class:"material-presets"},yE=["onClick"],ME={class:"material-icon"},SE={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bE={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wE={key:2,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},EE={class:"material-label"},TE={class:"lighting-options"},AE={class:"lighting-presets"},CE=["onClick"],RE={class:"lighting-icon"},PE={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},LE={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},DE={key:2,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},IE={class:"lighting-label"},UE={class:"brightness-control"},NE={class:"slider-container"},FE={class:"slider-value"},OE={class:"dimensions-controls"},kE={class:"dimension-input"},BE={class:"dimension-input"},zE={class:"dimension-input"},HE={key:1,class:"collapsed-content"},GE=Nn({__name:"RightPanel",props:{selectedFace:{},textureUrls:{},currentMaterialType:{},currentLightingPreset:{},dimensions:{},sceneManager:{},currentTemplateName:{}},emits:["select-face","set-material-type","set-lighting-preset","update-dimensions","design-upload","apply-to-face","apply-to-all","clear-upload","remove-texture","copy-to-others","reset-all-textures","export","batch-export","export-error"],setup(n,{emit:e}){const t=e,i=Oe(!1),s=Oe(75),r=Jr({upload:!0,face:!0,material:!1,lighting:!1,dimensions:!1,export:!1}),o=["matte","glossy","metallic"],a=["studio","outdoor","dramatic"],l=()=>{i.value=!i.value},c=v=>{r[v]=!r[v]},h=v=>{t("select-face",v)},u=v=>{t("set-material-type",v)},f=v=>{t("set-lighting-preset",v)},d=()=>{console.log("Brightness updated:",s.value)},g=()=>{t("update-dimensions")},x=v=>{t("design-upload",v)},m=v=>{t("apply-to-face",v)},p=v=>{t("apply-to-all",v)},E=()=>{t("clear-upload")},w=v=>{t("remove-texture",v)},M=v=>{t("copy-to-others",v)},I=()=>{t("reset-all-textures")},L=(v,_)=>{t("export",v,_)},U=(v,_)=>{t("batch-export",v,_)},C=v=>{t("export-error",v)};return(v,_)=>(Me(),be("div",{class:mt(["right-panel",{collapsed:i.value}])},[A("div",dE,[_[10]||(_[10]=A("h3",{class:"panel-title"},"Properties",-1)),A("button",{class:"collapse-btn",onClick:l},[(Me(),be("svg",fE,[i.value?(Me(),be("path",pE)):(Me(),be("path",mE))]))])]),i.value?(Me(),be("div",HE,[A("button",{class:"expand-btn",onClick:l,title:"Expand panel"},[..._[21]||(_[21]=[A("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),_[22]||(_[22]=A("div",{class:"collapsed-label"},"Properties",-1))])):(Me(),be("div",gE,[A("div",_E,[tt(Bs,{title:"Upload Design","is-expanded":r.upload,onToggle:_[0]||(_[0]=P=>c("upload"))},{default:Fi(()=>[tt(U_,{"selected-face":n.selectedFace,onUpload:x,onApplyToFace:m,onApplyToAll:p,onClear:E},null,8,["selected-face"])]),_:1},8,["is-expanded"]),tt(Bs,{title:"Face Selector","is-expanded":r.face,onToggle:_[1]||(_[1]=P=>c("face"))},{default:Fi(()=>[tt(bv,{"selected-face":n.selectedFace,textures:n.textureUrls,onSelect:h,onRemoveTexture:w,onCopyToOthers:M,onResetAll:I},null,8,["selected-face","textures"])]),_:1},8,["is-expanded"]),tt(Bs,{title:"Material","is-expanded":r.material,onToggle:_[2]||(_[2]=P=>c("material"))},{default:Fi(()=>[A("div",vE,[A("div",xE,[(Me(),be(Mt,null,qn(o,P=>A("button",{key:P,class:mt(["material-preset",{active:n.currentMaterialType===P}]),onClick:O=>u(P)},[A("div",ME,[P==="matte"?(Me(),be("svg",SE,[..._[11]||(_[11]=[A("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),A("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1)])])):P==="glossy"?(Me(),be("svg",bE,[..._[12]||(_[12]=[A("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),A("path",{d:"M10 6L12 10L10 14L8 10L10 6Z",fill:"currentColor","fill-opacity":"0.5"},null,-1),A("circle",{cx:"10",cy:"10",r:"2",fill:"currentColor"},null,-1)])])):(Me(),be("svg",wE,[..._[13]||(_[13]=[A("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),A("path",{d:"M6 6L14 14",stroke:"currentColor","stroke-width":"1.5"},null,-1),A("path",{d:"M6 14L14 6",stroke:"currentColor","stroke-width":"1.5"},null,-1)])]))]),A("span",EE,Ge(P),1)],10,yE)),64))])])]),_:1},8,["is-expanded"]),tt(Bs,{title:"Lighting","is-expanded":r.lighting,onToggle:_[4]||(_[4]=P=>c("lighting"))},{default:Fi(()=>[A("div",TE,[A("div",AE,[(Me(),be(Mt,null,qn(a,P=>A("button",{key:P,class:mt(["lighting-preset",{active:n.currentLightingPreset===P}]),onClick:O=>f(P)},[A("div",RE,[P==="studio"?(Me(),be("svg",PE,[..._[14]||(_[14]=[A("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),A("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M10 16V18",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M2 10H4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M16 10H18",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])])):P==="outdoor"?(Me(),be("svg",LE,[..._[15]||(_[15]=[A("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),A("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M15 5L13.5 6.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M18 10L16 10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M15 15L13.5 13.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])])):(Me(),be("svg",DE,[..._[16]||(_[16]=[A("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),A("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M5 5L6.5 6.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M2 10H4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),A("path",{d:"M5 15L6.5 13.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])]))]),A("span",IE,Ge(P),1)],10,CE)),64))]),A("div",UE,[_[17]||(_[17]=A("label",{class:"control-label"},"Brightness",-1)),A("div",NE,[Bi(A("input",{"onUpdate:modelValue":_[3]||(_[3]=P=>s.value=P),type:"range",min:"0",max:"100",step:"1",class:"slider",onInput:d},null,544),[[zi,s.value]]),A("span",FE,Ge(s.value)+"%",1)])])])]),_:1},8,["is-expanded"]),tt(Bs,{title:"Box Dimensions","is-expanded":r.dimensions,onToggle:_[8]||(_[8]=P=>c("dimensions"))},{default:Fi(()=>[A("div",OE,[A("div",kE,[_[18]||(_[18]=A("label",{class:"dimension-label"},[A("span",null,"Width"),A("span",{class:"dimension-unit"},"cm")],-1)),Bi(A("input",{"onUpdate:modelValue":_[5]||(_[5]=P=>n.dimensions.width=P),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:g},null,544),[[zi,n.dimensions.width]])]),A("div",BE,[_[19]||(_[19]=A("label",{class:"dimension-label"},[A("span",null,"Height"),A("span",{class:"dimension-unit"},"cm")],-1)),Bi(A("input",{"onUpdate:modelValue":_[6]||(_[6]=P=>n.dimensions.height=P),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:g},null,544),[[zi,n.dimensions.height]])]),A("div",zE,[_[20]||(_[20]=A("label",{class:"dimension-label"},[A("span",null,"Depth"),A("span",{class:"dimension-unit"},"cm")],-1)),Bi(A("input",{"onUpdate:modelValue":_[7]||(_[7]=P=>n.dimensions.depth=P),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:g},null,544),[[zi,n.dimensions.depth]])])])]),_:1},8,["is-expanded"]),tt(Bs,{title:"Export","is-expanded":r.export,onToggle:_[9]||(_[9]=P=>c("export"))},{default:Fi(()=>[tt(oE,{"template-name":n.currentTemplateName,"scene-manager":n.sceneManager,onExport:L,onBatchExport:U,onError:C},null,8,["template-name","scene-manager"])]),_:1},8,["is-expanded"])])]))],2))}}),VE=Zn(GE,[["__scopeId","data-v-d8aa291c"]]),xd={type:"change"},ch={type:"start"},Up={type:"end"},Bo=new nh,yd=new Oi,WE=Math.cos(70*fx.DEG2RAD),It=new B,sn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6;class XE extends Sw{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ms,this._lastTargetPosition=new B,this._quat=new ms().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vd,this._sphericalDelta=new vd,this._scale=1,this._panOffset=new B,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new B,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qE.bind(this),this._onPointerDown=$E.bind(this),this._onPointerUp=YE.bind(this),this._onContextMenu=tT.bind(this),this._onMouseWheel=ZE.bind(this),this._onKeyDown=JE.bind(this),this._onTouchStart=QE.bind(this),this._onTouchMove=eT.bind(this),this._onMouseDown=jE.bind(this),this._onMouseMove=KE.bind(this),this._interceptControlDown=nT.bind(this),this._interceptControlUp=iT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xd),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<WE?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(xd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $E(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function YE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Up),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(ch)}function KE(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ZE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(ch),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Up))}function JE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function QE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(ch)}function eT(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function tT(n){this.enabled!==!1&&n.preventDefault()}function nT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class sT extends _w{constructor(e){super(e),this.type=_i}parse(e){const o=function(C,v){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},h=`
`,u=function(C,v,_){v=v||1024;let O=C.pos,D=-1,F=0,V="",z=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));for(;0>(D=z.indexOf(h))&&F<v&&O<C.byteLength;)V+=z,F+=z.length,O+=128,z+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));return-1<D?(C.pos+=F+D+1,V+z.slice(0,D)):!1},f=function(C){const v=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let V,z;for((C.pos>=C.byteLength||!(V=u(C)))&&o(1,"no header found"),(z=V.match(v))||o(3,"bad initial token"),F.valid|=1,F.programtype=z[1],F.string+=V+`
`;V=u(C),V!==!1;){if(F.string+=V+`
`,V.charAt(0)==="#"){F.comments+=V+`
`;continue}if((z=V.match(_))&&(F.gamma=parseFloat(z[1])),(z=V.match(P))&&(F.exposure=parseFloat(z[1])),(z=V.match(O))&&(F.valid|=2,F.format=z[1]),(z=V.match(D))&&(F.valid|=4,F.height=parseInt(z[1],10),F.width=parseInt(z[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(C,v,_){const P=v;if(P<8||P>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);P!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*v*_);O.length||o(4,"unable to allocate buffer space");let D=0,F=0;const V=4*P,z=new Uint8Array(4),K=new Uint8Array(V);let Y=_;for(;Y>0&&F<C.byteLength;){F+4>C.byteLength&&o(1),z[0]=C[F++],z[1]=C[F++],z[2]=C[F++],z[3]=C[F++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=P)&&o(3,"bad rgbe scanline format");let ce=0,pe;for(;ce<V&&F<C.byteLength;){pe=C[F++];const Re=pe>128;if(Re&&(pe-=128),(pe===0||ce+pe>V)&&o(3,"bad scanline data"),Re){const We=C[F++];for(let oe=0;oe<pe;oe++)K[ce++]=We}else K.set(C.subarray(F,F+pe),ce),ce+=pe,F+=pe}const xe=P;for(let Re=0;Re<xe;Re++){let We=0;O[D]=K[Re+We],We+=P,O[D+1]=K[Re+We],We+=P,O[D+2]=K[Re+We],We+=P,O[D+3]=K[Re+We],D+=4}Y--}return O},g=function(C,v,_,P){const O=C[v+3],D=Math.pow(2,O-128)/255;_[P+0]=C[v+0]*D,_[P+1]=C[v+1]*D,_[P+2]=C[v+2]*D,_[P+3]=1},x=function(C,v,_,P){const O=C[v+3],D=Math.pow(2,O-128)/255;_[P+0]=vo.toHalfFloat(Math.min(C[v+0]*D,65504)),_[P+1]=vo.toHalfFloat(Math.min(C[v+1]*D,65504)),_[P+2]=vo.toHalfFloat(Math.min(C[v+2]*D,65504)),_[P+3]=vo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),E=p.width,w=p.height,M=d(m.subarray(m.pos),E,w);let I,L,U;switch(this.type){case yn:U=M.length/4;const C=new Float32Array(U*4);for(let _=0;_<U;_++)g(M,_*4,C,_*4);I=C,L=yn;break;case _i:U=M.length/4;const v=new Uint16Array(U*4);for(let _=0;_<U;_++)x(M,_*4,v,_*4);I=v,L=_i;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:E,height:w,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:L}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case yn:case _i:o.colorSpace=xs,o.minFilter=en,o.magFilter=en,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}class Qn{constructor(){Je(this,"group");Je(this,"textureLoader");Je(this,"faces",new Map);Je(this,"faceConfigs",[]);Je(this,"currentMaterialType","matte");this.group=new Er,this.textureLoader=new Dp}getMesh(){return this.group}getTextureableFaces(){return this.faceConfigs.filter(e=>e.canReceiveTexture)}async applyTexture(e,t){return new Promise((i,s)=>{const r=this.faces.get(e);if(!r){s(new Error(`Face ${e} not found`));return}this.textureLoader.load(t,o=>{o.colorSpace=Zt,o.anisotropy=4;const a=r.material;a&&(a.map&&a.map.dispose(),a.map=o,a.needsUpdate=!0),i()},void 0,o=>{console.error(`Failed to load texture for ${e}:`,o),s(o)})})}clearTexture(e){const t=this.faces.get(e);if(t){const i=t.material;i&&i.map&&(i.map.dispose(),i.map=null,i.needsUpdate=!0)}}setMaterial(e){this.currentMaterialType=e,this.faces.forEach(t=>{const i=t.material;if(i){switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}i.needsUpdate=!0}})}createMaterial(e,t="#ffffff"){const i=new bn({color:new Ve(t),side:kt});switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}return i}dispose(){this.faces.forEach(e=>{const t=e.material;t&&(t instanceof bn&&t.map&&t.map.dispose(),t.dispose()),e.geometry.dispose()}),this.group.clear(),this.faces.clear()}}class rT extends Qn{constructor(t){super();Je(this,"config");this.config=t,this.generateGeometry(t)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new Ct(t.width,t.height,t.depth);this.faceConfigs=[{id:"front",name:"Front",uvIndex:4,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back",uvIndex:5,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left",uvIndex:0,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right",uvIndex:1,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"top",name:"Top",uvIndex:2,textureSize:{width:t.width,height:t.depth},canReceiveTexture:!0},{id:"bottom",name:"Bottom",uvIndex:3,textureSize:{width:t.width,height:t.depth},canReceiveTexture:!0}];const s=this.createFaceGeometries(i);this.faceConfigs.forEach((r,o)=>{const a=s[o],l=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),c=new we(a,l);c.castShadow=!0,c.receiveShadow=!0,c.name=r.id,this.faces.set(r.id,c),this.group.add(c)}),this.addEdgesOverlay(i)}createFaceGeometries(t){const i=[],{width:s,height:r,depth:o}=this.config;return i.push(new wt(s,r)),i.push(new wt(s,r)),i.push(new wt(o,r)),i.push(new wt(o,r)),i.push(new wt(s,o)),i.push(new wt(s,o)),[{position:[0,0,o/2],rotation:[0,0,0]},{position:[0,0,-o/2],rotation:[0,Math.PI,0]},{position:[-s/2,0,0],rotation:[0,Math.PI/2,0]},{position:[s/2,0,0],rotation:[0,-Math.PI/2,0]},{position:[0,r/2,0],rotation:[-Math.PI/2,0,0]},{position:[0,-r/2,0],rotation:[Math.PI/2,0,0]}].forEach((l,c)=>{const h=i[c];h.translate(l.position[0],l.position[1],l.position[2]),h.rotateX(l.rotation[0]),h.rotateY(l.rotation[1]),h.rotateZ(l.rotation[2])}),i}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.3}),r=new wn(i,s);this.group.add(r)}resize(t,i,s){this.config={...this.config,width:t,height:i,depth:s},this.generateGeometry(this.config)}}class oT extends Qn{constructor(t){super();Je(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[];i.push(new re(0,0)),i.push(new re(t.radius*.8,0)),i.push(new re(t.radius,t.height*.2)),i.push(new re(t.radius,t.height*.6)),i.push(new re(t.radius*.9,t.height*.8)),i.push(new re(t.neckRadius,t.height*.9)),i.push(new re(t.neckRadius,t.height-t.capHeight)),i.push(new re(t.capRadius,t.height-t.capHeight*.5)),i.push(new re(t.capRadius,t.height));const s=new gs(i,t.segments||32),r=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),o=new we(s,r);o.castShadow=!0,o.receiveShadow=!0,o.name="body",this.faces.set("body",o),this.group.add(o);const a=t.height*.4,l=new Tt(t.radius*.95,t.radius*.95,a,t.segments||32,1,!0),c=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new we(l,c);h.position.y=t.height*.3,h.castShadow=!0,h.receiveShadow=!0,h.name="label",this.faces.set("label",h),this.group.add(h),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*t.radius,height:a},canReceiveTexture:!0},{id:"body",name:"Bottle Body",uvIndex:1,textureSize:{width:Math.PI*2*t.radius,height:t.height},canReceiveTexture:!1}];const u=new Tt(t.capRadius,t.capRadius,t.capHeight,t.segments||32),f=this.createMaterial("metallic","#cccccc");f.roughness=.3,f.metalness=.9;const d=new we(u,f);d.position.y=t.height-t.capHeight*.5,d.castShadow=!0,d.receiveShadow=!0,d.name="cap",this.group.add(d),this.addEdgesOverlay(s)}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new wn(i,s);this.group.add(r)}setMaterial(t){super.setMaterial(t);const i=this.group.getObjectByName("cap");i&&i.material instanceof bn&&(i.material.roughness=.3,i.material.metalness=.9,i.material.needsUpdate=!0)}}class aT extends Qn{constructor(t){super();Je(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=this.createPouchCurve(t),s=new Ap;s.moveTo(0,0),s.lineTo(t.width,0),s.lineTo(t.width,t.depth),s.lineTo(0,t.depth),s.lineTo(0,0);const r={steps:t.segments||32,bevelEnabled:!1,extrudePath:i},o=new lh(s,r);o.rotateX(Math.PI/2),o.rotateY(Math.PI/2);const a=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),l=new we(o,a);l.castShadow=!0,l.receiveShadow=!0,l.name="front",this.faces.set("front",l),this.group.add(l);const c=new wt(t.width,t.height),h=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),u=new we(c,h);u.position.z=-t.depth*.5,u.rotation.y=Math.PI,u.castShadow=!0,u.receiveShadow=!0,u.name="back",this.faces.set("back",u),this.group.add(u),this.faceConfigs=[{id:"front",name:"Front Panel",uvIndex:0,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0}],this.addSideGussets(t),this.addTopSeal(t),this.addEdgesOverlay(o)}createPouchCurve(t){const i=[],s=t.curveHeight||t.height*.15;return i.push(new B(0,-t.height/2,0)),i.push(new B(0,-t.height/3,s*.2)),i.push(new B(0,-t.height/6,s*.4)),i.push(new B(0,0,s)),i.push(new B(0,t.height/6,s*.6)),i.push(new B(0,t.height/3,s*.3)),i.push(new B(0,t.height/2,0)),new ah(i)}addSideGussets(t){const i=new Ct(t.depth*.3,t.height*.8,.05),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new we(i,s);r.position.x=-t.width/2-t.depth*.15,r.position.y=0,r.rotation.z=Math.PI/4,r.castShadow=!0,r.receiveShadow=!0;const o=new we(i,s);o.position.x=t.width/2+t.depth*.15,o.position.y=0,o.rotation.z=-Math.PI/4,o.castShadow=!0,o.receiveShadow=!0,this.group.add(r),this.group.add(o)}addTopSeal(t){const i=new Ct(t.width*1.1,t.height*.1,t.depth*.5),s=this.createMaterial(this.currentMaterialType,"#888888"),r=new we(i,s);r.position.y=t.height/2+t.height*.05,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new wn(i,s);this.group.add(r)}}class lT extends Qn{constructor(t){super();Je(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new Tt(t.radius,t.radius,t.height-t.capHeight,t.segments||32,1,!1,0,Math.PI*2),s=t.radius-t.thickness,r=new Tt(s,s,t.height-t.capHeight,t.segments||32,1,!1,0,Math.PI*2),o=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),a=new we(i,o);a.castShadow=!0,a.receiveShadow=!0,a.name="body",this.faces.set("body",a),this.group.add(a);const l=(t.height-t.capHeight)*.6,c=new Tt(t.radius*1.02,t.radius*1.02,l,t.segments||32,1,!0),h=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),u=new we(c,h);u.position.y=(t.height-t.capHeight-l)*.5,u.castShadow=!0,u.receiveShadow=!0,u.name="label",this.faces.set("label",u),this.group.add(u),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*t.radius,height:l},canReceiveTexture:!0},{id:"body",name:"Tube Body",uvIndex:1,textureSize:{width:Math.PI*2*t.radius,height:t.height-t.capHeight},canReceiveTexture:!1}];const f=new Tt(t.radius,t.radius,t.thickness*2,t.segments||32),d=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),g=new we(f,d);g.position.y=-(t.height-t.capHeight)/2,g.castShadow=!0,g.receiveShadow=!0,g.name="bottom_cap",this.group.add(g);const x=new Tt(t.radius*1.1,t.radius*1.1,t.capHeight,t.segments||32),m=this.createMaterial("metallic","#cccccc");m.roughness=.3,m.metalness=.9;const p=new we(x,m);p.position.y=(t.height-t.capHeight)/2+t.capHeight/2,p.castShadow=!0,p.receiveShadow=!0,p.name="top_cap",this.group.add(p);const E=this.createMaterial(this.currentMaterialType,"#666666"),w=new we(r,E);w.position.y=0,w.castShadow=!0,w.receiveShadow=!0,this.group.add(w),this.addEdgesOverlay(i)}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new wn(i,s);this.group.add(r)}setMaterial(t){super.setMaterial(t);const i=this.group.getObjectByName("top_cap");i&&i.material instanceof bn&&(i.material.roughness=.3,i.material.metalness=.9,i.material.needsUpdate=!0)}}class cT extends Qn{constructor(t){super();Je(this,"config");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new Ct(t.width,t.height,t.depth),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new we(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="front",this.faces.set("front",r),this.group.add(r);const o=new wt(t.width,t.height),a=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),l=new we(o,a);l.position.z=-t.depth/2,l.rotation.y=Math.PI,l.castShadow=!0,l.receiveShadow=!0,l.name="back",this.faces.set("back",l),this.group.add(l),this.faceConfigs=[{id:"front",name:"Front Panel",uvIndex:0,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:2,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const c=new wt(t.depth,t.height),h=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),u=new we(c,h);u.position.x=-t.width/2,u.position.z=0,u.rotation.y=-Math.PI/2,u.castShadow=!0,u.receiveShadow=!0,u.name="left",this.faces.set("left",u),this.group.add(u);const f=new wt(t.depth,t.height),d=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),g=new we(f,d);g.position.x=t.width/2,g.position.z=0,g.rotation.y=Math.PI/2,g.castShadow=!0,g.receiveShadow=!0,g.name="right",this.faces.set("right",g),this.group.add(g),this.addHandles(t),this.addTopFold(t),this.addBottomReinforcement(t),this.addEdgesOverlay(i)}addHandles(t){const i=new ah([new B(-t.width*.3,t.height/2,0),new B(0,t.height/2+t.handleHeight,0),new B(t.width*.3,t.height/2,0)]),s=new hw(i,20,t.handleRadius,8,!1),r=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),o=new we(s,r);o.position.z=t.depth*.4,o.castShadow=!0,o.receiveShadow=!0;const a=new we(s,r);a.position.z=-t.depth*.4,a.castShadow=!0,a.receiveShadow=!0,this.group.add(o),this.group.add(a)}addTopFold(t){const i=new Ct(t.width*1.1,t.height*.1,t.depth*.8),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new we(i,s);r.position.y=t.height/2+t.height*.05,r.rotation.x=Math.PI/6,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addBottomReinforcement(t){const i=new Ct(t.width*.9,t.height*.1,t.depth*.9),s=this.createMaterial(this.currentMaterialType,"#aaaaaa"),r=new we(i,s);r.position.y=-t.height/2-t.height*.05,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.3}),r=new wn(i,s);this.group.add(r)}}class hT extends Qn{constructor(t){super();Je(this,"config");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new Tt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,!1),s=new bn({color:new Ve(t.color||"#ffffff"),roughness:.3,metalness:.1,transparent:!0,opacity:.9,side:kt}),r=new we(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="body",this.faces.set("body",r),this.group.add(r);const o=t.height*.7,a=new Tt(t.radiusTop*.95,t.radiusBottom*.95,o,t.radialSegments,1,!0),l=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),c=new we(a,l);if(c.position.y=0,c.castShadow=!0,c.receiveShadow=!0,c.name="label",this.faces.set("label",c),this.group.add(c),!t.openTop){const h=new Tt(t.radiusTop*1.05,t.radiusTop*1.05,t.height*.05,t.radialSegments,1),u=this.createMaterial(this.currentMaterialType,"#cccccc"),f=new we(h,u);f.position.y=t.height/2+t.height*.025,f.castShadow=!0,f.receiveShadow=!0,this.group.add(f)}this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*((t.radiusTop+t.radiusBottom)/2),height:t.height*.7},canReceiveTexture:!0},{id:"body",name:"Cup Body",uvIndex:1,textureSize:{width:Math.PI*2*((t.radiusTop+t.radiusBottom)/2),height:t.height},canReceiveTexture:!1}],this.addBottomReinforcement(t),this.addCondensationEffect(t),this.addEdgesOverlay(i)}addBottomReinforcement(t){const i=new Tt(t.radiusBottom*.8,t.radiusBottom*.8,t.height*.05,t.radialSegments,1),s=this.createMaterial(this.currentMaterialType,"#f0f0f0"),r=new we(i,s);r.position.y=-t.height/2-t.height*.025,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addCondensationEffect(t){for(let s=0;s<8;s++){const r=new La(t.height*.02,4,4),o=new rr({color:16777215,transparent:!0,opacity:.3}),a=s/8*Math.PI*2,l=(t.radiusTop+t.radiusBottom)/2*.9,c=-t.height/2+t.height*.3+Math.random()*t.height*.4,h=new we(r,o);h.position.x=Math.cos(a)*l,h.position.y=c,h.position.z=Math.sin(a)*l,this.group.add(h)}}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.1}),r=new wn(i,s);this.group.add(r)}}class uT extends Qn{constructor(t){super();Je(this,"config");Je(this,"lidMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new Ct(t.width,t.height,t.depth),s=new bn({color:new Ve(t.color||"#ffffff"),roughness:.6,metalness:.1,side:kt}),r=new we(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="body",this.faces.set("body",r),this.group.add(r);const o=t.lidThickness||t.height*.1,a=new Ct(t.width*1.02,o,t.depth*1.02),l=this.createMaterial(this.currentMaterialType,t.color||"#f5f5f5");this.lidMesh=new we(a,l),this.lidMesh.position.y=t.height/2+o/2,this.lidMesh.castShadow=!0,this.lidMesh.receiveShadow=!0,this.lidMesh.name="lid",this.faces.set("lid",this.lidMesh),this.group.add(this.lidMesh),this.faceConfigs=[{id:"lid",name:"Top Lid",uvIndex:0,textureSize:{width:t.width*1.02,height:t.depth*1.02},canReceiveTexture:!0},{id:"front",name:"Front Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:2,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:4,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const c=new wt(t.width,t.height),h=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),u=new we(c,h);u.position.z=t.depth/2,u.castShadow=!0,u.receiveShadow=!0,u.name="front",this.faces.set("front",u),this.group.add(u);const f=new wt(t.width,t.height),d=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),g=new we(f,d);g.position.z=-t.depth/2,g.rotation.y=Math.PI,g.castShadow=!0,g.receiveShadow=!0,g.name="back",this.faces.set("back",g),this.group.add(g);const x=new wt(t.depth,t.height),m=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),p=new we(x,m);p.position.x=-t.width/2,p.rotation.y=-Math.PI/2,p.castShadow=!0,p.receiveShadow=!0,p.name="left",this.faces.set("left",p),this.group.add(p);const E=new wt(t.depth,t.height),w=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),M=new we(E,w);M.position.x=t.width/2,M.rotation.y=Math.PI/2,M.castShadow=!0,M.receiveShadow=!0,M.name="right",this.faces.set("right",M),this.group.add(M),this.addContainerRim(t,o),this.addStackingRidges(t),this.addEdgesOverlay(i)}addContainerRim(t,i){const s=new Ct(t.width*1.05,t.height*.05,t.depth*1.05),r=this.createMaterial(this.currentMaterialType,"#e0e0e0"),o=new we(s,r);o.position.y=t.height/2-t.height*.025,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o)}addStackingRidges(t){const s=t.depth/4;for(let r=1;r<=3;r++){const o=new Ct(t.width*.9,t.height*.03,t.depth*.05),a=this.createMaterial(this.currentMaterialType,"#d0d0d0"),l=new we(o,a);l.position.y=-t.height/2-t.height*.015,l.position.z=-t.depth/2+r*s,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new wn(i,s);this.group.add(r)}setLidOpen(t){this.lidMesh&&(t?(this.lidMesh.position.y=this.config.height/2+this.config.height*.2,this.lidMesh.rotation.x=Math.PI/6):(this.lidMesh.position.y=this.config.height/2+(this.config.lidThickness||this.config.height*.1)/2,this.lidMesh.rotation.x=0))}}class dT extends Qn{constructor(t){super();Je(this,"config");Je(this,"lidMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[],s=t.segments||32,r=t.thickness||t.height*.05;i.push(new re(t.radiusBottom,-t.height/2)),i.push(new re(t.radiusBottom+r,-t.height/2+r));const o=-t.height/4,a=(t.radiusBottom+t.radiusTop)/2;i.push(new re(a*.8,o)),i.push(new re(a*.9,o+t.height*.1)),i.push(new re(t.radiusTop-r,t.height/2-r)),i.push(new re(t.radiusTop,t.height/2));const l=new gs(i,s,0,Math.PI*2),c=new bn({color:new Ve(t.color||"#f5f5f5"),roughness:.8,metalness:0,side:kt}),h=new we(l,c);h.castShadow=!0,h.receiveShadow=!0,h.name="body",this.faces.set("body",h),this.group.add(h);const u=[],f=t.height*.8,d=t.radiusTop*.9,g=t.radiusBottom*.9;u.push(new re(g,-f/2)),u.push(new re(g*1.1,-f/2+f*.1)),u.push(new re((g+d)/2,0)),u.push(new re(d*.95,f/2-f*.1)),u.push(new re(d,f/2));const x=new gs(u,s,0,Math.PI*2),m=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),p=new we(x,m);p.name="wrap",this.faces.set("wrap",p),this.group.add(p),t.withLid&&this.addLid(t),this.faceConfigs=[{id:"wrap",name:"Outer Wrap",uvIndex:0,textureSize:{width:Math.PI*2*((d+g)/2),height:f},canReceiveTexture:!0},{id:"body",name:"Bowl Body",uvIndex:1,textureSize:{width:Math.PI*2*((t.radiusTop+t.radiusBottom)/2),height:t.height},canReceiveTexture:!1}],this.addRimReinforcement(t,r),this.addBottomGrip(t),this.addEdgesOverlay(l)}addLid(t){const i=new Tt(t.radiusTop*1.05,t.radiusTop*1.05,t.height*.05,t.segments||32,1),s=this.createMaterial(this.currentMaterialType,t.color||"#f0f0f0");this.lidMesh=new we(i,s),this.lidMesh.position.y=t.height/2+t.height*.025,this.lidMesh.castShadow=!0,this.lidMesh.receiveShadow=!0,this.group.add(this.lidMesh);const r=new Tt(t.radiusTop*.1,t.radiusTop*.1,t.height*.1,8,1),o=this.createMaterial(this.currentMaterialType,"#cccccc"),a=new we(r,o);a.position.y=t.height/2+t.height*.1,a.castShadow=!0,a.receiveShadow=!0,this.group.add(a)}addRimReinforcement(t,i){const s=new Da(t.radiusTop,i*1.5,8,t.segments||32,Math.PI*2),r=this.createMaterial(this.currentMaterialType,"#e8e8e8"),o=new we(s,r);o.position.y=t.height/2,o.rotation.x=Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o)}addBottomGrip(t){for(let s=0;s<6;s++){const r=s/6*Math.PI*2,o=new Ct(t.radiusBottom*.3,t.height*.02,t.radiusBottom*.1),a=this.createMaterial(this.currentMaterialType,"#d0d0d0"),l=new we(o,a);l.position.y=-t.height/2-t.height*.01,l.position.x=Math.cos(r)*t.radiusBottom*.5,l.position.z=Math.sin(r)*t.radiusBottom*.5,l.rotation.y=r,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}}addEdgesOverlay(t){const i=new Sn(t),s=new pn({color:0,linewidth:1,transparent:!0,opacity:.15}),r=new wn(i,s);this.group.add(r)}setLidVisible(t){this.lidMesh&&(this.lidMesh.visible=t)}}class fT extends Qn{constructor(t){super();Je(this,"config");Je(this,"lidMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new Ct(t.width,t.height,t.depth),s=new bn({color:new Ve(t.color||"#f5f5dc"),roughness:.85,metalness:0,side:kt}),r=new we(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="body",this.faces.set("body",r),this.group.add(r);const o=t.lidThickness||t.height*.1,a=new Ct(t.width*1.02,o,t.depth*1.02),l=this.createMaterial(this.currentMaterialType,t.color||"#f8f8f0");this.lidMesh=new we(a,l);const c=t.hingeAngle||15*(Math.PI/180);this.lidMesh.position.y=t.height/2+o/2,this.lidMesh.position.x=-t.width/2,this.lidMesh.rotation.z=c,this.lidMesh.castShadow=!0,this.lidMesh.receiveShadow=!0,this.lidMesh.name="lid",this.faces.set("lid",this.lidMesh),this.group.add(this.lidMesh),this.faceConfigs=[{id:"lid",name:"Top Lid",uvIndex:0,textureSize:{width:t.width*1.02,height:t.depth*1.02},canReceiveTexture:!0},{id:"front",name:"Front Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:2,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:4,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const h=new wt(t.width,t.height),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),f=new we(h,u);f.position.z=t.depth/2,f.castShadow=!0,f.receiveShadow=!0,f.name="front",this.faces.set("front",f),this.group.add(f);const d=new wt(t.width,t.height),g=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),x=new we(d,g);x.position.z=-t.depth/2,x.rotation.y=Math.PI,x.castShadow=!0,x.receiveShadow=!0,x.name="back",this.faces.set("back",x),this.group.add(x);const m=new wt(t.depth,t.height),p=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),E=new we(m,p);E.position.x=-t.width/2,E.rotation.y=-Math.PI/2,E.castShadow=!0,E.receiveShadow=!0,E.name="left",this.faces.set("left",E),this.group.add(E);const w=new wt(t.depth,t.height),M=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),I=new we(w,M);I.position.x=t.width/2,I.rotation.y=Math.PI/2,I.castShadow=!0,I.receiveShadow=!0,I.name="right",this.faces.set("right",I),this.group.add(I),this.addHingeMechanism(t,o),this.addLatchMechanism(t,o),this.addVentilationHoles(t),this.addCardboardEdges(i)}addHingeMechanism(t,i){const s=new Tt(t.height*.05,t.height*.05,i*1.5,8,1),r=this.createMaterial(this.currentMaterialType,"#888888"),o=new we(s,r);o.position.x=-t.width/2,o.position.y=t.height/2,o.rotation.z=Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const a=new Tt(t.height*.02,t.height*.02,t.depth*.8,8,1),l=this.createMaterial(this.currentMaterialType,"#666666"),c=new we(a,l);c.position.x=-t.width/2,c.position.y=t.height/2,c.rotation.x=Math.PI/2,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}addLatchMechanism(t,i){const s=new Ct(t.width*.1,i*.8,t.depth*.1),r=this.createMaterial(this.currentMaterialType,"#aaaaaa"),o=new we(s,r);o.position.x=t.width/2-t.width*.05,o.position.y=t.height/2+i*.4,o.position.z=t.depth*.3,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const a=new Ct(t.width*.12,t.height*.05,t.depth*.12),l=this.createMaterial(this.currentMaterialType,"#999999"),c=new we(a,l);c.position.x=t.width/2-t.width*.06,c.position.y=t.height/2-t.height*.025,c.position.z=t.depth*.3,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}addVentilationHoles(t){const s=t.width*.8/7;for(let r=1;r<=6;r++){const o=new Tt(t.height*.02,t.height*.02,t.height*.01,8,1),a=new rr({color:0,transparent:!0,opacity:.3}),l=new we(o,a);l.position.x=-t.width/2+t.width*.1+r*s,l.position.y=t.height/2+(t.lidThickness||t.height*.1)*.6,l.position.z=0,l.rotation.x=Math.PI/2,this.group.add(l)}}addCardboardEdges(t){const i=new Sn(t),s=new pn({color:9139029,linewidth:2,transparent:!0,opacity:.3}),r=new wn(i,s);this.group.add(r);const o=new Ct(this.config.width*.98,this.config.height*.01,this.config.depth*.98),a=new rr({color:10506797,transparent:!0,opacity:.1,side:kt}),l=new we(o,a);l.position.y=-this.config.height/2+this.config.height*.02,this.group.add(l)}setLidOpen(t){if(this.lidMesh){const i=t?45*(Math.PI/180):15*(Math.PI/180);this.lidMesh.rotation.z=i}}}class pT extends Qn{constructor(t){super();Je(this,"config");Je(this,"capMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[],s=t.segments||32,r=t.totalHeight-t.neckHeight;i.push(new re(t.baseRadius,-t.totalHeight/2)),i.push(new re(t.baseRadius*.95,-t.totalHeight/2+t.totalHeight*.02)),i.push(new re(t.bodyRadius*.8,-t.totalHeight/2+r*.2)),i.push(new re(t.bodyRadius,-t.totalHeight/2+r*.5)),i.push(new re(t.bodyRadius*.9,-t.totalHeight/2+r*.8)),i.push(new re(t.neckRadius*1.5,-t.totalHeight/2+r*.9)),i.push(new re(t.neckRadius*1.2,-t.totalHeight/2+r*.95)),i.push(new re(t.neckRadius,-t.totalHeight/2+r)),i.push(new re(t.neckRadius,-t.totalHeight/2+r+t.neckHeight*.8)),i.push(new re(t.neckRadius*1.1,-t.totalHeight/2+r+t.neckHeight*.9)),i.push(new re(t.neckRadius*.9,-t.totalHeight/2+r+t.neckHeight));const o=new gs(i,s,0,Math.PI*2),a=new bn({color:new Ve(t.color||"#ffffff"),roughness:.05,metalness:.1,transparent:!0,opacity:.3,side:kt,envMapIntensity:1}),l=new we(o,a);l.castShadow=!0,l.receiveShadow=!0,l.name="body",this.faces.set("body",l),this.group.add(l);const c=r*.6,h=Math.PI*2*t.bodyRadius*.7,u=new Tt(t.bodyRadius*.95,t.bodyRadius*.95,c,s,1,!0,0,Math.PI*2*.7),f=this.createMaterial(this.currentMaterialType,"#ffffff"),d=new we(u,f);d.position.y=-t.totalHeight/2+r*.5,d.castShadow=!0,d.receiveShadow=!0,d.name="label",this.faces.set("label",d),this.group.add(d);const g=new Tt(t.neckRadius*1.5,t.neckRadius*1.3,t.totalHeight*.15,s,1),x=new bn({color:new Ve("#f0f0f0"),roughness:.3,metalness:.5,side:kt});this.capMesh=new we(g,x),this.capMesh.position.y=t.totalHeight/2-t.totalHeight*.075,this.capMesh.castShadow=!0,this.capMesh.receiveShadow=!0,this.group.add(this.capMesh);const m=new Da(t.neckRadius*1.1,t.totalHeight*.01,8,s,Math.PI*2),p=this.createMaterial("metallic","#d4af37"),E=new we(m,p);E.position.y=t.totalHeight/2-t.totalHeight*.15,E.rotation.x=Math.PI/2,E.castShadow=!0,E.receiveShadow=!0,this.group.add(E),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:h,height:c},canReceiveTexture:!0},{id:"body",name:"Bottle Body",uvIndex:1,textureSize:{width:Math.PI*2*t.bodyRadius,height:t.totalHeight},canReceiveTexture:!1}],this.addLiquidContent(t,r),this.addCapDetails(t),this.addOpticalEffects(t),this.addCrystalEdges(o)}addLiquidContent(t,i){const s=[],r=i*.7,o=t.bodyRadius*.85;s.push(new re(o*.2,-t.totalHeight/2+t.totalHeight*.05)),s.push(new re(o,-t.totalHeight/2+t.totalHeight*.1)),s.push(new re(o*.95,-t.totalHeight/2+r*.5)),s.push(new re(o*.7,-t.totalHeight/2+r)),s.push(new re(o*.3,-t.totalHeight/2+r*1.05));const a=new gs(s,t.segments||32,0,Math.PI*2),l=new uw({color:new Ve("#e6f7ff"),transmission:.9,roughness:.1,thickness:.5,ior:1.33,side:kt}),c=new we(a,l);c.position.y=-t.totalHeight/2+r*.5,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}addCapDetails(t){const i=new Tt(t.neckRadius*1.4,t.neckRadius*1.4,t.totalHeight*.02,t.segments||32,1),s=this.createMaterial("metallic","#c0c0c0"),r=new we(i,s);r.position.y=t.totalHeight/2-t.totalHeight*.04,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const o=new Tt(t.neckRadius*.3,t.neckRadius*.2,t.totalHeight*.08,8,1),a=this.createMaterial("metallic","#a0a0a0"),l=new we(o,a);l.position.y=t.totalHeight/2+t.totalHeight*.04,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}addOpticalEffects(t){const s=new La(t.totalHeight*.01,4,4);for(let r=0;r<20;r++){const o=new rr({color:16777215,transparent:!0,opacity:.1+Math.random()*.1}),a=new we(s,o),l=Math.random()*Math.PI*2,c=t.bodyRadius*.7*Math.random(),h=-t.totalHeight/2+t.totalHeight*.3+Math.random()*t.totalHeight*.4;a.position.x=Math.cos(l)*c,a.position.y=h,a.position.z=Math.sin(l)*c,this.group.add(a)}}addCrystalEdges(t){const i=new Sn(t),s=new pn({color:16777215,linewidth:1,transparent:!0,opacity:.2}),r=new wn(i,s);this.group.add(r)}setCapRemoved(t){this.capMesh&&(this.capMesh.visible=!t)}}class mT{constructor(e){Je(this,"scene");Je(this,"camera");Je(this,"renderer");Je(this,"controls");Je(this,"animationId",0);Je(this,"gridHelper",null);Je(this,"lights");Je(this,"isAutoRotating",!1);Je(this,"autoRotateSpeed",.5);Je(this,"currentGeometry",null);Je(this,"templateHistory",[]);Je(this,"textureMemory",new Map);this.scene=new Pb,this.setupGradientBackground(),this.camera=new vn(45,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(8,8,8),this.renderer=new Rb({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vf,this.renderer.toneMapping=Xf,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=Zt,this.controls=new XE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=50,this.controls.maxPolarAngle=Math.PI,this.controls.minPolarAngle=0,this.lights={ambient:new yw(16777215,.4),keyLight:new _d(16777215,.8),fillLight:new _d(16777215,.3)},this.setLightingPreset("studio"),this.addGridHelper(),window.addEventListener("resize",this.handleResize.bind(this))}setupGradientBackground(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(t){const i=t.createLinearGradient(0,0,0,e.height);i.addColorStop(0,"#1a1a2e"),i.addColorStop(1,"#16213e"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height);const s=new Ib(e);this.scene.background=s}}setupLights(e="studio"){switch(this.lights.ambient.parent&&this.scene.remove(this.lights.ambient),this.lights.keyLight.parent&&this.scene.remove(this.lights.keyLight),this.lights.fillLight.parent&&this.scene.remove(this.lights.fillLight),e){case"studio":this.lights.ambient.intensity=.4,this.lights.ambient.color.set(16777215),this.lights.keyLight.intensity=.8,this.lights.keyLight.position.set(10,20,15),this.lights.keyLight.color.set(16777215),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.3,this.lights.fillLight.position.set(-10,10,-10),this.lights.fillLight.color.set(16777215);break;case"outdoor":this.lights.ambient.intensity=.6,this.lights.ambient.color.set(8900331),this.lights.keyLight.intensity=1,this.lights.keyLight.position.set(50,100,50),this.lights.keyLight.color.set(16771899),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.4,this.lights.fillLight.position.set(-30,20,-30),this.lights.fillLight.color.set(5227511);break;case"dramatic":this.lights.ambient.intensity=.2,this.lights.ambient.color.set(1710618),this.lights.keyLight.intensity=1.2,this.lights.keyLight.position.set(15,25,-10),this.lights.keyLight.color.set(16739179),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.1,this.lights.fillLight.position.set(-5,5,15),this.lights.fillLight.color.set(7039999);break}this.lights.keyLight.shadow.mapSize.width=2048,this.lights.keyLight.shadow.mapSize.height=2048,this.lights.keyLight.shadow.camera.near=.5,this.lights.keyLight.shadow.camera.far=100,this.lights.keyLight.shadow.camera.left=-30,this.lights.keyLight.shadow.camera.right=30,this.lights.keyLight.shadow.camera.top=30,this.lights.keyLight.shadow.camera.bottom=-30,this.lights.keyLight.shadow.bias=-1e-4,this.scene.add(this.lights.ambient),this.scene.add(this.lights.keyLight),this.scene.add(this.lights.fillLight)}addGridHelper(){this.gridHelper=new Mw(20,20,4473924,2236962),this.gridHelper.position.y=-.01,this.scene.add(this.gridHelper)}handleResize(){const e=this.renderer.domElement,t=e.clientWidth,i=e.clientHeight;(t!==e.width||i!==e.height)&&(this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i,!1))}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.controls}startAnimation(){const e=()=>{this.animationId=requestAnimationFrame(e),this.isAutoRotating?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.autoRotateSpeed):this.controls.autoRotate=!1,this.controls.update(),this.renderer.render(this.scene,this.camera)};e()}stopAnimation(){this.animationId&&cancelAnimationFrame(this.animationId)}setLightingPreset(e){this.setupLights(e)}setCameraPreset(e,t=1e3){const i=new B,s=new B(0,0,0);switch(e){case"front":i.set(0,0,15);break;case"back":i.set(0,0,-15);break;case"top":i.set(0,15,0);break;case"isometric":i.set(10,10,10);break;case"reset":i.set(8,8,8);break}const r=this.camera.position.clone(),o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(l/t,1),h=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.camera.position.lerpVectors(r,i,h),this.camera.lookAt(s),this.controls.target.copy(s),this.controls.update(),c<1&&requestAnimationFrame(a)};a()}toggleGridHelper(e){this.gridHelper&&(this.gridHelper.visible=e)}setAutoRotate(e,t=.5){this.isAutoRotating=e,this.autoRotateSpeed=t}async loadHDRIEnvironment(e){return new Promise((t,i)=>{new sT().load(e,r=>{r.mapping=ra,this.scene.environment=r,this.scene.background=r,t()},void 0,r=>{console.error("Failed to load HDRI:",r),i(r)})})}getFPS(){return this.renderer.info.render.frame/1e3}async loadTemplate(e){const t=this.camera.position.clone(),i=this.controls.target.clone();this.currentGeometry&&(this.currentGeometry.dispose(),this.currentGeometry=null);let s;switch(e.category){case"box":s=new rT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,color:e.defaultMaterial.color});break;case"bottle":s=new oT({height:e.geometry.dimensions.height,radius:e.geometry.dimensions.radius||.5,neckHeight:e.geometry.dimensions.height*.2,neckRadius:(e.geometry.dimensions.radius||.5)*.4,capHeight:e.geometry.dimensions.height*.1,capRadius:(e.geometry.dimensions.radius||.5)*.45,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"pouch":s=new aT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,curveHeight:e.geometry.dimensions.height*.1,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"tube":s=new lT({height:e.geometry.dimensions.height,radius:e.geometry.dimensions.radius||.5,thickness:e.geometry.dimensions.depth,capHeight:e.geometry.dimensions.height*.1,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"bag":s=new cT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,handleRadius:.1,handleHeight:e.geometry.dimensions.height*.3,color:e.defaultMaterial.color});break;case"cup":s=new hT({radiusTop:e.geometry.dimensions.radiusTop||1.2,radiusBottom:e.geometry.dimensions.radiusBottom||.9,height:e.geometry.dimensions.height,radialSegments:e.geometry.dimensions.radialSegments||32,heightSegments:e.geometry.dimensions.heightSegments||8,openTop:!0,color:e.defaultMaterial.color});break;case"container":s=new uT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,lidThickness:e.geometry.dimensions.lidThickness||e.geometry.dimensions.height*.1,color:e.defaultMaterial.color});break;case"bowl":s=new dT({radiusTop:e.geometry.dimensions.radiusTop||1.2,radiusBottom:e.geometry.dimensions.radiusBottom||.6,height:e.geometry.dimensions.height,thickness:e.geometry.dimensions.thickness||e.geometry.dimensions.height*.05,segments:e.geometry.dimensions.segments||32,withLid:!1,color:e.defaultMaterial.color});break;case"takeaway":s=new fT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,lidThickness:e.geometry.dimensions.lidThickness||e.geometry.dimensions.height*.1,hingeAngle:e.geometry.dimensions.hingeAngle||15*(Math.PI/180),color:e.defaultMaterial.color});break;case"perfume":s=new pT({baseRadius:e.geometry.dimensions.baseRadius||.8,neckRadius:e.geometry.dimensions.neckRadius||.3,bodyRadius:e.geometry.dimensions.bodyRadius||1,totalHeight:e.geometry.dimensions.height,neckHeight:e.geometry.dimensions.neckHeight||e.geometry.dimensions.height*.18,segments:e.geometry.dimensions.segments||32,color:e.defaultMaterial.color});break;default:throw new Error(`Unsupported template category: ${e.category}`)}s.setMaterial(e.defaultMaterial.type),this.scene.add(s.getMesh()),this.currentGeometry=s,await this.restoreTextures(e.id),this.animateCameraToPosition(t,i,500),this.templateHistory.push(e.id),this.templateHistory.length>10&&this.templateHistory.shift()}async restoreTextures(e){if(!this.currentGeometry)return;const t=this.textureMemory.get(e);if(!t)return;const i=[];t.forEach((s,r)=>{i.push(this.currentGeometry.applyTexture(r,s))}),await Promise.all(i)}animateCameraToPosition(e,t,i=1e3){const s=this.camera.position.clone(),r=this.controls.target.clone(),o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(l/i,1),h=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.camera.position.lerpVectors(s,e,h),this.controls.target.lerpVectors(r,t,h),this.controls.update(),c<1&&requestAnimationFrame(a)};a()}async applyTextureToFace(e,t){if(!this.currentGeometry)throw new Error("No template loaded");await this.currentGeometry.applyTexture(e,t);const i=this.templateHistory[this.templateHistory.length-1];if(i){let s=this.textureMemory.get(i);s||(s=new Map,this.textureMemory.set(i,s)),s.set(e,t)}}clearTextureFromFace(e){if(!this.currentGeometry)return;this.currentGeometry.clearTexture(e);const t=this.templateHistory[this.templateHistory.length-1];if(t){const i=this.textureMemory.get(t);i&&i.delete(e)}}setMaterialType(e){this.currentGeometry&&this.currentGeometry.setMaterial(e)}getCurrentGeometry(){return this.currentGeometry}getTextureableFaces(){return this.currentGeometry?this.currentGeometry.getTextureableFaces().map(e=>({id:e.id,name:e.name})):[]}dispose(){this.stopAnimation(),this.controls.dispose(),this.renderer.dispose(),this.currentGeometry&&this.currentGeometry.dispose(),this.lights.ambient.dispose(),this.lights.keyLight.dispose(),this.lights.fillLight.dispose(),this.gridHelper&&(this.gridHelper.geometry.dispose(),this.gridHelper.material.dispose()),this.textureMemory.clear(),window.removeEventListener("resize",this.handleResize.bind(this))}}class gT{constructor(e=2.5,t=3.5,i=2){Je(this,"mesh");Je(this,"materials");Je(this,"textureLoader");Je(this,"edgesMesh",null);Je(this,"geometry");Je(this,"defaultMaterials");Je(this,"_currentMaterialType","matte");Je(this,"renderer",null);this.textureLoader=new Dp,this.geometry=new Ct(e,t,i),this.materials=new Map,this.defaultMaterials=new Map;const s=16777215;["right","left","top","bottom","front","back"].forEach(a=>{const l=this.createMaterial("matte",s);l.name=a,this.materials.set(a,l);const c=this.createMaterial("matte",s);c.name=`${a}_default`,this.defaultMaterials.set(a,c)});const o=Array.from(this.materials.values());this.mesh=new we(this.geometry,o),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.createEdgesOverlay()}createMaterial(e,t=16777215){const i=new bn({color:t});switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}return i}createEdgesOverlay(){const e=new Sn(this.geometry),t=new pn({color:0,linewidth:1,transparent:!0,opacity:.3});this.edgesMesh=new wn(e,t),this.mesh.add(this.edgesMesh)}getMesh(){return this.mesh}async applyTexture(e,t){return new Promise((i,s)=>{this.textureLoader.load(t,r=>{r.colorSpace=Zt,r.anisotropy=this.renderer?this.renderer.capabilities.getMaxAnisotropy():1;const o=this.materials.get(e);o&&(o.map=r,o.needsUpdate=!0),i()},void 0,r=>{console.error(`Failed to load texture for ${e}:`,r),s(r)})})}async applyTextureToAll(e){const t=[];["front","back","left","right","top","bottom"].forEach(s=>{t.push(this.applyTexture(s,e))}),await Promise.all(t)}clearTexture(e){const t=this.materials.get(e);t&&(t.map&&t.map.dispose(),t.map=null,t.needsUpdate=!0)}resetTextures(){["front","back","left","right","top","bottom"].forEach(t=>{const i=this.materials.get(t),s=this.defaultMaterials.get(t);i&&s&&(i.map&&i.map.dispose(),i.color.copy(s.color),i.roughness=s.roughness,i.metalness=s.metalness,i.map=null,i.needsUpdate=!0)})}setColor(e,t){const i=this.materials.get(e);i&&(i.color.set(t),i.needsUpdate=!0)}getMaterialType(){return this._currentMaterialType}setMaterialType(e){this._currentMaterialType=e,["front","back","left","right","top","bottom"].forEach(i=>{const s=this.materials.get(i);if(s){switch(e){case"matte":s.roughness=.8,s.metalness=.2;break;case"glossy":s.roughness=.2,s.metalness=.1;break;case"metallic":s.roughness=.4,s.metalness=.8;break}s.needsUpdate=!0}})}setOpacity(e,t){const i=this.materials.get(e);i&&(i.transparent=t<1,i.opacity=t,i.needsUpdate=!0)}toggleEdgesOverlay(e){this.edgesMesh&&(this.edgesMesh.visible=e)}resize(e,t,i){if(this.geometry.dispose(),this.edgesMesh&&this.edgesMesh.geometry.dispose(),this.geometry=new Ct(e,t,i),this.mesh.geometry=this.geometry,this.edgesMesh){const s=new Sn(this.geometry);this.edgesMesh.geometry=s}}dispose(){this.materials.forEach(e=>{e.map&&e.map.dispose(),e.dispose()}),this.defaultMaterials.forEach(e=>{e.dispose()}),this.geometry.dispose(),this.edgesMesh&&(this.edgesMesh.geometry.dispose(),this.edgesMesh.material.dispose())}}const _T={class:"relative w-full h-full"},vT={key:0,class:"absolute inset-0 flex items-center justify-center bg-black/50"},xT={key:1,class:"absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono"},yT={key:2,class:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg"},MT=Nn({__name:"MockupCanvas",props:{lightingPreset:{},cameraPreset:{},showGrid:{type:Boolean},autoRotate:{type:Boolean}},emits:["loaded","error"],setup(n,{expose:e,emit:t}){const i=Oe(null),s=Oe(!0),r=Oe(!1),o=Oe(!1),a=Oe(0);let l=null,c=null,h=0,u=0,f=null;const d=n,g=t;Ma(()=>{if(i.value)try{l=new mT(i.value),c=new gT,l.getScene().add(c.getMesh()),d.lightingPreset&&l.setLightingPreset(d.lightingPreset),d.cameraPreset&&l.setCameraPreset(d.cameraPreset),d.showGrid!==void 0&&l.toggleGridHelper(d.showGrid),d.autoRotate!==void 0&&l.setAutoRotate(d.autoRotate),l.startAnimation(),x(),s.value=!1,g("loaded")}catch(m){console.error("Failed to initialize 3D scene:",m),s.value=!1,g("error",m)}}),Xn(()=>d.lightingPreset,m=>{l&&m&&l.setLightingPreset(m)}),Xn(()=>d.cameraPreset,m=>{l&&m&&l.setCameraPreset(m)}),Xn(()=>d.showGrid,m=>{l&&m!==void 0&&l.toggleGridHelper(m)}),Xn(()=>d.autoRotate,m=>{l&&m!==void 0&&l.setAutoRotate(m)});const x=()=>{u=performance.now();const m=()=>{h++;const p=performance.now(),E=p-u;E>=1e3&&(a.value=h*1e3/E,h=0,u=p),o.value&&(f=requestAnimationFrame(m))};o.value&&(f=requestAnimationFrame(m))};return ar(()=>{f&&cancelAnimationFrame(f),c&&c.dispose(),l&&l.dispose()}),e({applyTexture:async(m,p)=>{if(c){r.value=!0;try{await c.applyTexture(m,p)}finally{r.value=!1}}else return Promise.reject("Box mockup not initialized")},applyTextureToAll:async m=>{if(c){r.value=!0;try{await c.applyTextureToAll(m)}finally{r.value=!1}}else return Promise.reject("Box mockup not initialized")},clearTexture:m=>{c&&c.clearTexture(m)},resetTextures:()=>{c&&c.resetTextures()},setColor:(m,p)=>{c&&c.setColor(m,p)},setMaterialType:m=>{c&&c.setMaterialType(m)},setOpacity:(m,p)=>{c&&c.setOpacity(m,p)},toggleEdgesOverlay:m=>{c&&c.toggleEdgesOverlay(m)},resize:(m,p,E)=>{c&&c.resize(m,p,E)},setLightingPreset:m=>{l&&l.setLightingPreset(m)},setCameraPreset:(m,p)=>{l&&l.setCameraPreset(m,p)},toggleGridHelper:m=>{l&&l.toggleGridHelper(m)},setAutoRotate:(m,p)=>{l&&l.setAutoRotate(m,p)},loadHDRIEnvironment:async m=>l?l.loadHDRIEnvironment(m):Promise.reject("Scene manager not initialized"),getFPS:()=>l?l.getFPS():0,toggleFPS:m=>{o.value=m,m&&!f?x():!m&&f&&(cancelAnimationFrame(f),f=null)},getSceneManager:()=>l}),(m,p)=>(Me(),be("div",_T,[A("canvas",{ref_key:"canvasRef",ref:i,class:"w-full h-full"},null,512),s.value?(Me(),be("div",vT,[...p[0]||(p[0]=[A("div",{class:"flex flex-col items-center gap-4"},[A("div",{class:"w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"}),A("div",{class:"text-white text-lg font-medium"},"Loading 3D scene...")],-1)])])):Lt("",!0),!s.value&&o.value?(Me(),be("div",xT," FPS: "+Ge(Math.round(a.value)),1)):Lt("",!0),r.value?(Me(),be("div",yT,[...p[1]||(p[1]=[A("div",{class:"flex items-center gap-2"},[A("div",{class:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),A("span",null,"Loading texture...")],-1)])])):Lt("",!0)]))}}),ST=Zn(MT,[["__scopeId","data-v-bd18c278"]]),bT=E0("mockup",()=>{const n=Oe({width:2,height:3,depth:1.5}),e=Oe(new Map),t=Oe(new Map),i=Oe(new Map),s=Oe("front"),r=Oe(null),o=Oe(new Map),a={front:"#ffffff",back:"#ffffff",left:"#ffffff",right:"#ffffff",top:"#ffffff",bottom:"#ffffff"};return Object.entries(a).forEach(([I,L])=>{t.value.set(I,L),i.value.set(I,1)}),{dimensions:n,textures:e,colors:t,opacity:i,selectedFace:s,activeTemplate:r,templateTextures:o,setDimensions:(I,L,U)=>{n.value={width:I,height:L,depth:U}},setTexture:(I,L)=>{if(e.value.set(I,L),r.value){let U=o.value.get(r.value.id);U||(U=new Map,o.value.set(r.value.id,U)),U.set(I,L)}},removeTexture:I=>{if(e.value.delete(I),r.value){const L=o.value.get(r.value.id);L&&L.delete(I)}},setColor:(I,L)=>{t.value.set(I,L)},setOpacity:(I,L)=>{i.value.set(I,L)},setSelectedFace:I=>{s.value=I},switchTemplate:I=>{if(r.value){const U=new Map(e.value);o.value.set(r.value.id,U)}r.value=I;const L=o.value.get(I.id);L?e.value=new Map(L):e.value.clear(),s.value=I.faces.length>0?I.faces[0].id:null,n.value={width:I.geometry.dimensions.width,height:I.geometry.dimensions.height,depth:I.geometry.dimensions.depth},t.value.clear(),i.value.clear(),I.faces.forEach(U=>{t.value.set(U.id,I.defaultMaterial.color),i.value.set(U.id,1)})},getTexture:I=>e.value.get(I),getColor:I=>t.value.get(I)||"#ffffff",getOpacity:I=>i.value.get(I)||1,getActiveTemplate:()=>r.value,getTemplateTextures:I=>o.value.get(I),reset:()=>{n.value={width:2,height:3,depth:1.5},e.value.clear(),t.value.clear(),i.value.clear(),s.value="front",r.value=null,Object.entries(a).forEach(([I,L])=>{t.value.set(I,L),i.value.set(I,1)})}}});function wT(n={}){const{maxCacheSize:e=50,autoCleanup:t=!0}=n,i=Oe({front:null,back:null,left:null,right:null,top:null,bottom:null}),s=Oe("front"),r=Oe("cover"),o=Oe(0),a=Oe(new Set),l=un(()=>Object.entries(i.value).filter(([D,F])=>F!==null).map(([D])=>D)),c=un(()=>l.value.length),h=un(()=>c.value>0),u=un(()=>(o.value/(1024*1024)).toFixed(2)),f=(D,F,V="cover")=>new Promise(z=>{g(D);const K=URL.createObjectURL(F);a.value.add(K);const Y={url:K,name:F.name,file:F,fit:V,objectUrl:K},ce=new Image;ce.onload=()=>{Y.dimensions={width:ce.width,height:ce.height},o.value+=F.size,i.value[D]=Y,t&&o.value>e*1024*1024&&P(),z(Y)},ce.onerror=()=>{i.value[D]=Y,o.value+=F.size,z(Y)},ce.src=K}),d=(D,F,V="Texture",z="cover")=>{g(D);const K={url:F,name:V,fit:z};return i.value[D]=K,K},g=D=>{const F=i.value[D];F&&(F.objectUrl&&(URL.revokeObjectURL(F.objectUrl),a.value.delete(F.objectUrl),F.file&&(o.value-=F.file.size)),i.value[D]=null)},x=()=>{Object.keys(i.value).forEach(D=>{g(D)})},m=(D,F)=>{const V=i.value[D];if(!V)return!1;g(F);const z={...V,name:`${V.name} (copy)`};return i.value[F]=z,!0},p=D=>{i.value[D]&&Object.keys(i.value).forEach(V=>{V!==D&&m(D,V)})},E=(D,F="cover")=>{const V=Object.keys(i.value).map(z=>f(z,D,F));return Promise.all(V).then(()=>{})},w=(D,F)=>{const V=i.value[D];V&&(V.fit=F)},M=D=>{Object.values(i.value).forEach(F=>{F&&(F.fit=D)}),r.value=D},I=D=>i.value[D]||null,L=D=>{var F;return((F=i.value[D])==null?void 0:F.url)||null},U=D=>i.value[D]!==null,C=D=>{s.value=D},v=()=>{const D={};return Object.entries(i.value).forEach(([F,V])=>{V&&(D[F]={name:V.name,fit:V.fit,dimensions:V.dimensions,hasFile:!!V.file})}),D},_=(D,F)=>{x(),Object.entries(D).forEach(([V,z])=>{if(z&&z.name){const K={url:z.url||"",name:z.name,fit:z.fit||"cover",dimensions:z.dimensions};F&&F[z.name]&&(K.file=F[z.name],K.objectUrl=URL.createObjectURL(F[z.name]),a.value.add(K.objectUrl)),i.value[V]=K}})},P=()=>{const D=Object.entries(i.value).filter(([F,V])=>V!==null).sort(()=>0);for(;o.value>e*1024*1024&&D.length>0;){const[F,V]=D.shift();g(F)}},O=()=>{x(),s.value="front",r.value="cover",o.value=0,a.value.clear()};return ar(()=>{x()}),{textures:i,selectedFace:s,textureFit:r,cacheSize:o,texturedFaces:l,texturedFacesCount:c,hasTextures:h,cacheSizeMB:u,setTexture:f,setTextureFromUrl:d,removeTexture:g,clearAllTextures:x,copyTexture:m,copyToAllFaces:p,applyToAllFaces:E,setTextureFit:w,setAllTextureFits:M,getTexture:I,getTextureUrl:L,hasTexture:U,selectFace:C,exportTextureMapping:v,importTextureMapping:_,cleanupCache:P,reset:O}}const ET={class:"editor-main"},TT={class:"canvas-area"},AT={class:"canvas-container"},CT={class:"status-bar"},RT={class:"status-left"},PT={class:"status-item"},LT={class:"status-value"},DT={class:"status-item"},IT={class:"status-value"},UT={class:"status-item"},NT={class:"status-value"},FT={class:"status-right"},OT={class:"status-item"},kT={class:"status-value"},BT={class:"status-item"},zT={class:"status-value"},HT=Nn({__name:"EditorView",setup(n){const e=bT(),t=wT(),i=Oe(null),s=Oe(!0),r=Oe(100),o=Oe(60),a=Oe(0),l=Oe("studio"),c=Oe("isometric"),h=Oe("matte"),u=Oe(!0),f=Oe(!1),d=["front","back","left","right","top","bottom"],g=Oe("front"),x=Oe({width:2.5,height:3.5,depth:2}),m=Oe(null),p=Oe(null),E=Oe("box-mockup"),w=un(()=>d.filter(y=>e.getTexture(y)!==void 0).length),M=un(()=>{const y={front:null,back:null,left:null,right:null,top:null,bottom:null};return d.forEach(G=>{const H=e.getTexture(G);y[G]=(H==null?void 0:H.url)||null}),y}),I=()=>{r.value=Math.min(r.value+10,200),i.value&&i.value.zoomIn()},L=()=>{r.value=Math.max(r.value-10,25),i.value&&i.value.zoomOut()},U=()=>{r.value=100,i.value&&i.value.fitToScreen()},C=y=>{c.value=y,i.value&&i.value.setCameraPreset(y,800)},v=()=>{f.value=!f.value,i.value&&i.value.setAutoRotate(f.value,.5)},_=()=>{u.value=!u.value,i.value&&i.value.toggleGridHelper(u.value)},P=()=>{s.value=!s.value,localStorage.setItem("editor-theme",s.value?"dark":"light")},O=()=>{C("reset")},D=()=>{i.value&&i.value.resize(x.value.width,x.value.height,x.value.depth)},F=y=>{h.value=y,i.value&&i.value.setMaterialType(y)},V=y=>{l.value=y,i.value&&i.value.setLightingPreset(y)},z=y=>{g.value=y,e.setSelectedFace(y)},K=y=>{m.value=y,console.log("Template selected:",y)},Y=y=>{console.log("Design uploaded:",y.name)},ce=async y=>{const{face:G,file:H,fit:$}=y;try{const Z=await t.setTexture(G,H,$);i.value&&await i.value.applyTexture(G,Z.url),e.setTexture(G,{url:Z.url,name:H.name}),console.log(`Texture applied to ${G} face`)}catch(Z){console.error("Failed to apply texture:",Z),alert("Failed to apply texture. Please try another image.")}},pe=async y=>{const{file:G,fit:H}=y;try{await t.applyToAllFaces(G,H),i.value&&await i.value.applyTextureToAll(t.getTextureUrl("front")),d.forEach($=>{e.setTexture($,{url:t.getTextureUrl($),name:G.name})}),console.log("Texture applied to all faces")}catch($){console.error("Failed to apply texture to all faces:",$),alert("Failed to apply texture. Please try another image.")}},xe=()=>{console.log("Upload cleared")},Re=y=>{t.removeTexture(y),i.value&&i.value.clearTexture(y),e.removeTexture(y),console.log(`Texture removed from ${y} face`)},We=y=>{const G=t.getTexture(y);G&&(t.copyToAllFaces(y),d.forEach(H=>{if(H!==y){const $=t.getTextureUrl(H);$&&i.value&&(i.value.applyTexture(H,$),e.setTexture(H,{url:$,name:`${G.name} (copy)`}))}}),console.log(`Texture copied from ${y} to all other faces`))},oe=()=>{t.clearAllTextures(),i.value&&i.value.resetTextures(),d.forEach(y=>{e.removeTexture(y)}),console.log("All textures reset")},ue=(y,G)=>{console.log("Export successful:",G,"size:",y.size)},Ce=(y,G)=>{console.log("Batch export successful:",G.length,"files")},de=y=>{console.error("Export error:",y),alert(`Export failed: ${y.message}`)},Le=()=>{console.log("Canvas loaded successfully"),i.value&&(p.value=i.value.getSceneManager()),et()},ze=y=>{console.error("Canvas error:",y),alert("Failed to initialize 3D canvas. Please refresh the page.")};let Pe=null;const et=()=>{Pe&&clearInterval(Pe),Pe=window.setInterval(()=>{o.value=50+Math.random()*20,a.value=Math.round(100+Math.random()*50)},1e3)},T=()=>{Pe&&(clearInterval(Pe),Pe=null)},N=y=>{if(!(y.target instanceof HTMLInputElement||y.target instanceof HTMLTextAreaElement))switch(y.key.toLowerCase()){case" ":y.preventDefault(),O();break;case"r":y.preventDefault(),v();break;case"g":y.preventDefault(),_();break;case"1":y.preventDefault(),C("front");break;case"2":y.preventDefault(),C("back");break;case"3":y.preventDefault(),C("top");break;case"4":y.preventDefault(),C("isometric");break;case"+":case"=":(y.ctrlKey||y.metaKey)&&(y.preventDefault(),I());break;case"-":(y.ctrlKey||y.metaKey)&&(y.preventDefault(),L());break;case"0":(y.ctrlKey||y.metaKey)&&(y.preventDefault(),U());break}};return Ma(()=>{const y=localStorage.getItem("editor-theme");y&&(s.value=y==="dark"),i.value&&(i.value.setMaterialType("matte"),i.value.toggleGridHelper(!0)),d.forEach(G=>{e.setColor(G,"#ffffff")}),e.setSelectedFace("front"),window.addEventListener("keydown",N)}),ar(()=>{T(),window.removeEventListener("keydown",N)}),(y,G)=>(Me(),be("div",{class:mt(["editor-container",{"dark-theme":s.value}])},[tt(k0,{zoom:r.value,"view-preset":c.value,"auto-rotate":f.value,"show-grid":u.value,"is-dark":s.value,onZoomIn:I,onZoomOut:L,onZoomFit:U,onViewPreset:C,onToggleAutoRotate:v,onToggleGrid:_,onToggleTheme:P},null,8,["zoom","view-preset","auto-rotate","show-grid","is-dark"]),A("div",ET,[tt(o_,{"selected-template":m.value,onSelectTemplate:K},null,8,["selected-template"]),A("div",TT,[A("div",AT,[tt(ST,{ref_key:"canvasRef",ref:i,"lighting-preset":l.value,"camera-preset":c.value,"show-grid":u.value,"auto-rotate":f.value,class:"w-full h-full",onLoaded:Le,onError:ze},null,8,["lighting-preset","camera-preset","show-grid","auto-rotate"])]),A("div",{class:"canvas-controls"},[A("button",{class:"control-btn",onClick:O,title:"Reset Camera (Space)"},[...G[0]||(G[0]=[zn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c3770810><path d="M10 4V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><path d="M10 14V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><path d="M4 10H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><path d="M14 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5" data-v-c3770810></circle></svg>',1)])]),G[1]||(G[1]=A("div",{class:"canvas-info"},[A("span",{class:"info-text"},"Drag: Rotate • Scroll: Zoom • Right-click: Pan")],-1))])]),tt(VE,{"selected-face":g.value,"texture-urls":M.value,"current-material-type":h.value,"current-lighting-preset":l.value,dimensions:x.value,"scene-manager":p.value,"current-template-name":E.value,onSelectFace:z,onSetMaterialType:F,onSetLightingPreset:V,onUpdateDimensions:D,onDesignUpload:Y,onApplyToFace:ce,onApplyToAll:pe,onClearUpload:xe,onRemoveTexture:Re,onCopyToOthers:We,onResetAllTextures:oe,onExport:ue,onBatchExport:Ce,onExportError:de},null,8,["selected-face","texture-urls","current-material-type","current-lighting-preset","dimensions","scene-manager","current-template-name"])]),A("div",CT,[A("div",RT,[A("span",PT,[G[2]||(G[2]=A("span",{class:"status-label"},"Selected:",-1)),A("span",LT,Ge(g.value?g.value.charAt(0).toUpperCase()+g.value.slice(1):"None"),1)]),A("span",DT,[G[3]||(G[3]=A("span",{class:"status-label"},"Textured:",-1)),A("span",IT,Ge(w.value)+" / 6 faces",1)]),A("span",UT,[G[4]||(G[4]=A("span",{class:"status-label"},"Material:",-1)),A("span",NT,Ge(h.value),1)])]),A("div",FT,[A("span",OT,[G[5]||(G[5]=A("span",{class:"status-label"},"FPS:",-1)),A("span",kT,Ge(o.value.toFixed(1)),1)]),A("span",BT,[G[6]||(G[6]=A("span",{class:"status-label"},"Memory:",-1)),A("span",zT,Ge(a.value)+" MB",1)])])])],2))}}),GT=Zn(HT,[["__scopeId","data-v-c3770810"]]),VT={class:"min-h-screen bg-gray-50"},WT={class:"max-w-7xl mx-auto px-4 py-8"},XT=Nn({__name:"App",setup(n){return(e,t)=>(Me(),be("div",VT,[t[0]||(t[0]=A("header",{class:"bg-white shadow"},[A("div",{class:"max-w-7xl mx-auto px-4 py-6"},[A("h1",{class:"text-3xl font-bold text-gray-900"},"Bungkus Indonesia"),A("p",{class:"text-gray-600"},"Create professional packaging mockups in 3D")])],-1)),A("main",WT,[tt(GT)]),t[1]||(t[1]=A("footer",{class:"bg-white border-t mt-8"},[A("div",{class:"max-w-7xl mx-auto px-4 py-6 text-center text-gray-500"},[A("p",null,"© 2024 Bungkus Indonesia. All rights reserved.")])],-1))]))}}),Np=g0(XT);Np.use(x0());Np.mount("#app");
