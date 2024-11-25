import{r as u,a as ve,R as ge,C as z,L as G,X as be,M as ye,u as L,b as we,c as je,S as Ne,T as Re,d as Ee,e as Ce,f as Se,U as Pe,g as ke,G as Ie,h as Oe,A as Le,H as _e,E as I,i as Ue,j as Be}from"./vivek.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();var ie={exports:{}},_={};/**
 * @license React
 * by Vivek W
 *
 * DevClub
 *
 * DevClub
 * LICENSE file in the root directory of this source tree.
 */var Te=u,$e=Symbol.for("react.element"),Me=Symbol.for("react.fragment"),Fe=Object.prototype.hasOwnProperty,Ae=Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,We={key:!0,ref:!0,__self:!0,__source:!0};function le(e,t,r){var n,a={},l=null,s=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Fe.call(t,n)&&!We.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:$e,type:e,key:l,ref:s,props:a,_owner:Ae.current}}_.Fragment=Me;_.jsx=le;_.jsxs=le;ie.exports=_;var i=ie.exports,A={},Y=ve;A.createRoot=Y.createRoot,A.hydrateRoot=Y.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * DevClub
 *
 * DevClub
 * by Vivek W
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}var N;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(N||(N={}));const H="popstate";function De(e){e===void 0&&(e={});function t(n,a){let{pathname:l,search:s,hash:c}=n.location;return W("",{pathname:l,search:s,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:oe(a)}return ze(t,r,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function se(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ve(){return Math.random().toString(36).substr(2,8)}function K(e,t){return{usr:e.state,key:e.key,idx:t}}function W(e,t,r,n){return r===void 0&&(r=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?E(t):t,{state:r,key:t&&t.key||n||Ve()})}function oe(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function E(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ze(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:l=!1}=n,s=a.history,c=N.Pop,o=null,h=p();h==null&&(h=0,s.replaceState(S({},s.state,{idx:h}),""));function p(){return(s.state||{idx:null}).idx}function d(){c=N.Pop;let m=p(),y=m==null?null:m-h;h=m,o&&o({action:c,location:x.location,delta:y})}function f(m,y){c=N.Push;let w=W(x.location,m,y);h=p()+1;let j=K(w,h),k=x.createHref(w);try{s.pushState(j,"",k)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(k)}l&&o&&o({action:c,location:x.location,delta:1})}function b(m,y){c=N.Replace;let w=W(x.location,m,y);h=p();let j=K(w,h),k=x.createHref(w);s.replaceState(j,"",k),l&&o&&o({action:c,location:x.location,delta:0})}function g(m){let y=a.location.origin!=="null"?a.location.origin:a.location.href,w=typeof m=="string"?m:oe(m);return w=w.replace(/ $/,"%20"),v(y,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,y)}let x={get action(){return c},get location(){return e(a,s)},listen(m){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(H,d),o=m,()=>{a.removeEventListener(H,d),o=null}},createHref(m){return t(a,m)},createURL:g,encodeLocation(m){let y=g(m);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:b,go(m){return s.go(m)}};return x}var X;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(X||(X={}));function Je(e,t,r){return r===void 0&&(r="/"),qe(e,t,r,!1)}function qe(e,t,r,n){let a=typeof t=="string"?E(t):t,l=de(a.pathname||"/",r);if(l==null)return null;let s=ce(e);Ge(s);let c=null;for(let o=0;c==null&&o<s.length;++o){let h=at(l);c=rt(s[o],h,n)}return c}function ce(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(l,s,c)=>{let o={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let h=R([n,o.relativePath]),p=r.concat(o);l.children&&l.children.length>0&&(v(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ce(l.children,t,p,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:et(h,l.index),routesMeta:p})};return e.forEach((l,s)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))a(l,s);else for(let o of ue(l.path))a(l,s,o)}),t}function ue(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return a?[l,""]:[l];let s=ue(n.join("/")),c=[];return c.push(...s.map(o=>o===""?l:[l,o].join("/"))),a&&c.push(...s),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function Ge(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:tt(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Ye=/^:[\w-]+$/,He=3,Ke=2,Xe=1,Qe=10,Ze=-2,Q=e=>e==="*";function et(e,t){let r=e.split("/"),n=r.length;return r.some(Q)&&(n+=Ze),t&&(n+=Ke),r.filter(a=>!Q(a)).reduce((a,l)=>a+(Ye.test(l)?He:l===""?Xe:Qe),n)}function tt(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function rt(e,t,r){let{routesMeta:n}=e,a={},l="/",s=[];for(let c=0;c<n.length;++c){let o=n[c],h=c===n.length-1,p=l==="/"?t:t.slice(l.length)||"/",d=Z({path:o.relativePath,caseSensitive:o.caseSensitive,end:h},p),f=o.route;if(!d&&h&&r&&!n[n.length-1].route.index&&(d=Z({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},p)),!d)return null;Object.assign(a,d.params),s.push({params:a,pathname:R([l,d.pathname]),pathnameBase:ut(R([l,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(l=R([l,d.pathnameBase]))}return s}function Z(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=nt(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((h,p,d)=>{let{paramName:f,isOptional:b}=p;if(f==="*"){let x=c[d]||"";s=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const g=c[d];return b&&!g?h[f]=void 0:h[f]=(g||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:s,pattern:e}}function nt(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),se(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,o)=>(n.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function at(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return se(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function de(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function it(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?E(e):e;return{pathname:r?r.startsWith("/")?r:lt(r,t):t,search:dt(n),hash:ht(a)}}function lt(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function F(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function st(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ot(e,t){let r=st(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ct(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=E(e):(a=S({},e),v(!a.pathname||!a.pathname.includes("?"),F("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),F("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),F("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,c;if(s==null)c=r;else{let d=t.length-1;if(!n&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;a.pathname=f.join("/")}c=d>=0?t[d]:"/"}let o=it(a,c),h=s&&s!=="/"&&s.endsWith("/"),p=(l||s===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(h||p)&&(o.pathname+="/"),o}const R=e=>e.join("/").replace(/\/\/+/g,"/"),ut=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ht=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const he=["post","put","patch","delete"];new Set(he);const mt=["get",...he];new Set(mt);/**
 * React Router v6.28.0
 *
 * DevClub
 *
 * DevClub
 * by Vivek W
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}const J=u.createContext(null),ft=u.createContext(null),U=u.createContext(null),B=u.createContext(null),C=u.createContext({outlet:null,matches:[],isDataRoute:!1}),pe=u.createContext(null);function T(){return u.useContext(B)!=null}function q(){return T()||v(!1),u.useContext(B).location}function me(e){u.useContext(U).static||u.useLayoutEffect(e)}function $(){let{isDataRoute:e}=u.useContext(C);return e?Pt():xt()}function xt(){T()||v(!1);let e=u.useContext(J),{basename:t,future:r,navigator:n}=u.useContext(U),{matches:a}=u.useContext(C),{pathname:l}=q(),s=JSON.stringify(ot(a,r.v7_relativeSplatPath)),c=u.useRef(!1);return me(()=>{c.current=!0}),u.useCallback(function(h,p){if(p===void 0&&(p={}),!c.current)return;if(typeof h=="number"){n.go(h);return}let d=ct(h,JSON.parse(s),l,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:R([t,d.pathname])),(p.replace?n.replace:n.push)(d,p.state,p)},[t,n,s,l,e])}function vt(e,t){return gt(e,t)}function gt(e,t,r,n){T()||v(!1);let{navigator:a}=u.useContext(U),{matches:l}=u.useContext(C),s=l[l.length-1],c=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let h=q(),p;if(t){var d;let m=typeof t=="string"?E(t):t;o==="/"||(d=m.pathname)!=null&&d.startsWith(o)||v(!1),p=m}else p=h;let f=p.pathname||"/",b=f;if(o!=="/"){let m=o.replace(/^\//,"").split("/");b="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=Je(e,{pathname:b}),x=Nt(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},c,m.params),pathname:R([o,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?o:R([o,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),l,r,n);return t&&x?u.createElement(B.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:N.Pop}},x):x}function bt(){let e=St(),t=pt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:a},r):null,null)}const yt=u.createElement(bt,null);class wt extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?u.createElement(C.Provider,{value:this.props.routeContext},u.createElement(pe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jt(e){let{routeContext:t,match:r,children:n}=e,a=u.useContext(J);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(C.Provider,{value:t},n)}function Nt(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=n)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,c=(a=r)==null?void 0:a.errors;if(c!=null){let p=s.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);p>=0||v(!1),s=s.slice(0,Math.min(s.length,p+1))}let o=!1,h=-1;if(r&&n&&n.v7_partialHydration)for(let p=0;p<s.length;p++){let d=s[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=p),d.route.id){let{loaderData:f,errors:b}=r,g=d.route.loader&&f[d.route.id]===void 0&&(!b||b[d.route.id]===void 0);if(d.route.lazy||g){o=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((p,d,f)=>{let b,g=!1,x=null,m=null;r&&(b=c&&d.route.id?c[d.route.id]:void 0,x=d.route.errorElement||yt,o&&(h<0&&f===0?(g=!0,m=null):h===f&&(g=!0,m=d.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,f+1)),w=()=>{let j;return b?j=x:g?j=m:d.route.Component?j=u.createElement(d.route.Component,null):d.route.element?j=d.route.element:j=p,u.createElement(jt,{match:d,routeContext:{outlet:p,matches:y,isDataRoute:r!=null},children:j})};return r&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?u.createElement(wt,{location:r.location,revalidation:r.revalidation,component:x,error:b,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):w()},null)}var fe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fe||{}),O=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(O||{});function Rt(e){let t=u.useContext(J);return t||v(!1),t}function Et(e){let t=u.useContext(ft);return t||v(!1),t}function Ct(e){let t=u.useContext(C);return t||v(!1),t}function xe(e){let t=Ct(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function St(){var e;let t=u.useContext(pe),r=Et(O.UseRouteError),n=xe(O.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Pt(){let{router:e}=Rt(fe.UseNavigateStable),t=xe(O.UseNavigateStable),r=u.useRef(!1);return me(()=>{r.current=!0}),u.useCallback(function(a,l){l===void 0&&(l={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,P({fromRouteId:t},l)))},[e,t])}const ee={};function kt(e,t){ee[t]||(ee[t]=!0,console.warn(t))}const te=(e,t,r)=>kt(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+r+"."));function It(e,t){e!=null&&e.v7_startTransition||te("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&te("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function D(e){v(!1)}function Ot(e){let{basename:t="/",children:r=null,location:n,navigationType:a=N.Pop,navigator:l,static:s=!1,future:c}=e;T()&&v(!1);let o=t.replace(/^\/*/,"/"),h=u.useMemo(()=>({basename:o,navigator:l,static:s,future:P({v7_relativeSplatPath:!1},c)}),[o,c,l,s]);typeof n=="string"&&(n=E(n));let{pathname:p="/",search:d="",hash:f="",state:b=null,key:g="default"}=n,x=u.useMemo(()=>{let m=de(p,o);return m==null?null:{location:{pathname:m,search:d,hash:f,state:b,key:g},navigationType:a}},[o,p,d,f,b,g,a]);return x==null?null:u.createElement(U.Provider,{value:h},u.createElement(B.Provider,{children:r,value:x}))}function Lt(e){let{children:t,location:r}=e;return vt(V(t),r)}new Promise(()=>{});function V(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(n,a)=>{if(!u.isValidElement(n))return;let l=[...t,a];if(n.type===u.Fragment){r.push.apply(r,V(n.props.children,l));return}n.type!==D&&v(!1),!n.props.index||!n.props.children||v(!1);let s={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=V(n.props.children,l)),r.push(s)}),r}/**
 * React Router DOM v6.28.0
 *
 * DevClub
 *
 * DevClub
 * by Vivek W
 *
 * @license MIT
 */const _t="6";try{window.__reactRouterVersion=_t}catch{}const Ut="startTransition",re=ge[Ut];function Bt(e){let{basename:t,children:r,future:n,window:a}=e,l=u.useRef();l.current==null&&(l.current=De({window:a,v5Compat:!0}));let s=l.current,[c,o]=u.useState({action:s.action,location:s.location}),{v7_startTransition:h}=n||{},p=u.useCallback(d=>{h&&re?re(()=>o(d)):o(d)},[o,h]);return u.useLayoutEffect(()=>s.listen(p),[s,p]),u.useEffect(()=>It(n),[n]),u.createElement(Ot,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:n})}var ne;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ne||(ne={}));var ae;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ae||(ae={}));function Tt(){const e=$(),t=q(),[r,n]=u.useState(!1),[a,l]=u.useState(!1);u.useEffect(()=>{const o=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const s=[{name:"Home",to:"home"},{name:"Event Details",to:"event-details"},{name:"Winner Gifts",to:"winter-gifts"},{name:"Sponsors",to:"sponsors"}],c=o=>{t.pathname!=="/"&&(e("/"),setTimeout(()=>{const h=document.getElementById(o);h==null||h.scrollIntoView({behavior:"smooth"})},100)),l(!1)};return i.jsx("nav",{className:`fixed w-full z-50 transition-all duration-300 mobile-safe-top ${r?"bg-black/50 backdrop-blur-lg":""}`,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:"flex items-center justify-between h-16 md:h-20",children:[i.jsxs("button",{onClick:()=>e("/"),className:"flex items-center cursor-pointer touch-active",children:[i.jsx(z,{className:"w-8 h-8 md:w-10 md:h-10 text-purple-400"}),i.jsx("span",{className:"ml-2 text-xl md:text-2xl font-bold text-white",children:"NIRMAAN"})]}),i.jsx("div",{className:"hidden md:block",children:i.jsxs("div",{className:"flex items-center space-x-8",children:[s.map(o=>i.jsx(G,{to:o.to,spy:!0,smooth:!0,duration:500,className:"text-white hover:text-purple-400 cursor-pointer transition-colors text-lg touch-active",onClick:()=>c(o.to),children:o.name},o.to)),i.jsx("button",{onClick:()=>e("/Submit"),className:"px-6 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 touch-active",children:"Submit"})]})}),i.jsx("button",{onClick:()=>l(!a),className:"md:hidden p-2 rounded-lg text-white hover:text-purple-400 transition-colors touch-active","aria-label":"Toggle menu",children:a?i.jsx(be,{className:"w-6 h-6"}):i.jsx(ye,{className:"w-6 h-6"})})]}),a&&i.jsx("div",{className:"md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-lg",children:i.jsxs("div",{className:"px-4 py-3 space-y-2 mobile-safe-bottom",children:[s.map(o=>i.jsx(G,{to:o.to,spy:!0,smooth:!0,duration:500,className:"block w-full px-4 py-3 text-white hover:text-purple-400 text-lg rounded-lg touch-active",onClick:()=>c(o.to),children:o.name},o.to)),i.jsx("button",{onClick:()=>{e("/Submit"),l(!1)},className:"w-full px-4 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 touch-active",children:"Submit"})]})})]})})}function $t(){const e=$(),{ref:t,inView:r}=L({triggerOnce:!0,threshold:.1});return i.jsxs("div",{className:"relative min-h-screen flex items-center justify-center mobile-safe-top mobile-safe-bottom",ref:t,children:[i.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[i.jsx("div",{className:"absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"}),i.jsx("div",{className:"absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"}),i.jsx("div",{className:"absolute bottom-1/4 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"})]}),i.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24",children:i.jsxs("div",{className:`text-center transform transition-all duration-1000 ${r?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:[i.jsx("div",{className:"animate-float mb-8",children:i.jsx(z,{className:"w-24 h-24 md:w-32 md:h-32 text-purple-400 mx-auto"})}),i.jsx("h1",{className:"text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-8 tracking-tight animate-pulse",children:"NIRMAAN"}),i.jsx("p",{className:"text-3xl md:text-4xl lg:text-5xl text-purple-200 mb-12 font-light",children:"Code the Future, Shape the Web"}),i.jsxs("div",{className:"flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-white",children:[i.jsxs("div",{className:"flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm touch-active",children:[i.jsx(we,{className:"w-6 h-6 md:w-8 md:h-8 text-purple-400"}),i.jsx("span",{className:"text-lg md:text-2xl",children:"Nov 26, 2024"})]}),i.jsxs("div",{className:"flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm touch-active",children:[i.jsx(je,{className:"w-6 h-6 md:w-8 md:h-8 text-purple-400"}),i.jsx("span",{className:"text-lg md:text-2xl",children:"3 PM - 8 PM"})]}),i.jsxs("div",{className:"flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm touch-active",children:[i.jsx(Ne,{className:"w-6 h-6 md:w-8 md:h-8 text-purple-400"}),i.jsx("span",{className:"text-lg md:text-2xl",children:"Free Entry"})]})]}),i.jsx("button",{onClick:()=>e("/Submit"),className:"inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 touch-active",children:"Submit"})]})})]})}function Mt(){const{ref:e,inView:t}=L({triggerOnce:!0,threshold:.1}),r=[{icon:i.jsx(Re,{className:"w-8 h-8"}),title:"Certificate + Dev Coin + Special Prize",description:"Win amazing prizes and recognition for your web development skills"},{icon:i.jsx(Ee,{className:"w-8 h-8"}),title:"Competition Focus",description:"Create innovative and responsive web applications"},{icon:i.jsx(Ce,{className:"w-8 h-8"}),title:"Tech Stack",description:"use HTML, CSS or Use any modern web framework - React, Vue, Angular, or vanilla JavaScript"},{icon:i.jsx(Se,{className:"w-8 h-8"}),title:"Judging Criteria",description:"Projects will be judged on innovation, design, code quality, and functionality"},{icon:i.jsx(Pe,{className:"w-8 h-8"}),title:"Team Size",description:"Participate individually or in teams of 2 to 4 members"},{icon:i.jsx(ke,{className:"w-8 h-8"}),title:"Timeline",description:"2.5-hour development phase with mentorship sessions and technical support"}];return i.jsx("section",{className:"py-24 relative overflow-hidden",ref:e,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:`text-center transform transition-all duration-1000 ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:[i.jsx("h2",{className:"text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8",children:"Event Details"}),i.jsx("p",{className:"text-xl text-purple-200 max-w-3xl mx-auto mb-16",children:"Join us for an exciting web development competition where creativity meets code. Shape the future of the web with your innovative ideas and technical skills."})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map((n,a)=>i.jsx("div",{className:`transform transition-all duration-1000 delay-${a*200} ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:i.jsxs("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/10 h-full",children:[i.jsx("div",{className:"text-purple-400 mb-6",children:n.icon}),i.jsx("h3",{className:"text-2xl font-semibold text-white mb-4",children:n.title}),i.jsx("p",{className:"text-purple-200",children:n.description})]})},a))})]})})}function Ft(){const e=$(),{ref:t,inView:r}=L({triggerOnce:!0,threshold:.1}),n=[{icon:i.jsx(Ie,{className:"w-12 h-12"}),title:"Limited Edition Swag",description:"Exclusive NIRMAAN branded hoodies, t-shirts, and stickers"},{icon:i.jsx(Oe,{className:"w-12 h-12"}),title:"Premium Subscriptions",description:"1-year free access to premium development tools and platforms"},{icon:i.jsx(Le,{className:"w-12 h-12"}),title:"Special Recognition",description:"Digital badges and certificates for all participants"}];return i.jsx("section",{className:"py-24 relative overflow-hidden",ref:t,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:`text-center transform transition-all duration-1000 ${r?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:[i.jsx("h2",{className:"text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8",children:"Winnerspecial gifts!"}),i.jsx("p",{className:"text-xl text-purple-200 max-w-3xl mx-auto mb-16",children:"Participate in NIRMAAN and receive these amazing Winnerspecial gifts!!"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map((a,l)=>i.jsx("div",{className:`transform transition-all duration-1000 delay-${l*200} ${r?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:i.jsxs("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/10 h-full",children:[i.jsx("div",{className:"text-purple-400 mb-6 transform hover:scale-110 transition-transform",children:a.icon}),i.jsx("h3",{className:"text-2xl font-semibold text-white mb-4",children:a.title}),i.jsx("p",{className:"text-purple-200",children:a.description})]})},l))}),i.jsx("div",{className:`mt-16 text-center transform transition-all duration-1000 delay-600 ${r?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:i.jsx("button",{onClick:()=>e("/Submit"),className:"inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-[2px] rounded-full hover:scale-105 transition-transform",children:i.jsx("div",{className:"px-8 py-4 text-xl font-semibold text-white bg-black rounded-full hover:bg-transparent transition-colors",children:"Submit to Claim Your Gifts"})})})]})})}function At(){const{ref:e,inView:t}=L({triggerOnce:!0,threshold:.1});return i.jsx("section",{className:"py-24 relative overflow-hidden",ref:e,children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{className:`text-center transform transition-all duration-1000 ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:[i.jsx("h2",{className:"text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8",children:"Our Sponsors"}),i.jsx("p",{className:"text-xl text-purple-200 max-w-3xl mx-auto mb-16",children:"Proudly supported by leading institutions in technology and education"})]}),i.jsx("div",{className:`flex justify-center items-center transform transition-all duration-1000 delay-200 ${t?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,children:i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10",children:i.jsx("img",{src:"NSTxADPU-white-removebg.png",alt:"Ajeenkya DY Patil University",className:"h-24 md:h-32 object-contain"})})})]})})}function Wt(){return i.jsx("footer",{className:"py-12 relative",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(z,{className:"w-8 h-8 text-purple-400"}),i.jsx("span",{className:"text-2xl font-bold text-white",children:"NIRMAAN"})]}),i.jsxs("div",{className:"flex items-center space-x-2 text-purple-300",children:[i.jsx("span",{children:"Made with"}),i.jsx(_e,{className:"w-4 h-4 text-pink-500 animate-pulse"}),i.jsx("span",{children:"by Vivek W"})]}),i.jsx("div",{className:"h-px w-full max-w-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"}),i.jsx("p",{className:"text-purple-300/60 text-sm text-center",children:"© 2024 Dev Club. All rights reserved."})]})})})}function Dt(){return i.jsxs("div",{className:"bg-gradient-to-br from-indigo-900 via-purple-900 to-black min-h-screen",children:[i.jsx("div",{className:"fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"}),i.jsx(Tt,{}),i.jsx(I,{name:"home",children:i.jsx($t,{})}),i.jsx(I,{name:"event-details",children:i.jsx(Mt,{})}),i.jsx(I,{name:"winter-gifts",children:i.jsx(Ft,{})}),i.jsx(I,{name:"sponsors",children:i.jsx(At,{})}),i.jsx(Wt,{})]})}function Vt(){const e=$(),t=()=>{e("/")};return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black",children:[i.jsx("div",{className:"fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"}),i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("button",{onClick:t,className:"inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 text-xl group touch-active",type:"button",children:[i.jsx(Ue,{className:"w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform"}),"Back to NIRMAAN"]}),i.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10",children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center",children:"Submit for NIRMAAN"}),i.jsx("div",{className:"relative overflow-hidden rounded-2xl bg-white/5",children:i.jsx("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfOhLDW-DC9OrY6qFj6r_KUaIC052SRCJd4r4leZWaEleCAmA/viewform?embedded=true",className:"w-full h-[800px] md:h-[600px]",frameBorder:"0",marginHeight:0,marginWidth:0,title:"Registration Form",children:"Loading…"})})]})]})]})}function zt(){return i.jsx(Bt,{children:i.jsxs(Lt,{children:[i.jsx(D,{path:"/",element:i.jsx(Dt,{})}),i.jsx(D,{path:"/Submit",element:i.jsx(Vt,{})})]})})}A.createRoot(document.getElementById("root")).render(i.jsx(Be.StrictMode,{children:i.jsx(zt,{})}));
