var zp=Object.defineProperty;var Hp=(n,e,t)=>e in n?zp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var rt=(n,e,t)=>Hp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},qs=[],Yn=()=>{},wd=()=>!1,da=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ic=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Uc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gp=Object.prototype.hasOwnProperty,ct=(n,e)=>Gp.call(n,e),ze=Array.isArray,Ys=n=>Qr(n)==="[object Map]",Sd=n=>Qr(n)==="[object Set]",xu=n=>Qr(n)==="[object Date]",qe=n=>typeof n=="function",Rt=n=>typeof n=="string",Fn=n=>typeof n=="symbol",ut=n=>n!==null&&typeof n=="object",Ed=n=>(ut(n)||qe(n))&&qe(n.then)&&qe(n.catch),Td=Object.prototype.toString,Qr=n=>Td.call(n),Vp=n=>Qr(n).slice(8,-1),Ad=n=>Qr(n)==="[object Object]",fa=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cr=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wp=/-\w/g,Dn=pa(n=>n.replace(Wp,e=>e.slice(1).toUpperCase())),$p=/\B([A-Z])/g,Ms=pa(n=>n.replace($p,"-$1").toLowerCase()),Cd=pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fa=pa(n=>n?`on${Cd(n)}`:""),jn=(n,e)=>!Object.is(n,e),Go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Fc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Xp=n=>{const e=Rt(n)?Number(n):NaN;return isNaN(e)?n:e};let yu;const ma=()=>yu||(yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ga(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?Kp(i):ga(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||ut(n))return n}const jp=/;(?![^(]*\))/g,qp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function Kp(n){const e={};return n.replace(Yp,"").split(jp).forEach(t=>{if(t){const i=t.split(qp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ot(n){let e="";if(Rt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=ot(n[t]);i&&(e+=i+" ")}else if(ut(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jp=Dc(Zp);function Pd(n){return!!n||n===""}function Qp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Nc(n[i],e[i]);return t}function Nc(n,e){if(n===e)return!0;let t=xu(n),i=xu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Fn(n),i=Fn(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?Qp(n,e):!1;if(t=ut(n),i=ut(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Nc(n[o],e[o]))return!1}}return String(n)===String(e)}const Ld=n=>!!(n&&n.__v_isRef===!0),be=n=>Rt(n)?n:n==null?"":ze(n)||ut(n)&&(n.toString===Td||!qe(n.toString))?Ld(n)?be(n.value):JSON.stringify(n,Dd,2):String(n),Dd=(n,e)=>Ld(e)?Dd(n,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Na(i,r)+" =>"]=s,t),{})}:Sd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Na(t))}:Fn(e)?Na(e):ut(e)&&!ze(e)&&!Ad(e)?String(e):e,Na=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Id{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ud(n){return new Id(n)}function Fd(){return $t}function em(n,e=!1){$t&&$t.cleanups.push(n)}let _t;const Oa=new WeakSet;class Nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mu(this),Bd(this);const e=_t,t=In;_t=this,In=!0;try{return this.fn()}finally{zd(this),_t=e,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bc(e);this.deps=this.depsTail=void 0,Mu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pl(this)&&this.run()}get dirty(){return Pl(this)}}let Od=0,Rr,Pr;function kd(n,e=!1){if(n.flags|=8,e){n.next=Pr,Pr=n;return}n.next=Rr,Rr=n}function Oc(){Od++}function kc(){if(--Od>0)return;if(Pr){let e=Pr;for(Pr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rr;){let e=Rr;for(Rr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Bd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bc(i),tm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Pl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Hd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===zr)||(n.globalVersion=zr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pl(n))))return;n.flags|=2;const e=n.dep,t=_t,i=In;_t=n,In=!0;try{Bd(n);const s=n.fn(n._value);(e.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{_t=t,In=i,zd(n),n.flags&=-3}}function Bc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let In=!0;const Gd=[];function wi(){Gd.push(In),In=!1}function Si(){const n=Gd.pop();In=n===void 0?!0:n}function Mu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let zr=0;class nm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!In||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new nm(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,Vd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=i)}return t}trigger(e){this.version++,zr++,this.notify(e)}notify(e){Oc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{kc()}}}function Vd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Vd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Jo=new WeakMap,ms=Symbol(""),Ll=Symbol(""),Hr=Symbol("");function Xt(n,e,t){if(In&&_t){let i=Jo.get(n);i||Jo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new zc),s.map=i,s.key=t),s.track()}}function mi(n,e,t,i,s,r){const o=Jo.get(n);if(!o){zr++;return}const a=l=>{l&&l.trigger()};if(Oc(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&fa(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Hr||!Fn(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Hr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ms)),Ys(n)&&a(o.get(Ll)));break;case"delete":l||(a(o.get(ms)),Ys(n)&&a(o.get(Ll)));break;case"set":Ys(n)&&a(o.get(ms));break}}kc()}function im(n,e){const t=Jo.get(n);return t&&t.get(e)}function Es(n){const e=nt(n);return e===n?e:(Xt(e,"iterate",Hr),mn(n)?e:e.map(Nn))}function va(n){return Xt(n=nt(n),"iterate",Hr),n}function Wn(n,e){return Ei(n)?nr(Mi(n)?Nn(e):e):Nn(e)}const sm={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,n=>Wn(this,n))},concat(...n){return Es(this).concat(...n.map(e=>ze(e)?Es(e):e))},entries(){return ka(this,"entries",n=>(n[1]=Wn(this,n[1]),n))},every(n,e){return si(this,"every",n,e,void 0,arguments)},filter(n,e){return si(this,"filter",n,e,t=>t.map(i=>Wn(this,i)),arguments)},find(n,e){return si(this,"find",n,e,t=>Wn(this,t),arguments)},findIndex(n,e){return si(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return si(this,"findLast",n,e,t=>Wn(this,t),arguments)},findLastIndex(n,e){return si(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return si(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ba(this,"includes",n)},indexOf(...n){return Ba(this,"indexOf",n)},join(n){return Es(this).join(n)},lastIndexOf(...n){return Ba(this,"lastIndexOf",n)},map(n,e){return si(this,"map",n,e,void 0,arguments)},pop(){return mr(this,"pop")},push(...n){return mr(this,"push",n)},reduce(n,...e){return bu(this,"reduce",n,e)},reduceRight(n,...e){return bu(this,"reduceRight",n,e)},shift(){return mr(this,"shift")},some(n,e){return si(this,"some",n,e,void 0,arguments)},splice(...n){return mr(this,"splice",n)},toReversed(){return Es(this).toReversed()},toSorted(n){return Es(this).toSorted(n)},toSpliced(...n){return Es(this).toSpliced(...n)},unshift(...n){return mr(this,"unshift",n)},values(){return ka(this,"values",n=>Wn(this,n))}};function ka(n,e,t){const i=va(n),s=i[e]();return i!==n&&!mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const rm=Array.prototype;function si(n,e,t,i,s,r){const o=va(n),a=o!==n&&!mn(n),l=o[e];if(l!==rm[e]){const h=l.apply(n,r);return a?Nn(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Wn(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function bu(n,e,t,i){const s=va(n),r=s!==n&&!mn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Wn(n,c)),t.call(this,c,Wn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Wn(n,l):l}function Ba(n,e,t){const i=nt(n);Xt(i,"iterate",Hr);const s=i[e](...t);return(s===-1||s===!1)&&_a(t[0])?(t[0]=nt(t[0]),i[e](...t)):s}function mr(n,e,t=[]){wi(),Oc();const i=nt(n)[e].apply(n,t);return kc(),Si(),i}const om=Dc("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function am(n){Fn(n)||(n=String(n));const e=nt(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class $d{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?vm:Yd:r?qd:jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){let l;if(o&&(l=sm[t]))return l;if(t==="hasOwnProperty")return am}const a=Reflect.get(e,t,Ct(e)?e:i);if((Fn(t)?Wd.has(t):om(t))||(s||Xt(e,"get",t),r))return a;if(Ct(a)){const l=o&&fa(t)?a:a.value;return s&&ut(l)?Il(l):l}return ut(a)?s?Il(a):eo(a):a}}class Xd extends $d{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ze(e)&&fa(t);if(!this._isShallow){const c=Ei(r);if(!mn(i)&&!Ei(i)&&(r=nt(r),i=nt(i)),!o&&Ct(r)&&!Ct(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ct(e,t),l=Reflect.set(e,t,i,Ct(e)?e:s);return e===nt(s)&&(a?jn(i,r)&&mi(e,"set",t,i):mi(e,"add",t,i)),l}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!Wd.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",ze(e)?"length":ms),Reflect.ownKeys(e)}}class lm extends $d{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cm=new Xd,um=new lm,hm=new Xd(!0);const Dl=n=>n,ao=n=>Reflect.getPrototypeOf(n);function dm(n,e,t){return function(...i){const s=this.__v_raw,r=nt(s),o=Ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Dl:e?nr:Nn;return!e&&Xt(r,"iterate",l?Ll:ms),Ut(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function lo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fm(n,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);n||(jn(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=ao(o),c=e?Dl:n?nr:Nn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(nt(s),"iterate",ms),s.size},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return n||(jn(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?Dl:n?nr:Nn;return!n&&Xt(l,"iterate",ms),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ut(t,n?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(s){const r=nt(this),o=ao(r),a=nt(s),l=!e&&!mn(s)&&!Ei(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!e&&!mn(r)&&!Ei(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=ao(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?jn(r,u)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=ao(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=dm(s,n,e)}),t}function Hc(n,e){const t=fm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const pm={get:Hc(!1,!1)},mm={get:Hc(!1,!0)},gm={get:Hc(!0,!1)};const jd=new WeakMap,qd=new WeakMap,Yd=new WeakMap,vm=new WeakMap;function _m(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xm(n){return n.__v_skip||!Object.isExtensible(n)?0:_m(Vp(n))}function eo(n){return Ei(n)?n:Gc(n,!1,cm,pm,jd)}function ym(n){return Gc(n,!1,hm,mm,qd)}function Il(n){return Gc(n,!0,um,gm,Yd)}function Gc(n,e,t,i,s){if(!ut(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=xm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Mi(n){return Ei(n)?Mi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ei(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function _a(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Vc(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const Nn=n=>ut(n)?eo(n):n,nr=n=>ut(n)?Il(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function ye(n){return Mm(n,!1)}function Mm(n,e){return Ct(n)?n:new bm(n,e)}class bm{constructor(e,t){this.dep=new zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Nn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||Ei(e);e=i?e:nt(e),jn(e,t)&&(this._rawValue=e,this._value=i?e:Nn(e),this.dep.trigger())}}function Kd(n){return Ct(n)?n.value:n}const wm={get:(n,e,t)=>e==="__v_raw"?n:Kd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Zd(n){return Mi(n)?n:new Proxy(n,wm)}function Sm(n){const e=ze(n)?new Array(n.length):{};for(const t in n)e[t]=Tm(n,t);return e}class Em{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let s=!0,r=e;if(!ze(e)||!fa(String(t)))do s=!_a(r)||mn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Kd(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ct(this._raw[this._key])){const t=this._object[this._key];if(Ct(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return im(this._raw,this._key)}}function Tm(n,e,t){return new Em(n,e,t)}class Am{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return kd(this,!0),!0}get value(){const e=this.dep.track();return Hd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cm(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new Am(i,s,t)}const co={},Qo=new WeakMap;let cs;function Rm(n,e=!1,t=cs){if(t){let i=Qo.get(t);i||Qo.set(t,i=[]),i.push(n)}}function Pm(n,e,t=gt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:mn(M)||s===!1||s===0?gi(M,1):gi(M);let u,h,d,f,m=!1,x=!1;if(Ct(n)?(h=()=>n.value,m=mn(n)):Mi(n)?(h=()=>c(n),m=!0):ze(n)?(x=!0,m=n.some(M=>Mi(M)||mn(M)),h=()=>n.map(M=>{if(Ct(M))return M.value;if(Mi(M))return c(M);if(qe(M))return l?l(M,2):M()})):qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){wi();try{d()}finally{Si()}}const M=cs;cs=u;try{return l?l(n,3,[f]):n(f)}finally{cs=M}}:h=Yn,e&&s){const M=h,I=s===!0?1/0:s;h=()=>gi(M(),I)}const g=Fd(),p=()=>{u.stop(),g&&g.active&&Uc(g.effects,u)};if(r&&e){const M=e;e=(...I)=>{M(...I),p()}}let T=x?new Array(n.length).fill(co):co;const w=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const I=u.run();if(s||m||(x?I.some((L,U)=>jn(L,T[U])):jn(I,T))){d&&d();const L=cs;cs=u;try{const U=[I,T===co?void 0:x&&T[0]===co?[]:T,f];T=I,l?l(e,3,U):e(...U)}finally{cs=L}}}else u.run()};return a&&a(w),u=new Nd(h),u.scheduler=o?()=>o(w,!1):w,f=M=>Rm(M,!1,u),d=u.onStop=()=>{const M=Qo.get(u);if(M){if(l)l(M,4);else for(const I of M)I();Qo.delete(u)}},e?i?w(!0):T=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function gi(n,e=1/0,t){if(e<=0||!ut(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ct(n))gi(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)gi(n[i],e,t);else if(Sd(n)||Ys(n))n.forEach(i=>{gi(i,e,t)});else if(Ad(n)){for(const i in n)gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(n,e,t,i){try{return i?n(...i):n()}catch(s){xa(s,e,t)}}function On(n,e,t,i){if(qe(n)){const s=to(n,e,t,i);return s&&Ed(s)&&s.catch(r=>{xa(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],e,t,i));return s}}function xa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){wi(),to(r,null,10,[n,l,c]),Si();return}}Lm(n,t,s,i,o)}function Lm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Qt=[];let Gn=-1;const Ks=[];let ki=null,Vs=0;const Jd=Promise.resolve();let ea=null;function Qd(n){const e=ea||Jd;return n?e.then(this?n.bind(this):n):e}function Dm(n){let e=Gn+1,t=Qt.length;for(;e<t;){const i=e+t>>>1,s=Qt[i],r=Gr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Wc(n){if(!(n.flags&1)){const e=Gr(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=Gr(t)?Qt.push(n):Qt.splice(Dm(e),0,n),n.flags|=1,ef()}}function ef(){ea||(ea=Jd.then(nf))}function Im(n){ze(n)?Ks.push(...n):ki&&n.id===-1?ki.splice(Vs+1,0,n):n.flags&1||(Ks.push(n),n.flags|=1),ef()}function wu(n,e,t=Gn+1){for(;t<Qt.length;t++){const i=Qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function tf(n){if(Ks.length){const e=[...new Set(Ks)].sort((t,i)=>Gr(t)-Gr(i));if(Ks.length=0,ki){ki.push(...e);return}for(ki=e,Vs=0;Vs<ki.length;Vs++){const t=ki[Vs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ki=null,Vs=0}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nf(n){try{for(Gn=0;Gn<Qt.length;Gn++){const e=Qt[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<Qt.length;Gn++){const e=Qt[Gn];e&&(e.flags&=-2)}Gn=-1,Qt.length=0,tf(),ea=null,(Qt.length||Ks.length)&&nf()}}let Yt=null,sf=null;function ta(n){const e=Yt;return Yt=n,sf=n&&n.type.__scopeId||null,e}function Bi(n,e=Yt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&sa(-1);const r=ta(e);let o;try{o=n(...s)}finally{ta(r),i._d&&sa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gi(n,e){if(Yt===null)return n;const t=Ea(Yt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=gt]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ji(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(wi(),On(l,t,8,[n.el,a,n,e]),Si())}}function Um(n,e){if(tn){let t=tn.provides;const i=tn.parent&&tn.parent.provides;i===t&&(t=tn.provides=Object.create(i)),t[n]=e}}function Lr(n,e,t=!1){const i=qc();if(i||gs){let s=gs?gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}function Fm(){return!!(qc()||gs)}const Nm=Symbol.for("v-scx"),Om=()=>Lr(Nm);function qn(n,e,t){return rf(n,e,t)}function rf(n,e,t=gt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ut({},t),l=e&&i||!e&&r!=="post";let c;if(Xr){if(r==="sync"){const f=Om();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Yn,f.resume=Yn,f.pause=Yn,f}}const u=tn;a.call=(f,m,x)=>On(f,u,m,x);let h=!1;r==="post"?a.scheduler=f=>{an(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,m)=>{m?f():Wc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=Pm(n,e,a);return Xr&&(c?c.push(d):l&&d()),d}function km(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?of(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=no(this),a=rf(s,r.bind(i),t);return o(),a}function of(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Bm=Symbol("_vte"),af=n=>n.__isTeleport,Vn=Symbol("_leaveCb"),gr=Symbol("_enterCb");function zm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{n.isMounted=!0}),mf(()=>{n.isUnmounting=!0}),n}const xn=[Function,Array],lf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},cf=n=>{const e=n.subTree;return e.component?cf(e.component):e},Hm={name:"BaseTransition",props:lf,setup(n,{slots:e}){const t=qc(),i=zm();return()=>{const s=e.default&&df(e.default(),!0);if(!s||!s.length)return;const r=uf(s),o=nt(n),{mode:a}=o;if(i.isLeaving)return za(r);const l=Su(r);if(!l)return za(r);let c=Ul(l,o,i,t,h=>c=h);l.type!==qt&&Vr(l,c);let u=t.subTree&&Su(t.subTree);if(u&&u.type!==qt&&!hs(u,l)&&cf(t).type!==qt){let h=Ul(u,o,i,t);if(Vr(u,h),a==="out-in"&&l.type!==qt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},za(r);a==="in-out"&&l.type!==qt?h.delayLeave=(d,f,m)=>{const x=hf(i,u);x[String(u.key)]=u,d[Vn]=()=>{f(),d[Vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function uf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==qt){e=t;break}}return e}const Gm=Hm;function hf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ul(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:g,onAppear:p,onAfterAppear:T,onAppearCancelled:w}=e,M=String(n.key),I=hf(t,n),L=(v,_)=>{v&&On(v,i,9,_)},U=(v,_)=>{const P=_[1];L(v,_),ze(v)?v.every(O=>O.length<=1)&&P():v.length<=1&&P()},C={mode:o,persisted:a,beforeEnter(v){let _=l;if(!t.isMounted)if(r)_=g||l;else return;v[Vn]&&v[Vn](!0);const P=I[M];P&&hs(n,P)&&P.el[Vn]&&P.el[Vn](),L(_,[v])},enter(v){if(I[M]===n)return;let _=c,P=u,O=h;if(!t.isMounted)if(r)_=p||c,P=T||u,O=w||h;else return;let D=!1;v[gr]=$=>{D||(D=!0,$?L(O,[v]):L(P,[v]),C.delayedLeave&&C.delayedLeave(),v[gr]=void 0)};const N=v[gr].bind(null,!1);_?U(_,[v,N]):N()},leave(v,_){const P=String(n.key);if(v[gr]&&v[gr](!0),t.isUnmounting)return _();L(d,[v]);let O=!1;v[Vn]=N=>{O||(O=!0,_(),N?L(x,[v]):L(m,[v]),v[Vn]=void 0,I[P]===n&&delete I[P])};const D=v[Vn].bind(null,!1);I[P]=n,f?U(f,[v,D]):D()},clone(v){const _=Ul(v,e,t,i,s);return s&&s(_),_}};return C}function za(n){if(ya(n))return n=ji(n),n.children=null,n}function Su(n){if(!ya(n))return af(n.type)&&n.children?uf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function Vr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function df(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Mt?(o.patchFlag&128&&s++,i=i.concat(df(o.children,e,a))):(e||o.type!==qt)&&i.push(a!=null?ji(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function un(n,e){return qe(n)?Ut({name:n.name},e,{setup:n}):n}function ff(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Eu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const na=new WeakMap;function Dr(n,e,t,i,s=!1){if(ze(n)){n.forEach((x,g)=>Dr(x,e&&(ze(e)?e[g]:e),t,i,s));return}if(Zs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Dr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ea(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,h=a.setupState,d=nt(h),f=h===gt?wd:x=>Eu(u,x)?!1:ct(d,x),m=(x,g)=>!(g&&Eu(u,g));if(c!=null&&c!==l){if(Tu(e),Rt(c))u[c]=null,f(c)&&(h[c]=null);else if(Ct(c)){const x=e;m(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(qe(l))to(l,a,12,[o,u]);else{const x=Rt(l),g=Ct(l);if(x||g){const p=()=>{if(n.f){const T=x?f(l)?h[l]:u[l]:m()||!n.k?l.value:u[n.k];if(s)ze(T)&&Uc(T,r);else if(ze(T))T.includes(r)||T.push(r);else if(x)u[l]=[r],f(l)&&(h[l]=u[l]);else{const w=[r];m(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else x?(u[l]=o,f(l)&&(h[l]=o)):g&&(m(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{p(),na.delete(n)};T.id=-1,na.set(n,T),an(T,t)}else Tu(n),p()}}}function Tu(n){const e=na.get(n);e&&(e.flags|=8,na.delete(n))}ma().requestIdleCallback;ma().cancelIdleCallback;const Zs=n=>!!n.type.__asyncLoader,ya=n=>n.type.__isKeepAlive;function Vm(n,e){pf(n,"a",e)}function Wm(n,e){pf(n,"da",e)}function pf(n,e,t=tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ma(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&$m(i,e,t,s),s=s.parent}}function $m(n,e,t,i){const s=Ma(e,n,i,!0);Ai(()=>{Uc(i[e],s)},t)}function Ma(n,e,t=tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{wi();const a=no(t),l=On(e,t,n,o);return a(),Si(),l});return i?s.unshift(r):s.push(r),r}}const Ti=n=>(e,t=tn)=>{(!Xr||n==="sp")&&Ma(n,(...i)=>e(...i),t)},Xm=Ti("bm"),ba=Ti("m"),jm=Ti("bu"),qm=Ti("u"),mf=Ti("bum"),Ai=Ti("um"),Ym=Ti("sp"),Km=Ti("rtg"),Zm=Ti("rtc");function Jm(n,e=tn){Ma("ec",n,e)}const Qm=Symbol.for("v-ndc");function Un(n,e,t,i){let s;const r=t,o=ze(n);if(o||Rt(n)){const a=o&&Mi(n);let l=!1,c=!1;a&&(l=!mn(n),c=Ei(n),n=va(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?nr(Nn(n[u])):Nn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ut(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Au(n,e,t={},i,s){if(Yt.ce||Yt.parent&&Zs(Yt.parent)&&Yt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),ue(),ps(Mt,null,[et("slot",t,i&&i())],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),ue();const o=r&&gf(r(t)),a=t.key||o&&o.key,l=ps(Mt,{key:(a&&!Fn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function gf(n){return n.some(e=>$r(e)?!(e.type===qt||e.type===Mt&&!gf(e.children)):!0)?n:null}const Fl=n=>n?Nf(n)?Ea(n):Fl(n.parent):null,Ir=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Fl(n.parent),$root:n=>Fl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_f(n),$forceUpdate:n=>n.f||(n.f=()=>{Wc(n.update)}),$nextTick:n=>n.n||(n.n=Qd.bind(n.proxy)),$watch:n=>km.bind(n)}),Ha=(n,e)=>n!==gt&&!n.__isScriptSetup&&ct(n,e),eg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ha(i,e))return o[e]=1,i[e];if(s!==gt&&ct(s,e))return o[e]=2,s[e];if(ct(r,e))return o[e]=3,r[e];if(t!==gt&&ct(t,e))return o[e]=4,t[e];Nl&&(o[e]=0)}}const c=Ir[e];let u,h;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==gt&&ct(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ct(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ha(s,e)?(s[e]=t,!0):i!==gt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==gt&&a[0]!=="$"&&ct(n,a)||Ha(e,a)||ct(r,a)||ct(i,a)||ct(Ir,a)||ct(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Cu(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nl=!0;function tg(n){const e=_f(n),t=n.proxy,i=n.ctx;Nl=!1,e.beforeCreate&&Ru(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:x,deactivated:g,beforeDestroy:p,beforeUnmount:T,destroyed:w,unmounted:M,render:I,renderTracked:L,renderTriggered:U,errorCaptured:C,serverPrefetch:v,expose:_,inheritAttrs:P,components:O,directives:D,filters:N}=e;if(c&&ng(c,i,null),o)for(const J in o){const q=o[J];qe(q)&&(i[J]=q.bind(t))}if(s){const J=s.call(t,t);ut(J)&&(n.data=eo(J))}if(Nl=!0,r)for(const J in r){const q=r[J],V=qe(q)?q.bind(t,t):qe(q.get)?q.get.bind(t,t):Yn,W=!qe(q)&&qe(q.set)?q.set.bind(t):Yn,le=Bt({get:V,set:W});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>le.value,set:_e=>le.value=_e})}if(a)for(const J in a)vf(a[J],i,t,J);if(l){const J=qe(l)?l.call(t):l;Reflect.ownKeys(J).forEach(q=>{Um(q,J[q])})}u&&Ru(u,n,"c");function H(J,q){ze(q)?q.forEach(V=>J(V.bind(t))):q&&J(q.bind(t))}if(H(Xm,h),H(ba,d),H(jm,f),H(qm,m),H(Vm,x),H(Wm,g),H(Jm,C),H(Zm,L),H(Km,U),H(mf,T),H(Ai,M),H(Ym,v),ze(_))if(_.length){const J=n.exposed||(n.exposed={});_.forEach(q=>{Object.defineProperty(J,q,{get:()=>t[q],set:V=>t[q]=V,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Yn&&(n.render=I),P!=null&&(n.inheritAttrs=P),O&&(n.components=O),D&&(n.directives=D),v&&ff(n)}function ng(n,e,t=Yn){ze(n)&&(n=Ol(n));for(const i in n){const s=n[i];let r;ut(s)?"default"in s?r=Lr(s.from||i,s.default,!0):r=Lr(s.from||i):r=Lr(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ru(n,e,t){On(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vf(n,e,t,i){let s=i.includes(".")?of(t,i):()=>t[i];if(Rt(n)){const r=e[n];qe(r)&&qn(s,r)}else if(qe(n))qn(s,n.bind(t));else if(ut(n))if(ze(n))n.forEach(r=>vf(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&qn(s,r,n)}}function _f(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ia(l,c,o,!0)),ia(l,e,o)),ut(e)&&r.set(e,l),l}function ia(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ia(n,r,t,!0),s&&s.forEach(o=>ia(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=ig[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ig={data:Pu,props:Lu,emits:Lu,methods:Sr,computed:Sr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Sr,directives:Sr,watch:rg,provide:Pu,inject:sg};function Pu(n,e){return e?n?function(){return Ut(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function sg(n,e){return Sr(Ol(n),Ol(e))}function Ol(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Sr(n,e){return n?Ut(Object.create(null),n,e):e}function Lu(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:Ut(Object.create(null),Cu(n),Cu(e??{})):e}function rg(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function xf(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let og=0;function ag(n,e){return function(i,s=null){qe(i)||(i=Ut({},i)),s!=null&&!ut(s)&&(s=null);const r=xf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:og++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...h)):qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||et(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Ea(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=gs;gs=c;try{return u()}finally{gs=h}}};return c}}let gs=null;const lg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${Ms(e)}Modifiers`];function cg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),o=r&&lg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Rt(u)?u.trim():u)),o.number&&(s=t.map(Fc)));let a,l=i[a=Fa(e)]||i[a=Fa(Dn(e))];!l&&r&&(l=i[a=Fa(Ms(e))]),l&&On(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,s)}}const ug=new WeakMap;function yf(n,e,t=!1){const i=t?ug:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=yf(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ut(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):Ut(o,r),ut(n)&&i.set(n,o),o)}function wa(n,e){return!n||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Ms(e))||ct(n,e))}function Du(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:m,inheritAttrs:x}=n,g=ta(n);let p,T;try{if(t.shapeFlag&4){const M=s||i,I=M;p=$n(c.call(I,M,u,h,f,d,m)),T=a}else{const M=e;p=$n(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),T=e.props?a:hg(a)}}catch(M){Ur.length=0,xa(M,n,1),p=et(qt)}let w=p;if(T&&x!==!1){const M=Object.keys(T),{shapeFlag:I}=w;M.length&&I&7&&(r&&M.some(Ic)&&(T=dg(T,r)),w=ji(w,T,!1,!0))}return t.dirs&&(w=ji(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Vr(w,t.transition),p=w,ta(g),p}const hg=n=>{let e;for(const t in n)(t==="class"||t==="style"||da(t))&&((e||(e={}))[t]=n[t]);return e},dg=(n,e)=>{const t={};for(const i in n)(!Ic(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Iu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Mf(o,i,d)&&!wa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Iu(i,o,c):!0:!!o;return!1}function Iu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Mf(e,n,r)&&!wa(t,r))return!0}return!1}function Mf(n,e,t){const i=n[t],s=e[t];return t==="style"&&ut(i)&&ut(s)?!Nc(i,s):i!==s}function pg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const bf={},wf=()=>Object.create(bf),Sf=n=>Object.getPrototypeOf(n)===bf;function mg(n,e,t,i=!1){const s={},r=wf();n.propsDefaults=Object.create(null),Ef(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ym(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function gg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=nt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(wa(n.emitsOptions,d))continue;const f=e[d];if(l)if(ct(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=Dn(d);s[m]=kl(l,a,m,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Ef(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ct(e,h)&&((u=Ms(h))===h||!ct(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=kl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ct(e,h))&&(delete r[h],c=!0)}c&&mi(n.attrs,"set","")}function Ef(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Cr(l))continue;const c=e[l];let u;s&&ct(s,u=Dn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:wa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=nt(t),c=a||gt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=kl(s,l,h,c[h],n,!ct(c,h))}}return o}function kl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=no(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ms(t))&&(i=!0))}return i}const vg=new WeakMap;function Tf(n,e,t=!1){const i=t?vg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=h=>{l=!0;const[d,f]=Tf(h,e,!0);Ut(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ut(n)&&i.set(n,qs),qs;if(ze(r))for(let u=0;u<r.length;u++){const h=Dn(r[u]);Uu(h)&&(o[h]=gt)}else if(r)for(const u in r){const h=Dn(u);if(Uu(h)){const d=r[u],f=o[h]=ze(d)||qe(d)?{type:d}:Ut({},d),m=f.type;let x=!1,g=!0;if(ze(m))for(let p=0;p<m.length;++p){const T=m[p],w=qe(T)&&T.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(g=!1)}else x=qe(m)&&m.name==="Boolean";f[0]=x,f[1]=g,(x||ct(f,"default"))&&a.push(h)}}const c=[o,a];return ut(n)&&i.set(n,c),c}function Uu(n){return n[0]!=="$"&&!Cr(n)}const $c=n=>n==="_"||n==="_ctx"||n==="$stable",Xc=n=>ze(n)?n.map($n):[$n(n)],_g=(n,e,t)=>{if(e._n)return e;const i=Bi((...s)=>Xc(e(...s)),t);return i._c=!1,i},Af=(n,e,t)=>{const i=n._ctx;for(const s in n){if($c(s))continue;const r=n[s];if(qe(r))e[s]=_g(s,r,i);else if(r!=null){const o=Xc(r);e[s]=()=>o}}},Cf=(n,e)=>{const t=Xc(e);n.slots.default=()=>t},Rf=(n,e,t)=>{for(const i in e)(t||!$c(i))&&(n[i]=e[i])},xg=(n,e,t)=>{const i=n.slots=wf();if(n.vnode.shapeFlag&32){const s=e._;s?(Rf(i,e,t),t&&Rd(i,"_",s,!0)):Af(e,i)}else e&&Cf(n,e)},yg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Rf(s,e,t):(r=!e.$stable,Af(e,s)),o=e}else e&&(Cf(n,e),o={default:1});if(r)for(const a in s)!$c(a)&&o[a]==null&&delete s[a]},an=Eg;function Mg(n){return bg(n)}function bg(n,e){const t=ma();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Yn,insertStaticContent:m}=n,x=(A,F,E,B=null,k=null,j=null,Q=void 0,re=null,te=!!F.dynamicChildren)=>{if(A===F)return;A&&!hs(A,F)&&(B=ge(A),_e(A,k,j,!0),A=null),F.patchFlag===-2&&(te=!1,F.dynamicChildren=null);const{type:S,ref:b,shapeFlag:z}=F;switch(S){case Sa:g(A,F,E,B);break;case qt:p(A,F,E,B);break;case Vo:A==null&&T(F,E,B,Q);break;case Mt:O(A,F,E,B,k,j,Q,re,te);break;default:z&1?I(A,F,E,B,k,j,Q,re,te):z&6?D(A,F,E,B,k,j,Q,re,te):(z&64||z&128)&&S.process(A,F,E,B,k,j,Q,re,te,Oe)}b!=null&&k?Dr(b,A&&A.ref,j,F||A,!F):b==null&&A&&A.ref!=null&&Dr(A.ref,null,j,A,!0)},g=(A,F,E,B)=>{if(A==null)i(F.el=a(F.children),E,B);else{const k=F.el=A.el;F.children!==A.children&&c(k,F.children)}},p=(A,F,E,B)=>{A==null?i(F.el=l(F.children||""),E,B):F.el=A.el},T=(A,F,E,B)=>{[A.el,A.anchor]=m(A.children,F,E,B,A.el,A.anchor)},w=({el:A,anchor:F},E,B)=>{let k;for(;A&&A!==F;)k=d(A),i(A,E,B),A=k;i(F,E,B)},M=({el:A,anchor:F})=>{let E;for(;A&&A!==F;)E=d(A),s(A),A=E;s(F)},I=(A,F,E,B,k,j,Q,re,te)=>{if(F.type==="svg"?Q="svg":F.type==="math"&&(Q="mathml"),A==null)L(F,E,B,k,j,Q,re,te);else{const S=A.el&&A.el._isVueCE?A.el:null;try{S&&S._beginPatch(),v(A,F,k,j,Q,re,te)}finally{S&&S._endPatch()}}},L=(A,F,E,B,k,j,Q,re)=>{let te,S;const{props:b,shapeFlag:z,transition:Z,dirs:ne}=A;if(te=A.el=o(A.type,j,b&&b.is,b),z&8?u(te,A.children):z&16&&C(A.children,te,null,B,k,Ga(A,j),Q,re),ne&&Ji(A,null,B,"created"),U(te,A,A.scopeId,Q,B),b){for(const ve in b)ve!=="value"&&!Cr(ve)&&r(te,ve,null,b[ve],j,B);"value"in b&&r(te,"value",null,b.value,j),(S=b.onVnodeBeforeMount)&&Hn(S,B,A)}ne&&Ji(A,null,B,"beforeMount");const ee=wg(k,Z);ee&&Z.beforeEnter(te),i(te,F,E),((S=b&&b.onVnodeMounted)||ee||ne)&&an(()=>{S&&Hn(S,B,A),ee&&Z.enter(te),ne&&Ji(A,null,B,"mounted")},k)},U=(A,F,E,B,k)=>{if(E&&f(A,E),B)for(let j=0;j<B.length;j++)f(A,B[j]);if(k){let j=k.subTree;if(F===j||If(j.type)&&(j.ssContent===F||j.ssFallback===F)){const Q=k.vnode;U(A,Q,Q.scopeId,Q.slotScopeIds,k.parent)}}},C=(A,F,E,B,k,j,Q,re,te=0)=>{for(let S=te;S<A.length;S++){const b=A[S]=re?pi(A[S]):$n(A[S]);x(null,b,F,E,B,k,j,Q,re)}},v=(A,F,E,B,k,j,Q)=>{const re=F.el=A.el;let{patchFlag:te,dynamicChildren:S,dirs:b}=F;te|=A.patchFlag&16;const z=A.props||gt,Z=F.props||gt;let ne;if(E&&Qi(E,!1),(ne=Z.onVnodeBeforeUpdate)&&Hn(ne,E,F,A),b&&Ji(F,A,E,"beforeUpdate"),E&&Qi(E,!0),(z.innerHTML&&Z.innerHTML==null||z.textContent&&Z.textContent==null)&&u(re,""),S?_(A.dynamicChildren,S,re,E,B,Ga(F,k),j):Q||q(A,F,re,null,E,B,Ga(F,k),j,!1),te>0){if(te&16)P(re,z,Z,E,k);else if(te&2&&z.class!==Z.class&&r(re,"class",null,Z.class,k),te&4&&r(re,"style",z.style,Z.style,k),te&8){const ee=F.dynamicProps;for(let ve=0;ve<ee.length;ve++){const fe=ee[ve],Me=z[fe],Be=Z[fe];(Be!==Me||fe==="value")&&r(re,fe,Me,Be,k,E)}}te&1&&A.children!==F.children&&u(re,F.children)}else!Q&&S==null&&P(re,z,Z,E,k);((ne=Z.onVnodeUpdated)||b)&&an(()=>{ne&&Hn(ne,E,F,A),b&&Ji(F,A,E,"updated")},B)},_=(A,F,E,B,k,j,Q)=>{for(let re=0;re<F.length;re++){const te=A[re],S=F[re],b=te.el&&(te.type===Mt||!hs(te,S)||te.shapeFlag&198)?h(te.el):E;x(te,S,b,null,B,k,j,Q,!0)}},P=(A,F,E,B,k)=>{if(F!==E){if(F!==gt)for(const j in F)!Cr(j)&&!(j in E)&&r(A,j,F[j],null,k,B);for(const j in E){if(Cr(j))continue;const Q=E[j],re=F[j];Q!==re&&j!=="value"&&r(A,j,re,Q,k,B)}"value"in E&&r(A,"value",F.value,E.value,k)}},O=(A,F,E,B,k,j,Q,re,te)=>{const S=F.el=A?A.el:a(""),b=F.anchor=A?A.anchor:a("");let{patchFlag:z,dynamicChildren:Z,slotScopeIds:ne}=F;ne&&(re=re?re.concat(ne):ne),A==null?(i(S,E,B),i(b,E,B),C(F.children||[],E,b,k,j,Q,re,te)):z>0&&z&64&&Z&&A.dynamicChildren&&A.dynamicChildren.length===Z.length?(_(A.dynamicChildren,Z,E,k,j,Q,re),(F.key!=null||k&&F===k.subTree)&&Pf(A,F,!0)):q(A,F,E,b,k,j,Q,re,te)},D=(A,F,E,B,k,j,Q,re,te)=>{F.slotScopeIds=re,A==null?F.shapeFlag&512?k.ctx.activate(F,E,B,Q,te):N(F,E,B,k,j,Q,te):$(A,F,te)},N=(A,F,E,B,k,j,Q)=>{const re=A.component=Dg(A,B,k);if(ya(A)&&(re.ctx.renderer=Oe),Ig(re,!1,Q),re.asyncDep){if(k&&k.registerDep(re,H,Q),!A.el){const te=re.subTree=et(qt);p(null,te,F,E),A.placeholder=te.el}}else H(re,A,F,E,k,j,Q)},$=(A,F,E)=>{const B=F.component=A.component;if(fg(A,F,E))if(B.asyncDep&&!B.asyncResolved){J(B,F,E);return}else B.next=F,B.update();else F.el=A.el,B.vnode=F},H=(A,F,E,B,k,j,Q)=>{const re=()=>{if(A.isMounted){let{next:z,bu:Z,u:ne,parent:ee,vnode:ve}=A;{const Ee=Lf(A);if(Ee){z&&(z.el=ve.el,J(A,z,Q)),Ee.asyncDep.then(()=>{an(()=>{A.isUnmounted||S()},k)});return}}let fe=z,Me;Qi(A,!1),z?(z.el=ve.el,J(A,z,Q)):z=ve,Z&&Go(Z),(Me=z.props&&z.props.onVnodeBeforeUpdate)&&Hn(Me,ee,z,ve),Qi(A,!0);const Be=Du(A),pe=A.subTree;A.subTree=Be,x(pe,Be,h(pe.el),ge(pe),A,k,j),z.el=Be.el,fe===null&&pg(A,Be.el),ne&&an(ne,k),(Me=z.props&&z.props.onVnodeUpdated)&&an(()=>Hn(Me,ee,z,ve),k)}else{let z;const{el:Z,props:ne}=F,{bm:ee,m:ve,parent:fe,root:Me,type:Be}=A,pe=Zs(F);Qi(A,!1),ee&&Go(ee),!pe&&(z=ne&&ne.onVnodeBeforeMount)&&Hn(z,fe,F),Qi(A,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(Be,A.parent?A.parent.type:void 0);const Ee=A.subTree=Du(A);x(null,Ee,E,B,A,k,j),F.el=Ee.el}if(ve&&an(ve,k),!pe&&(z=ne&&ne.onVnodeMounted)){const Ee=F;an(()=>Hn(z,fe,Ee),k)}(F.shapeFlag&256||fe&&Zs(fe.vnode)&&fe.vnode.shapeFlag&256)&&A.a&&an(A.a,k),A.isMounted=!0,F=E=B=null}};A.scope.on();const te=A.effect=new Nd(re);A.scope.off();const S=A.update=te.run.bind(te),b=A.job=te.runIfDirty.bind(te);b.i=A,b.id=A.uid,te.scheduler=()=>Wc(b),Qi(A,!0),S()},J=(A,F,E)=>{F.component=A;const B=A.vnode.props;A.vnode=F,A.next=null,gg(A,F.props,B,E),yg(A,F.children,E),wi(),wu(A),Si()},q=(A,F,E,B,k,j,Q,re,te=!1)=>{const S=A&&A.children,b=A?A.shapeFlag:0,z=F.children,{patchFlag:Z,shapeFlag:ne}=F;if(Z>0){if(Z&128){W(S,z,E,B,k,j,Q,re,te);return}else if(Z&256){V(S,z,E,B,k,j,Q,re,te);return}}ne&8?(b&16&&Le(S,k,j),z!==S&&u(E,z)):b&16?ne&16?W(S,z,E,B,k,j,Q,re,te):Le(S,k,j,!0):(b&8&&u(E,""),ne&16&&C(z,E,B,k,j,Q,re,te))},V=(A,F,E,B,k,j,Q,re,te)=>{A=A||qs,F=F||qs;const S=A.length,b=F.length,z=Math.min(S,b);let Z;for(Z=0;Z<z;Z++){const ne=F[Z]=te?pi(F[Z]):$n(F[Z]);x(A[Z],ne,E,null,k,j,Q,re,te)}S>b?Le(A,k,j,!0,!1,z):C(F,E,B,k,j,Q,re,te,z)},W=(A,F,E,B,k,j,Q,re,te)=>{let S=0;const b=F.length;let z=A.length-1,Z=b-1;for(;S<=z&&S<=Z;){const ne=A[S],ee=F[S]=te?pi(F[S]):$n(F[S]);if(hs(ne,ee))x(ne,ee,E,null,k,j,Q,re,te);else break;S++}for(;S<=z&&S<=Z;){const ne=A[z],ee=F[Z]=te?pi(F[Z]):$n(F[Z]);if(hs(ne,ee))x(ne,ee,E,null,k,j,Q,re,te);else break;z--,Z--}if(S>z){if(S<=Z){const ne=Z+1,ee=ne<b?F[ne].el:B;for(;S<=Z;)x(null,F[S]=te?pi(F[S]):$n(F[S]),E,ee,k,j,Q,re,te),S++}}else if(S>Z)for(;S<=z;)_e(A[S],k,j,!0),S++;else{const ne=S,ee=S,ve=new Map;for(S=ee;S<=Z;S++){const we=F[S]=te?pi(F[S]):$n(F[S]);we.key!=null&&ve.set(we.key,S)}let fe,Me=0;const Be=Z-ee+1;let pe=!1,Ee=0;const ke=new Array(Be);for(S=0;S<Be;S++)ke[S]=0;for(S=ne;S<=z;S++){const we=A[S];if(Me>=Be){_e(we,k,j,!0);continue}let $e;if(we.key!=null)$e=ve.get(we.key);else for(fe=ee;fe<=Z;fe++)if(ke[fe-ee]===0&&hs(we,F[fe])){$e=fe;break}$e===void 0?_e(we,k,j,!0):(ke[$e-ee]=S+1,$e>=Ee?Ee=$e:pe=!0,x(we,F[$e],E,null,k,j,Q,re,te),Me++)}const Ve=pe?Sg(ke):qs;for(fe=Ve.length-1,S=Be-1;S>=0;S--){const we=ee+S,$e=F[we],je=F[we+1],ht=we+1<b?je.el||Df(je):B;ke[S]===0?x(null,$e,E,ht,k,j,Q,re,te):pe&&(fe<0||S!==Ve[fe]?le($e,E,ht,2):fe--)}}},le=(A,F,E,B,k=null)=>{const{el:j,type:Q,transition:re,children:te,shapeFlag:S}=A;if(S&6){le(A.component.subTree,F,E,B);return}if(S&128){A.suspense.move(F,E,B);return}if(S&64){Q.move(A,F,E,Oe);return}if(Q===Mt){i(j,F,E);for(let z=0;z<te.length;z++)le(te[z],F,E,B);i(A.anchor,F,E);return}if(Q===Vo){w(A,F,E);return}if(B!==2&&S&1&&re)if(B===0)re.beforeEnter(j),i(j,F,E),an(()=>re.enter(j),k);else{const{leave:z,delayLeave:Z,afterLeave:ne}=re,ee=()=>{A.ctx.isUnmounted?s(j):i(j,F,E)},ve=()=>{j._isLeaving&&j[Vn](!0),z(j,()=>{ee(),ne&&ne()})};Z?Z(j,ee,ve):ve()}else i(j,F,E)},_e=(A,F,E,B=!1,k=!1)=>{const{type:j,props:Q,ref:re,children:te,dynamicChildren:S,shapeFlag:b,patchFlag:z,dirs:Z,cacheIndex:ne}=A;if(z===-2&&(k=!1),re!=null&&(wi(),Dr(re,null,E,A,!0),Si()),ne!=null&&(F.renderCache[ne]=void 0),b&256){F.ctx.deactivate(A);return}const ee=b&1&&Z,ve=!Zs(A);let fe;if(ve&&(fe=Q&&Q.onVnodeBeforeUnmount)&&Hn(fe,F,A),b&6)me(A.component,E,B);else{if(b&128){A.suspense.unmount(E,B);return}ee&&Ji(A,null,F,"beforeUnmount"),b&64?A.type.remove(A,F,E,Oe,B):S&&!S.hasOnce&&(j!==Mt||z>0&&z&64)?Le(S,F,E,!1,!0):(j===Mt&&z&384||!k&&b&16)&&Le(te,F,E),B&&He(A)}(ve&&(fe=Q&&Q.onVnodeUnmounted)||ee)&&an(()=>{fe&&Hn(fe,F,A),ee&&Ji(A,null,F,"unmounted")},E)},He=A=>{const{type:F,el:E,anchor:B,transition:k}=A;if(F===Mt){ce(E,B);return}if(F===Vo){M(A);return}const j=()=>{s(E),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(A.shapeFlag&1&&k&&!k.persisted){const{leave:Q,delayLeave:re}=k,te=()=>Q(E,j);re?re(A.el,j,te):te()}else j()},ce=(A,F)=>{let E;for(;A!==F;)E=d(A),s(A),A=E;s(F)},me=(A,F,E)=>{const{bum:B,scope:k,job:j,subTree:Q,um:re,m:te,a:S}=A;Fu(te),Fu(S),B&&Go(B),k.stop(),j&&(j.flags|=8,_e(Q,A,F,E)),re&&an(re,F),an(()=>{A.isUnmounted=!0},F)},Le=(A,F,E,B=!1,k=!1,j=0)=>{for(let Q=j;Q<A.length;Q++)_e(A[Q],F,E,B,k)},ge=A=>{if(A.shapeFlag&6)return ge(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const F=d(A.anchor||A.el),E=F&&F[Bm];return E?d(E):F};let De=!1;const Ge=(A,F,E)=>{let B;A==null?F._vnode&&(_e(F._vnode,null,null,!0),B=F._vnode.component):x(F._vnode||null,A,F,null,null,null,E),F._vnode=A,De||(De=!0,wu(B),tf(),De=!1)},Oe={p:x,um:_e,m:le,r:He,mt:N,mc:C,pc:q,pbc:_,n:ge,o:n};return{render:Ge,hydrate:void 0,createApp:ag(Ge)}}function Ga({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function wg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Pf(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=pi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Pf(o,a)),a.type===Sa&&(a.patchFlag===-1&&(a=s[r]=pi(a)),a.el=o.el),a.type===qt&&!a.el&&(a.el=o.el)}}function Sg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Lf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lf(e)}function Fu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Df(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Df(e.subTree):null}const If=n=>n.__isSuspense;function Eg(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Im(n)}const Mt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),Ur=[];let pn=null;function ue(n=!1){Ur.push(pn=n?null:[])}function Tg(){Ur.pop(),pn=Ur[Ur.length-1]||null}let Wr=1;function sa(n,e=!1){Wr+=n,n<0&&pn&&e&&(pn.hasOnce=!0)}function Uf(n){return n.dynamicChildren=Wr>0?pn||qs:null,Tg(),Wr>0&&pn&&pn.push(n),n}function he(n,e,t,i,s,r){return Uf(y(n,e,t,i,s,r,!0))}function ps(n,e,t,i,s){return Uf(et(n,e,t,i,s,!0))}function $r(n){return n?n.__v_isVNode===!0:!1}function hs(n,e){return n.type===e.type&&n.key===e.key}const Ff=({key:n})=>n??null,Wo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||Ct(n)||qe(n)?{i:Yt,r:n,k:e,f:!!t}:n:null);function y(n,e=null,t=null,i=0,s=null,r=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ff(e),ref:e&&Wo(e),scopeId:sf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Yt};return a?(jc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Wr>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const et=Ag;function Ag(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Qm)&&(n=qt),$r(n)){const a=ji(n,e,!0);return t&&jc(a,t),Wr>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag=-2,a}if(Og(n)&&(n=n.__vccOpts),e){e=Cg(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=ot(a)),ut(l)&&(_a(l)&&!ze(l)&&(l=Ut({},l)),e.style=ga(l))}const o=Rt(n)?1:If(n)?128:af(n)?64:ut(n)?4:qe(n)?2:0;return y(n,e,t,i,s,o,r,!0)}function Cg(n){return n?_a(n)||Sf(n)?Ut({},n):n:null}function ji(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Rg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ff(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(Wo(e)):[r,Wo(e)]:Wo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ji(n.ssContent),ssFallback:n.ssFallback&&ji(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vr(u,l.clone(u)),u}function en(n=" ",e=0){return et(Sa,null,n,e)}function Mn(n,e){const t=et(Vo,null,n);return t.staticCount=e,t}function tt(n="",e=!1){return e?(ue(),ps(qt,null,n)):et(qt,null,n)}function $n(n){return n==null||typeof n=="boolean"?et(qt):ze(n)?et(Mt,null,n.slice()):$r(n)?pi(n):et(Sa,null,String(n))}function pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ji(n)}function jc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),jc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Sf(e)?e._ctx=Yt:s===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[en(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ot([e.class,i.class]));else if(s==="style")e.style=ga([e.style,i.style]);else if(da(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Hn(n,e,t,i=null){On(n,e,7,[t,i])}const Pg=xf();let Lg=0;function Dg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Pg,r={uid:Lg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tf(i,s),emitsOptions:yf(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cg.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const qc=()=>tn||Yt;let ra,Bl;{const n=ma(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ra=e("__VUE_INSTANCE_SETTERS__",t=>tn=t),Bl=e("__VUE_SSR_SETTERS__",t=>Xr=t)}const no=n=>{const e=tn;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(e)}},Nu=()=>{tn&&tn.scope.off(),ra(null)};function Nf(n){return n.vnode.shapeFlag&4}let Xr=!1;function Ig(n,e=!1,t=!1){e&&Bl(e);const{props:i,children:s}=n.vnode,r=Nf(n);mg(n,i,r,e),xg(n,s,t||e);const o=r?Ug(n,e):void 0;return e&&Bl(!1),o}function Ug(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,eg);const{setup:i}=t;if(i){wi();const s=n.setupContext=i.length>1?Ng(n):null,r=no(n),o=to(i,n,0,[n.props,s]),a=Ed(o);if(Si(),r(),(a||n.sp)&&!Zs(n)&&ff(n),a){if(o.then(Nu,Nu),e)return o.then(l=>{Ou(n,l)}).catch(l=>{xa(l,n,0)});n.asyncDep=o}else Ou(n,o)}else Of(n)}function Ou(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ut(e)&&(n.setupState=Zd(e)),Of(n)}function Of(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const s=no(n);wi();try{tg(n)}finally{Si(),s()}}}const Fg={get(n,e){return Xt(n,"get",""),n[e]}};function Ng(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Fg),slots:n.slots,emit:n.emit,expose:e}}function Ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zd(Vc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ir)return Ir[t](n)},has(e,t){return t in e||t in Ir}})):n.proxy}function Og(n){return qe(n)&&"__vccOpts"in n}const Bt=(n,e)=>Cm(n,e,Xr);function kg(n,e,t){try{sa(-1);const i=arguments.length;return i===2?ut(e)&&!ze(e)?$r(e)?et(n,null,[e]):et(n,e):et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&$r(t)&&(t=[t]),et(n,e,t))}finally{sa(1)}}const Bg="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zl;const ku=typeof window<"u"&&window.trustedTypes;if(ku)try{zl=ku.createPolicy("vue",{createHTML:n=>n})}catch{}const kf=zl?n=>zl.createHTML(n):n=>n,zg="http://www.w3.org/2000/svg",Hg="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,Bu=fi&&fi.createElement("template"),Gg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?fi.createElementNS(zg,n):e==="mathml"?fi.createElementNS(Hg,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Bu.innerHTML=kf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pi="transition",vr="animation",jr=Symbol("_vtc"),Bf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vg=Ut({},lf,Bf),Wg=n=>(n.displayName="Transition",n.props=Vg,n),$g=Wg((n,{slots:e})=>kg(Gm,Xg(n),e)),es=(n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},zu=n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Xg(n){const e={};for(const O in n)O in Bf||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,m=jg(s),x=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:w,onLeave:M,onLeaveCancelled:I,onBeforeAppear:L=p,onAppear:U=T,onAppearCancelled:C=w}=e,v=(O,D,N,$)=>{O._enterCancelled=$,ts(O,D?u:a),ts(O,D?c:o),N&&N()},_=(O,D)=>{O._isLeaving=!1,ts(O,h),ts(O,f),ts(O,d),D&&D()},P=O=>(D,N)=>{const $=O?U:T,H=()=>v(D,O,N);es($,[D,H]),Hu(()=>{ts(D,O?l:r),ri(D,O?u:a),zu($)||Gu(D,i,x,H)})};return Ut(e,{onBeforeEnter(O){es(p,[O]),ri(O,r),ri(O,o)},onBeforeAppear(O){es(L,[O]),ri(O,l),ri(O,c)},onEnter:P(!1),onAppear:P(!0),onLeave(O,D){O._isLeaving=!0;const N=()=>_(O,D);ri(O,h),O._enterCancelled?(ri(O,d),$u(O)):($u(O),ri(O,d)),Hu(()=>{O._isLeaving&&(ts(O,h),ri(O,f),zu(M)||Gu(O,i,g,N))}),es(M,[O,N])},onEnterCancelled(O){v(O,!1,void 0,!0),es(w,[O])},onAppearCancelled(O){v(O,!0,void 0,!0),es(C,[O])},onLeaveCancelled(O){_(O),es(I,[O])}})}function jg(n){if(n==null)return null;if(ut(n))return[Va(n.enter),Va(n.leave)];{const e=Va(n);return[e,e]}}function Va(n){return Xp(n)}function ri(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[jr]||(n[jr]=new Set)).add(e)}function ts(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[jr];t&&(t.delete(e),t.size||(n[jr]=void 0))}function Hu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let qg=0;function Gu(n,e,t,i){const s=n._endId=++qg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Yg(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function Yg(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),s=i(`${Pi}Delay`),r=i(`${Pi}Duration`),o=Vu(s,r),a=i(`${vr}Delay`),l=i(`${vr}Duration`),c=Vu(a,l);let u=null,h=0,d=0;e===Pi?o>0&&(u=Pi,h=o,d=r.length):e===vr?c>0&&(u=vr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Pi:vr:null,d=u?u===Pi?r.length:l.length:0);const f=u===Pi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Pi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Vu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Wu(t)+Wu(n[i])))}function Wu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $u(n){return(n?n.ownerDocument:document).body.offsetHeight}function Kg(n,e,t){const i=n[jr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xu=Symbol("_vod"),Zg=Symbol("_vsh"),Jg=Symbol(""),Qg=/(?:^|;)\s*display\s*:/;function e0(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&$o(i,a,"")}else for(const o in e)t[o]==null&&$o(i,o,"");for(const o in t)o==="display"&&(r=!0),$o(i,o,t[o])}else if(s){if(e!==t){const o=i[Jg];o&&(t+=";"+o),i.cssText=t,r=Qg.test(t)}}else e&&n.removeAttribute("style");Xu in n&&(n[Xu]=r?i.display:"",n[Zg]&&(i.display="none"))}const ju=/\s*!important$/;function $o(n,e,t){if(ze(t))t.forEach(i=>$o(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=t0(n,e);ju.test(t)?n.setProperty(Ms(i),t.replace(ju,""),"important"):n[i]=t}}const qu=["Webkit","Moz","ms"],Wa={};function t0(n,e){const t=Wa[e];if(t)return t;let i=Dn(e);if(i!=="filter"&&i in n)return Wa[e]=i;i=Cd(i);for(let s=0;s<qu.length;s++){const r=qu[s]+i;if(r in n)return Wa[e]=r}return e}const Yu="http://www.w3.org/1999/xlink";function Ku(n,e,t,i,s,r=Jp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Yu,e.slice(6,e.length)):n.setAttributeNS(Yu,e,t):t==null||r&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Fn(t)?String(t):t)}function Zu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ws(n,e,t,i){n.addEventListener(e,t,i)}function n0(n,e,t,i){n.removeEventListener(e,t,i)}const Ju=Symbol("_vei");function i0(n,e,t,i,s=null){const r=n[Ju]||(n[Ju]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=s0(e);if(i){const c=r[e]=a0(i,s);Ws(n,a,c,l)}else o&&(n0(n,a,o,l),r[e]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function s0(n){let e;if(Qu.test(n)){e={};let i;for(;i=n.match(Qu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ms(n.slice(2)),e]}let $a=0;const r0=Promise.resolve(),o0=()=>$a||(r0.then(()=>$a=0),$a=Date.now());function a0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(l0(i,t.value),e,5,[i])};return t.value=n,t.attached=o0(),t}function l0(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const eh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,c0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Kg(n,i,o):e==="style"?e0(n,t,i):da(e)?Ic(e)||i0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u0(n,e,i,o))?(Zu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ku(n,e,i,o,r,e!=="value")):n._isVueCE&&(h0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Rt(i)))?Zu(n,Dn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ku(n,e,i,o))};function u0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eh(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return eh(e)&&Rt(t)?!1:e in n}function h0(n,e){const t=n._def.props;if(!t)return!1;const i=Dn(e);return Array.isArray(t)?t.some(s=>Dn(s)===i):Object.keys(t).some(s=>Dn(s)===i)}const th=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>Go(e,t):e};function d0(n){n.target.composing=!0}function nh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign");function ih(n,e,t){return e&&(n=n.trim()),t&&(n=Fc(n)),n}const Vi={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Xa]=th(s);const r=i||s.props&&s.props.type==="number";Ws(n,e?"change":"input",o=>{o.target.composing||n[Xa](ih(n.value,t,r))}),(t||r)&&Ws(n,"change",()=>{n.value=ih(n.value,t,r)}),e||(Ws(n,"compositionstart",d0),Ws(n,"compositionend",nh),Ws(n,"change",nh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Xa]=th(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Fc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},f0=["ctrl","shift","alt","meta"],p0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>f0.some(t=>n[`${t}Key`]&&!e.includes(t))},jt=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=p0[e[o]];if(a&&a(s,e))return}return n(s,...r)})},m0=Ut({patchProp:c0},Gg);let sh;function g0(){return sh||(sh=Mg(m0))}const v0=(...n)=>{const e=g0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=x0(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,_0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function x0(n){return Rt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zf;const Ta=n=>zf=n,Hf=Symbol();function Hl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Fr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Fr||(Fr={}));function y0(){const n=Ud(!0),e=n.run(()=>ye({}));let t=[],i=[];const s=Vc({install(r){Ta(s),s._a=r,r.provide(Hf,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Gf=()=>{};function rh(n,e,t,i=Gf){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Fd()&&em(s),s}function Ts(n,...e){n.slice().forEach(t=>{t(...e)})}const M0=n=>n(),oh=Symbol(),ja=Symbol();function Gl(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Hl(s)&&Hl(i)&&n.hasOwnProperty(t)&&!Ct(i)&&!Mi(i)?n[t]=Gl(s,i):n[t]=i}return n}const b0=Symbol();function w0(n){return!Hl(n)||!n.hasOwnProperty(b0)}const{assign:Oi}=Object;function S0(n){return!!(Ct(n)&&n.effect)}function E0(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=Sm(t.state.value[n]);return Oi(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Vc(Bt(()=>{Ta(t);const f=t._s.get(n);return o[d].call(f,f)})),h),{}))}return l=Vf(n,c,e,t,i,!0),l}function Vf(n,e,t={},i,s,r){let o;const a=Oi({actions:{}},t),l={deep:!0};let c,u,h=[],d=[],f;const m=i.state.value[n];!r&&!m&&(i.state.value[n]={});let x;function g(C){let v;c=u=!1,typeof C=="function"?(C(i.state.value[n]),v={type:Fr.patchFunction,storeId:n,events:f}):(Gl(i.state.value[n],C),v={type:Fr.patchObject,payload:C,storeId:n,events:f});const _=x=Symbol();Qd().then(()=>{x===_&&(c=!0)}),u=!0,Ts(h,v,i.state.value[n])}const p=r?function(){const{state:v}=t,_=v?v():{};this.$patch(P=>{Oi(P,_)})}:Gf;function T(){o.stop(),h=[],d=[],i._s.delete(n)}const w=(C,v="")=>{if(oh in C)return C[ja]=v,C;const _=function(){Ta(i);const P=Array.from(arguments),O=[],D=[];function N(J){O.push(J)}function $(J){D.push(J)}Ts(d,{args:P,name:_[ja],store:I,after:N,onError:$});let H;try{H=C.apply(this&&this.$id===n?this:I,P)}catch(J){throw Ts(D,J),J}return H instanceof Promise?H.then(J=>(Ts(O,J),J)).catch(J=>(Ts(D,J),Promise.reject(J))):(Ts(O,H),H)};return _[oh]=!0,_[ja]=v,_},M={_p:i,$id:n,$onAction:rh.bind(null,d),$patch:g,$reset:p,$subscribe(C,v={}){const _=rh(h,C,v.detached,()=>P()),P=o.run(()=>qn(()=>i.state.value[n],O=>{(v.flush==="sync"?u:c)&&C({storeId:n,type:Fr.direct,events:f},O)},Oi({},l,v)));return _},$dispose:T},I=eo(M);i._s.set(n,I);const U=(i._a&&i._a.runWithContext||M0)(()=>i._e.run(()=>(o=Ud()).run(()=>e({action:w}))));for(const C in U){const v=U[C];if(Ct(v)&&!S0(v)||Mi(v))r||(m&&w0(v)&&(Ct(v)?v.value=m[C]:Gl(v,m[C])),i.state.value[n][C]=v);else if(typeof v=="function"){const _=w(v,C);U[C]=_,a.actions[C]=v}}return Oi(I,U),Oi(nt(I),U),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:C=>{g(v=>{Oi(v,C)})}}),i._p.forEach(C=>{Oi(I,o.run(()=>C({store:I,app:i._a,pinia:i,options:a})))}),m&&r&&t.hydrate&&t.hydrate(I.$state,m),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function T0(n,e,t){let i,s;const r=typeof e=="function";i=n,s=r?t:e;function o(a,l){const c=Fm();return a=a||(c?Lr(Hf,null):null),a&&Ta(a),a=zf,a._s.has(i)||(r?Vf(i,e,s,a):E0(i,s,a)),a._s.get(i)}return o.$id=i,o}const A0={class:"top-toolbar"},C0={class:"toolbar-controls"},R0={class:"toolbar-group"},P0={class:"zoom-display"},L0={class:"zoom-value"},D0={class:"toolbar-group"},I0={class:"toolbar-group"},U0={class:"toolbar-group"},F0=["title"],N0={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O0={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k0=un({__name:"TopToolbar",props:{zoom:{},viewPreset:{},autoRotate:{type:Boolean},showGrid:{type:Boolean},isDark:{type:Boolean}},emits:["zoom-in","zoom-out","zoom-fit","view-preset","toggle-auto-rotate","toggle-grid","toggle-theme"],setup(n){return(e,t)=>(ue(),he("div",A0,[t[25]||(t[25]=Mn('<div class="logo-section" data-v-fdbab8bf><div class="logo-icon" data-v-fdbab8bf><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M3 3H21V21H3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M3 9H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M9 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M15 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3 15H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path></svg></div><h1 class="title" data-v-fdbab8bf>Bungkus Indonesia</h1></div>',1)),y("div",C0,[t[21]||(t[21]=Mn('<div class="toolbar-group" data-v-fdbab8bf><button class="toolbar-btn" disabled="true" title="Undo (Ctrl+Z)" data-v-fdbab8bf><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M4 6L2 8L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M2 8H10C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg></button><button class="toolbar-btn" disabled="true" title="Redo (Ctrl+Y)" data-v-fdbab8bf><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M12 6L14 8L12 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M14 8H6C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg></button></div><div class="toolbar-divider" data-v-fdbab8bf></div>',2)),y("div",R0,[y("button",{class:"toolbar-btn",onClick:t[0]||(t[0]=i=>e.$emit("zoom-out")),title:"Zoom Out (-)"},[...t[10]||(t[10]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),y("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"})],-1)])]),y("div",P0,[y("span",L0,be(n.zoom)+"%",1)]),y("button",{class:"toolbar-btn",onClick:t[1]||(t[1]=i=>e.$emit("zoom-in")),title:"Zoom In (+)"},[...t[11]||(t[11]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),y("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),y("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"})],-1)])]),y("button",{class:"toolbar-btn",onClick:t[2]||(t[2]=i=>e.$emit("zoom-fit")),title:"Fit to Screen (Space)"},[...t[12]||(t[12]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M5 5L3 3M5 11L3 13M11 5L13 3M11 11L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),y("rect",{x:"4",y:"4",width:"8",height:"8",rx:"1",stroke:"currentColor","stroke-width":"1.5"})],-1)])])]),t[22]||(t[22]=y("div",{class:"toolbar-divider"},null,-1)),y("div",D0,[y("button",{class:ot(["toolbar-btn",{active:n.viewPreset==="front"}]),onClick:t[3]||(t[3]=i=>e.$emit("view-preset","front")),title:"Front View (1)"},[...t[13]||(t[13]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("rect",{x:"3",y:"3",width:"10",height:"10",rx:"1",stroke:"currentColor","stroke-width":"1.5"}),y("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5"}),y("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2),y("button",{class:ot(["toolbar-btn",{active:n.viewPreset==="back"}]),onClick:t[4]||(t[4]=i=>e.$emit("view-preset","back")),title:"Back View (2)"},[...t[14]||(t[14]=[Mn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></rect><path d="M8 3V13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><circle cx="8" cy="8" r="1" fill="currentColor" data-v-fdbab8bf></circle></svg>',1)])],2),y("button",{class:ot(["toolbar-btn",{active:n.viewPreset==="top"}]),onClick:t[5]||(t[5]=i=>e.$emit("view-preset","top")),title:"Top View (3)"},[...t[15]||(t[15]=[Mn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></rect><path d="M8 3V13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M5 11L11 5" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path></svg>',1)])],2),y("button",{class:ot(["toolbar-btn",{active:n.viewPreset==="isometric"}]),onClick:t[6]||(t[6]=i=>e.$emit("view-preset","isometric")),title:"Isometric View (4)"},[...t[16]||(t[16]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org2000/svg"},[y("path",{d:"M3 13L8 3L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),y("path",{d:"M3 13H13",stroke:"currentColor","stroke-width":"1.5"}),y("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2)]),t[23]||(t[23]=y("div",{class:"toolbar-divider"},null,-1)),y("div",I0,[y("button",{class:ot(["toolbar-btn",{active:n.autoRotate}]),onClick:t[7]||(t[7]=i=>e.$emit("toggle-auto-rotate")),title:"Auto Rotate (R)"},[...t[17]||(t[17]=[Mn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></circle><path d="M8 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3 8H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg>',1)])],2),y("button",{class:ot(["toolbar-btn",{active:n.showGrid}]),onClick:t[8]||(t[8]=i=>e.$emit("toggle-grid")),title:"Toggle Grid (G)"},[...t[18]||(t[18]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",stroke:"currentColor","stroke-width":"1.5"}),y("path",{d:"M8 2V14",stroke:"currentColor","stroke-width":"1.5"}),y("path",{d:"M2 8H14",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2)]),t[24]||(t[24]=y("div",{class:"toolbar-divider"},null,-1)),y("div",U0,[y("button",{class:"toolbar-btn",onClick:t[9]||(t[9]=i=>e.$emit("toggle-theme")),title:n.isDark?"Switch to Light Theme":"Switch to Dark Theme"},[n.isDark?(ue(),he("svg",N0,[...t[19]||(t[19]=[Mn('<circle cx="8" cy="8" r="4" fill="currentColor" data-v-fdbab8bf></circle><path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path>',9)])])):(ue(),he("svg",O0,[...t[20]||(t[20]=[Mn('<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path>',9)])]))],8,F0)])])]))}}),vn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},B0=vn(k0,[["__scopeId","data-v-fdbab8bf"]]),Vl=[{id:"paper-cup",name:"Gelas Plastik atau Gelas Kertas",category:"cup",thumbnail:"/templates/cup-paper.jpg",description:"Gelas kertas berkualitas tinggi untuk minuman panas dan dingin.",geometry:{type:"cup",dimensions:{width:2.5,height:2.5,depth:1.2,radiusTop:1.2,radiusBottom:.9,radialSegments:32,heightSegments:8}},defaultMaterial:{type:"glossy",color:"#ffffff",roughness:.3,metalness:.1},faces:[{id:"label",name:"Area Label",uvIndex:0,textureSize:{width:6.6,height:1.75},canReceiveTexture:!0},{id:"body",name:"Badan Gelas",uvIndex:1,textureSize:{width:6.6,height:2.5},canReceiveTexture:!1}],tags:["Panas & Dingin","Food Grade","Dapat Dikustomisasi"]},{id:"paper-bag",name:"Paper Bag / Tas Kertas",category:"bag",thumbnail:"/templates/bag-paper.jpg",description:"Tas kertas belanja dengan handle untuk kemasan retail.",geometry:{type:"bag",dimensions:{width:2.5,height:3.5,depth:1.2,handleRadius:.1,handleHeight:.3}},defaultMaterial:{type:"matte",color:"#d7ccc8",roughness:.9,metalness:0},faces:[{id:"front",name:"Panel Depan",uvIndex:0,textureSize:{width:2.5,height:3.5},canReceiveTexture:!0},{id:"back",name:"Panel Belakang",uvIndex:1,textureSize:{width:2.5,height:3.5},canReceiveTexture:!0},{id:"left",name:"Sisi Kiri",uvIndex:2,textureSize:{width:1.2,height:3.5},canReceiveTexture:!0},{id:"right",name:"Sisi Kanan",uvIndex:3,textureSize:{width:1.2,height:3.5},canReceiveTexture:!0}],tags:["Retail","Eco-Friendly","Dapat Didaur Ulang"]},{id:"food-container",name:"Food Container / Wadah Makanan",category:"container",thumbnail:"/templates/container-food.jpg",description:"Wadah makanan praktis dengan tutup untuk takeaway.",geometry:{type:"container",dimensions:{width:3,height:1.2,depth:2.5,lidThickness:.12}},defaultMaterial:{type:"matte",color:"#ffffff",roughness:.6,metalness:.1},faces:[{id:"lid",name:"Tutup Atas",uvIndex:0,textureSize:{width:3.06,height:2.55},canReceiveTexture:!0},{id:"front",name:"Panel Depan",uvIndex:1,textureSize:{width:3,height:1.2},canReceiveTexture:!0},{id:"back",name:"Panel Belakang",uvIndex:2,textureSize:{width:3,height:1.2},canReceiveTexture:!0},{id:"left",name:"Sisi Kiri",uvIndex:3,textureSize:{width:2.5,height:1.2},canReceiveTexture:!0},{id:"right",name:"Sisi Kanan",uvIndex:4,textureSize:{width:2.5,height:1.2},canReceiveTexture:!0}],tags:["Takeaway","Microwave Safe","Kedap Udara"]},{id:"paper-bowl",name:"Paper Bowl / Mangkok Kertas",category:"bowl",thumbnail:"/templates/bowl-paper.jpg",description:"Mangkok kertas untuk makanan berkuah seperti sup dan mie.",geometry:{type:"bowl",dimensions:{width:2.5,height:1.8,depth:1.5,radiusTop:1.2,radiusBottom:.6,thickness:.09,segments:32}},defaultMaterial:{type:"matte",color:"#f5f5f5",roughness:.8,metalness:0},faces:[{id:"wrap",name:"Area Label",uvIndex:0,textureSize:{width:5.65,height:1.44},canReceiveTexture:!0},{id:"body",name:"Badan Mangkok",uvIndex:1,textureSize:{width:5.65,height:1.8},canReceiveTexture:!1}],tags:["Makanan Berkuah","Food Grade","Tahan Panas"]},{id:"standing-pouch",name:"Standing Pouch / Kemasan Berdiri",category:"pouch",thumbnail:"/templates/pouch-standing.jpg",description:"Kemasan fleksibel yang dapat berdiri sendiri untuk produk cair atau bubuk.",geometry:{type:"pouch",dimensions:{width:2.8,height:4,depth:1,curveHeight:.6,segments:32}},defaultMaterial:{type:"matte",color:"#ffffff",roughness:.7,metalness:.1},faces:[{id:"front",name:"Panel Depan",uvIndex:0,textureSize:{width:2.8,height:4},canReceiveTexture:!0},{id:"back",name:"Panel Belakang",uvIndex:1,textureSize:{width:2.8,height:4},canReceiveTexture:!0}],tags:["Flexible","Standing","Resealable"]},{id:"takeaway-box",name:"Takeaway Box / Kotak Bawa Pulang",category:"takeaway",thumbnail:"/templates/box-takeaway.jpg",description:"Kotak makanan dengan tutup flip-top untuk takeaway.",geometry:{type:"takeaway",dimensions:{width:2.5,height:1.5,depth:2.5,lidThickness:.15,hingeAngle:.26}},defaultMaterial:{type:"matte",color:"#f5f5dc",roughness:.85,metalness:0},faces:[{id:"lid",name:"Tutup Atas",uvIndex:0,textureSize:{width:2.55,height:2.55},canReceiveTexture:!0},{id:"front",name:"Panel Depan",uvIndex:1,textureSize:{width:2.5,height:1.5},canReceiveTexture:!0},{id:"back",name:"Panel Belakang",uvIndex:2,textureSize:{width:2.5,height:1.5},canReceiveTexture:!0},{id:"left",name:"Sisi Kiri",uvIndex:3,textureSize:{width:2.5,height:1.5},canReceiveTexture:!0},{id:"right",name:"Sisi Kanan",uvIndex:4,textureSize:{width:2.5,height:1.5},canReceiveTexture:!0}],tags:["Takeaway","Cardboard","Ventilated"]},{id:"perfume-bottle",name:"Perfume Bottle / Botol Parfum",category:"perfume",thumbnail:"/templates/bottle-perfume.jpg",description:"Botol parfum elegan dengan tampilan kristal/glass.",geometry:{type:"perfume",dimensions:{width:1.5,height:4.5,depth:1.5,baseRadius:.8,neckRadius:.3,bodyRadius:1,neckHeight:.8,segments:32}},defaultMaterial:{type:"glossy",color:"#ffffff",roughness:.05,metalness:.1},faces:[{id:"label",name:"Area Label",uvIndex:0,textureSize:{width:4.4,height:2.4},canReceiveTexture:!0},{id:"body",name:"Badan Botol",uvIndex:1,textureSize:{width:6.28,height:4.5},canReceiveTexture:!1}],tags:["Luxury","Glass Look","Elegant"]}],z0={class:"panel-header"},H0={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G0={key:0,d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},V0={key:1,d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},W0={key:0,class:"panel-content"},$0={class:"category-tabs"},X0=["onClick"],j0={class:"search-section"},q0={class:"search-input-wrapper"},Y0={class:"template-grid"},K0=["onClick"],Z0={class:"template-thumbnail"},J0={key:0,class:"premium-badge"},Q0={class:"template-info"},ev={class:"template-name"},tv={class:"template-dimensions"},nv={class:"template-tags"},iv={key:0,class:"template-tag-more"},sv={key:0,class:"empty-state"},rv={key:1,class:"collapsed-content"},ov=un({__name:"LeftPanel",props:{selectedTemplate:{}},emits:["select-template"],setup(n,{emit:e}){const t=e,i=ye(!1),s=ye("all"),r=ye(""),o=[{id:"all",name:"All"},{id:"boxes",name:"Boxes"},{id:"bottles",name:"Bottles"},{id:"bags",name:"Bags"},{id:"tubes",name:"Tubes"},{id:"custom",name:"Custom"}],a=Vl.map(d=>{var f;return{...d,dimensions:(f=d.geometry)!=null&&f.dimensions?`${d.geometry.dimensions.width||d.geometry.dimensions.radiusTop||"?"}×${d.geometry.dimensions.height}×${d.geometry.dimensions.depth||d.geometry.dimensions.radiusBottom||"?"} cm`:"",tags:d.tags||[],isPremium:!1}}),l=Bt(()=>{let d=a;if(s.value!=="all"&&(d=d.filter(f=>f.category===s.value)),r.value.trim()){const f=r.value.toLowerCase();d=d.filter(m=>m.name.toLowerCase().includes(f)||m.tags.some(x=>x.toLowerCase().includes(f)))}return d}),c=()=>{i.value=!i.value},u=d=>{t("select-template",d)},h=()=>{};return(d,f)=>(ue(),he("div",{class:ot(["left-panel",{collapsed:i.value}])},[y("div",z0,[y("button",{class:"collapse-btn",onClick:c},[(ue(),he("svg",H0,[i.value?(ue(),he("path",G0)):(ue(),he("path",V0))]))]),f[1]||(f[1]=y("h3",{class:"panel-title"},"Template Gallery",-1))]),i.value?(ue(),he("div",rv,[y("button",{class:"expand-btn",onClick:c,title:"Expand panel"},[...f[6]||(f[6]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),f[7]||(f[7]=y("div",{class:"collapsed-label"},"Templates",-1))])):(ue(),he("div",W0,[y("div",$0,[(ue(),he(Mt,null,Un(o,m=>y("button",{key:m.id,class:ot(["category-tab",{active:s.value===m.id}]),onClick:x=>s.value=m.id},be(m.name),11,X0)),64))]),y("div",j0,[y("div",q0,[f[2]||(f[2]=y("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"search-icon"},[y("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor","stroke-width":"1.5"}),y("path",{d:"M10 10L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})],-1)),Gi(y("input",{"onUpdate:modelValue":f[0]||(f[0]=m=>r.value=m),type:"text",placeholder:"Search templates...",class:"search-input",onInput:h},null,544),[[Vi,r.value]])])]),y("div",Y0,[(ue(!0),he(Mt,null,Un(l.value,m=>{var x;return ue(),he("div",{key:m.id,class:ot(["template-item",{active:((x=n.selectedTemplate)==null?void 0:x.id)===m.id}]),onClick:g=>u(m)},[y("div",Z0,[f[4]||(f[4]=Mn('<div class="template-preview" data-v-240518e9><div class="box-preview" data-v-240518e9><div class="box-front" data-v-240518e9></div><div class="box-top" data-v-240518e9></div><div class="box-side" data-v-240518e9></div></div></div>',1)),m.isPremium?(ue(),he("div",J0,[...f[3]||(f[3]=[y("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z",fill:"currentColor",stroke:"currentColor","stroke-width":"0.5"})],-1)])])):tt("",!0)]),y("div",Q0,[y("h4",ev,be(m.name),1),y("p",tv,be(m.dimensions),1),y("div",nv,[(ue(!0),he(Mt,null,Un(m.tags.slice(0,2),g=>(ue(),he("span",{key:g,class:"template-tag"},be(g),1))),128)),m.tags.length>2?(ue(),he("span",iv," +"+be(m.tags.length-2),1)):tt("",!0)])])],10,K0)}),128))]),l.value.length===0?(ue(),he("div",sv,[...f[5]||(f[5]=[Mn('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="empty-icon" data-v-240518e9><rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="2" data-v-240518e9></rect><path d="M16 16H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-240518e9></path><path d="M16 24H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-240518e9></path><path d="M16 32H24" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-240518e9></path></svg><p class="empty-text" data-v-240518e9>No templates found</p><p class="empty-subtext" data-v-240518e9>Try a different search term</p>',3)])])):tt("",!0)]))],2))}}),av=vn(ov,[["__scopeId","data-v-240518e9"]]),lv={class:"design-uploader"},cv={class:"upload-text"},uv={class:"text-lg font-semibold text-gray-800"},hv={class:"text-sm text-gray-500 mt-1"},dv={key:0,class:"error-message"},fv={class:"flex items-center gap-2"},pv={class:"text-sm font-medium text-red-700"},mv={key:1,class:"image-preview"},gv={class:"preview-image-container"},vv=["src","alt"],_v={key:0,class:"loading-overlay"},xv={key:1,class:"image-info"},yv={class:"info-grid"},Mv={class:"info-item"},bv={class:"info-value"},wv={key:0,class:"info-item"},Sv={class:"info-value"},Ev={class:"info-item"},Tv={class:"info-value"},Av={key:2,class:"texture-fit-options"},Cv={class:"fit-buttons"},Rv=["onClick"],Pv={class:"fit-icon"},Lv={class:"fit-label"},Dv={key:3,class:"apply-buttons"},Iv=["disabled"],ah=10*1024*1024,Uv=un({__name:"DesignUploader",props:{selectedFace:{default:null}},emits:["upload","apply-to-face","apply-to-all","clear"],setup(n,{emit:e}){const t=n,i=e,s=ye(null),r=ye(null),o=ye(!1),a=ye(null),l=ye(null),c=ye(null),u=ye(!1),h=ye(null),d=ye("cover"),f=["image/png","image/jpeg","image/jpg","image/svg+xml","image/webp"],m=[{value:"stretch",label:"Stretch",icon:"↔️"},{value:"contain",label:"Contain",icon:"📐"},{value:"cover",label:"Cover",icon:"🖼️"}],x=D=>D.size>ah?(c.value=`File too large. Maximum size is ${v(ah)}.`,!1):f.includes(D.type)?(c.value=null,!0):(c.value="Invalid file type. Please upload PNG, JPG, JPEG, SVG, or WebP.",!1),g=D=>{x(D)&&(a.value=D,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL(D),h.value=null,u.value=!0,i("upload",D))},p=D=>{D.preventDefault(),o.value=!0},T=D=>{D.preventDefault(),o.value=!1},w=D=>{var H;D.preventDefault(),o.value=!1;const N=(H=D.dataTransfer)==null?void 0:H.files;if(!(N!=null&&N.length))return;const $=N[0];g($)},M=D=>{var H;const N=D.target,$=(H=N.files)==null?void 0:H[0];$&&(g($),N.value="")},I=()=>{var D;(D=r.value)==null||D.click()},L=()=>{l.value&&(URL.revokeObjectURL(l.value),l.value=null),a.value=null,h.value=null,c.value=null,i("clear")},U=D=>{const N=D.target;u.value=!1,h.value={dimensions:{width:N.naturalWidth,height:N.naturalHeight}}},C=()=>{u.value=!1,c.value="Failed to load image preview."},v=D=>{if(D===0)return"0 Bytes";const N=1024,$=["Bytes","KB","MB","GB"],H=Math.floor(Math.log(D)/Math.log(N));return parseFloat((D/Math.pow(N,H)).toFixed(2))+" "+$[H]},_=D=>{d.value=D},P=()=>{!a.value||!t.selectedFace||i("apply-to-face",{face:t.selectedFace,file:a.value,fit:d.value})},O=()=>{a.value&&i("apply-to-all",{file:a.value,fit:d.value})};return Ai(()=>{l.value&&URL.revokeObjectURL(l.value)}),(D,N)=>{var $,H,J;return ue(),he("div",lv,[y("div",{ref_key:"dropZoneRef",ref:s,class:ot(["drop-zone",{"drag-over":o.value,"has-file":a.value}]),onDragover:jt(p,["prevent"]),onDragleave:jt(T,["prevent"]),onDrop:jt(w,["prevent"])},[N[1]||(N[1]=y("div",{class:"upload-icon"},[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})])],-1)),y("div",cv,[y("p",uv,be(a.value?a.value.name:"Drag & drop your design here"),1),y("p",hv,be(a.value?"Click to change or drop another file":"or click to browse"),1),N[0]||(N[0]=y("p",{class:"text-xs text-gray-400 mt-2"}," Supports: PNG, JPG, JPEG, SVG, WebP • Max 10MB ",-1))]),y("input",{ref_key:"fileInputRef",ref:r,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:M},null,544),y("button",{type:"button",class:"browse-btn",onClick:I}," Browse Files ")],34),c.value?(ue(),he("div",dv,[y("div",fv,[N[2]||(N[2]=y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),y("span",pv,be(c.value),1)])])):tt("",!0),l.value?(ue(),he("div",mv,[y("div",{class:"preview-header"},[N[4]||(N[4]=y("h3",{class:"text-sm font-medium text-gray-700"},"Preview",-1)),y("button",{type:"button",class:"clear-btn",onClick:L},[...N[3]||(N[3]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])]),y("div",gv,[y("img",{src:l.value,alt:(($=a.value)==null?void 0:$.name)||"Preview",class:"preview-image",onLoad:U,onError:C},null,40,vv),u.value?(ue(),he("div",_v,[...N[5]||(N[5]=[y("div",{class:"loading-spinner"},null,-1),y("p",{class:"loading-text"},"Loading preview...",-1)])])):tt("",!0),h.value?(ue(),he("div",xv,[y("div",yv,[y("div",Mv,[N[6]||(N[6]=y("span",{class:"info-label"},"Size:",-1)),y("span",bv,be(v(((H=a.value)==null?void 0:H.size)||0)),1)]),h.value.dimensions?(ue(),he("div",wv,[N[7]||(N[7]=y("span",{class:"info-label"},"Dimensions:",-1)),y("span",Sv,be(h.value.dimensions.width)+" × "+be(h.value.dimensions.height),1)])):tt("",!0),y("div",Ev,[N[8]||(N[8]=y("span",{class:"info-label"},"Type:",-1)),y("span",Tv,be(((J=a.value)==null?void 0:J.type)||"Unknown"),1)])])])):tt("",!0)])])):tt("",!0),l.value?(ue(),he("div",Av,[N[9]||(N[9]=y("h3",{class:"text-sm font-medium text-gray-700 mb-3"},"Texture Fit",-1)),y("div",Cv,[(ue(),he(Mt,null,Un(m,q=>y("button",{key:q.value,type:"button",class:ot(["fit-button",{active:d.value===q.value}]),onClick:V=>_(q.value)},[y("span",Pv,be(q.icon),1),y("span",Lv,be(q.label),1)],10,Rv)),64))])])):tt("",!0),l.value?(ue(),he("div",Dv,[y("button",{type:"button",class:"apply-btn apply-selected",disabled:!n.selectedFace,onClick:P},[...N[10]||(N[10]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),en(" Apply to Selected Face ",-1)])],8,Iv),y("button",{type:"button",class:"apply-btn apply-all",onClick:O},[...N[11]||(N[11]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"})],-1),en(" Apply to All Faces ",-1)])])])):tt("",!0)])}}}),Fv=vn(Uv,[["__scopeId","data-v-0e73d30a"]]),Nv=["title"],Ov={key:0,class:"texture-preview"},kv=["src","alt"],Bv={class:"texture-overlay"},zv={class:"texture-label"},Hv={key:1,class:"empty-face"},Gv={class:"face-icon"},Vv={class:"face-label"},Wv={key:2,class:"selection-indicator"},$v=un({__name:"FaceButton",props:{face:{},isSelected:{type:Boolean},textureUrl:{}},emits:["click"],setup(n){const e=n,t=()=>({front:"⬆️",back:"⬇️",left:"⬅️",right:"➡️",top:"🔺",bottom:"🔻"})[e.face],i=()=>e.face.charAt(0).toUpperCase()+e.face.slice(1);return(s,r)=>(ue(),he("button",{type:"button",class:ot(["face-button",{selected:n.isSelected,"has-texture":n.textureUrl,[n.face]:!0}]),onClick:r[0]||(r[0]=o=>s.$emit("click")),title:`${n.face.charAt(0).toUpperCase()+n.face.slice(1)} Face`},[n.textureUrl?(ue(),he("div",Ov,[y("img",{src:n.textureUrl,alt:`${n.face} texture`,class:"texture-image"},null,8,kv),y("div",Bv,[y("span",zv,be(i()),1)])])):(ue(),he("div",Hv,[y("div",Gv,be(t()),1),y("div",Vv,be(i()),1)])),n.isSelected?(ue(),he("div",Wv,[...r[1]||(r[1]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):tt("",!0)],10,Nv))}}),As=vn($v,[["__scopeId","data-v-fde2d244"]]),Xv={class:"face-selector"},jv={class:"selector-header"},qv={class:"text-sm text-gray-500"},Yv={class:"box-diagram"},Kv={class:"face-row top-row"},Zv={class:"face-row middle-row"},Jv={class:"middle-faces"},Qv={class:"face-row bottom-row"},e_={class:"thumbnails-grid"},t_=["onClick"],n_={class:"thumbnail-container"},i_={key:0,class:"texture-preview"},s_=["src","alt"],r_={class:"thumbnail-overlay"},o_=["onClick"],a_={key:1,class:"empty-thumbnail"},l_={class:"empty-icon"},c_={class:"face-label"},u_={class:"label-text"},h_={key:0,class:"texture-indicator"},d_={key:0,class:"face-actions"},f_={class:"actions-header"},p_={class:"font-medium text-gray-800"},m_={class:"action-buttons"},g_=["disabled"],v_=["disabled"],__={class:"texture-summary"},x_={class:"summary-item"},y_={class:"summary-value"},M_={class:"summary-item"},b_={class:"summary-value"},w_=un({__name:"FaceSelector",props:{selectedFace:{default:null},textures:{default:()=>({front:null,back:null,left:null,right:null,top:null,bottom:null})}},emits:["select","remove-texture","copy-to-others","reset-all"],setup(n,{emit:e}){const t=n,i=e,s=["front","back","left","right","top","bottom"],r=Bt(()=>s.filter(d=>t.textures[d]).length),o=d=>({front:"⬆️",back:"⬇️",left:"⬅️",right:"➡️",top:"🔺",bottom:"🔻"})[d],a=d=>t.textures[d]||null,l=d=>{i("select",d)},c=d=>{i("remove-texture",d)},u=()=>{t.selectedFace&&i("copy-to-others",t.selectedFace)},h=()=>{i("reset-all")};return(d,f)=>(ue(),he("div",Xv,[y("div",jv,[f[7]||(f[7]=y("h3",{class:"text-lg font-semibold text-gray-800"},"Face Selection",-1)),y("div",qv,be(n.selectedFace?`Selected: ${n.selectedFace}`:"Click a face to select"),1)]),y("div",Yv,[y("div",Kv,[f[8]||(f[8]=y("div",{class:"face-placeholder"},null,-1)),et(As,{face:"top","is-selected":n.selectedFace==="top","texture-url":a("top"),onClick:f[0]||(f[0]=m=>l("top"))},null,8,["is-selected","texture-url"]),f[9]||(f[9]=y("div",{class:"face-placeholder"},null,-1))]),y("div",Zv,[et(As,{face:"left","is-selected":n.selectedFace==="left","texture-url":a("left"),onClick:f[1]||(f[1]=m=>l("left"))},null,8,["is-selected","texture-url"]),y("div",Jv,[et(As,{face:"front","is-selected":n.selectedFace==="front","texture-url":a("front"),onClick:f[2]||(f[2]=m=>l("front"))},null,8,["is-selected","texture-url"]),et(As,{face:"back","is-selected":n.selectedFace==="back","texture-url":a("back"),onClick:f[3]||(f[3]=m=>l("back"))},null,8,["is-selected","texture-url"])]),et(As,{face:"right","is-selected":n.selectedFace==="right","texture-url":a("right"),onClick:f[4]||(f[4]=m=>l("right"))},null,8,["is-selected","texture-url"])]),y("div",Qv,[f[10]||(f[10]=y("div",{class:"face-placeholder"},null,-1)),et(As,{face:"bottom","is-selected":n.selectedFace==="bottom","texture-url":a("bottom"),onClick:f[5]||(f[5]=m=>l("bottom"))},null,8,["is-selected","texture-url"]),f[11]||(f[11]=y("div",{class:"face-placeholder"},null,-1))])]),y("div",e_,[(ue(),he(Mt,null,Un(s,m=>y("div",{key:m,class:ot(["thumbnail-item",{selected:n.selectedFace===m}]),onClick:x=>l(m)},[y("div",n_,[a(m)?(ue(),he("div",i_,[y("img",{src:a(m),alt:`${m} texture`,class:"thumbnail-image"},null,8,s_),y("div",r_,[y("button",{type:"button",class:"remove-btn",onClick:jt(x=>c(m),["stop"]),title:"Remove texture"},[...f[12]||(f[12]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)])],8,o_)])])):(ue(),he("div",a_,[y("div",l_,be(o(m)),1)])),y("div",c_,[y("span",u_,be(m.charAt(0).toUpperCase()+m.slice(1)),1),a(m)?(ue(),he("span",h_,[...f[13]||(f[13]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 text-green-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):tt("",!0)])])],10,t_)),64))]),n.selectedFace?(ue(),he("div",d_,[y("div",f_,[y("h4",p_,be(n.selectedFace.charAt(0).toUpperCase()+n.selectedFace.slice(1))+" Face Actions ",1)]),y("div",m_,[y("button",{type:"button",class:"action-btn reset-face",disabled:!a(n.selectedFace),onClick:f[6]||(f[6]=m=>c(n.selectedFace))},[...f[14]||(f[14]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),en(" Clear Texture ",-1)])],8,g_),y("button",{type:"button",class:"action-btn copy-face",disabled:!a(n.selectedFace),onClick:u},[...f[15]||(f[15]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),y("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})],-1),en(" Copy to Others ",-1)])],8,v_)]),y("div",{class:"global-actions"},[y("button",{type:"button",class:"global-btn reset-all",onClick:h},[...f[16]||(f[16]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"})],-1),en(" Reset All Textures ",-1)])])])])):tt("",!0),y("div",__,[y("div",x_,[f[17]||(f[17]=y("span",{class:"summary-label"},"Textured Faces:",-1)),y("span",y_,be(r.value)+" / "+be(s.length),1)]),y("div",M_,[f[18]||(f[18]=y("span",{class:"summary-label"},"Selected Face:",-1)),y("span",b_,be(n.selectedFace?n.selectedFace.charAt(0).toUpperCase()+n.selectedFace.slice(1):"None"),1)])])]))}}),S_=vn(w_,[["__scopeId","data-v-0bd4bfed"]]),E_="modulepreload",T_=function(n){return"/virtual-tryon-packaging/"+n},lh={},A_=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=T_(l),l in lh)return;lh[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":E_,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="170",Js={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C_=0,ch=1,R_=2,Wf=1,$f=2,di=3,qi=0,cn=1,kt=2,$i=0,Qs=1,uh=2,hh=3,dh=4,P_=5,ds=100,L_=101,D_=102,I_=103,U_=104,F_=200,N_=201,O_=202,k_=203,Wl=204,$l=205,B_=206,z_=207,H_=208,G_=209,V_=210,W_=211,$_=212,X_=213,j_=214,Xl=0,jl=1,ql=2,ir=3,Yl=4,Kl=5,Zl=6,Jl=7,Xf=0,q_=1,Y_=2,Xi=0,K_=1,Z_=2,J_=3,jf=4,Q_=5,ex=6,tx=7,qf=300,sr=301,rr=302,oa=303,Ql=304,Aa=306,ec=1e3,_i=1001,tc=1002,gn=1003,nx=1004,uo=1005,nn=1006,qa=1007,Wi=1008,Zn=1009,Yf=1010,Kf=1011,qr=1012,Kc=1013,vs=1014,Sn=1015,xi=1016,Zc=1017,Jc=1018,or=1020,Zf=35902,Jf=1021,Qc=1022,En=1023,Qf=1024,ep=1025,er=1026,ar=1027,tp=1028,eu=1029,np=1030,tu=1031,nu=1033,Xo=33776,jo=33777,qo=33778,Yo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,vc=37816,_c=37817,xc=37818,yc=37819,Mc=37820,bc=37821,Ko=36492,wc=36494,Sc=36495,ip=36283,Ec=36284,Tc=36285,Ac=36286,ix=3200,sx=3201,sp=0,rx=1,Hi="",ln="srgb",bs="srgb-linear",Ca="linear",pt="srgb",Cs=7680,fh=519,ox=512,ax=513,lx=514,rp=515,cx=516,ux=517,hx=518,dx=519,ph=35044,mh="300 es",yi=2e3,aa=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,Cc=180/Math.PI;function ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function fx(n,e){return(n%e+e)%e}function Ya(n,e,t){return(1-t)*n+t*e}function _r(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const px={DEG2RAD:Nr};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],T=s[1],w=s[4],M=s[7],I=s[2],L=s[5],U=s[8];return r[0]=o*x+a*T+l*I,r[3]=o*g+a*w+l*L,r[6]=o*p+a*M+l*U,r[1]=c*x+u*T+h*I,r[4]=c*g+u*w+h*L,r[7]=c*p+u*M+h*U,r[2]=d*x+f*T+m*I,r[5]=d*g+f*w+m*L,r[8]=d*p+f*M+m*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Je;function op(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mx(){const n=Yr("canvas");return n.style.display="block",n}const gh={};function Er(n){n in gh||(gh[n]=!0,console.warn(n))}function gx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function vx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _x(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?Ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const vh=[.64,.33,.3,.6,.15,.06],_h=[.2126,.7152,.0722],xh=[.3127,.329],yh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[bs]:{primaries:vh,whitePoint:xh,transfer:Ca,toXYZ:yh,fromXYZ:Mh,luminanceCoefficients:_h,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:vh,whitePoint:xh,transfer:pt,toXYZ:yh,fromXYZ:Mh,luminanceCoefficients:_h,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});let Rs;class xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Yr("canvas")),Rs.width=e.width,Rs.height=e.height;const i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;class zt extends ws{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=_i,s=_i,r=nn,o=Wi,a=En,l=Zn,c=zt.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=ur(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=qf;zt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(f+1)/2,I=(p+1)/2,L=(u+d)/4,U=(h+x)/4,C=(m+g)/4;return w>M&&w>I?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=L/i,r=U/i):M>I?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=L/s,r=C/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=U/r,s=C/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bx extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new zt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ap(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends bx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lp extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*x,T=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const I=Math.sqrt(w),L=Math.atan2(I,p*T);g=Math.sin(g*L)/I,a=Math.sin(a*L)/I}const M=a*T;if(l=l*g+d*M,c=c*g+f*M,u=u*g+m*M,h=h*g+x*M,g===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new G,bh=new _s;class io{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),fo.subVectors(this.max,xr),Ps.subVectors(e.a,xr),Ls.subVectors(e.b,xr),Ds.subVectors(e.c,xr),Li.subVectors(Ls,Ps),Di.subVectors(Ds,Ls),ns.subVectors(Ps,Ds);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ns.z,ns.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ns.z,0,-ns.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ns.y,ns.x,0];return!Qa(t,Ps,Ls,Ds,fo)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Ps,Ls,Ds,fo))?!1:(po.crossVectors(Li,Di),t=[po.x,po.y,po.z],Qa(t,Ps,Ls,Ds,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new G,new G,new G,new G,new G,new G,new G,new G],Rn=new G,ho=new io,Ps=new G,Ls=new G,Ds=new G,Li=new G,Di=new G,ns=new G,xr=new G,fo=new G,po=new G,is=new G;function Qa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sx=new io,yr=new G,el=new G;class Ra{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(el)),this.expandByPoint(yr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new G,tl=new G,mo=new G,Ii=new G,nl=new G,go=new G,il=new G;class iu{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tl.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(tl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=Ii.dot(this.direction),l=-Ii.dot(mo),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tl).addScaledVector(mo,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){nl.subVectors(t,e),go.subVectors(i,e),il.crossVectors(nl,go);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(Ii,go));if(l<0)return null;const c=a*this.direction.dot(nl.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,m,x,g){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,m,x,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ex,e,Tx)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ui.crossVectors(i,dn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ui.crossVectors(i,dn)),Ui.normalize(),vo.crossVectors(dn,Ui),s[0]=Ui.x,s[4]=vo.x,s[8]=dn.x,s[1]=Ui.y,s[5]=vo.y,s[9]=dn.y,s[2]=Ui.z,s[6]=vo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],T=i[3],w=i[7],M=i[11],I=i[15],L=s[0],U=s[4],C=s[8],v=s[12],_=s[1],P=s[5],O=s[9],D=s[13],N=s[2],$=s[6],H=s[10],J=s[14],q=s[3],V=s[7],W=s[11],le=s[15];return r[0]=o*L+a*_+l*N+c*q,r[4]=o*U+a*P+l*$+c*V,r[8]=o*C+a*O+l*H+c*W,r[12]=o*v+a*D+l*J+c*le,r[1]=u*L+h*_+d*N+f*q,r[5]=u*U+h*P+d*$+f*V,r[9]=u*C+h*O+d*H+f*W,r[13]=u*v+h*D+d*J+f*le,r[2]=m*L+x*_+g*N+p*q,r[6]=m*U+x*P+g*$+p*V,r[10]=m*C+x*O+g*H+p*W,r[14]=m*v+x*D+g*J+p*le,r[3]=T*L+w*_+M*N+I*q,r[7]=T*U+w*P+M*$+I*V,r[11]=T*C+w*O+M*H+I*W,r[15]=T*v+w*D+M*J+I*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],T=h*g*c-x*d*c+x*l*f-a*g*f-h*l*p+a*d*p,w=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,M=u*x*c-m*h*c+m*a*f-o*x*f-u*a*p+o*h*p,I=m*h*l-u*x*l-m*a*d+o*x*d+u*a*g-o*h*g,L=t*T+i*w+s*M+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=T*U,e[1]=(x*d*r-h*g*r-x*s*f+i*g*f+h*s*p-i*d*p)*U,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*p+i*l*p)*U,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*U,e[4]=w*U,e[5]=(u*g*r-m*d*r+m*s*f-t*g*f-u*s*p+t*d*p)*U,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*U,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*U,e[8]=M*U,e[9]=(m*h*r-u*x*r-m*i*f+t*x*f+u*i*p-t*h*p)*U,e[10]=(o*x*r-m*a*r+m*i*c-t*x*c-o*i*p+t*a*p)*U,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*U,e[12]=I*U,e[13]=(u*x*s-m*h*s+m*i*d-t*x*d-u*i*g+t*h*g)*U,e[14]=(m*a*s-o*x*s-m*i*l+t*x*l+o*i*g-t*a*g)*U,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,T=l*c,w=l*u,M=l*h,I=i.x,L=i.y,U=i.z;return s[0]=(1-(x+p))*I,s[1]=(f+M)*I,s[2]=(m-w)*I,s[3]=0,s[4]=(f-M)*L,s[5]=(1-(d+p))*L,s[6]=(g+T)*L,s[7]=0,s[8]=(m+w)*U,s[9]=(g-T)*U,s[10]=(1-(d+x))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/r,u=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=yi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,m;if(a===yi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===aa)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,f=(i+s)*u;let m,x;if(a===yi)m=(o+r)*h,x=-2*h;else if(a===aa)m=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Is=new G,Pn=new bt,Ex=new G(0,0,0),Tx=new G(1,1,1),Ui=new G,vo=new G,dn=new G,wh=new bt,Sh=new _s;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ax=0;const Eh=new G,Us=new _s,li=new bt,_o=new G,Mr=new G,Cx=new G,Rx=new _s,Th=new G(1,0,0),Ah=new G(0,1,0),Ch=new G(0,0,1),Rh={type:"added"},Px={type:"removed"},Fs={type:"childadded",child:null},sl={type:"childremoved",child:null};class Ht extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,t=new Jn,i=new _s,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Mr,_o,this.up):li.lookAt(_o,Mr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(li),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Px),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new G,ci=new G,rl=new G,ui=new G,Ns=new G,Os=new G,Ph=new G,ol=new G,al=new G,ll=new G,cl=new Tt,ul=new Tt,hl=new Tt;class wn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ln.subVectors(s,t),ci.subVectors(i,t),rl.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(ci),l=Ln.dot(rl),c=ci.dot(ci),u=ci.dot(rl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return cl.setScalar(0),ul.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,i),hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),ci.subVectors(e,t),Ln.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ns.subVectors(s,i),Os.subVectors(r,i),ol.subVectors(e,i);const l=Ns.dot(ol),c=Os.dot(ol);if(l<=0&&c<=0)return t.copy(i);al.subVectors(e,s);const u=Ns.dot(al),h=Os.dot(al);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ns,o);ll.subVectors(e,r);const f=Ns.dot(ll),m=Os.dot(ll);if(m>=0&&f<=m)return t.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Os,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Ph.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(Ph,a);const p=1/(g+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Ns,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=fx(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=dl(o,r,e+1/3),this.g=dl(o,r,e),this.b=dl(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=up[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return it.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Lt(Wt.r*255,0,255))*65536+Math.round(Lt(Wt.g*255,0,255))*256+Math.round(Lt(Wt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ln){it.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(xo);const i=Ya(Fi.h,xo.h,t),s=Ya(Fi.s,xo.s,t),r=Ya(Fi.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new We;We.NAMES=up;let Lx=0;class hr extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ur(),this.name="",this.blending=Qs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=$l,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==$l&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lr extends hr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vi=Dx();function Dx(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ix(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Lt(n,-65504,65504),vi.floatView[0]=n;const e=vi.uint32View[0],t=e>>23&511;return vi.baseTable[t]+((e&8388607)>>vi.shiftTable[t])}function Ux(n){const e=n>>10;return vi.uint32View[0]=vi.mantissaTable[vi.offsetTable[e]+(n&1023)]+vi.exponentTable[e],vi.floatView[0]}const yo={toHalfFloat:Ix,fromHalfFloat:Ux},Pt=new G,Mo=new ae;class Kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_r(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class hp extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dp extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fx=0;const yn=new bt,fl=new Ht,ks=new G,fn=new io,br=new io,Ot=new G;class Kt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?dp:hp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(fn.min,br.min),fn.expandByPoint(Ot),Ot.addVectors(fn.max,br.max),fn.expandByPoint(Ot)):(fn.expandByPoint(br.min),fn.expandByPoint(br.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Ot.add(ks)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new G,l[C]=new G;const c=new G,u=new G,h=new G,d=new ae,f=new ae,m=new ae,x=new G,g=new G;function p(C,v,_){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,_),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,v),m.fromBufferAttribute(r,_),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[C].add(x),a[v].add(x),a[_].add(x),l[C].add(g),l[v].add(g),l[_].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,v=T.length;C<v;++C){const _=T[C],P=_.start,O=_.count;for(let D=P,N=P+O;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const w=new G,M=new G,I=new G,L=new G;function U(C){I.fromBufferAttribute(s,C),L.copy(I);const v=a[C];w.copy(v),w.sub(I.multiplyScalar(I.dot(v))).normalize(),M.crossVectors(L,v);const P=M.dot(l[C])<0?-1:1;o.setXYZW(C,w.x,w.y,w.z,P)}for(let C=0,v=T.length;C<v;++C){const _=T[C],P=_.start,O=_.count;for(let D=P,N=P+O;D<N;D+=3)U(e.getX(D+0)),U(e.getX(D+1)),U(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Kn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new bt,ss=new iu,bo=new Ra,Dh=new G,wo=new G,So=new G,Eo=new G,pl=new G,To=new G,Ih=new G,Ao=new G;class Re extends Ht{constructor(e=new Kt,t=new lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(pl.fromBufferAttribute(h,e),o?To.addScaledVector(pl,u):To.addScaledVector(pl.sub(t),u))}t.add(To)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(bo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(bo,Dh)===null||ss.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],T=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=T,I=w;M<I;M+=3){const L=a.getX(M),U=a.getX(M+1),C=a.getX(M+2);s=Co(this,p,e,i,c,u,h,L,U,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const T=a.getX(g),w=a.getX(g+1),M=a.getX(g+2);s=Co(this,o,e,i,c,u,h,T,w,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],T=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=T,I=w;M<I;M+=3){const L=M,U=M+1,C=M+2;s=Co(this,p,e,i,c,u,h,L,U,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const T=g,w=g+1,M=g+2;s=Co(this,o,e,i,c,u,h,T,w,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Nx(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:n}}function Co(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,wo),n.getVertexPosition(l,So),n.getVertexPosition(c,Eo);const u=Nx(n,e,t,i,wo,So,Eo,Ih);if(u){const h=new G;wn.getBarycoord(Ih,wo,So,Eo,h),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,h,new ae)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,h,new ae)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};wn.getNormal(wo,So,Eo,d.normal),u.face=d,u.barycoord=h}return u}let It=class fp extends Kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function m(x,g,p,T,w,M,I,L,U,C,v){const _=M/U,P=I/C,O=M/2,D=I/2,N=L/2,$=U+1,H=C+1;let J=0,q=0;const V=new G;for(let W=0;W<H;W++){const le=W*P-D;for(let _e=0;_e<$;_e++){const He=_e*_-O;V[x]=He*T,V[g]=le*w,V[p]=N,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[p]=L>0?1:-1,u.push(V.x,V.y,V.z),h.push(_e/U),h.push(1-W/C),J+=1}}for(let W=0;W<C;W++)for(let le=0;le<U;le++){const _e=d+le+$*W,He=d+le+$*(W+1),ce=d+(le+1)+$*(W+1),me=d+(le+1)+$*W;l.push(_e,He,me),l.push(He,ce,me),q+=6}a.addGroup(f,q,v),f+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const s in i)e[s]=i[s]}return e}function Ox(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const kx={clone:cr,merge:Jt};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends hr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mp extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new G,Uh=new ae,Fh=new ae;class bn extends mp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Fh),t.subVectors(Fh,Uh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,zs=1;class Hx extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Bs,zs,e,t);s.layers=this.layers,this.add(s);const r=new bn(Bs,zs,e,t);r.layers=this.layers,this.add(r);const o=new bn(Bs,zs,e,t);o.layers=this.layers,this.add(o);const a=new bn(Bs,zs,e,t);a.layers=this.layers,this.add(a);const l=new bn(Bs,zs,e,t);l.layers=this.layers,this.add(l);const c=new bn(Bs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class gp extends zt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gx extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$i});r.uniforms.tEquirect.value=t;const o=new Re(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=nn),new Hx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ml=new G,Vx=new G,Wx=new Je;class zi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ml.subVectors(i,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wx.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Ra,Ro=new G;class su{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],T=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,g-f,M-p).normalize(),i[1].setComponents(l+r,d+c,g+f,M+p).normalize(),i[2].setComponents(l+o,d+u,g+m,M+T).normalize(),i[3].setComponents(l-o,d-u,g-m,M-T).normalize(),i[4].setComponents(l-a,d-h,g-x,M-w).normalize(),t===yi)i[5].setComponents(l+a,d+h,g+x,M+w).normalize();else if(t===aa)i[5].setComponents(a,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $x(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Et extends Kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){const T=p*d-o;for(let w=0;w<c;w++){const M=w*h-r;m.push(M,-T,0),x.push(0,0,1),g.push(w/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const w=T+c*p,M=T+c*(p+1),I=T+1+c*(p+1),L=T+1+c*p;f.push(w,M,L),f.push(M,I,L)}this.setIndex(f),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jx=`#ifdef USE_AOMAP
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
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,my=`#define PI 3.141592653589793
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
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
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
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
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
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Wy=`struct PhysicalMaterial {
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
}`,$y=`
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t1=`#if defined( USE_POINTS_UV )
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
#endif`,n1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
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
#endif`,l1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p1=`#ifdef USE_NORMALMAP
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
#endif`,m1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P1=`float getShadowMask() {
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
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,F1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
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
}`,J1=`#if DEPTH_PACKING == 3200
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
}`,Q1=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
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
}`,sM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define MATCAP
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
}`,uM=`#define MATCAP
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
}`,hM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,fM=`#define PHONG
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
}`,pM=`#define PHONG
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
}`,mM=`#define STANDARD
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
}`,gM=`#define STANDARD
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
}`,vM=`#define TOON
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
}`,_M=`#define TOON
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
}`,xM=`uniform float size;
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,bM=`uniform vec3 color;
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
}`,wM=`uniform float rotation;
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
}`,SM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Xx,alphahash_pars_fragment:jx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:Kx,alphatest_pars_fragment:Zx,aomap_fragment:Jx,aomap_pars_fragment:Qx,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:sy,iridescence_fragment:ry,bumpmap_pars_fragment:oy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:uy,color_fragment:hy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:vy,displacementmap_pars_vertex:_y,displacementmap_vertex:xy,emissivemap_fragment:yy,emissivemap_pars_fragment:My,colorspace_fragment:by,colorspace_pars_fragment:wy,envmap_fragment:Sy,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:ky,envmap_vertex:Cy,fog_vertex:Ry,fog_pars_vertex:Py,fog_fragment:Ly,fog_pars_fragment:Dy,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Uy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Gy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Wy,lights_fragment_begin:$y,lights_fragment_maps:Xy,lights_fragment_end:jy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:Qy,map_particle_fragment:e1,map_particle_pars_fragment:t1,metalnessmap_fragment:n1,metalnessmap_pars_fragment:i1,morphinstance_vertex:s1,morphcolor_vertex:r1,morphnormal_vertex:o1,morphtarget_pars_vertex:a1,morphtarget_vertex:l1,normal_fragment_begin:c1,normal_fragment_maps:u1,normal_pars_fragment:h1,normal_pars_vertex:d1,normal_vertex:f1,normalmap_pars_fragment:p1,clearcoat_normal_fragment_begin:m1,clearcoat_normal_fragment_maps:g1,clearcoat_pars_fragment:v1,iridescence_pars_fragment:_1,opaque_fragment:x1,packing:y1,premultiplied_alpha_fragment:M1,project_vertex:b1,dithering_fragment:w1,dithering_pars_fragment:S1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:A1,shadowmap_pars_vertex:C1,shadowmap_vertex:R1,shadowmask_pars_fragment:P1,skinbase_vertex:L1,skinning_pars_vertex:D1,skinning_vertex:I1,skinnormal_vertex:U1,specularmap_fragment:F1,specularmap_pars_fragment:N1,tonemapping_fragment:O1,tonemapping_pars_fragment:k1,transmission_fragment:B1,transmission_pars_fragment:z1,uv_pars_fragment:H1,uv_pars_vertex:G1,uv_vertex:V1,worldpos_vertex:W1,background_vert:$1,background_frag:X1,backgroundCube_vert:j1,backgroundCube_frag:q1,cube_vert:Y1,cube_frag:K1,depth_vert:Z1,depth_frag:J1,distanceRGBA_vert:Q1,distanceRGBA_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:sM,meshbasic_vert:rM,meshbasic_frag:oM,meshlambert_vert:aM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:hM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:vM,meshtoon_frag:_M,points_vert:xM,points_frag:yM,shadow_vert:MM,shadow_frag:bM,sprite_vert:wM,sprite_frag:SM},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Xn={basic:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([Se.points,Se.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([Se.common,Se.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([Se.sprite,Se.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Jt([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Jt([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Xn.physical={uniforms:Jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Po={r:0,b:0,g:0},os=new Jn,EM=new bt;function TM(n,e,t,i,s,r,o){const a=new We(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function x(T){let w=!1;const M=m(T);M===null?p(a,l):M&&M.isColor&&(p(M,1),w=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(T,w){const M=m(w);M&&(M.isCubeTexture||M.mapping===Aa)?(u===void 0&&(u=new Re(new It(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:cr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),os.copy(w.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(os)),u.material.toneMapped=it.getTransfer(M.colorSpace)!==pt,(h!==M||d!==M.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Re(new Et(2,2),new Ki({name:"BackgroundMaterial",uniforms:cr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,w){T.getRGB(Po,pp(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:g}}function AM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(_,P,O,D,N){let $=!1;const H=h(D,O,P);r!==H&&(r=H,c(r.object)),$=f(_,D,O,N),$&&m(_,D,O,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(_,P,O,D),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,P,O){const D=O.wireframe===!0;let N=i[_.id];N===void 0&&(N={},i[_.id]=N);let $=N[P.id];$===void 0&&($={},N[P.id]=$);let H=$[D];return H===void 0&&(H=d(l()),$[D]=H),H}function d(_){const P=[],O=[],D=[];for(let N=0;N<t;N++)P[N]=0,O[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:D,object:_,attributes:{},index:null}}function f(_,P,O,D){const N=r.attributes,$=P.attributes;let H=0;const J=O.getAttributes();for(const q in J)if(J[q].location>=0){const W=N[q];let le=$[q];if(le===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),W===void 0||W.attribute!==le||le&&W.data!==le.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function m(_,P,O,D){const N={},$=P.attributes;let H=0;const J=O.getAttributes();for(const q in J)if(J[q].location>=0){let W=$[q];W===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(W=_.instanceColor));const le={};le.attribute=W,W&&W.data&&(le.data=W.data),N[q]=le,H++}r.attributes=N,r.attributesNum=H,r.index=D}function x(){const _=r.newAttributes;for(let P=0,O=_.length;P<O;P++)_[P]=0}function g(_){p(_,0)}function p(_,P){const O=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;O[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),N[_]!==P&&(n.vertexAttribDivisor(_,P),N[_]=P)}function T(){const _=r.newAttributes,P=r.enabledAttributes;for(let O=0,D=P.length;O<D;O++)P[O]!==_[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function w(_,P,O,D,N,$,H){H===!0?n.vertexAttribIPointer(_,P,O,N,$):n.vertexAttribPointer(_,P,O,D,N,$)}function M(_,P,O,D){x();const N=D.attributes,$=O.getAttributes(),H=P.defaultAttributeValues;for(const J in $){const q=$[J];if(q.location>=0){let V=N[J];if(V===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(V=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(V=_.instanceColor)),V!==void 0){const W=V.normalized,le=V.itemSize,_e=e.get(V);if(_e===void 0)continue;const He=_e.buffer,ce=_e.type,me=_e.bytesPerElement,Le=ce===n.INT||ce===n.UNSIGNED_INT||V.gpuType===Kc;if(V.isInterleavedBufferAttribute){const ge=V.data,De=ge.stride,Ge=V.offset;if(ge.isInstancedInterleavedBuffer){for(let Oe=0;Oe<q.locationSize;Oe++)p(q.location+Oe,ge.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Oe=0;Oe<q.locationSize;Oe++)g(q.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Oe=0;Oe<q.locationSize;Oe++)w(q.location+Oe,le/q.locationSize,ce,W,De*me,(Ge+le/q.locationSize*Oe)*me,Le)}else{if(V.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,V.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ge=0;ge<q.locationSize;ge++)g(q.location+ge);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ge=0;ge<q.locationSize;ge++)w(q.location+ge,le/q.locationSize,ce,W,le*me,le/q.locationSize*ge*me,Le)}}else if(H!==void 0){const W=H[J];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(q.location,W);break;case 3:n.vertexAttrib3fv(q.location,W);break;case 4:n.vertexAttrib4fv(q.location,W);break;default:n.vertexAttrib1fv(q.location,W)}}}}T()}function I(){C();for(const _ in i){const P=i[_];for(const O in P){const D=P[O];for(const N in D)u(D[N].object),delete D[N];delete P[O]}delete i[_]}}function L(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const O in P){const D=P[O];for(const N in D)u(D[N].object),delete D[N];delete P[O]}delete i[_.id]}function U(_){for(const P in i){const O=i[P];if(O[_.id]===void 0)continue;const D=O[_.id];for(const N in D)u(D[N].object),delete D[N];delete O[_.id]}}function C(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function CM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==En&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const C=U===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Zn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Sn&&!C)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:I,maxSamples:L}}function PM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new zi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const T=r?0:i,w=T*4;let M=p.clippingState||null;l.value=M,M=u(m,d,w,f);for(let I=0;I!==w;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,M=f;w!==x;++w,M+=4)o.copy(h[w]).applyMatrix4(T,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function LM(n){let e=new WeakMap;function t(o,a){return a===oa?o.mapping=sr:a===Ql&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===Ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class _p extends mp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,Nh=[.125,.215,.35,.446,.526,.582],fs=20,gl=new _p,Oh=new We;let vl=null,_l=0,xl=0,yl=!1;const us=(1+Math.sqrt(5))/2,Hs=1/us,kh=[new G(-us,Hs,0),new G(us,Hs,0),new G(-Hs,0,us),new G(Hs,0,us),new G(0,us,-Hs),new G(0,us,Hs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,_l,xl),this._renderer.xr.enabled=yl,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:xi,format:En,colorSpace:bs,depthBuffer:!1},s=zh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(r)),this._blurMaterial=IM(r,e,t)}return s}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,i,s){const a=new bn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Oh),u.toneMapping=Xi,u.autoClear=!1;const f=new lr({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new Re(new It,f);let x=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Oh),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Lo(s,T*w,p>2?w:0,w,w),u.setRenderTarget(s),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===sr||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Lo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kh[(s-r-1)%kh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):fs;g>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const p=[];let T=0;for(let U=0;U<fs;++U){const C=U/x,v=Math.exp(-C*C/2);p.push(v),U===0?T+=v:U<g&&(T+=2*v)}for(let U=0;U<p.length;U++)p[U]=p[U]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=m,d.mipInt.value=w-i;const M=this._sizeLods[s],I=3*M*(s>w-Xs?s-w+Xs:0),L=4*(this._cubeSize-M);Lo(t,I,L,3*M,2*M),l.setRenderTarget(t),l.render(h,gl)}}function DM(n){const e=[],t=[],i=[];let s=n;const r=n-Xs+1+Nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Xs?l=Nh[o-n+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,x=3,g=2,p=1,T=new Float32Array(x*m*f),w=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let L=0;L<f;L++){const U=L%3*2/3-1,C=L>2?0:-1,v=[U,C,0,U+2/3,C,0,U+2/3,C+1,0,U,C,0,U+2/3,C+1,0,U,C+1,0];T.set(v,x*m*L),w.set(d,g*m*L);const _=[L,L,L,L,L,L];M.set(_,p*m*L)}const I=new Kt;I.setAttribute("position",new Kn(T,x)),I.setAttribute("uv",new Kn(w,g)),I.setAttribute("faceIndex",new Kn(M,p)),e.push(I),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zh(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function IM(n,e,t){const i=new Float32Array(fs),s=new G(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hh(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Gh(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function UM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oa||l===Ql,u=l===sr||l===rr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Bh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Bh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function FM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function NM(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let w=0,M=T.length;w<M;w+=3){const I=T[w+0],L=T[w+1],U=T[w+2];d.push(I,L,L,U,U,I)}}else if(m!==void 0){const T=m.array;x=m.version;for(let w=0,M=T.length/3-1;w<M;w+=3){const I=w+0,L=w+1,U=w+2;d.push(I,L,L,U,U,I)}}else return;const g=new(op(d)?dp:hp)(d,1);g.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function OM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function h(d,f,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,m);let p=0;for(let T=0;T<m;T++)p+=f[T]*x[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function BM(n,e,t){const i=new WeakMap,s=new Tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let _=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let I=a.attributes.position.count*M,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*L*4*h),C=new lp(U,I,L,h);C.type=Sn,C.needsUpdate=!0;const v=M*4;for(let P=0;P<h;P++){const O=p[P],D=T[P],N=w[P],$=I*L*4*P;for(let H=0;H<O.count;H++){const J=H*v;m===!0&&(s.fromBufferAttribute(O,H),U[$+J+0]=s.x,U[$+J+1]=s.y,U[$+J+2]=s.z,U[$+J+3]=0),x===!0&&(s.fromBufferAttribute(D,H),U[$+J+4]=s.x,U[$+J+5]=s.y,U[$+J+6]=s.z,U[$+J+7]=0),g===!0&&(s.fromBufferAttribute(N,H),U[$+J+8]=s.x,U[$+J+9]=s.y,U[$+J+10]=s.z,U[$+J+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new ae(I,L)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function zM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class xp extends zt{constructor(e,t,i,s,r,o,a,l,c,u=er){if(u!==er&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===er&&(i=vs),i===void 0&&u===ar&&(i=or),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yp=new zt,Vh=new xp(1,1),Mp=new lp,bp=new wx,wp=new gp,Wh=[],$h=[],Xh=new Float32Array(16),jh=new Float32Array(9),qh=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,i))return;qh.set(i),n.uniformMatrix2fv(this.addr,!1,qh),Nt(t,i)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,i))return;jh.set(i),n.uniformMatrix3fv(this.addr,!1,jh),Nt(t,i)}}function jM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ft(t,i))return;Xh.set(i),n.uniformMatrix4fv(this.addr,!1,Xh),Nt(t,i)}}function qM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function JM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function nb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vh.compareFunction=rp,r=Vh):r=yp,t.setTexture2D(e||r,s)}function ib(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bp,s)}function sb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wp,s)}function rb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mp,s)}function ob(n){switch(n){case 5126:return HM;case 35664:return GM;case 35665:return VM;case 35666:return WM;case 35674:return $M;case 35675:return XM;case 35676:return jM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}function ab(n,e){n.uniform1fv(this.addr,e)}function lb(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function cb(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function ub(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function hb(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function db(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fb(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pb(n,e){n.uniform1iv(this.addr,e)}function mb(n,e){n.uniform2iv(this.addr,e)}function gb(n,e){n.uniform3iv(this.addr,e)}function vb(n,e){n.uniform4iv(this.addr,e)}function _b(n,e){n.uniform1uiv(this.addr,e)}function xb(n,e){n.uniform2uiv(this.addr,e)}function yb(n,e){n.uniform3uiv(this.addr,e)}function Mb(n,e){n.uniform4uiv(this.addr,e)}function bb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yp,r[o])}function wb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||bp,r[o])}function Sb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wp,r[o])}function Eb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mp,r[o])}function Tb(n){switch(n){case 5126:return ab;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return hb;case 35675:return db;case 35676:return fb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return vb;case 5125:return _b;case 36294:return xb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}class Ab{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ob(t.type)}}class Cb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tb(t.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function Yh(n,e){n.seq.push(e),n.map[e.id]=e}function Pb(n,e,t){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yh(t,c===void 0?new Ab(a,n,e):new Cb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Rb(a),Yh(t,h)),t=h}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Pb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lb=37297;let Db=0;function Ib(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zh=new Je;function Ub(n){it._getMatrix(Zh,it.workingColorSpace,n);const e=`mat3( ${Zh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Ca:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ib(n.getShaderSource(e),o)}else return s}function Fb(n,e){const t=Ub(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nb(n,e){let t;switch(e){case K_:t="Linear";break;case Z_:t="Reinhard";break;case J_:t="Cineon";break;case jf:t="ACESFilmic";break;case ex:t="AgX";break;case tx:t="Neutral";break;case Q_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Do=new G;function Ob(){it.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Bb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Tr(n){return n!==""}function Qh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(Hb,Vb)}const Gb=new Map;function Vb(n,e){let t=Qe[e];if(t===void 0){const i=Gb.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace(Wb,$b)}function $b(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Xb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case q_:e="ENVMAP_BLENDING_MIX";break;case Y_:e="ENVMAP_BLENDING_ADD";break}return e}function Kb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Zb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xb(t),c=jb(t),u=qb(t),h=Yb(t),d=Kb(t),f=kb(t),m=Bb(r),x=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(g=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Fb("linearToOutputTexel",t.outputColorSpace),Ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Rc(o),o=Qh(o,t),o=ed(o,t),a=Rc(a),a=Qh(a,t),a=ed(a,t),o=td(o),a=td(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+g+o,M=T+p+a,I=Kh(s,s.VERTEX_SHADER,w),L=Kh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,I),s.attachShader(x,L),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(I).trim(),N=s.getShaderInfoLog(L).trim();let $=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,L);else{const J=Jh(s,I,"vertex"),q=Jh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+J+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||N==="")&&(H=!1);H&&(P.diagnostics={runnable:$,programLog:O,vertexShader:{log:D,prefix:g},fragmentShader:{log:N,prefix:p}})}s.deleteShader(I),s.deleteShader(L),C=new Zo(s,x),v=zb(s,x)}let C;this.getUniforms=function(){return C===void 0&&U(this),C};let v;this.getAttributes=function(){return v===void 0&&U(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Lb)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}let Jb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ew(e),t.set(e,i)),i}}class ew{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function tw(n,e,t,i,s,r,o){const a=new cp,l=new Qb,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,_,P,O,D){const N=O.fog,$=D.geometry,H=v.isMeshStandardMaterial?O.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),q=J&&J.mapping===Aa?J.image.height:null,V=m[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const W=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=W!==void 0?W.length:0;let _e=0;$.morphAttributes.position!==void 0&&(_e=1),$.morphAttributes.normal!==void 0&&(_e=2),$.morphAttributes.color!==void 0&&(_e=3);let He,ce,me,Le;if(V){const dt=Xn[V];He=dt.vertexShader,ce=dt.fragmentShader}else He=v.vertexShader,ce=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),Le=l.getFragmentShaderID(v);const ge=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Ge=D.isInstancedMesh===!0,Oe=D.isBatchedMesh===!0,Ye=!!v.map,A=!!v.matcap,F=!!J,E=!!v.aoMap,B=!!v.lightMap,k=!!v.bumpMap,j=!!v.normalMap,Q=!!v.displacementMap,re=!!v.emissiveMap,te=!!v.metalnessMap,S=!!v.roughnessMap,b=v.anisotropy>0,z=v.clearcoat>0,Z=v.dispersion>0,ne=v.iridescence>0,ee=v.sheen>0,ve=v.transmission>0,fe=b&&!!v.anisotropyMap,Me=z&&!!v.clearcoatMap,Be=z&&!!v.clearcoatNormalMap,pe=z&&!!v.clearcoatRoughnessMap,Ee=ne&&!!v.iridescenceMap,ke=ne&&!!v.iridescenceThicknessMap,Ve=ee&&!!v.sheenColorMap,we=ee&&!!v.sheenRoughnessMap,$e=!!v.specularMap,je=!!v.specularColorMap,ht=!!v.specularIntensityMap,X=ve&&!!v.transmissionMap,Te=ve&&!!v.thicknessMap,oe=!!v.gradientMap,de=!!v.alphaMap,Pe=v.alphaTest>0,Ae=!!v.alphaHash,Ke=!!v.extensions;let St=Xi;v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(St=n.toneMapping);const Gt={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:ce,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:Le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&D._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:bs,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:A,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:q,aoMap:E,lightMap:B,bumpMap:k,normalMap:j,displacementMap:d&&Q,emissiveMap:re,normalMapObjectSpace:j&&v.normalMapType===rx,normalMapTangentSpace:j&&v.normalMapType===sp,metalnessMap:te,roughnessMap:S,anisotropy:b,anisotropyMap:fe,clearcoat:z,clearcoatMap:Me,clearcoatNormalMap:Be,clearcoatRoughnessMap:pe,dispersion:Z,iridescence:ne,iridescenceMap:Ee,iridescenceThicknessMap:ke,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:we,specularMap:$e,specularColorMap:je,specularIntensityMap:ht,transmission:ve,transmissionMap:X,thicknessMap:Te,gradientMap:oe,opaque:v.transparent===!1&&v.blending===Qs&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ae,combine:v.combine,mapUv:Ye&&x(v.map.channel),aoMapUv:E&&x(v.aoMap.channel),lightMapUv:B&&x(v.lightMap.channel),bumpMapUv:k&&x(v.bumpMap.channel),normalMapUv:j&&x(v.normalMap.channel),displacementMapUv:Q&&x(v.displacementMap.channel),emissiveMapUv:re&&x(v.emissiveMap.channel),metalnessMapUv:te&&x(v.metalnessMap.channel),roughnessMapUv:S&&x(v.roughnessMap.channel),anisotropyMapUv:fe&&x(v.anisotropyMap.channel),clearcoatMapUv:Me&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(v.sheenRoughnessMap.channel),specularMapUv:$e&&x(v.specularMap.channel),specularColorMapUv:je&&x(v.specularColorMap.channel),specularIntensityMapUv:ht&&x(v.specularIntensityMap.channel),transmissionMapUv:X&&x(v.transmissionMap.channel),thicknessMapUv:Te&&x(v.thicknessMap.channel),alphaMapUv:de&&x(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(j||b),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(Ye||de),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:De,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:_e,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:re&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kt,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ke&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&v.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function p(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)_.push(P),_.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(T(_,v),w(_,v),_.push(n.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function T(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function w(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const _=m[v.type];let P;if(_){const O=Xn[_];P=kx.clone(O.uniforms)}else P=v.uniforms;return P}function I(v,_){let P;for(let O=0,D=u.length;O<D;O++){const N=u[O];if(N.cacheKey===_){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Zb(n,_,v,r),u.push(P)),P}function L(v){if(--v.usedTimes===0){const _=u.indexOf(v);u[_]=u[u.length-1],u.pop(),v.destroy()}}function U(v){l.remove(v)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:L,releaseShaderCache:U,programs:u,dispose:C}}function nw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function iw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function id(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,m,x,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function a(h,d,f,m,x,g){const p=o(h,d,f,m,x,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,m,x,g){const p=o(h,d,f,m,x,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||iw),i.length>1&&i.sort(d||id),s.length>1&&s.sort(d||id)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function sw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new sd,n.set(i,[o])):s>=r.length?(o=new sd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new We};break;case"SpotLight":t={position:new G,direction:new G,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function ow(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aw=0;function lw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cw(n){const e=new rw,t=ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new bt,o=new bt;function a(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,T=0,w=0,M=0,I=0,L=0,U=0;c.sort(lw);for(let v=0,_=c.length;v<_;v++){const P=c[v],O=P.color,D=P.intensity,N=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*D,h+=O.g*D,d+=O.b*D;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],D);U++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,q=t.get(P);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=P.shadow.matrix,T++}i.directional[f]=H,f++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(D),H.distance=N,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[x]=H;const J=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,J.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[x]=J.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=$,M++}x++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(O).multiplyScalar(D),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=H,g++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const J=P.shadow,q=t.get(P);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=P.shadow.matrix,w++}i.point[m]=H,m++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(D),H.groundColor.copy(P.groundColor).multiplyScalar(D),i.hemi[p]=H,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==w||C.numSpotShadows!==M||C.numSpotMaps!==I||C.numLightProbes!==U)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=w,C.numSpotShadows=M,C.numSpotMaps=I,C.numLightProbes=U,i.version=aw++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const w=c[p];if(w.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(w.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(w.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function rd(n){const e=new cw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function uw(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rd(n),e.set(s,[a])):r>=o.length?(a=new rd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class hw extends hr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dw extends hr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`;function mw(n,e,t){let i=new su;const s=new ae,r=new ae,o=new Tt,a=new hw({depthPacking:sx}),l=new dw,c={},u=t.maxTextureSize,h={[qi]:cn,[cn]:qi,[kt]:kt},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:fw,fragmentShader:pw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Kt;m.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Re(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let p=this.type;this.render=function(L,U,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const v=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending($i),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=p!==di&&this.type===di,N=p===di&&this.type!==di;for(let $=0,H=L.length;$<H;$++){const J=L[$],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const V=q.getFrameExtents();if(s.multiply(V),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,q.mapSize.y=r.y)),q.map===null||D===!0||N===!0){const le=this.type!==di?{minFilter:gn,magFilter:gn}:{};q.map!==null&&q.map.dispose(),q.map=new Yi(s.x,s.y,le),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const W=q.getViewportCount();for(let le=0;le<W;le++){const _e=q.getViewport(le);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),O.viewport(o),q.updateMatrices(J,le),i=q.getFrustum(),M(U,C,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===di&&T(q,C),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(v,_,P)};function T(L,U){const C=e.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(U,null,C,d,x,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(U,null,C,f,x,null)}function w(L,U,C,v){let _=null;const P=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)_=P;else if(_=C.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const O=_.uuid,D=U.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let $=N[D];$===void 0&&($=_.clone(),N[D]=$,U.addEventListener("dispose",I)),_=$}if(_.visible=U.visible,_.wireframe=U.wireframe,v===di?_.side=U.shadowSide!==null?U.shadowSide:U.side:_.side=U.shadowSide!==null?U.shadowSide:h[U.side],_.alphaMap=U.alphaMap,_.alphaTest=U.alphaTest,_.map=U.map,_.clipShadows=U.clipShadows,_.clippingPlanes=U.clippingPlanes,_.clipIntersection=U.clipIntersection,_.displacementMap=U.displacementMap,_.displacementScale=U.displacementScale,_.displacementBias=U.displacementBias,_.wireframeLinewidth=U.wireframeLinewidth,_.linewidth=U.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=n.properties.get(_);O.light=C}return _}function M(L,U,C,v,_){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===di)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const D=e.update(L),N=L.material;if(Array.isArray(N)){const $=D.groups;for(let H=0,J=$.length;H<J;H++){const q=$[H],V=N[q.materialIndex];if(V&&V.visible){const W=w(L,V,v,_);L.onBeforeShadow(n,L,U,C,D,W,q),n.renderBufferDirect(C,null,D,W,L,q),L.onAfterShadow(n,L,U,C,D,W,q)}}}else if(N.visible){const $=w(L,N,v,_);L.onBeforeShadow(n,L,U,C,D,$,null),n.renderBufferDirect(C,null,D,$,L,null),L.onAfterShadow(n,L,U,C,D,$,null)}}const O=L.children;for(let D=0,N=O.length;D<N;D++)M(O[D],U,C,v,_)}function I(L){L.target.removeEventListener("dispose",I);for(const C in c){const v=c[C],_=L.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const gw={[Xl]:jl,[ql]:Zl,[Yl]:Jl,[ir]:Kl,[jl]:Xl,[Zl]:ql,[Jl]:Yl,[Kl]:ir};function vw(n,e){function t(){let X=!1;const Te=new Tt;let oe=null;const de=new Tt(0,0,0,0);return{setMask:function(Pe){oe!==Pe&&!X&&(n.colorMask(Pe,Pe,Pe,Pe),oe=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,Ae,Ke,St,Gt){Gt===!0&&(Pe*=St,Ae*=St,Ke*=St),Te.set(Pe,Ae,Ke,St),de.equals(Te)===!1&&(n.clearColor(Pe,Ae,Ke,St),de.copy(Te))},reset:function(){X=!1,oe=null,de.set(-1,0,0,0)}}}function i(){let X=!1,Te=!1,oe=null,de=null,Pe=null;return{setReversed:function(Ae){if(Te!==Ae){const Ke=e.get("EXT_clip_control");Te?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const St=Pe;Pe=null,this.setClear(St)}Te=Ae},getReversed:function(){return Te},setTest:function(Ae){Ae?ge(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!X&&(n.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(Te&&(Ae=gw[Ae]),de!==Ae){switch(Ae){case Xl:n.depthFunc(n.NEVER);break;case jl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case Zl:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Ae}},setLocked:function(Ae){X=Ae},setClear:function(Ae){Pe!==Ae&&(Te&&(Ae=1-Ae),n.clearDepth(Ae),Pe=Ae)},reset:function(){X=!1,oe=null,de=null,Pe=null,Te=!1}}}function s(){let X=!1,Te=null,oe=null,de=null,Pe=null,Ae=null,Ke=null,St=null,Gt=null;return{setTest:function(dt){X||(dt?ge(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(dt){Te!==dt&&!X&&(n.stencilMask(dt),Te=dt)},setFunc:function(dt,An,ni){(oe!==dt||de!==An||Pe!==ni)&&(n.stencilFunc(dt,An,ni),oe=dt,de=An,Pe=ni)},setOp:function(dt,An,ni){(Ae!==dt||Ke!==An||St!==ni)&&(n.stencilOp(dt,An,ni),Ae=dt,Ke=An,St=ni)},setLocked:function(dt){X=dt},setClear:function(dt){Gt!==dt&&(n.clearStencil(dt),Gt=dt)},reset:function(){X=!1,Te=null,oe=null,de=null,Pe=null,Ae=null,Ke=null,St=null,Gt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,T=null,w=null,M=null,I=null,L=null,U=new We(0,0,0),C=0,v=!1,_=null,P=null,O=null,D=null,N=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=J>=2);let V=null,W={};const le=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),He=new Tt().fromArray(le),ce=new Tt().fromArray(_e);function me(X,Te,oe,de){const Pe=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(X,Ae),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<oe;Ke++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Ae}const Le={};Le[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(ir),k(!1),j(ch),ge(n.CULL_FACE),E($i);function ge(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function De(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function Ge(X,Te){return h[X]!==Te?(n.bindFramebuffer(X,Te),h[X]=Te,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Oe(X,Te){let oe=f,de=!1;if(X){oe=d.get(Te),oe===void 0&&(oe=[],d.set(Te,oe));const Pe=X.textures;if(oe.length!==Pe.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Ke=Pe.length;Ae<Ke;Ae++)oe[Ae]=n.COLOR_ATTACHMENT0+Ae;oe.length=Pe.length,de=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,de=!0);de&&n.drawBuffers(oe)}function Ye(X){return m!==X?(n.useProgram(X),m=X,!0):!1}const A={[ds]:n.FUNC_ADD,[L_]:n.FUNC_SUBTRACT,[D_]:n.FUNC_REVERSE_SUBTRACT};A[I_]=n.MIN,A[U_]=n.MAX;const F={[F_]:n.ZERO,[N_]:n.ONE,[O_]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[V_]:n.SRC_ALPHA_SATURATE,[H_]:n.DST_COLOR,[B_]:n.DST_ALPHA,[k_]:n.ONE_MINUS_SRC_COLOR,[$l]:n.ONE_MINUS_SRC_ALPHA,[G_]:n.ONE_MINUS_DST_COLOR,[z_]:n.ONE_MINUS_DST_ALPHA,[W_]:n.CONSTANT_COLOR,[$_]:n.ONE_MINUS_CONSTANT_COLOR,[X_]:n.CONSTANT_ALPHA,[j_]:n.ONE_MINUS_CONSTANT_ALPHA};function E(X,Te,oe,de,Pe,Ae,Ke,St,Gt,dt){if(X===$i){x===!0&&(De(n.BLEND),x=!1);return}if(x===!1&&(ge(n.BLEND),x=!0),X!==P_){if(X!==g||dt!==v){if((p!==ds||M!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,M=ds),dt)switch(X){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uh:n.blendFunc(n.ONE,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}T=null,w=null,I=null,L=null,U.set(0,0,0),C=0,g=X,v=dt}return}Pe=Pe||Te,Ae=Ae||oe,Ke=Ke||de,(Te!==p||Pe!==M)&&(n.blendEquationSeparate(A[Te],A[Pe]),p=Te,M=Pe),(oe!==T||de!==w||Ae!==I||Ke!==L)&&(n.blendFuncSeparate(F[oe],F[de],F[Ae],F[Ke]),T=oe,w=de,I=Ae,L=Ke),(St.equals(U)===!1||Gt!==C)&&(n.blendColor(St.r,St.g,St.b,Gt),U.copy(St),C=Gt),g=X,v=!1}function B(X,Te){X.side===kt?De(n.CULL_FACE):ge(n.CULL_FACE);let oe=X.side===cn;Te&&(oe=!oe),k(oe),X.blending===Qs&&X.transparent===!1?E($i):E(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const de=X.stencilWrite;a.setTest(de),de&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),re(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(X){_!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),_=X)}function j(X){X!==C_?(ge(n.CULL_FACE),X!==P&&(X===ch?n.cullFace(n.BACK):X===R_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),P=X}function Q(X){X!==O&&(H&&n.lineWidth(X),O=X)}function re(X,Te,oe){X?(ge(n.POLYGON_OFFSET_FILL),(D!==Te||N!==oe)&&(n.polygonOffset(Te,oe),D=Te,N=oe)):De(n.POLYGON_OFFSET_FILL)}function te(X){X?ge(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function S(X){X===void 0&&(X=n.TEXTURE0+$-1),V!==X&&(n.activeTexture(X),V=X)}function b(X,Te,oe){oe===void 0&&(V===null?oe=n.TEXTURE0+$-1:oe=V);let de=W[oe];de===void 0&&(de={type:void 0,texture:void 0},W[oe]=de),(de.type!==X||de.texture!==Te)&&(V!==oe&&(n.activeTexture(oe),V=oe),n.bindTexture(X,Te||Le[X]),de.type=X,de.texture=Te)}function z(){const X=W[V];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(X){He.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),He.copy(X))}function we(X){ce.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ce.copy(X))}function $e(X,Te){let oe=c.get(Te);oe===void 0&&(oe=new WeakMap,c.set(Te,oe));let de=oe.get(X);de===void 0&&(de=n.getUniformBlockIndex(Te,X.name),oe.set(X,de))}function je(X,Te){const de=c.get(Te).get(X);l.get(Te)!==de&&(n.uniformBlockBinding(Te,de,X.__bindingPointIndex),l.set(Te,de))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},V=null,W={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,T=null,w=null,M=null,I=null,L=null,U=new We(0,0,0),C=0,v=!1,_=null,P=null,O=null,D=null,N=null,He.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:De,bindFramebuffer:Ge,drawBuffers:Oe,useProgram:Ye,setBlending:E,setMaterial:B,setFlipSided:k,setCullFace:j,setLineWidth:Q,setPolygonOffset:re,setScissorTest:te,activeTexture:S,bindTexture:b,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:Ee,texImage3D:ke,updateUBOMapping:$e,uniformBlockBinding:je,texStorage2D:Be,texStorage3D:pe,texSubImage2D:ee,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:Me,scissor:Ve,viewport:we,reset:ht}}function od(n,e,t,i){const s=_w(i);switch(t){case Jf:return n*e;case Qf:return n*e;case ep:return n*e*2;case tp:return n*e/s.components*s.byteLength;case eu:return n*e/s.components*s.byteLength;case np:return n*e*2/s.components*s.byteLength;case tu:return n*e*2/s.components*s.byteLength;case Qc:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case nu:return n*e*4/s.components*s.byteLength;case Xo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(e,8)/2;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ko:case wc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ip:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _w(n){switch(n){case Zn:case Yf:return{byteLength:1,components:1};case qr:case Kf:case xi:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case vs:case Kc:case Sn:return{byteLength:4,components:1};case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xw(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,b){return f?new OffscreenCanvas(S,b):Yr("canvas")}function x(S,b,z){let Z=1;const ne=te(S);if((ne.width>z||ne.height>z)&&(Z=z/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const ee=Math.floor(Z*ne.width),ve=Math.floor(Z*ne.height);h===void 0&&(h=m(ee,ve));const fe=b?m(ee,ve):h;return fe.width=ee,fe.height=ve,fe.getContext("2d").drawImage(S,0,0,ee,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+ve+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),S;return S}function g(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,b,z,Z,ne=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=b;if(b===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),b===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RG8UI),z===n.UNSIGNED_SHORT&&(ee=n.RG16UI),z===n.UNSIGNED_INT&&(ee=n.RG32UI),z===n.BYTE&&(ee=n.RG8I),z===n.SHORT&&(ee=n.RG16I),z===n.INT&&(ee=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),z===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),z===n.UNSIGNED_INT&&(ee=n.RGB32UI),z===n.BYTE&&(ee=n.RGB8I),z===n.SHORT&&(ee=n.RGB16I),z===n.INT&&(ee=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),z===n.UNSIGNED_INT&&(ee=n.RGBA32UI),z===n.BYTE&&(ee=n.RGBA8I),z===n.SHORT&&(ee=n.RGBA16I),z===n.INT&&(ee=n.RGBA32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),b===n.RGBA){const ve=ne?Ca:it.getTransfer(Z);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=ve===pt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(S,b){let z;return S?b===null||b===vs||b===or?z=n.DEPTH24_STENCIL8:b===Sn?z=n.DEPTH32F_STENCIL8:b===qr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vs||b===or?z=n.DEPTH_COMPONENT24:b===Sn?z=n.DEPTH_COMPONENT32F:b===qr&&(z=n.DEPTH_COMPONENT16),z}function I(S,b){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==gn&&S.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function L(S){const b=S.target;b.removeEventListener("dispose",L),C(b),b.isVideoTexture&&u.delete(b)}function U(S){const b=S.target;b.removeEventListener("dispose",U),_(b)}function C(S){const b=i.get(S);if(b.__webglInit===void 0)return;const z=S.source,Z=d.get(z);if(Z){const ne=Z[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(S),Object.keys(Z).length===0&&d.delete(z)}i.remove(S)}function v(S){const b=i.get(S);n.deleteTexture(b.__webglTexture);const z=S.source,Z=d.get(z);delete Z[b.__cacheKey],o.memory.textures--}function _(S){const b=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ne=0;ne<b.__webglFramebuffer[Z].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[Z][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=S.textures;for(let Z=0,ne=z.length;Z<ne;Z++){const ee=i.get(z[Z]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(S)}let P=0;function O(){P=0}function D(){const S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function N(S){const b=[];return b.push(S.wrapS),b.push(S.wrapT),b.push(S.wrapR||0),b.push(S.magFilter),b.push(S.minFilter),b.push(S.anisotropy),b.push(S.internalFormat),b.push(S.format),b.push(S.type),b.push(S.generateMipmaps),b.push(S.premultiplyAlpha),b.push(S.flipY),b.push(S.unpackAlignment),b.push(S.colorSpace),b.join()}function $(S,b){const z=i.get(S);if(S.isVideoTexture&&Q(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,S,b);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function H(S,b){const z=i.get(S);if(S.version>0&&z.__version!==S.version){ce(z,S,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function J(S,b){const z=i.get(S);if(S.version>0&&z.__version!==S.version){ce(z,S,b);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function q(S,b){const z=i.get(S);if(S.version>0&&z.__version!==S.version){me(z,S,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const V={[ec]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},W={[gn]:n.NEAREST,[nx]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},le={[ox]:n.NEVER,[dx]:n.ALWAYS,[ax]:n.LESS,[rp]:n.LEQUAL,[lx]:n.EQUAL,[hx]:n.GEQUAL,[cx]:n.GREATER,[ux]:n.NOTEQUAL};function _e(S,b){if(b.type===Sn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===qa||b.magFilter===uo||b.magFilter===Wi||b.minFilter===nn||b.minFilter===qa||b.minFilter===uo||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,V[b.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,V[b.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,V[b.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,W[b.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,W[b.minFilter]),b.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gn||b.minFilter!==uo&&b.minFilter!==Wi||b.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function He(S,b){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",L));const Z=b.source;let ne=d.get(Z);ne===void 0&&(ne={},d.set(Z,ne));const ee=N(b);if(ee!==S.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[ee].usedTimes++;const ve=ne[S.__cacheKey];ve!==void 0&&(ne[S.__cacheKey].usedTimes--,ve.usedTimes===0&&v(b)),S.__cacheKey=ee,S.__webglTexture=ne[ee].texture}return z}function ce(S,b,z){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const ne=He(S,b),ee=b.source;t.bindTexture(Z,S.__webglTexture,n.TEXTURE0+z);const ve=i.get(ee);if(ee.version!==ve.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const fe=it.getPrimaries(it.workingColorSpace),Me=b.colorSpace===Hi?null:it.getPrimaries(b.colorSpace),Be=b.colorSpace===Hi||fe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let pe=x(b.image,!1,s.maxTextureSize);pe=re(b,pe);const Ee=r.convert(b.format,b.colorSpace),ke=r.convert(b.type);let Ve=w(b.internalFormat,Ee,ke,b.colorSpace,b.isVideoTexture);_e(Z,b);let we;const $e=b.mipmaps,je=b.isVideoTexture!==!0,ht=ve.__version===void 0||ne===!0,X=ee.dataReady,Te=I(b,pe);if(b.isDepthTexture)Ve=M(b.format===ar,b.type),ht&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ve,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,pe.width,pe.height,0,Ee,ke,null));else if(b.isDataTexture)if($e.length>0){je&&ht&&t.texStorage2D(n.TEXTURE_2D,Te,Ve,$e[0].width,$e[0].height);for(let oe=0,de=$e.length;oe<de;oe++)we=$e[oe],je?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,Ee,ke,we.data):t.texImage2D(n.TEXTURE_2D,oe,Ve,we.width,we.height,0,Ee,ke,we.data);b.generateMipmaps=!1}else je?(ht&&t.texStorage2D(n.TEXTURE_2D,Te,Ve,pe.width,pe.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Ee,ke,pe.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,pe.width,pe.height,0,Ee,ke,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ve,$e[0].width,$e[0].height,pe.depth);for(let oe=0,de=$e.length;oe<de;oe++)if(we=$e[oe],b.format!==En)if(Ee!==null)if(je){if(X)if(b.layerUpdates.size>0){const Pe=od(we.width,we.height,b.format,b.type);for(const Ae of b.layerUpdates){const Ke=we.data.subarray(Ae*Pe/we.data.BYTES_PER_ELEMENT,(Ae+1)*Pe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ae,we.width,we.height,1,Ee,Ke)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,pe.depth,Ee,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ve,we.width,we.height,pe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,we.width,we.height,pe.depth,Ee,ke,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ve,we.width,we.height,pe.depth,0,Ee,ke,we.data)}else{je&&ht&&t.texStorage2D(n.TEXTURE_2D,Te,Ve,$e[0].width,$e[0].height);for(let oe=0,de=$e.length;oe<de;oe++)we=$e[oe],b.format!==En?Ee!==null?je?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we.width,we.height,Ee,ke,we.data):t.texImage2D(n.TEXTURE_2D,oe,Ve,we.width,we.height,0,Ee,ke,we.data)}else if(b.isDataArrayTexture)if(je){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ve,pe.width,pe.height,pe.depth),X)if(b.layerUpdates.size>0){const oe=od(pe.width,pe.height,b.format,b.type);for(const de of b.layerUpdates){const Pe=pe.data.subarray(de*oe/pe.data.BYTES_PER_ELEMENT,(de+1)*oe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,pe.width,pe.height,1,Ee,ke,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,ke,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,pe.width,pe.height,pe.depth,0,Ee,ke,pe.data);else if(b.isData3DTexture)je?(ht&&t.texStorage3D(n.TEXTURE_3D,Te,Ve,pe.width,pe.height,pe.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,ke,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,pe.width,pe.height,pe.depth,0,Ee,ke,pe.data);else if(b.isFramebufferTexture){if(ht)if(je)t.texStorage2D(n.TEXTURE_2D,Te,Ve,pe.width,pe.height);else{let oe=pe.width,de=pe.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ve,oe,de,0,Ee,ke,null),oe>>=1,de>>=1}}else if($e.length>0){if(je&&ht){const oe=te($e[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ve,oe.width,oe.height)}for(let oe=0,de=$e.length;oe<de;oe++)we=$e[oe],je?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ee,ke,we):t.texImage2D(n.TEXTURE_2D,oe,Ve,Ee,ke,we);b.generateMipmaps=!1}else if(je){if(ht){const oe=te(pe);t.texStorage2D(n.TEXTURE_2D,Te,Ve,oe.width,oe.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,ke,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ee,ke,pe);g(b)&&p(Z),ve.__version=ee.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function me(S,b,z){if(b.image.length!==6)return;const Z=He(S,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+z);const ee=i.get(ne);if(ne.version!==ee.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const ve=it.getPrimaries(it.workingColorSpace),fe=b.colorSpace===Hi?null:it.getPrimaries(b.colorSpace),Me=b.colorSpace===Hi||ve===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let de=0;de<6;de++)!Be&&!pe?Ee[de]=x(b.image[de],!0,s.maxCubemapSize):Ee[de]=pe?b.image[de].image:b.image[de],Ee[de]=re(b,Ee[de]);const ke=Ee[0],Ve=r.convert(b.format,b.colorSpace),we=r.convert(b.type),$e=w(b.internalFormat,Ve,we,b.colorSpace),je=b.isVideoTexture!==!0,ht=ee.__version===void 0||Z===!0,X=ne.dataReady;let Te=I(b,ke);_e(n.TEXTURE_CUBE_MAP,b);let oe;if(Be){je&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,$e,ke.width,ke.height);for(let de=0;de<6;de++){oe=Ee[de].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){const Ae=oe[Pe];b.format!==En?Ve!==null?je?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Ve,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,$e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ae.width,Ae.height,Ve,we,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,$e,Ae.width,Ae.height,0,Ve,we,Ae.data)}}}else{if(oe=b.mipmaps,je&&ht){oe.length>0&&Te++;const de=te(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,$e,de.width,de.height)}for(let de=0;de<6;de++)if(pe){je?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee[de].width,Ee[de].height,Ve,we,Ee[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,$e,Ee[de].width,Ee[de].height,0,Ve,we,Ee[de].data);for(let Pe=0;Pe<oe.length;Pe++){const Ke=oe[Pe].image[de].image;je?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Ke.width,Ke.height,Ve,we,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,$e,Ke.width,Ke.height,0,Ve,we,Ke.data)}}else{je?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ve,we,Ee[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,$e,Ve,we,Ee[de]);for(let Pe=0;Pe<oe.length;Pe++){const Ae=oe[Pe];je?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Ve,we,Ae.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,$e,Ve,we,Ae.image[de])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),ee.__version=ne.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function Le(S,b,z,Z,ne,ee){const ve=r.convert(z.format,z.colorSpace),fe=r.convert(z.type),Me=w(z.internalFormat,ve,fe,z.colorSpace),Be=i.get(b),pe=i.get(z);if(pe.__renderTarget=b,!Be.__hasExternalTextures){const Ee=Math.max(1,b.width>>ee),ke=Math.max(1,b.height>>ee);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,Me,Ee,ke,b.depth,0,ve,fe,null):t.texImage2D(ne,ee,Me,Ee,ke,0,ve,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),j(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ne,pe.__webglTexture,0,k(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ne,pe.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(S,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,S),b.depthBuffer){const Z=b.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,ee=M(b.stencilBuffer,ne),ve=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=k(b);j(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,ee,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,S)}else{const Z=b.textures;for(let ne=0;ne<Z.length;ne++){const ee=Z[ne],ve=r.convert(ee.format,ee.colorSpace),fe=r.convert(ee.type),Me=w(ee.internalFormat,ve,fe,ee.colorSpace),Be=k(b);z&&j(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Me,b.width,b.height):j(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,Me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ne=Z.__webglTexture,ee=k(b);if(b.depthTexture.format===er)j(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(b.depthTexture.format===ar)j(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ge(S){const b=i.get(S),z=S.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==S.depthTexture){const Z=S.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=Z}if(S.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,S)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),ge(b.__webglDepthbuffer[Z],S,!1);else{const ne=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ge(b.__webglDepthbuffer,S,!1);else{const Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(S,b,z){const Z=i.get(S);b!==void 0&&Le(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ge(S)}function Ye(S){const b=S.texture,z=i.get(S),Z=i.get(b);S.addEventListener("dispose",U);const ne=S.textures,ee=S.isWebGLCubeRenderTarget===!0,ve=ne.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,o.memory.textures++),ee){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let Me=0;Me<b.mipmaps.length;Me++)z.__webglFramebuffer[fe][Me]=n.createFramebuffer()}else z.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)z.__webglFramebuffer[fe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ve)for(let fe=0,Me=ne.length;fe<Me;fe++){const Be=i.get(ne[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&j(S)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const Me=ne[fe];z.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Be=r.convert(Me.format,Me.colorSpace),pe=r.convert(Me.type),Ee=w(Me.internalFormat,Be,pe,Me.colorSpace,S.isXRRenderTarget===!0),ke=k(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ee,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(n.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Le(z.__webglFramebuffer[fe][Me],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me);else Le(z.__webglFramebuffer[fe],S,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let fe=0,Me=ne.length;fe<Me;fe++){const Be=ne[fe],pe=i.get(Be);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),_e(n.TEXTURE_2D,Be),Le(z.__webglFramebuffer,S,Be,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),_e(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Le(z.__webglFramebuffer[Me],S,b,n.COLOR_ATTACHMENT0,fe,Me);else Le(z.__webglFramebuffer,S,b,n.COLOR_ATTACHMENT0,fe,0);g(b)&&p(fe),t.unbindTexture()}S.depthBuffer&&Ge(S)}function A(S){const b=S.textures;for(let z=0,Z=b.length;z<Z;z++){const ne=b[z];if(g(ne)){const ee=T(S),ve=i.get(ne).__webglTexture;t.bindTexture(ee,ve),p(ee),t.unbindTexture()}}}const F=[],E=[];function B(S){if(S.samples>0){if(j(S)===!1){const b=S.textures,z=S.width,Z=S.height;let ne=n.COLOR_BUFFER_BIT;const ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(S),fe=b.length>1;if(fe)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);const Be=i.get(b[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,ne,n.NEAREST),l===!0&&(F.length=0,E.length=0,F.push(n.COLOR_ATTACHMENT0+Me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(F.push(ee),E.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);const Be=i.get(b[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const b=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function k(S){return Math.min(s.maxSamples,S.samples)}function j(S){const b=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Q(S){const b=o.render.frame;u.get(S)!==b&&(u.set(S,b),S.update())}function re(S,b){const z=S.colorSpace,Z=S.format,ne=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||z!==bs&&z!==Hi&&(it.getTransfer(z)===pt?(Z!==En||ne!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function te(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Oe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=j}function yw(n,e){function t(i,s=Hi){let r;const o=it.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===Kc)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Jf)return n.ALPHA;if(i===Qc)return n.RGB;if(i===En)return n.RGBA;if(i===Qf)return n.LUMINANCE;if(i===ep)return n.LUMINANCE_ALPHA;if(i===er)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===tp)return n.RED;if(i===eu)return n.RED_INTEGER;if(i===np)return n.RG;if(i===tu)return n.RG_INTEGER;if(i===nu)return n.RGBA_INTEGER;if(i===Xo||i===jo||i===qo||i===Yo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===yc||i===Mc||i===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===wc||i===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ip||i===Ec||i===Tc||i===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Mw extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ar extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
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

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ki({vertexShader:ww,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Et(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tw extends ws{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const x=new Ew,g=t.getContextAttributes();let p=null,T=null;const w=[],M=[],I=new ae;let L=null;const U=new bn;U.viewport=new Tt;const C=new bn;C.viewport=new Tt;const v=[U,C],_=new Mw;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let me=w[ce];return me===void 0&&(me=new bl,w[ce]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ce){let me=w[ce];return me===void 0&&(me=new bl,w[ce]=me),me.getGripSpace()},this.getHand=function(ce){let me=w[ce];return me===void 0&&(me=new bl,w[ce]=me),me.getHandSpace()};function D(ce){const me=M.indexOf(ce.inputSource);if(me===-1)return;const Le=w[me];Le!==void 0&&(Le.update(ce.inputSource,ce.frame,c||o),Le.dispatchEvent({type:ce.type,data:ce.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",$);for(let ce=0;ce<w.length;ce++){const me=M[ce];me!==null&&(M[ce]=null,w[ce].disconnect(me))}P=null,O=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,T=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Yi(f.framebufferWidth,f.framebufferHeight,{format:En,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let me=null,Le=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=g.stencil?ar:er,Le=g.stencil?or:vs);const De={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Yi(d.textureWidth,d.textureHeight,{format:En,type:Zn,depthTexture:new xp(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(ce){for(let me=0;me<ce.removed.length;me++){const Le=ce.removed[me],ge=M.indexOf(Le);ge>=0&&(M[ge]=null,w[ge].disconnect(Le))}for(let me=0;me<ce.added.length;me++){const Le=ce.added[me];let ge=M.indexOf(Le);if(ge===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=M.length){M.push(Le),ge=Ge;break}else if(M[Ge]===null){M[Ge]=Le,ge=Ge;break}if(ge===-1)break}const De=w[ge];De&&De.connect(Le)}}const H=new G,J=new G;function q(ce,me,Le){H.setFromMatrixPosition(me.matrixWorld),J.setFromMatrixPosition(Le.matrixWorld);const ge=H.distanceTo(J),De=me.projectionMatrix.elements,Ge=Le.projectionMatrix.elements,Oe=De[14]/(De[10]-1),Ye=De[14]/(De[10]+1),A=(De[9]+1)/De[5],F=(De[9]-1)/De[5],E=(De[8]-1)/De[0],B=(Ge[8]+1)/Ge[0],k=Oe*E,j=Oe*B,Q=ge/(-E+B),re=Q*-E;if(me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(re),ce.translateZ(Q),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),De[10]===-1)ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const te=Oe+Q,S=Ye+Q,b=k-re,z=j+(ge-re),Z=A*Ye/S*te,ne=F*Ye/S*te;ce.projectionMatrix.makePerspective(b,z,Z,ne,te,S),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function V(ce,me){me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let me=ce.near,Le=ce.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Le=x.depthFar)),_.near=C.near=U.near=me,_.far=C.far=U.far=Le,(P!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,O=_.far),U.layers.mask=ce.layers.mask|2,C.layers.mask=ce.layers.mask|4,_.layers.mask=U.layers.mask|C.layers.mask;const ge=ce.parent,De=_.cameras;V(_,ge);for(let Ge=0;Ge<De.length;Ge++)V(De[Ge],ge);De.length===2?q(_,U,C):_.projectionMatrix.copy(U.projectionMatrix),W(ce,_,ge)};function W(ce,me,Le){Le===null?ce.matrix.copy(me.matrixWorld):(ce.matrix.copy(Le.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Cc*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let le=null;function _e(ce,me){if(u=me.getViewerPose(c||o),m=me,u!==null){const Le=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ge=!1;Le.length!==_.cameras.length&&(_.cameras.length=0,ge=!0);for(let Ge=0;Ge<Le.length;Ge++){const Oe=Le[Ge];let Ye=null;if(f!==null)Ye=f.getViewport(Oe);else{const F=h.getViewSubImage(d,Oe);Ye=F.viewport,Ge===0&&(e.setRenderTargetTextures(T,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(T))}let A=v[Ge];A===void 0&&(A=new bn,A.layers.enable(Ge),A.viewport=new Tt,v[Ge]=A),A.matrix.fromArray(Oe.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Oe.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ge===0&&(_.matrix.copy(A.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ge===!0&&_.cameras.push(A)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ge=h.getDepthInformation(Le[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(e,Ge,s.renderState)}}for(let Le=0;Le<w.length;Le++){const ge=M[Le],De=w[Le];ge!==null&&De!==void 0&&De.update(ge,me,c||o)}le&&le(ce,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}const He=new vp;He.setAnimationLoop(_e),this.setAnimationLoop=function(ce){le=ce},this.dispose=function(){}}}const as=new Jn,Aw=new bt;function Cw(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,pp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,T,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,M=T.envMapRotation;w&&(g.envMap.value=w,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(as)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const M=w.program;i.uniformBlockBinding(T,M)}function c(T,w){let M=s[T.id];M===void 0&&(m(T),M=u(T),s[T.id]=M,T.addEventListener("dispose",g));const I=w.program;i.updateUBOMapping(T,I);const L=e.render.frame;r[T.id]!==L&&(d(T),r[T.id]=L)}function u(T){const w=h();T.__bindingPointIndex=w;const M=n.createBuffer(),I=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=s[T.id],M=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,U=M.length;L<U;L++){const C=Array.isArray(M[L])?M[L]:[M[L]];for(let v=0,_=C.length;v<_;v++){const P=C[v];if(f(P,L,v,I)===!0){const O=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let $=0;$<D.length;$++){const H=D[$],J=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,O+N,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,w,M,I){const L=T.value,U=w+"_"+M;if(I[U]===void 0)return typeof L=="number"||typeof L=="boolean"?I[U]=L:I[U]=L.clone(),!0;{const C=I[U];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return I[U]=L,!0}else if(C.equals(L)===!1)return C.copy(L),!0}return!1}function m(T){const w=T.uniforms;let M=0;const I=16;for(let U=0,C=w.length;U<C;U++){const v=Array.isArray(w[U])?w[U]:[w[U]];for(let _=0,P=v.length;_<P;_++){const O=v[_],D=Array.isArray(O.value)?O.value:[O.value];for(let N=0,$=D.length;N<$;N++){const H=D[N],J=x(H),q=M%I,V=q%J.boundary,W=q+V;M+=V,W!==0&&I-W<J.storage&&(M+=I-W),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=J.storage}}}const L=M%I;return L>0&&(M+=I-L),T.__size=M,T.__cache={},this}function x(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function g(T){const w=T.target;w.removeEventListener("dispose",g);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Pw{constructor(e={}){const{canvas:t=mx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Xi,this.toneMappingExposure=1;const M=this;let I=!1,L=0,U=0,C=null,v=-1,_=null;const P=new Tt,O=new Tt;let D=null;const N=new We(0);let $=0,H=t.width,J=t.height,q=1,V=null,W=null;const le=new Tt(0,0,H,J),_e=new Tt(0,0,H,J);let He=!1;const ce=new su;let me=!1,Le=!1;const ge=new bt,De=new bt,Ge=new G,Oe=new Tt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function F(){return C===null?q:1}let E=i;function B(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),E===null){const Y="webgl2";if(E=B(Y,R),E===null)throw B(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let k,j,Q,re,te,S,b,z,Z,ne,ee,ve,fe,Me,Be,pe,Ee,ke,Ve,we,$e,je,ht,X;function Te(){k=new FM(E),k.init(),je=new yw(E,k),j=new RM(E,k,e,je),Q=new vw(E,k),j.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),re=new kM(E),te=new nw,S=new xw(E,k,Q,te,j,je,re),b=new LM(M),z=new UM(M),Z=new $x(E),ht=new AM(E,Z),ne=new NM(E,Z,re,ht),ee=new zM(E,ne,Z,re),Ve=new BM(E,j,S),pe=new PM(te),ve=new tw(M,b,z,k,j,ht,pe),fe=new Cw(M,te),Me=new sw,Be=new uw(k),ke=new TM(M,b,z,Q,ee,f,l),Ee=new mw(M,ee,j),X=new Rw(E,re,j,Q),we=new CM(E,k,re),$e=new OM(E,k,re),re.programs=ve.programs,M.capabilities=j,M.extensions=k,M.properties=te,M.renderLists=Me,M.shadowMap=Ee,M.state=Q,M.info=re}Te();const oe=new Tw(M,E);this.xr=oe,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const R=k.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=k.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(H,J,!1))},this.getSize=function(R){return R.set(H,J)},this.setSize=function(R,Y,ie=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,J=Y,t.width=Math.floor(R*q),t.height=Math.floor(Y*q),ie===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(H*q,J*q).floor()},this.setDrawingBufferSize=function(R,Y,ie){H=R,J=Y,q=ie,t.width=Math.floor(R*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,Y,ie,se){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,Y,ie,se),Q.viewport(P.copy(le).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,Y,ie,se){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,Y,ie,se),Q.scissor(O.copy(_e).multiplyScalar(q).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(R){Q.setScissorTest(He=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(R=!0,Y=!0,ie=!0){let se=0;if(R){let K=!1;if(C!==null){const xe=C.texture.format;K=xe===nu||xe===tu||xe===eu}if(K){const xe=C.texture.type,Ce=xe===Zn||xe===vs||xe===qr||xe===or||xe===Zc||xe===Jc,Ie=ke.getClearColor(),Ue=ke.getClearAlpha(),Xe=Ie.r,Ze=Ie.g,Fe=Ie.b;Ce?(m[0]=Xe,m[1]=Ze,m[2]=Fe,m[3]=Ue,E.clearBufferuiv(E.COLOR,0,m)):(x[0]=Xe,x[1]=Ze,x[2]=Fe,x[3]=Ue,E.clearBufferiv(E.COLOR,0,x))}else se|=E.COLOR_BUFFER_BIT}Y&&(se|=E.DEPTH_BUFFER_BIT),ie&&(se|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Me.dispose(),Be.dispose(),te.dispose(),b.dispose(),z.dispose(),ee.dispose(),ht.dispose(),X.dispose(),ve.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",hu),oe.removeEventListener("sessionend",du),Zi.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=re.autoReset,Y=Ee.enabled,ie=Ee.autoUpdate,se=Ee.needsUpdate,K=Ee.type;Te(),re.autoReset=R,Ee.enabled=Y,Ee.autoUpdate=ie,Ee.needsUpdate=se,Ee.type=K}function Ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ke(R){const Y=R.target;Y.removeEventListener("dispose",Ke),St(Y)}function St(R){Gt(R),te.remove(R)}function Gt(R){const Y=te.get(R).programs;Y!==void 0&&(Y.forEach(function(ie){ve.releaseProgram(ie)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ie,se,K,xe){Y===null&&(Y=Ye);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ie=Op(R,Y,ie,se,K);Q.setMaterial(se,Ce);let Ue=ie.index,Xe=1;if(se.wireframe===!0){if(Ue=ne.getWireframeAttribute(ie),Ue===void 0)return;Xe=2}const Ze=ie.drawRange,Fe=ie.attributes.position;let st=Ze.start*Xe,vt=(Ze.start+Ze.count)*Xe;xe!==null&&(st=Math.max(st,xe.start*Xe),vt=Math.min(vt,(xe.start+xe.count)*Xe)),Ue!==null?(st=Math.max(st,0),vt=Math.min(vt,Ue.count)):Fe!=null&&(st=Math.max(st,0),vt=Math.min(vt,Fe.count));const xt=vt-st;if(xt<0||xt===1/0)return;ht.setup(K,se,Ie,ie,Ue);let sn,at=we;if(Ue!==null&&(sn=Z.get(Ue),at=$e,at.setIndex(sn)),K.isMesh)se.wireframe===!0?(Q.setLineWidth(se.wireframeLinewidth*F()),at.setMode(E.LINES)):at.setMode(E.TRIANGLES);else if(K.isLine){let Ne=se.linewidth;Ne===void 0&&(Ne=1),Q.setLineWidth(Ne*F()),K.isLineSegments?at.setMode(E.LINES):K.isLineLoop?at.setMode(E.LINE_LOOP):at.setMode(E.LINE_STRIP)}else K.isPoints?at.setMode(E.POINTS):K.isSprite&&at.setMode(E.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)at.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))at.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ne=K._multiDrawStarts,ii=K._multiDrawCounts,lt=K._multiDrawCount,Cn=Ue?Z.get(Ue).bytesPerElement:1,Ss=te.get(se).currentProgram.getUniforms();for(let hn=0;hn<lt;hn++)Ss.setValue(E,"_gl_DrawID",hn),at.render(Ne[hn]/Cn,ii[hn])}else if(K.isInstancedMesh)at.renderInstances(st,xt,K.count);else if(ie.isInstancedBufferGeometry){const Ne=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ii=Math.min(ie.instanceCount,Ne);at.renderInstances(st,xt,ii)}else at.render(st,xt)};function dt(R,Y,ie){R.transparent===!0&&R.side===kt&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,oo(R,Y,ie),R.side=qi,R.needsUpdate=!0,oo(R,Y,ie),R.side=kt):oo(R,Y,ie)}this.compile=function(R,Y,ie=null){ie===null&&(ie=R),p=Be.get(ie),p.init(Y),w.push(p),ie.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),R!==ie&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xe=K.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const Ie=xe[Ce];dt(Ie,ie,K),se.add(Ie)}else dt(xe,ie,K),se.add(xe)}),w.pop(),p=null,se},this.compileAsync=function(R,Y,ie=null){const se=this.compile(R,Y,ie);return new Promise(K=>{function xe(){if(se.forEach(function(Ce){te.get(Ce).currentProgram.isReady()&&se.delete(Ce)}),se.size===0){K(R);return}setTimeout(xe,10)}k.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let An=null;function ni(R){An&&An(R)}function hu(){Zi.stop()}function du(){Zi.start()}const Zi=new vp;Zi.setAnimationLoop(ni),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(R){An=R,oe.setAnimationLoop(R),R===null?Zi.stop():Zi.start()},oe.addEventListener("sessionstart",hu),oe.addEventListener("sessionend",du),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(Y),Y=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,Y,C),p=Be.get(R,w.length),p.init(Y),w.push(p),De.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ce.setFromProjectionMatrix(De),Le=this.localClippingEnabled,me=pe.init(this.clippingPlanes,Le),g=Me.get(R,T.length),g.init(),T.push(g),oe.enabled===!0&&oe.isPresenting===!0){const xe=M.xr.getDepthSensingMesh();xe!==null&&Ua(xe,Y,-1/0,M.sortObjects)}Ua(R,Y,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(V,W),A=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,A&&ke.addToRenderList(g,R),this.info.render.frame++,me===!0&&pe.beginShadows();const ie=p.state.shadowsArray;Ee.render(ie,R,Y),me===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=g.opaque,K=g.transmissive;if(p.setupLights(),Y.isArrayCamera){const xe=Y.cameras;if(K.length>0)for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++){const Ue=xe[Ce];pu(se,K,R,Ue)}A&&ke.render(R);for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++){const Ue=xe[Ce];fu(g,R,Ue,Ue.viewport)}}else K.length>0&&pu(se,K,R,Y),A&&ke.render(R),fu(g,R,Y);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(M,R,Y),ht.resetDefaultState(),v=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],me===!0&&pe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Ua(R,Y,ie,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ce.intersectsSprite(R)){se&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);const Ce=ee.update(R),Ie=R.material;Ie.visible&&g.push(R,Ce,Ie,ie,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ce.intersectsObject(R))){const Ce=ee.update(R),Ie=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Oe.copy(Ce.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(Ie)){const Ue=Ce.groups;for(let Xe=0,Ze=Ue.length;Xe<Ze;Xe++){const Fe=Ue[Xe],st=Ie[Fe.materialIndex];st&&st.visible&&g.push(R,Ce,st,ie,Oe.z,Fe)}}else Ie.visible&&g.push(R,Ce,Ie,ie,Oe.z,null)}}const xe=R.children;for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++)Ua(xe[Ce],Y,ie,se)}function fu(R,Y,ie,se){const K=R.opaque,xe=R.transmissive,Ce=R.transparent;p.setupLightsView(ie),me===!0&&pe.setGlobalState(M.clippingPlanes,ie),se&&Q.viewport(P.copy(se)),K.length>0&&ro(K,Y,ie),xe.length>0&&ro(xe,Y,ie),Ce.length>0&&ro(Ce,Y,ie),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function pu(R,Y,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new Yi(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?xi:Zn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const xe=p.state.transmissionRenderTarget[se.id],Ce=se.viewport||P;xe.setSize(Ce.z,Ce.w);const Ie=M.getRenderTarget();M.setRenderTarget(xe),M.getClearColor(N),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),A&&ke.render(ie);const Ue=M.toneMapping;M.toneMapping=Xi;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),me===!0&&pe.setGlobalState(M.clippingPlanes,se),ro(R,ie,se),S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe),k.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Fe=0,st=Y.length;Fe<st;Fe++){const vt=Y[Fe],xt=vt.object,sn=vt.geometry,at=vt.material,Ne=vt.group;if(at.side===kt&&xt.layers.test(se.layers)){const ii=at.side;at.side=cn,at.needsUpdate=!0,mu(xt,ie,se,sn,at,Ne),at.side=ii,at.needsUpdate=!0,Ze=!0}}Ze===!0&&(S.updateMultisampleRenderTarget(xe),S.updateRenderTargetMipmap(xe))}M.setRenderTarget(Ie),M.setClearColor(N,$),Xe!==void 0&&(se.viewport=Xe),M.toneMapping=Ue}function ro(R,Y,ie){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,xe=R.length;K<xe;K++){const Ce=R[K],Ie=Ce.object,Ue=Ce.geometry,Xe=se===null?Ce.material:se,Ze=Ce.group;Ie.layers.test(ie.layers)&&mu(Ie,Y,ie,Ue,Xe,Ze)}}function mu(R,Y,ie,se,K,xe){R.onBeforeRender(M,Y,ie,se,K,xe),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(M,Y,ie,se,R,xe),K.transparent===!0&&K.side===kt&&K.forceSinglePass===!1?(K.side=cn,K.needsUpdate=!0,M.renderBufferDirect(ie,Y,se,K,R,xe),K.side=qi,K.needsUpdate=!0,M.renderBufferDirect(ie,Y,se,K,R,xe),K.side=kt):M.renderBufferDirect(ie,Y,se,K,R,xe),R.onAfterRender(M,Y,ie,se,K,xe)}function oo(R,Y,ie){Y.isScene!==!0&&(Y=Ye);const se=te.get(R),K=p.state.lights,xe=p.state.shadowsArray,Ce=K.state.version,Ie=ve.getParameters(R,K.state,xe,Y,ie),Ue=ve.getProgramCacheKey(Ie);let Xe=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?z:b).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Ke),Xe=new Map,se.programs=Xe);let Ze=Xe.get(Ue);if(Ze!==void 0){if(se.currentProgram===Ze&&se.lightsStateVersion===Ce)return vu(R,Ie),Ze}else Ie.uniforms=ve.getUniforms(R),R.onBeforeCompile(Ie,M),Ze=ve.acquireProgram(Ie,Ue),Xe.set(Ue,Ze),se.uniforms=Ie.uniforms;const Fe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=pe.uniform),vu(R,Ie),se.needsLights=Bp(R),se.lightsStateVersion=Ce,se.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=Ze,se.uniformsList=null,Ze}function gu(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Zo.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function vu(R,Y){const ie=te.get(R);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}function Op(R,Y,ie,se,K){Y.isScene!==!0&&(Y=Ye),S.resetTextureUnits();const xe=Y.fog,Ce=se.isMeshStandardMaterial?Y.environment:null,Ie=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bs,Ue=(se.isMeshStandardMaterial?z:b).get(se.envMap||Ce),Xe=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ze=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Fe=!!ie.morphAttributes.position,st=!!ie.morphAttributes.normal,vt=!!ie.morphAttributes.color;let xt=Xi;se.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=M.toneMapping);const sn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,at=sn!==void 0?sn.length:0,Ne=te.get(se),ii=p.state.lights;if(me===!0&&(Le===!0||R!==_)){const _n=R===_&&se.id===v;pe.setState(se,R,_n)}let lt=!1;se.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ii.state.version||Ne.outputColorSpace!==Ie||K.isBatchedMesh&&Ne.batching===!1||!K.isBatchedMesh&&Ne.batching===!0||K.isBatchedMesh&&Ne.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ne.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||K.isInstancedMesh&&Ne.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ne.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ne.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ne.instancingMorph===!1&&K.morphTexture!==null||Ne.envMap!==Ue||se.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==pe.numPlanes||Ne.numIntersection!==pe.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==Ze||Ne.morphTargets!==Fe||Ne.morphNormals!==st||Ne.morphColors!==vt||Ne.toneMapping!==xt||Ne.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Ne.__version=se.version);let Cn=Ne.currentProgram;lt===!0&&(Cn=oo(se,Y,K));let Ss=!1,hn=!1,fr=!1;const yt=Cn.getUniforms(),zn=Ne.uniforms;if(Q.useProgram(Cn.program)&&(Ss=!0,hn=!0,fr=!0),se.id!==v&&(v=se.id,hn=!0),Ss||_!==R){Q.buffers.depth.getReversed()?(ge.copy(R.projectionMatrix),vx(ge),_x(ge),yt.setValue(E,"projectionMatrix",ge)):yt.setValue(E,"projectionMatrix",R.projectionMatrix),yt.setValue(E,"viewMatrix",R.matrixWorldInverse);const Ci=yt.map.cameraPosition;Ci!==void 0&&Ci.setValue(E,Ge.setFromMatrixPosition(R.matrixWorld)),j.logarithmicDepthBuffer&&yt.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&yt.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,hn=!0,fr=!0)}if(K.isSkinnedMesh){yt.setOptional(E,K,"bindMatrix"),yt.setOptional(E,K,"bindMatrixInverse");const _n=K.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),yt.setValue(E,"boneTexture",_n.boneTexture,S))}K.isBatchedMesh&&(yt.setOptional(E,K,"batchingTexture"),yt.setValue(E,"batchingTexture",K._matricesTexture,S),yt.setOptional(E,K,"batchingIdTexture"),yt.setValue(E,"batchingIdTexture",K._indirectTexture,S),yt.setOptional(E,K,"batchingColorTexture"),K._colorsTexture!==null&&yt.setValue(E,"batchingColorTexture",K._colorsTexture,S));const pr=ie.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&Ve.update(K,ie,Cn),(hn||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,yt.setValue(E,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(zn.envMap.value=Ue,zn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(zn.envMapIntensity.value=Y.environmentIntensity),hn&&(yt.setValue(E,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&kp(zn,fr),xe&&se.fog===!0&&fe.refreshFogUniforms(zn,xe),fe.refreshMaterialUniforms(zn,se,q,J,p.state.transmissionRenderTarget[R.id]),Zo.upload(E,gu(Ne),zn,S)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zo.upload(E,gu(Ne),zn,S),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&yt.setValue(E,"center",K.center),yt.setValue(E,"modelViewMatrix",K.modelViewMatrix),yt.setValue(E,"normalMatrix",K.normalMatrix),yt.setValue(E,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const _n=se.uniformsGroups;for(let Ci=0,Ri=_n.length;Ci<Ri;Ci++){const _u=_n[Ci];X.update(_u,Cn),X.bind(_u,Cn)}}return Cn}function kp(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Bp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,Y,ie){te.get(R.texture).__webglTexture=Y,te.get(R.depthTexture).__webglTexture=ie;const se=te.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const ie=te.get(R);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ie=0){C=R,L=Y,U=ie;let se=!0,K=null,xe=!1,Ce=!1;if(R){const Ue=te.get(R);if(Ue.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(E.FRAMEBUFFER,null),se=!1;else if(Ue.__webglFramebuffer===void 0)S.setupRenderTarget(R);else if(Ue.__hasExternalTextures)S.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Fe=R.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&te.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ze=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[Y])?K=Ze[Y][ie]:K=Ze[Y],xe=!0):R.samples>0&&S.useMultisampledRTT(R)===!1?K=te.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?K=Ze[ie]:K=Ze,P.copy(R.viewport),O.copy(R.scissor),D=R.scissorTest}else P.copy(le).multiplyScalar(q).floor(),O.copy(_e).multiplyScalar(q).floor(),D=He;if(Q.bindFramebuffer(E.FRAMEBUFFER,K)&&se&&Q.drawBuffers(R,K),Q.viewport(P),Q.scissor(O),Q.setScissorTest(D),xe){const Ue=te.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,ie)}else if(Ce){const Ue=te.get(R.texture),Xe=Y||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ue.__webglTexture,ie||0,Xe)}v=-1},this.readRenderTargetPixels=function(R,Y,ie,se,K,xe,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Q.bindFramebuffer(E.FRAMEBUFFER,Ie);try{const Ue=R.texture,Xe=Ue.format,Ze=Ue.type;if(!j.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&ie>=0&&ie<=R.height-K&&E.readPixels(Y,ie,se,K,je.convert(Xe),je.convert(Ze),xe)}finally{const Ue=C!==null?te.get(C).__webglFramebuffer:null;Q.bindFramebuffer(E.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ie,se,K,xe,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const Ue=R.texture,Xe=Ue.format,Ze=Ue.type;if(!j.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-se&&ie>=0&&ie<=R.height-K){Q.bindFramebuffer(E.FRAMEBUFFER,Ie);const Fe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Fe),E.bufferData(E.PIXEL_PACK_BUFFER,xe.byteLength,E.STREAM_READ),E.readPixels(Y,ie,se,K,je.convert(Xe),je.convert(Ze),0);const st=C!==null?te.get(C).__webglFramebuffer:null;Q.bindFramebuffer(E.FRAMEBUFFER,st);const vt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await gx(E,vt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Fe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,xe),E.deleteBuffer(Fe),E.deleteSync(vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ie=0){R.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-ie),K=Math.floor(R.image.width*se),xe=Math.floor(R.image.height*se),Ce=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;S.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,ie,0,0,Ce,Ie,K,xe),Q.unbindTexture()},this.copyTextureToTexture=function(R,Y,ie=null,se=null,K=0){R.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],Y=arguments[2],K=arguments[3]||0,ie=null);let xe,Ce,Ie,Ue,Xe,Ze,Fe,st,vt;const xt=R.isCompressedTexture?R.mipmaps[K]:R.image;ie!==null?(xe=ie.max.x-ie.min.x,Ce=ie.max.y-ie.min.y,Ie=ie.isBox3?ie.max.z-ie.min.z:1,Ue=ie.min.x,Xe=ie.min.y,Ze=ie.isBox3?ie.min.z:0):(xe=xt.width,Ce=xt.height,Ie=xt.depth||1,Ue=0,Xe=0,Ze=0),se!==null?(Fe=se.x,st=se.y,vt=se.z):(Fe=0,st=0,vt=0);const sn=je.convert(Y.format),at=je.convert(Y.type);let Ne;Y.isData3DTexture?(S.setTexture3D(Y,0),Ne=E.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(S.setTexture2DArray(Y,0),Ne=E.TEXTURE_2D_ARRAY):(S.setTexture2D(Y,0),Ne=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Y.unpackAlignment);const ii=E.getParameter(E.UNPACK_ROW_LENGTH),lt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Cn=E.getParameter(E.UNPACK_SKIP_PIXELS),Ss=E.getParameter(E.UNPACK_SKIP_ROWS),hn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,xt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,xt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ue),E.pixelStorei(E.UNPACK_SKIP_ROWS,Xe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ze);const fr=R.isDataArrayTexture||R.isData3DTexture,yt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const zn=te.get(R),pr=te.get(Y),_n=te.get(zn.__renderTarget),Ci=te.get(pr.__renderTarget);Q.bindFramebuffer(E.READ_FRAMEBUFFER,_n.__webglFramebuffer),Q.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ri=0;Ri<Ie;Ri++)fr&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,te.get(R).__webglTexture,K,Ze+Ri),R.isDepthTexture?(yt&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,te.get(Y).__webglTexture,K,vt+Ri),E.blitFramebuffer(Ue,Xe,xe,Ce,Fe,st,xe,Ce,E.DEPTH_BUFFER_BIT,E.NEAREST)):yt?E.copyTexSubImage3D(Ne,K,Fe,st,vt+Ri,Ue,Xe,xe,Ce):E.copyTexSubImage2D(Ne,K,Fe,st,vt+Ri,Ue,Xe,xe,Ce);Q.bindFramebuffer(E.READ_FRAMEBUFFER,null),Q.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else yt?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Ne,K,Fe,st,vt,xe,Ce,Ie,sn,at,xt.data):Y.isCompressedArrayTexture?E.compressedTexSubImage3D(Ne,K,Fe,st,vt,xe,Ce,Ie,sn,xt.data):E.texSubImage3D(Ne,K,Fe,st,vt,xe,Ce,Ie,sn,at,xt):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,K,Fe,st,xe,Ce,sn,at,xt.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,K,Fe,st,xt.width,xt.height,sn,xt.data):E.texSubImage2D(E.TEXTURE_2D,K,Fe,st,xe,Ce,sn,at,xt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ii),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,lt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Cn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ss),E.pixelStorei(E.UNPACK_SKIP_IMAGES,hn),K===0&&Y.generateMipmaps&&E.generateMipmap(Ne),Q.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ie=null,se=null,K=0){return R.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,R=arguments[2],Y=arguments[3],K=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ie,se,K)},this.initRenderTarget=function(R){te.get(R).__webglFramebuffer===void 0&&S.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?S.setTextureCube(R,0):R.isData3DTexture?S.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?S.setTexture2DArray(R,0):S.setTexture2D(R,0),Q.unbindTexture()},this.resetState=function(){L=0,U=0,C=null,Q.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Lw extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dw extends zt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=gn,u=gn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn extends hr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new G,ca=new G,ad=new bt,wr=new iu,Io=new Ra,wl=new G,ld=new G;class Iw extends Ht{constructor(e=new Kt,t=new Tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)la.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=la.distanceTo(ca);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;ad.copy(s).invert(),wr.copy(e.ray).applyMatrix4(ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=u.getX(x),T=u.getX(x+1),w=Uo(this,e,wr,l,p,T);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(f),p=Uo(this,e,wr,l,x,g);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=Uo(this,e,wr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Uo(this,e,wr,l,m-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uo(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(la.fromBufferAttribute(o,s),ca.fromBufferAttribute(o,r),t.distanceSqToSegment(la,ca,wl,ld)>i)return;wl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(wl);if(!(l<e.near||l>e.far))return{distance:l,point:ld.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const cd=new G,ud=new G;class Bn extends Iw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)cd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cd.distanceTo(ud);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uw extends zt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new G,s=[],r=[],o=[],a=new G,l=new bt;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ou extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fw extends ou{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Fo=new G,Sl=new au,El=new au,Tl=new au;class lu extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new G){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),c=Fo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Sl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),El.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),Tl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Sl.calc(l),El.calc(l),Tl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hd(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Nw(n,e){const t=1-n;return t*t*e}function Ow(n,e){return 2*(1-n)*n*e}function kw(n,e){return n*n*e}function Or(n,e,t,i){return Nw(n,e)+Ow(n,t)+kw(n,i)}function Bw(n,e){const t=1-n;return t*t*t*e}function zw(n,e){const t=1-n;return 3*t*t*n*e}function Hw(n,e){return 3*(1-n)*n*n*e}function Gw(n,e){return n*n*n*e}function kr(n,e,t,i,s){return Bw(n,e)+zw(n,t)+Hw(n,i)+Gw(n,s)}class Sp extends Qn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vw extends Qn{constructor(e=new G,t=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new G){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ep extends Qn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ww extends Qn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends Qn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ap extends Qn{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y),Or(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cp extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(hd(a,l.x,c.x,u.x,h.x),hd(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var ua=Object.freeze({__proto__:null,ArcCurve:Fw,CatmullRomCurve3:lu,CubicBezierCurve:Sp,CubicBezierCurve3:Vw,EllipseCurve:ou,LineCurve:Ep,LineCurve3:Ww,QuadraticBezierCurve:Tp,QuadraticBezierCurve3:Ap,SplineCurve:Cp});class $w extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ua[s.type]().fromJSON(s))}return this}}class dd extends $w{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ep(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Tp(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Sp(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Cp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ou(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xs extends Kt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new G,d=new ae,f=new G,m=new G,x=new G;let g=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:g=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let T=0;T<=t;T++){const w=i+T*u*s,M=Math.sin(w),I=Math.cos(w);for(let L=0;L<=e.length-1;L++){h.x=e[L].x*M,h.y=e[L].y,h.z=e[L].x*I,o.push(h.x,h.y,h.z),d.x=T/t,d.y=L/(e.length-1),a.push(d.x,d.y);const U=l[3*L+0]*M,C=l[3*L+1],v=l[3*L+0]*I;c.push(U,C,v)}}for(let T=0;T<t;T++)for(let w=0;w<e.length-1;w++){const M=w+T*e.length,I=M,L=M+e.length,U=M+e.length+1,C=M+1;r.push(I,L,C),r.push(U,C,L)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.points,e.segments,e.phiStart,e.phiLength)}}class At extends Kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const x=[],g=i/2;let p=0;T(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function T(){const M=new G,I=new G;let L=0;const U=(t-e)/i;for(let C=0;C<=r;C++){const v=[],_=C/r,P=_*(t-e)+e;for(let O=0;O<=s;O++){const D=O/s,N=D*l+a,$=Math.sin(N),H=Math.cos(N);I.x=P*$,I.y=-_*i+g,I.z=P*H,h.push(I.x,I.y,I.z),M.set($,U,H).normalize(),d.push(M.x,M.y,M.z),f.push(D,1-_),v.push(m++)}x.push(v)}for(let C=0;C<s;C++)for(let v=0;v<r;v++){const _=x[v][C],P=x[v+1][C],O=x[v+1][C+1],D=x[v][C+1];(e>0||v!==0)&&(u.push(_,P,D),L+=3),(t>0||v!==r-1)&&(u.push(P,O,D),L+=3)}c.addGroup(p,L,0),p+=L}function w(M){const I=m,L=new ae,U=new G;let C=0;const v=M===!0?e:t,_=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;const P=m;for(let O=0;O<=s;O++){const N=O/s*l+a,$=Math.cos(N),H=Math.sin(N);U.x=v*H,U.y=g*_,U.z=v*$,h.push(U.x,U.y,U.z),d.push(0,_,0),L.x=$*.5+.5,L.y=H*.5*_+.5,f.push(L.x,L.y),m++}for(let O=0;O<s;O++){const D=I+O,N=P+O;M===!0?u.push(N,N+1,D):u.push(N+1,N,D),C+=3}c.addGroup(p,C,M===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const No=new G,Oo=new G,Al=new G,ko=new wn;class ei extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Nr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:x,b:g,c:p}=ko;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ko.getNormal(Al),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let T=0;T<3;T++){const w=(T+1)%3,M=h[T],I=h[w],L=ko[u[T]],U=ko[u[w]],C=`${M}_${I}`,v=`${I}_${M}`;v in d&&d[v]?(Al.dot(d[v].normal)<=r&&(f.push(L.x,L.y,L.z),f.push(U.x,U.y,U.z)),d[v]=null):C in d||(d[C]={index0:c[T],index1:c[w],normal:Al.clone()})}}for(const m in d)if(d[m]){const{index0:x,index1:g}=d[m];No.fromBufferAttribute(a,x),Oo.fromBufferAttribute(a,g),f.push(No.x,No.y,No.z),f.push(Oo.x,Oo.y,Oo.z)}this.setAttribute("position",new ft(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rp extends dd{constructor(e){super(e),this.uuid=ur(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new dd().fromJSON(s))}return this}}const Xw={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Pp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(i&&(r=Zw(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let m=t;m<s;m+=t)h=n[m],d=n[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Kr(r,o,t,a,l,f,0),o}};function Pp(n,e,t,i,s){let r,o;if(s===lS(n,e,t,i)>0)for(r=e;r<t;r+=i)o=fd(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=fd(r,n[r],n[r+1],o);return o&&La(o,o.next)&&(Jr(o),o=o.next),o}function ys(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(La(t,t.next)||wt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&nS(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?qw(n,i,s,r):jw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Yw(ys(n),e,t),Kr(n,e,t,i,s,r,2)):o===2&&Kw(n,e,t,i,s,r):Kr(ys(n),e,t,i,s,r,1);break}}}function jw(n){const e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&js(s,a,r,l,o,c,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qw(n,e,t,i){const s=n.prev,r=n,o=n.next;if(wt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=Pc(f,m,e,t,i),T=Pc(x,g,e,t,i);let w=n.prevZ,M=n.nextZ;for(;w&&w.z>=p&&M&&M.z<=T;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&js(a,u,l,h,c,d,w.x,w.y)&&wt(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&js(a,u,l,h,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&js(a,u,l,h,c,d,w.x,w.y)&&wt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=T;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&js(a,u,l,h,c,d,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Yw(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!La(s,r)&&Lp(s,i,i.next,r)&&Zr(s,r)&&Zr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Jr(i),Jr(i.next),i=n=r),i=i.next}while(i!==n);return ys(i)}function Kw(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rS(o,a)){let l=Dp(o,a);o=ys(o,o.next),l=ys(l,l.next),Kr(o,e,t,i,s,r,0),Kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Zw(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Pp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(sS(c));for(s.sort(Jw),r=0;r<s.length;r++)t=Qw(s[r],t);return t}function Jw(n,e){return n.x-e.x}function Qw(n,e){const t=eS(n,e);if(!t)return e;const i=Dp(t,n);return ys(i,i.next),ys(t,t.next)}function eS(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&js(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Zr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&tS(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function tS(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function nS(n,e,t,i){let s=n;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,iS(s)}function iS(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Pc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function js(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function rS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!oS(n,e)&&(Zr(n,e)&&Zr(e,n)&&aS(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||La(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function La(n,e){return n.x===e.x&&n.y===e.y}function Lp(n,e,t,i){const s=zo(wt(n,e,t)),r=zo(wt(n,e,i)),o=zo(wt(t,i,n)),a=zo(wt(t,i,e));return!!(s!==r&&o!==a||s===0&&Bo(n,t,e)||r===0&&Bo(n,i,e)||o===0&&Bo(t,n,i)||a===0&&Bo(t,e,i))}function Bo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zo(n){return n>0?1:n<0?-1:0}function oS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Lp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zr(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function aS(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dp(n,e){const t=new Lc(n.i,n.x,n.y),i=new Lc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function fd(n,e,t,i){const s=new Lc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Lc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lS(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Br{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Br.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];pd(e),md(i,e);let o=e.length;t.forEach(pd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,md(i,t[l]);const a=Xw.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function pd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function md(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class cu extends Kt{constructor(e=new Rp([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:cS;let w,M=!1,I,L,U,C;p&&(w=p.getSpacedPoints(u),M=!0,d=!1,I=p.computeFrenetFrames(u,!1),L=new G,U=new G,C=new G),d||(g=0,f=0,m=0,x=0);const v=a.extractPoints(c);let _=v.shape;const P=v.holes;if(!Br.isClockWise(_)){_=_.reverse();for(let A=0,F=P.length;A<F;A++){const E=P[A];Br.isClockWise(E)&&(P[A]=E.reverse())}}const D=Br.triangulateShape(_,P),N=_;for(let A=0,F=P.length;A<F;A++){const E=P[A];_=_.concat(E)}function $(A,F,E){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(F,E)}const H=_.length,J=D.length;function q(A,F,E){let B,k,j;const Q=A.x-F.x,re=A.y-F.y,te=E.x-A.x,S=E.y-A.y,b=Q*Q+re*re,z=Q*S-re*te;if(Math.abs(z)>Number.EPSILON){const Z=Math.sqrt(b),ne=Math.sqrt(te*te+S*S),ee=F.x-re/Z,ve=F.y+Q/Z,fe=E.x-S/ne,Me=E.y+te/ne,Be=((fe-ee)*S-(Me-ve)*te)/(Q*S-re*te);B=ee+Q*Be-A.x,k=ve+re*Be-A.y;const pe=B*B+k*k;if(pe<=2)return new ae(B,k);j=Math.sqrt(pe/2)}else{let Z=!1;Q>Number.EPSILON?te>Number.EPSILON&&(Z=!0):Q<-Number.EPSILON?te<-Number.EPSILON&&(Z=!0):Math.sign(re)===Math.sign(S)&&(Z=!0),Z?(B=-re,k=Q,j=Math.sqrt(b)):(B=Q,k=re,j=Math.sqrt(b/2))}return new ae(B/j,k/j)}const V=[];for(let A=0,F=N.length,E=F-1,B=A+1;A<F;A++,E++,B++)E===F&&(E=0),B===F&&(B=0),V[A]=q(N[A],N[E],N[B]);const W=[];let le,_e=V.concat();for(let A=0,F=P.length;A<F;A++){const E=P[A];le=[];for(let B=0,k=E.length,j=k-1,Q=B+1;B<k;B++,j++,Q++)j===k&&(j=0),Q===k&&(Q=0),le[B]=q(E[B],E[j],E[Q]);W.push(le),_e=_e.concat(le)}for(let A=0;A<g;A++){const F=A/g,E=f*Math.cos(F*Math.PI/2),B=m*Math.sin(F*Math.PI/2)+x;for(let k=0,j=N.length;k<j;k++){const Q=$(N[k],V[k],B);ge(Q.x,Q.y,-E)}for(let k=0,j=P.length;k<j;k++){const Q=P[k];le=W[k];for(let re=0,te=Q.length;re<te;re++){const S=$(Q[re],le[re],B);ge(S.x,S.y,-E)}}}const He=m+x;for(let A=0;A<H;A++){const F=d?$(_[A],_e[A],He):_[A];M?(U.copy(I.normals[0]).multiplyScalar(F.x),L.copy(I.binormals[0]).multiplyScalar(F.y),C.copy(w[0]).add(U).add(L),ge(C.x,C.y,C.z)):ge(F.x,F.y,0)}for(let A=1;A<=u;A++)for(let F=0;F<H;F++){const E=d?$(_[F],_e[F],He):_[F];M?(U.copy(I.normals[A]).multiplyScalar(E.x),L.copy(I.binormals[A]).multiplyScalar(E.y),C.copy(w[A]).add(U).add(L),ge(C.x,C.y,C.z)):ge(E.x,E.y,h/u*A)}for(let A=g-1;A>=0;A--){const F=A/g,E=f*Math.cos(F*Math.PI/2),B=m*Math.sin(F*Math.PI/2)+x;for(let k=0,j=N.length;k<j;k++){const Q=$(N[k],V[k],B);ge(Q.x,Q.y,h+E)}for(let k=0,j=P.length;k<j;k++){const Q=P[k];le=W[k];for(let re=0,te=Q.length;re<te;re++){const S=$(Q[re],le[re],B);M?ge(S.x,S.y+w[u-1].y,w[u-1].x+E):ge(S.x,S.y,h+E)}}}ce(),me();function ce(){const A=s.length/3;if(d){let F=0,E=H*F;for(let B=0;B<J;B++){const k=D[B];De(k[2]+E,k[1]+E,k[0]+E)}F=u+g*2,E=H*F;for(let B=0;B<J;B++){const k=D[B];De(k[0]+E,k[1]+E,k[2]+E)}}else{for(let F=0;F<J;F++){const E=D[F];De(E[2],E[1],E[0])}for(let F=0;F<J;F++){const E=D[F];De(E[0]+H*u,E[1]+H*u,E[2]+H*u)}}i.addGroup(A,s.length/3-A,0)}function me(){const A=s.length/3;let F=0;Le(N,F),F+=N.length;for(let E=0,B=P.length;E<B;E++){const k=P[E];Le(k,F),F+=k.length}i.addGroup(A,s.length/3-A,1)}function Le(A,F){let E=A.length;for(;--E>=0;){const B=E;let k=E-1;k<0&&(k=A.length-1);for(let j=0,Q=u+g*2;j<Q;j++){const re=H*j,te=H*(j+1),S=F+B+re,b=F+k+re,z=F+k+te,Z=F+B+te;Ge(S,b,z,Z)}}}function ge(A,F,E){l.push(A),l.push(F),l.push(E)}function De(A,F,E){Oe(A),Oe(F),Oe(E);const B=s.length/3,k=T.generateTopUV(i,s,B-3,B-2,B-1);Ye(k[0]),Ye(k[1]),Ye(k[2])}function Ge(A,F,E,B){Oe(A),Oe(F),Oe(B),Oe(F),Oe(E),Oe(B);const k=s.length/3,j=T.generateSideWallUV(i,s,k-6,k-3,k-2,k-1);Ye(j[0]),Ye(j[1]),Ye(j[3]),Ye(j[1]),Ye(j[2]),Ye(j[3])}function Oe(A){s.push(l[A*3+0]),s.push(l[A*3+1]),s.push(l[A*3+2])}function Ye(A){r.push(A.x),r.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return uS(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ua[s.type]().fromJSON(s)),new cu(i,e.options)}}const cS={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-h),new ae(d,1-m),new ae(x,1-p)]:[new ae(a,1-l),new ae(u,1-h),new ae(f,1-m),new ae(g,1-p)]}};function uS(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Da extends Kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,d=new G,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){const T=[],w=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){const L=I/t;h.x=-e*Math.cos(s+L*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+L*r)*Math.sin(o+w*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(L+M,1-w),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const w=u[p][T+1],M=u[p][T],I=u[p+1][T],L=u[p+1][T+1];(p!==0||o>0)&&f.push(w,M,L),(p!==i-1||l<Math.PI)&&f.push(M,I,L)}this.setIndex(f),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ia extends Kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new G,h=new G,d=new G;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const x=m/s*r,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,T=(s+1)*f+m;o.push(x,g,T),o.push(g,p,T)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}let hS=class Ip extends Kt{constructor(e=new Ap(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new G,l=new G,c=new ae;let u=new G;const h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function x(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),T(),p()}function g(w){u=e.getPointAt(w/t,u);const M=o.normals[w],I=o.binormals[w];for(let L=0;L<=s;L++){const U=L/s*Math.PI*2,C=Math.sin(U),v=-Math.cos(U);l.x=v*M.x+C*I.x,l.y=v*M.y+C*I.y,l.z=v*M.z+C*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let M=1;M<=s;M++){const I=(s+1)*(w-1)+(M-1),L=(s+1)*w+(M-1),U=(s+1)*w+M,C=(s+1)*(w-1)+M;m.push(I,L,C),m.push(L,U,C)}}function T(){for(let w=0;w<=t;w++)for(let M=0;M<=s;M++)c.x=w/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ip(new ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};class kn extends hr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sp,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dS extends kn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const ha={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fS{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const pS=new fS;class so{constructor(e){this.manager=e!==void 0?e:pS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}so.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class mS extends Error{constructor(e,t){super(e),this.response=t}}class gS extends so{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ha.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){T();function T(){h.read().then(({done:w,value:M})=>{if(w)p.close();else{x+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let L=0,U=u.length;L<U;L++){const C=u[L];C.onProgress&&C.onProgress(I)}p.enqueue(M),T()}},w=>{p.error(w)})}}});return new Response(g)}else throw new mS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ha.add(e,c);const u=hi[e];delete hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vS extends so{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ha.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Yr("img");function l(){u(),ha.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class _S extends so{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Dw,a=new gS(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_i,o.wrapT=c.wrapT!==void 0?c.wrapT:_i,o.magFilter=c.magFilter!==void 0?c.magFilter:nn,o.minFilter=c.minFilter!==void 0?c.minFilter:nn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Wi),c.mipmapCount===1&&(o.minFilter=nn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class xS extends so{constructor(e){super(e)}load(e,t,i,s){const r=new zt,o=new vS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Up extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cl=new bt,gd=new G,vd=new G;class yS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new su,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MS extends yS{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _d extends Up{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new MS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bS extends Up{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wS extends Bn{constructor(e=10,t=10,i=4473924,s=8947848){i=new We(i),s=new We(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const x=d===r?i:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const u=new Kt;u.setAttribute("position",new ft(l,3)),u.setAttribute("color",new ft(c,3));const h=new Tn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class SS extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);class ls{static async captureCanvas(e,t,i,s){return new Promise((r,o)=>{try{const{format:a,quality:l,width:c,height:u,background:h,resolutionMultiplier:d}=s,f=new ae;e.getSize(f);const m=e.getPixelRatio(),x=new We,g=e.getClearAlpha();e.getClearColor(x);const p=c*d,T=u*d,w=new Yi(p,T,{samples:4,format:a==="png"?En:Qc,type:Zn});if(h==="transparent")e.setClearColor(0,0);else if(h==="white")e.setClearColor(16777215,1);else{const _=new We(h);e.setClearColor(_,1)}e.setRenderTarget(w),e.setSize(p,T),e.setPixelRatio(1),e.render(t,i);const M=new Uint8Array(p*T*4);e.readRenderTargetPixels(w,0,0,p,T,M);const I=document.createElement("canvas");I.width=c,I.height=u;const L=I.getContext("2d");if(!L)throw new Error("Failed to get canvas context");const U=L.createImageData(p,T);U.data.set(M);const C=document.createElement("canvas");C.width=p,C.height=T;const v=C.getContext("2d");if(!v)throw new Error("Failed to get temp canvas context");v.putImageData(U,0,0),L.imageSmoothingEnabled=!0,L.imageSmoothingQuality="high",L.drawImage(C,0,0,p,T,0,0,c,u),I.toBlob(_=>{_?(e.setRenderTarget(null),e.setSize(f.width,f.height),e.setPixelRatio(m),e.setClearColor(x,g),w.dispose(),r(_)):o(new Error("Failed to create blob"))},a==="png"?"image/png":"image/jpeg",a==="jpg"?l:void 0)}catch(a){o(a)}})}static generateFilename(e="mockup",t,i){const r=(i||new Date).toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,19);return`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${r}.${t}`}static downloadBlob(e,t){const i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}static async batchExport(e,t,i,s){const{angles:r,...o}=s,a=[],l=i.position.clone(),c=i.rotation.clone();for(const u of r){this.setCameraForAngle(i,u);const h=await this.captureCanvas(e,t,i,o);a.push(h)}return i.position.copy(l),i.rotation.copy(c),a}static setCameraForAngle(e,t){switch(t){case"front":e.position.set(0,0,15),e.lookAt(0,0,0);break;case"back":e.position.set(0,0,-15),e.lookAt(0,0,0);break;case"top":e.position.set(0,15,0),e.lookAt(0,0,0);break;case"isometric":e.position.set(15,15,15),e.lookAt(0,0,0);break}}static async createZip(e,t){try{const i=await A_(()=>import("./jszip.min-BiHF8TMC.js").then(r=>r.j),[]),s=new i.default;for(let r=0;r<e.length;r++)s.file(t[r],e[r]);return await s.generateAsync({type:"blob"})}catch(i){throw console.error("Failed to create ZIP:",i),new Error("Failed to create ZIP archive. Please try exporting individual images.")}}}const ES={class:"bg-white rounded-xl shadow-lg p-6"},TS={class:"space-y-6"},AS={class:"grid grid-cols-2 gap-3"},CS=["onClick"],RS={class:"grid grid-cols-3 gap-3"},PS=["onClick"],LS={class:"text-center"},DS={class:"font-medium text-gray-800"},IS={class:"text-xs text-gray-500 mt-1"},US={key:0},FS={class:"flex items-center justify-between mb-2"},NS={class:"text-sm font-medium text-indigo-600"},OS={class:"grid grid-cols-3 gap-3 mb-4"},kS=["onClick"],BS={class:"text-xs font-medium text-gray-700"},zS={key:0,class:"mt-4"},HS={class:"flex items-center gap-3"},GS={class:"border-t border-gray-200 pt-6"},VS={class:"bg-gray-50 rounded-lg p-4"},WS={class:"flex items-center justify-between mb-2"},$S={class:"text-sm font-medium text-gray-800"},XS={class:"flex items-center justify-between mb-2"},jS={class:"text-sm font-medium text-gray-800"},qS={class:"flex items-center justify-between"},YS={class:"text-sm font-medium text-gray-800"},KS={class:"space-y-3"},ZS=["disabled"],JS={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},QS={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},eE=["disabled"],tE={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},nE={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},iE={class:"flex items-center gap-2"},sE={key:0,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},rE={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},oE={class:"text-sm font-medium"},aE=un({__name:"ExportPanel",props:{templateName:{default:"mockup"},sceneManager:{}},emits:["export","batchExport","error"],setup(n,{emit:e}){const t=n,i=e,s=["png","jpg"],r=ye("png"),o=[{label:"Standard",value:1,dimensions:"1920×1080"},{label:"HD",value:2,dimensions:"3840×2160"},{label:"Ultra",value:4,dimensions:"7680×4320"}],a=ye(1),l=ye(90),c=[{label:"Transparent",value:"transparent"},{label:"White",value:"white"},{label:"Custom",value:"custom"}],u=ye("transparent"),h=ye("#3b82f6"),d=ye(!1),f=ye(null),m=Bt(()=>{const _=a.value;return`${1920*_}×${1080*_}`}),x=Bt(()=>ls.generateFilename(t.templateName,r.value)),g=Bt(()=>{const C=r.value==="png"?"~2-5 MB":"~0.5-2 MB",v=a.value;return v===2?`~${C} × 2`:v===4?`~${C} × 4`:C}),p=()=>{/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(h.value)||(h.value="#3b82f6")},T=()=>u.value==="custom"?h.value:u.value,w=()=>({format:r.value,quality:l.value/100,width:1920,height:1080,background:T(),resolutionMultiplier:a.value}),M=()=>({angles:["front","back","top","isometric"],...w()}),I=(C,v,_=3e3)=>{f.value={type:C,message:v},setTimeout(()=>{f.value=null},_)},L=async()=>{if(!(d.value||!t.sceneManager)){d.value=!0,f.value=null;try{const C=t.sceneManager.getRenderer(),v=t.sceneManager.getScene(),_=t.sceneManager.getCamera(),P=w(),O=await ls.captureCanvas(C,v,_,P),D=ls.generateFilename(t.templateName,P.format);ls.downloadBlob(O,D),i("export",O,D),I("success",`Image exported successfully: ${D}`)}catch(C){console.error("Export failed:",C),i("error",C),I("error","Failed to export image. Please try again.")}finally{d.value=!1}}},U=async()=>{if(!(d.value||!t.sceneManager)){d.value=!0,f.value=null;try{const C=t.sceneManager.getRenderer(),v=t.sceneManager.getScene(),_=t.sceneManager.getCamera(),P=M(),O=await ls.batchExport(C,v,_,P),D=P.angles.map(H=>{const q=new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,19);return`${t.templateName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${H}-${q}.${P.format}`}),N=await ls.createZip(O,D),$=`${t.templateName}-angles-${new Date().toISOString().slice(0,10)}.zip`;ls.downloadBlob(N,$),i("batchExport",O,D),I("success",`Batch exported successfully: ${$}`)}catch(C){console.error("Batch export failed:",C),i("error",C),I("error","Failed to export batch. Please try again.")}finally{d.value=!1}}};return qn(r,C=>{C==="png"&&u.value==="transparent"||C==="jpg"&&u.value==="transparent"&&(u.value="white")}),qn(u,C=>{r.value==="jpg"&&C==="transparent"&&(u.value="white")}),(C,v)=>(ue(),he("div",ES,[v[20]||(v[20]=y("h2",{class:"text-xl font-semibold mb-4 text-gray-800"},"Export Settings",-1)),y("div",TS,[y("div",null,[v[3]||(v[3]=y("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Format",-1)),y("div",AS,[(ue(),he(Mt,null,Un(s,_=>y("button",{key:_,onClick:P=>r.value=_,class:ot(["px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium",r.value===_?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"])},be(_.toUpperCase()),11,CS)),64))])]),y("div",null,[v[4]||(v[4]=y("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Resolution",-1)),y("div",RS,[(ue(),he(Mt,null,Un(o,_=>y("button",{key:_.value,onClick:P=>a.value=_.value,class:ot(["px-3 py-3 rounded-lg border-2 transition-all duration-200",a.value===_.value?"border-indigo-500 bg-indigo-50":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"])},[y("div",LS,[y("div",DS,be(_.label),1),y("div",IS,be(_.dimensions),1)])],10,PS)),64))])]),r.value==="jpg"?(ue(),he("div",US,[y("div",FS,[v[5]||(v[5]=y("label",{class:"text-sm font-medium text-gray-700"},"Quality",-1)),y("span",NS,be(l.value)+"%",1)]),Gi(y("input",{"onUpdate:modelValue":v[0]||(v[0]=_=>l.value=_),type:"range",min:"50",max:"100",step:"5",class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"},null,512),[[Vi,l.value]]),v[6]||(v[6]=y("div",{class:"flex justify-between text-xs text-gray-500 mt-1"},[y("span",null,"Low"),y("span",null,"Medium"),y("span",null,"High")],-1))])):tt("",!0),y("div",null,[v[9]||(v[9]=y("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Background",-1)),y("div",OS,[(ue(),he(Mt,null,Un(c,_=>y("button",{key:_.value,onClick:P=>u.value=_.value,class:ot(["px-3 py-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center",u.value===_.value?"border-indigo-500 bg-indigo-50":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"])},[y("div",{class:"w-8 h-8 rounded-full mb-2 border border-gray-300",style:ga({backgroundColor:_.value==="transparent"?"transparent":_.value==="white"?"#ffffff":_.value,backgroundImage:_.value==="transparent"?"linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb)":"none",backgroundSize:"20px 20px",backgroundPosition:"0 0, 10px 10px"})},null,4),y("span",BS,be(_.label),1)],10,kS)),64))]),u.value==="custom"?(ue(),he("div",zS,[v[7]||(v[7]=y("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Custom Color",-1)),y("div",HS,[Gi(y("input",{"onUpdate:modelValue":v[1]||(v[1]=_=>h.value=_),type:"color",class:"w-12 h-12 cursor-pointer rounded-lg border border-gray-300"},null,512),[[Vi,h.value]]),Gi(y("input",{"onUpdate:modelValue":v[2]||(v[2]=_=>h.value=_),type:"text",placeholder:"#RRGGBB",class:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",onInput:p},null,544),[[Vi,h.value]])]),v[8]||(v[8]=y("div",{class:"mt-2 text-xs text-gray-500"}," Enter hex color code or use the color picker ",-1))])):tt("",!0)]),y("div",GS,[v[13]||(v[13]=y("h3",{class:"text-sm font-medium text-gray-700 mb-3"},"Preview",-1)),y("div",VS,[y("div",WS,[v[10]||(v[10]=y("span",{class:"text-sm text-gray-600"},"File name:",-1)),y("span",$S,be(x.value),1)]),y("div",XS,[v[11]||(v[11]=y("span",{class:"text-sm text-gray-600"},"Dimensions:",-1)),y("span",jS,be(m.value),1)]),y("div",qS,[v[12]||(v[12]=y("span",{class:"text-sm text-gray-600"},"Size:",-1)),y("span",YS,be(g.value),1)])])]),y("div",KS,[y("button",{onClick:L,disabled:d.value,class:ot(["w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",d.value?"bg-indigo-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700 text-white"])},[d.value?(ue(),he("svg",JS,[...v[14]||(v[14]=[y("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),y("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):(ue(),he("svg",QS,[...v[15]||(v[15]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},null,-1)])])),en(" "+be(d.value?"Exporting...":"Export Image"),1)],10,ZS),y("button",{onClick:U,disabled:d.value,class:ot(["w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",d.value?"bg-gray-400 cursor-not-allowed":"bg-gray-600 hover:bg-gray-700 text-white"])},[d.value?(ue(),he("svg",tE,[...v[16]||(v[16]=[y("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),y("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):(ue(),he("svg",nE,[...v[17]||(v[17]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},null,-1)])])),en(" "+be(d.value?"Exporting...":"Export All Angles (ZIP)"),1)],10,eE),f.value?(ue(),he("div",{key:0,class:ot(["mt-3 p-3 rounded-lg",f.value.type==="success"?"bg-green-50 text-green-700":"bg-red-50 text-red-700"])},[y("div",iE,[f.value.type==="success"?(ue(),he("svg",sE,[...v[18]||(v[18]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(ue(),he("svg",rE,[...v[19]||(v[19]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])),y("span",oE,be(f.value.message),1)])],2)):tt("",!0)])])]))}}),lE=vn(aE,[["__scopeId","data-v-53750bee"]]),cE={class:"accordion-section"},uE={class:"accordion-title"},hE={class:"title-text"},dE={key:0,class:"accordion-content"},fE=un({__name:"AccordionSection",props:{title:{},isExpanded:{type:Boolean}},emits:["toggle"],setup(n){return(e,t)=>(ue(),he("div",cE,[y("button",{class:"accordion-header",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},[y("div",uE,[Au(e.$slots,"icon",{},()=>[t[1]||(t[1]=y("div",{class:"default-icon"},[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",stroke:"currentColor","stroke-width":"1.5"})])],-1))]),y("span",hE,be(n.title),1)]),y("div",{class:ot(["accordion-chevron",{rotated:!n.isExpanded}])},[...t[2]||(t[2]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M4 6L8 10L12 6",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)]),et($g,{name:"accordion"},{default:Bi(()=>[n.isExpanded?(ue(),he("div",dE,[Au(e.$slots,"default",{},void 0,!0)])):tt("",!0)]),_:3})]))}}),Gs=vn(fE,[["__scopeId","data-v-f1dafb0d"]]),pE={class:"wrap-uploader"},mE={class:"upload-text"},gE={class:"text-lg font-semibold text-gray-800"},vE={class:"text-sm text-gray-500 mt-1"},_E={key:0,class:"error-message"},xE={class:"flex items-center gap-2"},yE={class:"text-sm font-medium text-red-700"},ME={key:1,class:"image-preview"},bE={class:"preview-image-container"},wE=["src","alt"],SE={key:0,class:"loading-overlay"},EE={key:1,class:"image-info"},TE={class:"info-grid"},AE={class:"info-item"},CE={class:"info-value"},RE={key:0,class:"info-item"},PE={class:"info-value"},LE={class:"info-item"},DE={class:"info-value"},IE={key:2,class:"apply-section"},UE=["disabled"],FE={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},NE={key:1,class:"loading-spinner-small"},OE={class:"apply-hint text-xs text-gray-500 mt-2"},yd=10*1024*1024,kE=un({__name:"WrapUploader",props:{templateName:{default:"product"}},emits:["upload","apply","clear"],setup(n,{emit:e}){const t=e,i=ye(null),s=ye(null),r=ye(!1),o=ye(null),a=ye(null),l=ye(null),c=ye(!1),u=ye(null),h=ye(!1),d=["image/png","image/jpeg","image/jpg","image/svg+xml","image/webp"],f=v=>v.size>yd?(l.value=`File too large. Maximum size is ${U(yd)}.`,!1):d.includes(v.type)?(l.value=null,!0):(l.value="Invalid file type. Please upload PNG, JPG, JPEG, SVG, or WebP.",!1),m=v=>{f(v)&&(o.value=v,a.value&&URL.revokeObjectURL(a.value),a.value=URL.createObjectURL(v),u.value=null,c.value=!0,t("upload",v))},x=v=>{v.preventDefault(),r.value=!0},g=v=>{v.preventDefault(),r.value=!1},p=v=>{var O;v.preventDefault(),r.value=!1;const _=(O=v.dataTransfer)==null?void 0:O.files;if(!(_!=null&&_.length))return;const P=_[0];m(P)},T=v=>{var O;const _=v.target,P=(O=_.files)==null?void 0:O[0];P&&(m(P),_.value="")},w=()=>{var v;(v=s.value)==null||v.click()},M=()=>{a.value&&(URL.revokeObjectURL(a.value),a.value=null),o.value=null,u.value=null,l.value=null,t("clear")},I=v=>{const _=v.target;c.value=!1,u.value={dimensions:{width:_.naturalWidth,height:_.naturalHeight}}},L=()=>{c.value=!1,l.value="Failed to load image preview."},U=v=>{if(v===0)return"0 Bytes";const _=1024,P=["Bytes","KB","MB","GB"],O=Math.floor(Math.log(v)/Math.log(_));return parseFloat((v/Math.pow(_,O)).toFixed(2))+" "+P[O]},C=async()=>{if(o.value){h.value=!0;try{t("apply",{file:o.value,fit:"fit"})}catch(v){console.error("Failed to apply label:",v),l.value="Failed to apply label. Please try again."}finally{h.value=!1}}};return Ai(()=>{a.value&&URL.revokeObjectURL(a.value)}),(v,_)=>{var P,O,D;return ue(),he("div",pE,[y("div",{ref_key:"dropZoneRef",ref:i,class:ot(["drop-zone",{"drag-over":r.value,"has-file":o.value}]),onDragover:jt(x,["prevent"]),onDragleave:jt(g,["prevent"]),onDrop:jt(p,["prevent"])},[_[1]||(_[1]=y("div",{class:"upload-icon"},[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})])],-1)),y("div",mE,[y("p",gE,be(o.value?o.value.name:"Upload Label Design"),1),y("p",vE,be(o.value?"Click to change or drop another file":"Drag & drop or click to browse"),1),_[0]||(_[0]=y("p",{class:"text-xs text-gray-400 mt-2"}," Supports: PNG, JPG, JPEG, SVG, WebP • Max 10MB ",-1))]),y("input",{ref_key:"fileInputRef",ref:s,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:T},null,544),y("button",{type:"button",class:"browse-btn",onClick:w}," Browse Files ")],34),l.value?(ue(),he("div",_E,[y("div",xE,[_[2]||(_[2]=y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),y("span",yE,be(l.value),1)])])):tt("",!0),a.value?(ue(),he("div",ME,[y("div",{class:"preview-header"},[_[4]||(_[4]=y("h3",{class:"text-sm font-medium text-gray-700"},"Label Preview",-1)),y("button",{type:"button",class:"clear-btn",onClick:M},[..._[3]||(_[3]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])]),y("div",bE,[y("img",{src:a.value,alt:((P=o.value)==null?void 0:P.name)||"Preview",class:"preview-image",onLoad:I,onError:L},null,40,wE),c.value?(ue(),he("div",SE,[..._[5]||(_[5]=[y("div",{class:"loading-spinner"},null,-1),y("p",{class:"loading-text"},"Loading preview...",-1)])])):tt("",!0),u.value?(ue(),he("div",EE,[y("div",TE,[y("div",AE,[_[6]||(_[6]=y("span",{class:"info-label"},"Size:",-1)),y("span",CE,be(U(((O=o.value)==null?void 0:O.size)||0)),1)]),u.value.dimensions?(ue(),he("div",RE,[_[7]||(_[7]=y("span",{class:"info-label"},"Dimensions:",-1)),y("span",PE,be(u.value.dimensions.width)+" × "+be(u.value.dimensions.height),1)])):tt("",!0),y("div",LE,[_[8]||(_[8]=y("span",{class:"info-label"},"Type:",-1)),y("span",DE,be(((D=o.value)==null?void 0:D.type)||"Unknown"),1)])])])):tt("",!0)])])):tt("",!0),a.value?(ue(),he("div",IE,[y("button",{type:"button",class:"apply-btn",onClick:C,disabled:h.value},[h.value?(ue(),he("div",NE)):(ue(),he("svg",FE,[..._[9]||(_[9]=[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])),en(" "+be(h.value?"Applying...":"Apply to Label"),1)],8,UE),y("p",OE," Label will be wrapped around the "+be(n.templateName.toLowerCase()),1)])):tt("",!0)])}}}),BE=vn(kE,[["__scopeId","data-v-ff81679e"]]),zE={class:"dual-uploader"},HE={class:"upload-grid"},GE={class:"upload-panel"},VE={class:"upload-icon"},WE={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},$E=["src"],XE={class:"upload-text"},jE={class:"text-sm font-medium text-gray-800"},qE={class:"text-xs text-gray-500 mt-1"},YE={key:0,class:"panel-actions"},KE=["disabled"],ZE={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},JE={key:1,class:"loading-spinner-small"},QE={class:"upload-panel"},eT={class:"upload-icon"},tT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},nT=["src"],iT={class:"upload-text"},sT={class:"text-sm font-medium text-gray-800"},rT={class:"text-xs text-gray-500 mt-1"},oT={key:0,class:"panel-actions"},aT=["disabled"],lT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},cT={key:1,class:"loading-spinner-small"},uT={key:0,class:"error-message"},hT={class:"flex items-center gap-2"},dT={class:"text-sm font-medium text-red-700"},fT={key:1,class:"error-message"},pT={class:"flex items-center gap-2"},mT={class:"text-sm font-medium text-red-700"},gT={key:2,class:"apply-both-section"},vT=["disabled"],_T={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},xT={key:1,class:"loading-spinner-small"},yT=10*1024*1024,MT=un({__name:"DualUploader",emits:["upload-front","upload-back","apply-front","apply-back","apply-both","clear-front","clear-back"],setup(n,{emit:e}){const t=e,i=ye(null),s=ye(null),r=ye(!1),o=ye(!1),a=ye(null),l=ye(null),c=ye(null),u=ye(null),h=ye(null),d=ye(null),f=ye(!1),m=ye(!1),x=ye(!1),g=["image/png","image/jpeg","image/jpg","image/svg+xml","image/webp"],p=V=>!(V.size>yT||!g.includes(V.type)),T=V=>{if(!p(V)){h.value="Invalid file. Max 10MB, PNG/JPG/JPEG/SVG/WebP only.";return}h.value=null,a.value=V,c.value&&URL.revokeObjectURL(c.value),c.value=URL.createObjectURL(V),t("upload-front",V)},w=V=>{if(!p(V)){d.value="Invalid file. Max 10MB, PNG/JPG/JPEG/SVG/WebP only.";return}d.value=null,l.value=V,u.value&&URL.revokeObjectURL(u.value),u.value=URL.createObjectURL(V),t("upload-back",V)},M=V=>{V.preventDefault(),r.value=!0},I=V=>{V.preventDefault(),r.value=!1},L=V=>{var _e;V.preventDefault(),r.value=!1;const W=(_e=V.dataTransfer)==null?void 0:_e.files;if(!(W!=null&&W.length))return;const le=W[0];T(le)},U=V=>{var _e;const W=V.target,le=(_e=W.files)==null?void 0:_e[0];le&&(T(le),W.value="")},C=()=>{var V;(V=i.value)==null||V.click()},v=V=>{V.preventDefault(),o.value=!0},_=V=>{V.preventDefault(),o.value=!1},P=V=>{var _e;V.preventDefault(),o.value=!1;const W=(_e=V.dataTransfer)==null?void 0:_e.files;if(!(W!=null&&W.length))return;const le=W[0];w(le)},O=V=>{var _e;const W=V.target,le=(_e=W.files)==null?void 0:_e[0];le&&(w(le),W.value="")},D=()=>{var V;(V=s.value)==null||V.click()},N=()=>{c.value&&(URL.revokeObjectURL(c.value),c.value=null),a.value=null,h.value=null,t("clear-front")},$=()=>{u.value&&(URL.revokeObjectURL(u.value),u.value=null),l.value=null,d.value=null,t("clear-back")},H=async()=>{if(a.value){f.value=!0;try{t("apply-front",{file:a.value,fit:"fit"})}catch(V){console.error("Failed to apply front design:",V),h.value="Failed to apply design. Please try again."}finally{f.value=!1}}},J=async()=>{if(l.value){m.value=!0;try{t("apply-back",{file:l.value,fit:"fit"})}catch(V){console.error("Failed to apply back design:",V),d.value="Failed to apply design. Please try again."}finally{m.value=!1}}},q=async()=>{if(!(!a.value||!l.value)){x.value=!0;try{t("apply-both",{frontFile:a.value,backFile:l.value,fit:"fit"})}catch(V){console.error("Failed to apply both designs:",V),h.value="Failed to apply designs. Please try again.",d.value="Failed to apply designs. Please try again."}finally{x.value=!1}}};return Ai(()=>{c.value&&URL.revokeObjectURL(c.value),u.value&&URL.revokeObjectURL(u.value)}),(V,W)=>(ue(),he("div",zE,[W[12]||(W[12]=y("div",{class:"uploader-header"},[y("h3",{class:"text-lg font-semibold text-gray-800"},"Front & Back Design"),y("p",{class:"text-sm text-gray-500 mt-1"}," Upload designs for front and back panels ")],-1)),y("div",HE,[y("div",GE,[W[3]||(W[3]=Mn('<div class="panel-header" data-v-34ed1ef4><div class="panel-icon" data-v-34ed1ef4><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-34ed1ef4><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" data-v-34ed1ef4></path></svg></div><h4 class="panel-title" data-v-34ed1ef4>Front Design</h4></div>',1)),y("div",{class:ot(["drop-zone",{"drag-over":r.value,"has-file":a.value}]),onDragover:jt(M,["prevent"]),onDragleave:jt(I,["prevent"]),onDrop:jt(L,["prevent"])},[y("div",VE,[a.value?(ue(),he("img",{key:1,src:c.value,alt:"Front preview",class:"preview-thumbnail"},null,8,$E)):(ue(),he("svg",WE,[...W[0]||(W[0]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},null,-1)])]))]),y("div",XE,[y("p",jE,be(a.value?a.value.name:"Drag & drop front design"),1),y("p",qE,be(a.value?"Click to change":"or click to browse"),1)]),y("input",{ref_key:"frontInputRef",ref:i,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:U},null,544),y("button",{type:"button",class:"browse-btn",onClick:C},be(a.value?"Change":"Browse"),1)],34),a.value?(ue(),he("div",YE,[y("button",{type:"button",class:"action-btn apply-btn",onClick:H,disabled:f.value},[f.value?(ue(),he("div",JE)):(ue(),he("svg",ZE,[...W[1]||(W[1]=[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])),en(" "+be(f.value?"Applying...":"Apply to Front"),1)],8,KE),y("button",{type:"button",class:"action-btn clear-btn",onClick:N},[...W[2]||(W[2]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),en(" Clear ",-1)])])])):tt("",!0)]),y("div",QE,[W[7]||(W[7]=Mn('<div class="panel-header" data-v-34ed1ef4><div class="panel-icon" data-v-34ed1ef4><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-34ed1ef4><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" data-v-34ed1ef4></path></svg></div><h4 class="panel-title" data-v-34ed1ef4>Back Design</h4></div>',1)),y("div",{class:ot(["drop-zone",{"drag-over":o.value,"has-file":l.value}]),onDragover:jt(v,["prevent"]),onDragleave:jt(_,["prevent"]),onDrop:jt(P,["prevent"])},[y("div",eT,[l.value?(ue(),he("img",{key:1,src:u.value,alt:"Back preview",class:"preview-thumbnail"},null,8,nT)):(ue(),he("svg",tT,[...W[4]||(W[4]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},null,-1)])]))]),y("div",iT,[y("p",sT,be(l.value?l.value.name:"Drag & drop back design"),1),y("p",rT,be(l.value?"Click to change":"or click to browse"),1)]),y("input",{ref_key:"backInputRef",ref:s,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:O},null,544),y("button",{type:"button",class:"browse-btn",onClick:D},be(l.value?"Change":"Browse"),1)],34),l.value?(ue(),he("div",oT,[y("button",{type:"button",class:"action-btn apply-btn",onClick:J,disabled:m.value},[m.value?(ue(),he("div",cT)):(ue(),he("svg",lT,[...W[5]||(W[5]=[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])),en(" "+be(m.value?"Applying...":"Apply to Back"),1)],8,aT),y("button",{type:"button",class:"action-btn clear-btn",onClick:$},[...W[6]||(W[6]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),en(" Clear ",-1)])])])):tt("",!0)])]),h.value?(ue(),he("div",uT,[y("div",hT,[W[8]||(W[8]=y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),y("span",dT,"Front: "+be(h.value),1)])])):tt("",!0),d.value?(ue(),he("div",fT,[y("div",pT,[W[9]||(W[9]=y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),y("span",mT,"Back: "+be(d.value),1)])])):tt("",!0),a.value&&l.value?(ue(),he("div",gT,[y("button",{type:"button",class:"apply-both-btn",onClick:q,disabled:x.value},[x.value?(ue(),he("div",xT)):(ue(),he("svg",_T,[...W[10]||(W[10]=[y("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"},null,-1)])])),en(" "+be(x.value?"Applying Both...":"Apply Both Designs"),1)],8,vT),W[11]||(W[11]=y("p",{class:"apply-hint text-xs text-gray-500 mt-2 text-center"}," Apply front and back designs simultaneously ",-1))])):tt("",!0)]))}}),bT=vn(MT,[["__scopeId","data-v-34ed1ef4"]]),wT={class:"multiface-uploader"},ST={class:"face-selection"},ET={class:"face-grid"},TT=["onClick"],AT={class:"face-icon"},CT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},RT=["src","alt"],PT={class:"face-label"},LT={class:"face-name"},DT={key:0,class:"texture-indicator"},IT={key:0,class:"upload-section"},UT={class:"selected-face-header"},FT={class:"text-sm font-medium text-gray-800"},NT={class:"face-dimensions"},OT={class:"text-xs text-gray-500"},kT={class:"upload-icon"},BT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},zT=["src"],HT={class:"upload-text"},GT={class:"text-sm font-medium text-gray-800"},VT={class:"text-xs text-gray-500 mt-1"},WT={key:0,class:"error-message"},$T={class:"flex items-center gap-2"},XT={class:"text-sm font-medium text-red-700"},jT={key:1,class:"apply-section"},qT=["disabled"],YT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},KT={key:1,class:"loading-spinner-small"},ZT={class:"texture-summary"},JT={class:"summary-item"},QT={class:"summary-value"},e2={class:"summary-item"},t2={class:"summary-value"},n2=un({__name:"MultiFaceUploader",props:{faces:{default:()=>[]},faceTextures:{default:()=>({})}},emits:["upload","apply","clear"],setup(n,{emit:e}){const t=n,i=e,s=ye(null),r=ye(!1),o=ye(null),a=ye(null),l=ye(null),c=ye(!1),u=ye(null),h=Bt(()=>t.faces.filter(v=>v.canReceiveTexture)),d=Bt(()=>u.value&&h.value.find(v=>v.id===u.value)||null),f=Bt(()=>h.value.filter(v=>t.faceTextures[v.id]).length),m=v=>{u.value=v,U()},x=v=>t.faceTextures[v]||null,g=v=>{const P=["image/png","image/jpeg","image/jpg","image/svg+xml","image/webp"];return v.size>10485760?(l.value="File too large. Maximum size is 10MB.",!1):P.includes(v.type)?(l.value=null,!0):(l.value="Invalid file type. Please upload PNG, JPG, JPEG, SVG, or WebP.",!1)},p=v=>{d.value&&g(v)&&(o.value=v,a.value&&URL.revokeObjectURL(a.value),a.value=URL.createObjectURL(v),i("upload",{faceId:d.value.id,file:v}))},T=v=>{v.preventDefault(),r.value=!0},w=v=>{v.preventDefault(),r.value=!1},M=v=>{var O;v.preventDefault(),r.value=!1;const _=(O=v.dataTransfer)==null?void 0:O.files;if(!(_!=null&&_.length))return;const P=_[0];p(P)},I=v=>{var O;const _=v.target,P=(O=_.files)==null?void 0:O[0];P&&(p(P),_.value="")},L=()=>{var v;(v=s.value)==null||v.click()},U=()=>{a.value&&(URL.revokeObjectURL(a.value),a.value=null),o.value=null,l.value=null},C=async()=>{if(!(!d.value||!o.value)){c.value=!0;try{i("apply",{faceId:d.value.id,file:o.value,fit:"fit"})}catch(v){console.error("Failed to apply design:",v),l.value="Failed to apply design. Please try again."}finally{c.value=!1}}};return h.value.length>0&&!u.value&&(u.value=h.value[0].id),Ai(()=>{a.value&&URL.revokeObjectURL(a.value)}),(v,_)=>(ue(),he("div",wT,[_[7]||(_[7]=y("div",{class:"uploader-header"},[y("h3",{class:"text-lg font-semibold text-gray-800"},"Multi-Face Design"),y("p",{class:"text-sm text-gray-500 mt-1"}," Upload designs for each available face ")],-1)),y("div",ST,[y("div",ET,[(ue(!0),he(Mt,null,Un(h.value,P=>(ue(),he("div",{key:P.id,class:ot(["face-item",{selected:u.value===P.id,"has-texture":x(P.id)}]),onClick:O=>m(P.id)},[y("div",AT,[x(P.id)?(ue(),he("img",{key:1,src:x(P.id),alt:`${P.name} texture`,class:"face-texture-preview"},null,8,RT)):(ue(),he("svg",CT,[..._[0]||(_[0]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},null,-1)])]))]),y("div",PT,[y("span",LT,be(P.name),1),x(P.id)?(ue(),he("span",DT,[..._[1]||(_[1]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 text-green-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):tt("",!0)])],10,TT))),128))])]),d.value?(ue(),he("div",IT,[y("div",UT,[y("h4",FT,be(d.value.name),1),y("div",NT,[y("span",OT,be(d.value.textureSize.width)+" × "+be(d.value.textureSize.height)+" units ",1)])]),y("div",{class:ot(["drop-zone",{"drag-over":r.value,"has-file":o.value}]),onDragover:jt(T,["prevent"]),onDragleave:jt(w,["prevent"]),onDrop:jt(M,["prevent"])},[y("div",kT,[o.value?(ue(),he("img",{key:1,src:a.value,alt:"Preview",class:"preview-image"},null,8,zT)):(ue(),he("svg",BT,[..._[2]||(_[2]=[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},null,-1)])]))]),y("div",HT,[y("p",GT,be(o.value?o.value.name:`Upload design for ${d.value.name}`),1),y("p",VT,be(o.value?"Click to change or drop another file":"Drag & drop or click to browse"),1)]),y("input",{ref_key:"fileInputRef",ref:s,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:I},null,544),y("button",{type:"button",class:"browse-btn",onClick:L},be(o.value?"Change":"Browse"),1)],34),l.value?(ue(),he("div",WT,[y("div",$T,[_[3]||(_[3]=y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),y("span",XT,be(l.value),1)])])):tt("",!0),o.value?(ue(),he("div",jT,[y("button",{type:"button",class:"apply-btn",onClick:C,disabled:c.value},[c.value?(ue(),he("div",KT)):(ue(),he("svg",YT,[..._[4]||(_[4]=[y("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])])),en(" "+be(c.value?"Applying...":`Apply to ${d.value.name}`),1)],8,qT)])):tt("",!0)])):tt("",!0),y("div",ZT,[y("div",JT,[_[5]||(_[5]=y("span",{class:"summary-label"},"Textured Faces:",-1)),y("span",QT,be(f.value)+" / "+be(h.value.length),1)]),y("div",e2,[_[6]||(_[6]=y("span",{class:"summary-label"},"Selected:",-1)),y("span",t2,be(d.value?d.value.name:"None"),1)])])]))}}),i2=vn(n2,[["__scopeId","data-v-099eb43d"]]),s2={class:"panel-header"},r2={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o2={key:0,d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},a2={key:1,d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},l2={key:0,class:"panel-content"},c2={class:"accordion"},u2={class:"material-options"},h2={class:"material-presets"},d2=["onClick"],f2={class:"material-icon"},p2={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m2={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g2={key:2,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v2={class:"material-label"},_2={class:"lighting-options"},x2={class:"lighting-presets"},y2=["onClick"],M2={class:"lighting-icon"},b2={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w2={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},S2={key:2,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E2={class:"lighting-label"},T2={class:"brightness-control"},A2={class:"slider-container"},C2={class:"slider-value"},R2={class:"dimensions-controls"},P2={class:"dimension-input"},L2={class:"dimension-input"},D2={class:"dimension-input"},I2={key:1,class:"collapsed-content"},U2=un({__name:"RightPanel",props:{selectedFace:{},textureUrls:{},currentMaterialType:{},currentLightingPreset:{},dimensions:{},sceneManager:{},currentTemplateName:{},currentTemplateCategory:{}},emits:["select-face","set-material-type","set-lighting-preset","update-dimensions","design-upload","apply-to-face","apply-to-all","clear-upload","remove-texture","copy-to-others","reset-all-textures","export","batch-export","export-error"],setup(n,{emit:e}){const t=n,i=Bt(()=>{const V=t.currentTemplateCategory;return["cup","perfume","bowl","bottle"].includes(V||"")?"wrap":["pouch","bag"].includes(V||"")?"dual":"multiface"}),s=Bt(()=>{if(!t.sceneManager)return[];const V=t.sceneManager.getCurrentGeometry();return V?V.getTextureableFaces().map(W=>({...W,canReceiveTexture:!0})):[]}),r=ye({}),o=()=>{},a=async V=>{await c(V.faceId,V.file),r.value[V.faceId]=URL.createObjectURL(V.file)},l=V=>{var le;const W=(le=t.sceneManager)==null?void 0:le.getCurrentGeometry();W&&W.clearTexture(V),r.value[V]=null},c=async(V,W)=>{if(!t.sceneManager){console.error("No sceneManager");return}const le=t.sceneManager.getCurrentGeometry();if(!le){console.error("No currentGeometry");return}const _e=URL.createObjectURL(W);console.log(`Applying texture to face: ${V}`,_e),await le.applyTexture(V,_e)},u=async V=>{if(!t.sceneManager)return;const W=t.sceneManager.getCurrentGeometry();if(!W)return;const le=W.getTextureableFaces(),_e=le.find(He=>He.id==="label")||le.find(He=>He.id==="body")||le[0];_e&&await c(_e.id,V.file)},h=()=>{if(!t.sceneManager)return;const V=t.sceneManager.getCurrentGeometry();if(!V)return;V.getTextureableFaces().forEach(le=>V.clearTexture(le.id))},d=()=>{},f=()=>{},m=async V=>{await c("front",V.file)},x=async V=>{await c("back",V.file)},g=async V=>{await c("front",V.frontFile),await c("back",V.backFile)},p=()=>{var W;const V=(W=t.sceneManager)==null?void 0:W.getCurrentGeometry();V&&V.clearTexture("front")},T=()=>{var W;const V=(W=t.sceneManager)==null?void 0:W.getCurrentGeometry();V&&V.clearTexture("back")},w=e,M=ye(!1),I=ye(75),L=eo({upload:!0,face:!0,material:!1,lighting:!1,dimensions:!1,export:!1}),U=["matte","glossy","metallic"],C=["studio","outdoor","dramatic"],v=()=>{M.value=!M.value},_=V=>{L[V]=!L[V]},P=V=>{w("select-face",V)},O=V=>{w("set-material-type",V)},D=V=>{w("set-lighting-preset",V)},N=()=>{console.log("Brightness updated:",I.value)},$=()=>{w("update-dimensions")},H=V=>{w("design-upload",V)},J=(V,W)=>{w("export",V,W)},q=V=>{w("export-error",V)};return(V,W)=>(ue(),he("div",{class:ot(["right-panel",{collapsed:M.value}])},[y("div",s2,[W[10]||(W[10]=y("h3",{class:"panel-title"},"Properties",-1)),y("button",{class:"collapse-btn",onClick:v},[(ue(),he("svg",r2,[M.value?(ue(),he("path",o2)):(ue(),he("path",a2))]))])]),M.value?(ue(),he("div",I2,[y("button",{class:"expand-btn",onClick:v,title:"Expand panel"},[...W[21]||(W[21]=[y("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),W[22]||(W[22]=y("div",{class:"collapsed-label"},"Properties",-1))])):(ue(),he("div",l2,[y("div",c2,[et(Gs,{title:"Upload Design","is-expanded":L.upload,onToggle:W[0]||(W[0]=le=>_("upload"))},{default:Bi(()=>[i.value==="wrap"?(ue(),ps(BE,{key:0,"template-name":n.currentTemplateName,onUpload:H,onApply:u,onClear:h},null,8,["template-name"])):i.value==="dual"?(ue(),ps(bT,{key:1,onUploadFront:d,onUploadBack:f,onApplyFront:m,onApplyBack:x,onApplyBoth:g,onClearFront:p,onClearBack:T})):i.value==="multiface"?(ue(),ps(i2,{key:2,faces:s.value,"face-textures":r.value,onUpload:o,onApply:a,onClear:l},null,8,["faces","face-textures"])):(ue(),ps(Fv,{key:3,"selected-face":n.selectedFace,onUpload:H,onApplyToFace:V.handleApplyToFace,onApplyToAll:V.handleApplyToAll,onClear:h},null,8,["selected-face","onApplyToFace","onApplyToAll"]))]),_:1},8,["is-expanded"]),et(Gs,{title:"Face Selector","is-expanded":L.face,onToggle:W[1]||(W[1]=le=>_("face"))},{default:Bi(()=>[et(S_,{"selected-face":n.selectedFace,textures:n.textureUrls,onSelect:P,onRemoveTexture:V.handleRemoveTexture,onCopyToOthers:V.handleCopyToOthers,onResetAll:V.handleResetAllTextures},null,8,["selected-face","textures","onRemoveTexture","onCopyToOthers","onResetAll"])]),_:1},8,["is-expanded"]),et(Gs,{title:"Material","is-expanded":L.material,onToggle:W[2]||(W[2]=le=>_("material"))},{default:Bi(()=>[y("div",u2,[y("div",h2,[(ue(),he(Mt,null,Un(U,le=>y("button",{key:le,class:ot(["material-preset",{active:n.currentMaterialType===le}]),onClick:_e=>O(le)},[y("div",f2,[le==="matte"?(ue(),he("svg",p2,[...W[11]||(W[11]=[y("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),y("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1)])])):le==="glossy"?(ue(),he("svg",m2,[...W[12]||(W[12]=[y("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),y("path",{d:"M10 6L12 10L10 14L8 10L10 6Z",fill:"currentColor","fill-opacity":"0.5"},null,-1),y("circle",{cx:"10",cy:"10",r:"2",fill:"currentColor"},null,-1)])])):(ue(),he("svg",g2,[...W[13]||(W[13]=[y("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),y("path",{d:"M6 6L14 14",stroke:"currentColor","stroke-width":"1.5"},null,-1),y("path",{d:"M6 14L14 6",stroke:"currentColor","stroke-width":"1.5"},null,-1)])]))]),y("span",v2,be(le),1)],10,d2)),64))])])]),_:1},8,["is-expanded"]),et(Gs,{title:"Lighting","is-expanded":L.lighting,onToggle:W[4]||(W[4]=le=>_("lighting"))},{default:Bi(()=>[y("div",_2,[y("div",x2,[(ue(),he(Mt,null,Un(C,le=>y("button",{key:le,class:ot(["lighting-preset",{active:n.currentLightingPreset===le}]),onClick:_e=>D(le)},[y("div",M2,[le==="studio"?(ue(),he("svg",b2,[...W[14]||(W[14]=[y("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),y("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M10 16V18",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M2 10H4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M16 10H18",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])])):le==="outdoor"?(ue(),he("svg",w2,[...W[15]||(W[15]=[y("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),y("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M15 5L13.5 6.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M18 10L16 10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M15 15L13.5 13.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])])):(ue(),he("svg",S2,[...W[16]||(W[16]=[y("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),y("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M5 5L6.5 6.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M2 10H4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),y("path",{d:"M5 15L6.5 13.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])]))]),y("span",E2,be(le),1)],10,y2)),64))]),y("div",T2,[W[17]||(W[17]=y("label",{class:"control-label"},"Brightness",-1)),y("div",A2,[Gi(y("input",{"onUpdate:modelValue":W[3]||(W[3]=le=>I.value=le),type:"range",min:"0",max:"100",step:"1",class:"slider",onInput:N},null,544),[[Vi,I.value]]),y("span",C2,be(I.value)+"%",1)])])])]),_:1},8,["is-expanded"]),et(Gs,{title:"Box Dimensions","is-expanded":L.dimensions,onToggle:W[8]||(W[8]=le=>_("dimensions"))},{default:Bi(()=>[y("div",R2,[y("div",P2,[W[18]||(W[18]=y("label",{class:"dimension-label"},[y("span",null,"Width"),y("span",{class:"dimension-unit"},"cm")],-1)),Gi(y("input",{"onUpdate:modelValue":W[5]||(W[5]=le=>n.dimensions.width=le),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:$},null,544),[[Vi,n.dimensions.width]])]),y("div",L2,[W[19]||(W[19]=y("label",{class:"dimension-label"},[y("span",null,"Height"),y("span",{class:"dimension-unit"},"cm")],-1)),Gi(y("input",{"onUpdate:modelValue":W[6]||(W[6]=le=>n.dimensions.height=le),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:$},null,544),[[Vi,n.dimensions.height]])]),y("div",D2,[W[20]||(W[20]=y("label",{class:"dimension-label"},[y("span",null,"Depth"),y("span",{class:"dimension-unit"},"cm")],-1)),Gi(y("input",{"onUpdate:modelValue":W[7]||(W[7]=le=>n.dimensions.depth=le),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:$},null,544),[[Vi,n.dimensions.depth]])])])]),_:1},8,["is-expanded"]),et(Gs,{title:"Export","is-expanded":L.export,onToggle:W[9]||(W[9]=le=>_("export"))},{default:Bi(()=>[et(lE,{"template-name":n.currentTemplateName,"scene-manager":n.sceneManager,onExport:J,onBatchExport:V.handleBatchExport,onError:q},null,8,["template-name","scene-manager","onBatchExport"])]),_:1},8,["is-expanded"])])]))],2))}}),F2=vn(U2,[["__scopeId","data-v-696334c8"]]),Md={type:"change"},uu={type:"start"},Fp={type:"end"},Ho=new iu,bd=new zi,N2=Math.cos(70*px.DEG2RAD),Dt=new G,on=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rl=1e-6;class O2 extends SS{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new _s,this._lastTargetPosition=new G,this._quat=new _s().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xd,this._sphericalDelta=new xd,this._scale=1,this._panOffset=new G,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new G,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B2.bind(this),this._onPointerDown=k2.bind(this),this._onPointerUp=z2.bind(this),this._onContextMenu=j2.bind(this),this._onMouseWheel=V2.bind(this),this._onKeyDown=W2.bind(this),this._onTouchStart=$2.bind(this),this._onTouchMove=X2.bind(this),this._onMouseDown=H2.bind(this),this._onMouseMove=G2.bind(this),this._interceptControlDown=q2.bind(this),this._interceptControlUp=Y2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Md),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<N2?this.object.lookAt(this.target):(bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(bd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rl||this._lastTargetPosition.distanceToSquared(this.target)>Rl?(this.dispatchEvent(Md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function k2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function B2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function z2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H2(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(uu)}function G2(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function V2(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fp))}function W2(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function $2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(uu)}function X2(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function j2(n){this.enabled!==!1&&n.preventDefault()}function q2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class K2 extends _S{constructor(e){super(e),this.type=xi}parse(e){const o=function(C,v){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},u=`
`,h=function(C,v,_){v=v||1024;let O=C.pos,D=-1,N=0,$="",H=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));for(;0>(D=H.indexOf(u))&&N<v&&O<C.byteLength;)$+=H,N+=H.length,O+=128,H+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(O,O+128)));return-1<D?(C.pos+=N+D+1,$+H.slice(0,D)):!1},d=function(C){const v=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,H;for((C.pos>=C.byteLength||!($=h(C)))&&o(1,"no header found"),(H=$.match(v))||o(3,"bad initial token"),N.valid|=1,N.programtype=H[1],N.string+=$+`
`;$=h(C),$!==!1;){if(N.string+=$+`
`,$.charAt(0)==="#"){N.comments+=$+`
`;continue}if((H=$.match(_))&&(N.gamma=parseFloat(H[1])),(H=$.match(P))&&(N.exposure=parseFloat(H[1])),(H=$.match(O))&&(N.valid|=2,N.format=H[1]),(H=$.match(D))&&(N.valid|=4,N.height=parseInt(H[1],10),N.width=parseInt(H[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},f=function(C,v,_){const P=v;if(P<8||P>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);P!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*v*_);O.length||o(4,"unable to allocate buffer space");let D=0,N=0;const $=4*P,H=new Uint8Array(4),J=new Uint8Array($);let q=_;for(;q>0&&N<C.byteLength;){N+4>C.byteLength&&o(1),H[0]=C[N++],H[1]=C[N++],H[2]=C[N++],H[3]=C[N++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=P)&&o(3,"bad rgbe scanline format");let V=0,W;for(;V<$&&N<C.byteLength;){W=C[N++];const _e=W>128;if(_e&&(W-=128),(W===0||V+W>$)&&o(3,"bad scanline data"),_e){const He=C[N++];for(let ce=0;ce<W;ce++)J[V++]=He}else J.set(C.subarray(N,N+W),V),V+=W,N+=W}const le=P;for(let _e=0;_e<le;_e++){let He=0;O[D]=J[_e+He],He+=P,O[D+1]=J[_e+He],He+=P,O[D+2]=J[_e+He],He+=P,O[D+3]=J[_e+He],D+=4}q--}return O},m=function(C,v,_,P){const O=C[v+3],D=Math.pow(2,O-128)/255;_[P+0]=C[v+0]*D,_[P+1]=C[v+1]*D,_[P+2]=C[v+2]*D,_[P+3]=1},x=function(C,v,_,P){const O=C[v+3],D=Math.pow(2,O-128)/255;_[P+0]=yo.toHalfFloat(Math.min(C[v+0]*D,65504)),_[P+1]=yo.toHalfFloat(Math.min(C[v+1]*D,65504)),_[P+2]=yo.toHalfFloat(Math.min(C[v+2]*D,65504)),_[P+3]=yo.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=d(g),T=p.width,w=p.height,M=f(g.subarray(g.pos),T,w);let I,L,U;switch(this.type){case Sn:U=M.length/4;const C=new Float32Array(U*4);for(let _=0;_<U;_++)m(M,_*4,C,_*4);I=C,L=Sn;break;case xi:U=M.length/4;const v=new Uint16Array(U*4);for(let _=0;_<U;_++)x(M,_*4,v,_*4);I=v,L=xi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:w,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:L}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case Sn:case xi:o.colorSpace=bs,o.minFilter=nn,o.magFilter=nn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}class ti{constructor(){rt(this,"group");rt(this,"textureLoader");rt(this,"faces",new Map);rt(this,"faceConfigs",[]);rt(this,"currentMaterialType","matte");this.group=new Ar,this.textureLoader=new xS}getMesh(){return this.group}getTextureableFaces(){return this.faceConfigs.filter(e=>e.canReceiveTexture)}async applyTexture(e,t){return new Promise((i,s)=>{const r=this.faces.get(e);if(!r){s(new Error(`Face ${e} not found`));return}this.textureLoader.load(t,o=>{o.colorSpace=ln,o.anisotropy=4;const a=r.material;a&&(a.map&&a.map.dispose(),a.map=o,a.needsUpdate=!0),i()},void 0,o=>{console.error(`Failed to load texture for ${e}:`,o),s(o)})})}clearTexture(e){const t=this.faces.get(e);if(t){const i=t.material;i&&i.map&&(i.map.dispose(),i.map=null,i.needsUpdate=!0)}}setMaterial(e){this.currentMaterialType=e,this.faces.forEach(t=>{const i=t.material;if(i){switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}i.needsUpdate=!0}})}createMaterial(e,t="#ffffff"){const i=new kn({color:new We(t),side:kt});switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}return i}dispose(){this.faces.forEach(e=>{const t=e.material;t&&(t instanceof kn&&t.map&&t.map.dispose(),t.dispose()),e.geometry.dispose()}),this.group.clear(),this.faces.clear()}}class Z2 extends ti{constructor(t){super();rt(this,"config");this.config=t,this.generateGeometry(t)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new It(t.width,t.height,t.depth);this.faceConfigs=[{id:"front",name:"Front",uvIndex:4,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back",uvIndex:5,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left",uvIndex:0,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right",uvIndex:1,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"top",name:"Top",uvIndex:2,textureSize:{width:t.width,height:t.depth},canReceiveTexture:!0},{id:"bottom",name:"Bottom",uvIndex:3,textureSize:{width:t.width,height:t.depth},canReceiveTexture:!0}];const s=this.createFaceGeometries(i);this.faceConfigs.forEach((r,o)=>{const a=s[o],l=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),c=new Re(a,l);c.castShadow=!0,c.receiveShadow=!0,c.name=r.id,this.faces.set(r.id,c),this.group.add(c)}),this.addEdgesOverlay(i)}createFaceGeometries(t){const i=[],{width:s,height:r,depth:o}=this.config;return i.push(new Et(s,r)),i.push(new Et(s,r)),i.push(new Et(o,r)),i.push(new Et(o,r)),i.push(new Et(s,o)),i.push(new Et(s,o)),[{position:[0,0,o/2],rotation:[0,0,0]},{position:[0,0,-o/2],rotation:[0,Math.PI,0]},{position:[-s/2,0,0],rotation:[0,Math.PI/2,0]},{position:[s/2,0,0],rotation:[0,-Math.PI/2,0]},{position:[0,r/2,0],rotation:[-Math.PI/2,0,0]},{position:[0,-r/2,0],rotation:[Math.PI/2,0,0]}].forEach((l,c)=>{const u=i[c];u.translate(l.position[0],l.position[1],l.position[2]),u.rotateX(l.rotation[0]),u.rotateY(l.rotation[1]),u.rotateZ(l.rotation[2])}),i}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.3}),r=new Bn(i,s);this.group.add(r)}resize(t,i,s){this.config={...this.config,width:t,height:i,depth:s},this.generateGeometry(this.config)}}class J2 extends ti{constructor(t){super();rt(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[];i.push(new ae(0,0)),i.push(new ae(t.radius*.8,0)),i.push(new ae(t.radius,t.height*.2)),i.push(new ae(t.radius,t.height*.6)),i.push(new ae(t.radius*.9,t.height*.8)),i.push(new ae(t.neckRadius,t.height*.9)),i.push(new ae(t.neckRadius,t.height-t.capHeight)),i.push(new ae(t.capRadius,t.height-t.capHeight*.5)),i.push(new ae(t.capRadius,t.height));const s=new xs(i,t.segments||32),r=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),o=new Re(s,r);o.castShadow=!0,o.receiveShadow=!0,o.name="body",this.faces.set("body",o),this.group.add(o);const a=t.height*.4,l=new At(t.radius*.95,t.radius*.95,a,t.segments||32,1,!0),c=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),u=new Re(l,c);u.position.y=t.height*.3,u.castShadow=!0,u.receiveShadow=!0,u.name="label",this.faces.set("label",u),this.group.add(u),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*t.radius,height:a},canReceiveTexture:!0},{id:"body",name:"Bottle Body",uvIndex:1,textureSize:{width:Math.PI*2*t.radius,height:t.height},canReceiveTexture:!1}];const h=new At(t.capRadius,t.capRadius,t.capHeight,t.segments||32),d=this.createMaterial("metallic","#cccccc");d.roughness=.3,d.metalness=.9;const f=new Re(h,d);f.position.y=t.height-t.capHeight*.5,f.castShadow=!0,f.receiveShadow=!0,f.name="cap",this.group.add(f),this.addEdgesOverlay(s)}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new Bn(i,s);this.group.add(r)}setMaterial(t){super.setMaterial(t);const i=this.group.getObjectByName("cap");i&&i.material instanceof kn&&(i.material.roughness=.3,i.material.metalness=.9,i.material.needsUpdate=!0)}}class Q2 extends ti{constructor(t){super();rt(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=this.createPouchCurve(t),s=new Rp;s.moveTo(0,0),s.lineTo(t.width,0),s.lineTo(t.width,t.depth),s.lineTo(0,t.depth),s.lineTo(0,0);const r={steps:t.segments||32,bevelEnabled:!1,extrudePath:i},o=new cu(s,r);o.rotateX(Math.PI/2),o.rotateY(Math.PI/2);const a=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),l=new Re(o,a);l.castShadow=!0,l.receiveShadow=!0,l.name="front",this.faces.set("front",l),this.group.add(l);const c=new Et(t.width,t.height),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new Re(c,u);h.position.z=-t.depth*.5,h.rotation.y=Math.PI,h.castShadow=!0,h.receiveShadow=!0,h.name="back",this.faces.set("back",h),this.group.add(h),this.faceConfigs=[{id:"front",name:"Front Panel",uvIndex:0,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0}],this.addSideGussets(t),this.addTopSeal(t),this.addEdgesOverlay(o)}createPouchCurve(t){const i=[],s=t.curveHeight||t.height*.15;return i.push(new G(0,-t.height/2,0)),i.push(new G(0,-t.height/3,s*.2)),i.push(new G(0,-t.height/6,s*.4)),i.push(new G(0,0,s)),i.push(new G(0,t.height/6,s*.6)),i.push(new G(0,t.height/3,s*.3)),i.push(new G(0,t.height/2,0)),new lu(i)}addSideGussets(t){const i=new It(t.depth*.3,t.height*.8,.05),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new Re(i,s);r.position.x=-t.width/2-t.depth*.15,r.position.y=0,r.rotation.z=Math.PI/4,r.castShadow=!0,r.receiveShadow=!0;const o=new Re(i,s);o.position.x=t.width/2+t.depth*.15,o.position.y=0,o.rotation.z=-Math.PI/4,o.castShadow=!0,o.receiveShadow=!0,this.group.add(r),this.group.add(o)}addTopSeal(t){const i=new It(t.width*1.1,t.height*.1,t.depth*.5),s=this.createMaterial(this.currentMaterialType,"#888888"),r=new Re(i,s);r.position.y=t.height/2+t.height*.05,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new Bn(i,s);this.group.add(r)}}class eA extends ti{constructor(t){super();rt(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new At(t.radius,t.radius,t.height-t.capHeight,t.segments||32,1,!1,0,Math.PI*2),s=t.radius-t.thickness,r=new At(s,s,t.height-t.capHeight,t.segments||32,1,!1,0,Math.PI*2),o=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),a=new Re(i,o);a.castShadow=!0,a.receiveShadow=!0,a.name="body",this.faces.set("body",a),this.group.add(a);const l=(t.height-t.capHeight)*.6,c=new At(t.radius*1.02,t.radius*1.02,l,t.segments||32,1,!0),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new Re(c,u);h.position.y=(t.height-t.capHeight-l)*.5,h.castShadow=!0,h.receiveShadow=!0,h.name="label",this.faces.set("label",h),this.group.add(h),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*t.radius,height:l},canReceiveTexture:!0},{id:"body",name:"Tube Body",uvIndex:1,textureSize:{width:Math.PI*2*t.radius,height:t.height-t.capHeight},canReceiveTexture:!1}];const d=new At(t.radius,t.radius,t.thickness*2,t.segments||32),f=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),m=new Re(d,f);m.position.y=-(t.height-t.capHeight)/2,m.castShadow=!0,m.receiveShadow=!0,m.name="bottom_cap",this.group.add(m);const x=new At(t.radius*1.1,t.radius*1.1,t.capHeight,t.segments||32),g=this.createMaterial("metallic","#cccccc");g.roughness=.3,g.metalness=.9;const p=new Re(x,g);p.position.y=(t.height-t.capHeight)/2+t.capHeight/2,p.castShadow=!0,p.receiveShadow=!0,p.name="top_cap",this.group.add(p);const T=this.createMaterial(this.currentMaterialType,"#666666"),w=new Re(r,T);w.position.y=0,w.castShadow=!0,w.receiveShadow=!0,this.group.add(w),this.addEdgesOverlay(i)}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new Bn(i,s);this.group.add(r)}setMaterial(t){super.setMaterial(t);const i=this.group.getObjectByName("top_cap");i&&i.material instanceof kn&&(i.material.roughness=.3,i.material.metalness=.9,i.material.needsUpdate=!0)}}class tA extends ti{constructor(t){super();rt(this,"config");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new It(t.width,t.height,t.depth),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new Re(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="front",this.faces.set("front",r),this.group.add(r);const o=new Et(t.width,t.height),a=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),l=new Re(o,a);l.position.z=-t.depth/2,l.rotation.y=Math.PI,l.castShadow=!0,l.receiveShadow=!0,l.name="back",this.faces.set("back",l),this.group.add(l),this.faceConfigs=[{id:"front",name:"Front Panel",uvIndex:0,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:2,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const c=new Et(t.depth,t.height),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new Re(c,u);h.position.x=-t.width/2,h.position.z=0,h.rotation.y=-Math.PI/2,h.castShadow=!0,h.receiveShadow=!0,h.name="left",this.faces.set("left",h),this.group.add(h);const d=new Et(t.depth,t.height),f=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),m=new Re(d,f);m.position.x=t.width/2,m.position.z=0,m.rotation.y=Math.PI/2,m.castShadow=!0,m.receiveShadow=!0,m.name="right",this.faces.set("right",m),this.group.add(m),this.addHandles(t),this.addTopFold(t),this.addBottomReinforcement(t),this.addEdgesOverlay(i)}addHandles(t){const i=new lu([new G(-t.width*.3,t.height/2,0),new G(0,t.height/2+t.handleHeight,0),new G(t.width*.3,t.height/2,0)]),s=new hS(i,20,t.handleRadius,8,!1),r=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),o=new Re(s,r);o.position.z=t.depth*.4,o.castShadow=!0,o.receiveShadow=!0;const a=new Re(s,r);a.position.z=-t.depth*.4,a.castShadow=!0,a.receiveShadow=!0,this.group.add(o),this.group.add(a)}addTopFold(t){const i=new It(t.width*1.1,t.height*.1,t.depth*.8),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new Re(i,s);r.position.y=t.height/2+t.height*.05,r.rotation.x=Math.PI/6,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addBottomReinforcement(t){const i=new It(t.width*.9,t.height*.1,t.depth*.9),s=this.createMaterial(this.currentMaterialType,"#aaaaaa"),r=new Re(i,s);r.position.y=-t.height/2-t.height*.05,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.3}),r=new Bn(i,s);this.group.add(r)}}class nA extends ti{constructor(t){super();rt(this,"config");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new At(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,!1),s=new kn({color:new We(t.color||"#ffffff"),roughness:.3,metalness:.1,transparent:!0,opacity:.9,side:kt}),r=new Re(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="body",this.faces.set("body",r),this.group.add(r);const o=t.height*.7,a=new At(t.radiusTop*.95,t.radiusBottom*.95,o,t.radialSegments,1,!0),l=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),c=new Re(a,l);if(c.position.y=0,c.castShadow=!0,c.receiveShadow=!0,c.name="label",this.faces.set("label",c),this.group.add(c),!t.openTop){const u=new At(t.radiusTop*1.05,t.radiusTop*1.05,t.height*.05,t.radialSegments,1),h=this.createMaterial(this.currentMaterialType,"#cccccc"),d=new Re(u,h);d.position.y=t.height/2+t.height*.025,d.castShadow=!0,d.receiveShadow=!0,this.group.add(d)}this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*((t.radiusTop+t.radiusBottom)/2),height:t.height*.7},canReceiveTexture:!0},{id:"body",name:"Cup Body",uvIndex:1,textureSize:{width:Math.PI*2*((t.radiusTop+t.radiusBottom)/2),height:t.height},canReceiveTexture:!1}],this.addBottomReinforcement(t),this.addCondensationEffect(t),this.addEdgesOverlay(i)}addBottomReinforcement(t){const i=new At(t.radiusBottom*.8,t.radiusBottom*.8,t.height*.05,t.radialSegments,1),s=this.createMaterial(this.currentMaterialType,"#f0f0f0"),r=new Re(i,s);r.position.y=-t.height/2-t.height*.025,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addCondensationEffect(t){for(let s=0;s<8;s++){const r=new Da(t.height*.02,4,4),o=new lr({color:16777215,transparent:!0,opacity:.3}),a=s/8*Math.PI*2,l=(t.radiusTop+t.radiusBottom)/2*.9,c=-t.height/2+t.height*.3+Math.random()*t.height*.4,u=new Re(r,o);u.position.x=Math.cos(a)*l,u.position.y=c,u.position.z=Math.sin(a)*l,this.group.add(u)}}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.1}),r=new Bn(i,s);this.group.add(r)}}class iA extends ti{constructor(t){super();rt(this,"config");rt(this,"lidMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new It(t.width,t.height,t.depth),s=new kn({color:new We(t.color||"#ffffff"),roughness:.6,metalness:.1,side:kt}),r=new Re(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="body",this.faces.set("body",r),this.group.add(r);const o=t.lidThickness||t.height*.1,a=new It(t.width*1.02,o,t.depth*1.02),l=this.createMaterial(this.currentMaterialType,t.color||"#f5f5f5");this.lidMesh=new Re(a,l),this.lidMesh.position.y=t.height/2+o/2,this.lidMesh.castShadow=!0,this.lidMesh.receiveShadow=!0,this.lidMesh.name="lid",this.faces.set("lid",this.lidMesh),this.group.add(this.lidMesh),this.faceConfigs=[{id:"lid",name:"Top Lid",uvIndex:0,textureSize:{width:t.width*1.02,height:t.depth*1.02},canReceiveTexture:!0},{id:"front",name:"Front Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:2,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:4,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const c=new Et(t.width,t.height),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new Re(c,u);h.position.z=t.depth/2,h.castShadow=!0,h.receiveShadow=!0,h.name="front",this.faces.set("front",h),this.group.add(h);const d=new Et(t.width,t.height),f=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),m=new Re(d,f);m.position.z=-t.depth/2,m.rotation.y=Math.PI,m.castShadow=!0,m.receiveShadow=!0,m.name="back",this.faces.set("back",m),this.group.add(m);const x=new Et(t.depth,t.height),g=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),p=new Re(x,g);p.position.x=-t.width/2,p.rotation.y=-Math.PI/2,p.castShadow=!0,p.receiveShadow=!0,p.name="left",this.faces.set("left",p),this.group.add(p);const T=new Et(t.depth,t.height),w=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),M=new Re(T,w);M.position.x=t.width/2,M.rotation.y=Math.PI/2,M.castShadow=!0,M.receiveShadow=!0,M.name="right",this.faces.set("right",M),this.group.add(M),this.addContainerRim(t,o),this.addStackingRidges(t),this.addEdgesOverlay(i)}addContainerRim(t,i){const s=new It(t.width*1.05,t.height*.05,t.depth*1.05),r=this.createMaterial(this.currentMaterialType,"#e0e0e0"),o=new Re(s,r);o.position.y=t.height/2-t.height*.025,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o)}addStackingRidges(t){const s=t.depth/4;for(let r=1;r<=3;r++){const o=new It(t.width*.9,t.height*.03,t.depth*.05),a=this.createMaterial(this.currentMaterialType,"#d0d0d0"),l=new Re(o,a);l.position.y=-t.height/2-t.height*.015,l.position.z=-t.depth/2+r*s,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new Bn(i,s);this.group.add(r)}setLidOpen(t){this.lidMesh&&(t?(this.lidMesh.position.y=this.config.height/2+this.config.height*.2,this.lidMesh.rotation.x=Math.PI/6):(this.lidMesh.position.y=this.config.height/2+(this.config.lidThickness||this.config.height*.1)/2,this.lidMesh.rotation.x=0))}}class sA extends ti{constructor(t){super();rt(this,"config");rt(this,"lidMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[],s=t.segments||32,r=t.thickness||t.height*.05;i.push(new ae(t.radiusBottom,-t.height/2)),i.push(new ae(t.radiusBottom+r,-t.height/2+r));const o=-t.height/4,a=(t.radiusBottom+t.radiusTop)/2;i.push(new ae(a*.8,o)),i.push(new ae(a*.9,o+t.height*.1)),i.push(new ae(t.radiusTop-r,t.height/2-r)),i.push(new ae(t.radiusTop,t.height/2));const l=new xs(i,s,0,Math.PI*2),c=new kn({color:new We(t.color||"#f5f5f5"),roughness:.8,metalness:0,side:kt}),u=new Re(l,c);u.castShadow=!0,u.receiveShadow=!0,u.name="body",this.faces.set("body",u),this.group.add(u);const h=[],d=t.height*.8,f=t.radiusTop*.9,m=t.radiusBottom*.9;h.push(new ae(m,-d/2)),h.push(new ae(m*1.1,-d/2+d*.1)),h.push(new ae((m+f)/2,0)),h.push(new ae(f*.95,d/2-d*.1)),h.push(new ae(f,d/2));const x=new xs(h,s,0,Math.PI*2),g=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),p=new Re(x,g);p.name="wrap",this.faces.set("wrap",p),this.group.add(p),t.withLid&&this.addLid(t),this.faceConfigs=[{id:"wrap",name:"Outer Wrap",uvIndex:0,textureSize:{width:Math.PI*2*((f+m)/2),height:d},canReceiveTexture:!0},{id:"body",name:"Bowl Body",uvIndex:1,textureSize:{width:Math.PI*2*((t.radiusTop+t.radiusBottom)/2),height:t.height},canReceiveTexture:!1}],this.addRimReinforcement(t,r),this.addBottomGrip(t),this.addEdgesOverlay(l)}addLid(t){const i=new At(t.radiusTop*1.05,t.radiusTop*1.05,t.height*.05,t.segments||32,1),s=this.createMaterial(this.currentMaterialType,t.color||"#f0f0f0");this.lidMesh=new Re(i,s),this.lidMesh.position.y=t.height/2+t.height*.025,this.lidMesh.castShadow=!0,this.lidMesh.receiveShadow=!0,this.group.add(this.lidMesh);const r=new At(t.radiusTop*.1,t.radiusTop*.1,t.height*.1,8,1),o=this.createMaterial(this.currentMaterialType,"#cccccc"),a=new Re(r,o);a.position.y=t.height/2+t.height*.1,a.castShadow=!0,a.receiveShadow=!0,this.group.add(a)}addRimReinforcement(t,i){const s=new Ia(t.radiusTop,i*1.5,8,t.segments||32,Math.PI*2),r=this.createMaterial(this.currentMaterialType,"#e8e8e8"),o=new Re(s,r);o.position.y=t.height/2,o.rotation.x=Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o)}addBottomGrip(t){for(let s=0;s<6;s++){const r=s/6*Math.PI*2,o=new It(t.radiusBottom*.3,t.height*.02,t.radiusBottom*.1),a=this.createMaterial(this.currentMaterialType,"#d0d0d0"),l=new Re(o,a);l.position.y=-t.height/2-t.height*.01,l.position.x=Math.cos(r)*t.radiusBottom*.5,l.position.z=Math.sin(r)*t.radiusBottom*.5,l.rotation.y=r,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}}addEdgesOverlay(t){const i=new ei(t),s=new Tn({color:0,linewidth:1,transparent:!0,opacity:.15}),r=new Bn(i,s);this.group.add(r)}setLidVisible(t){this.lidMesh&&(this.lidMesh.visible=t)}}class rA extends ti{constructor(t){super();rt(this,"config");rt(this,"lidMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new It(t.width,t.height,t.depth),s=new kn({color:new We(t.color||"#f5f5dc"),roughness:.85,metalness:0,side:kt}),r=new Re(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="body",this.faces.set("body",r),this.group.add(r);const o=t.lidThickness||t.height*.1,a=new It(t.width*1.02,o,t.depth*1.02),l=this.createMaterial(this.currentMaterialType,t.color||"#f8f8f0");this.lidMesh=new Re(a,l);const c=t.hingeAngle||15*(Math.PI/180);this.lidMesh.position.y=t.height/2+o/2,this.lidMesh.position.x=-t.width/2,this.lidMesh.rotation.z=c,this.lidMesh.castShadow=!0,this.lidMesh.receiveShadow=!0,this.lidMesh.name="lid",this.faces.set("lid",this.lidMesh),this.group.add(this.lidMesh),this.faceConfigs=[{id:"lid",name:"Top Lid",uvIndex:0,textureSize:{width:t.width*1.02,height:t.depth*1.02},canReceiveTexture:!0},{id:"front",name:"Front Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:2,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:4,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const u=new Et(t.width,t.height),h=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),d=new Re(u,h);d.position.z=t.depth/2,d.castShadow=!0,d.receiveShadow=!0,d.name="front",this.faces.set("front",d),this.group.add(d);const f=new Et(t.width,t.height),m=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),x=new Re(f,m);x.position.z=-t.depth/2,x.rotation.y=Math.PI,x.castShadow=!0,x.receiveShadow=!0,x.name="back",this.faces.set("back",x),this.group.add(x);const g=new Et(t.depth,t.height),p=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),T=new Re(g,p);T.position.x=-t.width/2,T.rotation.y=-Math.PI/2,T.castShadow=!0,T.receiveShadow=!0,T.name="left",this.faces.set("left",T),this.group.add(T);const w=new Et(t.depth,t.height),M=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),I=new Re(w,M);I.position.x=t.width/2,I.rotation.y=Math.PI/2,I.castShadow=!0,I.receiveShadow=!0,I.name="right",this.faces.set("right",I),this.group.add(I),this.addHingeMechanism(t,o),this.addLatchMechanism(t,o),this.addVentilationHoles(t),this.addCardboardEdges(i)}addHingeMechanism(t,i){const s=new At(t.height*.05,t.height*.05,i*1.5,8,1),r=this.createMaterial(this.currentMaterialType,"#888888"),o=new Re(s,r);o.position.x=-t.width/2,o.position.y=t.height/2,o.rotation.z=Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const a=new At(t.height*.02,t.height*.02,t.depth*.8,8,1),l=this.createMaterial(this.currentMaterialType,"#666666"),c=new Re(a,l);c.position.x=-t.width/2,c.position.y=t.height/2,c.rotation.x=Math.PI/2,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}addLatchMechanism(t,i){const s=new It(t.width*.1,i*.8,t.depth*.1),r=this.createMaterial(this.currentMaterialType,"#aaaaaa"),o=new Re(s,r);o.position.x=t.width/2-t.width*.05,o.position.y=t.height/2+i*.4,o.position.z=t.depth*.3,o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);const a=new It(t.width*.12,t.height*.05,t.depth*.12),l=this.createMaterial(this.currentMaterialType,"#999999"),c=new Re(a,l);c.position.x=t.width/2-t.width*.06,c.position.y=t.height/2-t.height*.025,c.position.z=t.depth*.3,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}addVentilationHoles(t){const s=t.width*.8/7;for(let r=1;r<=6;r++){const o=new At(t.height*.02,t.height*.02,t.height*.01,8,1),a=new lr({color:0,transparent:!0,opacity:.3}),l=new Re(o,a);l.position.x=-t.width/2+t.width*.1+r*s,l.position.y=t.height/2+(t.lidThickness||t.height*.1)*.6,l.position.z=0,l.rotation.x=Math.PI/2,this.group.add(l)}}addCardboardEdges(t){const i=new ei(t),s=new Tn({color:9139029,linewidth:2,transparent:!0,opacity:.3}),r=new Bn(i,s);this.group.add(r);const o=new It(this.config.width*.98,this.config.height*.01,this.config.depth*.98),a=new lr({color:10506797,transparent:!0,opacity:.1,side:kt}),l=new Re(o,a);l.position.y=-this.config.height/2+this.config.height*.02,this.group.add(l)}setLidOpen(t){if(this.lidMesh){const i=t?45*(Math.PI/180):15*(Math.PI/180);this.lidMesh.rotation.z=i}}}class oA extends ti{constructor(t){super();rt(this,"config");rt(this,"capMesh");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[],s=t.segments||32,r=t.totalHeight-t.neckHeight;i.push(new ae(t.baseRadius,-t.totalHeight/2)),i.push(new ae(t.baseRadius*.95,-t.totalHeight/2+t.totalHeight*.02)),i.push(new ae(t.bodyRadius*.8,-t.totalHeight/2+r*.2)),i.push(new ae(t.bodyRadius,-t.totalHeight/2+r*.5)),i.push(new ae(t.bodyRadius*.9,-t.totalHeight/2+r*.8)),i.push(new ae(t.neckRadius*1.5,-t.totalHeight/2+r*.9)),i.push(new ae(t.neckRadius*1.2,-t.totalHeight/2+r*.95)),i.push(new ae(t.neckRadius,-t.totalHeight/2+r)),i.push(new ae(t.neckRadius,-t.totalHeight/2+r+t.neckHeight*.8)),i.push(new ae(t.neckRadius*1.1,-t.totalHeight/2+r+t.neckHeight*.9)),i.push(new ae(t.neckRadius*.9,-t.totalHeight/2+r+t.neckHeight));const o=new xs(i,s,0,Math.PI*2),a=new kn({color:new We(t.color||"#ffffff"),roughness:.05,metalness:.1,transparent:!0,opacity:.3,side:kt,envMapIntensity:1}),l=new Re(o,a);l.castShadow=!0,l.receiveShadow=!0,l.name="body",this.faces.set("body",l),this.group.add(l);const c=r*.6,u=Math.PI*2*t.bodyRadius*.7,h=new At(t.bodyRadius*.95,t.bodyRadius*.95,c,s,1,!0,0,Math.PI*2*.7),d=this.createMaterial(this.currentMaterialType,"#ffffff"),f=new Re(h,d);f.position.y=-t.totalHeight/2+r*.5,f.castShadow=!0,f.receiveShadow=!0,f.name="label",this.faces.set("label",f),this.group.add(f);const m=new At(t.neckRadius*1.5,t.neckRadius*1.3,t.totalHeight*.15,s,1),x=new kn({color:new We("#f0f0f0"),roughness:.3,metalness:.5,side:kt});this.capMesh=new Re(m,x),this.capMesh.position.y=t.totalHeight/2-t.totalHeight*.075,this.capMesh.castShadow=!0,this.capMesh.receiveShadow=!0,this.group.add(this.capMesh);const g=new Ia(t.neckRadius*1.1,t.totalHeight*.01,8,s,Math.PI*2),p=this.createMaterial("metallic","#d4af37"),T=new Re(g,p);T.position.y=t.totalHeight/2-t.totalHeight*.15,T.rotation.x=Math.PI/2,T.castShadow=!0,T.receiveShadow=!0,this.group.add(T),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:u,height:c},canReceiveTexture:!0},{id:"body",name:"Bottle Body",uvIndex:1,textureSize:{width:Math.PI*2*t.bodyRadius,height:t.totalHeight},canReceiveTexture:!1}],this.addLiquidContent(t,r),this.addCapDetails(t),this.addOpticalEffects(t),this.addCrystalEdges(o)}addLiquidContent(t,i){const s=[],r=i*.7,o=t.bodyRadius*.85;s.push(new ae(o*.2,-t.totalHeight/2+t.totalHeight*.05)),s.push(new ae(o,-t.totalHeight/2+t.totalHeight*.1)),s.push(new ae(o*.95,-t.totalHeight/2+r*.5)),s.push(new ae(o*.7,-t.totalHeight/2+r)),s.push(new ae(o*.3,-t.totalHeight/2+r*1.05));const a=new xs(s,t.segments||32,0,Math.PI*2),l=new dS({color:new We("#e6f7ff"),transmission:.9,roughness:.1,thickness:.5,ior:1.33,side:kt}),c=new Re(a,l);c.position.y=-t.totalHeight/2+r*.5,c.castShadow=!0,c.receiveShadow=!0,this.group.add(c)}addCapDetails(t){const i=new At(t.neckRadius*1.4,t.neckRadius*1.4,t.totalHeight*.02,t.segments||32,1),s=this.createMaterial("metallic","#c0c0c0"),r=new Re(i,s);r.position.y=t.totalHeight/2-t.totalHeight*.04,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);const o=new At(t.neckRadius*.3,t.neckRadius*.2,t.totalHeight*.08,8,1),a=this.createMaterial("metallic","#a0a0a0"),l=new Re(o,a);l.position.y=t.totalHeight/2+t.totalHeight*.04,l.castShadow=!0,l.receiveShadow=!0,this.group.add(l)}addOpticalEffects(t){const s=new Da(t.totalHeight*.01,4,4);for(let r=0;r<20;r++){const o=new lr({color:16777215,transparent:!0,opacity:.1+Math.random()*.1}),a=new Re(s,o),l=Math.random()*Math.PI*2,c=t.bodyRadius*.7*Math.random(),u=-t.totalHeight/2+t.totalHeight*.3+Math.random()*t.totalHeight*.4;a.position.x=Math.cos(l)*c,a.position.y=u,a.position.z=Math.sin(l)*c,this.group.add(a)}}addCrystalEdges(t){const i=new ei(t),s=new Tn({color:16777215,linewidth:1,transparent:!0,opacity:.2}),r=new Bn(i,s);this.group.add(r)}setCapRemoved(t){this.capMesh&&(this.capMesh.visible=!t)}}class aA{constructor(e){rt(this,"scene");rt(this,"camera");rt(this,"renderer");rt(this,"controls");rt(this,"animationId",0);rt(this,"gridHelper",null);rt(this,"lights");rt(this,"isAutoRotating",!1);rt(this,"autoRotateSpeed",.5);rt(this,"currentGeometry",null);rt(this,"templateHistory",[]);rt(this,"textureMemory",new Map);this.scene=new Lw,this.setupGradientBackground(),this.camera=new bn(45,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(8,8,8),this.renderer=new Pw({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$f,this.renderer.toneMapping=jf,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=ln,this.controls=new O2(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=50,this.controls.maxPolarAngle=Math.PI,this.controls.minPolarAngle=0,this.lights={ambient:new bS(16777215,.4),keyLight:new _d(16777215,.8),fillLight:new _d(16777215,.3)},this.setLightingPreset("studio"),this.addGridHelper(),window.addEventListener("resize",this.handleResize.bind(this))}setupGradientBackground(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(t){const i=t.createLinearGradient(0,0,0,e.height);i.addColorStop(0,"#1a1a2e"),i.addColorStop(1,"#16213e"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height);const s=new Uw(e);this.scene.background=s}}setupLights(e="studio"){switch(this.lights.ambient.parent&&this.scene.remove(this.lights.ambient),this.lights.keyLight.parent&&this.scene.remove(this.lights.keyLight),this.lights.fillLight.parent&&this.scene.remove(this.lights.fillLight),e){case"studio":this.lights.ambient.intensity=.4,this.lights.ambient.color.set(16777215),this.lights.keyLight.intensity=.8,this.lights.keyLight.position.set(10,20,15),this.lights.keyLight.color.set(16777215),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.3,this.lights.fillLight.position.set(-10,10,-10),this.lights.fillLight.color.set(16777215);break;case"outdoor":this.lights.ambient.intensity=.6,this.lights.ambient.color.set(8900331),this.lights.keyLight.intensity=1,this.lights.keyLight.position.set(50,100,50),this.lights.keyLight.color.set(16771899),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.4,this.lights.fillLight.position.set(-30,20,-30),this.lights.fillLight.color.set(5227511);break;case"dramatic":this.lights.ambient.intensity=.2,this.lights.ambient.color.set(1710618),this.lights.keyLight.intensity=1.2,this.lights.keyLight.position.set(15,25,-10),this.lights.keyLight.color.set(16739179),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.1,this.lights.fillLight.position.set(-5,5,15),this.lights.fillLight.color.set(7039999);break}this.lights.keyLight.shadow.mapSize.width=2048,this.lights.keyLight.shadow.mapSize.height=2048,this.lights.keyLight.shadow.camera.near=.5,this.lights.keyLight.shadow.camera.far=100,this.lights.keyLight.shadow.camera.left=-30,this.lights.keyLight.shadow.camera.right=30,this.lights.keyLight.shadow.camera.top=30,this.lights.keyLight.shadow.camera.bottom=-30,this.lights.keyLight.shadow.bias=-1e-4,this.scene.add(this.lights.ambient),this.scene.add(this.lights.keyLight),this.scene.add(this.lights.fillLight)}addGridHelper(){this.gridHelper=new wS(20,20,4473924,2236962),this.gridHelper.position.y=-.01,this.scene.add(this.gridHelper)}handleResize(){const e=this.renderer.domElement,t=e.clientWidth,i=e.clientHeight;(t!==e.width||i!==e.height)&&(this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i,!1))}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.controls}startAnimation(){const e=()=>{this.animationId=requestAnimationFrame(e),this.isAutoRotating?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.autoRotateSpeed):this.controls.autoRotate=!1,this.controls.update(),this.renderer.render(this.scene,this.camera)};e()}stopAnimation(){this.animationId&&cancelAnimationFrame(this.animationId)}setLightingPreset(e){this.setupLights(e)}setCameraPreset(e,t=1e3){const i=new G,s=new G(0,0,0);switch(e){case"front":i.set(0,0,15);break;case"back":i.set(0,0,-15);break;case"top":i.set(0,15,0);break;case"isometric":i.set(10,10,10);break;case"reset":i.set(8,8,8);break}const r=this.camera.position.clone(),o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(l/t,1),u=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.camera.position.lerpVectors(r,i,u),this.camera.lookAt(s),this.controls.target.copy(s),this.controls.update(),c<1&&requestAnimationFrame(a)};a()}toggleGridHelper(e){this.gridHelper&&(this.gridHelper.visible=e)}setAutoRotate(e,t=.5){this.isAutoRotating=e,this.autoRotateSpeed=t}async loadHDRIEnvironment(e){return new Promise((t,i)=>{new K2().load(e,r=>{r.mapping=oa,this.scene.environment=r,this.scene.background=r,t()},void 0,r=>{console.error("Failed to load HDRI:",r),i(r)})})}getFPS(){return this.renderer.info.render.frame/1e3}async loadTemplate(e){const t=this.camera.position.clone(),i=this.controls.target.clone();this.currentGeometry&&(this.currentGeometry.dispose(),this.currentGeometry=null);let s;switch(e.category){case"box":s=new Z2({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,color:e.defaultMaterial.color});break;case"bottle":s=new J2({height:e.geometry.dimensions.height,radius:e.geometry.dimensions.radius||.5,neckHeight:e.geometry.dimensions.height*.2,neckRadius:(e.geometry.dimensions.radius||.5)*.4,capHeight:e.geometry.dimensions.height*.1,capRadius:(e.geometry.dimensions.radius||.5)*.45,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"pouch":s=new Q2({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,curveHeight:e.geometry.dimensions.height*.1,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"tube":s=new eA({height:e.geometry.dimensions.height,radius:e.geometry.dimensions.radius||.5,thickness:e.geometry.dimensions.depth,capHeight:e.geometry.dimensions.height*.1,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"bag":s=new tA({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,handleRadius:.1,handleHeight:e.geometry.dimensions.height*.3,color:e.defaultMaterial.color});break;case"cup":s=new nA({radiusTop:e.geometry.dimensions.radiusTop||1.2,radiusBottom:e.geometry.dimensions.radiusBottom||.9,height:e.geometry.dimensions.height,radialSegments:e.geometry.dimensions.radialSegments||32,heightSegments:e.geometry.dimensions.heightSegments||8,openTop:!0,color:e.defaultMaterial.color});break;case"container":s=new iA({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,lidThickness:e.geometry.dimensions.lidThickness||e.geometry.dimensions.height*.1,color:e.defaultMaterial.color});break;case"bowl":s=new sA({radiusTop:e.geometry.dimensions.radiusTop||1.2,radiusBottom:e.geometry.dimensions.radiusBottom||.6,height:e.geometry.dimensions.height,thickness:e.geometry.dimensions.thickness||e.geometry.dimensions.height*.05,segments:e.geometry.dimensions.segments||32,withLid:!1,color:e.defaultMaterial.color});break;case"takeaway":s=new rA({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,lidThickness:e.geometry.dimensions.lidThickness||e.geometry.dimensions.height*.1,hingeAngle:e.geometry.dimensions.hingeAngle||15*(Math.PI/180),color:e.defaultMaterial.color});break;case"perfume":s=new oA({baseRadius:e.geometry.dimensions.baseRadius||.8,neckRadius:e.geometry.dimensions.neckRadius||.3,bodyRadius:e.geometry.dimensions.bodyRadius||1,totalHeight:e.geometry.dimensions.height,neckHeight:e.geometry.dimensions.neckHeight||e.geometry.dimensions.height*.18,segments:e.geometry.dimensions.segments||32,color:e.defaultMaterial.color});break;default:throw new Error(`Unsupported template category: ${e.category}`)}s.setMaterial(e.defaultMaterial.type),this.scene.add(s.getMesh()),this.currentGeometry=s,await this.restoreTextures(e.id),this.animateCameraToPosition(t,i,500),this.templateHistory.push(e.id),this.templateHistory.length>10&&this.templateHistory.shift()}async restoreTextures(e){if(!this.currentGeometry)return;const t=this.textureMemory.get(e);if(!t)return;const i=[];t.forEach((s,r)=>{i.push(this.currentGeometry.applyTexture(r,s))}),await Promise.all(i)}animateCameraToPosition(e,t,i=1e3){const s=this.camera.position.clone(),r=this.controls.target.clone(),o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(l/i,1),u=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.camera.position.lerpVectors(s,e,u),this.controls.target.lerpVectors(r,t,u),this.controls.update(),c<1&&requestAnimationFrame(a)};a()}async applyTextureToFace(e,t){if(!this.currentGeometry)throw new Error("No template loaded");await this.currentGeometry.applyTexture(e,t);const i=this.templateHistory[this.templateHistory.length-1];if(i){let s=this.textureMemory.get(i);s||(s=new Map,this.textureMemory.set(i,s)),s.set(e,t)}}clearTextureFromFace(e){if(!this.currentGeometry)return;this.currentGeometry.clearTexture(e);const t=this.templateHistory[this.templateHistory.length-1];if(t){const i=this.textureMemory.get(t);i&&i.delete(e)}}setMaterialType(e){this.currentGeometry&&this.currentGeometry.setMaterial(e)}getCurrentGeometry(){return this.currentGeometry}getTextureableFaces(){return this.currentGeometry?this.currentGeometry.getTextureableFaces().map(e=>({id:e.id,name:e.name})):[]}dispose(){this.stopAnimation(),this.controls.dispose(),this.renderer.dispose(),this.currentGeometry&&this.currentGeometry.dispose(),this.lights.ambient.dispose(),this.lights.keyLight.dispose(),this.lights.fillLight.dispose(),this.gridHelper&&(this.gridHelper.geometry.dispose(),this.gridHelper.material.dispose()),this.textureMemory.clear(),window.removeEventListener("resize",this.handleResize.bind(this))}}const lA={class:"relative w-full h-full"},cA={key:0,class:"absolute inset-0 flex items-center justify-center bg-black/50"},uA={key:1,class:"absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono"},hA={key:2,class:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg"},dA=un({__name:"MockupCanvas",props:{lightingPreset:{},cameraPreset:{},showGrid:{type:Boolean},autoRotate:{type:Boolean}},emits:["loaded","error"],setup(n,{expose:e,emit:t}){const i=ye(null),s=ye(!0),r=ye(!1);let o=null;const a=n,l=t;return ba(async()=>{if(i.value)try{o=new aA(i.value),Vl.length>0&&await o.loadTemplate(Vl[0]),a.lightingPreset&&o.setLightingPreset(a.lightingPreset),a.cameraPreset&&o.setCameraPreset(a.cameraPreset),a.showGrid!==void 0&&o.toggleGridHelper(a.showGrid),a.autoRotate!==void 0&&o.setAutoRotate(a.autoRotate),o.startAnimation(),s.value=!1,l("loaded")}catch(c){console.error("Failed to initialize 3D scene:",c),s.value=!1,l("error",c)}}),qn(()=>a.lightingPreset,c=>{o&&c&&o.setLightingPreset(c)}),qn(()=>a.cameraPreset,c=>{o&&c&&o.setCameraPreset(c)}),qn(()=>a.showGrid,c=>{o&&c!==void 0&&o.toggleGridHelper(c)}),qn(()=>a.autoRotate,c=>{o&&c!==void 0&&o.setAutoRotate(c)}),Ai(()=>{o&&o.dispose()}),e({applyTexture:async(c,u)=>{if(!o)return Promise.reject("Scene not initialized");r.value=!0;try{await o.applyTextureToFace(c,u)}finally{r.value=!1}},applyTextureToAll:async c=>{if(!o)return Promise.reject("Scene not initialized");const u=o.getCurrentGeometry();if(u){r.value=!0;try{const h=u.getTextureableFaces();for(const d of h)await u.applyTexture(d.id,c)}finally{r.value=!1}}},clearTexture:c=>{o&&o.clearTextureFromFace(c)},resetTextures:()=>{const c=o==null?void 0:o.getCurrentGeometry();c&&c.getTextureableFaces().forEach(h=>c.clearTexture(h.id))},setMaterialType:c=>{o&&o.setMaterialType(c)},setLightingPreset:c=>{o&&o.setLightingPreset(c)},setCameraPreset:(c,u)=>{o&&o.setCameraPreset(c,u)},toggleGridHelper:c=>{o&&o.toggleGridHelper(c)},setAutoRotate:(c,u)=>{o&&o.setAutoRotate(c,u)},getSceneManager:()=>o,getFPS:()=>(o==null?void 0:o.getFPS())||0}),(c,u)=>(ue(),he("div",lA,[y("canvas",{ref_key:"canvasRef",ref:i,class:"w-full h-full"},null,512),s.value?(ue(),he("div",cA,[...u[0]||(u[0]=[y("div",{class:"flex flex-col items-center gap-4"},[y("div",{class:"w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"}),y("div",{class:"text-white text-lg font-medium"},"Loading 3D scene...")],-1)])])):tt("",!0),!s.value&&c.showFPS?(ue(),he("div",uA," FPS: "+be(Math.round(c.fps)),1)):tt("",!0),r.value?(ue(),he("div",hA,[...u[1]||(u[1]=[y("div",{class:"flex items-center gap-2"},[y("div",{class:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),y("span",null,"Loading texture...")],-1)])])):tt("",!0)]))}}),fA=vn(dA,[["__scopeId","data-v-5f083b48"]]),pA=T0("mockup",()=>{const n=ye({width:2,height:3,depth:1.5}),e=ye(new Map),t=ye(new Map),i=ye(new Map),s=ye("front"),r=ye(null),o=ye(new Map),a={front:"#ffffff",back:"#ffffff",left:"#ffffff",right:"#ffffff",top:"#ffffff",bottom:"#ffffff"};return Object.entries(a).forEach(([I,L])=>{t.value.set(I,L),i.value.set(I,1)}),{dimensions:n,textures:e,colors:t,opacity:i,selectedFace:s,activeTemplate:r,templateTextures:o,setDimensions:(I,L,U)=>{n.value={width:I,height:L,depth:U}},setTexture:(I,L)=>{if(e.value.set(I,L),r.value){let U=o.value.get(r.value.id);U||(U=new Map,o.value.set(r.value.id,U)),U.set(I,L)}},removeTexture:I=>{if(e.value.delete(I),r.value){const L=o.value.get(r.value.id);L&&L.delete(I)}},setColor:(I,L)=>{t.value.set(I,L)},setOpacity:(I,L)=>{i.value.set(I,L)},setSelectedFace:I=>{s.value=I},switchTemplate:I=>{if(r.value){const U=new Map(e.value);o.value.set(r.value.id,U)}r.value=I;const L=o.value.get(I.id);L?e.value=new Map(L):e.value.clear(),s.value=I.faces.length>0?I.faces[0].id:null,n.value={width:I.geometry.dimensions.width,height:I.geometry.dimensions.height,depth:I.geometry.dimensions.depth},t.value.clear(),i.value.clear(),I.faces.forEach(U=>{t.value.set(U.id,I.defaultMaterial.color),i.value.set(U.id,1)})},getTexture:I=>e.value.get(I),getColor:I=>t.value.get(I)||"#ffffff",getOpacity:I=>i.value.get(I)||1,getActiveTemplate:()=>r.value,getTemplateTextures:I=>o.value.get(I),reset:()=>{n.value={width:2,height:3,depth:1.5},e.value.clear(),t.value.clear(),i.value.clear(),s.value="front",r.value=null,Object.entries(a).forEach(([I,L])=>{t.value.set(I,L),i.value.set(I,1)})}}});function mA(n={}){const{maxCacheSize:e=50,autoCleanup:t=!0}=n,i=ye({front:null,back:null,left:null,right:null,top:null,bottom:null}),s=ye("front"),r=ye("cover"),o=ye(0),a=ye(new Set),l=Bt(()=>Object.entries(i.value).filter(([D,N])=>N!==null).map(([D])=>D)),c=Bt(()=>l.value.length),u=Bt(()=>c.value>0),h=Bt(()=>(o.value/(1024*1024)).toFixed(2)),d=(D,N,$="cover")=>new Promise(H=>{m(D);const J=URL.createObjectURL(N);a.value.add(J);const q={url:J,name:N.name,file:N,fit:$,objectUrl:J},V=new Image;V.onload=()=>{q.dimensions={width:V.width,height:V.height},o.value+=N.size,i.value[D]=q,t&&o.value>e*1024*1024&&P(),H(q)},V.onerror=()=>{i.value[D]=q,o.value+=N.size,H(q)},V.src=J}),f=(D,N,$="Texture",H="cover")=>{m(D);const J={url:N,name:$,fit:H};return i.value[D]=J,J},m=D=>{const N=i.value[D];N&&(N.objectUrl&&(URL.revokeObjectURL(N.objectUrl),a.value.delete(N.objectUrl),N.file&&(o.value-=N.file.size)),i.value[D]=null)},x=()=>{Object.keys(i.value).forEach(D=>{m(D)})},g=(D,N)=>{const $=i.value[D];if(!$)return!1;m(N);const H={...$,name:`${$.name} (copy)`};return i.value[N]=H,!0},p=D=>{i.value[D]&&Object.keys(i.value).forEach($=>{$!==D&&g(D,$)})},T=(D,N="cover")=>{const $=Object.keys(i.value).map(H=>d(H,D,N));return Promise.all($).then(()=>{})},w=(D,N)=>{const $=i.value[D];$&&($.fit=N)},M=D=>{Object.values(i.value).forEach(N=>{N&&(N.fit=D)}),r.value=D},I=D=>i.value[D]||null,L=D=>{var N;return((N=i.value[D])==null?void 0:N.url)||null},U=D=>i.value[D]!==null,C=D=>{s.value=D},v=()=>{const D={};return Object.entries(i.value).forEach(([N,$])=>{$&&(D[N]={name:$.name,fit:$.fit,dimensions:$.dimensions,hasFile:!!$.file})}),D},_=(D,N)=>{x(),Object.entries(D).forEach(([$,H])=>{if(H&&H.name){const J={url:H.url||"",name:H.name,fit:H.fit||"cover",dimensions:H.dimensions};N&&N[H.name]&&(J.file=N[H.name],J.objectUrl=URL.createObjectURL(N[H.name]),a.value.add(J.objectUrl)),i.value[$]=J}})},P=()=>{const D=Object.entries(i.value).filter(([N,$])=>$!==null).sort(()=>0);for(;o.value>e*1024*1024&&D.length>0;){const[N,$]=D.shift();m(N)}},O=()=>{x(),s.value="front",r.value="cover",o.value=0,a.value.clear()};return Ai(()=>{x()}),{textures:i,selectedFace:s,textureFit:r,cacheSize:o,texturedFaces:l,texturedFacesCount:c,hasTextures:u,cacheSizeMB:h,setTexture:d,setTextureFromUrl:f,removeTexture:m,clearAllTextures:x,copyTexture:g,copyToAllFaces:p,applyToAllFaces:T,setTextureFit:w,setAllTextureFits:M,getTexture:I,getTextureUrl:L,hasTexture:U,selectFace:C,exportTextureMapping:v,importTextureMapping:_,cleanupCache:P,reset:O}}const gA={class:"editor-main"},vA={class:"canvas-area"},_A={class:"canvas-container"},xA={class:"status-bar"},yA={class:"status-left"},MA={class:"status-item"},bA={class:"status-value"},wA={class:"status-item"},SA={class:"status-value"},EA={class:"status-item"},TA={class:"status-value"},AA={class:"status-right"},CA={class:"status-item"},RA={class:"status-value"},PA={class:"status-item"},LA={class:"status-value"},DA=un({__name:"EditorView",setup(n){const e=pA(),t=mA(),i=ye(null),s=ye(!0),r=ye(100),o=ye(60),a=ye(0),l=ye("studio"),c=ye("isometric"),u=ye("matte"),h=ye(!0),d=ye(!1),f=["front","back","left","right","top","bottom"],m=ye("front"),x=ye({width:2.5,height:3.5,depth:2}),g=ye(null),p=ye(null),T=ye("box-mockup"),w=ye("cup"),M=Bt(()=>f.filter(B=>e.getTexture(B)!==void 0).length),I=Bt(()=>{const B={front:null,back:null,left:null,right:null,top:null,bottom:null};return f.forEach(k=>{const j=e.getTexture(k);B[k]=(j==null?void 0:j.url)||null}),B}),L=()=>{r.value=Math.min(r.value+10,200),i.value&&i.value.zoomIn()},U=()=>{r.value=Math.max(r.value-10,25),i.value&&i.value.zoomOut()},C=()=>{r.value=100,i.value&&i.value.fitToScreen()},v=B=>{c.value=B,i.value&&i.value.setCameraPreset(B,800)},_=()=>{d.value=!d.value,i.value&&i.value.setAutoRotate(d.value,.5)},P=()=>{h.value=!h.value,i.value&&i.value.toggleGridHelper(h.value)},O=()=>{s.value=!s.value,localStorage.setItem("editor-theme",s.value?"dark":"light")},D=()=>{v("reset")},N=()=>{i.value&&i.value.resize(x.value.width,x.value.height,x.value.depth)},$=B=>{u.value=B,i.value&&i.value.setMaterialType(B)},H=B=>{l.value=B,i.value&&i.value.setLightingPreset(B)},J=B=>{m.value=B,e.setSelectedFace(B)},q=async B=>{if(g.value=B,console.log("Template selected:",B),p.value)try{await p.value.loadTemplate(B),T.value=B.name,w.value=B.category||"box",console.log("Template loaded:",B.name)}catch(k){console.error("Failed to load template:",k)}},V=B=>{console.log("Design uploaded:",B.name)},W=async B=>{const{face:k,file:j,fit:Q}=B;try{const re=await t.setTexture(k,j,Q);i.value&&await i.value.applyTexture(k,re.url),e.setTexture(k,{url:re.url,name:j.name}),console.log(`Texture applied to ${k} face`)}catch(re){console.error("Failed to apply texture:",re),alert("Failed to apply texture. Please try another image.")}},le=async B=>{const{file:k,fit:j}=B;try{await t.applyToAllFaces(k,j),i.value&&await i.value.applyTextureToAll(t.getTextureUrl("front")),f.forEach(Q=>{e.setTexture(Q,{url:t.getTextureUrl(Q),name:k.name})}),console.log("Texture applied to all faces")}catch(Q){console.error("Failed to apply texture to all faces:",Q),alert("Failed to apply texture. Please try another image.")}},_e=()=>{console.log("Upload cleared")},He=B=>{t.removeTexture(B),i.value&&i.value.clearTexture(B),e.removeTexture(B),console.log(`Texture removed from ${B} face`)},ce=B=>{const k=t.getTexture(B);k&&(t.copyToAllFaces(B),f.forEach(j=>{if(j!==B){const Q=t.getTextureUrl(j);Q&&i.value&&(i.value.applyTexture(j,Q),e.setTexture(j,{url:Q,name:`${k.name} (copy)`}))}}),console.log(`Texture copied from ${B} to all other faces`))},me=()=>{t.clearAllTextures(),i.value&&i.value.resetTextures(),f.forEach(B=>{e.removeTexture(B)}),console.log("All textures reset")},Le=(B,k)=>{console.log("Export successful:",k,"size:",B.size)},ge=(B,k)=>{console.log("Batch export successful:",k.length,"files")},De=B=>{console.error("Export error:",B),alert(`Export failed: ${B.message}`)},Ge=()=>{console.log("Canvas loaded successfully"),i.value&&(p.value=i.value.getSceneManager()),A()},Oe=B=>{console.error("Canvas error:",B),alert("Failed to initialize 3D canvas. Please refresh the page.")};let Ye=null;const A=()=>{Ye&&clearInterval(Ye),Ye=window.setInterval(()=>{o.value=50+Math.random()*20,a.value=Math.round(100+Math.random()*50)},1e3)},F=()=>{Ye&&(clearInterval(Ye),Ye=null)},E=B=>{if(!(B.target instanceof HTMLInputElement||B.target instanceof HTMLTextAreaElement))switch(B.key.toLowerCase()){case" ":B.preventDefault(),D();break;case"r":B.preventDefault(),_();break;case"g":B.preventDefault(),P();break;case"1":B.preventDefault(),v("front");break;case"2":B.preventDefault(),v("back");break;case"3":B.preventDefault(),v("top");break;case"4":B.preventDefault(),v("isometric");break;case"+":case"=":(B.ctrlKey||B.metaKey)&&(B.preventDefault(),L());break;case"-":(B.ctrlKey||B.metaKey)&&(B.preventDefault(),U());break;case"0":(B.ctrlKey||B.metaKey)&&(B.preventDefault(),C());break}};return ba(()=>{const B=localStorage.getItem("editor-theme");B&&(s.value=B==="dark"),i.value&&(i.value.setMaterialType("matte"),i.value.toggleGridHelper(!0)),f.forEach(k=>{e.setColor(k,"#ffffff")}),e.setSelectedFace("front"),window.addEventListener("keydown",E)}),Ai(()=>{F(),window.removeEventListener("keydown",E)}),(B,k)=>(ue(),he("div",{class:ot(["editor-container",{"dark-theme":s.value}])},[et(B0,{zoom:r.value,"view-preset":c.value,"auto-rotate":d.value,"show-grid":h.value,"is-dark":s.value,onZoomIn:L,onZoomOut:U,onZoomFit:C,onViewPreset:v,onToggleAutoRotate:_,onToggleGrid:P,onToggleTheme:O},null,8,["zoom","view-preset","auto-rotate","show-grid","is-dark"]),y("div",gA,[et(av,{"selected-template":g.value,onSelectTemplate:q},null,8,["selected-template"]),y("div",vA,[y("div",_A,[et(fA,{ref_key:"canvasRef",ref:i,"lighting-preset":l.value,"camera-preset":c.value,"show-grid":h.value,"auto-rotate":d.value,class:"w-full h-full",onLoaded:Ge,onError:Oe},null,8,["lighting-preset","camera-preset","show-grid","auto-rotate"])]),y("div",{class:"canvas-controls"},[y("button",{class:"control-btn",onClick:D,title:"Reset Camera (Space)"},[...k[0]||(k[0]=[Mn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-39ee494e><path d="M10 4V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-39ee494e></path><path d="M10 14V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-39ee494e></path><path d="M4 10H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-39ee494e></path><path d="M14 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-39ee494e></path><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5" data-v-39ee494e></circle></svg>',1)])]),k[1]||(k[1]=y("div",{class:"canvas-info"},[y("span",{class:"info-text"},"Drag: Rotate • Scroll: Zoom • Right-click: Pan")],-1))])]),et(F2,{"selected-face":m.value,"texture-urls":I.value,"current-material-type":u.value,"current-lighting-preset":l.value,dimensions:x.value,"scene-manager":p.value,"current-template-name":T.value,"current-template-category":w.value,onSelectFace:J,onSetMaterialType:$,onSetLightingPreset:H,onUpdateDimensions:N,onDesignUpload:V,onApplyToFace:W,onApplyToAll:le,onClearUpload:_e,onRemoveTexture:He,onCopyToOthers:ce,onResetAllTextures:me,onExport:Le,onBatchExport:ge,onExportError:De},null,8,["selected-face","texture-urls","current-material-type","current-lighting-preset","dimensions","scene-manager","current-template-name","current-template-category"])]),y("div",xA,[y("div",yA,[y("span",MA,[k[2]||(k[2]=y("span",{class:"status-label"},"Selected:",-1)),y("span",bA,be(m.value?m.value.charAt(0).toUpperCase()+m.value.slice(1):"None"),1)]),y("span",wA,[k[3]||(k[3]=y("span",{class:"status-label"},"Textured:",-1)),y("span",SA,be(M.value)+" / 6 faces",1)]),y("span",EA,[k[4]||(k[4]=y("span",{class:"status-label"},"Material:",-1)),y("span",TA,be(u.value),1)])]),y("div",AA,[y("span",CA,[k[5]||(k[5]=y("span",{class:"status-label"},"FPS:",-1)),y("span",RA,be(o.value.toFixed(1)),1)]),y("span",PA,[k[6]||(k[6]=y("span",{class:"status-label"},"Memory:",-1)),y("span",LA,be(a.value)+" MB",1)])])])],2))}}),IA=vn(DA,[["__scopeId","data-v-39ee494e"]]),UA={class:"min-h-screen bg-gray-50"},FA={class:"max-w-7xl mx-auto px-4 py-8"},NA=un({__name:"App",setup(n){return(e,t)=>(ue(),he("div",UA,[t[0]||(t[0]=y("header",{class:"bg-white shadow"},[y("div",{class:"max-w-7xl mx-auto px-4 py-6"},[y("h1",{class:"text-3xl font-bold text-gray-900"},"Bungkus Indonesia"),y("p",{class:"text-gray-600"},"Create professional packaging mockups in 3D")])],-1)),y("main",FA,[et(IA)]),t[1]||(t[1]=y("footer",{class:"bg-white border-t mt-8"},[y("div",{class:"max-w-7xl mx-auto px-4 py-6 text-center text-gray-500"},[y("p",null,"© 2024 Bungkus Indonesia. All rights reserved.")])],-1))]))}}),Np=v0(NA);Np.use(y0());Np.mount("#app");
