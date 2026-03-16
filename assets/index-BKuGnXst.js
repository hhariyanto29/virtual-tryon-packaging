var Op=Object.defineProperty;var kp=(n,e,t)=>e in n?Op(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var st=(n,e,t)=>kp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ac(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},Vs=[],Hn=()=>{},vd=()=>!1,ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Cc=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Rc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Bp=Object.prototype.hasOwnProperty,at=(n,e)=>Bp.call(n,e),ke=Array.isArray,Gs=n=>Yr(n)==="[object Map]",xd=n=>Yr(n)==="[object Set]",mu=n=>Yr(n)==="[object Date]",$e=n=>typeof n=="function",Tt=n=>typeof n=="string",Tn=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",yd=n=>(lt(n)||$e(n))&&$e(n.then)&&$e(n.catch),Md=Object.prototype.toString,Yr=n=>Md.call(n),zp=n=>Yr(n).slice(8,-1),Sd=n=>Yr(n)==="[object Object]",ua=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hp=/-\w/g,bn=ha(n=>n.replace(Hp,e=>e.slice(1).toUpperCase())),Vp=/\B([A-Z])/g,ps=ha(n=>n.replace(Vp,"-$1").toLowerCase()),bd=ha(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=ha(n=>n?`on${bd(n)}`:""),kn=(n,e)=>!Object.is(n,e),ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ed=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Pc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Gp=n=>{const e=Tt(n)?Number(n):NaN;return isNaN(e)?n:e};let gu;const da=()=>gu||(gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fa(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Tt(i)?qp(i):fa(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(n)||lt(n))return n}const Wp=/;(?![^(]*\))/g,Xp=/:([^]+)/,$p=/\/\*[^]*?\*\//g;function qp(n){const e={};return n.replace($p,"").split(Wp).forEach(t=>{if(t){const i=t.split(Xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pt(n){let e="";if(Tt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=pt(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jp=Ac(Yp);function wd(n){return!!n||n===""}function Kp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Lc(n[i],e[i]);return t}function Lc(n,e){if(n===e)return!0;let t=mu(n),i=mu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Tn(n),i=Tn(e),t||i)return n===e;if(t=ke(n),i=ke(e),t||i)return t&&i?Kp(n,e):!1;if(t=lt(n),i=lt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Lc(n[o],e[o]))return!1}}return String(n)===String(e)}const Td=n=>!!(n&&n.__v_isRef===!0),He=n=>Tt(n)?n:n==null?"":ke(n)||lt(n)&&(n.toString===Md||!$e(n.toString))?Td(n)?He(n.value):JSON.stringify(n,Ad,2):String(n),Ad=(n,e)=>Td(e)?Ad(n,e.value):Gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[La(i,r)+" =>"]=s,t),{})}:xd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>La(t))}:Tn(e)?La(e):lt(e)&&!ke(e)&&!Sd(e)?String(e):e,La=(n,e="")=>{var t;return Tn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class Cd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=zt;try{return zt=this,e()}finally{zt=t}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){this._on>0&&--this._on===0&&(zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rd(n){return new Cd(n)}function Pd(){return zt}function Zp(n,e=!1){zt&&zt.cleanups.push(n)}let gt;const Da=new WeakSet;class Ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_u(this),Ud(this);const e=gt,t=En;gt=this,En=!0;try{return this.fn()}finally{Nd(this),gt=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uc(e);this.deps=this.depsTail=void 0,_u(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wl(this)&&this.run()}get dirty(){return wl(this)}}let Dd=0,br,Er;function Id(n,e=!1){if(n.flags|=8,e){n.next=Er,Er=n;return}n.next=br,br=n}function Dc(){Dd++}function Ic(){if(--Dd>0)return;if(Er){let e=Er;for(Er=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;br;){let e=br;for(br=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Uc(i),Jp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function wl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!wl(n))))return;n.flags|=2;const e=n.dep,t=gt,i=En;gt=n,En=!0;try{Ud(n);const s=n.fn(n._value);(e.version===0||kn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{gt=t,En=i,Nd(n),n.flags&=-3}}function Uc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Uc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Jp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Od=[];function gi(){Od.push(En),En=!1}function _i(){const n=Od.pop();En=n===void 0?!0:n}function _u(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let Ur=0;class Qp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!En||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new Qp(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,kd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,Ur++,this.notify(e)}notify(e){Dc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ic()}}}function kd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const jo=new WeakMap,ls=Symbol(""),Tl=Symbol(""),Nr=Symbol("");function Ht(n,e,t){if(En&&gt){let i=jo.get(n);i||jo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Nc),s.map=i,s.key=t),s.track()}}function ai(n,e,t,i,s,r){const o=jo.get(n);if(!o){Ur++;return}const a=l=>{l&&l.trigger()};if(Dc(),e==="clear")o.forEach(a);else{const l=ke(n),c=l&&ua(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Nr||!Tn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Nr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ls)),Gs(n)&&a(o.get(Tl)));break;case"delete":l||(a(o.get(ls)),Gs(n)&&a(o.get(Tl)));break;case"set":Gs(n)&&a(o.get(ls));break}}Ic()}function em(n,e){const t=jo.get(n);return t&&t.get(e)}function xs(n){const e=et(n);return e===n?e:(Ht(e,"iterate",Nr),cn(n)?e:e.map(An))}function pa(n){return Ht(n=et(n),"iterate",Nr),n}function Nn(n,e){return vi(n)?Ks(pi(n)?An(e):e):An(e)}const tm={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,n=>Nn(this,n))},concat(...n){return xs(this).concat(...n.map(e=>ke(e)?xs(e):e))},entries(){return Ia(this,"entries",n=>(n[1]=Nn(this,n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(i=>Nn(this,i)),arguments)},find(n,e){return Kn(this,"find",n,e,t=>Nn(this,t),arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,t=>Nn(this,t),arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ua(this,"includes",n)},indexOf(...n){return Ua(this,"indexOf",n)},join(n){return xs(this).join(n)},lastIndexOf(...n){return Ua(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return cr(this,"pop")},push(...n){return cr(this,"push",n)},reduce(n,...e){return vu(this,"reduce",n,e)},reduceRight(n,...e){return vu(this,"reduceRight",n,e)},shift(){return cr(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return cr(this,"splice",n)},toReversed(){return xs(this).toReversed()},toSorted(n){return xs(this).toSorted(n)},toSpliced(...n){return xs(this).toSpliced(...n)},unshift(...n){return cr(this,"unshift",n)},values(){return Ia(this,"values",n=>Nn(this,n))}};function Ia(n,e,t){const i=pa(n),s=i[e]();return i!==n&&!cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const nm=Array.prototype;function Kn(n,e,t,i,s,r){const o=pa(n),a=o!==n&&!cn(n),l=o[e];if(l!==nm[e]){const h=l.apply(n,r);return a?An(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Nn(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function vu(n,e,t,i){const s=pa(n),r=s!==n&&!cn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Nn(n,c)),t.call(this,c,Nn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Nn(n,l):l}function Ua(n,e,t){const i=et(n);Ht(i,"iterate",Nr);const s=i[e](...t);return(s===-1||s===!1)&&ma(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function cr(n,e,t=[]){gi(),Dc();const i=et(n)[e].apply(n,t);return Ic(),_i(),i}const im=Ac("__proto__,__v_isRef,__isVue"),Bd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Tn));function sm(n){Tn(n)||(n=String(n));const e=et(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?pm:Wd:r?Gd:Vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){let l;if(o&&(l=tm[t]))return l;if(t==="hasOwnProperty")return sm}const a=Reflect.get(e,t,wt(e)?e:i);if((Tn(t)?Bd.has(t):im(t))||(s||Ht(e,"get",t),r))return a;if(wt(a)){const l=o&&ua(t)?a:a.value;return s&&lt(l)?Cl(l):l}return lt(a)?s?Cl(a):jr(a):a}}class Hd extends zd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ke(e)&&ua(t);if(!this._isShallow){const c=vi(r);if(!cn(i)&&!vi(i)&&(r=et(r),i=et(i)),!o&&wt(r)&&!wt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,wt(e)?e:s);return e===et(s)&&(a?kn(i,r)&&ai(e,"set",t,i):ai(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Tn(t)||!Bd.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",ke(e)?"length":ls),Reflect.ownKeys(e)}}class rm extends zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const om=new Hd,am=new rm,lm=new Hd(!0);const Al=n=>n,io=n=>Reflect.getPrototypeOf(n);function cm(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=Gs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Al:e?Ks:An;return!e&&Ht(r,"iterate",l?Tl:ls),Lt(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function so(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function um(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(kn(s,a)&&Ht(o,"get",s),Ht(o,"get",a));const{has:l}=io(o),c=e?Al:n?Ks:An;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ht(et(s),"iterate",ls),s.size},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(kn(s,a)&&Ht(o,"has",s),Ht(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?Al:n?Ks:An;return!n&&Ht(l,"iterate",ls),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Lt(t,n?{add:so("add"),set:so("set"),delete:so("delete"),clear:so("clear")}:{add(s){const r=et(this),o=io(r),a=et(s),l=!e&&!cn(s)&&!vi(s)?a:s;return o.has.call(r,l)||kn(s,l)&&o.has.call(r,s)||kn(a,l)&&o.has.call(r,a)||(r.add(l),ai(r,"add",l,l)),this},set(s,r){!e&&!cn(r)&&!vi(r)&&(r=et(r));const o=et(this),{has:a,get:l}=io(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?kn(r,u)&&ai(o,"set",s,r):ai(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=io(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ai(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=cm(s,n,e)}),t}function Fc(n,e){const t=um(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const hm={get:Fc(!1,!1)},dm={get:Fc(!1,!0)},fm={get:Fc(!0,!1)};const Vd=new WeakMap,Gd=new WeakMap,Wd=new WeakMap,pm=new WeakMap;function mm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(n){return n.__v_skip||!Object.isExtensible(n)?0:mm(zp(n))}function jr(n){return vi(n)?n:Oc(n,!1,om,hm,Vd)}function _m(n){return Oc(n,!1,lm,dm,Gd)}function Cl(n){return Oc(n,!0,am,fm,Wd)}function Oc(n,e,t,i,s){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=gm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function pi(n){return vi(n)?pi(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function ma(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function kc(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Ed(n,"__v_skip",!0),n}const An=n=>lt(n)?jr(n):n,Ks=n=>lt(n)?Cl(n):n;function wt(n){return n?n.__v_isRef===!0:!1}function Fe(n){return vm(n,!1)}function vm(n,e){return wt(n)?n:new xm(n,e)}class xm{constructor(e,t){this.dep=new Nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:An(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||cn(e)||vi(e);e=i?e:et(e),kn(e,t)&&(this._rawValue=e,this._value=i?e:An(e),this.dep.trigger())}}function Xd(n){return wt(n)?n.value:n}const ym={get:(n,e,t)=>e==="__v_raw"?n:Xd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return wt(s)&&!wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function $d(n){return pi(n)?n:new Proxy(n,ym)}function Mm(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=bm(n,t);return e}class Sm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=et(e);let s=!0,r=e;if(!ke(e)||!ua(String(t)))do s=!ma(r)||cn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Xd(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&wt(this._raw[this._key])){const t=this._object[this._key];if(wt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return em(this._raw,this._key)}}function bm(n,e,t){return new Sm(n,e,t)}class Em{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Id(this,!0),!0}get value(){const e=this.dep.track();return Fd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wm(n,e,t=!1){let i,s;return $e(n)?i=n:(i=n.get,s=n.set),new Em(i,s,t)}const ro={},Ko=new WeakMap;let is;function Tm(n,e=!1,t=is){if(t){let i=Ko.get(t);i||Ko.set(t,i=[]),i.push(n)}}function Am(n,e,t=ft){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:cn(M)||s===!1||s===0?li(M,1):li(M);let u,h,f,d,g=!1,x=!1;if(wt(n)?(h=()=>n.value,g=cn(n)):pi(n)?(h=()=>c(n),g=!0):ke(n)?(x=!0,g=n.some(M=>pi(M)||cn(M)),h=()=>n.map(M=>{if(wt(M))return M.value;if(pi(M))return c(M);if($e(M))return l?l(M,2):M()})):$e(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){gi();try{f()}finally{_i()}}const M=is;is=u;try{return l?l(n,3,[d]):n(d)}finally{is=M}}:h=Hn,e&&s){const M=h,N=s===!0?1/0:s;h=()=>li(M(),N)}const m=Pd(),p=()=>{u.stop(),m&&m.active&&Rc(m.effects,u)};if(r&&e){const M=e;e=(...N)=>{M(...N),p()}}let R=x?new Array(n.length).fill(ro):ro;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const N=u.run();if(s||g||(x?N.some((D,I)=>kn(D,R[I])):kn(N,R))){f&&f();const D=is;is=u;try{const I=[N,R===ro?void 0:x&&R[0]===ro?[]:R,d];R=N,l?l(e,3,I):e(...I)}finally{is=D}}}else u.run()};return a&&a(E),u=new Ld(h),u.scheduler=o?()=>o(E,!1):E,d=M=>Tm(M,!1,u),f=u.onStop=()=>{const M=Ko.get(u);if(M){if(l)l(M,4);else for(const N of M)N();Ko.delete(u)}},e?i?E(!0):R=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function li(n,e=1/0,t){if(e<=0||!lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,wt(n))li(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)li(n[i],e,t);else if(xd(n)||Gs(n))n.forEach(i=>{li(i,e,t)});else if(Sd(n)){for(const i in n)li(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&li(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(n,e,t,i){try{return i?n(...i):n()}catch(s){ga(s,e,t)}}function Cn(n,e,t,i){if($e(n)){const s=Kr(n,e,t,i);return s&&yd(s)&&s.catch(r=>{ga(r,e,t)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],e,t,i));return s}}function ga(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){gi(),Kr(r,null,10,[n,l,c]),_i();return}}Cm(n,t,s,i,o)}function Cm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const qt=[];let Dn=-1;const Ws=[];let Pi=null,Os=0;const qd=Promise.resolve();let Zo=null;function Yd(n){const e=Zo||qd;return n?e.then(this?n.bind(this):n):e}function Rm(n){let e=Dn+1,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=Fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Bc(n){if(!(n.flags&1)){const e=Fr(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Fr(t)?qt.push(n):qt.splice(Rm(e),0,n),n.flags|=1,jd()}}function jd(){Zo||(Zo=qd.then(Zd))}function Pm(n){ke(n)?Ws.push(...n):Pi&&n.id===-1?Pi.splice(Os+1,0,n):n.flags&1||(Ws.push(n),n.flags|=1),jd()}function xu(n,e,t=Dn+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kd(n){if(Ws.length){const e=[...new Set(Ws)].sort((t,i)=>Fr(t)-Fr(i));if(Ws.length=0,Pi){Pi.push(...e);return}for(Pi=e,Os=0;Os<Pi.length;Os++){const t=Pi[Os];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Os=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Dn=0;Dn<qt.length;Dn++){const e=qt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<qt.length;Dn++){const e=qt[Dn];e&&(e.flags&=-2)}Dn=-1,qt.length=0,Kd(),Zo=null,(qt.length||Ws.length)&&Zd()}}let Gt=null,Jd=null;function Jo(n){const e=Gt;return Gt=n,Jd=n&&n.type.__scopeId||null,e}function Li(n,e=Gt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ta(-1);const r=Jo(e);let o;try{o=n(...s)}finally{Jo(r),i._d&&ta(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ui(n,e){if(Gt===null)return n;const t=Sa(Gt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&($e(r)&&(r={mounted:r,updated:r}),r.deep&&li(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function $i(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(gi(),Cn(l,t,8,[n.el,a,n,e]),_i())}}function Lm(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function wr(n,e,t=!1){const i=Gc();if(i||cs){let s=cs?cs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&$e(e)?e.call(i&&i.proxy):e}}function Dm(){return!!(Gc()||cs)}const Im=Symbol.for("v-scx"),Um=()=>wr(Im);function zn(n,e,t){return Qd(n,e,t)}function Qd(n,e,t=ft){const{immediate:i,deep:s,flush:r,once:o}=t,a=Lt({},t),l=e&&i||!e&&r!=="post";let c;if(zr){if(r==="sync"){const d=Um();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Hn,d.resume=Hn,d.pause=Hn,d}}const u=Yt;a.call=(d,g,x)=>Cn(d,u,g,x);let h=!1;r==="post"?a.scheduler=d=>{Qt(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Bc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Am(n,e,a);return zr&&(c?c.push(f):l&&f()),f}function Nm(n,e,t){const i=this.proxy,s=Tt(n)?n.includes(".")?ef(i,n):()=>i[n]:n.bind(i,i);let r;$e(e)?r=e:(r=e.handler,t=e);const o=Zr(this),a=Qd(s,r.bind(i),t);return o(),a}function ef(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Fm=Symbol("_vte"),tf=n=>n.__isTeleport,In=Symbol("_leaveCb"),ur=Symbol("_enterCb");function Om(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xa(()=>{n.isMounted=!0}),uf(()=>{n.isUnmounting=!0}),n}const dn=[Function,Array],nf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},sf=n=>{const e=n.subTree;return e.component?sf(e.component):e},km={name:"BaseTransition",props:nf,setup(n,{slots:e}){const t=Gc(),i=Om();return()=>{const s=e.default&&af(e.default(),!0);if(!s||!s.length)return;const r=rf(s),o=et(n),{mode:a}=o;if(i.isLeaving)return Na(r);const l=yu(r);if(!l)return Na(r);let c=Rl(l,o,i,t,h=>c=h);l.type!==Vt&&Or(l,c);let u=t.subTree&&yu(t.subTree);if(u&&u.type!==Vt&&!rs(u,l)&&sf(t).type!==Vt){let h=Rl(u,o,i,t);if(Or(u,h),a==="out-in"&&l.type!==Vt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Na(r);a==="in-out"&&l.type!==Vt?h.delayLeave=(f,d,g)=>{const x=of(i,u);x[String(u.key)]=u,f[In]=()=>{d(),f[In]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function rf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Vt){e=t;break}}return e}const Bm=km;function of(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Rl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:R,onAppearCancelled:E}=e,M=String(n.key),N=of(t,n),D=(v,_)=>{v&&Cn(v,i,9,_)},I=(v,_)=>{const P=_[1];D(v,_),ke(v)?v.every(O=>O.length<=1)&&P():v.length<=1&&P()},A={mode:o,persisted:a,beforeEnter(v){let _=l;if(!t.isMounted)if(r)_=m||l;else return;v[In]&&v[In](!0);const P=N[M];P&&rs(n,P)&&P.el[In]&&P.el[In](),D(_,[v])},enter(v){if(N[M]===n)return;let _=c,P=u,O=h;if(!t.isMounted)if(r)_=p||c,P=R||u,O=E||h;else return;let L=!1;v[ur]=G=>{L||(L=!0,G?D(O,[v]):D(P,[v]),A.delayedLeave&&A.delayedLeave(),v[ur]=void 0)};const F=v[ur].bind(null,!1);_?I(_,[v,F]):F()},leave(v,_){const P=String(n.key);if(v[ur]&&v[ur](!0),t.isUnmounting)return _();D(f,[v]);let O=!1;v[In]=F=>{O||(O=!0,_(),F?D(x,[v]):D(g,[v]),v[In]=void 0,N[P]===n&&delete N[P])};const L=v[In].bind(null,!1);N[P]=n,d?I(d,[v,L]):L()},clone(v){const _=Rl(v,e,t,i,s);return s&&s(_),_}};return A}function Na(n){if(_a(n))return n=zi(n),n.children=null,n}function yu(n){if(!_a(n))return tf(n.type)&&n.children?rf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&$e(t.default))return t.default()}}function Or(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Or(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function af(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===yt?(o.patchFlag&128&&s++,i=i.concat(af(o.children,e,a))):(e||o.type!==Vt)&&i.push(a!=null?zi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Rn(n,e){return $e(n)?Lt({name:n.name},e,{setup:n}):n}function lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Qo=new WeakMap;function Tr(n,e,t,i,s=!1){if(ke(n)){n.forEach((x,m)=>Tr(x,e&&(ke(e)?e[m]:e),t,i,s));return}if(Xs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Tr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,h=a.setupState,f=et(h),d=h===ft?vd:x=>Mu(u,x)?!1:at(f,x),g=(x,m)=>!(m&&Mu(u,m));if(c!=null&&c!==l){if(Su(e),Tt(c))u[c]=null,d(c)&&(h[c]=null);else if(wt(c)){const x=e;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if($e(l))Kr(l,a,12,[o,u]);else{const x=Tt(l),m=wt(l);if(x||m){const p=()=>{if(n.f){const R=x?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)ke(R)&&Rc(R,r);else if(ke(R))R.includes(r)||R.push(r);else if(x)u[l]=[r],d(l)&&(h[l]=u[l]);else{const E=[r];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else x?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const R=()=>{p(),Qo.delete(n)};R.id=-1,Qo.set(n,R),Qt(R,t)}else Su(n),p()}}}function Su(n){const e=Qo.get(n);e&&(e.flags|=8,Qo.delete(n))}da().requestIdleCallback;da().cancelIdleCallback;const Xs=n=>!!n.type.__asyncLoader,_a=n=>n.type.__isKeepAlive;function zm(n,e){cf(n,"a",e)}function Hm(n,e){cf(n,"da",e)}function cf(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(va(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_a(s.parent.vnode)&&Vm(i,e,t,s),s=s.parent}}function Vm(n,e,t,i){const s=va(e,n,i,!0);ir(()=>{Rc(i[e],s)},t)}function va(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{gi();const a=Zr(t),l=Cn(e,t,n,o);return a(),_i(),l});return i?s.unshift(r):s.push(r),r}}const xi=n=>(e,t=Yt)=>{(!zr||n==="sp")&&va(n,(...i)=>e(...i),t)},Gm=xi("bm"),xa=xi("m"),Wm=xi("bu"),Xm=xi("u"),uf=xi("bum"),ir=xi("um"),$m=xi("sp"),qm=xi("rtg"),Ym=xi("rtc");function jm(n,e=Yt){va("ec",n,e)}const Km=Symbol.for("v-ndc");function Vn(n,e,t,i){let s;const r=t,o=ke(n);if(o||Tt(n)){const a=o&&pi(n);let l=!1,c=!1;a&&(l=!cn(n),c=vi(n),n=pa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Ks(An(n[u])):An(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(lt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function bu(n,e,t={},i,s){if(Gt.ce||Gt.parent&&Xs(Gt.parent)&&Gt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Me(),Ul(yt,null,[Qe("slot",t,i&&i())],c?-2:64)}let r=n[e];r&&r._c&&(r._d=!1),Me();const o=r&&hf(r(t)),a=t.key||o&&o.key,l=Ul(yt,{key:(a&&!Tn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function hf(n){return n.some(e=>Br(e)?!(e.type===Vt||e.type===yt&&!hf(e.children)):!0)?n:null}const Pl=n=>n?Lf(n)?Sa(n):Pl(n.parent):null,Ar=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pl(n.parent),$root:n=>Pl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ff(n),$forceUpdate:n=>n.f||(n.f=()=>{Bc(n.update)}),$nextTick:n=>n.n||(n.n=Yd.bind(n.proxy)),$watch:n=>Nm.bind(n)}),Fa=(n,e)=>n!==ft&&!n.__isScriptSetup&&at(n,e),Zm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fa(i,e))return o[e]=1,i[e];if(s!==ft&&at(s,e))return o[e]=2,s[e];if(at(r,e))return o[e]=3,r[e];if(t!==ft&&at(t,e))return o[e]=4,t[e];Ll&&(o[e]=0)}}const c=Ar[e];let u,h;if(c)return e==="$attrs"&&Ht(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ft&&at(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Fa(s,e)?(s[e]=t,!0):i!==ft&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ft&&a[0]!=="$"&&at(n,a)||Fa(e,a)||at(r,a)||at(i,a)||at(Ar,a)||at(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Eu(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ll=!0;function Jm(n){const e=ff(n),t=n.proxy,i=n.ctx;Ll=!1,e.beforeCreate&&wu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:E,unmounted:M,render:N,renderTracked:D,renderTriggered:I,errorCaptured:A,serverPrefetch:v,expose:_,inheritAttrs:P,components:O,directives:L,filters:F}=e;if(c&&Qm(c,i,null),o)for(const K in o){const Y=o[K];$e(Y)&&(i[K]=Y.bind(t))}if(s){const K=s.call(t,t);lt(K)&&(n.data=jr(K))}if(Ll=!0,r)for(const K in r){const Y=r[K],le=$e(Y)?Y.bind(t,t):$e(Y.get)?Y.get.bind(t,t):Hn,pe=!$e(Y)&&$e(Y.set)?Y.set.bind(t):Hn,xe=ln({get:le,set:pe});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Ce=>xe.value=Ce})}if(a)for(const K in a)df(a[K],i,t,K);if(l){const K=$e(l)?l.call(t):l;Reflect.ownKeys(K).forEach(Y=>{Lm(Y,K[Y])})}u&&wu(u,n,"c");function B(K,Y){ke(Y)?Y.forEach(le=>K(le.bind(t))):Y&&K(Y.bind(t))}if(B(Gm,h),B(xa,f),B(Wm,d),B(Xm,g),B(zm,x),B(Hm,m),B(jm,A),B(Ym,D),B(qm,I),B(uf,R),B(ir,M),B($m,v),ke(_))if(_.length){const K=n.exposed||(n.exposed={});_.forEach(Y=>{Object.defineProperty(K,Y,{get:()=>t[Y],set:le=>t[Y]=le,enumerable:!0})})}else n.exposed||(n.exposed={});N&&n.render===Hn&&(n.render=N),P!=null&&(n.inheritAttrs=P),O&&(n.components=O),L&&(n.directives=L),v&&lf(n)}function Qm(n,e,t=Hn){ke(n)&&(n=Dl(n));for(const i in n){const s=n[i];let r;lt(s)?"default"in s?r=wr(s.from||i,s.default,!0):r=wr(s.from||i):r=wr(s),wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function wu(n,e,t){Cn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function df(n,e,t,i){let s=i.includes(".")?ef(t,i):()=>t[i];if(Tt(n)){const r=e[n];$e(r)&&zn(s,r)}else if($e(n))zn(s,n.bind(t));else if(lt(n))if(ke(n))n.forEach(r=>df(r,e,t,i));else{const r=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(r)&&zn(s,r,n)}}function ff(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ea(l,c,o,!0)),ea(l,e,o)),lt(e)&&r.set(e,l),l}function ea(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ea(n,r,t,!0),s&&s.forEach(o=>ea(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=eg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const eg={data:Tu,props:Au,emits:Au,methods:vr,computed:vr,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:vr,directives:vr,watch:ng,provide:Tu,inject:tg};function Tu(n,e){return e?n?function(){return Lt($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function tg(n,e){return vr(Dl(n),Dl(e))}function Dl(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function vr(n,e){return n?Lt(Object.create(null),n,e):e}function Au(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Eu(n),Eu(e??{})):e}function ng(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function pf(){return{app:null,config:{isNativeTag:vd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function sg(n,e){return function(i,s=null){$e(i)||(i=Lt({},i)),s!=null&&!lt(s)&&(s=null);const r=pf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ig++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Fg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$e(u.install)?(o.add(u),u.install(c,...h)):$e(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Qe(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Sa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=cs;cs=c;try{return u()}finally{cs=h}}};return c}}let cs=null;const rg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bn(e)}Modifiers`]||n[`${ps(e)}Modifiers`];function og(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&rg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Tt(u)?u.trim():u)),o.number&&(s=t.map(Pc)));let a,l=i[a=Pa(e)]||i[a=Pa(bn(e))];!l&&r&&(l=i[a=Pa(ps(e))]),l&&Cn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(c,n,6,s)}}const ag=new WeakMap;function mf(n,e,t=!1){const i=t?ag:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$e(n)){const l=c=>{const u=mf(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(lt(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):Lt(o,r),lt(n)&&i.set(n,o),o)}function ya(n,e){return!n||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,ps(e))||at(n,e))}function Cu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:x}=n,m=Jo(n);let p,R;try{if(t.shapeFlag&4){const M=s||i,N=M;p=Fn(c.call(N,M,u,h,d,f,g)),R=a}else{const M=e;p=Fn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),R=e.props?a:lg(a)}}catch(M){Cr.length=0,ga(M,n,1),p=Qe(Vt)}let E=p;if(R&&x!==!1){const M=Object.keys(R),{shapeFlag:N}=E;M.length&&N&7&&(r&&M.some(Cc)&&(R=cg(R,r)),E=zi(E,R,!1,!0))}return t.dirs&&(E=zi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Or(E,t.transition),p=E,Jo(m),p}const lg=n=>{let e;for(const t in n)(t==="class"||t==="style"||ca(t))&&((e||(e={}))[t]=n[t]);return e},cg=(n,e)=>{const t={};for(const i in n)(!Cc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ug(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ru(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(gf(o,i,f)&&!ya(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ru(i,o,c):!0:!!o;return!1}function Ru(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(gf(e,n,r)&&!ya(t,r))return!0}return!1}function gf(n,e,t){const i=n[t],s=e[t];return t==="style"&&lt(i)&&lt(s)?!Lc(i,s):i!==s}function hg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const _f={},vf=()=>Object.create(_f),xf=n=>Object.getPrototypeOf(n)===_f;function dg(n,e,t,i=!1){const s={},r=vf();n.propsDefaults=Object.create(null),yf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:_m(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function fg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ya(n.emitsOptions,f))continue;const d=e[f];if(l)if(at(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=bn(f);s[g]=Il(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{yf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!at(e,h)&&((u=ps(h))===h||!at(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Il(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!at(e,h))&&(delete r[h],c=!0)}c&&ai(n.attrs,"set","")}function yf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let u;s&&at(s,u=bn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ya(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||ft;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Il(s,l,h,c[h],n,!at(c,h))}}return o}function Il(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Zr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ps(t))&&(i=!0))}return i}const pg=new WeakMap;function Mf(n,e,t=!1){const i=t?pg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$e(n)){const u=h=>{l=!0;const[f,d]=Mf(h,e,!0);Lt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return lt(n)&&i.set(n,Vs),Vs;if(ke(r))for(let u=0;u<r.length;u++){const h=bn(r[u]);Pu(h)&&(o[h]=ft)}else if(r)for(const u in r){const h=bn(u);if(Pu(h)){const f=r[u],d=o[h]=ke(f)||$e(f)?{type:f}:Lt({},f),g=d.type;let x=!1,m=!0;if(ke(g))for(let p=0;p<g.length;++p){const R=g[p],E=$e(R)&&R.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(m=!1)}else x=$e(g)&&g.name==="Boolean";d[0]=x,d[1]=m,(x||at(d,"default"))&&a.push(h)}}const c=[o,a];return lt(n)&&i.set(n,c),c}function Pu(n){return n[0]!=="$"&&!Sr(n)}const zc=n=>n==="_"||n==="_ctx"||n==="$stable",Hc=n=>ke(n)?n.map(Fn):[Fn(n)],mg=(n,e,t)=>{if(e._n)return e;const i=Li((...s)=>Hc(e(...s)),t);return i._c=!1,i},Sf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(zc(s))continue;const r=n[s];if($e(r))e[s]=mg(s,r,i);else if(r!=null){const o=Hc(r);e[s]=()=>o}}},bf=(n,e)=>{const t=Hc(e);n.slots.default=()=>t},Ef=(n,e,t)=>{for(const i in e)(t||!zc(i))&&(n[i]=e[i])},gg=(n,e,t)=>{const i=n.slots=vf();if(n.vnode.shapeFlag&32){const s=e._;s?(Ef(i,e,t),t&&Ed(i,"_",s,!0)):Sf(e,i)}else e&&bf(n,e)},_g=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Ef(s,e,t):(r=!e.$stable,Sf(e,s)),o=e}else e&&(bf(n,e),o={default:1});if(r)for(const a in s)!zc(a)&&o[a]==null&&delete s[a]},Qt=Sg;function vg(n){return xg(n)}function xg(n,e){const t=da();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Hn,insertStaticContent:g}=n,x=(w,U,y,V=null,z=null,$=null,Z=void 0,ie=null,Q=!!U.dynamicChildren)=>{if(w===U)return;w&&!rs(w,U)&&(V=de(w),Ce(w,z,$,!0),w=null),U.patchFlag===-2&&(Q=!1,U.dynamicChildren=null);const{type:b,ref:S,shapeFlag:k}=U;switch(b){case Ma:m(w,U,y,V);break;case Vt:p(w,U,y,V);break;case Bo:w==null&&R(U,y,V,Z);break;case yt:O(w,U,y,V,z,$,Z,ie,Q);break;default:k&1?N(w,U,y,V,z,$,Z,ie,Q):k&6?L(w,U,y,V,z,$,Z,ie,Q):(k&64||k&128)&&b.process(w,U,y,V,z,$,Z,ie,Q,Re)}S!=null&&z?Tr(S,w&&w.ref,$,U||w,!U):S==null&&w&&w.ref!=null&&Tr(w.ref,null,$,w,!0)},m=(w,U,y,V)=>{if(w==null)i(U.el=a(U.children),y,V);else{const z=U.el=w.el;U.children!==w.children&&c(z,U.children)}},p=(w,U,y,V)=>{w==null?i(U.el=l(U.children||""),y,V):U.el=w.el},R=(w,U,y,V)=>{[w.el,w.anchor]=g(w.children,U,y,V,w.el,w.anchor)},E=({el:w,anchor:U},y,V)=>{let z;for(;w&&w!==U;)z=f(w),i(w,y,V),w=z;i(U,y,V)},M=({el:w,anchor:U})=>{let y;for(;w&&w!==U;)y=f(w),s(w),w=y;s(U)},N=(w,U,y,V,z,$,Z,ie,Q)=>{if(U.type==="svg"?Z="svg":U.type==="math"&&(Z="mathml"),w==null)D(U,y,V,z,$,Z,ie,Q);else{const b=w.el&&w.el._isVueCE?w.el:null;try{b&&b._beginPatch(),v(w,U,z,$,Z,ie,Q)}finally{b&&b._endPatch()}}},D=(w,U,y,V,z,$,Z,ie)=>{let Q,b;const{props:S,shapeFlag:k,transition:j,dirs:ee}=w;if(Q=w.el=o(w.type,$,S&&S.is,S),k&8?u(Q,w.children):k&16&&A(w.children,Q,null,V,z,Oa(w,$),Z,ie),ee&&$i(w,null,V,"created"),I(Q,w,w.scopeId,Z,V),S){for(const fe in S)fe!=="value"&&!Sr(fe)&&r(Q,fe,null,S[fe],$,V);"value"in S&&r(Q,"value",null,S.value,$),(b=S.onVnodeBeforeMount)&&Ln(b,V,w)}ee&&$i(w,null,V,"beforeMount");const J=yg(z,j);J&&j.beforeEnter(Q),i(Q,U,y),((b=S&&S.onVnodeMounted)||J||ee)&&Qt(()=>{b&&Ln(b,V,w),J&&j.enter(Q),ee&&$i(w,null,V,"mounted")},z)},I=(w,U,y,V,z)=>{if(y&&d(w,y),V)for(let $=0;$<V.length;$++)d(w,V[$]);if(z){let $=z.subTree;if(U===$||Cf($.type)&&($.ssContent===U||$.ssFallback===U)){const Z=z.vnode;I(w,Z,Z.scopeId,Z.slotScopeIds,z.parent)}}},A=(w,U,y,V,z,$,Z,ie,Q=0)=>{for(let b=Q;b<w.length;b++){const S=w[b]=ie?oi(w[b]):Fn(w[b]);x(null,S,U,y,V,z,$,Z,ie)}},v=(w,U,y,V,z,$,Z)=>{const ie=U.el=w.el;let{patchFlag:Q,dynamicChildren:b,dirs:S}=U;Q|=w.patchFlag&16;const k=w.props||ft,j=U.props||ft;let ee;if(y&&qi(y,!1),(ee=j.onVnodeBeforeUpdate)&&Ln(ee,y,U,w),S&&$i(U,w,y,"beforeUpdate"),y&&qi(y,!0),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&u(ie,""),b?_(w.dynamicChildren,b,ie,y,V,Oa(U,z),$):Z||Y(w,U,ie,null,y,V,Oa(U,z),$,!1),Q>0){if(Q&16)P(ie,k,j,y,z);else if(Q&2&&k.class!==j.class&&r(ie,"class",null,j.class,z),Q&4&&r(ie,"style",k.style,j.style,z),Q&8){const J=U.dynamicProps;for(let fe=0;fe<J.length;fe++){const ae=J[fe],ge=k[ae],Oe=j[ae];(Oe!==ge||ae==="value")&&r(ie,ae,ge,Oe,z,y)}}Q&1&&w.children!==U.children&&u(ie,U.children)}else!Z&&b==null&&P(ie,k,j,y,z);((ee=j.onVnodeUpdated)||S)&&Qt(()=>{ee&&Ln(ee,y,U,w),S&&$i(U,w,y,"updated")},V)},_=(w,U,y,V,z,$,Z)=>{for(let ie=0;ie<U.length;ie++){const Q=w[ie],b=U[ie],S=Q.el&&(Q.type===yt||!rs(Q,b)||Q.shapeFlag&198)?h(Q.el):y;x(Q,b,S,null,V,z,$,Z,!0)}},P=(w,U,y,V,z)=>{if(U!==y){if(U!==ft)for(const $ in U)!Sr($)&&!($ in y)&&r(w,$,U[$],null,z,V);for(const $ in y){if(Sr($))continue;const Z=y[$],ie=U[$];Z!==ie&&$!=="value"&&r(w,$,ie,Z,z,V)}"value"in y&&r(w,"value",U.value,y.value,z)}},O=(w,U,y,V,z,$,Z,ie,Q)=>{const b=U.el=w?w.el:a(""),S=U.anchor=w?w.anchor:a("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:ee}=U;ee&&(ie=ie?ie.concat(ee):ee),w==null?(i(b,y,V),i(S,y,V),A(U.children||[],y,S,z,$,Z,ie,Q)):k>0&&k&64&&j&&w.dynamicChildren&&w.dynamicChildren.length===j.length?(_(w.dynamicChildren,j,y,z,$,Z,ie),(U.key!=null||z&&U===z.subTree)&&wf(w,U,!0)):Y(w,U,y,S,z,$,Z,ie,Q)},L=(w,U,y,V,z,$,Z,ie,Q)=>{U.slotScopeIds=ie,w==null?U.shapeFlag&512?z.ctx.activate(U,y,V,Z,Q):F(U,y,V,z,$,Z,Q):G(w,U,Q)},F=(w,U,y,V,z,$,Z)=>{const ie=w.component=Rg(w,V,z);if(_a(w)&&(ie.ctx.renderer=Re),Pg(ie,!1,Z),ie.asyncDep){if(z&&z.registerDep(ie,B,Z),!w.el){const Q=ie.subTree=Qe(Vt);p(null,Q,U,y),w.placeholder=Q.el}}else B(ie,w,U,y,z,$,Z)},G=(w,U,y)=>{const V=U.component=w.component;if(ug(w,U,y))if(V.asyncDep&&!V.asyncResolved){K(V,U,y);return}else V.next=U,V.update();else U.el=w.el,V.vnode=U},B=(w,U,y,V,z,$,Z)=>{const ie=()=>{if(w.isMounted){let{next:k,bu:j,u:ee,parent:J,vnode:fe}=w;{const ye=Tf(w);if(ye){k&&(k.el=fe.el,K(w,k,Z)),ye.asyncDep.then(()=>{Qt(()=>{w.isUnmounted||b()},z)});return}}let ae=k,ge;qi(w,!1),k?(k.el=fe.el,K(w,k,Z)):k=fe,j&&ko(j),(ge=k.props&&k.props.onVnodeBeforeUpdate)&&Ln(ge,J,k,fe),qi(w,!0);const Oe=Cu(w),ce=w.subTree;w.subTree=Oe,x(ce,Oe,h(ce.el),de(ce),w,z,$),k.el=Oe.el,ae===null&&hg(w,Oe.el),ee&&Qt(ee,z),(ge=k.props&&k.props.onVnodeUpdated)&&Qt(()=>Ln(ge,J,k,fe),z)}else{let k;const{el:j,props:ee}=U,{bm:J,m:fe,parent:ae,root:ge,type:Oe}=w,ce=Xs(U);qi(w,!1),J&&ko(J),!ce&&(k=ee&&ee.onVnodeBeforeMount)&&Ln(k,ae,U),qi(w,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(Oe,w.parent?w.parent.type:void 0);const ye=w.subTree=Cu(w);x(null,ye,y,V,w,z,$),U.el=ye.el}if(fe&&Qt(fe,z),!ce&&(k=ee&&ee.onVnodeMounted)){const ye=U;Qt(()=>Ln(k,ae,ye),z)}(U.shapeFlag&256||ae&&Xs(ae.vnode)&&ae.vnode.shapeFlag&256)&&w.a&&Qt(w.a,z),w.isMounted=!0,U=y=V=null}};w.scope.on();const Q=w.effect=new Ld(ie);w.scope.off();const b=w.update=Q.run.bind(Q),S=w.job=Q.runIfDirty.bind(Q);S.i=w,S.id=w.uid,Q.scheduler=()=>Bc(S),qi(w,!0),b()},K=(w,U,y)=>{U.component=w;const V=w.vnode.props;w.vnode=U,w.next=null,fg(w,U.props,V,y),_g(w,U.children,y),gi(),xu(w),_i()},Y=(w,U,y,V,z,$,Z,ie,Q=!1)=>{const b=w&&w.children,S=w?w.shapeFlag:0,k=U.children,{patchFlag:j,shapeFlag:ee}=U;if(j>0){if(j&128){pe(b,k,y,V,z,$,Z,ie,Q);return}else if(j&256){le(b,k,y,V,z,$,Z,ie,Q);return}}ee&8?(S&16&&Ae(b,z,$),k!==b&&u(y,k)):S&16?ee&16?pe(b,k,y,V,z,$,Z,ie,Q):Ae(b,z,$,!0):(S&8&&u(y,""),ee&16&&A(k,y,V,z,$,Z,ie,Q))},le=(w,U,y,V,z,$,Z,ie,Q)=>{w=w||Vs,U=U||Vs;const b=w.length,S=U.length,k=Math.min(b,S);let j;for(j=0;j<k;j++){const ee=U[j]=Q?oi(U[j]):Fn(U[j]);x(w[j],ee,y,null,z,$,Z,ie,Q)}b>S?Ae(w,z,$,!0,!1,k):A(U,y,V,z,$,Z,ie,Q,k)},pe=(w,U,y,V,z,$,Z,ie,Q)=>{let b=0;const S=U.length;let k=w.length-1,j=S-1;for(;b<=k&&b<=j;){const ee=w[b],J=U[b]=Q?oi(U[b]):Fn(U[b]);if(rs(ee,J))x(ee,J,y,null,z,$,Z,ie,Q);else break;b++}for(;b<=k&&b<=j;){const ee=w[k],J=U[j]=Q?oi(U[j]):Fn(U[j]);if(rs(ee,J))x(ee,J,y,null,z,$,Z,ie,Q);else break;k--,j--}if(b>k){if(b<=j){const ee=j+1,J=ee<S?U[ee].el:V;for(;b<=j;)x(null,U[b]=Q?oi(U[b]):Fn(U[b]),y,J,z,$,Z,ie,Q),b++}}else if(b>j)for(;b<=k;)Ce(w[b],z,$,!0),b++;else{const ee=b,J=b,fe=new Map;for(b=J;b<=j;b++){const _e=U[b]=Q?oi(U[b]):Fn(U[b]);_e.key!=null&&fe.set(_e.key,b)}let ae,ge=0;const Oe=j-J+1;let ce=!1,ye=0;const Ne=new Array(Oe);for(b=0;b<Oe;b++)Ne[b]=0;for(b=ee;b<=k;b++){const _e=w[b];if(ge>=Oe){Ce(_e,z,$,!0);continue}let Ge;if(_e.key!=null)Ge=fe.get(_e.key);else for(ae=J;ae<=j;ae++)if(Ne[ae-J]===0&&rs(_e,U[ae])){Ge=ae;break}Ge===void 0?Ce(_e,z,$,!0):(Ne[Ge-J]=b+1,Ge>=ye?ye=Ge:ce=!0,x(_e,U[Ge],y,null,z,$,Z,ie,Q),ge++)}const ze=ce?Mg(Ne):Vs;for(ae=ze.length-1,b=Oe-1;b>=0;b--){const _e=J+b,Ge=U[_e],Xe=U[_e+1],ct=_e+1<S?Xe.el||Af(Xe):V;Ne[b]===0?x(null,Ge,y,ct,z,$,Z,ie,Q):ce&&(ae<0||b!==ze[ae]?xe(Ge,y,ct,2):ae--)}}},xe=(w,U,y,V,z=null)=>{const{el:$,type:Z,transition:ie,children:Q,shapeFlag:b}=w;if(b&6){xe(w.component.subTree,U,y,V);return}if(b&128){w.suspense.move(U,y,V);return}if(b&64){Z.move(w,U,y,Re);return}if(Z===yt){i($,U,y);for(let k=0;k<Q.length;k++)xe(Q[k],U,y,V);i(w.anchor,U,y);return}if(Z===Bo){E(w,U,y);return}if(V!==2&&b&1&&ie)if(V===0)ie.beforeEnter($),i($,U,y),Qt(()=>ie.enter($),z);else{const{leave:k,delayLeave:j,afterLeave:ee}=ie,J=()=>{w.ctx.isUnmounted?s($):i($,U,y)},fe=()=>{$._isLeaving&&$[In](!0),k($,()=>{J(),ee&&ee()})};j?j($,J,fe):fe()}else i($,U,y)},Ce=(w,U,y,V=!1,z=!1)=>{const{type:$,props:Z,ref:ie,children:Q,dynamicChildren:b,shapeFlag:S,patchFlag:k,dirs:j,cacheIndex:ee}=w;if(k===-2&&(z=!1),ie!=null&&(gi(),Tr(ie,null,y,w,!0),_i()),ee!=null&&(U.renderCache[ee]=void 0),S&256){U.ctx.deactivate(w);return}const J=S&1&&j,fe=!Xs(w);let ae;if(fe&&(ae=Z&&Z.onVnodeBeforeUnmount)&&Ln(ae,U,w),S&6)he(w.component,y,V);else{if(S&128){w.suspense.unmount(y,V);return}J&&$i(w,null,U,"beforeUnmount"),S&64?w.type.remove(w,U,y,Re,V):b&&!b.hasOnce&&($!==yt||k>0&&k&64)?Ae(b,U,y,!1,!0):($===yt&&k&384||!z&&S&16)&&Ae(Q,U,y),V&&Ve(w)}(fe&&(ae=Z&&Z.onVnodeUnmounted)||J)&&Qt(()=>{ae&&Ln(ae,U,w),J&&$i(w,null,U,"unmounted")},y)},Ve=w=>{const{type:U,el:y,anchor:V,transition:z}=w;if(U===yt){re(y,V);return}if(U===Bo){M(w);return}const $=()=>{s(y),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(w.shapeFlag&1&&z&&!z.persisted){const{leave:Z,delayLeave:ie}=z,Q=()=>Z(y,$);ie?ie(w.el,$,Q):Q()}else $()},re=(w,U)=>{let y;for(;w!==U;)y=f(w),s(w),w=y;s(U)},he=(w,U,y)=>{const{bum:V,scope:z,job:$,subTree:Z,um:ie,m:Q,a:b}=w;Lu(Q),Lu(b),V&&ko(V),z.stop(),$&&($.flags|=8,Ce(Z,w,U,y)),ie&&Qt(ie,U),Qt(()=>{w.isUnmounted=!0},U)},Ae=(w,U,y,V=!1,z=!1,$=0)=>{for(let Z=$;Z<w.length;Z++)Ce(w[Z],U,y,V,z)},de=w=>{if(w.shapeFlag&6)return de(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const U=f(w.anchor||w.el),y=U&&U[Fm];return y?f(y):U};let Pe=!1;const Be=(w,U,y)=>{let V;w==null?U._vnode&&(Ce(U._vnode,null,null,!0),V=U._vnode.component):x(U._vnode||null,w,U,null,null,null,y),U._vnode=w,Pe||(Pe=!0,xu(V),Kd(),Pe=!1)},Re={p:x,um:Ce,m:xe,r:Ve,mt:F,mc:A,pc:Y,pbc:_,n:de,o:n};return{render:Be,hydrate:void 0,createApp:sg(Be)}}function Oa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function wf(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=oi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&wf(o,a)),a.type===Ma&&(a.patchFlag===-1&&(a=s[r]=oi(a)),a.el=o.el),a.type===Vt&&!a.el&&(a.el=o.el)}}function Mg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Tf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tf(e)}function Lu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Af(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Af(e.subTree):null}const Cf=n=>n.__isSuspense;function Sg(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Pm(n)}const yt=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Cr=[];let an=null;function Me(n=!1){Cr.push(an=n?null:[])}function bg(){Cr.pop(),an=Cr[Cr.length-1]||null}let kr=1;function ta(n,e=!1){kr+=n,n<0&&an&&e&&(an.hasOnce=!0)}function Rf(n){return n.dynamicChildren=kr>0?an||Vs:null,bg(),kr>0&&an&&an.push(n),n}function be(n,e,t,i,s,r){return Rf(T(n,e,t,i,s,r,!0))}function Ul(n,e,t,i,s){return Rf(Qe(n,e,t,i,s,!0))}function Br(n){return n?n.__v_isVNode===!0:!1}function rs(n,e){return n.type===e.type&&n.key===e.key}const Pf=({key:n})=>n??null,zo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||wt(n)||$e(n)?{i:Gt,r:n,k:e,f:!!t}:n:null);function T(n,e=null,t=null,i=0,s=null,r=n===yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pf(e),ref:e&&zo(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Gt};return a?(Vc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),kr>0&&!o&&an&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&an.push(l),l}const Qe=Eg;function Eg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Km)&&(n=Vt),Br(n)){const a=zi(n,e,!0);return t&&Vc(a,t),kr>0&&!r&&an&&(a.shapeFlag&6?an[an.indexOf(n)]=a:an.push(a)),a.patchFlag=-2,a}if(Ug(n)&&(n=n.__vccOpts),e){e=wg(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=pt(a)),lt(l)&&(ma(l)&&!ke(l)&&(l=Lt({},l)),e.style=fa(l))}const o=Tt(n)?1:Cf(n)?128:tf(n)?64:lt(n)?4:$e(n)?2:0;return T(n,e,t,i,s,o,r,!0)}function wg(n){return n?ma(n)||xf(n)?Lt({},n):n:null}function zi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Tg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pf(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(zo(e)):[r,zo(e)]:zo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==yt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zi(n.ssContent),ssFallback:n.ssFallback&&zi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Or(u,l.clone(u)),u}function Oi(n=" ",e=0){return Qe(Ma,null,n,e)}function Un(n,e){const t=Qe(Bo,null,n);return t.staticCount=e,t}function Ct(n="",e=!1){return e?(Me(),Ul(Vt,null,n)):Qe(Vt,null,n)}function Fn(n){return n==null||typeof n=="boolean"?Qe(Vt):ke(n)?Qe(yt,null,n.slice()):Br(n)?oi(n):Qe(Ma,null,String(n))}function oi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:zi(n)}function Vc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Vc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!xf(e)?e._ctx=Gt:s===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),i&64?(t=16,e=[Oi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Tg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pt([e.class,i.class]));else if(s==="style")e.style=fa([e.style,i.style]);else if(ca(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Ln(n,e,t,i=null){Cn(n,e,7,[t,i])}const Ag=pf();let Cg=0;function Rg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Ag,r={uid:Cg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(i,s),emitsOptions:mf(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=og.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const Gc=()=>Yt||Gt;let na,Nl;{const n=da(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};na=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),Nl=e("__VUE_SSR_SETTERS__",t=>zr=t)}const Zr=n=>{const e=Yt;return na(n),n.scope.on(),()=>{n.scope.off(),na(e)}},Du=()=>{Yt&&Yt.scope.off(),na(null)};function Lf(n){return n.vnode.shapeFlag&4}let zr=!1;function Pg(n,e=!1,t=!1){e&&Nl(e);const{props:i,children:s}=n.vnode,r=Lf(n);dg(n,i,r,e),gg(n,s,t||e);const o=r?Lg(n,e):void 0;return e&&Nl(!1),o}function Lg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zm);const{setup:i}=t;if(i){gi();const s=n.setupContext=i.length>1?Ig(n):null,r=Zr(n),o=Kr(i,n,0,[n.props,s]),a=yd(o);if(_i(),r(),(a||n.sp)&&!Xs(n)&&lf(n),a){if(o.then(Du,Du),e)return o.then(l=>{Iu(n,l)}).catch(l=>{ga(l,n,0)});n.asyncDep=o}else Iu(n,o)}else Df(n)}function Iu(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=$d(e)),Df(n)}function Df(n,e,t){const i=n.type;n.render||(n.render=i.render||Hn);{const s=Zr(n);gi();try{Jm(n)}finally{_i(),s()}}}const Dg={get(n,e){return Ht(n,"get",""),n[e]}};function Ig(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Dg),slots:n.slots,emit:n.emit,expose:e}}function Sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($d(kc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ar)return Ar[t](n)},has(e,t){return t in e||t in Ar}})):n.proxy}function Ug(n){return $e(n)&&"__vccOpts"in n}const ln=(n,e)=>wm(n,e,zr);function Ng(n,e,t){try{ta(-1);const i=arguments.length;return i===2?lt(e)&&!ke(e)?Br(e)?Qe(n,null,[e]):Qe(n,e):Qe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Br(t)&&(t=[t]),Qe(n,e,t))}finally{ta(1)}}const Fg="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const Uu=typeof window<"u"&&window.trustedTypes;if(Uu)try{Fl=Uu.createPolicy("vue",{createHTML:n=>n})}catch{}const If=Fl?n=>Fl.createHTML(n):n=>n,Og="http://www.w3.org/2000/svg",kg="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,Nu=ri&&ri.createElement("template"),Bg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ri.createElementNS(Og,n):e==="mathml"?ri.createElementNS(kg,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Nu.innerHTML=If(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Si="transition",hr="animation",Hr=Symbol("_vtc"),Uf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zg=Lt({},nf,Uf),Hg=n=>(n.displayName="Transition",n.props=zg,n),Vg=Hg((n,{slots:e})=>Ng(Bm,Gg(n),e)),Yi=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},Fu=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function Gg(n){const e={};for(const O in n)O in Uf||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=Wg(s),x=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:E,onLeave:M,onLeaveCancelled:N,onBeforeAppear:D=p,onAppear:I=R,onAppearCancelled:A=E}=e,v=(O,L,F,G)=>{O._enterCancelled=G,ji(O,L?u:a),ji(O,L?c:o),F&&F()},_=(O,L)=>{O._isLeaving=!1,ji(O,h),ji(O,d),ji(O,f),L&&L()},P=O=>(L,F)=>{const G=O?I:R,B=()=>v(L,O,F);Yi(G,[L,B]),Ou(()=>{ji(L,O?l:r),Zn(L,O?u:a),Fu(G)||ku(L,i,x,B)})};return Lt(e,{onBeforeEnter(O){Yi(p,[O]),Zn(O,r),Zn(O,o)},onBeforeAppear(O){Yi(D,[O]),Zn(O,l),Zn(O,c)},onEnter:P(!1),onAppear:P(!0),onLeave(O,L){O._isLeaving=!0;const F=()=>_(O,L);Zn(O,h),O._enterCancelled?(Zn(O,f),Hu(O)):(Hu(O),Zn(O,f)),Ou(()=>{O._isLeaving&&(ji(O,h),Zn(O,d),Fu(M)||ku(O,i,m,F))}),Yi(M,[O,F])},onEnterCancelled(O){v(O,!1,void 0,!0),Yi(E,[O])},onAppearCancelled(O){v(O,!0,void 0,!0),Yi(A,[O])},onLeaveCancelled(O){_(O),Yi(N,[O])}})}function Wg(n){if(n==null)return null;if(lt(n))return[ka(n.enter),ka(n.leave)];{const e=ka(n);return[e,e]}}function ka(n){return Gp(n)}function Zn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Hr]||(n[Hr]=new Set)).add(e)}function ji(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Hr];t&&(t.delete(e),t.size||(n[Hr]=void 0))}function Ou(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Xg=0;function ku(n,e,t,i){const s=n._endId=++Xg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=$g(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function $g(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Si}Delay`),r=i(`${Si}Duration`),o=Bu(s,r),a=i(`${hr}Delay`),l=i(`${hr}Duration`),c=Bu(a,l);let u=null,h=0,f=0;e===Si?o>0&&(u=Si,h=o,f=r.length):e===hr?c>0&&(u=hr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Si:hr:null,f=u?u===Si?r.length:l.length:0);const d=u===Si&&/\b(?:transform|all)(?:,|$)/.test(i(`${Si}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Bu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>zu(t)+zu(n[i])))}function zu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Hu(n){return(n?n.ownerDocument:document).body.offsetHeight}function qg(n,e,t){const i=n[Hr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Vu=Symbol("_vod"),Yg=Symbol("_vsh"),jg=Symbol(""),Kg=/(?:^|;)\s*display\s*:/;function Zg(n,e,t){const i=n.style,s=Tt(t);let r=!1;if(t&&!s){if(e)if(Tt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ho(i,a,"")}else for(const o in e)t[o]==null&&Ho(i,o,"");for(const o in t)o==="display"&&(r=!0),Ho(i,o,t[o])}else if(s){if(e!==t){const o=i[jg];o&&(t+=";"+o),i.cssText=t,r=Kg.test(t)}}else e&&n.removeAttribute("style");Vu in n&&(n[Vu]=r?i.display:"",n[Yg]&&(i.display="none"))}const Gu=/\s*!important$/;function Ho(n,e,t){if(ke(t))t.forEach(i=>Ho(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Jg(n,e);Gu.test(t)?n.setProperty(ps(i),t.replace(Gu,""),"important"):n[i]=t}}const Wu=["Webkit","Moz","ms"],Ba={};function Jg(n,e){const t=Ba[e];if(t)return t;let i=bn(e);if(i!=="filter"&&i in n)return Ba[e]=i;i=bd(i);for(let s=0;s<Wu.length;s++){const r=Wu[s]+i;if(r in n)return Ba[e]=r}return e}const Xu="http://www.w3.org/1999/xlink";function $u(n,e,t,i,s,r=jp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xu,e.slice(6,e.length)):n.setAttributeNS(Xu,e,t):t==null||r&&!wd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Tn(t)?String(t):t)}function qu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?If(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=wd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function ks(n,e,t,i){n.addEventListener(e,t,i)}function Qg(n,e,t,i){n.removeEventListener(e,t,i)}const Yu=Symbol("_vei");function e0(n,e,t,i,s=null){const r=n[Yu]||(n[Yu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=t0(e);if(i){const c=r[e]=s0(i,s);ks(n,a,c,l)}else o&&(Qg(n,a,o,l),r[e]=void 0)}}const ju=/(?:Once|Passive|Capture)$/;function t0(n){let e;if(ju.test(n)){e={};let i;for(;i=n.match(ju);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ps(n.slice(2)),e]}let za=0;const n0=Promise.resolve(),i0=()=>za||(n0.then(()=>za=0),za=Date.now());function s0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Cn(r0(i,t.value),e,5,[i])};return t.value=n,t.attached=i0(),t}function r0(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ku=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,o0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?qg(n,i,o):e==="style"?Zg(n,t,i):ca(e)?Cc(e)||e0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a0(n,e,i,o))?(qu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$u(n,e,i,o,r,e!=="value")):n._isVueCE&&(l0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Tt(i)))?qu(n,bn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),$u(n,e,i,o))};function a0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ku(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ku(e)&&Tt(t)?!1:e in n}function l0(n,e){const t=n._def.props;if(!t)return!1;const i=bn(e);return Array.isArray(t)?t.some(s=>bn(s)===i):Object.keys(t).some(s=>bn(s)===i)}const Zu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>ko(e,t):e};function c0(n){n.target.composing=!0}function Ju(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ha=Symbol("_assign");function Qu(n,e,t){return e&&(n=n.trim()),t&&(n=Pc(n)),n}const Ni={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ha]=Zu(s);const r=i||s.props&&s.props.type==="number";ks(n,e?"change":"input",o=>{o.target.composing||n[Ha](Qu(n.value,t,r))}),(t||r)&&ks(n,"change",()=>{n.value=Qu(n.value,t,r)}),e||(ks(n,"compositionstart",c0),ks(n,"compositionend",Ju),ks(n,"change",Ju))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ha]=Zu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Pc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},u0=["ctrl","shift","alt","meta"],h0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>u0.some(t=>n[`${t}Key`]&&!e.includes(t))},Vo=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=h0[e[o]];if(a&&a(s,e))return}return n(s,...r)})},d0=Lt({patchProp:o0},Bg);let eh;function f0(){return eh||(eh=vg(d0))}const p0=(...n)=>{const e=f0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=g0(i);if(!s)return;const r=e._component;!$e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,m0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function m0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function g0(n){return Tt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Nf;const ba=n=>Nf=n,Ff=Symbol();function Ol(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Rr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Rr||(Rr={}));function _0(){const n=Rd(!0),e=n.run(()=>Fe({}));let t=[],i=[];const s=kc({install(r){ba(s),s._a=r,r.provide(Ff,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Of=()=>{};function th(n,e,t,i=Of){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Pd()&&Zp(s),s}function ys(n,...e){n.slice().forEach(t=>{t(...e)})}const v0=n=>n(),nh=Symbol(),Va=Symbol();function kl(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Ol(s)&&Ol(i)&&n.hasOwnProperty(t)&&!wt(i)&&!pi(i)?n[t]=kl(s,i):n[t]=i}return n}const x0=Symbol();function y0(n){return!Ol(n)||!n.hasOwnProperty(x0)}const{assign:Ri}=Object;function M0(n){return!!(wt(n)&&n.effect)}function S0(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=Mm(t.state.value[n]);return Ri(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=kc(ln(()=>{ba(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=kf(n,c,e,t,i,!0),l}function kf(n,e,t={},i,s,r){let o;const a=Ri({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let x;function m(A){let v;c=u=!1,typeof A=="function"?(A(i.state.value[n]),v={type:Rr.patchFunction,storeId:n,events:d}):(kl(i.state.value[n],A),v={type:Rr.patchObject,payload:A,storeId:n,events:d});const _=x=Symbol();Yd().then(()=>{x===_&&(c=!0)}),u=!0,ys(h,v,i.state.value[n])}const p=r?function(){const{state:v}=t,_=v?v():{};this.$patch(P=>{Ri(P,_)})}:Of;function R(){o.stop(),h=[],f=[],i._s.delete(n)}const E=(A,v="")=>{if(nh in A)return A[Va]=v,A;const _=function(){ba(i);const P=Array.from(arguments),O=[],L=[];function F(K){O.push(K)}function G(K){L.push(K)}ys(f,{args:P,name:_[Va],store:N,after:F,onError:G});let B;try{B=A.apply(this&&this.$id===n?this:N,P)}catch(K){throw ys(L,K),K}return B instanceof Promise?B.then(K=>(ys(O,K),K)).catch(K=>(ys(L,K),Promise.reject(K))):(ys(O,B),B)};return _[nh]=!0,_[Va]=v,_},M={_p:i,$id:n,$onAction:th.bind(null,f),$patch:m,$reset:p,$subscribe(A,v={}){const _=th(h,A,v.detached,()=>P()),P=o.run(()=>zn(()=>i.state.value[n],O=>{(v.flush==="sync"?u:c)&&A({storeId:n,type:Rr.direct,events:d},O)},Ri({},l,v)));return _},$dispose:R},N=jr(M);i._s.set(n,N);const I=(i._a&&i._a.runWithContext||v0)(()=>i._e.run(()=>(o=Rd()).run(()=>e({action:E}))));for(const A in I){const v=I[A];if(wt(v)&&!M0(v)||pi(v))r||(g&&y0(v)&&(wt(v)?v.value=g[A]:kl(v,g[A])),i.state.value[n][A]=v);else if(typeof v=="function"){const _=E(v,A);I[A]=_,a.actions[A]=v}}return Ri(N,I),Ri(et(N),I),Object.defineProperty(N,"$state",{get:()=>i.state.value[n],set:A=>{m(v=>{Ri(v,A)})}}),i._p.forEach(A=>{Ri(N,o.run(()=>A({store:N,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(N.$state,g),c=!0,u=!0,N}/*! #__NO_SIDE_EFFECTS__ */function b0(n,e,t){let i,s;const r=typeof e=="function";i=n,s=r?t:e;function o(a,l){const c=Dm();return a=a||(c?wr(Ff,null):null),a&&ba(a),a=Nf,a._s.has(i)||(r?kf(i,e,s,a):S0(i,s,a)),a._s.get(i)}return o.$id=i,o}const E0={class:"top-toolbar"},w0={class:"toolbar-controls"},T0={class:"toolbar-group"},A0={class:"zoom-display"},C0={class:"zoom-value"},R0={class:"toolbar-group"},P0={class:"toolbar-group"},L0={class:"toolbar-group"},D0=["title"],I0={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U0={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N0=Rn({__name:"TopToolbar",props:{zoom:{},viewPreset:{},autoRotate:{type:Boolean},showGrid:{type:Boolean},isDark:{type:Boolean}},emits:["zoom-in","zoom-out","zoom-fit","view-preset","toggle-auto-rotate","toggle-grid","toggle-theme"],setup(n){return(e,t)=>(Me(),be("div",E0,[t[25]||(t[25]=Un('<div class="logo-section" data-v-fdbab8bf><div class="logo-icon" data-v-fdbab8bf><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M3 3H21V21H3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M3 9H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M9 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M15 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3 15H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-fdbab8bf></path></svg></div><h1 class="title" data-v-fdbab8bf>Bungkus Indonesia</h1></div>',1)),T("div",w0,[t[21]||(t[21]=Un('<div class="toolbar-group" data-v-fdbab8bf><button class="toolbar-btn" disabled="true" title="Undo (Ctrl+Z)" data-v-fdbab8bf><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M4 6L2 8L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M2 8H10C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg></button><button class="toolbar-btn" disabled="true" title="Redo (Ctrl+Y)" data-v-fdbab8bf><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><path d="M12 6L14 8L12 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-fdbab8bf></path><path d="M14 8H6C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg></button></div><div class="toolbar-divider" data-v-fdbab8bf></div>',2)),T("div",T0,[T("button",{class:"toolbar-btn",onClick:t[0]||(t[0]=i=>e.$emit("zoom-out")),title:"Zoom Out (-)"},[...t[10]||(t[10]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),T("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"})],-1)])]),T("div",A0,[T("span",C0,He(n.zoom)+"%",1)]),T("button",{class:"toolbar-btn",onClick:t[1]||(t[1]=i=>e.$emit("zoom-in")),title:"Zoom In (+)"},[...t[11]||(t[11]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),T("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),T("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor","stroke-width":"1.5"})],-1)])]),T("button",{class:"toolbar-btn",onClick:t[2]||(t[2]=i=>e.$emit("zoom-fit")),title:"Fit to Screen (Space)"},[...t[12]||(t[12]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M5 5L3 3M5 11L3 13M11 5L13 3M11 11L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"}),T("rect",{x:"4",y:"4",width:"8",height:"8",rx:"1",stroke:"currentColor","stroke-width":"1.5"})],-1)])])]),t[22]||(t[22]=T("div",{class:"toolbar-divider"},null,-1)),T("div",R0,[T("button",{class:pt(["toolbar-btn",{active:n.viewPreset==="front"}]),onClick:t[3]||(t[3]=i=>e.$emit("view-preset","front")),title:"Front View (1)"},[...t[13]||(t[13]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("rect",{x:"3",y:"3",width:"10",height:"10",rx:"1",stroke:"currentColor","stroke-width":"1.5"}),T("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5"}),T("path",{d:"M3 8H13",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2),T("button",{class:pt(["toolbar-btn",{active:n.viewPreset==="back"}]),onClick:t[4]||(t[4]=i=>e.$emit("view-preset","back")),title:"Back View (2)"},[...t[14]||(t[14]=[Un('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></rect><path d="M8 3V13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><circle cx="8" cy="8" r="1" fill="currentColor" data-v-fdbab8bf></circle></svg>',1)])],2),T("button",{class:pt(["toolbar-btn",{active:n.viewPreset==="top"}]),onClick:t[5]||(t[5]=i=>e.$emit("view-preset","top")),title:"Top View (3)"},[...t[15]||(t[15]=[Un('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></rect><path d="M8 3V13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M3 8H13" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M5 11L11 5" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path></svg>',1)])],2),T("button",{class:pt(["toolbar-btn",{active:n.viewPreset==="isometric"}]),onClick:t[6]||(t[6]=i=>e.$emit("view-preset","isometric")),title:"Isometric View (4)"},[...t[16]||(t[16]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org2000/svg"},[T("path",{d:"M3 13L8 3L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),T("path",{d:"M3 13H13",stroke:"currentColor","stroke-width":"1.5"}),T("path",{d:"M8 3V13",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2)]),t[23]||(t[23]=T("div",{class:"toolbar-divider"},null,-1)),T("div",P0,[T("button",{class:pt(["toolbar-btn",{active:n.autoRotate}]),onClick:t[7]||(t[7]=i=>e.$emit("toggle-auto-rotate")),title:"Auto Rotate (R)"},[...t[17]||(t[17]=[Un('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-fdbab8bf><circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></circle><path d="M8 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3 8H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path></svg>',1)])],2),T("button",{class:pt(["toolbar-btn",{active:n.showGrid}]),onClick:t[8]||(t[8]=i=>e.$emit("toggle-grid")),title:"Toggle Grid (G)"},[...t[18]||(t[18]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",stroke:"currentColor","stroke-width":"1.5"}),T("path",{d:"M8 2V14",stroke:"currentColor","stroke-width":"1.5"}),T("path",{d:"M2 8H14",stroke:"currentColor","stroke-width":"1.5"})],-1)])],2)]),t[24]||(t[24]=T("div",{class:"toolbar-divider"},null,-1)),T("div",L0,[T("button",{class:"toolbar-btn",onClick:t[9]||(t[9]=i=>e.$emit("toggle-theme")),title:n.isDark?"Switch to Light Theme":"Switch to Dark Theme"},[n.isDark?(Me(),be("svg",I0,[...t[19]||(t[19]=[Un('<circle cx="8" cy="8" r="4" fill="currentColor" data-v-fdbab8bf></circle><path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path>',9)])])):(Me(),be("svg",U0,[...t[20]||(t[20]=[Un('<path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-width="1.5" data-v-fdbab8bf></path><path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path><path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-fdbab8bf></path>',9)])]))],8,D0)])])]))}}),$n=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},F0=$n(N0,[["__scopeId","data-v-fdbab8bf"]]),O0={class:"panel-header"},k0={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},B0={key:0,d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},z0={key:1,d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},H0={key:0,class:"panel-content"},V0={class:"category-tabs"},G0=["onClick"],W0={class:"search-section"},X0={class:"search-input-wrapper"},$0={class:"template-grid"},q0=["onClick"],Y0={class:"template-thumbnail"},j0={key:0,class:"premium-badge"},K0={class:"template-info"},Z0={class:"template-name"},J0={class:"template-dimensions"},Q0={class:"template-tags"},e_={key:0,class:"template-tag-more"},t_={key:0,class:"empty-state"},n_={key:1,class:"collapsed-content"},i_=Rn({__name:"LeftPanel",props:{selectedTemplate:{}},emits:["select-template"],setup(n,{emit:e}){const t=e,i=Fe(!1),s=Fe("all"),r=Fe(""),o=[{id:"all",name:"All"},{id:"boxes",name:"Boxes"},{id:"bottles",name:"Bottles"},{id:"bags",name:"Bags"},{id:"tubes",name:"Tubes"},{id:"custom",name:"Custom"}],a=[{id:"1",name:"Standard Box",dimensions:"10×8×6 cm",category:"boxes",tags:["basic","standard"],isPremium:!1},{id:"2",name:"Premium Gift Box",dimensions:"15×12×8 cm",category:"boxes",tags:["gift","luxury"],isPremium:!0},{id:"3",name:"Wine Bottle",dimensions:"30×9×9 cm",category:"bottles",tags:["beverage","glass"],isPremium:!1},{id:"4",name:"Perfume Bottle",dimensions:"12×4×4 cm",category:"bottles",tags:["cosmetic","luxury"],isPremium:!0},{id:"5",name:"Paper Bag",dimensions:"25×15×8 cm",category:"bags",tags:["eco","retail"],isPremium:!1},{id:"6",name:"Cosmetic Tube",dimensions:"15×5×5 cm",category:"tubes",tags:["cosmetic","plastic"],isPremium:!1},{id:"7",name:"Custom Box A",dimensions:"20×15×10 cm",category:"custom",tags:["custom","large"],isPremium:!0},{id:"8",name:"Custom Box B",dimensions:"8×8×8 cm",category:"custom",tags:["custom","cube"],isPremium:!1}],l=ln(()=>{let f=a;if(s.value!=="all"&&(f=f.filter(d=>d.category===s.value)),r.value.trim()){const d=r.value.toLowerCase();f=f.filter(g=>g.name.toLowerCase().includes(d)||g.tags.some(x=>x.toLowerCase().includes(d)))}return f}),c=()=>{i.value=!i.value},u=f=>{t("select-template",f)},h=()=>{};return(f,d)=>(Me(),be("div",{class:pt(["left-panel",{collapsed:i.value}])},[T("div",O0,[T("button",{class:"collapse-btn",onClick:c},[(Me(),be("svg",k0,[i.value?(Me(),be("path",B0)):(Me(),be("path",z0))]))]),d[1]||(d[1]=T("h3",{class:"panel-title"},"Template Gallery",-1))]),i.value?(Me(),be("div",n_,[T("button",{class:"expand-btn",onClick:c,title:"Expand panel"},[...d[6]||(d[6]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),d[7]||(d[7]=T("div",{class:"collapsed-label"},"Templates",-1))])):(Me(),be("div",H0,[T("div",V0,[(Me(),be(yt,null,Vn(o,g=>T("button",{key:g.id,class:pt(["category-tab",{active:s.value===g.id}]),onClick:x=>s.value=g.id},He(g.name),11,G0)),64))]),T("div",W0,[T("div",X0,[d[2]||(d[2]=T("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"search-icon"},[T("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor","stroke-width":"1.5"}),T("path",{d:"M10 10L13 13",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})],-1)),Ui(T("input",{"onUpdate:modelValue":d[0]||(d[0]=g=>r.value=g),type:"text",placeholder:"Search templates...",class:"search-input",onInput:h},null,544),[[Ni,r.value]])])]),T("div",$0,[(Me(!0),be(yt,null,Vn(l.value,g=>{var x;return Me(),be("div",{key:g.id,class:pt(["template-item",{active:((x=n.selectedTemplate)==null?void 0:x.id)===g.id}]),onClick:m=>u(g)},[T("div",Y0,[d[4]||(d[4]=Un('<div class="template-preview" data-v-0a985f77><div class="box-preview" data-v-0a985f77><div class="box-front" data-v-0a985f77></div><div class="box-top" data-v-0a985f77></div><div class="box-side" data-v-0a985f77></div></div></div>',1)),g.isPremium?(Me(),be("div",j0,[...d[3]||(d[3]=[T("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z",fill:"currentColor",stroke:"currentColor","stroke-width":"0.5"})],-1)])])):Ct("",!0)]),T("div",K0,[T("h4",Z0,He(g.name),1),T("p",J0,He(g.dimensions),1),T("div",Q0,[(Me(!0),be(yt,null,Vn(g.tags.slice(0,2),m=>(Me(),be("span",{key:m,class:"template-tag"},He(m),1))),128)),g.tags.length>2?(Me(),be("span",e_," +"+He(g.tags.length-2),1)):Ct("",!0)])])],10,q0)}),128))]),l.value.length===0?(Me(),be("div",t_,[...d[5]||(d[5]=[Un('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="empty-icon" data-v-0a985f77><rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="2" data-v-0a985f77></rect><path d="M16 16H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a985f77></path><path d="M16 24H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a985f77></path><path d="M16 32H24" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a985f77></path></svg><p class="empty-text" data-v-0a985f77>No templates found</p><p class="empty-subtext" data-v-0a985f77>Try a different search term</p>',3)])])):Ct("",!0)]))],2))}}),s_=$n(i_,[["__scopeId","data-v-0a985f77"]]),r_={class:"design-uploader"},o_={class:"upload-text"},a_={class:"text-lg font-semibold text-gray-800"},l_={class:"text-sm text-gray-500 mt-1"},c_={key:0,class:"error-message"},u_={class:"flex items-center gap-2"},h_={class:"text-sm font-medium text-red-700"},d_={key:1,class:"image-preview"},f_={class:"preview-image-container"},p_=["src","alt"],m_={key:0,class:"loading-overlay"},g_={key:1,class:"image-info"},__={class:"info-grid"},v_={class:"info-item"},x_={class:"info-value"},y_={key:0,class:"info-item"},M_={class:"info-value"},S_={class:"info-item"},b_={class:"info-value"},E_={key:2,class:"texture-fit-options"},w_={class:"fit-buttons"},T_=["onClick"],A_={class:"fit-icon"},C_={class:"fit-label"},R_={key:3,class:"apply-buttons"},P_=["disabled"],ih=10*1024*1024,L_=Rn({__name:"DesignUploader",props:{selectedFace:{default:null}},emits:["upload","apply-to-face","apply-to-all","clear"],setup(n,{emit:e}){const t=n,i=e,s=Fe(null),r=Fe(null),o=Fe(!1),a=Fe(null),l=Fe(null),c=Fe(null),u=Fe(!1),h=Fe(null),f=Fe("cover"),d=["image/png","image/jpeg","image/jpg","image/svg+xml","image/webp"],g=[{value:"stretch",label:"Stretch",icon:"↔️"},{value:"contain",label:"Contain",icon:"📐"},{value:"cover",label:"Cover",icon:"🖼️"}],x=L=>L.size>ih?(c.value=`File too large. Maximum size is ${v(ih)}.`,!1):d.includes(L.type)?(c.value=null,!0):(c.value="Invalid file type. Please upload PNG, JPG, JPEG, SVG, or WebP.",!1),m=L=>{x(L)&&(a.value=L,l.value&&URL.revokeObjectURL(l.value),l.value=URL.createObjectURL(L),h.value=null,u.value=!0,i("upload",L))},p=L=>{L.preventDefault(),o.value=!0},R=L=>{L.preventDefault(),o.value=!1},E=L=>{var B;L.preventDefault(),o.value=!1;const F=(B=L.dataTransfer)==null?void 0:B.files;if(!(F!=null&&F.length))return;const G=F[0];m(G)},M=L=>{var B;const F=L.target,G=(B=F.files)==null?void 0:B[0];G&&(m(G),F.value="")},N=()=>{var L;(L=r.value)==null||L.click()},D=()=>{l.value&&(URL.revokeObjectURL(l.value),l.value=null),a.value=null,h.value=null,c.value=null,i("clear")},I=L=>{const F=L.target;u.value=!1,h.value={dimensions:{width:F.naturalWidth,height:F.naturalHeight}}},A=()=>{u.value=!1,c.value="Failed to load image preview."},v=L=>{if(L===0)return"0 Bytes";const F=1024,G=["Bytes","KB","MB","GB"],B=Math.floor(Math.log(L)/Math.log(F));return parseFloat((L/Math.pow(F,B)).toFixed(2))+" "+G[B]},_=L=>{f.value=L},P=()=>{!a.value||!t.selectedFace||i("apply-to-face",{face:t.selectedFace,file:a.value,fit:f.value})},O=()=>{a.value&&i("apply-to-all",{file:a.value,fit:f.value})};return ir(()=>{l.value&&URL.revokeObjectURL(l.value)}),(L,F)=>{var G,B,K;return Me(),be("div",r_,[T("div",{ref_key:"dropZoneRef",ref:s,class:pt(["drop-zone",{"drag-over":o.value,"has-file":a.value}]),onDragover:Vo(p,["prevent"]),onDragleave:Vo(R,["prevent"]),onDrop:Vo(E,["prevent"])},[F[1]||(F[1]=T("div",{class:"upload-icon"},[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})])],-1)),T("div",o_,[T("p",a_,He(a.value?a.value.name:"Drag & drop your design here"),1),T("p",l_,He(a.value?"Click to change or drop another file":"or click to browse"),1),F[0]||(F[0]=T("p",{class:"text-xs text-gray-400 mt-2"}," Supports: PNG, JPG, JPEG, SVG, WebP • Max 10MB ",-1))]),T("input",{ref_key:"fileInputRef",ref:r,type:"file",class:"hidden",accept:".png,.jpg,.jpeg,.svg,.webp",onChange:M},null,544),T("button",{type:"button",class:"browse-btn",onClick:N}," Browse Files ")],34),c.value?(Me(),be("div",c_,[T("div",u_,[F[2]||(F[2]=T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-red-500",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1)),T("span",h_,He(c.value),1)])])):Ct("",!0),l.value?(Me(),be("div",d_,[T("div",{class:"preview-header"},[F[4]||(F[4]=T("h3",{class:"text-sm font-medium text-gray-700"},"Preview",-1)),T("button",{type:"button",class:"clear-btn",onClick:D},[...F[3]||(F[3]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])])]),T("div",f_,[T("img",{src:l.value,alt:((G=a.value)==null?void 0:G.name)||"Preview",class:"preview-image",onLoad:I,onError:A},null,40,p_),u.value?(Me(),be("div",m_,[...F[5]||(F[5]=[T("div",{class:"loading-spinner"},null,-1),T("p",{class:"loading-text"},"Loading preview...",-1)])])):Ct("",!0),h.value?(Me(),be("div",g_,[T("div",__,[T("div",v_,[F[6]||(F[6]=T("span",{class:"info-label"},"Size:",-1)),T("span",x_,He(v(((B=a.value)==null?void 0:B.size)||0)),1)]),h.value.dimensions?(Me(),be("div",y_,[F[7]||(F[7]=T("span",{class:"info-label"},"Dimensions:",-1)),T("span",M_,He(h.value.dimensions.width)+" × "+He(h.value.dimensions.height),1)])):Ct("",!0),T("div",S_,[F[8]||(F[8]=T("span",{class:"info-label"},"Type:",-1)),T("span",b_,He(((K=a.value)==null?void 0:K.type)||"Unknown"),1)])])])):Ct("",!0)])])):Ct("",!0),l.value?(Me(),be("div",E_,[F[9]||(F[9]=T("h3",{class:"text-sm font-medium text-gray-700 mb-3"},"Texture Fit",-1)),T("div",w_,[(Me(),be(yt,null,Vn(g,Y=>T("button",{key:Y.value,type:"button",class:pt(["fit-button",{active:f.value===Y.value}]),onClick:le=>_(Y.value)},[T("span",A_,He(Y.icon),1),T("span",C_,He(Y.label),1)],10,T_)),64))])])):Ct("",!0),l.value?(Me(),be("div",R_,[T("button",{type:"button",class:"apply-btn apply-selected",disabled:!n.selectedFace,onClick:P},[...F[10]||(F[10]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),Oi(" Apply to Selected Face ",-1)])],8,P_),T("button",{type:"button",class:"apply-btn apply-all",onClick:O},[...F[11]||(F[11]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"})],-1),Oi(" Apply to All Faces ",-1)])])])):Ct("",!0)])}}}),D_=$n(L_,[["__scopeId","data-v-0e73d30a"]]),I_=["title"],U_={key:0,class:"texture-preview"},N_=["src","alt"],F_={class:"texture-overlay"},O_={class:"texture-label"},k_={key:1,class:"empty-face"},B_={class:"face-icon"},z_={class:"face-label"},H_={key:2,class:"selection-indicator"},V_=Rn({__name:"FaceButton",props:{face:{},isSelected:{type:Boolean},textureUrl:{}},emits:["click"],setup(n){const e=n,t=()=>({front:"⬆️",back:"⬇️",left:"⬅️",right:"➡️",top:"🔺",bottom:"🔻"})[e.face],i=()=>e.face.charAt(0).toUpperCase()+e.face.slice(1);return(s,r)=>(Me(),be("button",{type:"button",class:pt(["face-button",{selected:n.isSelected,"has-texture":n.textureUrl,[n.face]:!0}]),onClick:r[0]||(r[0]=o=>s.$emit("click")),title:`${n.face.charAt(0).toUpperCase()+n.face.slice(1)} Face`},[n.textureUrl?(Me(),be("div",U_,[T("img",{src:n.textureUrl,alt:`${n.face} texture`,class:"texture-image"},null,8,N_),T("div",F_,[T("span",O_,He(i()),1)])])):(Me(),be("div",k_,[T("div",B_,He(t()),1),T("div",z_,He(i()),1)])),n.isSelected?(Me(),be("div",H_,[...r[1]||(r[1]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):Ct("",!0)],10,I_))}}),Ms=$n(V_,[["__scopeId","data-v-fde2d244"]]),G_={class:"face-selector"},W_={class:"selector-header"},X_={class:"text-sm text-gray-500"},$_={class:"box-diagram"},q_={class:"face-row top-row"},Y_={class:"face-row middle-row"},j_={class:"middle-faces"},K_={class:"face-row bottom-row"},Z_={class:"thumbnails-grid"},J_=["onClick"],Q_={class:"thumbnail-container"},ev={key:0,class:"texture-preview"},tv=["src","alt"],nv={class:"thumbnail-overlay"},iv=["onClick"],sv={key:1,class:"empty-thumbnail"},rv={class:"empty-icon"},ov={class:"face-label"},av={class:"label-text"},lv={key:0,class:"texture-indicator"},cv={key:0,class:"face-actions"},uv={class:"actions-header"},hv={class:"font-medium text-gray-800"},dv={class:"action-buttons"},fv=["disabled"],pv=["disabled"],mv={class:"texture-summary"},gv={class:"summary-item"},_v={class:"summary-value"},vv={class:"summary-item"},xv={class:"summary-value"},yv=Rn({__name:"FaceSelector",props:{selectedFace:{default:null},textures:{default:()=>({front:null,back:null,left:null,right:null,top:null,bottom:null})}},emits:["select","remove-texture","copy-to-others","reset-all"],setup(n,{emit:e}){const t=n,i=e,s=["front","back","left","right","top","bottom"],r=ln(()=>s.filter(f=>t.textures[f]).length),o=f=>({front:"⬆️",back:"⬇️",left:"⬅️",right:"➡️",top:"🔺",bottom:"🔻"})[f],a=f=>t.textures[f]||null,l=f=>{i("select",f)},c=f=>{i("remove-texture",f)},u=()=>{t.selectedFace&&i("copy-to-others",t.selectedFace)},h=()=>{i("reset-all")};return(f,d)=>(Me(),be("div",G_,[T("div",W_,[d[7]||(d[7]=T("h3",{class:"text-lg font-semibold text-gray-800"},"Face Selection",-1)),T("div",X_,He(n.selectedFace?`Selected: ${n.selectedFace}`:"Click a face to select"),1)]),T("div",$_,[T("div",q_,[d[8]||(d[8]=T("div",{class:"face-placeholder"},null,-1)),Qe(Ms,{face:"top","is-selected":n.selectedFace==="top","texture-url":a("top"),onClick:d[0]||(d[0]=g=>l("top"))},null,8,["is-selected","texture-url"]),d[9]||(d[9]=T("div",{class:"face-placeholder"},null,-1))]),T("div",Y_,[Qe(Ms,{face:"left","is-selected":n.selectedFace==="left","texture-url":a("left"),onClick:d[1]||(d[1]=g=>l("left"))},null,8,["is-selected","texture-url"]),T("div",j_,[Qe(Ms,{face:"front","is-selected":n.selectedFace==="front","texture-url":a("front"),onClick:d[2]||(d[2]=g=>l("front"))},null,8,["is-selected","texture-url"]),Qe(Ms,{face:"back","is-selected":n.selectedFace==="back","texture-url":a("back"),onClick:d[3]||(d[3]=g=>l("back"))},null,8,["is-selected","texture-url"])]),Qe(Ms,{face:"right","is-selected":n.selectedFace==="right","texture-url":a("right"),onClick:d[4]||(d[4]=g=>l("right"))},null,8,["is-selected","texture-url"])]),T("div",K_,[d[10]||(d[10]=T("div",{class:"face-placeholder"},null,-1)),Qe(Ms,{face:"bottom","is-selected":n.selectedFace==="bottom","texture-url":a("bottom"),onClick:d[5]||(d[5]=g=>l("bottom"))},null,8,["is-selected","texture-url"]),d[11]||(d[11]=T("div",{class:"face-placeholder"},null,-1))])]),T("div",Z_,[(Me(),be(yt,null,Vn(s,g=>T("div",{key:g,class:pt(["thumbnail-item",{selected:n.selectedFace===g}]),onClick:x=>l(g)},[T("div",Q_,[a(g)?(Me(),be("div",ev,[T("img",{src:a(g),alt:`${g} texture`,class:"thumbnail-image"},null,8,tv),T("div",nv,[T("button",{type:"button",class:"remove-btn",onClick:Vo(x=>c(g),["stop"]),title:"Remove texture"},[...d[12]||(d[12]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)])],8,iv)])])):(Me(),be("div",sv,[T("div",rv,He(o(g)),1)])),T("div",ov,[T("span",av,He(g.charAt(0).toUpperCase()+g.slice(1)),1),a(g)?(Me(),be("span",lv,[...d[13]||(d[13]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3 text-green-500",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):Ct("",!0)])])],10,J_)),64))]),n.selectedFace?(Me(),be("div",cv,[T("div",uv,[T("h4",hv,He(n.selectedFace.charAt(0).toUpperCase()+n.selectedFace.slice(1))+" Face Actions ",1)]),T("div",dv,[T("button",{type:"button",class:"action-btn reset-face",disabled:!a(n.selectedFace),onClick:d[6]||(d[6]=g=>c(n.selectedFace))},[...d[14]||(d[14]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Oi(" Clear Texture ",-1)])],8,fv),T("button",{type:"button",class:"action-btn copy-face",disabled:!a(n.selectedFace),onClick:u},[...d[15]||(d[15]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),T("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})],-1),Oi(" Copy to Others ",-1)])],8,pv)]),T("div",{class:"global-actions"},[T("button",{type:"button",class:"global-btn reset-all",onClick:h},[...d[16]||(d[16]=[T("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[T("path",{"fill-rule":"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clip-rule":"evenodd"})],-1),Oi(" Reset All Textures ",-1)])])])])):Ct("",!0),T("div",mv,[T("div",gv,[d[17]||(d[17]=T("span",{class:"summary-label"},"Textured Faces:",-1)),T("span",_v,He(r.value)+" / "+He(s.length),1)]),T("div",vv,[d[18]||(d[18]=T("span",{class:"summary-label"},"Selected Face:",-1)),T("span",xv,He(n.selectedFace?n.selectedFace.charAt(0).toUpperCase()+n.selectedFace.slice(1):"None"),1)])])]))}}),Mv=$n(yv,[["__scopeId","data-v-0bd4bfed"]]),Sv="modulepreload",bv=function(n){return"/virtual-tryon-packaging/"+n},sh={},Ev=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=bv(l),l in sh)return;sh[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Sv,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="170",$s={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wv=0,rh=1,Tv=2,Bf=1,zf=2,si=3,Hi=0,tn=1,Bn=2,ki=0,qs=1,oh=2,ah=3,lh=4,Av=5,os=100,Cv=101,Rv=102,Pv=103,Lv=104,Dv=200,Iv=201,Uv=202,Nv=203,Bl=204,zl=205,Fv=206,Ov=207,kv=208,Bv=209,zv=210,Hv=211,Vv=212,Gv=213,Wv=214,Hl=0,Vl=1,Gl=2,Zs=3,Wl=4,Xl=5,$l=6,ql=7,Hf=0,Xv=1,$v=2,Bi=0,qv=1,Yv=2,jv=3,Vf=4,Kv=5,Zv=6,Jv=7,Gf=300,Js=301,Qs=302,ia=303,Yl=304,Ea=306,jl=1e3,hi=1001,Kl=1002,un=1003,Qv=1004,oo=1005,jt=1006,Ga=1007,Fi=1008,Wn=1009,Wf=1010,Xf=1011,Vr=1012,Xc=1013,us=1014,gn=1015,di=1016,$c=1017,qc=1018,er=1020,$f=35902,qf=1021,Yc=1022,_n=1023,Yf=1024,jf=1025,Ys=1026,tr=1027,Kf=1028,jc=1029,Zf=1030,Kc=1031,Zc=1033,Go=33776,Wo=33777,Xo=33778,$o=33779,Zl=35840,Jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,_c=37821,qo=36492,vc=36494,xc=36495,Jf=36283,yc=36284,Mc=36285,Sc=36286,ex=3200,tx=3201,Qf=0,nx=1,Ii="",$t="srgb",ms="srgb-linear",wa="linear",ht="srgb",Ss=7680,ch=519,ix=512,sx=513,rx=514,ep=515,ox=516,ax=517,lx=518,cx=519,uh=35044,hh="300 es",fi=2e3,sa=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,bc=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function ux(n,e){return(n%e+e)%e}function Wa(n,e,t){return(1-t)*n+t*e}function dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hx={DEG2RAD:Pr};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],R=s[1],E=s[4],M=s[7],N=s[2],D=s[5],I=s[8];return r[0]=o*x+a*R+l*N,r[3]=o*m+a*E+l*D,r[6]=o*p+a*M+l*I,r[1]=c*x+u*R+h*N,r[4]=c*m+u*E+h*D,r[7]=c*p+u*M+h*I,r[2]=f*x+d*R+g*N,r[5]=f*m+d*E+g*D,r[8]=f*p+d*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new je;function tp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dx(){const n=Gr("canvas");return n.style.display="block",n}const dh={};function xr(n){n in dh||(dh[n]=!0,console.warn(n))}function fx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function px(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(n.r=mi(n.r),n.g=mi(n.g),n.b=mi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?wa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const fh=[.64,.33,.3,.6,.15,.06],ph=[.2126,.7152,.0722],mh=[.3127,.329],gh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[ms]:{primaries:fh,whitePoint:mh,transfer:wa,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:ph,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:fh,whitePoint:mh,transfer:ht,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:ph,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}});let bs;class gx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Gr("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _x=0;class np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($a(s[o].image)):r.push($a(s[o]))}else r=$a(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vx=0;class Nt extends gs{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=hi,s=hi,r=jt,o=Fi,a=_n,l=Wn,c=Nt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=sr(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jl:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jl:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Gf;Nt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(d+1)/2,N=(p+1)/2,D=(u+f)/4,I=(h+x)/4,A=(g+m)/4;return E>M&&E>N?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=D/i,r=I/i):M>N?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=D/s,r=A/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=I/r,s=A/r),this.set(i,s,r,t),this}let R=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(h-x)/R,this.z=(f-u)/R,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Nt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new np(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends xx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ip extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yx extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*x,R=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const N=Math.sqrt(E),D=Math.atan2(N,p*R);m=Math.sin(m*D)/N,a=Math.sin(a*D)/N}const M=a*R;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+x*M,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new H,vh=new hs;class Jr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),lo.subVectors(this.max,fr),Es.subVectors(e.a,fr),ws.subVectors(e.b,fr),Ts.subVectors(e.c,fr),bi.subVectors(ws,Es),Ei.subVectors(Ts,ws),Ki.subVectors(Es,Ts);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Ki.z,Ki.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Ki.z,0,-Ki.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Ki.y,Ki.x,0];return!Ya(t,Es,ws,Ts,lo)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Es,ws,Ts,lo))?!1:(co.crossVectors(bi,Ei),t=[co.x,co.y,co.z],Ya(t,Es,ws,Ts,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new H,new H,new H,new H,new H,new H,new H,new H],yn=new H,ao=new Jr,Es=new H,ws=new H,Ts=new H,bi=new H,Ei=new H,Ki=new H,fr=new H,lo=new H,co=new H,Zi=new H;function Ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mx=new Jr,pr=new H,ja=new H;class Ta{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(ja)),this.expandByPoint(pr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new H,Ka=new H,uo=new H,wi=new H,Za=new H,ho=new H,Ja=new H;class Jc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ka.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=wi.dot(this.direction),l=-wi.dot(uo),c=wi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ka).addScaledVector(uo,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){Za.subVectors(t,e),ho.subVectors(i,e),Ja.crossVectors(Za,ho);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(ho.crossVectors(wi,ho));if(l<0)return null;const c=a*this.direction.dot(Za.cross(wi));if(c<0||l+c>o)return null;const u=-a*wi.dot(Ja);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sx,e,bx)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ti.crossVectors(i,rn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ti.crossVectors(i,rn)),Ti.normalize(),fo.crossVectors(rn,Ti),s[0]=Ti.x,s[4]=fo.x,s[8]=rn.x,s[1]=Ti.y,s[5]=fo.y,s[9]=rn.y,s[2]=Ti.z,s[6]=fo.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],R=i[3],E=i[7],M=i[11],N=i[15],D=s[0],I=s[4],A=s[8],v=s[12],_=s[1],P=s[5],O=s[9],L=s[13],F=s[2],G=s[6],B=s[10],K=s[14],Y=s[3],le=s[7],pe=s[11],xe=s[15];return r[0]=o*D+a*_+l*F+c*Y,r[4]=o*I+a*P+l*G+c*le,r[8]=o*A+a*O+l*B+c*pe,r[12]=o*v+a*L+l*K+c*xe,r[1]=u*D+h*_+f*F+d*Y,r[5]=u*I+h*P+f*G+d*le,r[9]=u*A+h*O+f*B+d*pe,r[13]=u*v+h*L+f*K+d*xe,r[2]=g*D+x*_+m*F+p*Y,r[6]=g*I+x*P+m*G+p*le,r[10]=g*A+x*O+m*B+p*pe,r[14]=g*v+x*L+m*K+p*xe,r[3]=R*D+E*_+M*F+N*Y,r[7]=R*I+E*P+M*G+N*le,r[11]=R*A+E*O+M*B+N*pe,r[15]=R*v+E*L+M*K+N*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],R=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,E=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,N=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,D=t*R+i*E+s*M+r*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=R*I,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*I,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=E*I,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=M*I,e[9]=(g*h*r-u*x*r-g*i*d+t*x*d+u*i*p-t*h*p)*I,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=N*I,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*I,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,R=l*c,E=l*u,M=l*h,N=i.x,D=i.y,I=i.z;return s[0]=(1-(x+p))*N,s[1]=(d+M)*N,s[2]=(g-E)*N,s[3]=0,s[4]=(d-M)*D,s[5]=(1-(f+p))*D,s[6]=(m+R)*D,s[7]=0,s[8]=(g+E)*I,s[9]=(m-R)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);const c=1/r,u=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=fi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=fi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,x;if(a===fi)g=(o+r)*h,x=-2*h;else if(a===sa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new H,Mn=new xt,Sx=new H(0,0,0),bx=new H(1,1,1),Ti=new H,fo=new H,rn=new H,xh=new xt,yh=new hs;class Xn{constructor(e=0,t=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ex=0;const Mh=new H,Cs=new hs,ei=new xt,po=new H,mr=new H,wx=new H,Tx=new hs,Sh=new H(1,0,0),bh=new H(0,1,0),Eh=new H(0,0,1),wh={type:"added"},Ax={type:"removed"},Rs={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Ft extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,t=new Xn,i=new hs,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Sh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?po.copy(e):po.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(mr,po,this.up):ei.lookAt(po,mr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ei),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ax),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new H,ti=new H,el=new H,ni=new H,Ps=new H,Ls=new H,Th=new H,tl=new H,nl=new H,il=new H,sl=new Et,rl=new Et,ol=new Et;class mn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Sn.subVectors(s,t),ti.subVectors(i,t),el.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(ti),l=Sn.dot(el),c=ti.dot(ti),u=ti.dot(el),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(e,t,i,s){return Sn.subVectors(i,t),ti.subVectors(e,t),Sn.cross(ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Sn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ls.subVectors(r,i),tl.subVectors(e,i);const l=Ps.dot(tl),c=Ls.dot(tl);if(l<=0&&c<=0)return t.copy(i);nl.subVectors(e,s);const u=Ps.dot(nl),h=Ls.dot(nl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ps,o);il.subVectors(e,r);const d=Ps.dot(il),g=Ls.dot(il);if(g>=0&&d<=g)return t.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ls,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Th.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Th,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},mo={h:0,s:0,l:0};function al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=ux(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Pt(Bt.r*255,0,255))*65536+Math.round(Pt(Bt.g*255,0,255))*256+Math.round(Pt(Bt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=$t){tt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(mo);const i=Wa(Ai.h,mo.h,t),s=Wa(Ai.s,mo.s,t),r=Wa(Ai.l,mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ze;Ze.NAMES=rp;let Cx=0;class rr extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=sr(),this.name="",this.blending=qs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class op extends rr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ci=Rx();function Rx(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Px(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Pt(n,-65504,65504),ci.floatView[0]=n;const e=ci.uint32View[0],t=e>>23&511;return ci.baseTable[t]+((e&8388607)>>ci.shiftTable[t])}function Lx(n){const e=n>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[e]+(n&1023)]+ci.exponentTable[e],ci.floatView[0]}const go={toHalfFloat:Px,fromHalfFloat:Lx},At=new H,_o=new ue;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class ap extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lp extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dx=0;const fn=new xt,ll=new Ft,Ds=new H,on=new Jr,gr=new Jr,Ut=new H;class nn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?lp:ap)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(on.min,gr.min),on.expandByPoint(Ut),Ut.addVectors(on.max,gr.max),on.expandByPoint(Ut)):(on.expandByPoint(gr.min),on.expandByPoint(gr.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Ut.add(Ds)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new H,l[A]=new H;const c=new H,u=new H,h=new H,f=new ue,d=new ue,g=new ue,x=new H,m=new H;function p(A,v,_){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,_),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[A].add(x),a[v].add(x),a[_].add(x),l[A].add(m),l[v].add(m),l[_].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let A=0,v=R.length;A<v;++A){const _=R[A],P=_.start,O=_.count;for(let L=P,F=P+O;L<F;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new H,M=new H,N=new H,D=new H;function I(A){N.fromBufferAttribute(s,A),D.copy(N);const v=a[A];E.copy(v),E.sub(N.multiplyScalar(N.dot(v))).normalize(),M.crossVectors(D,v);const P=M.dot(l[A])<0?-1:1;o.setXYZW(A,E.x,E.y,E.z,P)}for(let A=0,v=R.length;A<v;++A){const _=R[A],P=_.start,O=_.count;for(let L=P,F=P+O;L<F;L+=3)I(e.getX(L+0)),I(e.getX(L+1)),I(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new xt,Ji=new Jc,vo=new Ta,Ch=new H,xo=new H,yo=new H,Mo=new H,cl=new H,So=new H,Rh=new H,bo=new H;class it extends Ft{constructor(e=new nn,t=new op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(cl.fromBufferAttribute(h,e),o?So.addScaledVector(cl,u):So.addScaledVector(cl.sub(t),u))}t.add(So)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(vo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(vo,Ch)===null||Ji.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Ah.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Ah),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],R=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=R,N=E;M<N;M+=3){const D=a.getX(M),I=a.getX(M+1),A=a.getX(M+2);s=Eo(this,p,e,i,c,u,h,D,I,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const R=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);s=Eo(this,o,e,i,c,u,h,R,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],R=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=R,N=E;M<N;M+=3){const D=M,I=M+1,A=M+2;s=Eo(this,p,e,i,c,u,h,D,I,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const R=m,E=m+1,M=m+2;s=Eo(this,o,e,i,c,u,h,R,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ix(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:n}}function Eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,yo),n.getVertexPosition(c,Mo);const u=Ix(n,e,t,i,xo,yo,Mo,Rh);if(u){const h=new H;mn.getBarycoord(Rh,xo,yo,Mo,h),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,h,new ue)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,c,h,new ue)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};mn.getNormal(xo,yo,Mo,f.normal),u.face=f,u.barycoord=h}return u}let wn=class cp extends nn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(x,m,p,R,E,M,N,D,I,A,v){const _=M/I,P=N/A,O=M/2,L=N/2,F=D/2,G=I+1,B=A+1;let K=0,Y=0;const le=new H;for(let pe=0;pe<B;pe++){const xe=pe*P-L;for(let Ce=0;Ce<G;Ce++){const Ve=Ce*_-O;le[x]=Ve*R,le[m]=xe*E,le[p]=F,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=D>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ce/I),h.push(1-pe/A),K+=1}}for(let pe=0;pe<A;pe++)for(let xe=0;xe<I;xe++){const Ce=f+xe+G*pe,Ve=f+xe+G*(pe+1),re=f+(xe+1)+G*(pe+1),he=f+(xe+1)+G*pe;l.push(Ce,Ve,he),l.push(Ve,re,he),Y+=6}a.addGroup(d,Y,v),d+=Y,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const s in i)e[s]=i[s]}return e}function Ux(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Nx={clone:nr,merge:Xt};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends rr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hp extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new H,Ph=new ue,Lh=new ue;class pn extends hp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Lh),t.subVectors(Lh,Ph)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Us=1;class kx extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Is,Us,e,t);s.layers=this.layers,this.add(s);const r=new pn(Is,Us,e,t);r.layers=this.layers,this.add(r);const o=new pn(Is,Us,e,t);o.layers=this.layers,this.add(o);const a=new pn(Is,Us,e,t);a.layers=this.layers,this.add(a);const l=new pn(Is,Us,e,t);l.layers=this.layers,this.add(l);const c=new pn(Is,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dp extends Nt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bx extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ki});r.uniforms.tEquirect.value=t;const o=new it(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=jt),new kx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ul=new H,zx=new H,Hx=new je;class Di{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ul.subVectors(i,t).cross(zx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hx.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Ta,wo=new H;class Qc{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],R=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+R).normalize(),i[3].setComponents(l-o,f-u,m-g,M-R).normalize(),i[4].setComponents(l-a,f-h,m-x,M-E).normalize(),t===fi)i[5].setComponents(l+a,f+h,m+x,M+E).normalize();else if(t===sa)i[5].setComponents(a,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class en extends nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const R=p*f-o;for(let E=0;E<c;E++){const M=E*h-r;g.push(M,-R,0),x.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const E=R+c*p,M=R+c*(p+1),N=R+1+c*(p+1),D=R+1+c*p;d.push(E,M,D),d.push(M,N,D)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wx=`#ifdef USE_ALPHAHASH
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
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dy=`#define PI 3.141592653589793
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
} // validated`,fy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
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
#endif`,Hy=`struct PhysicalMaterial {
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
}`,Vy=`
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jy=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
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
#endif`,rM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
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
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AM=`float getShadowMask() {
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
}`,CM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,PM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GM=`uniform sampler2D t2D;
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
}`,KM=`#define DISTANCE
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
}`,ZM=`#define DISTANCE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 diffuse;
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
}`,sS=`#define LAMBERT
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
}`,rS=`#define LAMBERT
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
}`,oS=`#define MATCAP
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
}`,aS=`#define MATCAP
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
}`,lS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,uS=`#define PHONG
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
}`,hS=`#define PHONG
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
}`,dS=`#define STANDARD
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
}`,fS=`#define STANDARD
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
}`,pS=`#define TOON
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
}`,mS=`#define TOON
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
}`,gS=`uniform float size;
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,xS=`uniform vec3 color;
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
}`,yS=`uniform float rotation;
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
}`,MS=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Gx,alphahash_pars_fragment:Wx,alphamap_fragment:Xx,alphamap_pars_fragment:$x,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:jx,aomap_pars_fragment:Kx,batching_pars_vertex:Zx,batching_vertex:Jx,begin_vertex:Qx,beginnormal_vertex:ey,bsdfs:ty,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ay,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:uy,color_vertex:hy,common:dy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:_y,emissivemap_pars_fragment:vy,colorspace_fragment:xy,colorspace_pars_fragment:yy,envmap_fragment:My,envmap_common_pars_fragment:Sy,envmap_pars_fragment:by,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Ny,envmap_vertex:wy,fog_vertex:Ty,fog_pars_vertex:Ay,fog_fragment:Cy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Py,lightmap_pars_fragment:Ly,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Iy,lights_pars_begin:Uy,lights_toon_fragment:Fy,lights_toon_pars_fragment:Oy,lights_phong_fragment:ky,lights_phong_pars_fragment:By,lights_physical_fragment:zy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Vy,lights_fragment_maps:Gy,lights_fragment_end:Wy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Yy,map_fragment:jy,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:eM,morphinstance_vertex:tM,morphcolor_vertex:nM,morphnormal_vertex:iM,morphtarget_pars_vertex:sM,morphtarget_vertex:rM,normal_fragment_begin:oM,normal_fragment_maps:aM,normal_pars_fragment:lM,normal_pars_vertex:cM,normal_vertex:uM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:fM,clearcoat_pars_fragment:pM,iridescence_pars_fragment:mM,opaque_fragment:gM,packing:_M,premultiplied_alpha_fragment:vM,project_vertex:xM,dithering_fragment:yM,dithering_pars_fragment:MM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:bM,shadowmap_pars_fragment:EM,shadowmap_pars_vertex:wM,shadowmap_vertex:TM,shadowmask_pars_fragment:AM,skinbase_vertex:CM,skinning_pars_vertex:RM,skinning_vertex:PM,skinnormal_vertex:LM,specularmap_fragment:DM,specularmap_pars_fragment:IM,tonemapping_fragment:UM,tonemapping_pars_fragment:NM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:kM,uv_pars_vertex:BM,uv_vertex:zM,worldpos_vertex:HM,background_vert:VM,background_frag:GM,backgroundCube_vert:WM,backgroundCube_frag:XM,cube_vert:$M,cube_frag:qM,depth_vert:YM,depth_frag:jM,distanceRGBA_vert:KM,distanceRGBA_frag:ZM,equirect_vert:JM,equirect_frag:QM,linedashed_vert:eS,linedashed_frag:tS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:sS,meshlambert_frag:rS,meshmatcap_vert:oS,meshmatcap_frag:aS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:hS,meshphysical_vert:dS,meshphysical_frag:fS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:gS,points_frag:_S,shadow_vert:vS,shadow_frag:xS,sprite_vert:yS,sprite_frag:MS},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},On={basic:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Xt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Xt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Xt([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Xt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Xt([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Xt([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Xt([ve.common,ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Xt([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};On.physical={uniforms:Xt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const To={r:0,b:0,g:0},es=new Xn,SS=new xt;function bS(n,e,t,i,s,r,o){const a=new Ze(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(R){let E=R.isScene===!0?R.background:null;return E&&E.isTexture&&(E=(R.backgroundBlurriness>0?t:e).get(E)),E}function x(R){let E=!1;const M=g(R);M===null?p(a,l):M&&M.isColor&&(p(M,1),E=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===Ea)?(u===void 0&&(u=new it(new wn(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:nr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(E.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(es)),u.material.toneMapped=tt.getTransfer(M.colorSpace)!==ht,(h!==M||f!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new it(new en(2,2),new Gi({name:"BackgroundMaterial",uniforms:nr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,E){R.getRGB(To,up(n)),i.buffers.color.setClear(To.r,To.g,To.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(R,E=1){a.set(R),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:x,addToRenderList:m}}function ES(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(_,P,O,L,F){let G=!1;const B=h(L,O,P);r!==B&&(r=B,c(r.object)),G=d(_,L,O,F),G&&g(_,L,O,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(_,P,O,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,P,O){const L=O.wireframe===!0;let F=i[_.id];F===void 0&&(F={},i[_.id]=F);let G=F[P.id];G===void 0&&(G={},F[P.id]=G);let B=G[L];return B===void 0&&(B=f(l()),G[L]=B),B}function f(_){const P=[],O=[],L=[];for(let F=0;F<t;F++)P[F]=0,O[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,P,O,L){const F=r.attributes,G=P.attributes;let B=0;const K=O.getAttributes();for(const Y in K)if(K[Y].location>=0){const pe=F[Y];let xe=G[Y];if(xe===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(xe=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(xe=_.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(_,P,O,L){const F={},G=P.attributes;let B=0;const K=O.getAttributes();for(const Y in K)if(K[Y].location>=0){let pe=G[Y];pe===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor));const xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),F[Y]=xe,B++}r.attributes=F,r.attributesNum=B,r.index=L}function x(){const _=r.newAttributes;for(let P=0,O=_.length;P<O;P++)_[P]=0}function m(_){p(_,0)}function p(_,P){const O=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;O[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),F[_]!==P&&(n.vertexAttribDivisor(_,P),F[_]=P)}function R(){const _=r.newAttributes,P=r.enabledAttributes;for(let O=0,L=P.length;O<L;O++)P[O]!==_[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function E(_,P,O,L,F,G,B){B===!0?n.vertexAttribIPointer(_,P,O,F,G):n.vertexAttribPointer(_,P,O,L,F,G)}function M(_,P,O,L){x();const F=L.attributes,G=O.getAttributes(),B=P.defaultAttributeValues;for(const K in G){const Y=G[K];if(Y.location>=0){let le=F[K];if(le===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),le!==void 0){const pe=le.normalized,xe=le.itemSize,Ce=e.get(le);if(Ce===void 0)continue;const Ve=Ce.buffer,re=Ce.type,he=Ce.bytesPerElement,Ae=re===n.INT||re===n.UNSIGNED_INT||le.gpuType===Xc;if(le.isInterleavedBufferAttribute){const de=le.data,Pe=de.stride,Be=le.offset;if(de.isInstancedInterleavedBuffer){for(let Re=0;Re<Y.locationSize;Re++)p(Y.location+Re,de.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Re=0;Re<Y.locationSize;Re++)m(Y.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Re=0;Re<Y.locationSize;Re++)E(Y.location+Re,xe/Y.locationSize,re,pe,Pe*he,(Be+xe/Y.locationSize*Re)*he,Ae)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)p(Y.location+de,le.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let de=0;de<Y.locationSize;de++)E(Y.location+de,xe/Y.locationSize,re,pe,xe*he,xe/Y.locationSize*de*he,Ae)}}else if(B!==void 0){const pe=B[K];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Y.location,pe);break;case 3:n.vertexAttrib3fv(Y.location,pe);break;case 4:n.vertexAttrib4fv(Y.location,pe);break;default:n.vertexAttrib1fv(Y.location,pe)}}}}R()}function N(){A();for(const _ in i){const P=i[_];for(const O in P){const L=P[O];for(const F in L)u(L[F].object),delete L[F];delete P[O]}delete i[_]}}function D(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const O in P){const L=P[O];for(const F in L)u(L[F].object),delete L[F];delete P[O]}delete i[_.id]}function I(_){for(const P in i){const O=i[P];if(O[_.id]===void 0)continue;const L=O[_.id];for(const F in L)u(L[F].object),delete L[F];delete O[_.id]}}function A(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:v,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function wS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==_n&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const A=I===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Wn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==gn&&!A)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:N,maxSamples:D}}function AS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Di,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,E=R*4;let M=p.clippingState||null;l.value=M,M=u(g,f,E,d);for(let N=0;N!==E;++N)M[N]=t[N];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==x;++E,M+=4)o.copy(h[E]).applyMatrix4(R,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function CS(n){let e=new WeakMap;function t(o,a){return a===ia?o.mapping=Js:a===Yl&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===Yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class pp extends hp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,Dh=[.125,.215,.35,.446,.526,.582],as=20,hl=new pp,Ih=new Ze;let dl=null,fl=0,pl=0,ml=!1;const ss=(1+Math.sqrt(5))/2,Ns=1/ss,Uh=[new H(-ss,Ns,0),new H(ss,Ns,0),new H(-Ns,0,ss),new H(Ns,0,ss),new H(0,ss,-Ns),new H(0,ss,Ns),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:di,format:_n,colorSpace:ms,depthBuffer:!1},s=Fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RS(r)),this._blurMaterial=PS(r,e,t)}return s}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,i,s){const a=new pn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ih),u.toneMapping=Bi,u.autoClear=!1;const d=new op({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new it(new wn,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Ih),x=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Ao(s,R*E,p>2?E:0,E,E),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uh[(s-r-1)%Uh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new it(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let R=0;for(let I=0;I<as;++I){const A=I/x,v=Math.exp(-A*A/2);p.push(v),I===0?R+=v:I<m&&(R+=2*v)}for(let I=0;I<p.length;I++)p[I]=p[I]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const M=this._sizeLods[s],N=3*M*(s>E-zs?s-E+zs:0),D=4*(this._cubeSize-M);Ao(t,N,D,3*M,2*M),l.setRenderTarget(t),l.render(h,hl)}}function RS(n){const e=[],t=[],i=[];let s=n;const r=n-zs+1+Dh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-zs?l=Dh[o-n+zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,R=new Float32Array(x*g*d),E=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let D=0;D<d;D++){const I=D%3*2/3-1,A=D>2?0:-1,v=[I,A,0,I+2/3,A,0,I+2/3,A+1,0,I,A,0,I+2/3,A+1,0,I,A+1,0];R.set(v,x*g*D),E.set(f,m*g*D);const _=[D,D,D,D,D,D];M.set(_,p*g*D)}const N=new nn;N.setAttribute("position",new Gn(R,x)),N.setAttribute("uv",new Gn(E,m)),N.setAttribute("faceIndex",new Gn(M,p)),e.push(N),s>zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fh(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function PS(n,e,t){const i=new Float32Array(as),s=new H(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Oh(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function kh(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function LS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ia||l===Yl,u=l===Js||l===Qs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Nh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Nh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function DS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function IS(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const R=d.array;x=d.version;for(let E=0,M=R.length;E<M;E+=3){const N=R[E+0],D=R[E+1],I=R[E+2];f.push(N,D,D,I,I,N)}}else if(g!==void 0){const R=g.array;x=g.version;for(let E=0,M=R.length/3-1;E<M;E+=3){const N=E+0,D=E+1,I=E+2;f.push(N,D,D,I,I,N)}}else return;const m=new(tp(f)?lp:ap)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function US(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let R=0;R<g;R++)p+=d[R]*x[R];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function NS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function FS(n,e,t){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let _=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let N=a.attributes.position.count*M,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*D*4*h),A=new ip(I,N,D,h);A.type=gn,A.needsUpdate=!0;const v=M*4;for(let P=0;P<h;P++){const O=p[P],L=R[P],F=E[P],G=N*D*4*P;for(let B=0;B<O.count;B++){const K=B*v;g===!0&&(s.fromBufferAttribute(O,B),I[G+K+0]=s.x,I[G+K+1]=s.y,I[G+K+2]=s.z,I[G+K+3]=0),x===!0&&(s.fromBufferAttribute(L,B),I[G+K+4]=s.x,I[G+K+5]=s.y,I[G+K+6]=s.z,I[G+K+7]=0),m===!0&&(s.fromBufferAttribute(F,B),I[G+K+8]=s.x,I[G+K+9]=s.y,I[G+K+10]=s.z,I[G+K+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new ue(N,D)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function OS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class mp extends Nt{constructor(e,t,i,s,r,o,a,l,c,u=Ys){if(u!==Ys&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ys&&(i=us),i===void 0&&u===tr&&(i=er),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gp=new Nt,Bh=new mp(1,1),_p=new ip,vp=new yx,xp=new dp,zh=[],Hh=[],Vh=new Float32Array(16),Gh=new Float32Array(9),Wh=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Aa(n,e){let t=Hh[e];t===void 0&&(t=new Int32Array(e),Hh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function VS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Wh.set(i),n.uniformMatrix2fv(this.addr,!1,Wh),It(t,i)}}function GS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Gh.set(i),n.uniformMatrix3fv(this.addr,!1,Gh),It(t,i)}}function WS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Vh.set(i),n.uniformMatrix4fv(this.addr,!1,Vh),It(t,i)}}function XS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function jS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function ZS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function QS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bh.compareFunction=ep,r=Bh):r=gp,t.setTexture2D(e||r,s)}function e1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vp,s)}function t1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xp,s)}function n1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_p,s)}function i1(n){switch(n){case 5126:return kS;case 35664:return BS;case 35665:return zS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return $S;case 35668:case 35672:return qS;case 35669:case 35673:return YS;case 5125:return jS;case 36294:return KS;case 36295:return ZS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function s1(n,e){n.uniform1fv(this.addr,e)}function r1(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function o1(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function a1(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function l1(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c1(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u1(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h1(n,e){n.uniform1iv(this.addr,e)}function d1(n,e){n.uniform2iv(this.addr,e)}function f1(n,e){n.uniform3iv(this.addr,e)}function p1(n,e){n.uniform4iv(this.addr,e)}function m1(n,e){n.uniform1uiv(this.addr,e)}function g1(n,e){n.uniform2uiv(this.addr,e)}function _1(n,e){n.uniform3uiv(this.addr,e)}function v1(n,e){n.uniform4uiv(this.addr,e)}function x1(n,e,t){const i=this.cache,s=e.length,r=Aa(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gp,r[o])}function y1(n,e,t){const i=this.cache,s=e.length,r=Aa(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vp,r[o])}function M1(n,e,t){const i=this.cache,s=e.length,r=Aa(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xp,r[o])}function S1(n,e,t){const i=this.cache,s=e.length,r=Aa(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_p,r[o])}function b1(n){switch(n){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return S1}}class E1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i1(t.type)}}class w1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}}class T1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Xh(n,e){n.seq.push(e),n.map[e.id]=e}function A1(n,e,t){const i=n.name,s=i.length;for(gl.lastIndex=0;;){const r=gl.exec(i),o=gl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xh(t,c===void 0?new E1(a,n,e):new w1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new T1(a),Xh(t,h)),t=h}}}class Yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);A1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function $h(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const C1=37297;let R1=0;function P1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qh=new je;function L1(n){tt._getMatrix(qh,tt.workingColorSpace,n);const e=`mat3( ${qh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+P1(n.getShaderSource(e),o)}else return s}function D1(n,e){const t=L1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I1(n,e){let t;switch(e){case qv:t="Linear";break;case Yv:t="Reinhard";break;case jv:t="Cineon";break;case Vf:t="ACESFilmic";break;case Zv:t="AgX";break;case Jv:t="Neutral";break;case Kv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Co=new H;function U1(){tt.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function F1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function yr(n){return n!==""}function jh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace(k1,z1)}const B1=new Map;function z1(n,e){let t=Ke[e];if(t===void 0){const i=B1.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace(H1,V1)}function V1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function G1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hf:e="ENVMAP_BLENDING_MULTIPLY";break;case Xv:e="ENVMAP_BLENDING_MIX";break;case $v:e="ENVMAP_BLENDING_ADD";break}return e}function q1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Y1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=G1(t),c=W1(t),u=X1(t),h=$1(t),f=q1(t),d=N1(t),g=F1(r),x=s.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Bi?I1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,D1("linearToOutputTexel",t.outputColorSpace),U1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=Ec(o),o=jh(o,t),o=Kh(o,t),a=Ec(a),a=jh(a,t),a=Kh(a,t),o=Zh(o),a=Zh(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=R+m+o,M=R+p+a,N=$h(s,s.VERTEX_SHADER,E),D=$h(s,s.FRAGMENT_SHADER,M);s.attachShader(x,N),s.attachShader(x,D),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(N).trim(),F=s.getShaderInfoLog(D).trim();let G=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,N,D);else{const K=Yh(s,N,"vertex"),Y=Yh(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:G,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(N),s.deleteShader(D),A=new Yo(s,x),v=O1(s,x)}let A;this.getUniforms=function(){return A===void 0&&I(this),A};let v;this.getAttributes=function(){return v===void 0&&I(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,C1)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=D,this}let j1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z1(e),t.set(e,i)),i}}class Z1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function J1(n,e,t,i,s,r,o){const a=new sp,l=new K1,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,_,P,O,L){const F=O.fog,G=L.geometry,B=v.isMeshStandardMaterial?O.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),Y=K&&K.mapping===Ea?K.image.height:null,le=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=pe!==void 0?pe.length:0;let Ce=0;G.morphAttributes.position!==void 0&&(Ce=1),G.morphAttributes.normal!==void 0&&(Ce=2),G.morphAttributes.color!==void 0&&(Ce=3);let Ve,re,he,Ae;if(le){const ut=On[le];Ve=ut.vertexShader,re=ut.fragmentShader}else Ve=v.vertexShader,re=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),Ae=l.getFragmentShaderID(v);const de=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,Je=!!v.map,w=!!v.matcap,U=!!K,y=!!v.aoMap,V=!!v.lightMap,z=!!v.bumpMap,$=!!v.normalMap,Z=!!v.displacementMap,ie=!!v.emissiveMap,Q=!!v.metalnessMap,b=!!v.roughnessMap,S=v.anisotropy>0,k=v.clearcoat>0,j=v.dispersion>0,ee=v.iridescence>0,J=v.sheen>0,fe=v.transmission>0,ae=S&&!!v.anisotropyMap,ge=k&&!!v.clearcoatMap,Oe=k&&!!v.clearcoatNormalMap,ce=k&&!!v.clearcoatRoughnessMap,ye=ee&&!!v.iridescenceMap,Ne=ee&&!!v.iridescenceThicknessMap,ze=J&&!!v.sheenColorMap,_e=J&&!!v.sheenRoughnessMap,Ge=!!v.specularMap,Xe=!!v.specularColorMap,ct=!!v.specularIntensityMap,W=fe&&!!v.transmissionMap,Se=fe&&!!v.thicknessMap,se=!!v.gradientMap,oe=!!v.alphaMap,Te=v.alphaTest>0,Ee=!!v.alphaHash,qe=!!v.extensions;let bt=Bi;v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Ot={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:re,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Re,batchingColor:Re&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ms,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:w,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:Y,aoMap:y,lightMap:V,bumpMap:z,normalMap:$,displacementMap:f&&Z,emissiveMap:ie,normalMapObjectSpace:$&&v.normalMapType===nx,normalMapTangentSpace:$&&v.normalMapType===Qf,metalnessMap:Q,roughnessMap:b,anisotropy:S,anisotropyMap:ae,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ce,dispersion:j,iridescence:ee,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:J,sheenColorMap:ze,sheenRoughnessMap:_e,specularMap:Ge,specularColorMap:Xe,specularIntensityMap:ct,transmission:fe,transmissionMap:W,thicknessMap:Se,gradientMap:se,opaque:v.transparent===!1&&v.blending===qs&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:Te,alphaHash:Ee,combine:v.combine,mapUv:Je&&x(v.map.channel),aoMapUv:y&&x(v.aoMap.channel),lightMapUv:V&&x(v.lightMap.channel),bumpMapUv:z&&x(v.bumpMap.channel),normalMapUv:$&&x(v.normalMap.channel),displacementMapUv:Z&&x(v.displacementMap.channel),emissiveMapUv:ie&&x(v.emissiveMap.channel),metalnessMapUv:Q&&x(v.metalnessMap.channel),roughnessMapUv:b&&x(v.roughnessMap.channel),anisotropyMapUv:ae&&x(v.anisotropyMap.channel),clearcoatMapUv:ge&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(v.sheenRoughnessMap.channel),specularMapUv:Ge&&x(v.specularMap.channel),specularColorMapUv:Xe&&x(v.specularColorMap.channel),specularIntensityMapUv:ct&&x(v.specularIntensityMap.channel),transmissionMapUv:W&&x(v.transmissionMap.channel),thicknessMapUv:Se&&x(v.thicknessMap.channel),alphaMapUv:oe&&x(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Je||oe),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pe,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:ie&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:qe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&v.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)_.push(P),_.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(R(_,v),E(_,v),_.push(n.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function R(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function E(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const _=g[v.type];let P;if(_){const O=On[_];P=Nx.clone(O.uniforms)}else P=v.uniforms;return P}function N(v,_){let P;for(let O=0,L=u.length;O<L;O++){const F=u[O];if(F.cacheKey===_){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Y1(n,_,v,r),u.push(P)),P}function D(v){if(--v.usedTimes===0){const _=u.indexOf(v);u[_]=u[u.length-1],u.pop(),v.destroy()}}function I(v){l.remove(v)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:N,releaseProgram:D,releaseShaderCache:I,programs:u,dispose:A}}function Q1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function eb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||eb),i.length>1&&i.sort(f||Qh),s.length>1&&s.sort(f||Qh)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function tb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ed,n.set(i,[o])):s>=r.length?(o=new ed,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function ib(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sb=0;function rb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ob(n){const e=new nb,t=ib(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new xt,o=new xt;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,R=0,E=0,M=0,N=0,D=0,I=0;c.sort(rb);for(let v=0,_=c.length;v<_;v++){const P=c[v],O=P.color,L=P.intensity,F=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*L,h+=O.g*L,f+=O.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],L);I++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,Y=t.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=P.shadow.matrix,R++}i.directional[d]=B,d++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[x]=B;const K=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,K.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=G,M++}x++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(O).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const K=P.shadow,Y=t.get(P);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==R||A.numPointShadows!==E||A.numSpotShadows!==M||A.numSpotMaps!==N||A.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+N-D,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,A.directionalLength=d,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=R,A.numPointShadows=E,A.numSpotShadows=M,A.numSpotMaps=N,A.numLightProbes=I,i.version=sb++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const E=c[p];if(E.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(E.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function td(n){const e=new ob(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ab(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new td(n),e.set(s,[a])):r>=o.length?(a=new td(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class lb extends rr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cb extends rr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
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
}`;function db(n,e,t){let i=new Qc;const s=new ue,r=new ue,o=new Et,a=new lb({depthPacking:tx}),l=new cb,c={},u=t.maxTextureSize,h={[Hi]:tn,[tn]:Hi,[Bn]:Bn},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:ub,fragmentShader:hb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new it(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bf;let p=this.type;this.render=function(D,I,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const v=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ki),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=p!==si&&this.type===si,F=p===si&&this.type!==si;for(let G=0,B=D.length;G<B;G++){const K=D[G],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const le=Y.getFrameExtents();if(s.multiply(le),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,Y.mapSize.y=r.y)),Y.map===null||L===!0||F===!0){const xe=this.type!==si?{minFilter:un,magFilter:un}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Vi(s.x,s.y,xe),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const pe=Y.getViewportCount();for(let xe=0;xe<pe;xe++){const Ce=Y.getViewport(xe);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),O.viewport(o),Y.updateMatrices(K,xe),i=Y.getFrustum(),M(I,A,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===si&&R(Y,A),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,_,P)};function R(D,I){const A=e.update(x);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(I,null,A,f,x,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(I,null,A,d,x,null)}function E(D,I,A,v){let _=null;const P=A.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)_=P;else if(_=A.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=_.uuid,L=I.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let G=F[L];G===void 0&&(G=_.clone(),F[L]=G,I.addEventListener("dispose",N)),_=G}if(_.visible=I.visible,_.wireframe=I.wireframe,v===si?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=n.properties.get(_);O.light=A}return _}function M(D,I,A,v,_){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&_===si)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,D.matrixWorld);const L=e.update(D),F=D.material;if(Array.isArray(F)){const G=L.groups;for(let B=0,K=G.length;B<K;B++){const Y=G[B],le=F[Y.materialIndex];if(le&&le.visible){const pe=E(D,le,v,_);D.onBeforeShadow(n,D,I,A,L,pe,Y),n.renderBufferDirect(A,null,L,pe,D,Y),D.onAfterShadow(n,D,I,A,L,pe,Y)}}}else if(F.visible){const G=E(D,F,v,_);D.onBeforeShadow(n,D,I,A,L,G,null),n.renderBufferDirect(A,null,L,G,D,null),D.onAfterShadow(n,D,I,A,L,G,null)}}const O=D.children;for(let L=0,F=O.length;L<F;L++)M(O[L],I,A,v,_)}function N(D){D.target.removeEventListener("dispose",N);for(const A in c){const v=c[A],_=D.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const fb={[Hl]:Vl,[Gl]:$l,[Wl]:ql,[Zs]:Xl,[Vl]:Hl,[$l]:Gl,[ql]:Wl,[Xl]:Zs};function pb(n,e){function t(){let W=!1;const Se=new Et;let se=null;const oe=new Et(0,0,0,0);return{setMask:function(Te){se!==Te&&!W&&(n.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){W=Te},setClear:function(Te,Ee,qe,bt,Ot){Ot===!0&&(Te*=bt,Ee*=bt,qe*=bt),Se.set(Te,Ee,qe,bt),oe.equals(Se)===!1&&(n.clearColor(Te,Ee,qe,bt),oe.copy(Se))},reset:function(){W=!1,se=null,oe.set(-1,0,0,0)}}}function i(){let W=!1,Se=!1,se=null,oe=null,Te=null;return{setReversed:function(Ee){if(Se!==Ee){const qe=e.get("EXT_clip_control");Se?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const bt=Te;Te=null,this.setClear(bt)}Se=Ee},getReversed:function(){return Se},setTest:function(Ee){Ee?de(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Ee){se!==Ee&&!W&&(n.depthMask(Ee),se=Ee)},setFunc:function(Ee){if(Se&&(Ee=fb[Ee]),oe!==Ee){switch(Ee){case Hl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Gl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case Xl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){Te!==Ee&&(Se&&(Ee=1-Ee),n.clearDepth(Ee),Te=Ee)},reset:function(){W=!1,se=null,oe=null,Te=null,Se=!1}}}function s(){let W=!1,Se=null,se=null,oe=null,Te=null,Ee=null,qe=null,bt=null,Ot=null;return{setTest:function(ut){W||(ut?de(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(ut){Se!==ut&&!W&&(n.stencilMask(ut),Se=ut)},setFunc:function(ut,vn,Yn){(se!==ut||oe!==vn||Te!==Yn)&&(n.stencilFunc(ut,vn,Yn),se=ut,oe=vn,Te=Yn)},setOp:function(ut,vn,Yn){(Ee!==ut||qe!==vn||bt!==Yn)&&(n.stencilOp(ut,vn,Yn),Ee=ut,qe=vn,bt=Yn)},setLocked:function(ut){W=ut},setClear:function(ut){Ot!==ut&&(n.clearStencil(ut),Ot=ut)},reset:function(){W=!1,Se=null,se=null,oe=null,Te=null,Ee=null,qe=null,bt=null,Ot=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,R=null,E=null,M=null,N=null,D=null,I=new Ze(0,0,0),A=0,v=!1,_=null,P=null,O=null,L=null,F=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=K>=2);let le=null,pe={};const xe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Ve=new Et().fromArray(xe),re=new Et().fromArray(Ce);function he(W,Se,se,oe){const Te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(W,Ee),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<se;qe++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Se+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ee}const Ae={};Ae[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(Zs),z(!1),$(rh),de(n.CULL_FACE),y(ki);function de(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function Pe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Be(W,Se){return h[W]!==Se?(n.bindFramebuffer(W,Se),h[W]=Se,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Se),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Re(W,Se){let se=d,oe=!1;if(W){se=f.get(Se),se===void 0&&(se=[],f.set(Se,se));const Te=W.textures;if(se.length!==Te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,qe=Te.length;Ee<qe;Ee++)se[Ee]=n.COLOR_ATTACHMENT0+Ee;se.length=Te.length,oe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,oe=!0);oe&&n.drawBuffers(se)}function Je(W){return g!==W?(n.useProgram(W),g=W,!0):!1}const w={[os]:n.FUNC_ADD,[Cv]:n.FUNC_SUBTRACT,[Rv]:n.FUNC_REVERSE_SUBTRACT};w[Pv]=n.MIN,w[Lv]=n.MAX;const U={[Dv]:n.ZERO,[Iv]:n.ONE,[Uv]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[zv]:n.SRC_ALPHA_SATURATE,[kv]:n.DST_COLOR,[Fv]:n.DST_ALPHA,[Nv]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[Bv]:n.ONE_MINUS_DST_COLOR,[Ov]:n.ONE_MINUS_DST_ALPHA,[Hv]:n.CONSTANT_COLOR,[Vv]:n.ONE_MINUS_CONSTANT_COLOR,[Gv]:n.CONSTANT_ALPHA,[Wv]:n.ONE_MINUS_CONSTANT_ALPHA};function y(W,Se,se,oe,Te,Ee,qe,bt,Ot,ut){if(W===ki){x===!0&&(Pe(n.BLEND),x=!1);return}if(x===!1&&(de(n.BLEND),x=!0),W!==Av){if(W!==m||ut!==v){if((p!==os||M!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,M=os),ut)switch(W){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}R=null,E=null,N=null,D=null,I.set(0,0,0),A=0,m=W,v=ut}return}Te=Te||Se,Ee=Ee||se,qe=qe||oe,(Se!==p||Te!==M)&&(n.blendEquationSeparate(w[Se],w[Te]),p=Se,M=Te),(se!==R||oe!==E||Ee!==N||qe!==D)&&(n.blendFuncSeparate(U[se],U[oe],U[Ee],U[qe]),R=se,E=oe,N=Ee,D=qe),(bt.equals(I)===!1||Ot!==A)&&(n.blendColor(bt.r,bt.g,bt.b,Ot),I.copy(bt),A=Ot),m=W,v=!1}function V(W,Se){W.side===Bn?Pe(n.CULL_FACE):de(n.CULL_FACE);let se=W.side===tn;Se&&(se=!se),z(se),W.blending===qs&&W.transparent===!1?y(ki):y(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const oe=W.stencilWrite;a.setTest(oe),oe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ie(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(W){_!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),_=W)}function $(W){W!==wv?(de(n.CULL_FACE),W!==P&&(W===rh?n.cullFace(n.BACK):W===Tv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),P=W}function Z(W){W!==O&&(B&&n.lineWidth(W),O=W)}function ie(W,Se,se){W?(de(n.POLYGON_OFFSET_FILL),(L!==Se||F!==se)&&(n.polygonOffset(Se,se),L=Se,F=se)):Pe(n.POLYGON_OFFSET_FILL)}function Q(W){W?de(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function b(W){W===void 0&&(W=n.TEXTURE0+G-1),le!==W&&(n.activeTexture(W),le=W)}function S(W,Se,se){se===void 0&&(le===null?se=n.TEXTURE0+G-1:se=le);let oe=pe[se];oe===void 0&&(oe={type:void 0,texture:void 0},pe[se]=oe),(oe.type!==W||oe.texture!==Se)&&(le!==se&&(n.activeTexture(se),le=se),n.bindTexture(W,Se||Ae[W]),oe.type=W,oe.texture=Se)}function k(){const W=pe[le];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(W){Ve.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ve.copy(W))}function _e(W){re.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),re.copy(W))}function Ge(W,Se){let se=c.get(Se);se===void 0&&(se=new WeakMap,c.set(Se,se));let oe=se.get(W);oe===void 0&&(oe=n.getUniformBlockIndex(Se,W.name),se.set(W,oe))}function Xe(W,Se){const oe=c.get(Se).get(W);l.get(Se)!==oe&&(n.uniformBlockBinding(Se,oe,W.__bindingPointIndex),l.set(Se,oe))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,pe={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,R=null,E=null,M=null,N=null,D=null,I=new Ze(0,0,0),A=0,v=!1,_=null,P=null,O=null,L=null,F=null,Ve.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Pe,bindFramebuffer:Be,drawBuffers:Re,useProgram:Je,setBlending:y,setMaterial:V,setFlipSided:z,setCullFace:$,setLineWidth:Z,setPolygonOffset:ie,setScissorTest:Q,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:ye,texImage3D:Ne,updateUBOMapping:Ge,uniformBlockBinding:Xe,texStorage2D:Oe,texStorage3D:ce,texSubImage2D:J,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:ze,viewport:_e,reset:ct}}function nd(n,e,t,i){const s=mb(i);switch(t){case qf:return n*e;case Yf:return n*e;case jf:return n*e*2;case Kf:return n*e/s.components*s.byteLength;case jc:return n*e/s.components*s.byteLength;case Zf:return n*e*2/s.components*s.byteLength;case Kc:return n*e*2/s.components*s.byteLength;case Yc:return n*e*3/s.components*s.byteLength;case _n:return n*e*4/s.components*s.byteLength;case Zc:return n*e*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case ec:return Math.max(n,16)*Math.max(e,8)/4;case Zl:case Ql:return Math.max(n,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qo:case vc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jf:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mb(n){switch(n){case Wn:case Wf:return{byteLength:1,components:1};case Vr:case Xf:case di:return{byteLength:2,components:1};case $c:case qc:return{byteLength:2,components:4};case us:case Xc:case gn:return{byteLength:4,components:1};case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return d?new OffscreenCanvas(b,S):Gr("canvas")}function x(b,S,k){let j=1;const ee=Q(b);if((ee.width>k||ee.height>k)&&(j=k/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(j*ee.width),fe=Math.floor(j*ee.height);h===void 0&&(h=g(J,fe));const ae=S?g(J,fe):h;return ae.width=J,ae.height=fe,ae.getContext("2d").drawImage(b,0,0,J,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+fe+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,S,k,j,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=S;if(S===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),S===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const fe=ee?wa:tt.getTransfer(j);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=fe===ht?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(b,S){let k;return b?S===null||S===us||S===er?k=n.DEPTH24_STENCIL8:S===gn?k=n.DEPTH32F_STENCIL8:S===Vr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===us||S===er?k=n.DEPTH_COMPONENT24:S===gn?k=n.DEPTH_COMPONENT32F:S===Vr&&(k=n.DEPTH_COMPONENT16),k}function N(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==un&&b.minFilter!==jt?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function D(b){const S=b.target;S.removeEventListener("dispose",D),A(S),S.isVideoTexture&&u.delete(S)}function I(b){const S=b.target;S.removeEventListener("dispose",I),_(S)}function A(b){const S=i.get(b);if(S.__webglInit===void 0)return;const k=b.source,j=f.get(k);if(j){const ee=j[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(b),Object.keys(j).length===0&&f.delete(k)}i.remove(b)}function v(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const k=b.source,j=f.get(k);delete j[S.__cacheKey],o.memory.textures--}function _(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ee=0;ee<S.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let j=0,ee=k.length;j<ee;j++){const J=i.get(k[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[j])}i.remove(b)}let P=0;function O(){P=0}function L(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function F(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function G(b,S){const k=i.get(b);if(b.isVideoTexture&&Z(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,b,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function B(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){re(k,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function K(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){re(k,b,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function Y(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){he(k,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const le={[jl]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},pe={[un]:n.NEAREST,[Qv]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},xe={[ix]:n.NEVER,[cx]:n.ALWAYS,[sx]:n.LESS,[ep]:n.LEQUAL,[rx]:n.EQUAL,[lx]:n.GEQUAL,[ox]:n.GREATER,[ax]:n.NOTEQUAL};function Ce(b,S){if(S.type===gn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jt||S.magFilter===Ga||S.magFilter===oo||S.magFilter===Fi||S.minFilter===jt||S.minFilter===Ga||S.minFilter===oo||S.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,le[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,le[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,le[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[S.minFilter]),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==oo&&S.minFilter!==Fi||S.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",D));const j=S.source;let ee=f.get(j);ee===void 0&&(ee={},f.set(j,ee));const J=F(S);if(J!==b.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[J].usedTimes++;const fe=ee[b.__cacheKey];fe!==void 0&&(ee[b.__cacheKey].usedTimes--,fe.usedTimes===0&&v(S)),b.__cacheKey=J,b.__webglTexture=ee[J].texture}return k}function re(b,S,k){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);const ee=Ve(b,S),J=S.source;t.bindTexture(j,b.__webglTexture,n.TEXTURE0+k);const fe=i.get(J);if(J.version!==fe.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const ae=tt.getPrimaries(tt.workingColorSpace),ge=S.colorSpace===Ii?null:tt.getPrimaries(S.colorSpace),Oe=S.colorSpace===Ii||ae===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ce=x(S.image,!1,s.maxTextureSize);ce=ie(S,ce);const ye=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type);let ze=E(S.internalFormat,ye,Ne,S.colorSpace,S.isVideoTexture);Ce(j,S);let _e;const Ge=S.mipmaps,Xe=S.isVideoTexture!==!0,ct=fe.__version===void 0||ee===!0,W=J.dataReady,Se=N(S,ce);if(S.isDepthTexture)ze=M(S.format===tr,S.type),ct&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,ze,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,ye,Ne,null));else if(S.isDataTexture)if(Ge.length>0){Xe&&ct&&t.texStorage2D(n.TEXTURE_2D,Se,ze,Ge[0].width,Ge[0].height);for(let se=0,oe=Ge.length;se<oe;se++)_e=Ge[se],Xe?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,Ne,_e.data):t.texImage2D(n.TEXTURE_2D,se,ze,_e.width,_e.height,0,ye,Ne,_e.data);S.generateMipmaps=!1}else Xe?(ct&&t.texStorage2D(n.TEXTURE_2D,Se,ze,ce.width,ce.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,Ne,ce.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,ye,Ne,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ze,Ge[0].width,Ge[0].height,ce.depth);for(let se=0,oe=Ge.length;se<oe;se++)if(_e=Ge[se],S.format!==_n)if(ye!==null)if(Xe){if(W)if(S.layerUpdates.size>0){const Te=nd(_e.width,_e.height,S.format,S.type);for(const Ee of S.layerUpdates){const qe=_e.data.subarray(Ee*Te/_e.data.BYTES_PER_ELEMENT,(Ee+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ee,_e.width,_e.height,1,ye,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ce.depth,ye,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,ze,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ce.depth,ye,Ne,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,ze,_e.width,_e.height,ce.depth,0,ye,Ne,_e.data)}else{Xe&&ct&&t.texStorage2D(n.TEXTURE_2D,Se,ze,Ge[0].width,Ge[0].height);for(let se=0,oe=Ge.length;se<oe;se++)_e=Ge[se],S.format!==_n?ye!==null?Xe?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,se,ze,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,Ne,_e.data):t.texImage2D(n.TEXTURE_2D,se,ze,_e.width,_e.height,0,ye,Ne,_e.data)}else if(S.isDataArrayTexture)if(Xe){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ze,ce.width,ce.height,ce.depth),W)if(S.layerUpdates.size>0){const se=nd(ce.width,ce.height,S.format,S.type);for(const oe of S.layerUpdates){const Te=ce.data.subarray(oe*se/ce.data.BYTES_PER_ELEMENT,(oe+1)*se/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,ye,Ne,Te)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ne,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,ye,Ne,ce.data);else if(S.isData3DTexture)Xe?(ct&&t.texStorage3D(n.TEXTURE_3D,Se,ze,ce.width,ce.height,ce.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ne,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,ye,Ne,ce.data);else if(S.isFramebufferTexture){if(ct)if(Xe)t.texStorage2D(n.TEXTURE_2D,Se,ze,ce.width,ce.height);else{let se=ce.width,oe=ce.height;for(let Te=0;Te<Se;Te++)t.texImage2D(n.TEXTURE_2D,Te,ze,se,oe,0,ye,Ne,null),se>>=1,oe>>=1}}else if(Ge.length>0){if(Xe&&ct){const se=Q(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Se,ze,se.width,se.height)}for(let se=0,oe=Ge.length;se<oe;se++)_e=Ge[se],Xe?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye,Ne,_e):t.texImage2D(n.TEXTURE_2D,se,ze,ye,Ne,_e);S.generateMipmaps=!1}else if(Xe){if(ct){const se=Q(ce);t.texStorage2D(n.TEXTURE_2D,Se,ze,se.width,se.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ne,ce)}else t.texImage2D(n.TEXTURE_2D,0,ze,ye,Ne,ce);m(S)&&p(j),fe.__version=J.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function he(b,S,k){if(S.image.length!==6)return;const j=Ve(b,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const J=i.get(ee);if(ee.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const fe=tt.getPrimaries(tt.workingColorSpace),ae=S.colorSpace===Ii?null:tt.getPrimaries(S.colorSpace),ge=S.colorSpace===Ii||fe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!Oe&&!ce?ye[oe]=x(S.image[oe],!0,s.maxCubemapSize):ye[oe]=ce?S.image[oe].image:S.image[oe],ye[oe]=ie(S,ye[oe]);const Ne=ye[0],ze=r.convert(S.format,S.colorSpace),_e=r.convert(S.type),Ge=E(S.internalFormat,ze,_e,S.colorSpace),Xe=S.isVideoTexture!==!0,ct=J.__version===void 0||j===!0,W=ee.dataReady;let Se=N(S,Ne);Ce(n.TEXTURE_CUBE_MAP,S);let se;if(Oe){Xe&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ge,Ne.width,Ne.height);for(let oe=0;oe<6;oe++){se=ye[oe].mipmaps;for(let Te=0;Te<se.length;Te++){const Ee=se[Te];S.format!==_n?ze!==null?Xe?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ee.width,Ee.height,ze,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,Ge,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ee.width,Ee.height,ze,_e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,Ge,Ee.width,Ee.height,0,ze,_e,Ee.data)}}}else{if(se=S.mipmaps,Xe&&ct){se.length>0&&Se++;const oe=Q(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Ge,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){Xe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,ze,_e,ye[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,ye[oe].width,ye[oe].height,0,ze,_e,ye[oe].data);for(let Te=0;Te<se.length;Te++){const qe=se[Te].image[oe].image;Xe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,qe.width,qe.height,ze,_e,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,Ge,qe.width,qe.height,0,ze,_e,qe.data)}}else{Xe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,_e,ye[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,ze,_e,ye[oe]);for(let Te=0;Te<se.length;Te++){const Ee=se[Te];Xe?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,ze,_e,Ee.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,Ge,ze,_e,Ee.image[oe])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),J.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Ae(b,S,k,j,ee,J){const fe=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),ge=E(k.internalFormat,fe,ae,k.colorSpace),Oe=i.get(S),ce=i.get(k);if(ce.__renderTarget=S,!Oe.__hasExternalTextures){const ye=Math.max(1,S.width>>J),Ne=Math.max(1,S.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,ge,ye,Ne,S.depth,0,fe,ae,null):t.texImage2D(ee,J,ge,ye,Ne,0,fe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,ce.__webglTexture,0,z(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,ce.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(b,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer){const j=S.depthTexture,ee=j&&j.isDepthTexture?j.type:null,J=M(S.stencilBuffer,ee),fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=z(S);$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,J,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,b)}else{const j=S.textures;for(let ee=0;ee<j.length;ee++){const J=j[ee],fe=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),ge=E(J.internalFormat,fe,ae,J.colorSpace),Oe=z(S);k&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ge,S.width,S.height):$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ee=j.__webglTexture,J=z(S);if(S.depthTexture.format===Ys)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===tr)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Be(b){const S=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=j}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),de(S.__webglDepthbuffer[j],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),de(S.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(b,S,k){const j=i.get(b);S!==void 0&&Ae(j.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Be(b)}function Je(b){const S=b.texture,k=i.get(b),j=i.get(S);b.addEventListener("dispose",I);const ee=b.textures,J=b.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let ge=0;ge<S.mipmaps.length;ge++)k.__webglFramebuffer[ae][ge]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(fe)for(let ae=0,ge=ee.length;ae<ge;ae++){const Oe=i.get(ee[ae]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&$(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const ge=ee[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Oe=r.convert(ge.format,ge.colorSpace),ce=r.convert(ge.type),ye=E(ge.internalFormat,Oe,ce,ge.colorSpace,b.isXRRenderTarget===!0),Ne=z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),de(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Ae(k.__webglFramebuffer[ae][ge],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ge);else Ae(k.__webglFramebuffer[ae],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ae=0,ge=ee.length;ae<ge;ae++){const Oe=ee[ae],ce=i.get(Oe);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Ce(n.TEXTURE_2D,Oe),Ae(k.__webglFramebuffer,b,Oe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Oe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Ce(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Ae(k.__webglFramebuffer[ge],b,S,n.COLOR_ATTACHMENT0,ae,ge);else Ae(k.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}b.depthBuffer&&Be(b)}function w(b){const S=b.textures;for(let k=0,j=S.length;k<j;k++){const ee=S[k];if(m(ee)){const J=R(b),fe=i.get(ee).__webglTexture;t.bindTexture(J,fe),p(J),t.unbindTexture()}}}const U=[],y=[];function V(b){if(b.samples>0){if($(b)===!1){const S=b.textures,k=b.width,j=b.height;let ee=n.COLOR_BUFFER_BIT;const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(b),ae=S.length>1;if(ae)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Oe=i.get(S[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,ee,n.NEAREST),l===!0&&(U.length=0,y.length=0,U.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(J),y.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const Oe=i.get(S[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function z(b){return Math.min(s.maxSamples,b.samples)}function $(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Z(b){const S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function ie(b,S){const k=b.colorSpace,j=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==ms&&k!==Ii&&(tt.getTransfer(k)===ht?(j!==_n||ee!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Re,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=$}function _b(n,e){function t(i,s=Ii){let r;const o=tt.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wf)return n.BYTE;if(i===Xf)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Xc)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===qf)return n.ALPHA;if(i===Yc)return n.RGB;if(i===_n)return n.RGBA;if(i===Yf)return n.LUMINANCE;if(i===jf)return n.LUMINANCE_ALPHA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===Kf)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===Zf)return n.RG;if(i===Kc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===Go||i===Wo||i===Xo||i===$o)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===Jl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===nc||i===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tc||i===nc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ic)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qo||i===vc||i===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===qo)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jf||i===yc||i===Mc||i===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class vb extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xb={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mb=`
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

}`;class Sb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gi({vertexShader:yb,fragmentShader:Mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bb extends gs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const x=new Sb,m=t.getContextAttributes();let p=null,R=null;const E=[],M=[],N=new ue;let D=null;const I=new pn;I.viewport=new Et;const A=new pn;A.viewport=new Et;const v=[I,A],_=new vb;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=E[re];return he===void 0&&(he=new _l,E[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=E[re];return he===void 0&&(he=new _l,E[re]=he),he.getGripSpace()},this.getHand=function(re){let he=E[re];return he===void 0&&(he=new _l,E[re]=he),he.getHandSpace()};function L(re){const he=M.indexOf(re.inputSource);if(he===-1)return;const Ae=E[he];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,c||o),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let re=0;re<E.length;re++){const he=M[re];he!==null&&(M[re]=null,E[re].disconnect(he))}P=null,O=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,R=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),R=new Vi(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Ae=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?tr:Ys,Ae=m.stencil?er:us);const Pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Vi(f.textureWidth,f.textureHeight,{format:_n,type:Wn,depthTexture:new mp(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(re){for(let he=0;he<re.removed.length;he++){const Ae=re.removed[he],de=M.indexOf(Ae);de>=0&&(M[de]=null,E[de].disconnect(Ae))}for(let he=0;he<re.added.length;he++){const Ae=re.added[he];let de=M.indexOf(Ae);if(de===-1){for(let Be=0;Be<E.length;Be++)if(Be>=M.length){M.push(Ae),de=Be;break}else if(M[Be]===null){M[Be]=Ae,de=Be;break}if(de===-1)break}const Pe=E[de];Pe&&Pe.connect(Ae)}}const B=new H,K=new H;function Y(re,he,Ae){B.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(Ae.matrixWorld);const de=B.distanceTo(K),Pe=he.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,Re=Pe[14]/(Pe[10]-1),Je=Pe[14]/(Pe[10]+1),w=(Pe[9]+1)/Pe[5],U=(Pe[9]-1)/Pe[5],y=(Pe[8]-1)/Pe[0],V=(Be[8]+1)/Be[0],z=Re*y,$=Re*V,Z=de/(-y+V),ie=Z*-y;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ie),re.translateZ(Z),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Pe[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Q=Re+Z,b=Je+Z,S=z-ie,k=$+(de-ie),j=w*Je/b*Q,ee=U*Je/b*Q;re.projectionMatrix.makePerspective(S,k,j,ee,Q,b),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let he=re.near,Ae=re.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),_.near=A.near=I.near=he,_.far=A.far=I.far=Ae,(P!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,O=_.far),I.layers.mask=re.layers.mask|2,A.layers.mask=re.layers.mask|4,_.layers.mask=I.layers.mask|A.layers.mask;const de=re.parent,Pe=_.cameras;le(_,de);for(let Be=0;Be<Pe.length;Be++)le(Pe[Be],de);Pe.length===2?Y(_,I,A):_.projectionMatrix.copy(I.projectionMatrix),pe(re,_,de)};function pe(re,he,Ae){Ae===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=bc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let xe=null;function Ce(re,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(R,d.framebuffer),e.setRenderTarget(R));let de=!1;Ae.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Be=0;Be<Ae.length;Be++){const Re=Ae[Be];let Je=null;if(d!==null)Je=d.getViewport(Re);else{const U=h.getViewSubImage(f,Re);Je=U.viewport,Be===0&&(e.setRenderTargetTextures(R,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(R))}let w=v[Be];w===void 0&&(w=new pn,w.layers.enable(Be),w.viewport=new Et,v[Be]=w),w.matrix.fromArray(Re.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Re.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Je.x,Je.y,Je.width,Je.height),Be===0&&(_.matrix.copy(w.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(w)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Be=h.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&x.init(e,Be,s.renderState)}}for(let Ae=0;Ae<E.length;Ae++){const de=M[Ae],Pe=E[Ae];de!==null&&Pe!==void 0&&Pe.update(de,he,c||o)}xe&&xe(re,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ve=new fp;Ve.setAnimationLoop(Ce),this.setAnimationLoop=function(re){xe=re},this.dispose=function(){}}}const ts=new Xn,Eb=new xt;function wb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,up(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),E=R.envMap,M=R.envMapRotation;E&&(m.envMap.value=E,ts.copy(M),ts.x*=-1,ts.y*=-1,ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(ts)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,E){const M=E.program;i.uniformBlockBinding(R,M)}function c(R,E){let M=s[R.id];M===void 0&&(g(R),M=u(R),s[R.id]=M,R.addEventListener("dispose",m));const N=E.program;i.updateUBOMapping(R,N);const D=e.render.frame;r[R.id]!==D&&(f(R),r[R.id]=D)}function u(R){const E=h();R.__bindingPointIndex=E;const M=n.createBuffer(),N=R.__size,D=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,N,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const E=s[R.id],M=R.uniforms,N=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,I=M.length;D<I;D++){const A=Array.isArray(M[D])?M[D]:[M[D]];for(let v=0,_=A.length;v<_;v++){const P=A[v];if(d(P,D,v,N)===!0){const O=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let G=0;G<L.length;G++){const B=L[G],K=x(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,O+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(R,E,M,N){const D=R.value,I=E+"_"+M;if(N[I]===void 0)return typeof D=="number"||typeof D=="boolean"?N[I]=D:N[I]=D.clone(),!0;{const A=N[I];if(typeof D=="number"||typeof D=="boolean"){if(A!==D)return N[I]=D,!0}else if(A.equals(D)===!1)return A.copy(D),!0}return!1}function g(R){const E=R.uniforms;let M=0;const N=16;for(let I=0,A=E.length;I<A;I++){const v=Array.isArray(E[I])?E[I]:[E[I]];for(let _=0,P=v.length;_<P;_++){const O=v[_],L=Array.isArray(O.value)?O.value:[O.value];for(let F=0,G=L.length;F<G;F++){const B=L[F],K=x(B),Y=M%N,le=Y%K.boundary,pe=Y+le;M+=le,pe!==0&&N-pe<K.storage&&(M+=N-pe),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}const D=M%N;return D>0&&(M+=N-D),R.__size=M,R.__cache={},this}function x(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function m(R){const E=R.target;E.removeEventListener("dispose",m);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ab{constructor(e={}){const{canvas:t=dx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const R=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=Bi,this.toneMappingExposure=1;const M=this;let N=!1,D=0,I=0,A=null,v=-1,_=null;const P=new Et,O=new Et;let L=null;const F=new Ze(0);let G=0,B=t.width,K=t.height,Y=1,le=null,pe=null;const xe=new Et(0,0,B,K),Ce=new Et(0,0,B,K);let Ve=!1;const re=new Qc;let he=!1,Ae=!1;const de=new xt,Pe=new xt,Be=new H,Re=new Et,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function U(){return A===null?Y:1}let y=i;function V(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),y===null){const X="webgl2";if(y=V(X,C),y===null)throw V(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let z,$,Z,ie,Q,b,S,k,j,ee,J,fe,ae,ge,Oe,ce,ye,Ne,ze,_e,Ge,Xe,ct,W;function Se(){z=new DS(y),z.init(),Xe=new _b(y,z),$=new TS(y,z,e,Xe),Z=new pb(y,z),$.reverseDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ie=new NS(y),Q=new Q1,b=new gb(y,z,Z,Q,$,Xe,ie),S=new CS(M),k=new LS(M),j=new Vx(y),ct=new ES(y,j),ee=new IS(y,j,ie,ct),J=new OS(y,ee,j,ie),ze=new FS(y,$,b),ce=new AS(Q),fe=new J1(M,S,k,z,$,ct,ce),ae=new wb(M,Q),ge=new tb,Oe=new ab(z),Ne=new bS(M,S,k,Z,J,d,l),ye=new db(M,J,$),W=new Tb(y,ie,$,Z),_e=new wS(y,z,ie),Ge=new US(y,z,ie),ie.programs=fe.programs,M.capabilities=$,M.extensions=z,M.properties=Q,M.renderLists=ge,M.shadowMap=ye,M.state=Z,M.info=ie}Se();const se=new bb(M,y);this.xr=se,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const C=z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(B,K,!1))},this.getSize=function(C){return C.set(B,K)},this.setSize=function(C,X,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,K=X,t.width=Math.floor(C*Y),t.height=Math.floor(X*Y),te===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(C,X,te){B=C,K=X,Y=te,t.width=Math.floor(C*te),t.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,X,te,ne){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,X,te,ne),Z.viewport(P.copy(xe).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,X,te,ne){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,X,te,ne),Z.scissor(O.copy(Ce).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(C){Z.setScissorTest(Ve=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){pe=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(C=!0,X=!0,te=!0){let ne=0;if(C){let q=!1;if(A!==null){const me=A.texture.format;q=me===Zc||me===Kc||me===jc}if(q){const me=A.texture.type,we=me===Wn||me===us||me===Vr||me===er||me===$c||me===qc,Le=Ne.getClearColor(),De=Ne.getClearAlpha(),We=Le.r,Ye=Le.g,Ie=Le.b;we?(g[0]=We,g[1]=Ye,g[2]=Ie,g[3]=De,y.clearBufferuiv(y.COLOR,0,g)):(x[0]=We,x[1]=Ye,x[2]=Ie,x[3]=De,y.clearBufferiv(y.COLOR,0,x))}else ne|=y.COLOR_BUFFER_BIT}X&&(ne|=y.DEPTH_BUFFER_BIT),te&&(ne|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ge.dispose(),Oe.dispose(),Q.dispose(),S.dispose(),k.dispose(),J.dispose(),ct.dispose(),W.dispose(),fe.dispose(),se.dispose(),se.removeEventListener("sessionstart",au),se.removeEventListener("sessionend",lu),Xi.stop()};function oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=ie.autoReset,X=ye.enabled,te=ye.autoUpdate,ne=ye.needsUpdate,q=ye.type;Se(),ie.autoReset=C,ye.enabled=X,ye.autoUpdate=te,ye.needsUpdate=ne,ye.type=q}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const X=C.target;X.removeEventListener("dispose",qe),bt(X)}function bt(C){Ot(C),Q.remove(C)}function Ot(C){const X=Q.get(C).programs;X!==void 0&&(X.forEach(function(te){fe.releaseProgram(te)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,ne,q,me){X===null&&(X=Je);const we=q.isMesh&&q.matrixWorld.determinant()<0,Le=Up(C,X,te,ne,q);Z.setMaterial(ne,we);let De=te.index,We=1;if(ne.wireframe===!0){if(De=ee.getWireframeAttribute(te),De===void 0)return;We=2}const Ye=te.drawRange,Ie=te.attributes.position;let nt=Ye.start*We,mt=(Ye.start+Ye.count)*We;me!==null&&(nt=Math.max(nt,me.start*We),mt=Math.min(mt,(me.start+me.count)*We)),De!==null?(nt=Math.max(nt,0),mt=Math.min(mt,De.count)):Ie!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Ie.count));const _t=mt-nt;if(_t<0||_t===1/0)return;ct.setup(q,ne,Le,te,De);let Kt,rt=_e;if(De!==null&&(Kt=j.get(De),rt=Ge,rt.setIndex(Kt)),q.isMesh)ne.wireframe===!0?(Z.setLineWidth(ne.wireframeLinewidth*U()),rt.setMode(y.LINES)):rt.setMode(y.TRIANGLES);else if(q.isLine){let Ue=ne.linewidth;Ue===void 0&&(Ue=1),Z.setLineWidth(Ue*U()),q.isLineSegments?rt.setMode(y.LINES):q.isLineLoop?rt.setMode(y.LINE_LOOP):rt.setMode(y.LINE_STRIP)}else q.isPoints?rt.setMode(y.POINTS):q.isSprite&&rt.setMode(y.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)rt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ue=q._multiDrawStarts,jn=q._multiDrawCounts,ot=q._multiDrawCount,xn=De?j.get(De).bytesPerElement:1,vs=Q.get(ne).currentProgram.getUniforms();for(let sn=0;sn<ot;sn++)vs.setValue(y,"_gl_DrawID",sn),rt.render(Ue[sn]/xn,jn[sn])}else if(q.isInstancedMesh)rt.renderInstances(nt,_t,q.count);else if(te.isInstancedBufferGeometry){const Ue=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,jn=Math.min(te.instanceCount,Ue);rt.renderInstances(nt,_t,jn)}else rt.render(nt,_t)};function ut(C,X,te){C.transparent===!0&&C.side===Bn&&C.forceSinglePass===!1?(C.side=tn,C.needsUpdate=!0,no(C,X,te),C.side=Hi,C.needsUpdate=!0,no(C,X,te),C.side=Bn):no(C,X,te)}this.compile=function(C,X,te=null){te===null&&(te=C),p=Oe.get(te),p.init(X),E.push(p),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),C!==te&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ne=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Le=me[we];ut(Le,te,q),ne.add(Le)}else ut(me,te,q),ne.add(me)}),E.pop(),p=null,ne},this.compileAsync=function(C,X,te=null){const ne=this.compile(C,X,te);return new Promise(q=>{function me(){if(ne.forEach(function(we){Q.get(we).currentProgram.isReady()&&ne.delete(we)}),ne.size===0){q(C);return}setTimeout(me,10)}z.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let vn=null;function Yn(C){vn&&vn(C)}function au(){Xi.stop()}function lu(){Xi.start()}const Xi=new fp;Xi.setAnimationLoop(Yn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(C){vn=C,se.setAnimationLoop(C),C===null?Xi.stop():Xi.start()},se.addEventListener("sessionstart",au),se.addEventListener("sessionend",lu),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,X,A),p=Oe.get(C,E.length),p.init(X),E.push(p),Pe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(Pe),Ae=this.localClippingEnabled,he=ce.init(this.clippingPlanes,Ae),m=ge.get(C,R.length),m.init(),R.push(m),se.enabled===!0&&se.isPresenting===!0){const me=M.xr.getDepthSensingMesh();me!==null&&Ra(me,X,-1/0,M.sortObjects)}Ra(C,X,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(le,pe),w=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,w&&Ne.addToRenderList(m,C),this.info.render.frame++,he===!0&&ce.beginShadows();const te=p.state.shadowsArray;ye.render(te,C,X),he===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const me=X.cameras;if(q.length>0)for(let we=0,Le=me.length;we<Le;we++){const De=me[we];uu(ne,q,C,De)}w&&Ne.render(C);for(let we=0,Le=me.length;we<Le;we++){const De=me[we];cu(m,C,De,De.viewport)}}else q.length>0&&uu(ne,q,C,X),w&&Ne.render(C),cu(m,C,X);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(M,C,X),ct.resetDefaultState(),v=-1,_=null,E.pop(),E.length>0?(p=E[E.length-1],he===!0&&ce.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ra(C,X,te,ne){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||re.intersectsSprite(C)){ne&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pe);const we=J.update(C),Le=C.material;Le.visible&&m.push(C,we,Le,te,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||re.intersectsObject(C))){const we=J.update(C),Le=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Re.copy(we.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(Pe)),Array.isArray(Le)){const De=we.groups;for(let We=0,Ye=De.length;We<Ye;We++){const Ie=De[We],nt=Le[Ie.materialIndex];nt&&nt.visible&&m.push(C,we,nt,te,Re.z,Ie)}}else Le.visible&&m.push(C,we,Le,te,Re.z,null)}}const me=C.children;for(let we=0,Le=me.length;we<Le;we++)Ra(me[we],X,te,ne)}function cu(C,X,te,ne){const q=C.opaque,me=C.transmissive,we=C.transparent;p.setupLightsView(te),he===!0&&ce.setGlobalState(M.clippingPlanes,te),ne&&Z.viewport(P.copy(ne)),q.length>0&&to(q,X,te),me.length>0&&to(me,X,te),we.length>0&&to(we,X,te),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function uu(C,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new Vi(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?di:Wn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const me=p.state.transmissionRenderTarget[ne.id],we=ne.viewport||P;me.setSize(we.z,we.w);const Le=M.getRenderTarget();M.setRenderTarget(me),M.getClearColor(F),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),w&&Ne.render(te);const De=M.toneMapping;M.toneMapping=Bi;const We=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),he===!0&&ce.setGlobalState(M.clippingPlanes,ne),to(C,te,ne),b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me),z.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ie=0,nt=X.length;Ie<nt;Ie++){const mt=X[Ie],_t=mt.object,Kt=mt.geometry,rt=mt.material,Ue=mt.group;if(rt.side===Bn&&_t.layers.test(ne.layers)){const jn=rt.side;rt.side=tn,rt.needsUpdate=!0,hu(_t,te,ne,Kt,rt,Ue),rt.side=jn,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(me),b.updateRenderTargetMipmap(me))}M.setRenderTarget(Le),M.setClearColor(F,G),We!==void 0&&(ne.viewport=We),M.toneMapping=De}function to(C,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let q=0,me=C.length;q<me;q++){const we=C[q],Le=we.object,De=we.geometry,We=ne===null?we.material:ne,Ye=we.group;Le.layers.test(te.layers)&&hu(Le,X,te,De,We,Ye)}}function hu(C,X,te,ne,q,me){C.onBeforeRender(M,X,te,ne,q,me),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(M,X,te,ne,C,me),q.transparent===!0&&q.side===Bn&&q.forceSinglePass===!1?(q.side=tn,q.needsUpdate=!0,M.renderBufferDirect(te,X,ne,q,C,me),q.side=Hi,q.needsUpdate=!0,M.renderBufferDirect(te,X,ne,q,C,me),q.side=Bn):M.renderBufferDirect(te,X,ne,q,C,me),C.onAfterRender(M,X,te,ne,q,me)}function no(C,X,te){X.isScene!==!0&&(X=Je);const ne=Q.get(C),q=p.state.lights,me=p.state.shadowsArray,we=q.state.version,Le=fe.getParameters(C,q.state,me,X,te),De=fe.getProgramCacheKey(Le);let We=ne.programs;ne.environment=C.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(C.isMeshStandardMaterial?k:S).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",qe),We=new Map,ne.programs=We);let Ye=We.get(De);if(Ye!==void 0){if(ne.currentProgram===Ye&&ne.lightsStateVersion===we)return fu(C,Le),Ye}else Le.uniforms=fe.getUniforms(C),C.onBeforeCompile(Le,M),Ye=fe.acquireProgram(Le,De),We.set(De,Ye),ne.uniforms=Le.uniforms;const Ie=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=ce.uniform),fu(C,Le),ne.needsLights=Fp(C),ne.lightsStateVersion=we,ne.needsLights&&(Ie.ambientLightColor.value=q.state.ambient,Ie.lightProbe.value=q.state.probe,Ie.directionalLights.value=q.state.directional,Ie.directionalLightShadows.value=q.state.directionalShadow,Ie.spotLights.value=q.state.spot,Ie.spotLightShadows.value=q.state.spotShadow,Ie.rectAreaLights.value=q.state.rectArea,Ie.ltc_1.value=q.state.rectAreaLTC1,Ie.ltc_2.value=q.state.rectAreaLTC2,Ie.pointLights.value=q.state.point,Ie.pointLightShadows.value=q.state.pointShadow,Ie.hemisphereLights.value=q.state.hemi,Ie.directionalShadowMap.value=q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ie.spotShadowMap.value=q.state.spotShadowMap,Ie.spotLightMatrix.value=q.state.spotLightMatrix,Ie.spotLightMap.value=q.state.spotLightMap,Ie.pointShadowMap.value=q.state.pointShadowMap,Ie.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=Ye,ne.uniformsList=null,Ye}function du(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Yo.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function fu(C,X){const te=Q.get(C);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Up(C,X,te,ne,q){X.isScene!==!0&&(X=Je),b.resetTextureUnits();const me=X.fog,we=ne.isMeshStandardMaterial?X.environment:null,Le=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ms,De=(ne.isMeshStandardMaterial?k:S).get(ne.envMap||we),We=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ye=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ie=!!te.morphAttributes.position,nt=!!te.morphAttributes.normal,mt=!!te.morphAttributes.color;let _t=Bi;ne.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=M.toneMapping);const Kt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,rt=Kt!==void 0?Kt.length:0,Ue=Q.get(ne),jn=p.state.lights;if(he===!0&&(Ae===!0||C!==_)){const hn=C===_&&ne.id===v;ce.setState(ne,C,hn)}let ot=!1;ne.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==jn.state.version||Ue.outputColorSpace!==Le||q.isBatchedMesh&&Ue.batching===!1||!q.isBatchedMesh&&Ue.batching===!0||q.isBatchedMesh&&Ue.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ue.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||q.isInstancedMesh&&Ue.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ue.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ue.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ue.instancingMorph===!1&&q.morphTexture!==null||Ue.envMap!==De||ne.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ce.numPlanes||Ue.numIntersection!==ce.numIntersection)||Ue.vertexAlphas!==We||Ue.vertexTangents!==Ye||Ue.morphTargets!==Ie||Ue.morphNormals!==nt||Ue.morphColors!==mt||Ue.toneMapping!==_t||Ue.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ue.__version=ne.version);let xn=Ue.currentProgram;ot===!0&&(xn=no(ne,X,q));let vs=!1,sn=!1,ar=!1;const vt=xn.getUniforms(),Pn=Ue.uniforms;if(Z.useProgram(xn.program)&&(vs=!0,sn=!0,ar=!0),ne.id!==v&&(v=ne.id,sn=!0),vs||_!==C){Z.buffers.depth.getReversed()?(de.copy(C.projectionMatrix),px(de),mx(de),vt.setValue(y,"projectionMatrix",de)):vt.setValue(y,"projectionMatrix",C.projectionMatrix),vt.setValue(y,"viewMatrix",C.matrixWorldInverse);const yi=vt.map.cameraPosition;yi!==void 0&&yi.setValue(y,Be.setFromMatrixPosition(C.matrixWorld)),$.logarithmicDepthBuffer&&vt.setValue(y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&vt.setValue(y,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,sn=!0,ar=!0)}if(q.isSkinnedMesh){vt.setOptional(y,q,"bindMatrix"),vt.setOptional(y,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),vt.setValue(y,"boneTexture",hn.boneTexture,b))}q.isBatchedMesh&&(vt.setOptional(y,q,"batchingTexture"),vt.setValue(y,"batchingTexture",q._matricesTexture,b),vt.setOptional(y,q,"batchingIdTexture"),vt.setValue(y,"batchingIdTexture",q._indirectTexture,b),vt.setOptional(y,q,"batchingColorTexture"),q._colorsTexture!==null&&vt.setValue(y,"batchingColorTexture",q._colorsTexture,b));const lr=te.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&ze.update(q,te,xn),(sn||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,vt.setValue(y,"receiveShadow",q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Pn.envMap.value=De,Pn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Pn.envMapIntensity.value=X.environmentIntensity),sn&&(vt.setValue(y,"toneMappingExposure",M.toneMappingExposure),Ue.needsLights&&Np(Pn,ar),me&&ne.fog===!0&&ae.refreshFogUniforms(Pn,me),ae.refreshMaterialUniforms(Pn,ne,Y,K,p.state.transmissionRenderTarget[C.id]),Yo.upload(y,du(Ue),Pn,b)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Yo.upload(y,du(Ue),Pn,b),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&vt.setValue(y,"center",q.center),vt.setValue(y,"modelViewMatrix",q.modelViewMatrix),vt.setValue(y,"normalMatrix",q.normalMatrix),vt.setValue(y,"modelMatrix",q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const hn=ne.uniformsGroups;for(let yi=0,Mi=hn.length;yi<Mi;yi++){const pu=hn[yi];W.update(pu,xn),W.bind(pu,xn)}}return xn}function Np(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Fp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,X,te){Q.get(C.texture).__webglTexture=X,Q.get(C.depthTexture).__webglTexture=te;const ne=Q.get(C);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const te=Q.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){A=C,D=X,I=te;let ne=!0,q=null,me=!1,we=!1;if(C){const De=Q.get(C);if(De.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(y.FRAMEBUFFER,null),ne=!1;else if(De.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(De.__hasExternalTextures)b.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ie=C.depthTexture;if(De.__boundDepthTexture!==Ie){if(Ie!==null&&Q.has(Ie)&&(C.width!==Ie.image.width||C.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Ye=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?q=Ye[X][te]:q=Ye[X],me=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?q=Q.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?q=Ye[te]:q=Ye,P.copy(C.viewport),O.copy(C.scissor),L=C.scissorTest}else P.copy(xe).multiplyScalar(Y).floor(),O.copy(Ce).multiplyScalar(Y).floor(),L=Ve;if(Z.bindFramebuffer(y.FRAMEBUFFER,q)&&ne&&Z.drawBuffers(C,q),Z.viewport(P),Z.scissor(O),Z.setScissorTest(L),me){const De=Q.get(C.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,te)}else if(we){const De=Q.get(C.texture),We=X||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,De.__webglTexture,te||0,We)}v=-1},this.readRenderTargetPixels=function(C,X,te,ne,q,me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Z.bindFramebuffer(y.FRAMEBUFFER,Le);try{const De=C.texture,We=De.format,Ye=De.type;if(!$.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ne&&te>=0&&te<=C.height-q&&y.readPixels(X,te,ne,q,Xe.convert(We),Xe.convert(Ye),me)}finally{const De=A!==null?Q.get(A).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(C,X,te,ne,q,me,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){const De=C.texture,We=De.format,Ye=De.type;if(!$.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-ne&&te>=0&&te<=C.height-q){Z.bindFramebuffer(y.FRAMEBUFFER,Le);const Ie=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ie),y.bufferData(y.PIXEL_PACK_BUFFER,me.byteLength,y.STREAM_READ),y.readPixels(X,te,ne,q,Xe.convert(We),Xe.convert(Ye),0);const nt=A!==null?Q.get(A).__webglFramebuffer:null;Z.bindFramebuffer(y.FRAMEBUFFER,nt);const mt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await fx(y,mt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ie),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,me),y.deleteBuffer(Ie),y.deleteSync(mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,te=0){C.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const ne=Math.pow(2,-te),q=Math.floor(C.image.width*ne),me=Math.floor(C.image.height*ne),we=X!==null?X.x:0,Le=X!==null?X.y:0;b.setTexture2D(C,0),y.copyTexSubImage2D(y.TEXTURE_2D,te,0,0,we,Le,q,me),Z.unbindTexture()},this.copyTextureToTexture=function(C,X,te=null,ne=null,q=0){C.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,C=arguments[1],X=arguments[2],q=arguments[3]||0,te=null);let me,we,Le,De,We,Ye,Ie,nt,mt;const _t=C.isCompressedTexture?C.mipmaps[q]:C.image;te!==null?(me=te.max.x-te.min.x,we=te.max.y-te.min.y,Le=te.isBox3?te.max.z-te.min.z:1,De=te.min.x,We=te.min.y,Ye=te.isBox3?te.min.z:0):(me=_t.width,we=_t.height,Le=_t.depth||1,De=0,We=0,Ye=0),ne!==null?(Ie=ne.x,nt=ne.y,mt=ne.z):(Ie=0,nt=0,mt=0);const Kt=Xe.convert(X.format),rt=Xe.convert(X.type);let Ue;X.isData3DTexture?(b.setTexture3D(X,0),Ue=y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),Ue=y.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),Ue=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,X.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,X.unpackAlignment);const jn=y.getParameter(y.UNPACK_ROW_LENGTH),ot=y.getParameter(y.UNPACK_IMAGE_HEIGHT),xn=y.getParameter(y.UNPACK_SKIP_PIXELS),vs=y.getParameter(y.UNPACK_SKIP_ROWS),sn=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,_t.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_t.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,De),y.pixelStorei(y.UNPACK_SKIP_ROWS,We),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ye);const ar=C.isDataArrayTexture||C.isData3DTexture,vt=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Pn=Q.get(C),lr=Q.get(X),hn=Q.get(Pn.__renderTarget),yi=Q.get(lr.__renderTarget);Z.bindFramebuffer(y.READ_FRAMEBUFFER,hn.__webglFramebuffer),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Mi=0;Mi<Le;Mi++)ar&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Q.get(C).__webglTexture,q,Ye+Mi),C.isDepthTexture?(vt&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Q.get(X).__webglTexture,q,mt+Mi),y.blitFramebuffer(De,We,me,we,Ie,nt,me,we,y.DEPTH_BUFFER_BIT,y.NEAREST)):vt?y.copyTexSubImage3D(Ue,q,Ie,nt,mt+Mi,De,We,me,we):y.copyTexSubImage2D(Ue,q,Ie,nt,mt+Mi,De,We,me,we);Z.bindFramebuffer(y.READ_FRAMEBUFFER,null),Z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else vt?C.isDataTexture||C.isData3DTexture?y.texSubImage3D(Ue,q,Ie,nt,mt,me,we,Le,Kt,rt,_t.data):X.isCompressedArrayTexture?y.compressedTexSubImage3D(Ue,q,Ie,nt,mt,me,we,Le,Kt,_t.data):y.texSubImage3D(Ue,q,Ie,nt,mt,me,we,Le,Kt,rt,_t):C.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,q,Ie,nt,me,we,Kt,rt,_t.data):C.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,q,Ie,nt,_t.width,_t.height,Kt,_t.data):y.texSubImage2D(y.TEXTURE_2D,q,Ie,nt,me,we,Kt,rt,_t);y.pixelStorei(y.UNPACK_ROW_LENGTH,jn),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(y.UNPACK_SKIP_PIXELS,xn),y.pixelStorei(y.UNPACK_SKIP_ROWS,vs),y.pixelStorei(y.UNPACK_SKIP_IMAGES,sn),q===0&&X.generateMipmaps&&y.generateMipmap(Ue),Z.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te=null,ne=null,q=0){return C.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,C=arguments[2],X=arguments[3],q=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,te,ne,q)},this.initRenderTarget=function(C){Q.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Z.unbindTexture()},this.resetState=function(){D=0,I=0,A=null,Z.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Cb extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rb extends Nt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=un,u=un,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi extends rr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new H,oa=new H,id=new xt,_r=new Jc,Ro=new Ta,vl=new H,sd=new H;class Pb extends Ft{constructor(e=new nn,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ra.fromBufferAttribute(t,s-1),oa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ra.distanceTo(oa);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;id.copy(s).invert(),_r.copy(e.ray).applyMatrix4(id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=u.getX(x),R=u.getX(x+1),E=Po(this,e,_r,l,p,R);E&&t.push(E)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=Po(this,e,_r,l,x,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=Po(this,e,_r,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Po(this,e,_r,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Po(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(ra.fromBufferAttribute(o,s),oa.fromBufferAttribute(o,r),t.distanceSqToSegment(ra,oa,vl,sd)>i)return;vl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(vl);if(!(l<e.near||l>e.far))return{distance:l,point:sd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const rd=new H,od=new H;class _s extends Pb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)rd.fromBufferAttribute(t,s),od.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+rd.distanceTo(od);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lb extends Nt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new H,s=[],r=[],o=[],a=new H,l=new xt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Pt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tu extends qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Db extends tu{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Lo=new H,xl=new nu,yl=new nu,Ml=new nu;class iu extends qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Lo.subVectors(s[0],s[1]).add(s[0]),c=Lo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),xl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),yl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Ml.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),yl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ml.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(xl.calc(l),yl.calc(l),Ml.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ad(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ib(n,e){const t=1-n;return t*t*e}function Ub(n,e){return 2*(1-n)*n*e}function Nb(n,e){return n*n*e}function Lr(n,e,t,i){return Ib(n,e)+Ub(n,t)+Nb(n,i)}function Fb(n,e){const t=1-n;return t*t*t*e}function Ob(n,e){const t=1-n;return 3*t*t*n*e}function kb(n,e){return 3*(1-n)*n*n*e}function Bb(n,e){return n*n*n*e}function Dr(n,e,t,i,s){return Fb(n,e)+Ob(n,t)+kb(n,i)+Bb(n,s)}class yp extends qn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zb extends qn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y),Dr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mp extends qn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hb extends qn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sp extends qn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bp extends qn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y),Lr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ep extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(ad(a,l.x,c.x,u.x,h.x),ad(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:Db,CatmullRomCurve3:iu,CubicBezierCurve:yp,CubicBezierCurve3:zb,EllipseCurve:tu,LineCurve:Mp,LineCurve3:Hb,QuadraticBezierCurve:Sp,QuadraticBezierCurve3:bp,SplineCurve:Ep});class Vb extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new aa[s.type]().fromJSON(s))}return this}}class ld extends Vb{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Mp(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Sp(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new yp(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ep(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new tu(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class su extends nn{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new H,f=new ue,d=new H,g=new H,x=new H;let m=0,p=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:m=e[R+1].x-e[R].x,p=e[R+1].y-e[R].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[R+1].x-e[R].x,p=e[R+1].y-e[R].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let R=0;R<=t;R++){const E=i+R*u*s,M=Math.sin(E),N=Math.cos(E);for(let D=0;D<=e.length-1;D++){h.x=e[D].x*M,h.y=e[D].y,h.z=e[D].x*N,o.push(h.x,h.y,h.z),f.x=R/t,f.y=D/(e.length-1),a.push(f.x,f.y);const I=l[3*D+0]*M,A=l[3*D+1],v=l[3*D+0]*N;c.push(I,A,v)}}for(let R=0;R<t;R++)for(let E=0;E<e.length-1;E++){const M=E+R*e.length,N=M,D=M+e.length,I=M+e.length+1,A=M+1;r.push(N,D,A),r.push(I,A,D)}this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("uv",new St(a,2)),this.setAttribute("normal",new St(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.points,e.segments,e.phiStart,e.phiLength)}}class ui extends nn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=i/2;let p=0;R(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(d,2));function R(){const M=new H,N=new H;let D=0;const I=(t-e)/i;for(let A=0;A<=r;A++){const v=[],_=A/r,P=_*(t-e)+e;for(let O=0;O<=s;O++){const L=O/s,F=L*l+a,G=Math.sin(F),B=Math.cos(F);N.x=P*G,N.y=-_*i+m,N.z=P*B,h.push(N.x,N.y,N.z),M.set(G,I,B).normalize(),f.push(M.x,M.y,M.z),d.push(L,1-_),v.push(g++)}x.push(v)}for(let A=0;A<s;A++)for(let v=0;v<r;v++){const _=x[v][A],P=x[v+1][A],O=x[v+1][A+1],L=x[v][A+1];(e>0||v!==0)&&(u.push(_,P,L),D+=3),(t>0||v!==r-1)&&(u.push(P,O,L),D+=3)}c.addGroup(p,D,0),p+=D}function E(M){const N=g,D=new ue,I=new H;let A=0;const v=M===!0?e:t,_=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const F=O/s*l+a,G=Math.cos(F),B=Math.sin(F);I.x=v*B,I.y=m*_,I.z=v*G,h.push(I.x,I.y,I.z),f.push(0,_,0),D.x=G*.5+.5,D.y=B*.5*_+.5,d.push(D.x,D.y),g++}for(let O=0;O<s;O++){const L=N+O,F=P+O;M===!0?u.push(F,F+1,L):u.push(F+1,F,L),A+=3}c.addGroup(p,A,M===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Do=new H,Io=new H,Sl=new H,Uo=new mn;class ds extends nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Pr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:p}=Uo;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Uo.getNormal(Sl),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let R=0;R<3;R++){const E=(R+1)%3,M=h[R],N=h[E],D=Uo[u[R]],I=Uo[u[E]],A=`${M}_${N}`,v=`${N}_${M}`;v in f&&f[v]?(Sl.dot(f[v].normal)<=r&&(d.push(D.x,D.y,D.z),d.push(I.x,I.y,I.z)),f[v]=null):A in f||(f[A]={index0:c[R],index1:c[E],normal:Sl.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:m}=f[g];Do.fromBufferAttribute(a,x),Io.fromBufferAttribute(a,m),d.push(Do.x,Do.y,Do.z),d.push(Io.x,Io.y,Io.z)}this.setAttribute("position",new St(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wp extends ld{constructor(e){super(e),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ld().fromJSON(s))}return this}}const Gb={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Tp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=Yb(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Wr(r,o,t,a,l,d,0),o}};function Tp(n,e,t,i,s){let r,o;if(s===rE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=cd(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=cd(r,n[r],n[r+1],o);return o&&Ca(o,o.next)&&($r(o),o=o.next),o}function fs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ca(t,t.next)||Mt(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Wr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Qb(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Xb(n,i,s,r):Wb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),$r(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$b(fs(n),e,t),Wr(n,e,t,i,s,r,2)):o===2&&qb(n,e,t,i,s,r):Wr(fs(n),e,t,i,s,r,1);break}}}function Wb(n){const e=n.prev,t=n,i=n.next;if(Mt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Hs(s,a,r,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xb(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Mt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=wc(d,g,e,t,i),R=wc(x,m,e,t,i);let E=n.prevZ,M=n.nextZ;for(;E&&E.z>=p&&M&&M.z<=R;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Hs(a,u,l,h,c,f,E.x,E.y)&&Mt(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Hs(a,u,l,h,c,f,M.x,M.y)&&Mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Hs(a,u,l,h,c,f,E.x,E.y)&&Mt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=R;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Hs(a,u,l,h,c,f,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $b(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ca(s,r)&&Ap(s,i,i.next,r)&&Xr(s,r)&&Xr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),$r(i),$r(i.next),i=n=r),i=i.next}while(i!==n);return fs(i)}function qb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nE(o,a)){let l=Cp(o,a);o=fs(o,o.next),l=fs(l,l.next),Wr(o,e,t,i,s,r,0),Wr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Yb(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Tp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(tE(c));for(s.sort(jb),r=0;r<s.length;r++)t=Kb(s[r],t);return t}function jb(n,e){return n.x-e.x}function Kb(n,e){const t=Zb(n,e);if(!t)return e;const i=Cp(t,n);return fs(i,i.next),fs(t,t.next)}function Zb(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Hs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Xr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Jb(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Jb(n,e){return Mt(n.prev,n,e.prev)<0&&Mt(e.next,n,n.next)<0}function Qb(n,e,t,i){let s=n;do s.z===0&&(s.z=wc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,eE(s)}function eE(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function wc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function tE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function nE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!iE(n,e)&&(Xr(n,e)&&Xr(e,n)&&sE(n,e)&&(Mt(n.prev,n,e.prev)||Mt(n,e.prev,e))||Ca(n,e)&&Mt(n.prev,n,n.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ca(n,e){return n.x===e.x&&n.y===e.y}function Ap(n,e,t,i){const s=Fo(Mt(n,e,t)),r=Fo(Mt(n,e,i)),o=Fo(Mt(t,i,n)),a=Fo(Mt(t,i,e));return!!(s!==r&&o!==a||s===0&&No(n,t,e)||r===0&&No(n,i,e)||o===0&&No(t,n,i)||a===0&&No(t,e,i))}function No(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fo(n){return n>0?1:n<0?-1:0}function iE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ap(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Xr(n,e){return Mt(n.prev,n,n.next)<0?Mt(n,e,n.next)>=0&&Mt(n,n.prev,e)>=0:Mt(n,e,n.prev)<0||Mt(n,n.next,e)<0}function sE(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cp(n,e){const t=new Tc(n.i,n.x,n.y),i=new Tc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function cd(n,e,t,i){const s=new Tc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ir{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ir.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];ud(e),hd(i,e);let o=e.length;t.forEach(ud);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,hd(i,t[l]);const a=Gb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ud(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function hd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ru extends nn{constructor(e=new wp([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:oE;let E,M=!1,N,D,I,A;p&&(E=p.getSpacedPoints(u),M=!0,f=!1,N=p.computeFrenetFrames(u,!1),D=new H,I=new H,A=new H),f||(m=0,d=0,g=0,x=0);const v=a.extractPoints(c);let _=v.shape;const P=v.holes;if(!Ir.isClockWise(_)){_=_.reverse();for(let w=0,U=P.length;w<U;w++){const y=P[w];Ir.isClockWise(y)&&(P[w]=y.reverse())}}const L=Ir.triangulateShape(_,P),F=_;for(let w=0,U=P.length;w<U;w++){const y=P[w];_=_.concat(y)}function G(w,U,y){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(U,y)}const B=_.length,K=L.length;function Y(w,U,y){let V,z,$;const Z=w.x-U.x,ie=w.y-U.y,Q=y.x-w.x,b=y.y-w.y,S=Z*Z+ie*ie,k=Z*b-ie*Q;if(Math.abs(k)>Number.EPSILON){const j=Math.sqrt(S),ee=Math.sqrt(Q*Q+b*b),J=U.x-ie/j,fe=U.y+Z/j,ae=y.x-b/ee,ge=y.y+Q/ee,Oe=((ae-J)*b-(ge-fe)*Q)/(Z*b-ie*Q);V=J+Z*Oe-w.x,z=fe+ie*Oe-w.y;const ce=V*V+z*z;if(ce<=2)return new ue(V,z);$=Math.sqrt(ce/2)}else{let j=!1;Z>Number.EPSILON?Q>Number.EPSILON&&(j=!0):Z<-Number.EPSILON?Q<-Number.EPSILON&&(j=!0):Math.sign(ie)===Math.sign(b)&&(j=!0),j?(V=-ie,z=Z,$=Math.sqrt(S)):(V=Z,z=ie,$=Math.sqrt(S/2))}return new ue(V/$,z/$)}const le=[];for(let w=0,U=F.length,y=U-1,V=w+1;w<U;w++,y++,V++)y===U&&(y=0),V===U&&(V=0),le[w]=Y(F[w],F[y],F[V]);const pe=[];let xe,Ce=le.concat();for(let w=0,U=P.length;w<U;w++){const y=P[w];xe=[];for(let V=0,z=y.length,$=z-1,Z=V+1;V<z;V++,$++,Z++)$===z&&($=0),Z===z&&(Z=0),xe[V]=Y(y[V],y[$],y[Z]);pe.push(xe),Ce=Ce.concat(xe)}for(let w=0;w<m;w++){const U=w/m,y=d*Math.cos(U*Math.PI/2),V=g*Math.sin(U*Math.PI/2)+x;for(let z=0,$=F.length;z<$;z++){const Z=G(F[z],le[z],V);de(Z.x,Z.y,-y)}for(let z=0,$=P.length;z<$;z++){const Z=P[z];xe=pe[z];for(let ie=0,Q=Z.length;ie<Q;ie++){const b=G(Z[ie],xe[ie],V);de(b.x,b.y,-y)}}}const Ve=g+x;for(let w=0;w<B;w++){const U=f?G(_[w],Ce[w],Ve):_[w];M?(I.copy(N.normals[0]).multiplyScalar(U.x),D.copy(N.binormals[0]).multiplyScalar(U.y),A.copy(E[0]).add(I).add(D),de(A.x,A.y,A.z)):de(U.x,U.y,0)}for(let w=1;w<=u;w++)for(let U=0;U<B;U++){const y=f?G(_[U],Ce[U],Ve):_[U];M?(I.copy(N.normals[w]).multiplyScalar(y.x),D.copy(N.binormals[w]).multiplyScalar(y.y),A.copy(E[w]).add(I).add(D),de(A.x,A.y,A.z)):de(y.x,y.y,h/u*w)}for(let w=m-1;w>=0;w--){const U=w/m,y=d*Math.cos(U*Math.PI/2),V=g*Math.sin(U*Math.PI/2)+x;for(let z=0,$=F.length;z<$;z++){const Z=G(F[z],le[z],V);de(Z.x,Z.y,h+y)}for(let z=0,$=P.length;z<$;z++){const Z=P[z];xe=pe[z];for(let ie=0,Q=Z.length;ie<Q;ie++){const b=G(Z[ie],xe[ie],V);M?de(b.x,b.y+E[u-1].y,E[u-1].x+y):de(b.x,b.y,h+y)}}}re(),he();function re(){const w=s.length/3;if(f){let U=0,y=B*U;for(let V=0;V<K;V++){const z=L[V];Pe(z[2]+y,z[1]+y,z[0]+y)}U=u+m*2,y=B*U;for(let V=0;V<K;V++){const z=L[V];Pe(z[0]+y,z[1]+y,z[2]+y)}}else{for(let U=0;U<K;U++){const y=L[U];Pe(y[2],y[1],y[0])}for(let U=0;U<K;U++){const y=L[U];Pe(y[0]+B*u,y[1]+B*u,y[2]+B*u)}}i.addGroup(w,s.length/3-w,0)}function he(){const w=s.length/3;let U=0;Ae(F,U),U+=F.length;for(let y=0,V=P.length;y<V;y++){const z=P[y];Ae(z,U),U+=z.length}i.addGroup(w,s.length/3-w,1)}function Ae(w,U){let y=w.length;for(;--y>=0;){const V=y;let z=y-1;z<0&&(z=w.length-1);for(let $=0,Z=u+m*2;$<Z;$++){const ie=B*$,Q=B*($+1),b=U+V+ie,S=U+z+ie,k=U+z+Q,j=U+V+Q;Be(b,S,k,j)}}}function de(w,U,y){l.push(w),l.push(U),l.push(y)}function Pe(w,U,y){Re(w),Re(U),Re(y);const V=s.length/3,z=R.generateTopUV(i,s,V-3,V-2,V-1);Je(z[0]),Je(z[1]),Je(z[2])}function Be(w,U,y,V){Re(w),Re(U),Re(V),Re(U),Re(y),Re(V);const z=s.length/3,$=R.generateSideWallUV(i,s,z-6,z-3,z-2,z-1);Je($[0]),Je($[1]),Je($[3]),Je($[1]),Je($[2]),Je($[3])}function Re(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function Je(w){r.push(w.x),r.push(w.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return aE(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new aa[s.type]().fromJSON(s)),new ru(i,e.options)}}const oE={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ue(r,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(f,1-g),new ue(x,1-p)]:[new ue(a,1-l),new ue(u,1-h),new ue(d,1-g),new ue(m,1-p)]}};function aE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}let lE=class Rp extends nn{constructor(e=new bp(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new H,l=new H,c=new ue;let u=new H;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(d,2));function x(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),R(),p()}function m(E){u=e.getPointAt(E/t,u);const M=o.normals[E],N=o.binormals[E];for(let D=0;D<=s;D++){const I=D/s*Math.PI*2,A=Math.sin(I),v=-Math.cos(I);l.x=v*M.x+A*N.x,l.y=v*M.y+A*N.y,l.z=v*M.z+A*N.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){const N=(s+1)*(E-1)+(M-1),D=(s+1)*E+(M-1),I=(s+1)*E+M,A=(s+1)*(E-1)+M;g.push(N,D,A),g.push(D,I,A)}}function R(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Rp(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};class qr extends rr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const la={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class cE{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const uE=new cE;class Qr{constructor(e){this.manager=e!==void 0?e:uE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class hE extends Error{constructor(e,t){super(e),this.response=t}}class dE extends Qr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=la.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:i,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ii[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){R();function R(){h.read().then(({done:E,value:M})=>{if(E)p.close();else{x+=M.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let D=0,I=u.length;D<I;D++){const A=u[D];A.onProgress&&A.onProgress(N)}p.enqueue(M),R()}},E=>{p.error(E)})}}});return new Response(m)}else throw new hE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{la.add(e,c);const u=ii[e];delete ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fE extends Qr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=la.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Gr("img");function l(){u(),la.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class pE extends Qr{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new Rb,a=new dE(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:hi,o.wrapT=c.wrapT!==void 0?c.wrapT:hi,o.magFilter=c.magFilter!==void 0?c.magFilter:jt,o.minFilter=c.minFilter!==void 0?c.minFilter:jt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Fi),c.mipmapCount===1&&(o.minFilter=jt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class Pp extends Qr{constructor(e){super(e)}load(e,t,i,s){const r=new Nt,o=new fE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Lp extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const bl=new xt,dd=new H,fd=new H;class mE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gE extends mE{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends Lp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new gE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _E extends Lp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class md{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vE extends _s{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ze(i),s=new Ze(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=f===r?i:s;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}const u=new nn;u.setAttribute("position",new St(l,3)),u.setAttribute("color",new St(c,3));const h=new Wi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xE extends gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);class ns{static async captureCanvas(e,t,i,s){return new Promise((r,o)=>{try{const{format:a,quality:l,width:c,height:u,background:h,resolutionMultiplier:f}=s,d=new ue;e.getSize(d);const g=e.getPixelRatio(),x=new Ze,m=e.getClearAlpha();e.getClearColor(x);const p=c*f,R=u*f,E=new Vi(p,R,{samples:4,format:a==="png"?_n:Yc,type:Wn});if(h==="transparent")e.setClearColor(0,0);else if(h==="white")e.setClearColor(16777215,1);else{const _=new Ze(h);e.setClearColor(_,1)}e.setRenderTarget(E),e.setSize(p,R),e.setPixelRatio(1),e.render(t,i);const M=new Uint8Array(p*R*4);e.readRenderTargetPixels(E,0,0,p,R,M);const N=document.createElement("canvas");N.width=c,N.height=u;const D=N.getContext("2d");if(!D)throw new Error("Failed to get canvas context");const I=D.createImageData(p,R);I.data.set(M);const A=document.createElement("canvas");A.width=p,A.height=R;const v=A.getContext("2d");if(!v)throw new Error("Failed to get temp canvas context");v.putImageData(I,0,0),D.imageSmoothingEnabled=!0,D.imageSmoothingQuality="high",D.drawImage(A,0,0,p,R,0,0,c,u),N.toBlob(_=>{_?(e.setRenderTarget(null),e.setSize(d.width,d.height),e.setPixelRatio(g),e.setClearColor(x,m),E.dispose(),r(_)):o(new Error("Failed to create blob"))},a==="png"?"image/png":"image/jpeg",a==="jpg"?l:void 0)}catch(a){o(a)}})}static generateFilename(e="mockup",t,i){const r=(i||new Date).toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,19);return`${e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${r}.${t}`}static downloadBlob(e,t){const i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}static async batchExport(e,t,i,s){const{angles:r,...o}=s,a=[],l=i.position.clone(),c=i.rotation.clone();for(const u of r){this.setCameraForAngle(i,u);const h=await this.captureCanvas(e,t,i,o);a.push(h)}return i.position.copy(l),i.rotation.copy(c),a}static setCameraForAngle(e,t){switch(t){case"front":e.position.set(0,0,15),e.lookAt(0,0,0);break;case"back":e.position.set(0,0,-15),e.lookAt(0,0,0);break;case"top":e.position.set(0,15,0),e.lookAt(0,0,0);break;case"isometric":e.position.set(15,15,15),e.lookAt(0,0,0);break}}static async createZip(e,t){try{const i=await Ev(()=>import("./jszip.min-BiHF8TMC.js").then(r=>r.j),[]),s=new i.default;for(let r=0;r<e.length;r++)s.file(t[r],e[r]);return await s.generateAsync({type:"blob"})}catch(i){throw console.error("Failed to create ZIP:",i),new Error("Failed to create ZIP archive. Please try exporting individual images.")}}}const yE={class:"bg-white rounded-xl shadow-lg p-6"},ME={class:"space-y-6"},SE={class:"grid grid-cols-2 gap-3"},bE=["onClick"],EE={class:"grid grid-cols-3 gap-3"},wE=["onClick"],TE={class:"text-center"},AE={class:"font-medium text-gray-800"},CE={class:"text-xs text-gray-500 mt-1"},RE={key:0},PE={class:"flex items-center justify-between mb-2"},LE={class:"text-sm font-medium text-indigo-600"},DE={class:"grid grid-cols-3 gap-3 mb-4"},IE=["onClick"],UE={class:"text-xs font-medium text-gray-700"},NE={key:0,class:"mt-4"},FE={class:"flex items-center gap-3"},OE={class:"border-t border-gray-200 pt-6"},kE={class:"bg-gray-50 rounded-lg p-4"},BE={class:"flex items-center justify-between mb-2"},zE={class:"text-sm font-medium text-gray-800"},HE={class:"flex items-center justify-between mb-2"},VE={class:"text-sm font-medium text-gray-800"},GE={class:"flex items-center justify-between"},WE={class:"text-sm font-medium text-gray-800"},XE={class:"space-y-3"},$E=["disabled"],qE={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},YE={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},jE=["disabled"],KE={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},ZE={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},JE={class:"flex items-center gap-2"},QE={key:0,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ew={key:1,class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},tw={class:"text-sm font-medium"},nw=Rn({__name:"ExportPanel",props:{templateName:{default:"mockup"},sceneManager:{}},emits:["export","batchExport","error"],setup(n,{emit:e}){const t=n,i=e,s=["png","jpg"],r=Fe("png"),o=[{label:"Standard",value:1,dimensions:"1920×1080"},{label:"HD",value:2,dimensions:"3840×2160"},{label:"Ultra",value:4,dimensions:"7680×4320"}],a=Fe(1),l=Fe(90),c=[{label:"Transparent",value:"transparent"},{label:"White",value:"white"},{label:"Custom",value:"custom"}],u=Fe("transparent"),h=Fe("#3b82f6"),f=Fe(!1),d=Fe(null),g=ln(()=>{const _=a.value;return`${1920*_}×${1080*_}`}),x=ln(()=>ns.generateFilename(t.templateName,r.value)),m=ln(()=>{const A=r.value==="png"?"~2-5 MB":"~0.5-2 MB",v=a.value;return v===2?`~${A} × 2`:v===4?`~${A} × 4`:A}),p=()=>{/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(h.value)||(h.value="#3b82f6")},R=()=>u.value==="custom"?h.value:u.value,E=()=>({format:r.value,quality:l.value/100,width:1920,height:1080,background:R(),resolutionMultiplier:a.value}),M=()=>({angles:["front","back","top","isometric"],...E()}),N=(A,v,_=3e3)=>{d.value={type:A,message:v},setTimeout(()=>{d.value=null},_)},D=async()=>{if(!(f.value||!t.sceneManager)){f.value=!0,d.value=null;try{const A=t.sceneManager.getRenderer(),v=t.sceneManager.getScene(),_=t.sceneManager.getCamera(),P=E(),O=await ns.captureCanvas(A,v,_,P),L=ns.generateFilename(t.templateName,P.format);ns.downloadBlob(O,L),i("export",O,L),N("success",`Image exported successfully: ${L}`)}catch(A){console.error("Export failed:",A),i("error",A),N("error","Failed to export image. Please try again.")}finally{f.value=!1}}},I=async()=>{if(!(f.value||!t.sceneManager)){f.value=!0,d.value=null;try{const A=t.sceneManager.getRenderer(),v=t.sceneManager.getScene(),_=t.sceneManager.getCamera(),P=M(),O=await ns.batchExport(A,v,_,P),L=P.angles.map(B=>{const Y=new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").slice(0,19);return`${t.templateName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${B}-${Y}.${P.format}`}),F=await ns.createZip(O,L),G=`${t.templateName}-angles-${new Date().toISOString().slice(0,10)}.zip`;ns.downloadBlob(F,G),i("batchExport",O,L),N("success",`Batch exported successfully: ${G}`)}catch(A){console.error("Batch export failed:",A),i("error",A),N("error","Failed to export batch. Please try again.")}finally{f.value=!1}}};return zn(r,A=>{A==="png"&&u.value==="transparent"||A==="jpg"&&u.value==="transparent"&&(u.value="white")}),zn(u,A=>{r.value==="jpg"&&A==="transparent"&&(u.value="white")}),(A,v)=>(Me(),be("div",yE,[v[20]||(v[20]=T("h2",{class:"text-xl font-semibold mb-4 text-gray-800"},"Export Settings",-1)),T("div",ME,[T("div",null,[v[3]||(v[3]=T("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Format",-1)),T("div",SE,[(Me(),be(yt,null,Vn(s,_=>T("button",{key:_,onClick:P=>r.value=_,class:pt(["px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium",r.value===_?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"])},He(_.toUpperCase()),11,bE)),64))])]),T("div",null,[v[4]||(v[4]=T("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Resolution",-1)),T("div",EE,[(Me(),be(yt,null,Vn(o,_=>T("button",{key:_.value,onClick:P=>a.value=_.value,class:pt(["px-3 py-3 rounded-lg border-2 transition-all duration-200",a.value===_.value?"border-indigo-500 bg-indigo-50":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"])},[T("div",TE,[T("div",AE,He(_.label),1),T("div",CE,He(_.dimensions),1)])],10,wE)),64))])]),r.value==="jpg"?(Me(),be("div",RE,[T("div",PE,[v[5]||(v[5]=T("label",{class:"text-sm font-medium text-gray-700"},"Quality",-1)),T("span",LE,He(l.value)+"%",1)]),Ui(T("input",{"onUpdate:modelValue":v[0]||(v[0]=_=>l.value=_),type:"range",min:"50",max:"100",step:"5",class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"},null,512),[[Ni,l.value]]),v[6]||(v[6]=T("div",{class:"flex justify-between text-xs text-gray-500 mt-1"},[T("span",null,"Low"),T("span",null,"Medium"),T("span",null,"High")],-1))])):Ct("",!0),T("div",null,[v[9]||(v[9]=T("label",{class:"block text-sm font-medium text-gray-700 mb-3"},"Background",-1)),T("div",DE,[(Me(),be(yt,null,Vn(c,_=>T("button",{key:_.value,onClick:P=>u.value=_.value,class:pt(["px-3 py-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center",u.value===_.value?"border-indigo-500 bg-indigo-50":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"])},[T("div",{class:"w-8 h-8 rounded-full mb-2 border border-gray-300",style:fa({backgroundColor:_.value==="transparent"?"transparent":_.value==="white"?"#ffffff":_.value,backgroundImage:_.value==="transparent"?"linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb)":"none",backgroundSize:"20px 20px",backgroundPosition:"0 0, 10px 10px"})},null,4),T("span",UE,He(_.label),1)],10,IE)),64))]),u.value==="custom"?(Me(),be("div",NE,[v[7]||(v[7]=T("label",{class:"block text-sm font-medium text-gray-700 mb-2"},"Custom Color",-1)),T("div",FE,[Ui(T("input",{"onUpdate:modelValue":v[1]||(v[1]=_=>h.value=_),type:"color",class:"w-12 h-12 cursor-pointer rounded-lg border border-gray-300"},null,512),[[Ni,h.value]]),Ui(T("input",{"onUpdate:modelValue":v[2]||(v[2]=_=>h.value=_),type:"text",placeholder:"#RRGGBB",class:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",onInput:p},null,544),[[Ni,h.value]])]),v[8]||(v[8]=T("div",{class:"mt-2 text-xs text-gray-500"}," Enter hex color code or use the color picker ",-1))])):Ct("",!0)]),T("div",OE,[v[13]||(v[13]=T("h3",{class:"text-sm font-medium text-gray-700 mb-3"},"Preview",-1)),T("div",kE,[T("div",BE,[v[10]||(v[10]=T("span",{class:"text-sm text-gray-600"},"File name:",-1)),T("span",zE,He(x.value),1)]),T("div",HE,[v[11]||(v[11]=T("span",{class:"text-sm text-gray-600"},"Dimensions:",-1)),T("span",VE,He(g.value),1)]),T("div",GE,[v[12]||(v[12]=T("span",{class:"text-sm text-gray-600"},"Size:",-1)),T("span",WE,He(m.value),1)])])]),T("div",XE,[T("button",{onClick:D,disabled:f.value,class:pt(["w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",f.value?"bg-indigo-400 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-700 text-white"])},[f.value?(Me(),be("svg",qE,[...v[14]||(v[14]=[T("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),T("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):(Me(),be("svg",YE,[...v[15]||(v[15]=[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},null,-1)])])),Oi(" "+He(f.value?"Exporting...":"Export Image"),1)],10,$E),T("button",{onClick:I,disabled:f.value,class:pt(["w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",f.value?"bg-gray-400 cursor-not-allowed":"bg-gray-600 hover:bg-gray-700 text-white"])},[f.value?(Me(),be("svg",KE,[...v[16]||(v[16]=[T("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),T("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):(Me(),be("svg",ZE,[...v[17]||(v[17]=[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},null,-1)])])),Oi(" "+He(f.value?"Exporting...":"Export All Angles (ZIP)"),1)],10,jE),d.value?(Me(),be("div",{key:0,class:pt(["mt-3 p-3 rounded-lg",d.value.type==="success"?"bg-green-50 text-green-700":"bg-red-50 text-red-700"])},[T("div",JE,[d.value.type==="success"?(Me(),be("svg",QE,[...v[18]||(v[18]=[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(Me(),be("svg",ew,[...v[19]||(v[19]=[T("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])),T("span",tw,He(d.value.message),1)])],2)):Ct("",!0)])])]))}}),iw=$n(nw,[["__scopeId","data-v-53750bee"]]),sw={class:"accordion-section"},rw={class:"accordion-title"},ow={class:"title-text"},aw={key:0,class:"accordion-content"},lw=Rn({__name:"AccordionSection",props:{title:{},isExpanded:{type:Boolean}},emits:["toggle"],setup(n){return(e,t)=>(Me(),be("div",sw,[T("button",{class:"accordion-header",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},[T("div",rw,[bu(e.$slots,"icon",{},()=>[t[1]||(t[1]=T("div",{class:"default-icon"},[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("rect",{x:"2",y:"2",width:"12",height:"12",rx:"1",stroke:"currentColor","stroke-width":"1.5"})])],-1))]),T("span",ow,He(n.title),1)]),T("div",{class:pt(["accordion-chevron",{rotated:!n.isExpanded}])},[...t[2]||(t[2]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M4 6L8 10L12 6",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2)]),Qe(Vg,{name:"accordion"},{default:Li(()=>[n.isExpanded?(Me(),be("div",aw,[bu(e.$slots,"default",{},void 0,!0)])):Ct("",!0)]),_:3})]))}}),Fs=$n(lw,[["__scopeId","data-v-f1dafb0d"]]),cw={class:"panel-header"},uw={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},hw={key:0,d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},dw={key:1,d:"M6 4L10 8L6 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},fw={key:0,class:"panel-content"},pw={class:"accordion"},mw={class:"material-options"},gw={class:"material-presets"},_w=["onClick"],vw={class:"material-icon"},xw={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yw={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Mw={key:2,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Sw={class:"material-label"},bw={class:"lighting-options"},Ew={class:"lighting-presets"},ww=["onClick"],Tw={class:"lighting-icon"},Aw={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Cw={key:1,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Rw={key:2,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pw={class:"lighting-label"},Lw={class:"brightness-control"},Dw={class:"slider-container"},Iw={class:"slider-value"},Uw={class:"dimensions-controls"},Nw={class:"dimension-input"},Fw={class:"dimension-input"},Ow={class:"dimension-input"},kw={key:1,class:"collapsed-content"},Bw=Rn({__name:"RightPanel",props:{selectedFace:{},textureUrls:{},currentMaterialType:{},currentLightingPreset:{},dimensions:{},sceneManager:{},currentTemplateName:{}},emits:["select-face","set-material-type","set-lighting-preset","update-dimensions","design-upload","apply-to-face","apply-to-all","clear-upload","remove-texture","copy-to-others","reset-all-textures","export","batch-export","export-error"],setup(n,{emit:e}){const t=e,i=Fe(!1),s=Fe(75),r=jr({upload:!0,face:!0,material:!1,lighting:!1,dimensions:!1,export:!1}),o=["matte","glossy","metallic"],a=["studio","outdoor","dramatic"],l=()=>{i.value=!i.value},c=v=>{r[v]=!r[v]},u=v=>{t("select-face",v)},h=v=>{t("set-material-type",v)},f=v=>{t("set-lighting-preset",v)},d=()=>{console.log("Brightness updated:",s.value)},g=()=>{t("update-dimensions")},x=v=>{t("design-upload",v)},m=v=>{t("apply-to-face",v)},p=v=>{t("apply-to-all",v)},R=()=>{t("clear-upload")},E=v=>{t("remove-texture",v)},M=v=>{t("copy-to-others",v)},N=()=>{t("reset-all-textures")},D=(v,_)=>{t("export",v,_)},I=(v,_)=>{t("batch-export",v,_)},A=v=>{t("export-error",v)};return(v,_)=>(Me(),be("div",{class:pt(["right-panel",{collapsed:i.value}])},[T("div",cw,[_[10]||(_[10]=T("h3",{class:"panel-title"},"Properties",-1)),T("button",{class:"collapse-btn",onClick:l},[(Me(),be("svg",uw,[i.value?(Me(),be("path",hw)):(Me(),be("path",dw))]))])]),i.value?(Me(),be("div",kw,[T("button",{class:"expand-btn",onClick:l,title:"Expand panel"},[..._[21]||(_[21]=[T("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M10 4L6 8L10 12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),_[22]||(_[22]=T("div",{class:"collapsed-label"},"Properties",-1))])):(Me(),be("div",fw,[T("div",pw,[Qe(Fs,{title:"Upload Design","is-expanded":r.upload,onToggle:_[0]||(_[0]=P=>c("upload"))},{default:Li(()=>[Qe(D_,{"selected-face":n.selectedFace,onUpload:x,onApplyToFace:m,onApplyToAll:p,onClear:R},null,8,["selected-face"])]),_:1},8,["is-expanded"]),Qe(Fs,{title:"Face Selector","is-expanded":r.face,onToggle:_[1]||(_[1]=P=>c("face"))},{default:Li(()=>[Qe(Mv,{"selected-face":n.selectedFace,textures:n.textureUrls,onSelect:u,onRemoveTexture:E,onCopyToOthers:M,onResetAll:N},null,8,["selected-face","textures"])]),_:1},8,["is-expanded"]),Qe(Fs,{title:"Material","is-expanded":r.material,onToggle:_[2]||(_[2]=P=>c("material"))},{default:Li(()=>[T("div",mw,[T("div",gw,[(Me(),be(yt,null,Vn(o,P=>T("button",{key:P,class:pt(["material-preset",{active:n.currentMaterialType===P}]),onClick:O=>h(P)},[T("div",vw,[P==="matte"?(Me(),be("svg",xw,[..._[11]||(_[11]=[T("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),T("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1)])])):P==="glossy"?(Me(),be("svg",yw,[..._[12]||(_[12]=[T("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),T("path",{d:"M10 6L12 10L10 14L8 10L10 6Z",fill:"currentColor","fill-opacity":"0.5"},null,-1),T("circle",{cx:"10",cy:"10",r:"2",fill:"currentColor"},null,-1)])])):(Me(),be("svg",Mw,[..._[13]||(_[13]=[T("rect",{x:"2",y:"2",width:"16",height:"16",rx:"2",stroke:"currentColor","stroke-width":"1.5"},null,-1),T("path",{d:"M6 6L14 14",stroke:"currentColor","stroke-width":"1.5"},null,-1),T("path",{d:"M6 14L14 6",stroke:"currentColor","stroke-width":"1.5"},null,-1)])]))]),T("span",Sw,He(P),1)],10,_w)),64))])])]),_:1},8,["is-expanded"]),Qe(Fs,{title:"Lighting","is-expanded":r.lighting,onToggle:_[4]||(_[4]=P=>c("lighting"))},{default:Li(()=>[T("div",bw,[T("div",Ew,[(Me(),be(yt,null,Vn(a,P=>T("button",{key:P,class:pt(["lighting-preset",{active:n.currentLightingPreset===P}]),onClick:O=>f(P)},[T("div",Tw,[P==="studio"?(Me(),be("svg",Aw,[..._[14]||(_[14]=[T("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),T("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M10 16V18",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M2 10H4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M16 10H18",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])])):P==="outdoor"?(Me(),be("svg",Cw,[..._[15]||(_[15]=[T("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),T("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M15 5L13.5 6.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M18 10L16 10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M15 15L13.5 13.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])])):(Me(),be("svg",Rw,[..._[16]||(_[16]=[T("circle",{cx:"10",cy:"10",r:"4",fill:"currentColor","fill-opacity":"0.3"},null,-1),T("path",{d:"M10 2V4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M5 5L6.5 6.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M2 10H4",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),T("path",{d:"M5 15L6.5 13.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])]))]),T("span",Pw,He(P),1)],10,ww)),64))]),T("div",Lw,[_[17]||(_[17]=T("label",{class:"control-label"},"Brightness",-1)),T("div",Dw,[Ui(T("input",{"onUpdate:modelValue":_[3]||(_[3]=P=>s.value=P),type:"range",min:"0",max:"100",step:"1",class:"slider",onInput:d},null,544),[[Ni,s.value]]),T("span",Iw,He(s.value)+"%",1)])])])]),_:1},8,["is-expanded"]),Qe(Fs,{title:"Box Dimensions","is-expanded":r.dimensions,onToggle:_[8]||(_[8]=P=>c("dimensions"))},{default:Li(()=>[T("div",Uw,[T("div",Nw,[_[18]||(_[18]=T("label",{class:"dimension-label"},[T("span",null,"Width"),T("span",{class:"dimension-unit"},"cm")],-1)),Ui(T("input",{"onUpdate:modelValue":_[5]||(_[5]=P=>n.dimensions.width=P),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:g},null,544),[[Ni,n.dimensions.width]])]),T("div",Fw,[_[19]||(_[19]=T("label",{class:"dimension-label"},[T("span",null,"Height"),T("span",{class:"dimension-unit"},"cm")],-1)),Ui(T("input",{"onUpdate:modelValue":_[6]||(_[6]=P=>n.dimensions.height=P),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:g},null,544),[[Ni,n.dimensions.height]])]),T("div",Ow,[_[20]||(_[20]=T("label",{class:"dimension-label"},[T("span",null,"Depth"),T("span",{class:"dimension-unit"},"cm")],-1)),Ui(T("input",{"onUpdate:modelValue":_[7]||(_[7]=P=>n.dimensions.depth=P),type:"number",step:"0.1",min:"0.5",max:"10",class:"dimension-field",onChange:g},null,544),[[Ni,n.dimensions.depth]])])])]),_:1},8,["is-expanded"]),Qe(Fs,{title:"Export","is-expanded":r.export,onToggle:_[9]||(_[9]=P=>c("export"))},{default:Li(()=>[Qe(iw,{"template-name":n.currentTemplateName,"scene-manager":n.sceneManager,onExport:D,onBatchExport:I,onError:A},null,8,["template-name","scene-manager"])]),_:1},8,["is-expanded"])])]))],2))}}),zw=$n(Bw,[["__scopeId","data-v-d8aa291c"]]),gd={type:"change"},ou={type:"start"},Dp={type:"end"},Oo=new Jc,_d=new Di,Hw=Math.cos(70*hx.DEG2RAD),Rt=new H,Jt=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6;class Vw extends xE{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new hs,this._lastTargetPosition=new H,this._quat=new hs().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new md,this._sphericalDelta=new md,this._scale=1,this._panOffset=new H,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new H,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ww.bind(this),this._onPointerDown=Gw.bind(this),this._onPointerUp=Xw.bind(this),this._onContextMenu=Jw.bind(this),this._onMouseWheel=Yw.bind(this),this._onKeyDown=jw.bind(this),this._onTouchStart=Kw.bind(this),this._onTouchMove=Zw.bind(this),this._onMouseDown=$w.bind(this),this._onMouseMove=qw.bind(this),this._interceptControlDown=Qw.bind(this),this._interceptControlUp=eT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gd),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Jt:i>Math.PI&&(i-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<Hw?this.object.lookAt(this.target):(_d.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(_d,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(gd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Gw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ww(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dp),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $w(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=dt.DOLLY;break;case $s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}break;case $s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(ou)}function qw(n){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yw(n){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(n.preventDefault(),this.dispatchEvent(ou),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dp))}function jw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Kw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=dt.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=dt.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(ou)}function Zw(n){switch(this._trackPointer(n),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=dt.NONE}}function Jw(n){this.enabled!==!1&&n.preventDefault()}function Qw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class tT extends pE{constructor(e){super(e),this.type=di}parse(e){const o=function(A,v){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},u=`
`,h=function(A,v,_){v=v||1024;let O=A.pos,L=-1,F=0,G="",B=String.fromCharCode.apply(null,new Uint16Array(A.subarray(O,O+128)));for(;0>(L=B.indexOf(u))&&F<v&&O<A.byteLength;)G+=B,F+=B.length,O+=128,B+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(O,O+128)));return-1<L?(A.pos+=F+L+1,G+B.slice(0,L)):!1},f=function(A){const v=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,B;for((A.pos>=A.byteLength||!(G=h(A)))&&o(1,"no header found"),(B=G.match(v))||o(3,"bad initial token"),F.valid|=1,F.programtype=B[1],F.string+=G+`
`;G=h(A),G!==!1;){if(F.string+=G+`
`,G.charAt(0)==="#"){F.comments+=G+`
`;continue}if((B=G.match(_))&&(F.gamma=parseFloat(B[1])),(B=G.match(P))&&(F.exposure=parseFloat(B[1])),(B=G.match(O))&&(F.valid|=2,F.format=B[1]),(B=G.match(L))&&(F.valid|=4,F.height=parseInt(B[1],10),F.width=parseInt(B[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(A,v,_){const P=v;if(P<8||P>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);P!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*v*_);O.length||o(4,"unable to allocate buffer space");let L=0,F=0;const G=4*P,B=new Uint8Array(4),K=new Uint8Array(G);let Y=_;for(;Y>0&&F<A.byteLength;){F+4>A.byteLength&&o(1),B[0]=A[F++],B[1]=A[F++],B[2]=A[F++],B[3]=A[F++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=P)&&o(3,"bad rgbe scanline format");let le=0,pe;for(;le<G&&F<A.byteLength;){pe=A[F++];const Ce=pe>128;if(Ce&&(pe-=128),(pe===0||le+pe>G)&&o(3,"bad scanline data"),Ce){const Ve=A[F++];for(let re=0;re<pe;re++)K[le++]=Ve}else K.set(A.subarray(F,F+pe),le),le+=pe,F+=pe}const xe=P;for(let Ce=0;Ce<xe;Ce++){let Ve=0;O[L]=K[Ce+Ve],Ve+=P,O[L+1]=K[Ce+Ve],Ve+=P,O[L+2]=K[Ce+Ve],Ve+=P,O[L+3]=K[Ce+Ve],L+=4}Y--}return O},g=function(A,v,_,P){const O=A[v+3],L=Math.pow(2,O-128)/255;_[P+0]=A[v+0]*L,_[P+1]=A[v+1]*L,_[P+2]=A[v+2]*L,_[P+3]=1},x=function(A,v,_,P){const O=A[v+3],L=Math.pow(2,O-128)/255;_[P+0]=go.toHalfFloat(Math.min(A[v+0]*L,65504)),_[P+1]=go.toHalfFloat(Math.min(A[v+1]*L,65504)),_[P+2]=go.toHalfFloat(Math.min(A[v+2]*L,65504)),_[P+3]=go.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),R=p.width,E=p.height,M=d(m.subarray(m.pos),R,E);let N,D,I;switch(this.type){case gn:I=M.length/4;const A=new Float32Array(I*4);for(let _=0;_<I;_++)g(M,_*4,A,_*4);N=A,D=gn;break;case di:I=M.length/4;const v=new Uint16Array(I*4);for(let _=0;_<I;_++)x(M,_*4,v,_*4);N=v,D=di;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:R,height:E,data:N,header:p.string,gamma:p.gamma,exposure:p.exposure,type:D}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case gn:case di:o.colorSpace=ms,o.minFilter=jt,o.magFilter=jt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}class eo{constructor(){st(this,"group");st(this,"textureLoader");st(this,"faces",new Map);st(this,"faceConfigs",[]);st(this,"currentMaterialType","matte");this.group=new Mr,this.textureLoader=new Pp}getMesh(){return this.group}getTextureableFaces(){return this.faceConfigs.filter(e=>e.canReceiveTexture)}async applyTexture(e,t){return new Promise((i,s)=>{const r=this.faces.get(e);if(!r){s(new Error(`Face ${e} not found`));return}this.textureLoader.load(t,o=>{o.colorSpace=$t,o.anisotropy=4;const a=r.material;a&&(a.map&&a.map.dispose(),a.map=o,a.needsUpdate=!0),i()},void 0,o=>{console.error(`Failed to load texture for ${e}:`,o),s(o)})})}clearTexture(e){const t=this.faces.get(e);if(t){const i=t.material;i&&i.map&&(i.map.dispose(),i.map=null,i.needsUpdate=!0)}}setMaterial(e){this.currentMaterialType=e,this.faces.forEach(t=>{const i=t.material;if(i){switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}i.needsUpdate=!0}})}createMaterial(e,t="#ffffff"){const i=new qr({color:new Ze(t),side:Bn});switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}return i}dispose(){this.faces.forEach(e=>{const t=e.material;t&&(t instanceof qr&&t.map&&t.map.dispose(),t.dispose()),e.geometry.dispose()}),this.group.clear(),this.faces.clear()}}class nT extends eo{constructor(t){super();st(this,"config");this.config=t,this.generateGeometry(t)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new wn(t.width,t.height,t.depth);this.faceConfigs=[{id:"front",name:"Front",uvIndex:4,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back",uvIndex:5,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left",uvIndex:0,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right",uvIndex:1,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"top",name:"Top",uvIndex:2,textureSize:{width:t.width,height:t.depth},canReceiveTexture:!0},{id:"bottom",name:"Bottom",uvIndex:3,textureSize:{width:t.width,height:t.depth},canReceiveTexture:!0}];const s=this.createFaceGeometries(i);this.faceConfigs.forEach((r,o)=>{const a=s[o],l=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),c=new it(a,l);c.castShadow=!0,c.receiveShadow=!0,c.name=r.id,this.faces.set(r.id,c),this.group.add(c)}),this.addEdgesOverlay(i)}createFaceGeometries(t){const i=[],{width:s,height:r,depth:o}=this.config;return i.push(new en(s,r)),i.push(new en(s,r)),i.push(new en(o,r)),i.push(new en(o,r)),i.push(new en(s,o)),i.push(new en(s,o)),[{position:[0,0,o/2],rotation:[0,0,0]},{position:[0,0,-o/2],rotation:[0,Math.PI,0]},{position:[-s/2,0,0],rotation:[0,Math.PI/2,0]},{position:[s/2,0,0],rotation:[0,-Math.PI/2,0]},{position:[0,r/2,0],rotation:[-Math.PI/2,0,0]},{position:[0,-r/2,0],rotation:[Math.PI/2,0,0]}].forEach((l,c)=>{const u=i[c];u.translate(l.position[0],l.position[1],l.position[2]),u.rotateX(l.rotation[0]),u.rotateY(l.rotation[1]),u.rotateZ(l.rotation[2])}),i}addEdgesOverlay(t){const i=new ds(t),s=new Wi({color:0,linewidth:1,transparent:!0,opacity:.3}),r=new _s(i,s);this.group.add(r)}resize(t,i,s){this.config={...this.config,width:t,height:i,depth:s},this.generateGeometry(this.config)}}class iT extends eo{constructor(t){super();st(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=[];i.push(new ue(0,0)),i.push(new ue(t.radius*.8,0)),i.push(new ue(t.radius,t.height*.2)),i.push(new ue(t.radius,t.height*.6)),i.push(new ue(t.radius*.9,t.height*.8)),i.push(new ue(t.neckRadius,t.height*.9)),i.push(new ue(t.neckRadius,t.height-t.capHeight)),i.push(new ue(t.capRadius,t.height-t.capHeight*.5)),i.push(new ue(t.capRadius,t.height));const s=new su(i,t.segments||32),r=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),o=new it(s,r);o.castShadow=!0,o.receiveShadow=!0,o.name="body",this.faces.set("body",o),this.group.add(o);const a=t.height*.4,l=new ui(t.radius*.95,t.radius*.95,a,t.segments||32,1,!0),c=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),u=new it(l,c);u.position.y=t.height*.3,u.castShadow=!0,u.receiveShadow=!0,u.name="label",this.faces.set("label",u),this.group.add(u),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*t.radius,height:a},canReceiveTexture:!0},{id:"body",name:"Bottle Body",uvIndex:1,textureSize:{width:Math.PI*2*t.radius,height:t.height},canReceiveTexture:!1}];const h=new ui(t.capRadius,t.capRadius,t.capHeight,t.segments||32),f=this.createMaterial("metallic","#cccccc");f.roughness=.3,f.metalness=.9;const d=new it(h,f);d.position.y=t.height-t.capHeight*.5,d.castShadow=!0,d.receiveShadow=!0,d.name="cap",this.group.add(d),this.addEdgesOverlay(s)}addEdgesOverlay(t){const i=new ds(t),s=new Wi({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new _s(i,s);this.group.add(r)}setMaterial(t){super.setMaterial(t);const i=this.group.getObjectByName("cap");i&&i.material instanceof qr&&(i.material.roughness=.3,i.material.metalness=.9,i.material.needsUpdate=!0)}}class sT extends eo{constructor(t){super();st(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=this.createPouchCurve(t),s=new wp;s.moveTo(0,0),s.lineTo(t.width,0),s.lineTo(t.width,t.depth),s.lineTo(0,t.depth),s.lineTo(0,0);const r={steps:t.segments||32,bevelEnabled:!1,extrudePath:i},o=new ru(s,r);o.rotateX(Math.PI/2),o.rotateY(Math.PI/2);const a=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),l=new it(o,a);l.castShadow=!0,l.receiveShadow=!0,l.name="front",this.faces.set("front",l),this.group.add(l);const c=new en(t.width,t.height),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new it(c,u);h.position.z=-t.depth*.5,h.rotation.y=Math.PI,h.castShadow=!0,h.receiveShadow=!0,h.name="back",this.faces.set("back",h),this.group.add(h),this.faceConfigs=[{id:"front",name:"Front Panel",uvIndex:0,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0}],this.addSideGussets(t),this.addTopSeal(t),this.addEdgesOverlay(o)}createPouchCurve(t){const i=[],s=t.curveHeight||t.height*.1;return i.push(new H(0,-t.height/2,0)),i.push(new H(0,-t.height/4,s*.3)),i.push(new H(0,0,s)),i.push(new H(0,t.height/4,s*.3)),i.push(new H(0,t.height/2,0)),new iu(i)}addSideGussets(t){const i=new wn(t.depth*.3,t.height*.8,.05),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new it(i,s);r.position.x=-t.width/2-t.depth*.15,r.position.y=0,r.rotation.z=Math.PI/4,r.castShadow=!0,r.receiveShadow=!0;const o=new it(i,s);o.position.x=t.width/2+t.depth*.15,o.position.y=0,o.rotation.z=-Math.PI/4,o.castShadow=!0,o.receiveShadow=!0,this.group.add(r),this.group.add(o)}addTopSeal(t){const i=new wn(t.width*1.1,t.height*.1,t.depth*.5),s=this.createMaterial(this.currentMaterialType,"#888888"),r=new it(i,s);r.position.y=t.height/2+t.height*.05,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addEdgesOverlay(t){const i=new ds(t),s=new Wi({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new _s(i,s);this.group.add(r)}}class rT extends eo{constructor(t){super();st(this,"config");this.config={segments:32,...t},this.generateGeometry(this.config)}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new ui(t.radius,t.radius,t.height-t.capHeight,t.segments||32,1,!1,0,Math.PI*2),s=t.radius-t.thickness,r=new ui(s,s,t.height-t.capHeight,t.segments||32,1,!1,0,Math.PI*2),o=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),a=new it(i,o);a.castShadow=!0,a.receiveShadow=!0,a.name="body",this.faces.set("body",a),this.group.add(a);const l=(t.height-t.capHeight)*.6,c=new ui(t.radius*1.02,t.radius*1.02,l,t.segments||32,1,!0),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new it(c,u);h.position.y=(t.height-t.capHeight-l)*.5,h.castShadow=!0,h.receiveShadow=!0,h.name="label",this.faces.set("label",h),this.group.add(h),this.faceConfigs=[{id:"label",name:"Label Area",uvIndex:0,textureSize:{width:Math.PI*2*t.radius,height:l},canReceiveTexture:!0},{id:"body",name:"Tube Body",uvIndex:1,textureSize:{width:Math.PI*2*t.radius,height:t.height-t.capHeight},canReceiveTexture:!1}];const f=new ui(t.radius,t.radius,t.thickness*2,t.segments||32),d=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),g=new it(f,d);g.position.y=-(t.height-t.capHeight)/2,g.castShadow=!0,g.receiveShadow=!0,g.name="bottom_cap",this.group.add(g);const x=new ui(t.radius*1.1,t.radius*1.1,t.capHeight,t.segments||32),m=this.createMaterial("metallic","#cccccc");m.roughness=.3,m.metalness=.9;const p=new it(x,m);p.position.y=(t.height-t.capHeight)/2+t.capHeight/2,p.castShadow=!0,p.receiveShadow=!0,p.name="top_cap",this.group.add(p);const R=this.createMaterial(this.currentMaterialType,"#666666"),E=new it(r,R);E.position.y=0,E.castShadow=!0,E.receiveShadow=!0,this.group.add(E),this.addEdgesOverlay(i)}addEdgesOverlay(t){const i=new ds(t),s=new Wi({color:0,linewidth:1,transparent:!0,opacity:.2}),r=new _s(i,s);this.group.add(r)}setMaterial(t){super.setMaterial(t);const i=this.group.getObjectByName("top_cap");i&&i.material instanceof qr&&(i.material.roughness=.3,i.material.metalness=.9,i.material.needsUpdate=!0)}}class oT extends eo{constructor(t){super();st(this,"config");this.generateGeometry(t)}getConfig(){return this.config}generateGeometry(t){this.config=t,this.dispose(),this.group.clear(),this.faces.clear();const i=new wn(t.width,t.height,t.depth),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new it(i,s);r.castShadow=!0,r.receiveShadow=!0,r.name="front",this.faces.set("front",r),this.group.add(r);const o=new en(t.width,t.height),a=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),l=new it(o,a);l.position.z=-t.depth/2,l.rotation.y=Math.PI,l.castShadow=!0,l.receiveShadow=!0,l.name="back",this.faces.set("back",l),this.group.add(l),this.faceConfigs=[{id:"front",name:"Front Panel",uvIndex:0,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"back",name:"Back Panel",uvIndex:1,textureSize:{width:t.width,height:t.height},canReceiveTexture:!0},{id:"left",name:"Left Side",uvIndex:2,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0},{id:"right",name:"Right Side",uvIndex:3,textureSize:{width:t.depth,height:t.height},canReceiveTexture:!0}];const c=new en(t.depth,t.height),u=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),h=new it(c,u);h.position.x=-t.width/2,h.position.z=0,h.rotation.y=-Math.PI/2,h.castShadow=!0,h.receiveShadow=!0,h.name="left",this.faces.set("left",h),this.group.add(h);const f=new en(t.depth,t.height),d=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),g=new it(f,d);g.position.x=t.width/2,g.position.z=0,g.rotation.y=Math.PI/2,g.castShadow=!0,g.receiveShadow=!0,g.name="right",this.faces.set("right",g),this.group.add(g),this.addHandles(t),this.addTopFold(t),this.addBottomReinforcement(t),this.addEdgesOverlay(i)}addHandles(t){const i=new iu([new H(-t.width*.3,t.height/2,0),new H(0,t.height/2+t.handleHeight,0),new H(t.width*.3,t.height/2,0)]),s=new lE(i,20,t.handleRadius,8,!1),r=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),o=new it(s,r);o.position.z=t.depth*.4,o.castShadow=!0,o.receiveShadow=!0;const a=new it(s,r);a.position.z=-t.depth*.4,a.castShadow=!0,a.receiveShadow=!0,this.group.add(o),this.group.add(a)}addTopFold(t){const i=new wn(t.width*1.1,t.height*.1,t.depth*.8),s=this.createMaterial(this.currentMaterialType,t.color||"#ffffff"),r=new it(i,s);r.position.y=t.height/2+t.height*.05,r.rotation.x=Math.PI/6,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addBottomReinforcement(t){const i=new wn(t.width*.9,t.height*.1,t.depth*.9),s=this.createMaterial(this.currentMaterialType,"#aaaaaa"),r=new it(i,s);r.position.y=-t.height/2-t.height*.05,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r)}addEdgesOverlay(t){const i=new ds(t),s=new Wi({color:0,linewidth:1,transparent:!0,opacity:.3}),r=new _s(i,s);this.group.add(r)}}class aT{constructor(e){st(this,"scene");st(this,"camera");st(this,"renderer");st(this,"controls");st(this,"animationId",0);st(this,"gridHelper",null);st(this,"lights");st(this,"isAutoRotating",!1);st(this,"autoRotateSpeed",.5);st(this,"currentGeometry",null);st(this,"templateHistory",[]);st(this,"textureMemory",new Map);this.scene=new Cb,this.setupGradientBackground(),this.camera=new pn(45,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(8,8,8),this.renderer=new Ab({canvas:e,antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=zf,this.renderer.toneMapping=Vf,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=$t,this.controls=new Vw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=50,this.controls.maxPolarAngle=Math.PI,this.controls.minPolarAngle=0,this.lights={ambient:new _E(16777215,.4),keyLight:new pd(16777215,.8),fillLight:new pd(16777215,.3)},this.setLightingPreset("studio"),this.addGridHelper(),window.addEventListener("resize",this.handleResize.bind(this))}setupGradientBackground(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(t){const i=t.createLinearGradient(0,0,0,e.height);i.addColorStop(0,"#1a1a2e"),i.addColorStop(1,"#16213e"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height);const s=new Lb(e);this.scene.background=s}}setupLights(e="studio"){switch(this.lights.ambient.parent&&this.scene.remove(this.lights.ambient),this.lights.keyLight.parent&&this.scene.remove(this.lights.keyLight),this.lights.fillLight.parent&&this.scene.remove(this.lights.fillLight),e){case"studio":this.lights.ambient.intensity=.4,this.lights.ambient.color.set(16777215),this.lights.keyLight.intensity=.8,this.lights.keyLight.position.set(10,20,15),this.lights.keyLight.color.set(16777215),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.3,this.lights.fillLight.position.set(-10,10,-10),this.lights.fillLight.color.set(16777215);break;case"outdoor":this.lights.ambient.intensity=.6,this.lights.ambient.color.set(8900331),this.lights.keyLight.intensity=1,this.lights.keyLight.position.set(50,100,50),this.lights.keyLight.color.set(16771899),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.4,this.lights.fillLight.position.set(-30,20,-30),this.lights.fillLight.color.set(5227511);break;case"dramatic":this.lights.ambient.intensity=.2,this.lights.ambient.color.set(1710618),this.lights.keyLight.intensity=1.2,this.lights.keyLight.position.set(15,25,-10),this.lights.keyLight.color.set(16739179),this.lights.keyLight.castShadow=!0,this.lights.fillLight.intensity=.1,this.lights.fillLight.position.set(-5,5,15),this.lights.fillLight.color.set(7039999);break}this.lights.keyLight.shadow.mapSize.width=2048,this.lights.keyLight.shadow.mapSize.height=2048,this.lights.keyLight.shadow.camera.near=.5,this.lights.keyLight.shadow.camera.far=100,this.lights.keyLight.shadow.camera.left=-30,this.lights.keyLight.shadow.camera.right=30,this.lights.keyLight.shadow.camera.top=30,this.lights.keyLight.shadow.camera.bottom=-30,this.lights.keyLight.shadow.bias=-1e-4,this.scene.add(this.lights.ambient),this.scene.add(this.lights.keyLight),this.scene.add(this.lights.fillLight)}addGridHelper(){this.gridHelper=new vE(20,20,4473924,2236962),this.gridHelper.position.y=-.01,this.scene.add(this.gridHelper)}handleResize(){const e=this.renderer.domElement,t=e.clientWidth,i=e.clientHeight;(t!==e.width||i!==e.height)&&(this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i,!1))}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getControls(){return this.controls}startAnimation(){const e=()=>{this.animationId=requestAnimationFrame(e),this.isAutoRotating?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.autoRotateSpeed):this.controls.autoRotate=!1,this.controls.update(),this.renderer.render(this.scene,this.camera)};e()}stopAnimation(){this.animationId&&cancelAnimationFrame(this.animationId)}setLightingPreset(e){this.setupLights(e)}setCameraPreset(e,t=1e3){const i=new H,s=new H(0,0,0);switch(e){case"front":i.set(0,0,15);break;case"back":i.set(0,0,-15);break;case"top":i.set(0,15,0);break;case"isometric":i.set(10,10,10);break;case"reset":i.set(8,8,8);break}const r=this.camera.position.clone(),o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(l/t,1),u=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.camera.position.lerpVectors(r,i,u),this.camera.lookAt(s),this.controls.target.copy(s),this.controls.update(),c<1&&requestAnimationFrame(a)};a()}toggleGridHelper(e){this.gridHelper&&(this.gridHelper.visible=e)}setAutoRotate(e,t=.5){this.isAutoRotating=e,this.autoRotateSpeed=t}async loadHDRIEnvironment(e){return new Promise((t,i)=>{new tT().load(e,r=>{r.mapping=ia,this.scene.environment=r,this.scene.background=r,t()},void 0,r=>{console.error("Failed to load HDRI:",r),i(r)})})}getFPS(){return this.renderer.info.render.frame/1e3}async loadTemplate(e){const t=this.camera.position.clone(),i=this.controls.target.clone();this.currentGeometry&&(this.currentGeometry.dispose(),this.currentGeometry=null);let s;switch(e.category){case"box":s=new nT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,color:e.defaultMaterial.color});break;case"bottle":s=new iT({height:e.geometry.dimensions.height,radius:e.geometry.dimensions.radius||.5,neckHeight:e.geometry.dimensions.height*.2,neckRadius:(e.geometry.dimensions.radius||.5)*.4,capHeight:e.geometry.dimensions.height*.1,capRadius:(e.geometry.dimensions.radius||.5)*.45,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"pouch":s=new sT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,curveHeight:e.geometry.dimensions.height*.1,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"tube":s=new rT({height:e.geometry.dimensions.height,radius:e.geometry.dimensions.radius||.5,thickness:e.geometry.dimensions.depth,capHeight:e.geometry.dimensions.height*.1,segments:e.geometry.dimensions.segments,color:e.defaultMaterial.color});break;case"bag":s=new oT({width:e.geometry.dimensions.width,height:e.geometry.dimensions.height,depth:e.geometry.dimensions.depth,handleRadius:.1,handleHeight:e.geometry.dimensions.height*.3,color:e.defaultMaterial.color});break;default:throw new Error(`Unsupported template category: ${e.category}`)}s.setMaterial(e.defaultMaterial.type),this.scene.add(s.getMesh()),this.currentGeometry=s,await this.restoreTextures(e.id),this.animateCameraToPosition(t,i,500),this.templateHistory.push(e.id),this.templateHistory.length>10&&this.templateHistory.shift()}async restoreTextures(e){if(!this.currentGeometry)return;const t=this.textureMemory.get(e);if(!t)return;const i=[];t.forEach((s,r)=>{i.push(this.currentGeometry.applyTexture(r,s))}),await Promise.all(i)}animateCameraToPosition(e,t,i=1e3){const s=this.camera.position.clone(),r=this.controls.target.clone(),o=Date.now(),a=()=>{const l=Date.now()-o,c=Math.min(l/i,1),u=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.camera.position.lerpVectors(s,e,u),this.controls.target.lerpVectors(r,t,u),this.controls.update(),c<1&&requestAnimationFrame(a)};a()}async applyTextureToFace(e,t){if(!this.currentGeometry)throw new Error("No template loaded");await this.currentGeometry.applyTexture(e,t);const i=this.templateHistory[this.templateHistory.length-1];if(i){let s=this.textureMemory.get(i);s||(s=new Map,this.textureMemory.set(i,s)),s.set(e,t)}}clearTextureFromFace(e){if(!this.currentGeometry)return;this.currentGeometry.clearTexture(e);const t=this.templateHistory[this.templateHistory.length-1];if(t){const i=this.textureMemory.get(t);i&&i.delete(e)}}setMaterialType(e){this.currentGeometry&&this.currentGeometry.setMaterial(e)}getCurrentGeometry(){return this.currentGeometry}getTextureableFaces(){return this.currentGeometry?this.currentGeometry.getTextureableFaces().map(e=>({id:e.id,name:e.name})):[]}dispose(){this.stopAnimation(),this.controls.dispose(),this.renderer.dispose(),this.currentGeometry&&this.currentGeometry.dispose(),this.lights.ambient.dispose(),this.lights.keyLight.dispose(),this.lights.fillLight.dispose(),this.gridHelper&&(this.gridHelper.geometry.dispose(),this.gridHelper.material.dispose()),this.textureMemory.clear(),window.removeEventListener("resize",this.handleResize.bind(this))}}class lT{constructor(e=2.5,t=3.5,i=2){st(this,"mesh");st(this,"materials");st(this,"textureLoader");st(this,"edgesMesh",null);st(this,"geometry");st(this,"defaultMaterials");st(this,"_currentMaterialType","matte");st(this,"renderer",null);this.textureLoader=new Pp,this.geometry=new wn(e,t,i),this.materials=new Map,this.defaultMaterials=new Map;const s=16777215;["right","left","top","bottom","front","back"].forEach(a=>{const l=this.createMaterial("matte",s);l.name=a,this.materials.set(a,l);const c=this.createMaterial("matte",s);c.name=`${a}_default`,this.defaultMaterials.set(a,c)});const o=Array.from(this.materials.values());this.mesh=new it(this.geometry,o),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.createEdgesOverlay()}createMaterial(e,t=16777215){const i=new qr({color:t});switch(e){case"matte":i.roughness=.8,i.metalness=.2;break;case"glossy":i.roughness=.2,i.metalness=.1;break;case"metallic":i.roughness=.4,i.metalness=.8;break}return i}createEdgesOverlay(){const e=new ds(this.geometry),t=new Wi({color:0,linewidth:1,transparent:!0,opacity:.3});this.edgesMesh=new _s(e,t),this.mesh.add(this.edgesMesh)}getMesh(){return this.mesh}async applyTexture(e,t){return new Promise((i,s)=>{this.textureLoader.load(t,r=>{r.colorSpace=$t,r.anisotropy=this.renderer?this.renderer.capabilities.getMaxAnisotropy():1;const o=this.materials.get(e);o&&(o.map=r,o.needsUpdate=!0),i()},void 0,r=>{console.error(`Failed to load texture for ${e}:`,r),s(r)})})}async applyTextureToAll(e){const t=[];["front","back","left","right","top","bottom"].forEach(s=>{t.push(this.applyTexture(s,e))}),await Promise.all(t)}clearTexture(e){const t=this.materials.get(e);t&&(t.map&&t.map.dispose(),t.map=null,t.needsUpdate=!0)}resetTextures(){["front","back","left","right","top","bottom"].forEach(t=>{const i=this.materials.get(t),s=this.defaultMaterials.get(t);i&&s&&(i.map&&i.map.dispose(),i.color.copy(s.color),i.roughness=s.roughness,i.metalness=s.metalness,i.map=null,i.needsUpdate=!0)})}setColor(e,t){const i=this.materials.get(e);i&&(i.color.set(t),i.needsUpdate=!0)}getMaterialType(){return this._currentMaterialType}setMaterialType(e){this._currentMaterialType=e,["front","back","left","right","top","bottom"].forEach(i=>{const s=this.materials.get(i);if(s){switch(e){case"matte":s.roughness=.8,s.metalness=.2;break;case"glossy":s.roughness=.2,s.metalness=.1;break;case"metallic":s.roughness=.4,s.metalness=.8;break}s.needsUpdate=!0}})}setOpacity(e,t){const i=this.materials.get(e);i&&(i.transparent=t<1,i.opacity=t,i.needsUpdate=!0)}toggleEdgesOverlay(e){this.edgesMesh&&(this.edgesMesh.visible=e)}resize(e,t,i){if(this.geometry.dispose(),this.edgesMesh&&this.edgesMesh.geometry.dispose(),this.geometry=new wn(e,t,i),this.mesh.geometry=this.geometry,this.edgesMesh){const s=new ds(this.geometry);this.edgesMesh.geometry=s}}dispose(){this.materials.forEach(e=>{e.map&&e.map.dispose(),e.dispose()}),this.defaultMaterials.forEach(e=>{e.dispose()}),this.geometry.dispose(),this.edgesMesh&&(this.edgesMesh.geometry.dispose(),this.edgesMesh.material.dispose())}}const cT={class:"relative w-full h-full"},uT={key:0,class:"absolute inset-0 flex items-center justify-center bg-black/50"},hT={key:1,class:"absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono"},dT={key:2,class:"absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg"},fT=Rn({__name:"MockupCanvas",props:{lightingPreset:{},cameraPreset:{},showGrid:{type:Boolean},autoRotate:{type:Boolean}},emits:["loaded","error"],setup(n,{expose:e,emit:t}){const i=Fe(null),s=Fe(!0),r=Fe(!1),o=Fe(!1),a=Fe(0);let l=null,c=null,u=0,h=0,f=null;const d=n,g=t;xa(()=>{if(i.value)try{l=new aT(i.value),c=new lT,l.getScene().add(c.getMesh()),d.lightingPreset&&l.setLightingPreset(d.lightingPreset),d.cameraPreset&&l.setCameraPreset(d.cameraPreset),d.showGrid!==void 0&&l.toggleGridHelper(d.showGrid),d.autoRotate!==void 0&&l.setAutoRotate(d.autoRotate),l.startAnimation(),x(),s.value=!1,g("loaded")}catch(m){console.error("Failed to initialize 3D scene:",m),s.value=!1,g("error",m)}}),zn(()=>d.lightingPreset,m=>{l&&m&&l.setLightingPreset(m)}),zn(()=>d.cameraPreset,m=>{l&&m&&l.setCameraPreset(m)}),zn(()=>d.showGrid,m=>{l&&m!==void 0&&l.toggleGridHelper(m)}),zn(()=>d.autoRotate,m=>{l&&m!==void 0&&l.setAutoRotate(m)});const x=()=>{h=performance.now();const m=()=>{u++;const p=performance.now(),R=p-h;R>=1e3&&(a.value=u*1e3/R,u=0,h=p),o.value&&(f=requestAnimationFrame(m))};o.value&&(f=requestAnimationFrame(m))};return ir(()=>{f&&cancelAnimationFrame(f),c&&c.dispose(),l&&l.dispose()}),e({applyTexture:async(m,p)=>{if(c){r.value=!0;try{await c.applyTexture(m,p)}finally{r.value=!1}}else return Promise.reject("Box mockup not initialized")},applyTextureToAll:async m=>{if(c){r.value=!0;try{await c.applyTextureToAll(m)}finally{r.value=!1}}else return Promise.reject("Box mockup not initialized")},clearTexture:m=>{c&&c.clearTexture(m)},resetTextures:()=>{c&&c.resetTextures()},setColor:(m,p)=>{c&&c.setColor(m,p)},setMaterialType:m=>{c&&c.setMaterialType(m)},setOpacity:(m,p)=>{c&&c.setOpacity(m,p)},toggleEdgesOverlay:m=>{c&&c.toggleEdgesOverlay(m)},resize:(m,p,R)=>{c&&c.resize(m,p,R)},setLightingPreset:m=>{l&&l.setLightingPreset(m)},setCameraPreset:(m,p)=>{l&&l.setCameraPreset(m,p)},toggleGridHelper:m=>{l&&l.toggleGridHelper(m)},setAutoRotate:(m,p)=>{l&&l.setAutoRotate(m,p)},loadHDRIEnvironment:async m=>l?l.loadHDRIEnvironment(m):Promise.reject("Scene manager not initialized"),getFPS:()=>l?l.getFPS():0,toggleFPS:m=>{o.value=m,m&&!f?x():!m&&f&&(cancelAnimationFrame(f),f=null)},getSceneManager:()=>l}),(m,p)=>(Me(),be("div",cT,[T("canvas",{ref_key:"canvasRef",ref:i,class:"w-full h-full"},null,512),s.value?(Me(),be("div",uT,[...p[0]||(p[0]=[T("div",{class:"flex flex-col items-center gap-4"},[T("div",{class:"w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"}),T("div",{class:"text-white text-lg font-medium"},"Loading 3D scene...")],-1)])])):Ct("",!0),!s.value&&o.value?(Me(),be("div",hT," FPS: "+He(Math.round(a.value)),1)):Ct("",!0),r.value?(Me(),be("div",dT,[...p[1]||(p[1]=[T("div",{class:"flex items-center gap-2"},[T("div",{class:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),T("span",null,"Loading texture...")],-1)])])):Ct("",!0)]))}}),pT=$n(fT,[["__scopeId","data-v-bd18c278"]]),mT=b0("mockup",()=>{const n=Fe({width:2,height:3,depth:1.5}),e=Fe(new Map),t=Fe(new Map),i=Fe(new Map),s=Fe("front"),r=Fe(null),o=Fe(new Map),a={front:"#ffffff",back:"#ffffff",left:"#ffffff",right:"#ffffff",top:"#ffffff",bottom:"#ffffff"};return Object.entries(a).forEach(([N,D])=>{t.value.set(N,D),i.value.set(N,1)}),{dimensions:n,textures:e,colors:t,opacity:i,selectedFace:s,activeTemplate:r,templateTextures:o,setDimensions:(N,D,I)=>{n.value={width:N,height:D,depth:I}},setTexture:(N,D)=>{if(e.value.set(N,D),r.value){let I=o.value.get(r.value.id);I||(I=new Map,o.value.set(r.value.id,I)),I.set(N,D)}},removeTexture:N=>{if(e.value.delete(N),r.value){const D=o.value.get(r.value.id);D&&D.delete(N)}},setColor:(N,D)=>{t.value.set(N,D)},setOpacity:(N,D)=>{i.value.set(N,D)},setSelectedFace:N=>{s.value=N},switchTemplate:N=>{if(r.value){const I=new Map(e.value);o.value.set(r.value.id,I)}r.value=N;const D=o.value.get(N.id);D?e.value=new Map(D):e.value.clear(),s.value=N.faces.length>0?N.faces[0].id:null,n.value={width:N.geometry.dimensions.width,height:N.geometry.dimensions.height,depth:N.geometry.dimensions.depth},t.value.clear(),i.value.clear(),N.faces.forEach(I=>{t.value.set(I.id,N.defaultMaterial.color),i.value.set(I.id,1)})},getTexture:N=>e.value.get(N),getColor:N=>t.value.get(N)||"#ffffff",getOpacity:N=>i.value.get(N)||1,getActiveTemplate:()=>r.value,getTemplateTextures:N=>o.value.get(N),reset:()=>{n.value={width:2,height:3,depth:1.5},e.value.clear(),t.value.clear(),i.value.clear(),s.value="front",r.value=null,Object.entries(a).forEach(([N,D])=>{t.value.set(N,D),i.value.set(N,1)})}}});function gT(n={}){const{maxCacheSize:e=50,autoCleanup:t=!0}=n,i=Fe({front:null,back:null,left:null,right:null,top:null,bottom:null}),s=Fe("front"),r=Fe("cover"),o=Fe(0),a=Fe(new Set),l=ln(()=>Object.entries(i.value).filter(([L,F])=>F!==null).map(([L])=>L)),c=ln(()=>l.value.length),u=ln(()=>c.value>0),h=ln(()=>(o.value/(1024*1024)).toFixed(2)),f=(L,F,G="cover")=>new Promise(B=>{g(L);const K=URL.createObjectURL(F);a.value.add(K);const Y={url:K,name:F.name,file:F,fit:G,objectUrl:K},le=new Image;le.onload=()=>{Y.dimensions={width:le.width,height:le.height},o.value+=F.size,i.value[L]=Y,t&&o.value>e*1024*1024&&P(),B(Y)},le.onerror=()=>{i.value[L]=Y,o.value+=F.size,B(Y)},le.src=K}),d=(L,F,G="Texture",B="cover")=>{g(L);const K={url:F,name:G,fit:B};return i.value[L]=K,K},g=L=>{const F=i.value[L];F&&(F.objectUrl&&(URL.revokeObjectURL(F.objectUrl),a.value.delete(F.objectUrl),F.file&&(o.value-=F.file.size)),i.value[L]=null)},x=()=>{Object.keys(i.value).forEach(L=>{g(L)})},m=(L,F)=>{const G=i.value[L];if(!G)return!1;g(F);const B={...G,name:`${G.name} (copy)`};return i.value[F]=B,!0},p=L=>{i.value[L]&&Object.keys(i.value).forEach(G=>{G!==L&&m(L,G)})},R=(L,F="cover")=>{const G=Object.keys(i.value).map(B=>f(B,L,F));return Promise.all(G).then(()=>{})},E=(L,F)=>{const G=i.value[L];G&&(G.fit=F)},M=L=>{Object.values(i.value).forEach(F=>{F&&(F.fit=L)}),r.value=L},N=L=>i.value[L]||null,D=L=>{var F;return((F=i.value[L])==null?void 0:F.url)||null},I=L=>i.value[L]!==null,A=L=>{s.value=L},v=()=>{const L={};return Object.entries(i.value).forEach(([F,G])=>{G&&(L[F]={name:G.name,fit:G.fit,dimensions:G.dimensions,hasFile:!!G.file})}),L},_=(L,F)=>{x(),Object.entries(L).forEach(([G,B])=>{if(B&&B.name){const K={url:B.url||"",name:B.name,fit:B.fit||"cover",dimensions:B.dimensions};F&&F[B.name]&&(K.file=F[B.name],K.objectUrl=URL.createObjectURL(F[B.name]),a.value.add(K.objectUrl)),i.value[G]=K}})},P=()=>{const L=Object.entries(i.value).filter(([F,G])=>G!==null).sort(()=>0);for(;o.value>e*1024*1024&&L.length>0;){const[F,G]=L.shift();g(F)}},O=()=>{x(),s.value="front",r.value="cover",o.value=0,a.value.clear()};return ir(()=>{x()}),{textures:i,selectedFace:s,textureFit:r,cacheSize:o,texturedFaces:l,texturedFacesCount:c,hasTextures:u,cacheSizeMB:h,setTexture:f,setTextureFromUrl:d,removeTexture:g,clearAllTextures:x,copyTexture:m,copyToAllFaces:p,applyToAllFaces:R,setTextureFit:E,setAllTextureFits:M,getTexture:N,getTextureUrl:D,hasTexture:I,selectFace:A,exportTextureMapping:v,importTextureMapping:_,cleanupCache:P,reset:O}}const _T={class:"editor-main"},vT={class:"canvas-area"},xT={class:"canvas-container"},yT={class:"status-bar"},MT={class:"status-left"},ST={class:"status-item"},bT={class:"status-value"},ET={class:"status-item"},wT={class:"status-value"},TT={class:"status-item"},AT={class:"status-value"},CT={class:"status-right"},RT={class:"status-item"},PT={class:"status-value"},LT={class:"status-item"},DT={class:"status-value"},IT=Rn({__name:"EditorView",setup(n){const e=mT(),t=gT(),i=Fe(null),s=Fe(!0),r=Fe(100),o=Fe(60),a=Fe(0),l=Fe("studio"),c=Fe("isometric"),u=Fe("matte"),h=Fe(!0),f=Fe(!1),d=["front","back","left","right","top","bottom"],g=Fe("front"),x=Fe({width:2.5,height:3.5,depth:2}),m=Fe(null),p=Fe(null),R=Fe("box-mockup"),E=ln(()=>d.filter(y=>e.getTexture(y)!==void 0).length),M=ln(()=>{const y={front:null,back:null,left:null,right:null,top:null,bottom:null};return d.forEach(V=>{const z=e.getTexture(V);y[V]=(z==null?void 0:z.url)||null}),y}),N=()=>{r.value=Math.min(r.value+10,200),i.value&&i.value.zoomIn()},D=()=>{r.value=Math.max(r.value-10,25),i.value&&i.value.zoomOut()},I=()=>{r.value=100,i.value&&i.value.fitToScreen()},A=y=>{c.value=y,i.value&&i.value.setCameraPreset(y,800)},v=()=>{f.value=!f.value,i.value&&i.value.setAutoRotate(f.value,.5)},_=()=>{h.value=!h.value,i.value&&i.value.toggleGridHelper(h.value)},P=()=>{s.value=!s.value,localStorage.setItem("editor-theme",s.value?"dark":"light")},O=()=>{A("reset")},L=()=>{i.value&&i.value.resize(x.value.width,x.value.height,x.value.depth)},F=y=>{u.value=y,i.value&&i.value.setMaterialType(y)},G=y=>{l.value=y,i.value&&i.value.setLightingPreset(y)},B=y=>{g.value=y,e.setSelectedFace(y)},K=y=>{m.value=y,console.log("Template selected:",y)},Y=y=>{console.log("Design uploaded:",y.name)},le=async y=>{const{face:V,file:z,fit:$}=y;try{const Z=await t.setTexture(V,z,$);i.value&&await i.value.applyTexture(V,Z.url),e.setTexture(V,{url:Z.url,name:z.name}),console.log(`Texture applied to ${V} face`)}catch(Z){console.error("Failed to apply texture:",Z),alert("Failed to apply texture. Please try another image.")}},pe=async y=>{const{file:V,fit:z}=y;try{await t.applyToAllFaces(V,z),i.value&&await i.value.applyTextureToAll(t.getTextureUrl("front")),d.forEach($=>{e.setTexture($,{url:t.getTextureUrl($),name:V.name})}),console.log("Texture applied to all faces")}catch($){console.error("Failed to apply texture to all faces:",$),alert("Failed to apply texture. Please try another image.")}},xe=()=>{console.log("Upload cleared")},Ce=y=>{t.removeTexture(y),i.value&&i.value.clearTexture(y),e.removeTexture(y),console.log(`Texture removed from ${y} face`)},Ve=y=>{const V=t.getTexture(y);V&&(t.copyToAllFaces(y),d.forEach(z=>{if(z!==y){const $=t.getTextureUrl(z);$&&i.value&&(i.value.applyTexture(z,$),e.setTexture(z,{url:$,name:`${V.name} (copy)`}))}}),console.log(`Texture copied from ${y} to all other faces`))},re=()=>{t.clearAllTextures(),i.value&&i.value.resetTextures(),d.forEach(y=>{e.removeTexture(y)}),console.log("All textures reset")},he=(y,V)=>{console.log("Export successful:",V,"size:",y.size)},Ae=(y,V)=>{console.log("Batch export successful:",V.length,"files")},de=y=>{console.error("Export error:",y),alert(`Export failed: ${y.message}`)},Pe=()=>{console.log("Canvas loaded successfully"),i.value&&(p.value=i.value.getSceneManager()),Je()},Be=y=>{console.error("Canvas error:",y),alert("Failed to initialize 3D canvas. Please refresh the page.")};let Re=null;const Je=()=>{Re&&clearInterval(Re),Re=window.setInterval(()=>{o.value=50+Math.random()*20,a.value=Math.round(100+Math.random()*50)},1e3)},w=()=>{Re&&(clearInterval(Re),Re=null)},U=y=>{if(!(y.target instanceof HTMLInputElement||y.target instanceof HTMLTextAreaElement))switch(y.key.toLowerCase()){case" ":y.preventDefault(),O();break;case"r":y.preventDefault(),v();break;case"g":y.preventDefault(),_();break;case"1":y.preventDefault(),A("front");break;case"2":y.preventDefault(),A("back");break;case"3":y.preventDefault(),A("top");break;case"4":y.preventDefault(),A("isometric");break;case"+":case"=":(y.ctrlKey||y.metaKey)&&(y.preventDefault(),N());break;case"-":(y.ctrlKey||y.metaKey)&&(y.preventDefault(),D());break;case"0":(y.ctrlKey||y.metaKey)&&(y.preventDefault(),I());break}};return xa(()=>{const y=localStorage.getItem("editor-theme");y&&(s.value=y==="dark"),i.value&&(i.value.setMaterialType("matte"),i.value.toggleGridHelper(!0)),d.forEach(V=>{e.setColor(V,"#ffffff")}),e.setSelectedFace("front"),window.addEventListener("keydown",U)}),ir(()=>{w(),window.removeEventListener("keydown",U)}),(y,V)=>(Me(),be("div",{class:pt(["editor-container",{"dark-theme":s.value}])},[Qe(F0,{zoom:r.value,"view-preset":c.value,"auto-rotate":f.value,"show-grid":h.value,"is-dark":s.value,onZoomIn:N,onZoomOut:D,onZoomFit:I,onViewPreset:A,onToggleAutoRotate:v,onToggleGrid:_,onToggleTheme:P},null,8,["zoom","view-preset","auto-rotate","show-grid","is-dark"]),T("div",_T,[Qe(s_,{"selected-template":m.value,onSelectTemplate:K},null,8,["selected-template"]),T("div",vT,[T("div",xT,[Qe(pT,{ref_key:"canvasRef",ref:i,"lighting-preset":l.value,"camera-preset":c.value,"show-grid":h.value,"auto-rotate":f.value,class:"w-full h-full",onLoaded:Pe,onError:Be},null,8,["lighting-preset","camera-preset","show-grid","auto-rotate"])]),T("div",{class:"canvas-controls"},[T("button",{class:"control-btn",onClick:O,title:"Reset Camera (Space)"},[...V[0]||(V[0]=[Un('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c3770810><path d="M10 4V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><path d="M10 14V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><path d="M4 10H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><path d="M14 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-c3770810></path><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5" data-v-c3770810></circle></svg>',1)])]),V[1]||(V[1]=T("div",{class:"canvas-info"},[T("span",{class:"info-text"},"Drag: Rotate • Scroll: Zoom • Right-click: Pan")],-1))])]),Qe(zw,{"selected-face":g.value,"texture-urls":M.value,"current-material-type":u.value,"current-lighting-preset":l.value,dimensions:x.value,"scene-manager":p.value,"current-template-name":R.value,onSelectFace:B,onSetMaterialType:F,onSetLightingPreset:G,onUpdateDimensions:L,onDesignUpload:Y,onApplyToFace:le,onApplyToAll:pe,onClearUpload:xe,onRemoveTexture:Ce,onCopyToOthers:Ve,onResetAllTextures:re,onExport:he,onBatchExport:Ae,onExportError:de},null,8,["selected-face","texture-urls","current-material-type","current-lighting-preset","dimensions","scene-manager","current-template-name"])]),T("div",yT,[T("div",MT,[T("span",ST,[V[2]||(V[2]=T("span",{class:"status-label"},"Selected:",-1)),T("span",bT,He(g.value?g.value.charAt(0).toUpperCase()+g.value.slice(1):"None"),1)]),T("span",ET,[V[3]||(V[3]=T("span",{class:"status-label"},"Textured:",-1)),T("span",wT,He(E.value)+" / 6 faces",1)]),T("span",TT,[V[4]||(V[4]=T("span",{class:"status-label"},"Material:",-1)),T("span",AT,He(u.value),1)])]),T("div",CT,[T("span",RT,[V[5]||(V[5]=T("span",{class:"status-label"},"FPS:",-1)),T("span",PT,He(o.value.toFixed(1)),1)]),T("span",LT,[V[6]||(V[6]=T("span",{class:"status-label"},"Memory:",-1)),T("span",DT,He(a.value)+" MB",1)])])])],2))}}),UT=$n(IT,[["__scopeId","data-v-c3770810"]]),NT={class:"min-h-screen bg-gray-50"},FT={class:"max-w-7xl mx-auto px-4 py-8"},OT=Rn({__name:"App",setup(n){return(e,t)=>(Me(),be("div",NT,[t[0]||(t[0]=T("header",{class:"bg-white shadow"},[T("div",{class:"max-w-7xl mx-auto px-4 py-6"},[T("h1",{class:"text-3xl font-bold text-gray-900"},"Bungkus Indonesia"),T("p",{class:"text-gray-600"},"Create professional packaging mockups in 3D")])],-1)),T("main",FT,[Qe(UT)]),t[1]||(t[1]=T("footer",{class:"bg-white border-t mt-8"},[T("div",{class:"max-w-7xl mx-auto px-4 py-6 text-center text-gray-500"},[T("p",null,"© 2024 Bungkus Indonesia. All rights reserved.")])],-1))]))}}),Ip=p0(OT);Ip.use(_0());Ip.mount("#app");
