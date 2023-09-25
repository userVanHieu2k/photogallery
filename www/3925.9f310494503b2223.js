"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3925],{3925:(E,R,y)=>{y.r(R),y.d(R,{startInputShims:()=>q});var w=y(5861),T=y(8360),m=y(839),U=y(7484),h=y(6225);y(4874);const M=new WeakMap,P=(e,t,s,o=0,r=!1)=>{M.has(e)!==s&&(s?Z(e,t,o,r):G(e,t))},Z=(e,t,s,o=!1)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),M.set(e,n);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${i}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",F="$ionPaddingTimer",B=(e,t,s)=>{const o=e[F];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[F]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},W=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let b=0;const p="data-ionic-skip-scroll-assist",V=(e,t,s,o,r,n,a,i=!1)=>{const l=n&&(void 0===a||a.mode===U.a.None);let L=!1;const u=void 0!==h.w?h.w.innerHeight:0,v=_=>{!1!==L?j(e,t,s,o,_.detail.keyboardHeight,l,i,u,!1):L=!0},c=()=>{L=!1,null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)},f=function(){var _=(0,w.Z)(function*(){t.hasAttribute(p)?t.removeAttribute(p):(j(e,t,s,o,r,l,i,u),null==h.w||h.w.addEventListener("ionKeyboardDidShow",v),e.addEventListener("focusout",c,!0))});return function(){return _.apply(this,arguments)}}();return e.addEventListener("focusin",f,!0),()=>{e.removeEventListener("focusin",f,!0),null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},j=function(){var e=(0,w.Z)(function*(t,s,o,r,n,a,i=!1,l=0,L=!0){if(!o&&!r)return;const u=((e,t,s,o)=>{var r;return((e,t,s,o)=>{const r=e.top,n=e.bottom,a=t.top,l=a+15,u=Math.min(t.bottom,o-s)-50-n,v=l-r,c=Math.round(u<0?-u:v>0?-v:0),f=Math.min(c,r-a),g=Math.abs(f)/.3;return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,g)),scrollPadding:s,inputSafeY:4-(r-l)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||r,n,l);if(o&&Math.abs(u.scrollAmount)<4)return x(s),void(a&&null!==o&&(B(o,b),W(s,o,()=>b=0)));if(P(t,s,!0,u.inputSafeY,i),x(s),(0,m.r)(()=>t.click()),a&&o&&(b=u.scrollPadding,B(o,b)),typeof window<"u"){let v;const c=function(){var _=(0,w.Z)(function*(){void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",c),o&&(yield(0,T.c)(o,0,u.scrollAmount,u.scrollDuration)),P(t,s,!1,u.inputSafeY),x(s),a&&W(s,o,()=>b=0)});return function(){return _.apply(this,arguments)}}(),f=()=>{window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",c)};if(o){const _=yield(0,T.g)(o);if(L&&u.scrollAmount>_.scrollHeight-_.clientHeight-_.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",c),void(v=setTimeout(c,1e3))}c()}});return function(s,o,r,n,a,i){return e.apply(this,arguments)}}(),q=function(){var e=(0,w.Z)(function*(t,s){const o=document,r="ios"===s,n="android"===s,a=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),l=t.getBoolean("hideCaretOnScroll",r),L=t.getBoolean("inputBlurring",r),u=t.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,f=new WeakMap,_=yield U.K.getResizeMode(),g=function(){var S=(0,w.Z)(function*(d){yield new Promise(I=>(0,m.c)(d,I));const O=d.shadowRoot||d,D=O.querySelector("input")||O.querySelector("textarea"),A=(0,T.f)(d),k=A?null:d.closest("ion-footer");if(D){if(A&&l&&!c.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const o=i=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,i)},r=()=>P(e,t,!1),n=()=>o(!0),a=()=>o(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",a),t.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",r)}})(d,D,A);c.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(A||k)&&i&&!f.has(d)){const I=V(d,D,A,k,a,u,_,n);f.set(d,I)}}});return function(O){return S.apply(this,arguments)}}();L&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const i=s.activeElement;if(!i||i.matches(C))return;const l=a.target;l!==i&&(l.matches(C)||l.closest(C)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})();for(const S of v)g(S);o.addEventListener("ionInputDidLoad",S=>{g(S.detail)}),o.addEventListener("ionInputDidUnload",S=>{(S=>{if(l){const d=c.get(S);d&&d(),c.delete(S)}if(i){const d=f.get(S);d&&d(),f.delete(S)}})(S.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);