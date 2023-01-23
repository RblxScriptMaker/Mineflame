import{Q as F,$ as L,p as x,K as y,ar as j,c as h,as as B,at as K,R as I,O as U,a6 as V,S as P,U as k,a7 as W,W as D,P as E,v as _,V as Q,a2 as X,a8 as T,X as m,aa as M,au as q,a1 as N,av as A,aj as H}from"./entry.9c0e72e9.js";import{b as Y}from"./use-resolve-button-type.fbd3efc3.js";function J(t){throw new Error("Unexpected object: "+t)}var S=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(S||{});function Z(t,r){let s=r.resolveItems();if(s.length<=0)return null;let f=r.resolveActiveIndex(),e=f!=null?f:-1,p=(()=>{switch(t.focus){case 0:return s.findIndex(l=>!r.resolveDisabled(l));case 1:{let l=s.slice().reverse().findIndex((v,c,i)=>e!==-1&&i.length-c-1>=e?!1:!r.resolveDisabled(v));return l===-1?l:s.length-1-l}case 2:return s.findIndex((l,v)=>v<=e?!1:!r.resolveDisabled(l));case 3:{let l=s.slice().reverse().findIndex(v=>!r.resolveDisabled(v));return l===-1?l:s.length-1-l}case 4:return s.findIndex(l=>r.resolveId(l)===t.id);case 5:return null;default:J(t)}})();return p===-1?f:p}function z({container:t,accept:r,walk:s,enabled:f}){F(()=>{let e=t.value;if(!e||f!==void 0&&!f.value)return;let p=L(t);if(!p)return;let l=Object.assign(c=>r(c),{acceptNode:r}),v=p.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;v.nextNode();)s(v.currentNode)})}function O(t){return[t.screenX,t.screenY]}function G(){let t=x([-1,-1]);return{wasMoved(r){let s=O(r);return t.value[0]===s[0]&&t.value[1]===s[1]?!1:(t.value=s,!0)},update(r){t.value=O(r)}}}var $=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($||{}),ee=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ee||{});function te(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let C=Symbol("MenuContext");function w(t){let r=Q(C,null);if(r===null){let s=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,w),s}return r}let le=y({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:r,attrs:s}){let f=x(1),e=x(null),p=x(null),l=x([]),v=x(""),c=x(null),i=x(1);function a(u=d=>d){let d=c.value!==null?l.value[c.value]:null,n=H(u(l.value.slice()),g=>I(g.dataRef.domRef)),o=d?n.indexOf(d):null;return o===-1&&(o=null),{items:n,activeItemIndex:o}}let b={menuState:f,buttonRef:e,itemsRef:p,items:l,searchQuery:v,activeItemIndex:c,activationTrigger:i,closeMenu:()=>{f.value=1,c.value=null},openMenu:()=>f.value=0,goToItem(u,d,n){let o=a(),g=Z(u===S.Specific?{focus:S.Specific,id:d}:{focus:u},{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:R=>R.id,resolveDisabled:R=>R.dataRef.disabled});v.value="",c.value=g,i.value=n!=null?n:1,l.value=o.items},search(u){let d=v.value!==""?0:1;v.value+=u.toLowerCase();let n=(c.value!==null?l.value.slice(c.value+d).concat(l.value.slice(0,c.value+d)):l.value).find(g=>g.dataRef.textValue.startsWith(v.value)&&!g.dataRef.disabled),o=n?l.value.indexOf(n):-1;o===-1||o===c.value||(c.value=o,i.value=1)},clearSearch(){v.value=""},registerItem(u,d){let n=a(o=>[...o,{id:u,dataRef:d}]);l.value=n.items,c.value=n.activeItemIndex,i.value=1},unregisterItem(u){let d=a(n=>{let o=n.findIndex(g=>g.id===u);return o!==-1&&n.splice(o,1),n});l.value=d.items,c.value=d.activeItemIndex,i.value=1}};return j([e,p],(u,d)=>{var n;b.closeMenu(),B(d,K.Loose)||(u.preventDefault(),(n=I(e))==null||n.focus())},h(()=>f.value===0)),U(C,b),V(h(()=>X(f.value,{[0]:T.Open,[1]:T.Closed}))),()=>{let u={open:f.value===0,close:b.closeMenu};return P({ourProps:{},theirProps:t,slot:u,slots:r,attrs:s,name:"Menu"})}}}),re=y({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${k()}`}},setup(t,{attrs:r,slots:s,expose:f}){let e=w("MenuButton");f({el:e.buttonRef,$el:e.buttonRef});function p(i){switch(i.key){case m.Space:case m.Enter:case m.ArrowDown:i.preventDefault(),i.stopPropagation(),e.openMenu(),M(()=>{var a;(a=I(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(S.First)});break;case m.ArrowUp:i.preventDefault(),i.stopPropagation(),e.openMenu(),M(()=>{var a;(a=I(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(S.Last)});break}}function l(i){switch(i.key){case m.Space:i.preventDefault();break}}function v(i){t.disabled||(e.menuState.value===0?(e.closeMenu(),M(()=>{var a;return(a=I(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(i.preventDefault(),e.openMenu(),te(()=>{var a;return(a=I(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let c=Y(h(()=>({as:t.as,type:r.type})),e.buttonRef);return()=>{var i;let a={open:e.menuState.value===0},{id:b,...u}=t,d={ref:e.buttonRef,id:b,type:c.value,"aria-haspopup":"menu","aria-controls":(i=I(e.itemsRef))==null?void 0:i.id,"aria-expanded":t.disabled?void 0:e.menuState.value===0,onKeydown:p,onKeyup:l,onClick:v};return P({ourProps:d,theirProps:u,slot:a,attrs:r,slots:s,name:"MenuButton"})}}}),ue=y({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${k()}`}},setup(t,{attrs:r,slots:s,expose:f}){let e=w("MenuItems"),p=x(null);f({el:e.itemsRef,$el:e.itemsRef}),z({container:h(()=>I(e.itemsRef)),enabled:h(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function l(a){var b;switch(p.value&&clearTimeout(p.value),a.key){case m.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case m.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let u=e.items.value[e.activeItemIndex.value];(b=I(u.dataRef.domRef))==null||b.click()}e.closeMenu(),A(I(e.buttonRef));break;case m.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Next);case m.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Previous);case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.First);case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(S.Last);case m.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),M(()=>{var u;return(u=I(e.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case m.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),M(()=>q(I(e.buttonRef),a.shiftKey?N.Previous:N.Next));break;default:a.key.length===1&&(e.search(a.key),p.value=setTimeout(()=>e.clearSearch(),350));break}}function v(a){switch(a.key){case m.Space:a.preventDefault();break}}let c=W(),i=h(()=>c!==null?c.value===T.Open:e.menuState.value===0);return()=>{var a,b;let u={open:e.menuState.value===0},{id:d,...n}=t,o={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(b=I(e.buttonRef))==null?void 0:b.id,id:d,onKeydown:l,onKeyup:v,role:"menu",tabIndex:0,ref:e.itemsRef};return P({ourProps:o,theirProps:n,slot:u,attrs:r,slots:s,features:D.RenderStrategy|D.Static,visible:i.value,name:"MenuItems"})}}}),oe=y({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${k()}`}},setup(t,{slots:r,attrs:s,expose:f}){let e=w("MenuItem"),p=x(null);f({el:p,$el:p});let l=h(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),v=h(()=>({disabled:t.disabled,textValue:"",domRef:p}));E(()=>{var n,o;let g=(o=(n=I(p))==null?void 0:n.textContent)==null?void 0:o.toLowerCase().trim();g!==void 0&&(v.value.textValue=g)}),E(()=>e.registerItem(t.id,v)),_(()=>e.unregisterItem(t.id)),F(()=>{e.menuState.value===0&&(!l.value||e.activationTrigger.value!==0&&M(()=>{var n,o;return(o=(n=I(p))==null?void 0:n.scrollIntoView)==null?void 0:o.call(n,{block:"nearest"})}))});function c(n){if(t.disabled)return n.preventDefault();e.closeMenu(),A(I(e.buttonRef))}function i(){if(t.disabled)return e.goToItem(S.Nothing);e.goToItem(S.Specific,t.id)}let a=G();function b(n){a.update(n)}function u(n){!a.wasMoved(n)||t.disabled||l.value||e.goToItem(S.Specific,t.id,0)}function d(n){!a.wasMoved(n)||t.disabled||!l.value||e.goToItem(S.Nothing)}return()=>{let{disabled:n}=t,o={active:l.value,disabled:n,close:e.closeMenu},{id:g,...R}=t;return P({ourProps:{id:g,ref:p,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:c,onFocus:i,onPointerenter:b,onMouseenter:b,onPointermove:u,onMousemove:u,onPointerleave:d,onMouseleave:d},theirProps:R,slot:o,attrs:s,slots:r,name:"MenuItem"})}}});export{oe as M,re as S,S as a,ue as b,le as g,z as p,G as u,Z as x};
