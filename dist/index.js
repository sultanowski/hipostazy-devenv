"use strict";(()=>{var ou=Object.create;var xl=Object.defineProperty;var lu=Object.getOwnPropertyDescriptor;var cu=Object.getOwnPropertyNames;var hu=Object.getPrototypeOf,uu=Object.prototype.hasOwnProperty;var fu=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var du=(o,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of cu(t))!uu.call(o,i)&&i!==e&&xl(o,i,{get:()=>t[i],enumerable:!(n=lu(t,i))||n.enumerable});return o};var pu=(o,t,e)=>(e=o!=null?ou(hu(o)):{},du(t||!o||!o.__esModule?xl(e,"default",{value:o,enumerable:!0}):e,o));var vl=fu((ia,ra)=>{(function(o,t){typeof ia=="object"&&typeof ra!="undefined"?ra.exports=t():typeof define=="function"&&define.amd?define(t):(o=o||self).barba=t()})(ia,function(){function o(L,P){for(var x=0;x<P.length;x++){var g=P[x];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(L,g.key,g)}}function t(L,P,x){return P&&o(L.prototype,P),x&&o(L,x),L}function e(){return(e=Object.assign||function(L){for(var P=1;P<arguments.length;P++){var x=arguments[P];for(var g in x)Object.prototype.hasOwnProperty.call(x,g)&&(L[g]=x[g])}return L}).apply(this,arguments)}function n(L,P){L.prototype=Object.create(P.prototype),L.prototype.constructor=L,L.__proto__=P}function i(L){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)})(L)}function r(L,P){return(r=Object.setPrototypeOf||function(x,g){return x.__proto__=g,x})(L,P)}function a(L,P,x){return(a=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(g,R,F){var z=[null];z.push.apply(z,R);var $=new(Function.bind.apply(g,z));return F&&r($,F.prototype),$}).apply(null,arguments)}function s(L){var P=typeof Map=="function"?new Map:void 0;return(s=function(x){if(x===null||Function.toString.call(x).indexOf("[native code]")===-1)return x;if(typeof x!="function")throw new TypeError("Super expression must either be null or a function");if(P!==void 0){if(P.has(x))return P.get(x);P.set(x,g)}function g(){return a(x,arguments,i(this).constructor)}return g.prototype=Object.create(x.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),r(g,x)})(L)}function l(L,P){try{var x=L()}catch(g){return P(g)}return x&&x.then?x.then(void 0,P):x}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,h="2.9.7",d=function(){};(function(L){L[L.off=0]="off",L[L.error=1]="error",L[L.warning=2]="warning",L[L.info=3]="info",L[L.debug=4]="debug"})(c||(c={}));var f=c.off,m=function(){function L(x){this.t=x}L.getLevel=function(){return f},L.setLevel=function(x){return f=c[x]};var P=L.prototype;return P.error=function(){for(var x=arguments.length,g=new Array(x),R=0;R<x;R++)g[R]=arguments[R];this.i(console.error,c.error,g)},P.warn=function(){for(var x=arguments.length,g=new Array(x),R=0;R<x;R++)g[R]=arguments[R];this.i(console.warn,c.warning,g)},P.info=function(){for(var x=arguments.length,g=new Array(x),R=0;R<x;R++)g[R]=arguments[R];this.i(console.info,c.info,g)},P.debug=function(){for(var x=arguments.length,g=new Array(x),R=0;R<x;R++)g[R]=arguments[R];this.i(console.log,c.debug,g)},P.i=function(x,g,R){g<=L.getLevel()&&x.apply(console,["["+this.t+"] "].concat(R))},L}(),_=J,u=D,p=T,v=O,w=q,b="/",M=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function T(L,P){for(var x,g=[],R=0,F=0,z="",$=P&&P.delimiter||b,rt=P&&P.whitelist||void 0,tt=!1;(x=M.exec(L))!==null;){var at=x[0],yt=x[1],I=x.index;if(z+=L.slice(F,I),F=I+at.length,yt)z+=yt[1],tt=!0;else{var B="",et=x[2],ht=x[3],gt=x[4],St=x[5];if(!tt&&z.length){var Ut=z.length-1,Gt=z[Ut];(!rt||rt.indexOf(Gt)>-1)&&(B=Gt,z=z.slice(0,Ut))}z&&(g.push(z),z="",tt=!1);var re=ht||gt,Tt=B||$;g.push({name:et||R++,prefix:B,delimiter:Tt,optional:St==="?"||St==="*",repeat:St==="+"||St==="*",pattern:re?S(re):"[^"+y(Tt===$?Tt:Tt+$)+"]+?"})}}return(z||F<L.length)&&g.push(z+L.substr(F)),g}function D(L,P){return function(x,g){var R=L.exec(x);if(!R)return!1;for(var F=R[0],z=R.index,$={},rt=g&&g.decode||decodeURIComponent,tt=1;tt<R.length;tt++)if(R[tt]!==void 0){var at=P[tt-1];$[at.name]=at.repeat?R[tt].split(at.delimiter).map(function(yt){return rt(yt,at)}):rt(R[tt],at)}return{path:F,index:z,params:$}}}function O(L,P){for(var x=new Array(L.length),g=0;g<L.length;g++)typeof L[g]=="object"&&(x[g]=new RegExp("^(?:"+L[g].pattern+")$",N(P)));return function(R,F){for(var z="",$=F&&F.encode||encodeURIComponent,rt=!F||F.validate!==!1,tt=0;tt<L.length;tt++){var at=L[tt];if(typeof at!="string"){var yt,I=R?R[at.name]:void 0;if(Array.isArray(I)){if(!at.repeat)throw new TypeError('Expected "'+at.name+'" to not repeat, but got array');if(I.length===0){if(at.optional)continue;throw new TypeError('Expected "'+at.name+'" to not be empty')}for(var B=0;B<I.length;B++){if(yt=$(I[B],at),rt&&!x[tt].test(yt))throw new TypeError('Expected all "'+at.name+'" to match "'+at.pattern+'"');z+=(B===0?at.prefix:at.delimiter)+yt}}else if(typeof I!="string"&&typeof I!="number"&&typeof I!="boolean"){if(!at.optional)throw new TypeError('Expected "'+at.name+'" to be '+(at.repeat?"an array":"a string"))}else{if(yt=$(String(I),at),rt&&!x[tt].test(yt))throw new TypeError('Expected "'+at.name+'" to match "'+at.pattern+'", but got "'+yt+'"');z+=at.prefix+yt}}else z+=at}return z}}function y(L){return L.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(L){return L.replace(/([=!:$/()])/g,"\\$1")}function N(L){return L&&L.sensitive?"":"i"}function q(L,P,x){for(var g=(x=x||{}).strict,R=x.start!==!1,F=x.end!==!1,z=x.delimiter||b,$=[].concat(x.endsWith||[]).map(y).concat("$").join("|"),rt=R?"^":"",tt=0;tt<L.length;tt++){var at=L[tt];if(typeof at=="string")rt+=y(at);else{var yt=at.repeat?"(?:"+at.pattern+")(?:"+y(at.delimiter)+"(?:"+at.pattern+"))*":at.pattern;P&&P.push(at),rt+=at.optional?at.prefix?"(?:"+y(at.prefix)+"("+yt+"))?":"("+yt+")?":y(at.prefix)+"("+yt+")"}}if(F)g||(rt+="(?:"+y(z)+")?"),rt+=$==="$"?"$":"(?="+$+")";else{var I=L[L.length-1],B=typeof I=="string"?I[I.length-1]===z:I===void 0;g||(rt+="(?:"+y(z)+"(?="+$+"))?"),B||(rt+="(?="+y(z)+"|"+$+")")}return new RegExp(rt,N(x))}function J(L,P,x){return L instanceof RegExp?function(g,R){if(!R)return g;var F=g.source.match(/\((?!\?)/g);if(F)for(var z=0;z<F.length;z++)R.push({name:z,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return g}(L,P):Array.isArray(L)?function(g,R,F){for(var z=[],$=0;$<g.length;$++)z.push(J(g[$],R,F).source);return new RegExp("(?:"+z.join("|")+")",N(F))}(L,P,x):function(g,R,F){return q(T(g,F),R,F)}(L,P,x)}_.match=function(L,P){var x=[];return D(J(L,x,P),x)},_.regexpToFunction=u,_.parse=p,_.compile=function(L,P){return O(T(L,P),P)},_.tokensToFunction=v,_.tokensToRegExp=w;var U={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},k=new(function(){function L(){this.o=U,this.u=new DOMParser}var P=L.prototype;return P.toString=function(x){return x.outerHTML},P.toDocument=function(x){return this.u.parseFromString(x,"text/html")},P.toElement=function(x){var g=document.createElement("div");return g.innerHTML=x,g},P.getHtml=function(x){return x===void 0&&(x=document),this.toString(x.documentElement)},P.getWrapper=function(x){return x===void 0&&(x=document),x.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},P.getContainer=function(x){return x===void 0&&(x=document),x.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},P.removeContainer=function(x){document.body.contains(x)&&x.parentNode.removeChild(x)},P.addContainer=function(x,g){var R=this.getContainer();R?this.s(x,R):g.appendChild(x)},P.getNamespace=function(x){x===void 0&&(x=document);var g=x.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return g?g.getAttribute(this.o.prefix+"-"+this.o.namespace):null},P.getHref=function(x){if(x.tagName&&x.tagName.toLowerCase()==="a"){if(typeof x.href=="string")return x.href;var g=x.getAttribute("href")||x.getAttribute("xlink:href");if(g)return this.resolveUrl(g.baseVal||g)}return null},P.resolveUrl=function(){for(var x=arguments.length,g=new Array(x),R=0;R<x;R++)g[R]=arguments[R];var F=g.length;if(F===0)throw new Error("resolveUrl requires at least one argument; got none.");var z=document.createElement("base");if(z.href=arguments[0],F===1)return z.href;var $=document.getElementsByTagName("head")[0];$.insertBefore(z,$.firstChild);for(var rt,tt=document.createElement("a"),at=1;at<F;at++)tt.href=arguments[at],z.href=rt=tt.href;return $.removeChild(z),rt},P.s=function(x,g){g.parentNode.insertBefore(x,g.nextSibling)},L}()),W=new(function(){function L(){this.h=[],this.v=-1}var P=L.prototype;return P.init=function(x,g){this.l="barba";var R={ns:g,scroll:{x:window.scrollX,y:window.scrollY},url:x};this.h.push(R),this.v=0;var F={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(F,"",x)},P.change=function(x,g,R){if(R&&R.state){var F=R.state,z=F.index;g=this.m(this.v-z),this.replace(F.states),this.v=z}else this.add(x,g);return g},P.add=function(x,g){var R=this.size,F=this.p(g),z={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:x};this.h.push(z),this.v=R;var $={from:this.l,index:R,states:[].concat(this.h)};switch(F){case"push":window.history&&window.history.pushState($,"",x);break;case"replace":window.history&&window.history.replaceState($,"",x)}},P.update=function(x,g){var R=g||this.v,F=e({},this.get(R),{},x);this.set(R,F)},P.remove=function(x){x?this.h.splice(x,1):this.h.pop(),this.v--},P.clear=function(){this.h=[],this.v=-1},P.replace=function(x){this.h=x},P.get=function(x){return this.h[x]},P.set=function(x,g){return this.h[x]=g},P.p=function(x){var g="push",R=x,F=U.prefix+"-"+U.history;return R.hasAttribute&&R.hasAttribute(F)&&(g=R.getAttribute(F)),g},P.m=function(x){return Math.abs(x)>1?x>0?"forward":"back":x===0?"popstate":x>0?"back":"forward"},t(L,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),L}()),Q=function(L,P){try{var x=function(){if(!P.next.html)return Promise.resolve(L).then(function(g){var R=P.next;if(g){var F=k.toElement(g);R.namespace=k.getNamespace(F),R.container=k.getContainer(F),R.html=g,W.update({ns:R.namespace});var z=k.toDocument(g);document.title=z.title}})}();return Promise.resolve(x&&x.then?x.then(function(){}):void 0)}catch(g){return Promise.reject(g)}},it=_,Y={__proto__:null,update:Q,nextTick:function(){return new Promise(function(L){window.requestAnimationFrame(L)})},pathToRegexp:it},lt=function(){return window.location.origin},st=function(L){return L===void 0&&(L=window.location.href),_t(L).port},_t=function(L){var P,x=L.match(/:\d+/);if(x===null)/^http/.test(L)&&(P=80),/^https/.test(L)&&(P=443);else{var g=x[0].substring(1);P=parseInt(g,10)}var R,F=L.replace(lt(),""),z={},$=F.indexOf("#");$>=0&&(R=F.slice($+1),F=F.slice(0,$));var rt=F.indexOf("?");return rt>=0&&(z=H(F.slice(rt+1)),F=F.slice(0,rt)),{hash:R,path:F,port:P,query:z}},H=function(L){return L.split("&").reduce(function(P,x){var g=x.split("=");return P[g[0]]=g[1],P},{})},ot=function(L){return L===void 0&&(L=window.location.href),L.replace(/(\/#.*|\/|#.*)$/,"")},ut={__proto__:null,getHref:function(){return window.location.href},getOrigin:lt,getPort:st,getPath:function(L){return L===void 0&&(L=window.location.href),_t(L).path},parse:_t,parseQuery:H,clean:ot};function ft(L,P,x){return P===void 0&&(P=2e3),new Promise(function(g,R){var F=new XMLHttpRequest;F.onreadystatechange=function(){if(F.readyState===XMLHttpRequest.DONE){if(F.status===200)g(F.responseText);else if(F.status){var z={status:F.status,statusText:F.statusText};x(L,z),R(z)}}},F.ontimeout=function(){var z=new Error("Timeout error ["+P+"]");x(L,z),R(z)},F.onerror=function(){var z=new Error("Fetch error");x(L,z),R(z)},F.open("GET",L),F.timeout=P,F.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),F.setRequestHeader("x-barba","yes"),F.send()})}var Z=function(L){return!!L&&(typeof L=="object"||typeof L=="function")&&typeof L.then=="function"};function Mt(L,P){return P===void 0&&(P={}),function(){for(var x=arguments.length,g=new Array(x),R=0;R<x;R++)g[R]=arguments[R];var F=!1,z=new Promise(function($,rt){P.async=function(){return F=!0,function(at,yt){at?rt(at):$(yt)}};var tt=L.apply(P,g);F||(Z(tt)?tt.then($,rt):$(tt))});return z}}var xt=new(function(L){function P(){var g;return(g=L.call(this)||this).logger=new m("@barba/core"),g.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],g.registered=new Map,g.init(),g}n(P,L);var x=P.prototype;return x.init=function(){var g=this;this.registered.clear(),this.all.forEach(function(R){g[R]||(g[R]=function(F,z){g.registered.has(R)||g.registered.set(R,new Set),g.registered.get(R).add({ctx:z||{},fn:F})})})},x.do=function(g){for(var R=this,F=arguments.length,z=new Array(F>1?F-1:0),$=1;$<F;$++)z[$-1]=arguments[$];if(this.registered.has(g)){var rt=Promise.resolve();return this.registered.get(g).forEach(function(tt){rt=rt.then(function(){return Mt(tt.fn,tt.ctx).apply(void 0,z)})}),rt.catch(function(tt){R.logger.debug("Hook error ["+g+"]"),R.logger.error(tt)})}return Promise.resolve()},x.clear=function(){var g=this;this.all.forEach(function(R){delete g[R]}),this.init()},x.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var g=[];this.registered.forEach(function(R,F){return g.push(F)}),this.logger.info("Registered hooks: "+g.join(","))},P}(d)),vt=function(){function L(P){if(this.P=[],typeof P=="boolean")this.g=P;else{var x=Array.isArray(P)?P:[P];this.P=x.map(function(g){return it(g)})}}return L.prototype.checkHref=function(P){if(typeof this.g=="boolean")return this.g;var x=_t(P).path;return this.P.some(function(g){return g.exec(x)!==null})},L}(),mt=function(L){function P(g){var R;return(R=L.call(this,g)||this).k=new Map,R}n(P,L);var x=P.prototype;return x.set=function(g,R,F){return this.k.set(g,{action:F,request:R}),{action:F,request:R}},x.get=function(g){return this.k.get(g)},x.getRequest=function(g){return this.k.get(g).request},x.getAction=function(g){return this.k.get(g).action},x.has=function(g){return!this.checkHref(g)&&this.k.has(g)},x.delete=function(g){return this.k.delete(g)},x.update=function(g,R){var F=e({},this.k.get(g),{},R);return this.k.set(g,F),F},P}(vt),kt=function(){return!window.history.pushState},Et=function(L){return!L.el||!L.href},wt=function(L){var P=L.event;return P.which>1||P.metaKey||P.ctrlKey||P.shiftKey||P.altKey},pe=function(L){var P=L.el;return P.hasAttribute("target")&&P.target==="_blank"},De=function(L){var P=L.el;return P.protocol!==void 0&&window.location.protocol!==P.protocol||P.hostname!==void 0&&window.location.hostname!==P.hostname},ue=function(L){var P=L.el;return P.port!==void 0&&st()!==st(P.href)},Ie=function(L){var P=L.el;return P.getAttribute&&typeof P.getAttribute("download")=="string"},Qt=function(L){return L.el.hasAttribute(U.prefix+"-"+U.prevent)},Nt=function(L){return!!L.el.closest("["+U.prefix+"-"+U.prevent+'="all"]')},rn=function(L){var P=L.href;return ot(P)===ot()&&st(P)===st()},ke=function(L){function P(g){var R;return(R=L.call(this,g)||this).suite=[],R.tests=new Map,R.init(),R}n(P,L);var x=P.prototype;return x.init=function(){this.add("pushState",kt),this.add("exists",Et),this.add("newTab",wt),this.add("blank",pe),this.add("corsDomain",De),this.add("corsPort",ue),this.add("download",Ie),this.add("preventSelf",Qt),this.add("preventAll",Nt),this.add("sameUrl",rn,!1)},x.add=function(g,R,F){F===void 0&&(F=!0),this.tests.set(g,R),F&&this.suite.push(g)},x.run=function(g,R,F,z){return this.tests.get(g)({el:R,event:F,href:z})},x.checkLink=function(g,R,F){var z=this;return this.suite.some(function($){return z.run($,g,R,F)})},P}(vt),C=function(L){function P(x,g){var R;g===void 0&&(g="Barba error");for(var F=arguments.length,z=new Array(F>2?F-2:0),$=2;$<F;$++)z[$-2]=arguments[$];return(R=L.call.apply(L,[this].concat(z))||this).error=x,R.label=g,Error.captureStackTrace&&Error.captureStackTrace(function(rt){if(rt===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return rt}(R),P),R.name="BarbaError",R}return n(P,L),P}(s(Error)),A=function(){function L(x){x===void 0&&(x=[]),this.logger=new m("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],x&&(this.all=this.all.concat(x)),this.update()}var P=L.prototype;return P.add=function(x,g){switch(x){case"rule":this.A.splice(g.position||0,0,g.value);break;case"transition":default:this.all.push(g)}this.update()},P.resolve=function(x,g){var R=this;g===void 0&&(g={});var F=g.once?this.once:this.page;F=F.filter(g.self?function(I){return I.name&&I.name==="self"}:function(I){return!I.name||I.name!=="self"});var z=new Map,$=F.find(function(I){var B=!0,et={};return!(!g.self||I.name!=="self")||(R.A.reverse().forEach(function(ht){B&&(B=R.R(I,ht,x,et),I.from&&I.to&&(B=R.R(I,ht,x,et,"from")&&R.R(I,ht,x,et,"to")),I.from&&!I.to&&(B=R.R(I,ht,x,et,"from")),!I.from&&I.to&&(B=R.R(I,ht,x,et,"to")))}),z.set(I,et),B)}),rt=z.get($),tt=[];if(tt.push(g.once?"once":"page"),g.self&&tt.push("self"),rt){var at,yt=[$];Object.keys(rt).length>0&&yt.push(rt),(at=this.logger).info.apply(at,["Transition found ["+tt.join(",")+"]"].concat(yt))}else this.logger.info("No transition found ["+tt.join(",")+"]");return $},P.update=function(){var x=this;this.all=this.all.map(function(g){return x.T(g)}).sort(function(g,R){return g.priority-R.priority}).reverse().map(function(g){return delete g.priority,g}),this.page=this.all.filter(function(g){return g.leave!==void 0||g.enter!==void 0}),this.once=this.all.filter(function(g){return g.once!==void 0})},P.R=function(x,g,R,F,z){var $=!0,rt=!1,tt=x,at=g.name,yt=at,I=at,B=at,et=z?tt[z]:tt,ht=z==="to"?R.next:R.current;if(z?et&&et[at]:et[at]){switch(g.type){case"strings":default:var gt=Array.isArray(et[yt])?et[yt]:[et[yt]];ht[yt]&&gt.indexOf(ht[yt])!==-1&&(rt=!0),gt.indexOf(ht[yt])===-1&&($=!1);break;case"object":var St=Array.isArray(et[I])?et[I]:[et[I]];ht[I]?(ht[I].name&&St.indexOf(ht[I].name)!==-1&&(rt=!0),St.indexOf(ht[I].name)===-1&&($=!1)):$=!1;break;case"function":et[B](R)?rt=!0:$=!1}rt&&(z?(F[z]=F[z]||{},F[z][at]=tt[z][at]):F[at]=tt[at])}return $},P.O=function(x,g,R){var F=0;return(x[g]||x.from&&x.from[g]||x.to&&x.to[g])&&(F+=Math.pow(10,R),x.from&&x.from[g]&&(F+=1),x.to&&x.to[g]&&(F+=2)),F},P.T=function(x){var g=this;x.priority=0;var R=0;return this.A.forEach(function(F,z){R+=g.O(x,F.name,z+1)}),x.priority=R,x},L}(),j=function(){function L(x){x===void 0&&(x=[]),this.logger=new m("@barba/core"),this.S=!1,this.store=new A(x)}var P=L.prototype;return P.get=function(x,g){return this.store.resolve(x,g)},P.doOnce=function(x){var g=x.data,R=x.transition;try{var F=function(){z.S=!1},z=this,$=R||{};z.S=!0;var rt=l(function(){return Promise.resolve(z.j("beforeOnce",g,$)).then(function(){return Promise.resolve(z.once(g,$)).then(function(){return Promise.resolve(z.j("afterOnce",g,$)).then(function(){})})})},function(tt){z.S=!1,z.logger.debug("Transition error [before/after/once]"),z.logger.error(tt)});return Promise.resolve(rt&&rt.then?rt.then(F):F())}catch(tt){return Promise.reject(tt)}},P.doPage=function(x){var g=x.data,R=x.transition,F=x.page,z=x.wrapper;try{var $=function(B){if(rt)return B;tt.S=!1},rt=!1,tt=this,at=R||{},yt=at.sync===!0||!1;tt.S=!0;var I=l(function(){function B(){return Promise.resolve(tt.j("before",g,at)).then(function(){var ht=!1;function gt(Ut){return ht?Ut:Promise.resolve(tt.remove(g)).then(function(){return Promise.resolve(tt.j("after",g,at)).then(function(){})})}var St=function(){if(yt)return l(function(){return Promise.resolve(tt.add(g,z)).then(function(){return Promise.resolve(tt.j("beforeLeave",g,at)).then(function(){return Promise.resolve(tt.j("beforeEnter",g,at)).then(function(){return Promise.resolve(Promise.all([tt.leave(g,at),tt.enter(g,at)])).then(function(){return Promise.resolve(tt.j("afterLeave",g,at)).then(function(){return Promise.resolve(tt.j("afterEnter",g,at)).then(function(){})})})})})})},function(Tt){if(tt.M(Tt))throw new C(Tt,"Transition error [sync]")});var Ut=function(Tt){return ht?Tt:l(function(){var se=function(){if(Gt!==!1)return Promise.resolve(tt.add(g,z)).then(function(){return Promise.resolve(tt.j("beforeEnter",g,at)).then(function(){return Promise.resolve(tt.enter(g,at,Gt)).then(function(){return Promise.resolve(tt.j("afterEnter",g,at)).then(function(){})})})})}();if(se&&se.then)return se.then(function(){})},function(se){if(tt.M(se))throw new C(se,"Transition error [before/after/enter]")})},Gt=!1,re=l(function(){return Promise.resolve(tt.j("beforeLeave",g,at)).then(function(){return Promise.resolve(Promise.all([tt.leave(g,at),Q(F,g)]).then(function(Tt){return Tt[0]})).then(function(Tt){return Gt=Tt,Promise.resolve(tt.j("afterLeave",g,at)).then(function(){})})})},function(Tt){if(tt.M(Tt))throw new C(Tt,"Transition error [before/after/leave]")});return re&&re.then?re.then(Ut):Ut(re)}();return St&&St.then?St.then(gt):gt(St)})}var et=function(){if(yt)return Promise.resolve(Q(F,g)).then(function(){})}();return et&&et.then?et.then(B):B()},function(B){throw tt.S=!1,B.name&&B.name==="BarbaError"?(tt.logger.debug(B.label),tt.logger.error(B.error),B):(tt.logger.debug("Transition error [page]"),tt.logger.error(B),B)});return Promise.resolve(I&&I.then?I.then($):$(I))}catch(B){return Promise.reject(B)}},P.once=function(x,g){try{return Promise.resolve(xt.do("once",x,g)).then(function(){return g.once?Mt(g.once,g)(x):Promise.resolve()})}catch(R){return Promise.reject(R)}},P.leave=function(x,g){try{return Promise.resolve(xt.do("leave",x,g)).then(function(){return g.leave?Mt(g.leave,g)(x):Promise.resolve()})}catch(R){return Promise.reject(R)}},P.enter=function(x,g,R){try{return Promise.resolve(xt.do("enter",x,g)).then(function(){return g.enter?Mt(g.enter,g)(x,R):Promise.resolve()})}catch(F){return Promise.reject(F)}},P.add=function(x,g){try{return k.addContainer(x.next.container,g),xt.do("nextAdded",x),Promise.resolve()}catch(R){return Promise.reject(R)}},P.remove=function(x){try{return k.removeContainer(x.current.container),xt.do("currentRemoved",x),Promise.resolve()}catch(g){return Promise.reject(g)}},P.M=function(x){return x.message?!/Timeout error|Fetch error/.test(x.message):!x.status},P.j=function(x,g,R){try{return Promise.resolve(xt.do(x,g,R)).then(function(){return R[x]?Mt(R[x],R)(g):Promise.resolve()})}catch(F){return Promise.reject(F)}},t(L,[{key:"isRunning",get:function(){return this.S},set:function(x){this.S=x}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(x){return x.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(x){return x.to&&!x.to.route||x.sync})}}]),L}(),ct=function(){function L(P){var x=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,P.length!==0&&(P.forEach(function(g){x.byNamespace.set(g.namespace,g)}),this.names.forEach(function(g){xt[g](x.L(g))}))}return L.prototype.L=function(P){var x=this;return function(g){var R=P.match(/enter/i)?g.next:g.current,F=x.byNamespace.get(R.namespace);return F&&F[P]?Mt(F[P],F)(g):Promise.resolve()}},L}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(L){var P=this;do{if(P.matches(L))return P;P=P.parentElement||P.parentNode}while(P!==null&&P.nodeType===1);return null});var dt={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function L(){this.version=h,this.schemaPage=dt,this.Logger=m,this.logger=new m("@barba/core"),this.plugins=[],this.hooks=xt,this.dom=k,this.helpers=Y,this.history=W,this.request=ft,this.url=ut}var P=L.prototype;return P.use=function(x,g){var R=this.plugins;R.indexOf(x)>-1?this.logger.warn("Plugin ["+x.name+"] already installed."):typeof x.install=="function"?(x.install(this,g),R.push(x)):this.logger.warn("Plugin ["+x.name+'] has no "install" method.')},P.init=function(x){var g=x===void 0?{}:x,R=g.transitions,F=R===void 0?[]:R,z=g.views,$=z===void 0?[]:z,rt=g.schema,tt=rt===void 0?U:rt,at=g.requestError,yt=g.timeout,I=yt===void 0?2e3:yt,B=g.cacheIgnore,et=B!==void 0&&B,ht=g.prefetchIgnore,gt=ht!==void 0&&ht,St=g.preventRunning,Ut=St!==void 0&&St,Gt=g.prevent,re=Gt===void 0?null:Gt,Tt=g.debug,se=g.logLevel;if(m.setLevel((Tt!==void 0&&Tt)===!0?"debug":se===void 0?"off":se),this.logger.info(this.version),Object.keys(tt).forEach(function(ni){U[ni]&&(U[ni]=tt[ni])}),this.$=at,this.timeout=I,this.cacheIgnore=et,this.prefetchIgnore=gt,this.preventRunning=Ut,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var ve=this.data.current;if(!ve.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new mt(et),this.prevent=new ke(gt),this.transitions=new j(F),this.views=new ct($),re!==null){if(typeof re!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",re)}this.history.init(ve.url.href,ve.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(ni){return ni.init()});var bn=this.data;bn.trigger="barba",bn.next=bn.current,bn.current=e({},this.schemaPage),this.hooks.do("ready",bn),this.once(bn),this.q()},P.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},P.force=function(x){window.location.assign(x)},P.go=function(x,g,R){var F;if(g===void 0&&(g="barba"),this.transitions.isRunning)this.force(x);else if(!(F=g==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(x):this.prevent.run("sameUrl",null,null,x))||this.transitions.hasSelf)return g=this.history.change(x,g,R),R&&(R.stopPropagation(),R.preventDefault()),this.page(x,g,F)},P.once=function(x){try{var g=this;return Promise.resolve(g.hooks.do("beforeEnter",x)).then(function(){function R(){return Promise.resolve(g.hooks.do("afterEnter",x)).then(function(){})}var F=function(){if(g.transitions.hasOnce){var z=g.transitions.get(x,{once:!0});return Promise.resolve(g.transitions.doOnce({transition:z,data:x})).then(function(){})}}();return F&&F.then?F.then(R):R()})}catch(R){return Promise.reject(R)}},P.page=function(x,g,R){try{var F=function(){var tt=z.data;return Promise.resolve(z.hooks.do("page",tt)).then(function(){var at=l(function(){var yt=z.transitions.get(tt,{once:!1,self:R});return Promise.resolve(z.transitions.doPage({data:tt,page:$,transition:yt,wrapper:z._})).then(function(){z.q()})},function(){m.getLevel()===0&&z.force(tt.current.url.href)});if(at&&at.then)return at.then(function(){})})},z=this;z.data.next.url=e({href:x},z.url.parse(x)),z.data.trigger=g;var $=z.cache.has(x)?z.cache.update(x,{action:"click"}).request:z.cache.set(x,z.request(x,z.timeout,z.onRequestError.bind(z,g)),"click").request,rt=function(){if(z.transitions.shouldWait)return Promise.resolve(Q($,z.data)).then(function(){})}();return Promise.resolve(rt&&rt.then?rt.then(F):F())}catch(tt){return Promise.reject(tt)}},P.onRequestError=function(x){this.transitions.isRunning=!1;for(var g=arguments.length,R=new Array(g>1?g-1:0),F=1;F<g;F++)R[F-1]=arguments[F];var z=R[0],$=R[1],rt=this.cache.getAction(z);return this.cache.delete(z),!(this.$&&this.$(x,rt,z,$)===!1||(rt==="click"&&this.force(z),1))},P.prefetch=function(x){var g=this;this.cache.has(x)||this.cache.set(x,this.request(x,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(R){g.logger.error(R)}),"prefetch")},P.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},P.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},P.B=function(x){var g=this,R=this.I(x);if(R){var F=this.dom.getHref(R);this.prevent.checkHref(F)||this.cache.has(F)||this.cache.set(F,this.request(F,this.timeout,this.onRequestError.bind(this,R)).catch(function(z){g.logger.error(z)}),"enter")}},P.U=function(x){var g=this.I(x);if(g)return this.transitions.isRunning&&this.preventRunning?(x.preventDefault(),void x.stopPropagation()):void this.go(this.dom.getHref(g),g,x)},P.D=function(x){this.go(this.url.getHref(),"popstate",x)},P.I=function(x){for(var g=x.target;g&&!this.dom.getHref(g);)g=g.parentNode;if(g&&!this.prevent.checkLink(g,x,this.dom.getHref(g)))return g},P.q=function(){var x=this.url.getHref(),g={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:e({href:x},this.url.parse(x))};this.C={current:g,next:e({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},t(L,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),L}())})});var iu=pu(vl(),1);function wn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function El(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var ze={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fi={duration:.5,overwrite:!1,delay:0},wa,ye,Jt,$e=1e8,Ht=1/$e,fa=Math.PI*2,mu=fa/4,gu=0,Cl=Math.sqrt,_u=Math.cos,xu=Math.sin,ae=function(t){return typeof t=="string"},$t=function(t){return typeof t=="function"},Tn=function(t){return typeof t=="number"},as=function(t){return typeof t=="undefined"},gn=function(t){return typeof t=="object"},Ne=function(t){return t!==!1},Sa=function(){return typeof window!="undefined"},$r=function(t){return $t(t)||ae(t)},Pl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},be=Array.isArray,da=/(?:-?\.?\d|\.)+/gi,Ta=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Aa=/[+-]=-?[.\d]+/,Rl=/[^,'"\[\]\s]+/gi,vu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,Je,pa,Ea,Ve={},ts={},Ll,Dl=function(t){return(ts=ci(t,Ve))&&Me},os=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},es=function(t,e){return!e&&console.warn(t)},Il=function(t,e){return t&&(Ve[t]=e)&&ts&&(ts[t]=e)||Ve},Sr=function(){return 0},yu={suppressEvents:!0,isStart:!0,kill:!1},jr={suppressEvents:!0,kill:!1},bu={suppressEvents:!0},Ca={},Un=[],ma={},Ol,Oe={},aa={},yl=30,Kr=[],Pa="",Ra=function(t){var e=t[0],n,i;if(gn(e)||$t(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Kr.length;i--&&!Kr[i].targetTest(e););n=Kr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ia(t[i],n)))||t.splice(i,1);return t},Bn=function(t){return t._gsap||Ra(je(t))[0]._gsap},La=function(t,e,n){return(n=t[e])&&$t(n)?t[e]():as(n)&&t.getAttribute&&t.getAttribute(e)||n},Te=function(t,e){return(t=t.split(",")).forEach(e)||t},jt=function(t){return Math.round(t*1e5)/1e5||0},me=function(t){return Math.round(t*1e7)/1e7||0},ui=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Mu=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ns=function(){var t=Un.length,e=Un.slice(0),n,i;for(ma={},Un.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fl=function(t,e,n,i){Un.length&&!ye&&ns(),t.render(e,n,i||ye&&e<0&&(t._initted||t._startAt)),Un.length&&!ye&&ns()},Nl=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Rl).length<2?e:ae(t)?t.trim():t},zl=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wu=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ci=function(t,e){for(var n in e)t[n]=e[n];return t},bl=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},is=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},br=function(t){var e=t.parent||Yt,n=t.keyframes?wu(be(t.keyframes)):Qe;if(Ne(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Su=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},kl=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ls=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Vn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ai=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Tu=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ga=function(t,e,n,i){return t._startAt&&(ye?t._startAt.revert(jr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Au=function o(t){return!t||t._ts&&o(t.parent)},Ml=function(t){return t._repeat?Ni(t._tTime,t=t.duration()+t._rDelay)*t:0},Ni=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},rs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},cs=function(t){return t._end=me(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ht)||0))},hs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),cs(t),n._dirty||ai(n,t)),t},Ul=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=rs(t.rawTime(),e),(!e._dur||Er(0,e.totalDuration(),n)-e._tTime>Ht)&&e.render(n,!0)),ai(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ht}},mn=function(t,e,n,i){return e.parent&&Vn(e),e._start=me((Tn(n)?n:n||t!==Yt?Ze(t,n,e):t._time)+e._delay),e._end=me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),kl(t,e,"_first","_last",t._sort?"_start":0),_a(e)||(t._recent=e),i||Ul(t,e),t._ts<0&&hs(t,t._tTime),t},Bl=function(t,e){return(Ve.ScrollTrigger||os("scrollTrigger",e))&&Ve.ScrollTrigger.create(e,t)},Vl=function(t,e,n,i,r){if(Na(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ol!==Fe.frame)return Un.push(t),t._lazy=[r,i],1},Eu=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},_a=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Cu=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Eu(t)&&!(!t._initted&&_a(t))||(t._ts<0||t._dp._ts<0)&&!_a(t))?0:1,s=t._rDelay,l=0,c,h,d;if(s&&t._repeat&&(l=Er(0,t._tDur,e),h=Ni(l,s),t._yoyo&&h&1&&(a=1-a),h!==Ni(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ye||i||t._zTime===Ht||!e&&t._zTime){if(!t._initted&&Vl(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ht:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ga(t,e,n,!0),t._onUpdate&&!n&&Ke(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Vn(t,1),!n&&!ye&&(Ke(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Pu=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},zi=function(t,e,n,i){var r=t._repeat,a=me(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:me(a*(r+1)+t._rDelay*r):a,s>0&&!i&&hs(t,t._tTime=t._tDur*s),t.parent&&cs(t),n||ai(t.parent,t),t},wl=function(t){return t instanceof ge?ai(t):zi(t,t._dur)},Ru={_start:0,endTime:Sr,totalDuration:Sr},Ze=function o(t,e,n){var i=t.labels,r=t._recent||Ru,a=t.duration()>=$e?r.endTime(!1):t._dur,s,l,c;return ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(be(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},Mr=function(t,e,n){var i=Tn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ne(l.vars.inherit)&&l.parent;a.immediateRender=Ne(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new te(e[0],a,e[r+1])},Hn=function(t,e){return t||t===0?e(t):e},Er=function(t,e,n){return n<t?t:n>e?e:n},_e=function(t,e){return!ae(t)||!(e=vu.exec(t))?"":e[1]},Lu=function(t,e,n){return Hn(n,function(i){return Er(t,e,i)})},xa=[].slice,Hl=function(t,e){return t&&gn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gn(t[0]))&&!t.nodeType&&t!==Je},Du=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ae(i)&&!e||Hl(i,1)?(r=n).push.apply(r,je(i)):n.push(i)})||n},je=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):ae(t)&&!n&&(pa||!ki())?xa.call((e||Ea).querySelectorAll(t),0):be(t)?Du(t,n):Hl(t)?xa.call(t,0):t?[t]:[]},va=function(t){return t=je(t)[0]||es("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return je(e,n.querySelectorAll?n:n===t?es("Invalid scope")||Ea.createElement("div"):t)}},Gl=function(t){return t.sort(function(){return .5-Math.random()})},Wl=function(t){if($t(t))return t;var e=gn(t)?t:{each:t},n=oi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,h=i,d=i;return ae(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(h=i[0],d=i[1]),function(f,m,_){var u=(_||e).length,p=a[u],v,w,b,M,T,D,O,y,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,$e])[1],!S){for(O=-$e;O<(O=_[S++].getBoundingClientRect().left)&&S<u;);S--}for(p=a[u]=[],v=l?Math.min(S,u)*h-.5:i%S,w=S===$e?0:l?u*d/S-.5:i/S|0,O=0,y=$e,D=0;D<u;D++)b=D%S-v,M=w-(D/S|0),p[D]=T=c?Math.abs(c==="y"?M:b):Cl(b*b+M*M),T>O&&(O=T),T<y&&(y=T);i==="random"&&Gl(p),p.max=O-y,p.min=y,p.v=u=(parseFloat(e.amount)||parseFloat(e.each)*(S>u?u-1:c?c==="y"?u/S:S:Math.max(S,u/S))||0)*(i==="edges"?-1:1),p.b=u<0?r-u:r,p.u=_e(e.amount||e.each)||0,n=n&&u<0?Ql(n):n}return u=(p[f]-p.min)/p.max||0,me(p.b+(n?n(u):u)*p.v)+p.u}},ya=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Tn(n)?0:_e(n))}},ql=function(t,e){var n=be(t),i,r;return!n&&gn(t)&&(i=n=t.radius||$e,t.values?(t=je(t.values),(r=!Tn(t[0]))&&(i*=i)):t=ya(t.increment)),Hn(e,n?$t(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=$e,h=0,d=t.length,f,m;d--;)r?(f=t[d].x-s,m=t[d].y-l,f=f*f+m*m):f=Math.abs(t[d]-s),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:a,r||h===a||Tn(a)?h:h+_e(a)}:ya(t))},Xl=function(t,e,n,i){return Hn(be(t)?!e:n===!0?!!(n=0):!i,function(){return be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Iu=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Ou=function(t,e){return function(n){return t(parseFloat(n))+(e||_e(n))}},Fu=function(t,e,n){return Zl(t,e,0,1,n)},Yl=function(t,e,n){return Hn(n,function(i){return t[~~e(i)]})},Nu=function o(t,e,n){var i=e-t;return be(t)?Yl(t,o(0,t.length),e):Hn(n,function(r){return(i+(r-t)%i)%i+t})},zu=function o(t,e,n){var i=e-t,r=i*2;return be(t)?Yl(t,o(0,t.length-1),e):Hn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ui=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Rl:da),n+=t.substr(e,i-e)+Xl(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Zl=function(t,e,n,i,r){var a=e-t,s=i-n;return Hn(r,function(l){return n+((l-t)/a*s||0)})},ku=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ae(t),s={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(be(t)&&!be(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(o(t[c-1],t[c]));d--,r=function(_){_*=d;var u=Math.min(f,~~_);return h[u](_-u)},n=e}else i||(t=ci(be(t)?[]:{},t));if(!h){for(l in e)Oa.call(s,t,l,"get",e[l]);r=function(_){return Ua(_,s)||(a?t.p:t)}}}return Hn(n,r)},Sl=function(t,e,n){var i=t.labels,r=$e,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Ke=function(t,e,n){var i=t.vars,r=i[e],a=Jt,s=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Un.length&&ns(),s&&(Jt=s),h=l?r.apply(c,l):r.call(c),Jt=a,h},vr=function(t){return Vn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ye),t.progress()<1&&Ke(t,"onInterrupt"),t},Oi,Jl=[],$l=function(t){if(Sa()&&t){t=!t.name&&t.default||t;var e=t.name,n=$t(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Sr,render:Ua,add:Oa,kill:tf,modifier:Qu,rawVars:0},a={targetTest:0,get:0,getSetter:us,aliases:{},register:0};if(ki(),t!==i){if(Oe[e])return;Qe(i,Qe(is(t,r),a)),ci(i.prototype,ci(r,is(t,a))),Oe[i.prop=e]=i,t.targetTest&&(Kr.push(i),Ca[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Il(e,i),t.register&&t.register(Me,i,Ae)}else t&&Jl.push(t)},Vt=255,yr={aqua:[0,Vt,Vt],lime:[0,Vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Vt],navy:[0,0,128],white:[Vt,Vt,Vt],olive:[128,128,0],yellow:[Vt,Vt,0],orange:[Vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Vt,0,0],pink:[Vt,192,203],cyan:[0,Vt,Vt],transparent:[Vt,Vt,Vt,0]},oa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Vt+.5|0},jl=function(t,e,n){var i=t?Tn(t)?[t>>16,t>>8&Vt,t&Vt]:0:yr.black,r,a,s,l,c,h,d,f,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),yr[t])i=yr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Vt,i&Vt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Vt,t&Vt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(da),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=oa(l+1/3,r,a),i[1]=oa(l,r,a),i[2]=oa(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Ta),n&&i.length<4&&(i[3]=1),i}else i=t.match(da)||yr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Vt,a=i[1]/Vt,s=i[2]/Vt,d=Math.max(r,a,s),f=Math.min(r,a,s),h=(d+f)/2,d===f?l=c=0:(m=d-f,c=h>.5?m/(2-d-f):m/(d+f),l=d===r?(a-s)/m+(a<s?6:0):d===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Kl=function(t){var e=[],n=[],i=-1;return t.split(Sn).forEach(function(r){var a=r.match(hi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Tl=function(t,e,n){var i="",r=(t+i).match(Sn),a=e?"hsla(":"rgba(",s=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=jl(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Kl(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Sn,"1").split(hi),d=c.length-1;s<d;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Sn),d=c.length-1;s<d;s++)i+=c[s]+r[s];return i+c[d]},Sn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in yr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),Uu=/hsl[a]?\(/,Da=function(t){var e=t.join(" "),n;if(Sn.lastIndex=0,Sn.test(e))return n=Uu.test(e),t[1]=Tl(t[1],n),t[0]=Tl(t[0],n,Kl(t[1])),!0},Tr,Fe=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,h,d,f,m,_=function u(p){var v=o()-i,w=p===!0,b,M,T,D;if(v>t&&(n+=v-e),i+=v,T=i-n,b=T-a,(b>0||w)&&(D=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=b+(b>=r?4:r-b),M=1),w||(l=c(u)),M)for(m=0;m<s.length;m++)s[m](T,f,D,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Ll&&(!pa&&Sa()&&(Je=pa=window,Ea=Je.document||{},Ve.gsap=Me,(Je.gsapVersions||(Je.gsapVersions=[])).push(Me.version),Dl(ts||Je.GreenSockGlobals||!Je.gsap&&Je||{}),h=Je.requestAnimationFrame,Jl.forEach($l)),l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Tr=1,_(2))},sleep:function(){(h?Je.cancelAnimationFrame:clearTimeout)(l),Tr=0,c=Sr},lagSmoothing:function(p,v){t=p||1/0,e=Math.min(v||33,t)},fps:function(p){r=1e3/(p||240),a=d.time*1e3+r},add:function(p,v,w){var b=v?function(M,T,D,O){p(M,T,D,O),d.remove(b)}:p;return d.remove(p),s[w?"unshift":"push"](b),ki(),b},remove:function(p,v){~(v=s.indexOf(p))&&s.splice(v,1)&&m>=v&&m--},_listeners:s},d}(),ki=function(){return!Tr&&Fe.wake()},Lt={},Bu=/^[\d.\-M][\d.\-,\s]/,Vu=/["']/g,Hu=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(Vu,"").trim():+c,i=l.substr(s+1).trim();return e},Gu=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Wu=function(t){var e=(t+"").split("("),n=Lt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Hu(e[1])]:Gu(t).split(",").map(Nl)):Lt._CE&&Bu.test(t)?Lt._CE("",t):n},Ql=function(t){return function(e){return 1-t(1-e)}},tc=function o(t,e){for(var n=t._first,i;n;)n instanceof ge?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},oi=function(t,e){return t&&($t(t)?t:Lt[t]||Wu(t))||e},fi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Te(t,function(s){Lt[s]=Ve[s]=r,Lt[a=s.toLowerCase()]=n;for(var l in r)Lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Lt[s+"."+l]=r[l]}),r},ec=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},la=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/fa*(Math.asin(1/i)||0),s=function(h){return h===1?1:i*Math.pow(2,-10*h)*xu((h-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:ec(s);return r=fa/r,l.config=function(c,h){return o(t,c,h)},l},ca=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:ec(n);return i.config=function(r){return o(t,r)},i};Te("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;fi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn;fi("Elastic",la("in"),la("out"),la());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};fi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);fi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});fi("Circ",function(o){return-(Cl(1-o*o)-1)});fi("Sine",function(o){return o===1?1:-_u(o*mu)+1});fi("Back",ca("in"),ca("out"),ca());Lt.SteppedEase=Lt.steps=Ve.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Ht;return function(s){return((i*Er(0,a,s)|0)+r)*n}}};Fi.ease=Lt["quad.out"];Te("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Pa+=o+","+o+"Params,"});var Ia=function(t,e){this.id=gu++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:La,this.set=e?e.getSetter:us},Ar=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zi(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Tr||Fe.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ki(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(hs(this,n),!r._dp||r.parent||Ul(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ht||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fl(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ml(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ml(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ni(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Ht?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?rs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ht?0:this._rts,this.totalTime(Er(-Math.abs(this._delay),this._tDur,i),!0),cs(this),Tu(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ki(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ht&&(this._tTime-=Ht)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ne(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=bu);var i=ye;return ye=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ye=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ze(this,n),Ne(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ne(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ht:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ht,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ht)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=$t(n)?n:zl,s=function(){var c=i.then;i.then=null,$t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){vr(this)},o}();Qe(Ar.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ht,_prom:0,_ps:!1,_rts:1});var ge=function(o){El(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ne(n.sortChildren),Yt&&mn(n.parent||Yt,wn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Bl(wn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Mr(0,arguments,this),this},e.from=function(i,r,a){return Mr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return Mr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,br(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new te(i,r,Ze(this,a),1),this},e.call=function(i,r,a){return mn(this,te.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,h){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new te(i,a,Ze(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,h){return a.runBackwards=1,br(a).immediateRender=Ne(a.immediateRender),this.staggerTo(i,r,a,s,l,c,h)},e.staggerFromTo=function(i,r,a,s,l,c,h,d){return s.startAt=a,br(s).immediateRender=Ne(s.immediateRender),this.staggerTo(i,r,s,l,c,h,d)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:me(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,u,p,v,w,b,M,T,D,O;if(this!==Yt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(s!==this._time&&c&&(h+=this._time-s,i+=this._time-s),f=h,M=this._start,b=this._ts,v=!b,d&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=me(h%p),h===l?(u=this._repeat,f=c):(u=~~(h/p),u&&u===h/p&&(f=c,u--),f>c&&(f=c)),T=Ni(this._tTime,p),!s&&this._tTime&&T!==u&&this._tTime-T*p-this._dur<=0&&(T=u),D&&u&1&&(f=c-f,O=1),u!==T&&!this._lock){var y=D&&T&1,S=y===(D&&u&1);if(u<T&&(y=!y),s=y?0:c,this._lock=1,this.render(s||(O?0:me(u*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ke(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),s&&s!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,s=y?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;tc(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Pu(this,me(s),me(f)),w&&(h-=f-(f=w._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&!u&&(Ke(this,"onStart"),this._tTime!==h))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&w!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!v){w=0,_&&(h+=this._zTime=-Ht);break}}m=_}else{m=this._last;for(var N=i<0?i:f;m;){if(_=m._prev,(m._act||N<=m._end)&&m._ts&&w!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(N-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(N-m._start)*m._ts,r,a||ye&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!v){w=0,_&&(h+=this._zTime=N?-Ht:Ht);break}}m=_}}if(w&&!r&&(this.pause(),w.render(f>=s?0:-Ht)._zTime=f>=s?1:-1,this._ts))return this._start=M,cs(this),this.render(i,r,a);this._onUpdate&&!r&&Ke(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&s)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Vn(this,1),!r&&!(i<0&&!s)&&(h||s||!l)&&(Ke(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Tn(r)||(r=Ze(this,r,i)),!(i instanceof Ar)){if(be(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ae(i))return this.addLabel(i,r);if($t(i))i=te.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-$e);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof te?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ae(i)?this.removeLabel(i):$t(i)?this.killTweensOf(i):(ls(this,i),i===this._recent&&(this._recent=this._last),ai(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=me(Fe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ze(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=te.delayedCall(0,r||Sr,a);return s.data="isPause",this._hasPause=1,mn(this,s,Ze(this,i))},e.removePause=function(i){var r=this._first;for(i=Ze(this,i);r;)r._start===i&&r.data==="isPause"&&Vn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)kn!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=je(i),l=this._first,c=Tn(r),h;l;)l instanceof te?Mu(l._targets,s)&&(c?(!kn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(s,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=Ze(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,m,_=te.to(a,Qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ht,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&zi(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,d||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Qe({startAt:{time:Ze(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sl(this,Ze(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sl(this,Ze(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ht)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ai(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ai(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=$e,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),h=s._start,h>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,mn(a,s,h-s._delay,1)._lock=0):l=h,h<0&&s._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;zi(a,a===Yt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Yt._ts&&(Fl(Yt,rs(i,Yt)),Ol=Fe.frame),Fe.frame>=yl){yl+=ze.autoSleep||120;var r=Yt._first;if((!r||!r._ts)&&ze.autoSleep&&Fe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Fe.sleep()}}},t}(Ar);Qe(ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var qu=function(t,e,n,i,r,a,s){var l=new Ae(this._pt,t,e,0,1,ka,null,r),c=0,h=0,d,f,m,_,u,p,v,w;for(l.b=n,l.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=Ui(i)),a&&(w=[n,i],a(w,t,e),n=w[0],i=w[1]),f=n.match(sa)||[];d=sa.exec(i);)_=d[0],u=i.substring(c,d.index),m?m=(m+1)%5:u.substr(-5)==="rgba("&&(m=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:u||h===1?u:",",s:p,c:_.charAt(1)==="="?ui(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=sa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Aa.test(i)||v)&&(l.e=0),this._pt=l,l},Oa=function(t,e,n,i,r,a,s,l,c,h){$t(i)&&(i=i(r||0,t,a));var d=t[e],f=n!=="get"?n:$t(d)?c?t[e.indexOf("set")||!$t(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=$t(d)?c?$u:rc:za,_;if(ae(i)&&(~i.indexOf("random(")&&(i=Ui(i)),i.charAt(1)==="="&&(_=ui(f,i)+(_e(f)||0),(_||_===0)&&(i=_))),!h||f!==i||ba)return!isNaN(f*i)&&i!==""?(_=new Ae(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?Ku:sc,0,m),c&&(_.fp=c),s&&_.modifier(s,this,t),this._pt=_):(!d&&!(e in t)&&os(e,i),qu.call(this,t,e,f,i,m,l||ze.stringFilter,c))},Xu=function(t,e,n,i,r){if($t(t)&&(t=wr(t,r,e,n,i)),!gn(t)||t.style&&t.nodeType||be(t)||Pl(t))return ae(t)?wr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=wr(t[s],r,e,n,i);return a},Fa=function(t,e,n,i,r,a){var s,l,c,h;if(Oe[t]&&(s=new Oe[t]).init(r,s.rawVars?e[t]:Xu(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ae(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Oi))for(c=n._ptLookup[n._targets.indexOf(r)],h=s._props.length;h--;)c[s._props[h]]=l;return s},kn,ba,Na=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,_=i.keyframes,u=i.autoRevert,p=t._dur,v=t._startAt,w=t._targets,b=t.parent,M=b&&b.data==="nested"?b.vars.targets:w,T=t._overwrite==="auto"&&!wa,D=t.timeline,O,y,S,N,q,J,U,k,W,Q,it,Y,lt;if(D&&(!_||!r)&&(r="none"),t._ease=oi(r,Fi.ease),t._yEase=m?Ql(oi(m===!0?r:m,Fi.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!D&&!!i.runBackwards,!D||_&&!i.stagger){if(k=w[0]?Bn(w[0]).harness:0,Y=k&&i[k.prop],O=is(i,Ca),v&&(v._zTime<0&&v.progress(1),e<0&&f&&s&&!u?v.render(-1,!0):v.revert(f&&p?jr:yu),v._lazy=0),a){if(Vn(t._startAt=te.set(w,Qe({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!v&&Ne(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:d,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ye||!s&&!u)&&t._startAt.revert(jr),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!v){if(e&&(s=!1),S=Qe({overwrite:!1,data:"isFromStart",lazy:s&&!v&&Ne(l),immediateRender:s,stagger:0,parent:b},O),Y&&(S[k.prop]=Y),Vn(t._startAt=te.set(w,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ye?t._startAt.revert(jr):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Ht,Ht);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ne(l)||l&&!p,y=0;y<w.length;y++){if(q=w[y],U=q._gsap||Ra(w)[y]._gsap,t._ptLookup[y]=Q={},ma[U.id]&&Un.length&&ns(),it=M===w?y:M.indexOf(q),k&&(W=new k).init(q,Y||O,t,it,M)!==!1&&(t._pt=N=new Ae(t._pt,q,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(st){Q[st]=N}),W.priority&&(J=1)),!k||Y)for(S in O)Oe[S]&&(W=Fa(S,O,t,it,q,M))?W.priority&&(J=1):Q[S]=N=Oa.call(t,q,S,"get",O[S],it,M,0,i.stringFilter);t._op&&t._op[y]&&t.kill(q,t._op[y]),T&&t._pt&&(kn=t,Yt.killTweensOf(q,Q,t.globalTime(e)),lt=!t.parent,kn=0),t._pt&&l&&(ma[U.id]=1)}J&&Ba(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!lt,_&&e<=0&&D.render($e,!0,!0)},Yu=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(c=d[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ba=1,t.vars[e]="+=0",Na(t,s),ba=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=jt(n)+_e(h.e)),h.b&&(h.b=c.s+_e(h.b))},Zu=function(t,e){var n=t[0]?Bn(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=ci({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},Ju=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(be(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},wr=function(t,e,n,i,r){return $t(t)?t.call(e,n,i,r):ae(t)&&~t.indexOf("random(")?Ui(t):t},nc=Pa+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ic={};Te(nc+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ic[o]=1});var te=function(o){El(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:br(i))||this;var l=s.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,u=l.defaults,p=l.scrollTrigger,v=l.yoyoEase,w=i.parent||Yt,b=(be(n)||Pl(n)?Tn(n[0]):"length"in i)?[n]:je(n),M,T,D,O,y,S,N,q;if(s._targets=b.length?Ra(b):es("GSAP target "+n+" not found. https://greensock.com",!ze.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||f||$r(c)||$r(h)){if(i=s.vars,M=s.timeline=new ge({data:"nested",defaults:u||{},targets:w&&w.data==="nested"?w.vars.targets:b}),M.kill(),M.parent=M._dp=wn(s),M._start=0,f||$r(c)||$r(h)){if(O=b.length,N=f&&Wl(f),gn(f))for(y in f)~nc.indexOf(y)&&(q||(q={}),q[y]=f[y]);for(T=0;T<O;T++)D=is(i,ic),D.stagger=0,v&&(D.yoyoEase=v),q&&ci(D,q),S=b[T],D.duration=+wr(c,wn(s),T,S,b),D.delay=(+wr(h,wn(s),T,S,b)||0)-s._delay,!f&&O===1&&D.delay&&(s._delay=h=D.delay,s._start+=h,D.delay=0),M.to(S,D,N?N(T,S,b):0),M._ease=Lt.none;M.duration()?c=h=0:s.timeline=0}else if(_){br(Qe(M.vars.defaults,{ease:"none"})),M._ease=oi(_.ease||i.ease||"none");var J=0,U,k,W;if(be(_))_.forEach(function(Q){return M.to(b,Q,">")}),M.duration();else{D={};for(y in _)y==="ease"||y==="easeEach"||Ju(y,_[y],D,_.easeEach);for(y in D)for(U=D[y].sort(function(Q,it){return Q.t-it.t}),J=0,T=0;T<U.length;T++)k=U[T],W={ease:k.e,duration:(k.t-(T?U[T-1].t:0))/100*c},W[y]=k.v,M.to(b,W,J),J+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return m===!0&&!wa&&(kn=wn(s),Yt.killTweensOf(b),kn=0),mn(w,wn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(d||!c&&!_&&s._start===me(w._time)&&Ne(d)&&Au(wn(s))&&w.data!=="nested")&&(s._tTime=-Ht,s.render(Math.max(0,-h)||0)),p&&Bl(wn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ht&&!h?l:i<Ht?0:i,f,m,_,u,p,v,w,b,M;if(!c)Cu(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=d,b=this.timeline,this._repeat){if(u=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(u*100+i,r,a);if(f=me(d%u),d===l?(_=this._repeat,f=c):(_=~~(d/u),_&&_===d/u&&(f=c,_--),f>c&&(f=c)),v=this._yoyo&&_&1,v&&(M=this._yEase,f=c-f),p=Ni(this._tTime,u),f===s&&!a&&this._initted)return this._tTime=d,this;_!==p&&(b&&this._yEase&&tc(b,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=a=1,this.render(me(u*_),!0).invalidate()._lock=0))}if(!this._initted){if(Vl(this,h?i:f,a,r,d))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(M||this._ease)(f/c),this._from&&(this.ratio=w=1-w),f&&!s&&!r&&!_&&(Ke(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(w,m.d),m=m._next;b&&b.render(i<0?i:!f&&v?-Ht:b._dur*b._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ga(this,i,r,a),Ke(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Ke(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ga(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Vn(this,1),!r&&!(h&&!s)&&(d||s||v)&&(Ke(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Tr||Fe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Na(this,l),c=this._ease(l/this._dur),Yu(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(hs(this,0),this.parent||kl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?vr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||vr(this),this.parent&&a!==this.timeline.totalDuration()&&zi(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?je(i):s,c=this._ptLookup,h=this._pt,d,f,m,_,u,p,v;if((!r||r==="all")&&Su(s,l))return r==="all"&&(this._pt=0),vr(this);for(d=this._op=this._op||[],r!=="all"&&(ae(r)&&(u={},Te(r,function(w){return u[w]=1}),r=u),r=Zu(s,r)),v=s.length;v--;)if(~l.indexOf(s[v])){f=c[v],r==="all"?(d[v]=r,_=f,m={}):(m=d[v]=d[v]||{},_=r);for(u in _)p=f&&f[u],p&&((!("kill"in p.d)||p.d.kill(u)===!0)&&ls(this,p,"_pt"),delete f[u]),m!=="all"&&(m[u]=1)}return this._initted&&!this._pt&&h&&vr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Mr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return Mr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Yt.killTweensOf(i,r,a)},t}(Ar);Qe(te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Te("staggerTo,staggerFrom,staggerFromTo",function(o){te[o]=function(){var t=new ge,e=xa.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var za=function(t,e,n){return t[e]=n},rc=function(t,e,n){return t[e](n)},$u=function(t,e,n,i){return t[e](i.fp,n)},ju=function(t,e,n){return t.setAttribute(e,n)},us=function(t,e){return $t(t[e])?rc:as(t[e])&&t.setAttribute?ju:za},sc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ku=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ka=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ua=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Qu=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},tf=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ls(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ef=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ba=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ae=function(){function o(e,n,i,r,a,s,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||sc,this.d=l||this,this.set=c||za,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ef,this.m=n,this.mt=r,this.tween=i},o}();Te(Pa+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ca[o]=1});Ve.TweenMax=Ve.TweenLite=te;Ve.TimelineLite=Ve.TimelineMax=ge;Yt=new ge({sortChildren:!1,defaults:Fi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ze.stringFilter=Da;var li=[],Qr={},nf=[],Al=0,rf=0,ha=function(t){return(Qr[t]||nf).map(function(e){return e()})},Ma=function(){var t=Date.now(),e=[];t-Al>2&&(ha("matchMediaInit"),li.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Je.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ha("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Al=t,ha("matchMedia"))},ac=function(){function o(e,n){this.selector=n&&va(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rf++,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){$t(n)&&(r=i,i=n,n=$t);var a=this,s=function(){var c=Jt,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=va(r)),Jt=a,d=i.apply(a,arguments),$t(d)&&a._r.push(d),Jt=c,a.selector=h,a.isReverted=!1,d};return a.last=s,n===$t?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof te&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return l instanceof ge?l.data!=="nested"&&l.kill():!(l instanceof te)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=li.length;s--;)li[s].id===this.id&&li.splice(s,1)},t.revert=function(n){this.kill(n||{})},o}(),sf=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){gn(n)||(n={matches:n});var a=new ac(0,r||this.scope),s=a.conditions={},l,c,h;Jt&&!a.selector&&(a.selector=Jt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Je.matchMedia(n[c]),l&&(li.indexOf(a)<0&&li.push(a),(s[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ma):l.addEventListener("change",Ma)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ss={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return $l(i)})},timeline:function(t){return new ge(t)},getTweensOf:function(t,e){return Yt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ae(t)&&(t=je(t)[0]);var r=Bn(t||{}).get,a=n?zl:Nl;return n==="native"&&(n=""),t&&(e?a((Oe[e]&&Oe[e].get||r)(t,e,n,i)):function(s,l,c){return a((Oe[s]&&Oe[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=je(t),t.length>1){var i=t.map(function(h){return Me.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var a=Oe[e],s=Bn(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;Oi._pt=0,d.init(t,n?h+n:h,Oi,0,[t]),d.render(1,d),Oi._pt&&Ua(1,Oi)}:s.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,s,1)}},quickTo:function(t,e,n){var i,r=Me.to(t,ci((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return Yt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=oi(t.ease,Fi.ease)),bl(Fi,t||{})},config:function(t){return bl(ze,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Oe[s]&&!Ve[s]&&es(e+" effect requires "+s+" plugin.")}),aa[e]=function(s,l,c){return n(je(s),Qe(l||{},r),c)},a&&(ge.prototype[e]=function(s,l,c){return this.add(aa[e](s,gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Lt[t]=oi(e)},parseEase:function(t,e){return arguments.length?oi(t,e):Lt},getById:function(t){return Yt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ge(t),i,r;for(n.smoothChildTiming=Ne(t.smoothChildTiming),Yt.remove(n),n._dp=0,n._time=n._tTime=Yt._time,i=Yt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof te&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(Yt,n,0),n},context:function(t,e){return t?new ac(t,e):Jt},matchMedia:function(t){return new sf(t)},matchMediaRefresh:function(){return li.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ma()},addEventListener:function(t,e){var n=Qr[t]||(Qr[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Qr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Nu,wrapYoyo:zu,distribute:Wl,random:Xl,snap:ql,normalize:Fu,getUnit:_e,clamp:Lu,splitColor:jl,toArray:je,selector:va,mapRange:Zl,pipe:Iu,unitize:Ou,interpolate:ku,shuffle:Gl},install:Dl,effects:aa,ticker:Fe,updateRoot:ge.updateRoot,plugins:Oe,globalTimeline:Yt,core:{PropTween:Ae,globals:Il,Tween:te,Timeline:ge,Animation:Ar,getCache:Bn,_removeLinkedListItem:ls,reverting:function(){return ye},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return wa=t}}};Te("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ss[o]=te[o]});Fe.add(ge.updateRoot);Oi=ss.to({},{duration:0});var af=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},of=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=af(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},ua=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ae(r)&&(l={},Te(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}of(s,r)}}}},Me=ss.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ua("roundProps",ya),ua("modifiers"),ua("snap",ql))||ss;te.version=ge.version=Me.version="3.12.1";Ll=1;Sa()&&ki();var lf=Lt.Power0,cf=Lt.Power1,hf=Lt.Power2,uf=Lt.Power3,ff=Lt.Power4,df=Lt.Linear,pf=Lt.Quad,mf=Lt.Cubic,gf=Lt.Quart,_f=Lt.Quint,xf=Lt.Strong,vf=Lt.Elastic,yf=Lt.Back,bf=Lt.SteppedEase,Mf=Lt.Bounce,wf=Lt.Sine,Sf=Lt.Expo,Tf=Lt.Circ;var oc,Gn,Vi,Ya,gi,Af,lc,Za,Ef=function(){return typeof window!="undefined"},En={},mi=180/Math.PI,Hi=Math.PI/180,Bi=Math.atan2,cc=1e8,Ja=/([A-Z])/g,Cf=/(left|right|width|margin|padding|x)/i,Pf=/[\s,\(]\S/,_n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ga=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Lf=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Df=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gc=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},_c=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},If=function(t,e,n){return t.style[e]=n},Of=function(t,e,n){return t.style.setProperty(e,n)},Ff=function(t,e,n){return t._gsap[e]=n},Nf=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},zf=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},kf=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Zt="transform",sn=Zt+"Origin",Uf=function o(t,e){var n=this,i=this.target,r=i.style;if(t in En&&r){if(this.tfm=this.tfm||{},t!=="transform")t=_n[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=An(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:An(i,t);else return _n.transform.split(",").forEach(function(a){return o.call(n,a,e)});if(this.props.indexOf(Zt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,e,"")),t=Zt}(r||e)&&this.props.push(t,e,r[t])},xc=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Bf=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Ja,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Za(),(!r||!r.isStart)&&!n[Zt]&&(xc(n),i.uncache=1)}},vc=function(t,e){var n={target:t,props:[],revert:Bf,save:Uf};return t._gsap||Me.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},yc,Wa=function(t,e){var n=Gn.createElementNS?Gn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Gn.createElement(t);return n.style?n:Gn.createElement(t)},xn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ja,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Gi(e)||e,1)||""},hc="O,Moz,ms,Ms,Webkit".split(","),Gi=function(t,e,n){var i=e||gi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(hc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?hc[a]:"")+t},qa=function(){Ef()&&window.document&&(oc=window,Gn=oc.document,Vi=Gn.documentElement,gi=Wa("div")||{style:{}},Af=Wa("div"),Zt=Gi(Zt),sn=Zt+"Origin",gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yc=!!Gi("perspective"),Za=Me.core.reverting,Ya=1)},Va=function o(t){var e=Wa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Vi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Vi.removeChild(e),this.style.cssText=r,a},uc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},bc=function(t){var e;try{e=t.getBBox()}catch{e=Va.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Va||(e=Va.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+uc(t,["x","cx","x1"])||0,y:+uc(t,["y","cy","y1"])||0,width:0,height:0}:e},Mc=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&bc(t))},Pr=function(t,e){if(e){var n=t.style;e in En&&e!==sn&&(e=Zt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Ja,"-$1").toLowerCase())):n.removeAttribute(e)}},Wn=function(t,e,n,i,r,a){var s=new Ae(t._pt,e,n,0,1,a?_c:gc);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},fc={deg:1,rad:1,turn:1},Vf={grid:1,flex:1},qn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=gi.style,l=Cf.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",m=i==="%",_,u,p,v;return i===a||!r||fc[i]||fc[a]?r:(a!=="px"&&!f&&(r=o(t,e,n,"px")),v=t.getCTM&&Mc(t),(m||a==="%")&&(En[e]||~e.indexOf("adius"))?(_=v?t.getBBox()[l?"width":"height"]:t[h],jt(m?r/_*d:r/100*_)):(s[l?"width":"height"]=d+(f?a:i),u=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,v&&(u=(t.ownerSVGElement||{}).parentNode),(!u||u===Gn||!u.appendChild)&&(u=Gn.body),p=u._gsap,p&&m&&p.width&&l&&p.time===Fe.time&&!p.uncache?jt(r/p.width*d):((m||a==="%")&&!Vf[xn(u,"display")]&&(s.position=xn(t,"position")),u===t&&(s.position="static"),u.appendChild(gi),_=gi[h],u.removeChild(gi),s.position="absolute",l&&m&&(p=Bn(u),p.time=Fe.time,p.width=u[h]),jt(f?_*r/d:_&&r?d/_*r:0))))},An=function(t,e,n,i){var r;return Ya||qa(),e in _n&&e!=="transform"&&(e=_n[e],~e.indexOf(",")&&(e=e.split(",")[0])),En[e]&&e!=="transform"?(r=Lr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ds(xn(t,sn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=fs[e]&&fs[e](t,e,n)||xn(t,e)||La(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qn(t,e,r,n)+n:r},Hf=function(t,e,n,i){if(!n||n==="none"){var r=Gi(e,t,1),a=r&&xn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=xn(t,"borderTopColor"))}var s=new Ae(this._pt,t.style,e,0,1,ka),l=0,c=0,h,d,f,m,_,u,p,v,w,b,M,T;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=xn(t,e)||i,t.style[e]=n),h=[n,i],Da(h),n=h[0],i=h[1],f=n.match(hi)||[],T=i.match(hi)||[],T.length){for(;d=hi.exec(i);)p=d[0],w=i.substring(l,d.index),_?_=(_+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(_=1),p!==(u=f[c++]||"")&&(m=parseFloat(u)||0,M=u.substr((m+"").length),p.charAt(1)==="="&&(p=ui(m,p)+M),v=parseFloat(p),b=p.substr((v+"").length),l=hi.lastIndex-b.length,b||(b=b||ze.units[e]||M,l===i.length&&(i+=b,s.e+=b)),M!==b&&(m=qn(t,e,u,b)||0),s._pt={_next:s._pt,p:w||c===1?w:",",s:m,c:v-m,m:_&&_<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?_c:gc;return Aa.test(i)&&(s.e=0),this._pt=s,s},dc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gf=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dc[n]||n,e[1]=dc[i]||i,e.join(" ")},Wf=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],En[s]&&(l=1,s=s==="transformOrigin"?sn:Zt),Pr(n,s);l&&(Pr(n,Zt),a&&(a.svg&&n.removeAttribute("transform"),Lr(n,1),a.uncache=1,xc(i)))}},fs={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ae(t._pt,e,n,0,0,Wf);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Rr=[1,0,0,1,0,0],wc={},Sc=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pc=function(t){var e=xn(t,Zt);return Sc(e)?Rr:e.substr(7).match(Ta).map(jt)},$a=function(t,e){var n=t._gsap||Bn(t),i=t.style,r=pc(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Rr:r):(r===Rr&&!t.offsetParent&&t!==Vi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,Vi.appendChild(t)),r=pc(t),l?i.display=l:Pr(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):Vi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Xa=function(t,e,n,i,r,a){var s=t._gsap,l=r||$a(t,!0),c=s.xOrigin||0,h=s.yOrigin||0,d=s.xOffset||0,f=s.yOffset||0,m=l[0],_=l[1],u=l[2],p=l[3],v=l[4],w=l[5],b=e.split(" "),M=parseFloat(b[0])||0,T=parseFloat(b[1])||0,D,O,y,S;n?l!==Rr&&(O=m*p-_*u)&&(y=M*(p/O)+T*(-u/O)+(u*w-p*v)/O,S=M*(-_/O)+T*(m/O)-(m*w-_*v)/O,M=y,T=S):(D=bc(t),M=D.x+(~b[0].indexOf("%")?M/100*D.width:M),T=D.y+(~(b[1]||b[0]).indexOf("%")?T/100*D.height:T)),i||i!==!1&&s.smooth?(v=M-c,w=T-h,s.xOffset=d+(v*m+w*u)-v,s.yOffset=f+(v*_+w*p)-w):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=T,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[sn]="0px 0px",a&&(Wn(a,s,"xOrigin",c,M),Wn(a,s,"yOrigin",h,T),Wn(a,s,"xOffset",d,s.xOffset),Wn(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",M+" "+T)},Lr=function(t,e){var n=t._gsap||new Ia(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=xn(t,sn)||"0",h,d,f,m,_,u,p,v,w,b,M,T,D,O,y,S,N,q,J,U,k,W,Q,it,Y,lt,st,_t,H,ot,ut,ft;return h=d=f=u=p=v=w=b=M=0,m=_=1,n.svg=!!(t.getCTM&&Mc(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),i.scale=i.rotate=i.translate="none"),O=$a(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",it=""):it=!e&&t.getAttribute("data-svg-origin"),Xa(t,it||c,!!it||n.originIsAbsolute,n.smooth!==!1,O)),T=n.xOrigin||0,D=n.yOrigin||0,O!==Rr&&(q=O[0],J=O[1],U=O[2],k=O[3],h=W=O[4],d=Q=O[5],O.length===6?(m=Math.sqrt(q*q+J*J),_=Math.sqrt(k*k+U*U),u=q||J?Bi(J,q)*mi:0,w=U||k?Bi(U,k)*mi+u:0,w&&(_*=Math.abs(Math.cos(w*Hi))),n.svg&&(h-=T-(T*q+D*U),d-=D-(T*J+D*k))):(ft=O[6],ot=O[7],st=O[8],_t=O[9],H=O[10],ut=O[11],h=O[12],d=O[13],f=O[14],y=Bi(ft,H),p=y*mi,y&&(S=Math.cos(-y),N=Math.sin(-y),it=W*S+st*N,Y=Q*S+_t*N,lt=ft*S+H*N,st=W*-N+st*S,_t=Q*-N+_t*S,H=ft*-N+H*S,ut=ot*-N+ut*S,W=it,Q=Y,ft=lt),y=Bi(-U,H),v=y*mi,y&&(S=Math.cos(-y),N=Math.sin(-y),it=q*S-st*N,Y=J*S-_t*N,lt=U*S-H*N,ut=k*N+ut*S,q=it,J=Y,U=lt),y=Bi(J,q),u=y*mi,y&&(S=Math.cos(y),N=Math.sin(y),it=q*S+J*N,Y=W*S+Q*N,J=J*S-q*N,Q=Q*S-W*N,q=it,W=Y),p&&Math.abs(p)+Math.abs(u)>359.9&&(p=u=0,v=180-v),m=jt(Math.sqrt(q*q+J*J+U*U)),_=jt(Math.sqrt(Q*Q+ft*ft)),y=Bi(W,Q),w=Math.abs(y)>2e-4?y*mi:0,M=ut?1/(ut<0?-ut:ut):0),n.svg&&(it=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sc(xn(t,Zt)),it&&t.setAttribute("transform",it))),Math.abs(w)>90&&Math.abs(w)<270&&(r?(m*=-1,w+=u<=0?180:-180,u+=u<=0?180:-180):(_*=-1,w+=w<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=jt(m),n.scaleY=jt(_),n.rotation=jt(u)+s,n.rotationX=jt(p)+s,n.rotationY=jt(v)+s,n.skewX=w+s,n.skewY=b+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[sn]=ds(c)),n.xOffset=n.yOffset=0,n.force3D=ze.force3D,n.renderTransform=n.svg?Xf:yc?Tc:qf,n.uncache=0,n},ds=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ha=function(t,e,n){var i=_e(e);return jt(parseFloat(e)+parseFloat(qn(t,"x",n+"px",i)))+i},qf=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Tc(t,e)},di="0deg",Cr="0px",pi=") ",Tc=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,u=n.scaleY,p=n.transformPerspective,v=n.force3D,w=n.target,b=n.zOrigin,M="",T=v==="auto"&&t&&t!==1||v===!0;if(b&&(d!==di||h!==di)){var D=parseFloat(h)*Hi,O=Math.sin(D),y=Math.cos(D),S;D=parseFloat(d)*Hi,S=Math.cos(D),a=Ha(w,a,O*S*-b),s=Ha(w,s,-Math.sin(D)*-b),l=Ha(w,l,y*S*-b+b)}p!==Cr&&(M+="perspective("+p+pi),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(T||a!==Cr||s!==Cr||l!==Cr)&&(M+=l!==Cr||T?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+pi),c!==di&&(M+="rotate("+c+pi),h!==di&&(M+="rotateY("+h+pi),d!==di&&(M+="rotateX("+d+pi),(f!==di||m!==di)&&(M+="skew("+f+", "+m+pi),(_!==1||u!==1)&&(M+="scale("+_+", "+u+pi),w.style[Zt]=M||"translate(0, 0)"},Xf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,u=n.yOrigin,p=n.xOffset,v=n.yOffset,w=n.forceCSS,b=parseFloat(a),M=parseFloat(s),T,D,O,y,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Hi,c*=Hi,T=Math.cos(l)*d,D=Math.sin(l)*d,O=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(h*=Hi,S=Math.tan(c-h),S=Math.sqrt(1+S*S),O*=S,y*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),T*=S,D*=S)),T=jt(T),D=jt(D),O=jt(O),y=jt(y)):(T=d,y=f,D=O=0),(b&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(b=qn(m,"x",a,"px"),M=qn(m,"y",s,"px")),(_||u||p||v)&&(b=jt(b+_-(_*T+u*O)+p),M=jt(M+u-(_*D+u*y)+v)),(i||r)&&(S=m.getBBox(),b=jt(b+i/100*S.width),M=jt(M+r/100*S.height)),S="matrix("+T+","+D+","+O+","+y+","+b+","+M+")",m.setAttribute("transform",S),w&&(m.style[Zt]=S)},Yf=function(t,e,n,i,r){var a=360,s=ae(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?mi:1),c=l-i,h=i+c+"deg",d,f;return s&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*cc)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*cc)%a-~~(c/a)*a)),t._pt=f=new Ae(t._pt,e,n,i,c,Rf),f.e=h,f.u="deg",t._props.push(n),f},mc=function(t,e){for(var n in e)t[n]=e[n];return t},Zf=function(t,e,n){var i=mc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,h,d,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Zt]=e,s=Lr(n,1),Pr(n,Zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Zt],a[Zt]=e,s=Lr(n,1),a[Zt]=c);for(l in En)c=i[l],h=s[l],c!==h&&r.indexOf(l)<0&&(m=_e(c),_=_e(h),d=m!==_?qn(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new Ae(t._pt,s,l,d,f-d,Ga),t._pt.u=_||0,t._props.push(l));mc(s,i)};Te("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});fs[t>1?"border"+o:o]=function(s,l,c,h,d){var f,m;if(arguments.length<4)return f=a.map(function(_){return An(s,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},a.forEach(function(_,u){return m[_]=f[u]=f[u]||f[(u-1)/2|0]}),s.init(l,m,d)}});var ja={name:"css",register:qa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,h,d,f,m,_,u,p,v,w,b,M,T,D,O,y;Ya||qa(),this.styles=this.styles||vc(t),y=this.styles.props,this.tween=n;for(u in e)if(u!=="autoRound"&&(h=e[u],!(Oe[u]&&Fa(u,e,n,i,t,r)))){if(m=typeof h,_=fs[u],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Ui(h)),_)_(this,t,u,h,n)&&(O=1);else if(u.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(u)+"").trim(),h+="",Sn.lastIndex=0,Sn.test(c)||(p=_e(c),v=_e(h)),v?p!==v&&(c=qn(t,u,c,v)+v):p&&(h+=p),this.add(s,"setProperty",c,h,i,r,0,0,u),a.push(u),y.push(u,0,s[u]);else if(m!=="undefined"){if(l&&u in l?(c=typeof l[u]=="function"?l[u].call(n,i,t,r):l[u],ae(c)&&~c.indexOf("random(")&&(c=Ui(c)),_e(c+"")||(c+=ze.units[u]||_e(An(t,u))||""),(c+"").charAt(1)==="="&&(c=An(t,u))):c=An(t,u),f=parseFloat(c),w=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),u in _n&&(u==="autoAlpha"&&(f===1&&An(t,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,s.visibility),Wn(this,s,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),u!=="scale"&&u!=="transform"&&(u=_n[u],~u.indexOf(",")&&(u=u.split(",")[0]))),b=u in En,b){if(this.styles.save(u),M||(T=t._gsap,T.renderTransform&&!e.parseTransform||Lr(t,e.parseTransform),D=e.smoothOrigin!==!1&&T.smooth,M=this._pt=new Ae(this._pt,s,Zt,0,1,T.renderTransform,T,0,-1),M.dep=1),u==="scale")this._pt=new Ae(this._pt,T,"scaleY",T.scaleY,(w?ui(T.scaleY,w+d):d)-T.scaleY||0,Ga),this._pt.u=0,a.push("scaleY",u),u+="X";else if(u==="transformOrigin"){y.push(sn,0,s[sn]),h=Gf(h),T.svg?Xa(t,h,0,D,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==T.zOrigin&&Wn(this,T,"zOrigin",T.zOrigin,v),Wn(this,s,u,ds(c),ds(h)));continue}else if(u==="svgOrigin"){Xa(t,h,1,D,0,this);continue}else if(u in wc){Yf(this,T,u,f,w?ui(f,w+h):h);continue}else if(u==="smoothOrigin"){Wn(this,T,"smooth",T.smooth,h);continue}else if(u==="force3D"){T[u]=h;continue}else if(u==="transform"){Zf(this,h,t);continue}}else u in s||(u=Gi(u)||u);if(b||(d||d===0)&&(f||f===0)&&!Pf.test(h)&&u in s)p=(c+"").substr((f+"").length),d||(d=0),v=_e(h)||(u in ze.units?ze.units[u]:p),p!==v&&(f=qn(t,u,c,v)),this._pt=new Ae(this._pt,b?T:s,u,f,(w?ui(f,w+d):d)-f,!b&&(v==="px"||u==="zIndex")&&e.autoRound!==!1?Df:Ga),this._pt.u=v||0,p!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=Lf);else if(u in s)Hf.call(this,t,u,c,w?w+h:h);else if(u in t)this.add(t,u,c||t[u],w?w+h:h,i,r);else if(u!=="parseTransform"){os(u,h);continue}b||(u in s?y.push(u,0,s[u]):y.push(u,1,c||t[u])),a.push(u)}}O&&Ba(this)},render:function(t,e){if(e.tween._time||!Za())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:An,aliases:_n,getSetter:function(t,e,n){var i=_n[e];return i&&i.indexOf(",")<0&&(e=i),e in En&&e!==sn&&(t._gsap.x||An(t,"x"))?n&&lc===n?e==="scale"?Nf:Ff:(lc=n||{})&&(e==="scale"?zf:kf):t.style&&!as(t.style[e])?If:~e.indexOf("-")?Of:us(t,e)},core:{_removeProperty:Pr,_getMatrix:$a}};Me.utils.checkPrefix=Gi;Me.core.getStyleSaver=vc;(function(o,t,e,n){var i=Te(o+","+t+","+e,function(r){En[r]=1});Te(t,function(r){ze.units[r]="deg",wc[r]=1}),_n[i[13]]=o+","+t,Te(n,function(r){var a=r.split(":");_n[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Te("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ze.units[o]="px"});Me.registerPlugin(ja);var an=Me.registerPlugin(ja)||Me,j0=an.core.Tween;var ul="149";var Jf=0,Ac=1,$f=2;var Vh=1,jf=2,Ur=3,Qn=0,Ye=1,jn=2;var Kn=0,or=1,Ec=2,Cc=3,Pc=4,Kf=5,rr=100,Qf=101,td=102,Rc=103,Lc=104,ed=200,nd=201,id=202,rd=203,Hh=204,Gh=205,sd=206,ad=207,od=208,ld=209,cd=210,hd=0,ud=1,fd=2,Do=3,dd=4,pd=5,md=6,gd=7,Wh=0,_d=1,xd=2,On=0,vd=1,yd=2,bd=3,Md=4,wd=5,qh=300,hr=301,ur=302,Io=303,Oo=304,js=306,Fo=1e3,hn=1001,No=1002,Pe=1003,Dc=1004;var Ka=1005;var Xt=1006,Sd=1007;var Hr=1008;var Ai=1009,Td=1010,Ad=1011,Xh=1012,Ed=1013,Mi=1014,wi=1015,Gr=1016,Cd=1017,Pd=1018,lr=1020,Rd=1021,un=1023,Ld=1024,Dd=1025,Si=1026,fr=1027,Id=1028,Od=1029,Fd=1030,Nd=1031,zd=1033,Qa=33776,to=33777,eo=33778,no=33779,Ic=35840,Oc=35841,Fc=35842,Nc=35843,kd=36196,zc=37492,kc=37496,Uc=37808,Bc=37809,Vc=37810,Hc=37811,Gc=37812,Wc=37813,qc=37814,Xc=37815,Yc=37816,Zc=37817,Jc=37818,$c=37819,jc=37820,Kc=37821,io=36492,Ud=36283,Qc=36284,th=36285,eh=36286;var Fs=2300,Ns=2301,ro=2302,nh=2400,ih=2401,rh=2402;var Ei=3e3,Wt=3001,Bd=3200,Vd=3201,Hd=0,Gd=1;var vn="srgb",Wr="srgb-linear";var so=7680;var Wd=519,sh=35044;var ah="300 es",zo=1035,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ao=Math.PI/180,oh=180/Math.PI;function Jr(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[o&255]+we[o>>8&255]+we[o>>16&255]+we[o>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function qe(o,t,e){return Math.max(t,Math.min(e,o))}function qd(o,t){return(o%t+t)%t}function oo(o,t,e){return(1-e)*o+e*t}function lh(o){return(o&o-1)===0&&o!==0}function ko(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ps(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function He(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Bt=class{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Re=class{constructor(){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=s,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],u=i[0],p=i[3],v=i[6],w=i[1],b=i[4],M=i[7],T=i[2],D=i[5],O=i[8];return r[0]=a*u+s*w+l*T,r[3]=a*p+s*b+l*D,r[6]=a*v+s*M+l*O,r[1]=c*u+h*w+d*T,r[4]=c*p+h*b+d*D,r[7]=c*v+h*M+d*O,r[2]=f*u+m*w+_*T,r[5]=f*p+m*b+_*D,r[8]=f*v+m*M+_*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*s*c-n*r*h+n*s*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],h=t[8],d=h*a-s*c,f=s*l-h*r,m=c*r-a*l,_=e*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let u=1/_;return t[0]=d*u,t[1]=(i*c-h*n)*u,t[2]=(s*n-i*a)*u,t[3]=f*u,t[4]=(h*e-i*l)*u,t[5]=(i*r-s*e)*u,t[6]=m*u,t[7]=(n*l-c*e)*u,t[8]=(a*e-n*r)*u,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lo=new Re;function Yh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function qr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ti(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Os(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var co={[vn]:{[Wr]:Ti},[Wr]:{[vn]:Os}},Ee={legacyMode:!0,get workingColorSpace(){return Wr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(co[t]&&co[t][e]!==void 0){let n=co[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oe={r:0,g:0,b:0},on={h:0,s:0,l:0},ms={h:0,s:0,l:0};function ho(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function gs(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=qd(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+1/3),this.g=ho(a,r,t),this.b=ho(a,r,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r,a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ee.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ee.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){let l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ee.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ee.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=vn){let n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Ee.fromWorkingColorSpace(gs(this,oe),t),qe(oe.r*255,0,255)<<16^qe(oe.g*255,0,255)<<8^qe(oe.b*255,0,255)<<0}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(gs(this,oe),e);let n=oe.r,i=oe.g,r=oe.b,a=Math.max(n,i,r),s=Math.min(n,i,r),l,c,h=(s+a)/2;if(s===a)l=0,c=0;else{let d=a-s;switch(c=h<=.5?d/(a+s):d/(2-a-s),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(gs(this,oe),e),t.r=oe.r,t.g=oe.g,t.b=oe.b,t}getStyle(t=vn){return Ee.fromWorkingColorSpace(gs(this,oe),t),t!==vn?`color(${t} ${oe.r} ${oe.g} ${oe.b})`:`rgb(${oe.r*255|0},${oe.g*255|0},${oe.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(on),on.h+=t,on.s+=e,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(on),t.getHSL(ms);let n=oo(on.h,ms.h,e),i=oo(on.s,ms.s,e),r=oo(on.l,ms.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};qt.NAMES=Zh;var Wi,zs=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=qr("canvas")),Wi.width=t.width,Wi.height=t.height;let n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ks=class{constructor(t=null){this.isSource=!0,this.uuid=Jr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(uo(i[a].image)):r.push(uo(i[a]))}else r=uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function uo(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?zs.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xd=0,xe=class extends ti{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=hn,i=hn,r=Xt,a=Hr,s=un,l=Ai,c=xe.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Jr(),this.name="",this.source=new ks(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=qh;xe.DEFAULT_ANISOTROPY=1;var Kt=class{constructor(t=0,e=0,n=0,i=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],u=l[2],p=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-u)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+u)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(m+1)/2,T=(v+1)/2,D=(h+f)/4,O=(d+u)/4,y=(_+p)/4;return b>M&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=D/n,r=O/n):M>T?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=D/i,r=y/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=O/r,i=y/r),this.set(n,i,r,e),this}let w=Math.sqrt((p-_)*(p-_)+(d-u)*(d-u)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(d-u)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nn=class extends ti{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ks(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Us=class extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],m=r[a+1],_=r[a+2],u=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=u;return}if(d!==u||l!==f||c!==m||h!==_){let p=1-s,v=l*f+c*m+h*_+d*u,w=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){let T=Math.sqrt(b),D=Math.atan2(T,v*w);p=Math.sin(p*D)/T,s=Math.sin(s*D)/T}let M=s*w;if(l=l*p+f*M,c=c*p+m*M,h=h*p+_*M,d=d*p+u*M,p===1-s){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let s=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=s*_+h*d+l*m-c*f,t[e+1]=l*_+h*f+c*d-s*m,t[e+2]=c*_+h*m+s*f-l*d,t[e+3]=h*_-s*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),h=s(i/2),d=s(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+s+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>d){let m=2*Math.sqrt(1+n-s-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>d){let m=2*Math.sqrt(1+s-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*s+i*c-r*l,this._y=i*h+a*l+r*s-n*c,this._z=r*h+a*c+n*l-i*s,this._w=a*h-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-s*s;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,h=l*n+s*e-r*i,d=l*i+r*n-a*e,f=-r*e-a*n-s*i;return this.x=c*l+f*-r+h*-s-d*-a,this.y=h*l+f*-a+d*-r-c*-s,this.z=d*l+f*-s+c*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fo=new X,ch=new ei,Ci=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){let h=t[l],d=t[l+1],f=t[l+2];h<e&&(e=h),d<n&&(n=d),f<i&&(i=f),h>r&&(r=h),d>a&&(a=d),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){let h=t.getX(l),d=t.getY(l),f=t.getZ(l);h<e&&(e=h),d<n&&(n=d),f<i&&(i=f),h>r&&(r=h),d>a&&(a=d),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){let r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)_i.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(_i)}else n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox),po.applyMatrix4(t.matrixWorld),this.union(po);let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),_s.subVectors(this.max,Dr),qi.subVectors(t.a,Dr),Xi.subVectors(t.b,Dr),Yi.subVectors(t.c,Dr),Xn.subVectors(Xi,qi),Yn.subVectors(Yi,Xi),xi.subVectors(qi,Yi);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-xi.z,xi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,xi.z,0,-xi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-xi.y,xi.x,0];return!mo(e,qi,Xi,Yi,_s)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,qi,Xi,Yi,_s))?!1:(xs.crossVectors(Xn,Yn),e=[xs.x,xs.y,xs.z],mo(e,qi,Xi,Yi,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return _i.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new X,new X,new X,new X,new X,new X,new X,new X],_i=new X,po=new Ci,qi=new X,Xi=new X,Yi=new X,Xn=new X,Yn=new X,xi=new X,Dr=new X,_s=new X,xs=new X,vi=new X;function mo(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){vi.fromArray(o,r);let s=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}var Yd=new Ci,Ir=new X,go=new X,Xr=class{constructor(t=new X,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);let e=Ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(go)),this.expandByPoint(Ir.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new X,_o=new X,vs=new X,Zn=new X,xo=new X,ys=new X,vo=new X,Bo=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.direction).multiplyScalar(e).add(this.origin),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_o.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(_o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vs),s=Zn.dot(this.direction),l=-Zn.dot(vs),c=Zn.lengthSq(),h=Math.abs(1-a*a),d,f,m,_;if(h>0)if(d=a*l-s,f=a*s-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let u=1/h;d*=u,f*=u,m=d*(d+a*f+2*s)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+s)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+s)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+s)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(vs).multiplyScalar(f).add(_o),m}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(s=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(s=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){xo.subVectors(e,t),ys.subVectors(n,t),vo.crossVectors(xo,ys);let a=this.direction.dot(vo),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Zn.subVectors(this.origin,t);let l=s*this.direction.dot(ys.crossVectors(Zn,ys));if(l<0)return null;let c=s*this.direction.dot(xo.cross(Zn));if(c<0||l+c>a)return null;let h=-s*Zn.dot(vo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class{constructor(){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,h,d,f,m,_,u,p){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=r,v[5]=a,v[9]=s,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=f,v[3]=m,v[7]=_,v[11]=u,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,_=s*h,u=s*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-u*c,e[9]=-s*l,e[2]=u-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,_=c*h,u=c*d;e[0]=f+u*s,e[4]=_*s-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-s,e[2]=m*s-_,e[6]=u+f*s,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,_=c*h,u=c*d;e[0]=f-u*s,e[4]=-a*d,e[8]=_+m*s,e[1]=m+_*s,e[5]=a*h,e[9]=u-f*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,_=s*h,u=s*d;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+u,e[1]=l*d,e[5]=u*c+f,e[9]=m*c-_,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,_=s*l,u=s*c;e[0]=l*h,e[4]=u-f*d,e[8]=_*d+m,e[1]=d,e[5]=a*h,e[9]=-s*h,e[2]=-c*h,e[6]=m*d+_,e[10]=f-u*d}else if(t.order==="XZY"){let f=a*l,m=a*c,_=s*l,u=s*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+u,e[5]=a*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=s*h,e[10]=u*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,n){let i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Jn.crossVectors(n,Ge),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Jn.crossVectors(n,Ge)),Jn.normalize(),bs.crossVectors(Ge,Jn),i[0]=Jn.x,i[4]=bs.x,i[8]=Ge.x,i[1]=Jn.y,i[5]=bs.y,i[9]=Ge.y,i[2]=Jn.z,i[6]=bs.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],u=n[6],p=n[10],v=n[14],w=n[3],b=n[7],M=n[11],T=n[15],D=i[0],O=i[4],y=i[8],S=i[12],N=i[1],q=i[5],J=i[9],U=i[13],k=i[2],W=i[6],Q=i[10],it=i[14],Y=i[3],lt=i[7],st=i[11],_t=i[15];return r[0]=a*D+s*N+l*k+c*Y,r[4]=a*O+s*q+l*W+c*lt,r[8]=a*y+s*J+l*Q+c*st,r[12]=a*S+s*U+l*it+c*_t,r[1]=h*D+d*N+f*k+m*Y,r[5]=h*O+d*q+f*W+m*lt,r[9]=h*y+d*J+f*Q+m*st,r[13]=h*S+d*U+f*it+m*_t,r[2]=_*D+u*N+p*k+v*Y,r[6]=_*O+u*q+p*W+v*lt,r[10]=_*y+u*J+p*Q+v*st,r[14]=_*S+u*U+p*it+v*_t,r[3]=w*D+b*N+M*k+T*Y,r[7]=w*O+b*q+M*W+T*lt,r[11]=w*y+b*J+M*Q+T*st,r[15]=w*S+b*U+M*it+T*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],u=t[7],p=t[11],v=t[15];return _*(+r*l*d-i*c*d-r*s*f+n*c*f+i*s*m-n*l*m)+u*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+p*(+e*c*d-e*s*m-r*a*d+n*a*m+r*s*h-n*c*h)+v*(-i*s*h-e*l*d+e*s*f+i*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],u=t[13],p=t[14],v=t[15],w=d*p*c-u*f*c+u*l*m-s*p*m-d*l*v+s*f*v,b=_*f*c-h*p*c-_*l*m+a*p*m+h*l*v-a*f*v,M=h*u*c-_*d*c+_*s*m-a*u*m-h*s*v+a*d*v,T=_*d*l-h*u*l-_*s*f+a*u*f+h*s*p-a*d*p,D=e*w+n*b+i*M+r*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=w*O,t[1]=(u*f*r-d*p*r-u*i*m+n*p*m+d*i*v-n*f*v)*O,t[2]=(s*p*r-u*l*r+u*i*c-n*p*c-s*i*v+n*l*v)*O,t[3]=(d*l*r-s*f*r-d*i*c+n*f*c+s*i*m-n*l*m)*O,t[4]=b*O,t[5]=(h*p*r-_*f*r+_*i*m-e*p*m-h*i*v+e*f*v)*O,t[6]=(_*l*r-a*p*r-_*i*c+e*p*c+a*i*v-e*l*v)*O,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*m+e*l*m)*O,t[8]=M*O,t[9]=(_*d*r-h*u*r-_*n*m+e*u*m+h*n*v-e*d*v)*O,t[10]=(a*u*r-_*s*r+_*n*c-e*u*c-a*n*v+e*s*v)*O,t[11]=(h*s*r-a*d*r-h*n*c+e*d*c+a*n*m-e*s*m)*O,t[12]=T*O,t[13]=(h*u*i-_*d*i+_*n*f-e*u*f-h*n*p+e*d*p)*O,t[14]=(_*s*i-a*u*i-_*n*l+e*u*l+a*n*p-e*s*p)*O,t[15]=(a*d*i-h*s*i+h*n*l-e*d*l-a*n*f+e*s*f)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,h=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,h*s+n,h*l-i*a,0,c*l-i*s,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,h=a+a,d=s+s,f=r*c,m=r*h,_=r*d,u=a*h,p=a*d,v=s*d,w=l*c,b=l*h,M=l*d,T=n.x,D=n.y,O=n.z;return i[0]=(1-(u+v))*T,i[1]=(m+M)*T,i[2]=(_-b)*T,i[3]=0,i[4]=(m-M)*D,i[5]=(1-(f+v))*D,i[6]=(p+w)*D,i[7]=0,i[8]=(_+b)*O,i[9]=(p-w)*O,i[10]=(1-(f+u))*O,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Zi.set(i[0],i[1],i[2]).length(),a=Zi.set(i[4],i[5],i[6]).length(),s=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);let c=1/r,h=1/a,d=1/s;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,e.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){let s=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=h,s[12]=0,s[1]=0,s[5]=c,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){let s=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-r),d=(e+t)*l,f=(n+i)*c,m=(a+r)*h;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new X,ln=new le,Zd=new X(0,0,0),Jd=new X(1,1,1),Jn=new X,bs=new X,Ge=new X,hh=new le,uh=new ei,dr=class{constructor(t=0,e=0,n=0,i=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dr.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$d=0,fh=new X,Ji=new ei,Rn=new le,Ms=new X,Or=new X,jd=new X,Kd=new ei,dh=new X(1,0,0),ph=new X(0,1,0),mh=new X(0,0,1),Qd={type:"added"},gh={type:"removed"},Le=class extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();let t=new X,e=new dr,n=new ei,i=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Re}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(dh,t)}rotateY(t){return this.rotateOnAxis(ph,t)}rotateZ(t){return this.rotateOnAxis(mh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dh,t)}translateY(t){return this.translateOnAxis(ph,t)}translateZ(t){return this.translateOnAxis(mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Or,Ms,this.up):Rn.lookAt(Ms,Or,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(gh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){let s=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){let l=[];for(let c in s){let h=s[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new X(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new X,Ln=new X,yo=new X,Dn=new X,$i=new X,ji=new X,_h=new X,bo=new X,Mo=new X,wo=new X,fn=class{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){cn.subVectors(i,e),Ln.subVectors(n,e),yo.subVectors(t,e);let a=cn.dot(cn),s=cn.dot(Ln),l=cn.dot(yo),c=Ln.dot(Ln),h=Ln.dot(yo),d=a*c-s*s;if(d===0)return r.set(-2,-1,-1);let f=1/d,m=(c*l-s*h)*f,_=(a*h-s*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Dn),l.set(0,0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(s,Dn.z),l}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),Ln.subVectors(t,e),cn.cross(Ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return fn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,s;$i.subVectors(i,n),ji.subVectors(r,n),bo.subVectors(t,n);let l=$i.dot(bo),c=ji.dot(bo);if(l<=0&&c<=0)return e.copy(n);Mo.subVectors(t,i);let h=$i.dot(Mo),d=ji.dot(Mo);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector($i,a);wo.subVectors(t,r);let m=$i.dot(wo),_=ji.dot(wo);if(_>=0&&m<=_)return e.copy(r);let u=m*c-l*_;if(u<=0&&c>=0&&_<=0)return s=c/(c-_),e.copy(n).addScaledVector(ji,s);let p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return _h.subVectors(r,i),s=(d-h)/(d-h+(m-_)),e.copy(i).addScaledVector(_h,s);let v=1/(p+u+f);return a=u*v,s=f*v,e.copy(n).addScaledVector($i,a).addScaledVector(ji,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tp=0,pr=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=or,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let s in r){let l=r[s];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vs=class extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ie=new X,ws=new Bt,nn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Hs=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Fn=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ep=0,tn=new le,So=new Le,Ki=new X,We=new Ci,Fr=new Ci,de=new X,zn=class extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?Gs:Hs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let s=e[r];Fr.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(We.min,Fr.min),We.expandByPoint(de),de.addVectors(We.max,Fr.max),We.expandByPoint(de)):(We.expandByPoint(Fr.min),We.expandByPoint(Fr.max))}We.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)de.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(de));if(e)for(let r=0,a=e.length;r<a;r++){let s=e[r],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)de.fromBufferAttribute(s,c),l&&(Ki.fromBufferAttribute(t,c),de.add(Ki)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*s),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let N=0;N<s;N++)c[N]=new X,h[N]=new X;let d=new X,f=new X,m=new X,_=new Bt,u=new Bt,p=new Bt,v=new X,w=new X;function b(N,q,J){d.fromArray(i,N*3),f.fromArray(i,q*3),m.fromArray(i,J*3),_.fromArray(a,N*2),u.fromArray(a,q*2),p.fromArray(a,J*2),f.sub(d),m.sub(d),u.sub(_),p.sub(_);let U=1/(u.x*p.y-p.x*u.y);isFinite(U)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(m,-u.y).multiplyScalar(U),w.copy(m).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(U),c[N].add(v),c[q].add(v),c[J].add(v),h[N].add(w),h[q].add(w),h[J].add(w))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let N=0,q=M.length;N<q;++N){let J=M[N],U=J.start,k=J.count;for(let W=U,Q=U+k;W<Q;W+=3)b(n[W+0],n[W+1],n[W+2])}let T=new X,D=new X,O=new X,y=new X;function S(N){O.fromArray(r,N*3),y.copy(O);let q=c[N];T.copy(q),T.sub(O.multiplyScalar(O.dot(q))).normalize(),D.crossVectors(y,q);let U=D.dot(h[N])<0?-1:1;l[N*4]=T.x,l[N*4+1]=T.y,l[N*4+2]=T.z,l[N*4+3]=U}for(let N=0,q=M.length;N<q;++N){let J=M[N],U=J.start,k=J.count;for(let W=U,Q=U+k;W<Q;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new X,r=new X,a=new X,s=new X,l=new X,c=new X,h=new X,d=new X;if(t)for(let f=0,m=t.count;f<m;f+=3){let _=t.getX(f+0),u=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,u),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),s.fromBufferAttribute(n,_),l.fromBufferAttribute(n,u),c.fromBufferAttribute(n,p),s.add(h),l.add(h),c.add(h),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(u,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(s,l){let c=s.array,h=s.itemSize,d=s.normalized,f=new c.constructor(l.length*h),m=0,_=0;for(let u=0,p=l.length;u<p;u++){s.isInterleavedBufferAttribute?m=l[u]*s.data.stride+s.offset:m=l[u]*h;for(let v=0;v<h;v++)f[_++]=c[m++]}return new nn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new zn,n=this.index.array,i=this.attributes;for(let s in i){let l=i[s],c=t(l,n);e.setAttribute(s,c)}let r=this.morphAttributes;for(let s in r){let l=[],c=r[s];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let s=0,l=a.length;s<l;s++){let c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},xh=new le,Qi=new Bo,To=new Xr,Nr=new X,zr=new X,kr=new X,Ao=new X,Ss=new X,Ts=new Bt,As=new Bt,Es=new Bt,Eo=new X,Cs=new X,en=class extends Le{constructor(t=new zn,e=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let s=this.morphTargetInfluences;if(r&&s){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=s[l],d=r[l];h!==0&&(Ao.fromBufferAttribute(d,t),a?Ss.addScaledVector(Ao,h):Ss.addScaledVector(Ao.sub(e),h))}e.add(Ss)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),t.ray.intersectsSphere(To)===!1)||(xh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(xh),n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1))return;let a,s=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){let u=d[m],p=i[u.materialIndex],v=Math.max(u.start,f.start),w=Math.min(s.count,Math.min(u.start+u.count,f.start+f.count));for(let b=v,M=w;b<M;b+=3){let T=s.getX(b),D=s.getX(b+1),O=s.getX(b+2);a=Ps(this,p,t,Qi,c,h,T,D,O),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=u.materialIndex,e.push(a))}}else{let m=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let u=m,p=_;u<p;u+=3){let v=s.getX(u),w=s.getX(u+1),b=s.getX(u+2);a=Ps(this,i,t,Qi,c,h,v,w,b),a&&(a.faceIndex=Math.floor(u/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){let u=d[m],p=i[u.materialIndex],v=Math.max(u.start,f.start),w=Math.min(l.count,Math.min(u.start+u.count,f.start+f.count));for(let b=v,M=w;b<M;b+=3){let T=b,D=b+1,O=b+2;a=Ps(this,p,t,Qi,c,h,T,D,O),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=u.materialIndex,e.push(a))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let u=m,p=_;u<p;u+=3){let v=u,w=u+1,b=u+2;a=Ps(this,i,t,Qi,c,h,v,w,b),a&&(a.faceIndex=Math.floor(u/3),e.push(a))}}}};function np(o,t,e,n,i,r,a,s){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side===Qn,s),l===null)return null;Cs.copy(s),Cs.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:o}}function Ps(o,t,e,n,i,r,a,s,l){o.getVertexPosition(a,Nr),o.getVertexPosition(s,zr),o.getVertexPosition(l,kr);let c=np(o,t,e,n,Nr,zr,kr,Eo);if(c){i&&(Ts.fromBufferAttribute(i,a),As.fromBufferAttribute(i,s),Es.fromBufferAttribute(i,l),c.uv=fn.getUV(Eo,Nr,zr,kr,Ts,As,Es,new Bt)),r&&(Ts.fromBufferAttribute(r,a),As.fromBufferAttribute(r,s),Es.fromBufferAttribute(r,l),c.uv2=fn.getUV(Eo,Nr,zr,kr,Ts,As,Es,new Bt));let h={a,b:s,c:l,normal:new X,materialIndex:0};fn.getNormal(Nr,zr,kr,h.normal),c.face=h}return c}var Pi=class extends zn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(d,2));function _(u,p,v,w,b,M,T,D,O,y,S){let N=M/O,q=T/y,J=M/2,U=T/2,k=D/2,W=O+1,Q=y+1,it=0,Y=0,lt=new X;for(let st=0;st<Q;st++){let _t=st*q-U;for(let H=0;H<W;H++){let ot=H*N-J;lt[u]=ot*w,lt[p]=_t*b,lt[v]=k,c.push(lt.x,lt.y,lt.z),lt[u]=0,lt[p]=0,lt[v]=D>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(H/O),d.push(1-st/y),it+=1}}for(let st=0;st<y;st++)for(let _t=0;_t<O;_t++){let H=f+_t+W*st,ot=f+_t+W*(st+1),ut=f+(_t+1)+W*(st+1),ft=f+(_t+1)+W*st;l.push(H,ot,ft),l.push(ot,ut,ft),Y+=6}s.addGroup(m,Y,S),m+=Y,f+=it}}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function mr(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(o){let t={};for(let e=0;e<o.length;e++){let n=mr(o[e]);for(let i in n)t[i]=n[i]}return t}function ip(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Jh(o){return o.getRenderTarget()===null&&o.outputEncoding===Wt?vn:Wr}var rp={clone:mr,merge:Ce},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ws=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xe=class extends Ws{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ao*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},tr=-90,er=1,Vo=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Xe(tr,er,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let r=new Xe(tr,er,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);let a=new Xe(tr,er,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let s=new Xe(tr,er,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);let l=new Xe(tr,er,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new Xe(tr,er,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,a,s,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=On,t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},qs=class extends xe{constructor(t,e,n,i,r,a,s,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,i,r,a,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ho=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xt}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Kn});r.uniforms.tEquirect.value=e;let a=new en(i,r),s=e.minFilter;return e.minFilter===Hr&&(e.minFilter=Xt),new Vo(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Co=new X,op=new X,lp=new Re,In=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Co.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let n=t.delta(Co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lp.getNormalMatrix(t),i=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},nr=new Xr,Rs=new X,Xs=class{constructor(t=new In,e=new In,n=new In,i=new In,r=new In,a=new In){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],h=n[6],d=n[7],f=n[8],m=n[9],_=n[10],u=n[11],p=n[12],v=n[13],w=n[14],b=n[15];return e[0].setComponents(s-i,d-l,u-f,b-p).normalize(),e[1].setComponents(s+i,d+l,u+f,b+p).normalize(),e[2].setComponents(s+r,d+c,u+m,b+v).normalize(),e[3].setComponents(s-r,d-c,u-m,b-v).normalize(),e[4].setComponents(s-a,d-h,u-_,b-w).normalize(),e[5].setComponents(s+a,d+h,u+_,b+w).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSprite(t){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Rs.x=i.normal.x>0?t.max.x:t.min.x,Rs.y=i.normal.y>0?t.max.y:t.min.y,Rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $h(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function cp(o,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){let f=h.array,m=h.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,f):(e?o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:a,remove:s,update:l}}var Ri=class extends zn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,h=l+1,d=t/s,f=e/l,m=[],_=[],u=[],p=[];for(let v=0;v<h;v++){let w=v*f-a;for(let b=0;b<c;b++){let M=b*d-r;_.push(M,-w,0),u.push(0,0,1),p.push(b/s),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let w=0;w<s;w++){let b=w+c*v,M=w+c*(v+1),T=w+1+c*(v+1),D=w+1+c*v;m.push(b,M,D),m.push(M,T,D)}this.setIndex(m),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(p,2))}static fromJSON(t){return new Ri(t.width,t.height,t.widthSegments,t.heightSegments)}},hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp="vec3 transformed = vec3( position );",_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,vp=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Qp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Sm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,eg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ng=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ig=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ag=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_g=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Eg=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Lg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ct={alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:fp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:xp,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Sp,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Ep,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Ip,emissivemap_fragment:Op,emissivemap_pars_fragment:Fp,encodings_fragment:Np,encodings_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Bp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:qp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:jp,lights_pars_begin:Kp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:fm,map_fragment:dm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:xm,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:bm,morphtarget_vertex:Mm,normal_fragment_begin:wm,normal_fragment_maps:Sm,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Em,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,output_fragment:Im,packing:Om,premultiplied_alpha_fragment:Fm,project_vertex:Nm,dithering_fragment:zm,dithering_pars_fragment:km,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:qm,skinning_pars_vertex:Xm,skinning_vertex:Ym,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:$m,tonemapping_fragment:jm,tonemapping_pars_fragment:Km,transmission_fragment:Qm,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,uv2_pars_fragment:rg,uv2_pars_vertex:sg,uv2_vertex:ag,worldpos_vertex:og,background_vert:lg,background_frag:cg,backgroundCube_vert:hg,backgroundCube_frag:ug,cube_vert:fg,cube_frag:dg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:_g,equirect_vert:xg,equirect_frag:vg,linedashed_vert:yg,linedashed_frag:bg,meshbasic_vert:Mg,meshbasic_frag:wg,meshlambert_vert:Sg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Eg,meshnormal_vert:Cg,meshnormal_frag:Pg,meshphong_vert:Rg,meshphong_frag:Lg,meshphysical_vert:Dg,meshphysical_frag:Ig,meshtoon_vert:Og,meshtoon_frag:Fg,points_vert:Ng,points_frag:zg,shadow_vert:kg,shadow_frag:Ug,sprite_vert:Bg,sprite_frag:Vg},pt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Re},uv2Transform:{value:new Re},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Re}}},yn={basic:{uniforms:Ce([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ce([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ce([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ce([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ce([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ce([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ce([pt.points,pt.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ce([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ce([pt.common,pt.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ce([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ce([pt.sprite,pt.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Ce([pt.common,pt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Ce([pt.lights,pt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};yn.physical={uniforms:Ce([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Ls={r:0,b:0,g:0};function Hg(o,t,e,n,i,r,a){let s=new qt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(p,v){let w=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b));let M=o.xr,T=M.getSession&&M.getSession();T&&T.environmentBlendMode==="additive"&&(b=null),b===null?u(s,l):b&&b.isColor&&(u(b,1),w=!0),(o.autoClear||w)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),b&&(b.isCubeTexture||b.mapping===js)?(h===void 0&&(h=new en(new Pi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:mr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,O,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=b.encoding!==Wt,(d!==b||f!==b.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,m=o.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new en(new Ri(2,2),new dn({name:"BackgroundMaterial",uniforms:mr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=b.encoding!==Wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function u(p,v){p.getRGB(Ls,Jh(o)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,v,a)}return{getClearColor:function(){return s},setClearColor:function(p,v=1){s.set(p),l=v,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,u(s,l)},render:_}}function Gg(o,t,e,n){let i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null),c=l,h=!1;function d(k,W,Q,it,Y){let lt=!1;if(a){let st=u(it,Q,W);c!==st&&(c=st,m(c.object)),lt=v(k,it,Q,Y),lt&&w(k,it,Q,Y)}else{let st=W.wireframe===!0;(c.geometry!==it.id||c.program!==Q.id||c.wireframe!==st)&&(c.geometry=it.id,c.program=Q.id,c.wireframe=st,lt=!0)}Y!==null&&e.update(Y,34963),(lt||h)&&(h=!1,y(k,W,Q,it),Y!==null&&o.bindBuffer(34963,e.get(Y).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(k){return n.isWebGL2?o.bindVertexArray(k):r.bindVertexArrayOES(k)}function _(k){return n.isWebGL2?o.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function u(k,W,Q){let it=Q.wireframe===!0,Y=s[k.id];Y===void 0&&(Y={},s[k.id]=Y);let lt=Y[W.id];lt===void 0&&(lt={},Y[W.id]=lt);let st=lt[it];return st===void 0&&(st=p(f()),lt[it]=st),st}function p(k){let W=[],Q=[],it=[];for(let Y=0;Y<i;Y++)W[Y]=0,Q[Y]=0,it[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Q,attributeDivisors:it,object:k,attributes:{},index:null}}function v(k,W,Q,it){let Y=c.attributes,lt=W.attributes,st=0,_t=Q.getAttributes();for(let H in _t)if(_t[H].location>=0){let ut=Y[H],ft=lt[H];if(ft===void 0&&(H==="instanceMatrix"&&k.instanceMatrix&&(ft=k.instanceMatrix),H==="instanceColor"&&k.instanceColor&&(ft=k.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;st++}return c.attributesNum!==st||c.index!==it}function w(k,W,Q,it){let Y={},lt=W.attributes,st=0,_t=Q.getAttributes();for(let H in _t)if(_t[H].location>=0){let ut=lt[H];ut===void 0&&(H==="instanceMatrix"&&k.instanceMatrix&&(ut=k.instanceMatrix),H==="instanceColor"&&k.instanceColor&&(ut=k.instanceColor));let ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),Y[H]=ft,st++}c.attributes=Y,c.attributesNum=st,c.index=it}function b(){let k=c.newAttributes;for(let W=0,Q=k.length;W<Q;W++)k[W]=0}function M(k){T(k,0)}function T(k,W){let Q=c.newAttributes,it=c.enabledAttributes,Y=c.attributeDivisors;Q[k]=1,it[k]===0&&(o.enableVertexAttribArray(k),it[k]=1),Y[k]!==W&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,W),Y[k]=W)}function D(){let k=c.newAttributes,W=c.enabledAttributes;for(let Q=0,it=W.length;Q<it;Q++)W[Q]!==k[Q]&&(o.disableVertexAttribArray(Q),W[Q]=0)}function O(k,W,Q,it,Y,lt){n.isWebGL2===!0&&(Q===5124||Q===5125)?o.vertexAttribIPointer(k,W,Q,Y,lt):o.vertexAttribPointer(k,W,Q,it,Y,lt)}function y(k,W,Q,it){if(n.isWebGL2===!1&&(k.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();let Y=it.attributes,lt=Q.getAttributes(),st=W.defaultAttributeValues;for(let _t in lt){let H=lt[_t];if(H.location>=0){let ot=Y[_t];if(ot===void 0&&(_t==="instanceMatrix"&&k.instanceMatrix&&(ot=k.instanceMatrix),_t==="instanceColor"&&k.instanceColor&&(ot=k.instanceColor)),ot!==void 0){let ut=ot.normalized,ft=ot.itemSize,Z=e.get(ot);if(Z===void 0)continue;let Mt=Z.buffer,xt=Z.type,vt=Z.bytesPerElement;if(ot.isInterleavedBufferAttribute){let mt=ot.data,kt=mt.stride,Et=ot.offset;if(mt.isInstancedInterleavedBuffer){for(let wt=0;wt<H.locationSize;wt++)T(H.location+wt,mt.meshPerAttribute);k.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let wt=0;wt<H.locationSize;wt++)M(H.location+wt);o.bindBuffer(34962,Mt);for(let wt=0;wt<H.locationSize;wt++)O(H.location+wt,ft/H.locationSize,xt,ut,kt*vt,(Et+ft/H.locationSize*wt)*vt)}else{if(ot.isInstancedBufferAttribute){for(let mt=0;mt<H.locationSize;mt++)T(H.location+mt,ot.meshPerAttribute);k.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let mt=0;mt<H.locationSize;mt++)M(H.location+mt);o.bindBuffer(34962,Mt);for(let mt=0;mt<H.locationSize;mt++)O(H.location+mt,ft/H.locationSize,xt,ut,ft*vt,ft/H.locationSize*mt*vt)}}else if(st!==void 0){let ut=st[_t];if(ut!==void 0)switch(ut.length){case 2:o.vertexAttrib2fv(H.location,ut);break;case 3:o.vertexAttrib3fv(H.location,ut);break;case 4:o.vertexAttrib4fv(H.location,ut);break;default:o.vertexAttrib1fv(H.location,ut)}}}}D()}function S(){J();for(let k in s){let W=s[k];for(let Q in W){let it=W[Q];for(let Y in it)_(it[Y].object),delete it[Y];delete W[Q]}delete s[k]}}function N(k){if(s[k.id]===void 0)return;let W=s[k.id];for(let Q in W){let it=W[Q];for(let Y in it)_(it[Y].object),delete it[Y];delete W[Q]}delete s[k.id]}function q(k){for(let W in s){let Q=s[W];if(Q[k.id]===void 0)continue;let it=Q[k.id];for(let Y in it)_(it[Y].object),delete it[Y];delete Q[k.id]}}function J(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:N,releaseStatesOfProgram:q,initAttributes:b,enableAttribute:M,disableUnusedAttributes:D}}function Wg(o,t,e,n){let i=n.isWebGL2,r;function a(c){r=c}function s(c,h){o.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,d),e.update(h,r,d)}this.setMode=a,this.render=s,this.renderInstances=l}function qg(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext,s=e.precision!==void 0?e.precision:"highp",l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),u=o.getParameter(34921),p=o.getParameter(36347),v=o.getParameter(36348),w=o.getParameter(36349),b=f>0,M=a||t.has("OES_texture_float"),T=b&&M,D=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:D}}function Xg(o){let t=this,e=null,n=0,i=!1,r=!1,a=new In,s=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let _=d.clippingPlanes,u=d.clipIntersection,p=d.clipShadows,v=o.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,b=w*4,M=v.clippingState||null;l.value=M,M=h(_,f,b,m);for(let T=0;T!==b;++T)M[T]=e[T];v.clippingState=M,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,_){let u=d!==null?d.length:0,p=null;if(u!==0){if(p=l.value,_!==!0||p===null){let v=m+u*4,w=f.matrixWorldInverse;s.getNormalMatrix(w),(p===null||p.length<v)&&(p=new Float32Array(v));for(let b=0,M=m;b!==u;++b,M+=4)a.copy(d[b]).applyMatrix4(w,s),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=u,t.numIntersection=0,p}}function Yg(o){let t=new WeakMap;function e(a,s){return s===Io?a.mapping=hr:s===Oo&&(a.mapping=ur),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let s=a.mapping;if(s===Io||s===Oo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ho(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let s=a.target;s.removeEventListener("dispose",i);let l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yr=class extends Ws{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sr=4,vh=[.125,.215,.35,.446,.526,.582],bi=20,Po=new Yr,yh=new qt,Ro=null,yi=(1+Math.sqrt(5))/2,ir=1/yi,bh=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,yi,ir),new X(0,yi,-ir),new X(ir,0,yi),new X(-ir,0,yi),new X(yi,ir,0),new X(-yi,ir,0)],Ys=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ro=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro),t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Gr,format:un,encoding:Ei,depthBuffer:!1},i=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Jg(r,t,e)}return i}_compileMaterial(t){let e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,i){let s=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yh),h.toneMapping=On,h.autoClear=!1;let m=new Vs({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),_=new en(new Pi,m),u=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,u=!0):(m.color.copy(yh),u=!0);for(let v=0;v<6;v++){let w=v%3;w===0?(s.up.set(0,l[v],0),s.lookAt(c[v],0,0)):w===1?(s.up.set(0,0,l[v]),s.lookAt(0,c[v],0)):(s.up.set(0,l[v],0),s.lookAt(0,0,c[v]));let b=this._cubeSize;Ds(i,w*b,v>2?b:0,b,b),h.setRenderTarget(i),u&&h.render(_,s),h.render(t,s)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===hr||t.mapping===ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;let l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Po)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=bh[(i-1)%bh.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new en(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bi-1),u=r/_,p=isFinite(r)?1+Math.floor(h*u):bi;p>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);let v=[],w=0;for(let O=0;O<bi;++O){let y=O/u,S=Math.exp(-y*y/2);v.push(S),O===0?w+=S:O<p&&(w+=2*S)}for(let O=0;O<v.length;O++)v[O]=v[O]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);let{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;let M=this._sizeLods[i],T=3*M*(i>b-sr?i-b+sr:0),D=4*(this._cubeSize-M);Ds(e,T,D,3*M,2*M),l.setRenderTarget(e),l.render(d,Po)}};function Zg(o){let t=[],e=[],n=[],i=o,r=o-sr+1+vh.length;for(let a=0;a<r;a++){let s=Math.pow(2,i);e.push(s);let l=1/s;a>o-sr?l=vh[a-o+sr-1]:a===0&&(l=0),n.push(l);let c=1/(s-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,u=3,p=2,v=1,w=new Float32Array(u*_*m),b=new Float32Array(p*_*m),M=new Float32Array(v*_*m);for(let D=0;D<m;D++){let O=D%3*2/3-1,y=D>2?0:-1,S=[O,y,0,O+2/3,y,0,O+2/3,y+1,0,O,y,0,O+2/3,y+1,0,O,y+1,0];w.set(S,u*_*D),b.set(f,p*_*D);let N=[D,D,D,D,D,D];M.set(N,v*_*D)}let T=new zn;T.setAttribute("position",new nn(w,u)),T.setAttribute("uv",new nn(b,p)),T.setAttribute("faceIndex",new nn(M,v)),t.push(T),i>sr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(o,t,e){let n=new Nn(o,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Jg(o,t,e){let n=new Float32Array(bi),i=new X(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Sh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function $g(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){let l=s.mapping,c=l===Io||l===Oo,h=l===hr||l===ur;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=t.get(s);return e===null&&(e=new Ys(o)),d=c?e.fromEquirectangular(s,d):e.fromCubemap(s,d),t.set(s,d),d.texture}else{if(t.has(s))return t.get(s).texture;{let d=s.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ys(o));let f=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0,c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function r(s){let l=s.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jg(o){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kg(o,t,e,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],34962);let m=d.morphAttributes;for(let _ in m){let u=m[_];for(let p=0,v=u.length;p<v;p++)t.update(u[p],34962)}}function c(d){let f=[],m=d.index,_=d.attributes.position,u=0;if(m!==null){let w=m.array;u=m.version;for(let b=0,M=w.length;b<M;b+=3){let T=w[b+0],D=w[b+1],O=w[b+2];f.push(T,D,D,O,O,T)}}else{let w=_.array;u=_.version;for(let b=0,M=w.length/3-1;b<M;b+=3){let T=b+0,D=b+1,O=b+2;f.push(T,D,D,O,O,T)}}let p=new(Yh(f)?Gs:Hs)(f,1);p.version=u;let v=r.get(d);v&&t.remove(v),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function Qg(o,t,e,n){let i=n.isWebGL2,r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function h(f,m){o.drawElements(r,m,s,f*l),e.update(m,r,1)}function d(f,m,_){if(_===0)return;let u,p;if(i)u=o,p="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](r,m,s,f*l,_),e.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function t_(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function e_(o,t){return o[0]-t[0]}function n_(o,t){return Math.abs(t[1])-Math.abs(o[1])}function i_(o,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new Kt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,d,f){let m=c.morphTargetInfluences;if(t.isWebGL2===!0){let _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,u=_!==void 0?_.length:0,p=r.get(h);if(p===void 0||p.count!==u){let W=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",W)};p!==void 0&&p.texture.dispose();let b=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],y=h.morphAttributes.color||[],S=0;b===!0&&(S=1),M===!0&&(S=2),T===!0&&(S=3);let N=h.attributes.position.count*S,q=1;N>t.maxTextureSize&&(q=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);let J=new Float32Array(N*q*4*u),U=new Us(J,N,q,u);U.type=wi,U.needsUpdate=!0;let k=S*4;for(let Q=0;Q<u;Q++){let it=D[Q],Y=O[Q],lt=y[Q],st=N*q*4*Q;for(let _t=0;_t<it.count;_t++){let H=_t*k;b===!0&&(a.fromBufferAttribute(it,_t),J[st+H+0]=a.x,J[st+H+1]=a.y,J[st+H+2]=a.z,J[st+H+3]=0),M===!0&&(a.fromBufferAttribute(Y,_t),J[st+H+4]=a.x,J[st+H+5]=a.y,J[st+H+6]=a.z,J[st+H+7]=0),T===!0&&(a.fromBufferAttribute(lt,_t),J[st+H+8]=a.x,J[st+H+9]=a.y,J[st+H+10]=a.z,J[st+H+11]=lt.itemSize===4?a.w:1)}}p={count:u,texture:U,size:new Bt(N,q)},r.set(h,p),h.addEventListener("dispose",W)}let v=0;for(let b=0;b<m.length;b++)v+=m[b];let w=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",w),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{let _=m===void 0?0:m.length,u=n[h.id];if(u===void 0||u.length!==_){u=[];for(let M=0;M<_;M++)u[M]=[M,0];n[h.id]=u}for(let M=0;M<_;M++){let T=u[M];T[0]=M,T[1]=m[M]}u.sort(n_);for(let M=0;M<8;M++)M<_&&u[M][1]?(s[M][0]=u[M][0],s[M][1]=u[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(e_);let p=h.morphAttributes.position,v=h.morphAttributes.normal,w=0;for(let M=0;M<8;M++){let T=s[M],D=T[0],O=T[1];D!==Number.MAX_SAFE_INTEGER&&O?(p&&h.getAttribute("morphTarget"+M)!==p[D]&&h.setAttribute("morphTarget"+M,p[D]),v&&h.getAttribute("morphNormal"+M)!==v[D]&&h.setAttribute("morphNormal"+M,v[D]),i[M]=O,w+=O):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),v&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}let b=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function r_(o,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function s(l){let c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var jh=new xe,Kh=new Us,Qh=new Uo,tu=new qs,Th=[],Ah=[],Eh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function _r(o,t,e){let n=o[0];if(n<=0||n>0)return o;let i=t*e,r=Th[i];if(r===void 0&&(r=new Float32Array(i),Th[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function ce(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function he(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ks(o,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function s_(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function a_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;o.uniform2fv(this.addr,t),he(e,t)}}function o_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;o.uniform3fv(this.addr,t),he(e,t)}}function l_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;o.uniform4fv(this.addr,t),he(e,t)}}function c_(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ph.set(n),o.uniformMatrix2fv(this.addr,!1,Ph),he(e,n)}}function h_(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ch.set(n),o.uniformMatrix3fv(this.addr,!1,Ch),he(e,n)}}function u_(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Eh.set(n),o.uniformMatrix4fv(this.addr,!1,Eh),he(e,n)}}function f_(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function d_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;o.uniform2iv(this.addr,t),he(e,t)}}function p_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;o.uniform3iv(this.addr,t),he(e,t)}}function m_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;o.uniform4iv(this.addr,t),he(e,t)}}function g_(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function __(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;o.uniform2uiv(this.addr,t),he(e,t)}}function x_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;o.uniform3uiv(this.addr,t),he(e,t)}}function v_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;o.uniform4uiv(this.addr,t),he(e,t)}}function y_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||jh,i)}function b_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qh,i)}function M_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tu,i)}function w_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kh,i)}function S_(o){switch(o){case 5126:return s_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return d_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return w_}}function T_(o,t){o.uniform1fv(this.addr,t)}function A_(o,t){let e=_r(t,this.size,2);o.uniform2fv(this.addr,e)}function E_(o,t){let e=_r(t,this.size,3);o.uniform3fv(this.addr,e)}function C_(o,t){let e=_r(t,this.size,4);o.uniform4fv(this.addr,e)}function P_(o,t){let e=_r(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function R_(o,t){let e=_r(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function L_(o,t){let e=_r(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function D_(o,t){o.uniform1iv(this.addr,t)}function I_(o,t){o.uniform2iv(this.addr,t)}function O_(o,t){o.uniform3iv(this.addr,t)}function F_(o,t){o.uniform4iv(this.addr,t)}function N_(o,t){o.uniform1uiv(this.addr,t)}function z_(o,t){o.uniform2uiv(this.addr,t)}function k_(o,t){o.uniform3uiv(this.addr,t)}function U_(o,t){o.uniform4uiv(this.addr,t)}function B_(o,t,e){let n=this.cache,i=t.length,r=Ks(e,i);ce(n,r)||(o.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||jh,r[a])}function V_(o,t,e){let n=this.cache,i=t.length,r=Ks(e,i);ce(n,r)||(o.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qh,r[a])}function H_(o,t,e){let n=this.cache,i=t.length,r=Ks(e,i);ce(n,r)||(o.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||tu,r[a])}function G_(o,t,e){let n=this.cache,i=t.length,r=Ks(e,i);ce(n,r)||(o.uniform1iv(this.addr,r),he(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Kh,r[a])}function W_(o){switch(o){case 5126:return T_;case 35664:return A_;case 35665:return E_;case 35666:return C_;case 35674:return P_;case 35675:return R_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return I_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return N_;case 36294:return z_;case 36295:return k_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return G_}}var Go=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=S_(e.type)}},Wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=W_(e.type)}},qo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let s=i[r];s.setValue(t,e[s.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function Rh(o,t){o.seq.push(t),o.map[t.id]=t}function q_(o,t,e){let n=o.name,i=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),a=Lo.lastIndex,s=r[1],l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Rh(e,c===void 0?new Go(s,o,t):new Wo(s,o,t));break}else{let d=e.map[s];d===void 0&&(d=new qo(s),Rh(e,d)),e=d}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);q_(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Lh(o,t,e){let n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}var X_=0;function Y_(o,t){let e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Z_(o){switch(o){case Ei:return["Linear","( value )"];case Wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Dh(o,t,e){let n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Y_(o.getShaderSource(t),a)}else return i}function J_(o,t){let e=Z_(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function $_(o,t){let e;switch(t){case vd:e="Linear";break;case yd:e="Reinhard";break;case bd:e="OptimizedCineon";break;case Md:e="ACESFilmic";break;case wd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function j_(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Br).join(`
`)}function K_(o){let t=[];for(let e in o){let n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q_(o,t){let e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){let r=o.getActiveAttrib(t,i),a=r.name,s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function Br(o){return o!==""}function Ih(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(o){return o.replace(t0,e0)}function e0(o,t){let e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Xo(e)}var n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(o){return o.replace(n0,i0)}function i0(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nh(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r0(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===jf?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ur&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case hr:case ur:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function o0(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case _d:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function l0(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function c0(o,t,e,n){let i=o.getContext(),r=e.defines,a=e.vertexShader,s=e.fragmentShader,l=r0(e),c=s0(e),h=a0(e),d=o0(e),f=l0(e),m=e.isWebGL2?"":j_(e),_=K_(r),u=i.createProgram(),p,v,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[_].filter(Br).join(`
`),p.length>0&&(p+=`
`),v=[m,_].filter(Br).join(`
`),v.length>0&&(v+=`
`)):(p=[Nh(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),v=[m,Nh(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Ct.tonemapping_pars_fragment:"",e.toneMapping!==On?$_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.encodings_pars_fragment,J_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),a=Xo(a),a=Ih(a,e),a=Oh(a,e),s=Xo(s),s=Ih(s,e),s=Oh(s,e),a=Fh(a),s=Fh(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let b=w+p+a,M=w+v+s,T=Lh(i,35633,b),D=Lh(i,35632,M);if(i.attachShader(u,T),i.attachShader(u,D),e.index0AttributeName!==void 0?i.bindAttribLocation(u,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(u,0,"position"),i.linkProgram(u),o.debug.checkShaderErrors){let S=i.getProgramInfoLog(u).trim(),N=i.getShaderInfoLog(T).trim(),q=i.getShaderInfoLog(D).trim(),J=!0,U=!0;if(i.getProgramParameter(u,35714)===!1){J=!1;let k=Dh(i,T,"vertex"),W=Dh(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(u,35715)+`

Program Info Log: `+S+`
`+k+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(N===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:J,programLog:S,vertexShader:{log:N,prefix:p},fragmentShader:{log:q,prefix:v}})}i.deleteShader(T),i.deleteShader(D);let O;this.getUniforms=function(){return O===void 0&&(O=new cr(i,u)),O};let y;return this.getAttributes=function(){return y===void 0&&(y=Q_(i,u)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(u),this.program=void 0},this.name=e.shaderName,this.id=X_++,this.cacheKey=t,this.usedTimes=1,this.program=u,this.vertexShader=T,this.fragmentShader=D,this}var h0=0,Yo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zo(t),e.set(t,n)),n}},Zo=class{constructor(t){this.id=h0++,this.code=t,this.usedTimes=0}};function u0(o,t,e,n,i,r,a){let s=new Bs,l=new Yo,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(y,S,N,q,J){let U=q.fog,k=J.geometry,W=y.isMeshStandardMaterial?q.environment:null,Q=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),it=Q&&Q.mapping===js?Q.image.height:null,Y=_[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let lt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=lt!==void 0?lt.length:0,_t=0;k.morphAttributes.position!==void 0&&(_t=1),k.morphAttributes.normal!==void 0&&(_t=2),k.morphAttributes.color!==void 0&&(_t=3);let H,ot,ut,ft;if(Y){let kt=yn[Y];H=kt.vertexShader,ot=kt.fragmentShader}else H=y.vertexShader,ot=y.fragmentShader,l.update(y),ut=l.getVertexShaderID(y),ft=l.getFragmentShaderID(y);let Z=o.getRenderTarget(),Mt=y.alphaTest>0,xt=y.clearcoat>0,vt=y.iridescence>0;return{isWebGL2:h,shaderID:Y,shaderName:y.type,vertexShader:H,fragmentShader:ot,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?o.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Ei,map:!!y.map,matcap:!!y.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:it,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Gd,tangentSpaceNormalMap:y.normalMapType===Hd,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Wt,clearcoat:xt,clearcoatMap:xt&&!!y.clearcoatMap,clearcoatRoughnessMap:xt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!y.clearcoatNormalMap,iridescence:vt,iridescenceMap:vt&&!!y.iridescenceMap,iridescenceThicknessMap:vt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===or,alphaMap:!!y.alphaMap,alphaTest:Mt,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:_t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:On,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===Ye,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(S,y),w(S,y),S.push(o.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function w(y,S){s.disableAll(),S.isWebGL2&&s.enable(0),S.supportsVertexTextures&&s.enable(1),S.instancing&&s.enable(2),S.instancingColor&&s.enable(3),S.map&&s.enable(4),S.matcap&&s.enable(5),S.envMap&&s.enable(6),S.lightMap&&s.enable(7),S.aoMap&&s.enable(8),S.emissiveMap&&s.enable(9),S.bumpMap&&s.enable(10),S.normalMap&&s.enable(11),S.objectSpaceNormalMap&&s.enable(12),S.tangentSpaceNormalMap&&s.enable(13),S.clearcoat&&s.enable(14),S.clearcoatMap&&s.enable(15),S.clearcoatRoughnessMap&&s.enable(16),S.clearcoatNormalMap&&s.enable(17),S.iridescence&&s.enable(18),S.iridescenceMap&&s.enable(19),S.iridescenceThicknessMap&&s.enable(20),S.displacementMap&&s.enable(21),S.specularMap&&s.enable(22),S.roughnessMap&&s.enable(23),S.metalnessMap&&s.enable(24),S.gradientMap&&s.enable(25),S.alphaMap&&s.enable(26),S.alphaTest&&s.enable(27),S.vertexColors&&s.enable(28),S.vertexAlphas&&s.enable(29),S.vertexUvs&&s.enable(30),S.vertexTangents&&s.enable(31),S.uvsVertexOnly&&s.enable(32),y.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.physicallyCorrectLights&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.specularIntensityMap&&s.enable(15),S.specularColorMap&&s.enable(16),S.transmission&&s.enable(17),S.transmissionMap&&s.enable(18),S.thicknessMap&&s.enable(19),S.sheen&&s.enable(20),S.sheenColorMap&&s.enable(21),S.sheenRoughnessMap&&s.enable(22),S.decodeVideoTexture&&s.enable(23),S.opaque&&s.enable(24),y.push(s.mask)}function b(y){let S=_[y.type],N;if(S){let q=yn[S];N=rp.clone(q.uniforms)}else N=y.uniforms;return N}function M(y,S){let N;for(let q=0,J=c.length;q<J;q++){let U=c[q];if(U.cacheKey===S){N=U,++N.usedTimes;break}}return N===void 0&&(N=new c0(o,S,y,r),c.push(N)),N}function T(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function D(y){l.remove(y)}function O(){l.dispose()}return{getParameters:u,getProgramCacheKey:p,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:O}}function f0(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function d0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function zh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function kh(){let o=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,m,_,u,p){let v=o[t];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:u,group:p},o[t]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=u,v.group=p),t++,v}function s(d,f,m,_,u,p){let v=a(d,f,m,_,u,p);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):e.push(v)}function l(d,f,m,_,u,p){let v=a(d,f,m,_,u,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function c(d,f){e.length>1&&e.sort(d||d0),n.length>1&&n.sort(f||zh),i.length>1&&i.sort(f||zh)}function h(){for(let d=t,f=o.length;d<f;d++){let m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:h,sort:c}}function p0(){let o=new WeakMap;function t(n,i){let r=o.get(n),a;return r===void 0?(a=new kh,o.set(n,[a])):i>=r.length?(a=new kh,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function m0(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new qt};break;case"SpotLight":e={position:new X,direction:new X,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new X,halfWidth:new X,halfHeight:new X};break}return o[t.id]=e,e}}}function g0(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var _0=0;function x0(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function v0(o,t){let e=new m0,n=g0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new X);let r=new X,a=new le,s=new le;function l(h,d){let f=0,m=0,_=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let u=0,p=0,v=0,w=0,b=0,M=0,T=0,D=0,O=0,y=0;h.sort(x0);let S=d!==!0?Math.PI:1;for(let q=0,J=h.length;q<J;q++){let U=h[q],k=U.color,W=U.intensity,Q=U.distance,it=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=k.r*W*S,m+=k.g*W*S,_+=k.b*W*S;else if(U.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],W);else if(U.isDirectionalLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){let lt=U.shadow,st=n.get(U);st.shadowBias=lt.bias,st.shadowNormalBias=lt.normalBias,st.shadowRadius=lt.radius,st.shadowMapSize=lt.mapSize,i.directionalShadow[u]=st,i.directionalShadowMap[u]=it,i.directionalShadowMatrix[u]=U.shadow.matrix,M++}i.directional[u]=Y,u++}else if(U.isSpotLight){let Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(k).multiplyScalar(W*S),Y.distance=Q,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[v]=Y;let lt=U.shadow;if(U.map&&(i.spotLightMap[O]=U.map,O++,lt.updateMatrices(U),U.castShadow&&y++),i.spotLightMatrix[v]=lt.matrix,U.castShadow){let st=n.get(U);st.shadowBias=lt.bias,st.shadowNormalBias=lt.normalBias,st.shadowRadius=lt.radius,st.shadowMapSize=lt.mapSize,i.spotShadow[v]=st,i.spotShadowMap[v]=it,D++}v++}else if(U.isRectAreaLight){let Y=e.get(U);Y.color.copy(k).multiplyScalar(W),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[w]=Y,w++}else if(U.isPointLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*S),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let lt=U.shadow,st=n.get(U);st.shadowBias=lt.bias,st.shadowNormalBias=lt.normalBias,st.shadowRadius=lt.radius,st.shadowMapSize=lt.mapSize,st.shadowCameraNear=lt.camera.near,st.shadowCameraFar=lt.camera.far,i.pointShadow[p]=st,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=U.shadow.matrix,T++}i.point[p]=Y,p++}else if(U.isHemisphereLight){let Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(W*S),Y.groundColor.copy(U.groundColor).multiplyScalar(W*S),i.hemi[b]=Y,b++}}w>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;let N=i.hash;(N.directionalLength!==u||N.pointLength!==p||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==b||N.numDirectionalShadows!==M||N.numPointShadows!==T||N.numSpotShadows!==D||N.numSpotMaps!==O)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=D+O-y,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=y,N.directionalLength=u,N.pointLength=p,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=b,N.numDirectionalShadows=M,N.numPointShadows=T,N.numSpotShadows=D,N.numSpotMaps=O,i.version=_0++)}function c(h,d){let f=0,m=0,_=0,u=0,p=0,v=d.matrixWorldInverse;for(let w=0,b=h.length;w<b;w++){let M=h[w];if(M.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),f++}else if(M.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(v),_++}else if(M.isRectAreaLight){let T=i.rectArea[u];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(v),s.identity(),a.copy(M.matrixWorld),a.premultiply(v),s.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),u++}else if(M.isPointLight){let T=i.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(v),m++}else if(M.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function Uh(o,t){let e=new v0(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function s(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function y0(o,t){let e=new WeakMap;function n(r,a=0){let s=e.get(r),l;return s===void 0?(l=new Uh(o,t),e.set(r,[l])):a>=s.length?(l=new Uh(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Jo=class extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$o=class extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new X,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function w0(o,t,e){let n=new Xs,i=new Bt,r=new Bt,a=new Kt,s=new Jo({depthPacking:Vd}),l=new $o,c={},h=e.maxTextureSize,d={[Qn]:Ye,[Ye]:Qn,[jn]:jn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:b0,fragmentShader:M0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new zn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let u=new en(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh,this.render=function(M,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let O=o.getRenderTarget(),y=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),N=o.state;N.setBlending(Kn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let q=0,J=M.length;q<J;q++){let U=M[q],k=U.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let W=k.getFrameExtents();if(i.multiply(W),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,k.mapSize.y=r.y)),k.map===null){let it=this.type!==Ur?{minFilter:Pe,magFilter:Pe}:{};k.map=new Nn(i.x,i.y,it),k.map.texture.name=U.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();let Q=k.getViewportCount();for(let it=0;it<Q;it++){let Y=k.getViewport(it);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),N.viewport(a),k.updateMatrices(U,it),n=k.getFrustum(),b(T,D,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===Ur&&v(k,D),k.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(O,y,S)};function v(M,T){let D=t.update(u);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Nn(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(T,null,D,f,u,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(T,null,D,m,u,null)}function w(M,T,D,O,y,S){let N=null,q=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(q!==void 0)N=q;else if(N=D.isPointLight===!0?l:s,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let J=N.uuid,U=T.uuid,k=c[J];k===void 0&&(k={},c[J]=k);let W=k[U];W===void 0&&(W=N.clone(),k[U]=W),N=W}return N.visible=T.visible,N.wireframe=T.wireframe,S===Ur?N.side=T.shadowSide!==null?T.shadowSide:T.side:N.side=T.shadowSide!==null?T.shadowSide:d[T.side],N.alphaMap=T.alphaMap,N.alphaTest=T.alphaTest,N.map=T.map,N.clipShadows=T.clipShadows,N.clippingPlanes=T.clippingPlanes,N.clipIntersection=T.clipIntersection,N.displacementMap=T.displacementMap,N.displacementScale=T.displacementScale,N.displacementBias=T.displacementBias,N.wireframeLinewidth=T.wireframeLinewidth,N.linewidth=T.linewidth,D.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(D.matrixWorld),N.nearDistance=O,N.farDistance=y),N}function b(M,T,D,O,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Ur)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let q=t.update(M),J=M.material;if(Array.isArray(J)){let U=q.groups;for(let k=0,W=U.length;k<W;k++){let Q=U[k],it=J[Q.materialIndex];if(it&&it.visible){let Y=w(M,it,O,D.near,D.far,y);o.renderBufferDirect(D,null,q,Y,M,Q)}}}else if(J.visible){let U=w(M,J,O,D.near,D.far,y);o.renderBufferDirect(D,null,q,U,M,null)}}let N=M.children;for(let q=0,J=N.length;q<J;q++)b(N[q],T,D,O,y)}}function S0(o,t,e){let n=e.isWebGL2;function i(){let I=!1,B=new Kt,et=null,ht=new Kt(0,0,0,0);return{setMask:function(gt){et!==gt&&!I&&(o.colorMask(gt,gt,gt,gt),et=gt)},setLocked:function(gt){I=gt},setClear:function(gt,St,Ut,Gt,re){re===!0&&(gt*=Gt,St*=Gt,Ut*=Gt),B.set(gt,St,Ut,Gt),ht.equals(B)===!1&&(o.clearColor(gt,St,Ut,Gt),ht.copy(B))},reset:function(){I=!1,et=null,ht.set(-1,0,0,0)}}}function r(){let I=!1,B=null,et=null,ht=null;return{setTest:function(gt){gt?Mt(2929):xt(2929)},setMask:function(gt){B!==gt&&!I&&(o.depthMask(gt),B=gt)},setFunc:function(gt){if(et!==gt){switch(gt){case hd:o.depthFunc(512);break;case ud:o.depthFunc(519);break;case fd:o.depthFunc(513);break;case Do:o.depthFunc(515);break;case dd:o.depthFunc(514);break;case pd:o.depthFunc(518);break;case md:o.depthFunc(516);break;case gd:o.depthFunc(517);break;default:o.depthFunc(515)}et=gt}},setLocked:function(gt){I=gt},setClear:function(gt){ht!==gt&&(o.clearDepth(gt),ht=gt)},reset:function(){I=!1,B=null,et=null,ht=null}}}function a(){let I=!1,B=null,et=null,ht=null,gt=null,St=null,Ut=null,Gt=null,re=null;return{setTest:function(Tt){I||(Tt?Mt(2960):xt(2960))},setMask:function(Tt){B!==Tt&&!I&&(o.stencilMask(Tt),B=Tt)},setFunc:function(Tt,se,ve){(et!==Tt||ht!==se||gt!==ve)&&(o.stencilFunc(Tt,se,ve),et=Tt,ht=se,gt=ve)},setOp:function(Tt,se,ve){(St!==Tt||Ut!==se||Gt!==ve)&&(o.stencilOp(Tt,se,ve),St=Tt,Ut=se,Gt=ve)},setLocked:function(Tt){I=Tt},setClear:function(Tt){re!==Tt&&(o.clearStencil(Tt),re=Tt)},reset:function(){I=!1,B=null,et=null,ht=null,gt=null,St=null,Ut=null,Gt=null,re=null}}}let s=new i,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},m={},_=new WeakMap,u=[],p=null,v=!1,w=null,b=null,M=null,T=null,D=null,O=null,y=null,S=!1,N=null,q=null,J=null,U=null,k=null,W=o.getParameter(35661),Q=!1,it=0,Y=o.getParameter(7938);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=it>=2);let lt=null,st={},_t=o.getParameter(3088),H=o.getParameter(2978),ot=new Kt().fromArray(_t),ut=new Kt().fromArray(H);function ft(I,B,et){let ht=new Uint8Array(4),gt=o.createTexture();o.bindTexture(I,gt),o.texParameteri(I,10241,9728),o.texParameteri(I,10240,9728);for(let St=0;St<et;St++)o.texImage2D(B+St,0,6408,1,1,0,6408,5121,ht);return gt}let Z={};Z[3553]=ft(3553,3553,1),Z[34067]=ft(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Mt(2929),l.setFunc(Do),ue(!1),Ie(Ac),Mt(2884),pe(Kn);function Mt(I){f[I]!==!0&&(o.enable(I),f[I]=!0)}function xt(I){f[I]!==!1&&(o.disable(I),f[I]=!1)}function vt(I,B){return m[I]!==B?(o.bindFramebuffer(I,B),m[I]=B,n&&(I===36009&&(m[36160]=B),I===36160&&(m[36009]=B)),!0):!1}function mt(I,B){let et=u,ht=!1;if(I)if(et=_.get(B),et===void 0&&(et=[],_.set(B,et)),I.isWebGLMultipleRenderTargets){let gt=I.texture;if(et.length!==gt.length||et[0]!==36064){for(let St=0,Ut=gt.length;St<Ut;St++)et[St]=36064+St;et.length=gt.length,ht=!0}}else et[0]!==36064&&(et[0]=36064,ht=!0);else et[0]!==1029&&(et[0]=1029,ht=!0);ht&&(e.isWebGL2?o.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function kt(I){return p!==I?(o.useProgram(I),p=I,!0):!1}let Et={[rr]:32774,[Qf]:32778,[td]:32779};if(n)Et[Rc]=32775,Et[Lc]=32776;else{let I=t.get("EXT_blend_minmax");I!==null&&(Et[Rc]=I.MIN_EXT,Et[Lc]=I.MAX_EXT)}let wt={[ed]:0,[nd]:1,[id]:768,[Hh]:770,[cd]:776,[od]:774,[sd]:772,[rd]:769,[Gh]:771,[ld]:775,[ad]:773};function pe(I,B,et,ht,gt,St,Ut,Gt){if(I===Kn){v===!0&&(xt(3042),v=!1);return}if(v===!1&&(Mt(3042),v=!0),I!==Kf){if(I!==w||Gt!==S){if((b!==rr||D!==rr)&&(o.blendEquation(32774),b=rr,D=rr),Gt)switch(I){case or:o.blendFuncSeparate(1,771,1,771);break;case Ec:o.blendFunc(1,1);break;case Cc:o.blendFuncSeparate(0,769,0,1);break;case Pc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case or:o.blendFuncSeparate(770,771,1,771);break;case Ec:o.blendFunc(770,1);break;case Cc:o.blendFuncSeparate(0,769,0,1);break;case Pc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,T=null,O=null,y=null,w=I,S=Gt}return}gt=gt||B,St=St||et,Ut=Ut||ht,(B!==b||gt!==D)&&(o.blendEquationSeparate(Et[B],Et[gt]),b=B,D=gt),(et!==M||ht!==T||St!==O||Ut!==y)&&(o.blendFuncSeparate(wt[et],wt[ht],wt[St],wt[Ut]),M=et,T=ht,O=St,y=Ut),w=I,S=!1}function De(I,B){I.side===jn?xt(2884):Mt(2884);let et=I.side===Ye;B&&(et=!et),ue(et),I.blending===or&&I.transparent===!1?pe(Kn):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);let ht=I.stencilWrite;c.setTest(ht),ht&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Mt(32926):xt(32926)}function ue(I){N!==I&&(I?o.frontFace(2304):o.frontFace(2305),N=I)}function Ie(I){I!==Jf?(Mt(2884),I!==q&&(I===Ac?o.cullFace(1029):I===$f?o.cullFace(1028):o.cullFace(1032))):xt(2884),q=I}function Qt(I){I!==J&&(Q&&o.lineWidth(I),J=I)}function Nt(I,B,et){I?(Mt(32823),(U!==B||k!==et)&&(o.polygonOffset(B,et),U=B,k=et)):xt(32823)}function rn(I){I?Mt(3089):xt(3089)}function ke(I){I===void 0&&(I=33984+W-1),lt!==I&&(o.activeTexture(I),lt=I)}function C(I,B,et){et===void 0&&(lt===null?et=33984+W-1:et=lt);let ht=st[et];ht===void 0&&(ht={type:void 0,texture:void 0},st[et]=ht),(ht.type!==I||ht.texture!==B)&&(lt!==et&&(o.activeTexture(et),lt=et),o.bindTexture(I,B||Z[I]),ht.type=I,ht.texture=B)}function A(){let I=st[lt];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{o.compressedTexImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function x(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function g(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(I){ot.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),ot.copy(I))}function rt(I){ut.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),ut.copy(I))}function tt(I,B){let et=d.get(B);et===void 0&&(et=new WeakMap,d.set(B,et));let ht=et.get(I);ht===void 0&&(ht=o.getUniformBlockIndex(B,I.name),et.set(I,ht))}function at(I,B){let ht=d.get(B).get(I);h.get(B)!==ht&&(o.uniformBlockBinding(B,ht,I.__bindingPointIndex),h.set(B,ht))}function yt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},lt=null,st={},m={},_=new WeakMap,u=[],p=null,v=!1,w=null,b=null,M=null,T=null,D=null,O=null,y=null,S=!1,N=null,q=null,J=null,U=null,k=null,ot.set(0,0,o.canvas.width,o.canvas.height),ut.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Mt,disable:xt,bindFramebuffer:vt,drawBuffers:mt,useProgram:kt,setBlending:pe,setMaterial:De,setFlipSided:ue,setCullFace:Ie,setLineWidth:Qt,setPolygonOffset:Nt,setScissorTest:rn,activeTexture:ke,bindTexture:C,unbindTexture:A,compressedTexImage2D:j,compressedTexImage3D:ct,texImage2D:F,texImage3D:z,updateUBOMapping:tt,uniformBlockBinding:at,texStorage2D:g,texStorage3D:R,texSubImage2D:dt,texSubImage3D:L,compressedTexSubImage2D:P,compressedTexSubImage3D:x,scissor:$,viewport:rt,reset:yt}}function T0(o,t,e,n,i,r,a){let s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,u,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,A){return v?new OffscreenCanvas(C,A):qr("canvas")}function b(C,A,j,ct){let dt=1;if((C.width>ct||C.height>ct)&&(dt=ct/Math.max(C.width,C.height)),dt<1||A===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let L=A?ko:Math.floor,P=L(dt*C.width),x=L(dt*C.height);u===void 0&&(u=w(P,x));let g=j?w(P,x):u;return g.width=P,g.height=x,g.getContext("2d").drawImage(C,0,0,P,x),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+P+"x"+x+")."),g}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return lh(C.width)&&lh(C.height)}function T(C){return s?!1:C.wrapS!==hn||C.wrapT!==hn||C.minFilter!==Pe&&C.minFilter!==Xt}function D(C,A){return C.generateMipmaps&&A&&C.minFilter!==Pe&&C.minFilter!==Xt}function O(C){o.generateMipmap(C)}function y(C,A,j,ct,dt=!1){if(s===!1)return A;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let L=A;return A===6403&&(j===5126&&(L=33326),j===5131&&(L=33325),j===5121&&(L=33321)),A===33319&&(j===5126&&(L=33328),j===5131&&(L=33327),j===5121&&(L=33323)),A===6408&&(j===5126&&(L=34836),j===5131&&(L=34842),j===5121&&(L=ct===Wt&&dt===!1?35907:32856),j===32819&&(L=32854),j===32820&&(L=32855)),(L===33325||L===33326||L===33327||L===33328||L===34842||L===34836)&&t.get("EXT_color_buffer_float"),L}function S(C,A,j){return D(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Pe&&C.minFilter!==Xt?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function N(C){return C===Pe||C===Dc||C===Ka?9728:9729}function q(C){let A=C.target;A.removeEventListener("dispose",q),U(A),A.isVideoTexture&&_.delete(A)}function J(C){let A=C.target;A.removeEventListener("dispose",J),W(A)}function U(C){let A=n.get(C);if(A.__webglInit===void 0)return;let j=C.source,ct=p.get(j);if(ct){let dt=ct[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&k(C),Object.keys(ct).length===0&&p.delete(j)}n.remove(C)}function k(C){let A=n.get(C);o.deleteTexture(A.__webglTexture);let j=C.source,ct=p.get(j);delete ct[A.__cacheKey],a.memory.textures--}function W(C){let A=C.texture,j=n.get(C),ct=n.get(A);if(ct.__webglTexture!==void 0&&(o.deleteTexture(ct.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++)o.deleteFramebuffer(j.__webglFramebuffer[dt]),j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer[dt]);else{if(o.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&o.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let dt=0;dt<j.__webglColorRenderbuffer.length;dt++)j.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(j.__webglColorRenderbuffer[dt]);j.__webglDepthRenderbuffer&&o.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let dt=0,L=A.length;dt<L;dt++){let P=n.get(A[dt]);P.__webglTexture&&(o.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(A[dt])}n.remove(A),n.remove(C)}let Q=0;function it(){Q=0}function Y(){let C=Q;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Q+=1,C}function lt(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.encoding),A.join()}function st(C,A){let j=n.get(C);if(C.isVideoTexture&&rn(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){let ct=C.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(j,C,A);return}}e.bindTexture(3553,j.__webglTexture,33984+A)}function _t(C,A){let j=n.get(C);if(C.version>0&&j.__version!==C.version){xt(j,C,A);return}e.bindTexture(35866,j.__webglTexture,33984+A)}function H(C,A){let j=n.get(C);if(C.version>0&&j.__version!==C.version){xt(j,C,A);return}e.bindTexture(32879,j.__webglTexture,33984+A)}function ot(C,A){let j=n.get(C);if(C.version>0&&j.__version!==C.version){vt(j,C,A);return}e.bindTexture(34067,j.__webglTexture,33984+A)}let ut={[Fo]:10497,[hn]:33071,[No]:33648},ft={[Pe]:9728,[Dc]:9984,[Ka]:9986,[Xt]:9729,[Sd]:9985,[Hr]:9987};function Z(C,A,j){if(j?(o.texParameteri(C,10242,ut[A.wrapS]),o.texParameteri(C,10243,ut[A.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ut[A.wrapR]),o.texParameteri(C,10240,ft[A.magFilter]),o.texParameteri(C,10241,ft[A.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(A.wrapS!==hn||A.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,N(A.magFilter)),o.texParameteri(C,10241,N(A.minFilter)),A.minFilter!==Pe&&A.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let ct=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Pe||A.minFilter!==Ka&&A.minFilter!==Hr||A.type===wi&&t.has("OES_texture_float_linear")===!1||s===!1&&A.type===Gr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(o.texParameterf(C,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Mt(C,A){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",q));let ct=A.source,dt=p.get(ct);dt===void 0&&(dt={},p.set(ct,dt));let L=lt(A);if(L!==C.__cacheKey){dt[L]===void 0&&(dt[L]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,j=!0),dt[L].usedTimes++;let P=dt[C.__cacheKey];P!==void 0&&(dt[C.__cacheKey].usedTimes--,P.usedTimes===0&&k(A)),C.__cacheKey=L,C.__webglTexture=dt[L].texture}return j}function xt(C,A,j){let ct=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=35866),A.isData3DTexture&&(ct=32879);let dt=Mt(C,A),L=A.source;e.bindTexture(ct,C.__webglTexture,33984+j);let P=n.get(L);if(L.version!==P.__version||dt===!0){e.activeTexture(33984+j),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);let x=T(A)&&M(A.image)===!1,g=b(A.image,x,!1,h);g=ke(A,g);let R=M(g)||s,F=r.convert(A.format,A.encoding),z=r.convert(A.type),$=y(A.internalFormat,F,z,A.encoding,A.isVideoTexture);Z(ct,A,R);let rt,tt=A.mipmaps,at=s&&A.isVideoTexture!==!0,yt=P.__version===void 0||dt===!0,I=S(A,g,R);if(A.isDepthTexture)$=6402,s?A.type===wi?$=36012:A.type===Mi?$=33190:A.type===lr?$=35056:$=33189:A.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Si&&$===6402&&A.type!==Xh&&A.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Mi,z=r.convert(A.type)),A.format===fr&&$===6402&&($=34041,A.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=lr,z=r.convert(A.type))),yt&&(at?e.texStorage2D(3553,1,$,g.width,g.height):e.texImage2D(3553,0,$,g.width,g.height,0,F,z,null));else if(A.isDataTexture)if(tt.length>0&&R){at&&yt&&e.texStorage2D(3553,I,$,tt[0].width,tt[0].height);for(let B=0,et=tt.length;B<et;B++)rt=tt[B],at?e.texSubImage2D(3553,B,0,0,rt.width,rt.height,F,z,rt.data):e.texImage2D(3553,B,$,rt.width,rt.height,0,F,z,rt.data);A.generateMipmaps=!1}else at?(yt&&e.texStorage2D(3553,I,$,g.width,g.height),e.texSubImage2D(3553,0,0,0,g.width,g.height,F,z,g.data)):e.texImage2D(3553,0,$,g.width,g.height,0,F,z,g.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&yt&&e.texStorage3D(35866,I,$,tt[0].width,tt[0].height,g.depth);for(let B=0,et=tt.length;B<et;B++)rt=tt[B],A.format!==un?F!==null?at?e.compressedTexSubImage3D(35866,B,0,0,0,rt.width,rt.height,g.depth,F,rt.data,0,0):e.compressedTexImage3D(35866,B,$,rt.width,rt.height,g.depth,0,rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?e.texSubImage3D(35866,B,0,0,0,rt.width,rt.height,g.depth,F,z,rt.data):e.texImage3D(35866,B,$,rt.width,rt.height,g.depth,0,F,z,rt.data)}else{at&&yt&&e.texStorage2D(3553,I,$,tt[0].width,tt[0].height);for(let B=0,et=tt.length;B<et;B++)rt=tt[B],A.format!==un?F!==null?at?e.compressedTexSubImage2D(3553,B,0,0,rt.width,rt.height,F,rt.data):e.compressedTexImage2D(3553,B,$,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?e.texSubImage2D(3553,B,0,0,rt.width,rt.height,F,z,rt.data):e.texImage2D(3553,B,$,rt.width,rt.height,0,F,z,rt.data)}else if(A.isDataArrayTexture)at?(yt&&e.texStorage3D(35866,I,$,g.width,g.height,g.depth),e.texSubImage3D(35866,0,0,0,0,g.width,g.height,g.depth,F,z,g.data)):e.texImage3D(35866,0,$,g.width,g.height,g.depth,0,F,z,g.data);else if(A.isData3DTexture)at?(yt&&e.texStorage3D(32879,I,$,g.width,g.height,g.depth),e.texSubImage3D(32879,0,0,0,0,g.width,g.height,g.depth,F,z,g.data)):e.texImage3D(32879,0,$,g.width,g.height,g.depth,0,F,z,g.data);else if(A.isFramebufferTexture){if(yt)if(at)e.texStorage2D(3553,I,$,g.width,g.height);else{let B=g.width,et=g.height;for(let ht=0;ht<I;ht++)e.texImage2D(3553,ht,$,B,et,0,F,z,null),B>>=1,et>>=1}}else if(tt.length>0&&R){at&&yt&&e.texStorage2D(3553,I,$,tt[0].width,tt[0].height);for(let B=0,et=tt.length;B<et;B++)rt=tt[B],at?e.texSubImage2D(3553,B,0,0,F,z,rt):e.texImage2D(3553,B,$,F,z,rt);A.generateMipmaps=!1}else at?(yt&&e.texStorage2D(3553,I,$,g.width,g.height),e.texSubImage2D(3553,0,0,0,F,z,g)):e.texImage2D(3553,0,$,F,z,g);D(A,R)&&O(ct),P.__version=L.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function vt(C,A,j){if(A.image.length!==6)return;let ct=Mt(C,A),dt=A.source;e.bindTexture(34067,C.__webglTexture,33984+j);let L=n.get(dt);if(dt.version!==L.__version||ct===!0){e.activeTexture(33984+j),o.pixelStorei(37440,A.flipY),o.pixelStorei(37441,A.premultiplyAlpha),o.pixelStorei(3317,A.unpackAlignment),o.pixelStorei(37443,0);let P=A.isCompressedTexture||A.image[0].isCompressedTexture,x=A.image[0]&&A.image[0].isDataTexture,g=[];for(let B=0;B<6;B++)!P&&!x?g[B]=b(A.image[B],!1,!0,c):g[B]=x?A.image[B].image:A.image[B],g[B]=ke(A,g[B]);let R=g[0],F=M(R)||s,z=r.convert(A.format,A.encoding),$=r.convert(A.type),rt=y(A.internalFormat,z,$,A.encoding),tt=s&&A.isVideoTexture!==!0,at=L.__version===void 0||ct===!0,yt=S(A,R,F);Z(34067,A,F);let I;if(P){tt&&at&&e.texStorage2D(34067,yt,rt,R.width,R.height);for(let B=0;B<6;B++){I=g[B].mipmaps;for(let et=0;et<I.length;et++){let ht=I[et];A.format!==un?z!==null?tt?e.compressedTexSubImage2D(34069+B,et,0,0,ht.width,ht.height,z,ht.data):e.compressedTexImage2D(34069+B,et,rt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?e.texSubImage2D(34069+B,et,0,0,ht.width,ht.height,z,$,ht.data):e.texImage2D(34069+B,et,rt,ht.width,ht.height,0,z,$,ht.data)}}}else{I=A.mipmaps,tt&&at&&(I.length>0&&yt++,e.texStorage2D(34067,yt,rt,g[0].width,g[0].height));for(let B=0;B<6;B++)if(x){tt?e.texSubImage2D(34069+B,0,0,0,g[B].width,g[B].height,z,$,g[B].data):e.texImage2D(34069+B,0,rt,g[B].width,g[B].height,0,z,$,g[B].data);for(let et=0;et<I.length;et++){let gt=I[et].image[B].image;tt?e.texSubImage2D(34069+B,et+1,0,0,gt.width,gt.height,z,$,gt.data):e.texImage2D(34069+B,et+1,rt,gt.width,gt.height,0,z,$,gt.data)}}else{tt?e.texSubImage2D(34069+B,0,0,0,z,$,g[B]):e.texImage2D(34069+B,0,rt,z,$,g[B]);for(let et=0;et<I.length;et++){let ht=I[et];tt?e.texSubImage2D(34069+B,et+1,0,0,z,$,ht.image[B]):e.texImage2D(34069+B,et+1,rt,z,$,ht.image[B])}}}D(A,F)&&O(34067),L.__version=dt.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function mt(C,A,j,ct,dt){let L=r.convert(j.format,j.encoding),P=r.convert(j.type),x=y(j.internalFormat,L,P,j.encoding);n.get(A).__hasExternalTextures||(dt===32879||dt===35866?e.texImage3D(dt,0,x,A.width,A.height,A.depth,0,L,P,null):e.texImage2D(dt,0,x,A.width,A.height,0,L,P,null)),e.bindFramebuffer(36160,C),Nt(A)?f.framebufferTexture2DMultisampleEXT(36160,ct,dt,n.get(j).__webglTexture,0,Qt(A)):(dt===3553||dt>=34069&&dt<=34074)&&o.framebufferTexture2D(36160,ct,dt,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function kt(C,A,j){if(o.bindRenderbuffer(36161,C),A.depthBuffer&&!A.stencilBuffer){let ct=33189;if(j||Nt(A)){let dt=A.depthTexture;dt&&dt.isDepthTexture&&(dt.type===wi?ct=36012:dt.type===Mi&&(ct=33190));let L=Qt(A);Nt(A)?f.renderbufferStorageMultisampleEXT(36161,L,ct,A.width,A.height):o.renderbufferStorageMultisample(36161,L,ct,A.width,A.height)}else o.renderbufferStorage(36161,ct,A.width,A.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(A.depthBuffer&&A.stencilBuffer){let ct=Qt(A);j&&Nt(A)===!1?o.renderbufferStorageMultisample(36161,ct,35056,A.width,A.height):Nt(A)?f.renderbufferStorageMultisampleEXT(36161,ct,35056,A.width,A.height):o.renderbufferStorage(36161,34041,A.width,A.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{let ct=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let dt=0;dt<ct.length;dt++){let L=ct[dt],P=r.convert(L.format,L.encoding),x=r.convert(L.type),g=y(L.internalFormat,P,x,L.encoding),R=Qt(A);j&&Nt(A)===!1?o.renderbufferStorageMultisample(36161,R,g,A.width,A.height):Nt(A)?f.renderbufferStorageMultisampleEXT(36161,R,g,A.width,A.height):o.renderbufferStorage(36161,g,A.width,A.height)}}o.bindRenderbuffer(36161,null)}function Et(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st(A.depthTexture,0);let ct=n.get(A.depthTexture).__webglTexture,dt=Qt(A);if(A.depthTexture.format===Si)Nt(A)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ct,0,dt):o.framebufferTexture2D(36160,36096,3553,ct,0);else if(A.depthTexture.format===fr)Nt(A)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ct,0,dt):o.framebufferTexture2D(36160,33306,3553,ct,0);else throw new Error("Unknown depthTexture format")}function wt(C){let A=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Et(A.__webglFramebuffer,C)}else if(j){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(36160,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]=o.createRenderbuffer(),kt(A.__webglDepthbuffer[ct],C,!1)}else e.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),kt(A.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function pe(C,A,j){let ct=n.get(C);A!==void 0&&mt(ct.__webglFramebuffer,C,C.texture,36064,3553),j!==void 0&&wt(C)}function De(C){let A=C.texture,j=n.get(C),ct=n.get(A);C.addEventListener("dispose",J),C.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=A.version,a.memory.textures++);let dt=C.isWebGLCubeRenderTarget===!0,L=C.isWebGLMultipleRenderTargets===!0,P=M(C)||s;if(dt){j.__webglFramebuffer=[];for(let x=0;x<6;x++)j.__webglFramebuffer[x]=o.createFramebuffer()}else{if(j.__webglFramebuffer=o.createFramebuffer(),L)if(i.drawBuffers){let x=C.texture;for(let g=0,R=x.length;g<R;g++){let F=n.get(x[g]);F.__webglTexture===void 0&&(F.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&Nt(C)===!1){let x=L?A:[A];j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let g=0;g<x.length;g++){let R=x[g];j.__webglColorRenderbuffer[g]=o.createRenderbuffer(),o.bindRenderbuffer(36161,j.__webglColorRenderbuffer[g]);let F=r.convert(R.format,R.encoding),z=r.convert(R.type),$=y(R.internalFormat,F,z,R.encoding,C.isXRRenderTarget===!0),rt=Qt(C);o.renderbufferStorageMultisample(36161,rt,$,C.width,C.height),o.framebufferRenderbuffer(36160,36064+g,36161,j.__webglColorRenderbuffer[g])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(j.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(dt){e.bindTexture(34067,ct.__webglTexture),Z(34067,A,P);for(let x=0;x<6;x++)mt(j.__webglFramebuffer[x],C,A,36064,34069+x);D(A,P)&&O(34067),e.unbindTexture()}else if(L){let x=C.texture;for(let g=0,R=x.length;g<R;g++){let F=x[g],z=n.get(F);e.bindTexture(3553,z.__webglTexture),Z(3553,F,P),mt(j.__webglFramebuffer,C,F,36064+g,3553),D(F,P)&&O(3553)}e.unbindTexture()}else{let x=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?x=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(x,ct.__webglTexture),Z(x,A,P),mt(j.__webglFramebuffer,C,A,36064,x),D(A,P)&&O(x),e.unbindTexture()}C.depthBuffer&&wt(C)}function ue(C){let A=M(C)||s,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ct=0,dt=j.length;ct<dt;ct++){let L=j[ct];if(D(L,A)){let P=C.isWebGLCubeRenderTarget?34067:3553,x=n.get(L).__webglTexture;e.bindTexture(P,x),O(P),e.unbindTexture()}}}function Ie(C){if(s&&C.samples>0&&Nt(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,ct=C.height,dt=16384,L=[],P=C.stencilBuffer?33306:36096,x=n.get(C),g=C.isWebGLMultipleRenderTargets===!0;if(g)for(let R=0;R<A.length;R++)e.bindFramebuffer(36160,x.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+R,36161,null),e.bindFramebuffer(36160,x.__webglFramebuffer),o.framebufferTexture2D(36009,36064+R,3553,null,0);e.bindFramebuffer(36008,x.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,x.__webglFramebuffer);for(let R=0;R<A.length;R++){L.push(36064+R),C.depthBuffer&&L.push(P);let F=x.__ignoreDepthValues!==void 0?x.__ignoreDepthValues:!1;if(F===!1&&(C.depthBuffer&&(dt|=256),C.stencilBuffer&&(dt|=1024)),g&&o.framebufferRenderbuffer(36008,36064,36161,x.__webglColorRenderbuffer[R]),F===!0&&(o.invalidateFramebuffer(36008,[P]),o.invalidateFramebuffer(36009,[P])),g){let z=n.get(A[R]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,z,0)}o.blitFramebuffer(0,0,j,ct,0,0,j,ct,dt,9728),m&&o.invalidateFramebuffer(36008,L)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),g)for(let R=0;R<A.length;R++){e.bindFramebuffer(36160,x.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+R,36161,x.__webglColorRenderbuffer[R]);let F=n.get(A[R]).__webglTexture;e.bindFramebuffer(36160,x.__webglFramebuffer),o.framebufferTexture2D(36009,36064+R,3553,F,0)}e.bindFramebuffer(36009,x.__webglMultisampledFramebuffer)}}function Qt(C){return Math.min(d,C.samples)}function Nt(C){let A=n.get(C);return s&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rn(C){let A=a.render.frame;_.get(C)!==A&&(_.set(C,A),C.update())}function ke(C,A){let j=C.encoding,ct=C.format,dt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===zo||j!==Ei&&(j===Wt?s===!1?t.has("EXT_sRGB")===!0&&ct===un?(C.format=zo,C.minFilter=Xt,C.generateMipmaps=!1):A=zs.sRGBToLinear(A):(ct!==un||dt!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),A}this.allocateTextureUnit=Y,this.resetTextureUnits=it,this.setTexture2D=st,this.setTexture2DArray=_t,this.setTexture3D=H,this.setTextureCube=ot,this.rebindTextures=pe,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Nt}function A0(o,t,e){let n=e.isWebGL2;function i(r,a=null){let s;if(r===Ai)return 5121;if(r===Cd)return 32819;if(r===Pd)return 32820;if(r===Td)return 5120;if(r===Ad)return 5122;if(r===Xh)return 5123;if(r===Ed)return 5124;if(r===Mi)return 5125;if(r===wi)return 5126;if(r===Gr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Rd)return 6406;if(r===un)return 6408;if(r===Ld)return 6409;if(r===Dd)return 6410;if(r===Si)return 6402;if(r===fr)return 34041;if(r===zo)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Id)return 6403;if(r===Od)return 36244;if(r===Fd)return 33319;if(r===Nd)return 33320;if(r===zd)return 36249;if(r===Qa||r===to||r===eo||r===no)if(a===Wt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ic||r===Oc||r===Fc||r===Nc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kd)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===zc||r===kc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===zc)return a===Wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===kc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uc||r===Bc||r===Vc||r===Hc||r===Gc||r===Wc||r===qc||r===Xc||r===Yc||r===Zc||r===Jc||r===$c||r===jc||r===Kc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Uc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$c)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kc)return a===Wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===io)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===io)return a===Wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ud||r===Qc||r===th||r===eh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(r===io)return s.COMPRESSED_RED_RGTC1_EXT;if(r===Qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===th)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lr?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}var jo=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ar=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},E0={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let u of t.hand.values()){let p=e.getJointPose(u,n),v=this._getHandJoint(c,u);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ko=class extends xe{constructor(t,e,n,i,r,a,s,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Mi),n===void 0&&h===fr&&(n=lr),super(null,i,r,a,s,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1}},Qo=class extends ti{constructor(t,e){super();let n=this,i=null,r=1,a=null,s="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null,u=e.getContextAttributes(),p=null,v=null,w=[],b=[],M=new Set,T=new Map,D=new Xe;D.layers.enable(1),D.viewport=new Kt;let O=new Xe;O.layers.enable(2),O.viewport=new Kt;let y=[D,O],S=new jo;S.layers.enable(1),S.layers.enable(2);let N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ot=w[H];return ot===void 0&&(ot=new Vr,w[H]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(H){let ot=w[H];return ot===void 0&&(ot=new Vr,w[H]=ot),ot.getGripSpace()},this.getHand=function(H){let ot=w[H];return ot===void 0&&(ot=new Vr,w[H]=ot),ot.getHandSpace()};function J(H){let ot=b.indexOf(H.inputSource);if(ot===-1)return;let ut=w[ot];ut!==void 0&&ut.dispatchEvent({type:H.type,data:H.inputSource})}function U(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",k);for(let H=0;H<w.length;H++){let ot=b[H];ot!==null&&(b[H]=null,w[H].disconnect(ot))}N=null,q=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,v=null,_t.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",U),i.addEventListener("inputsourceschange",k),u.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ot={antialias:i.renderState.layers===void 0?u.antialias:!0,alpha:u.alpha,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,ot),i.updateRenderState({baseLayer:m}),v=new Nn(m.framebufferWidth,m.framebufferHeight,{format:un,type:Ai,encoding:t.outputEncoding,stencilBuffer:u.stencil})}else{let ot=null,ut=null,ft=null;u.depth&&(ft=u.stencil?35056:33190,ot=u.stencil?fr:Si,ut=u.stencil?lr:Mi);let Z={colorFormat:32856,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(Z),i.updateRenderState({layers:[f]}),v=new Nn(f.textureWidth,f.textureHeight,{format:un,type:Ai,depthTexture:new Ko(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:u.stencil,encoding:t.outputEncoding,samples:u.antialias?4:0});let Mt=t.properties.get(v);Mt.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(H){for(let ot=0;ot<H.removed.length;ot++){let ut=H.removed[ot],ft=b.indexOf(ut);ft>=0&&(b[ft]=null,w[ft].disconnect(ut))}for(let ot=0;ot<H.added.length;ot++){let ut=H.added[ot],ft=b.indexOf(ut);if(ft===-1){for(let Mt=0;Mt<w.length;Mt++)if(Mt>=b.length){b.push(ut),ft=Mt;break}else if(b[Mt]===null){b[Mt]=ut,ft=Mt;break}if(ft===-1)break}let Z=w[ft];Z&&Z.connect(ut)}}let W=new X,Q=new X;function it(H,ot,ut){W.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(ut.matrixWorld);let ft=W.distanceTo(Q),Z=ot.projectionMatrix.elements,Mt=ut.projectionMatrix.elements,xt=Z[14]/(Z[10]-1),vt=Z[14]/(Z[10]+1),mt=(Z[9]+1)/Z[5],kt=(Z[9]-1)/Z[5],Et=(Z[8]-1)/Z[0],wt=(Mt[8]+1)/Mt[0],pe=xt*Et,De=xt*wt,ue=ft/(-Et+wt),Ie=ue*-Et;ot.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let Qt=xt+ue,Nt=vt+ue,rn=pe-Ie,ke=De+(ft-Ie),C=mt*vt/Nt*Qt,A=kt*vt/Nt*Qt;H.projectionMatrix.makePerspective(rn,ke,C,A,Qt,Nt)}function Y(H,ot){ot===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ot.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;S.near=O.near=D.near=H.near,S.far=O.far=D.far=H.far,(N!==S.near||q!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,q=S.far);let ot=H.parent,ut=S.cameras;Y(S,ot);for(let Z=0;Z<ut.length;Z++)Y(ut[Z],ot);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),H.matrix.copy(S.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);let ft=H.children;for(let Z=0,Mt=ft.length;Z<Mt;Z++)ft[Z].updateMatrixWorld(!0);ut.length===2?it(S,D,O):S.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.getPlanes=function(){return M};let lt=null;function st(H,ot){if(h=ot.getViewerPose(c||a),_=ot,h!==null){let ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let ft=!1;ut.length!==S.cameras.length&&(S.cameras.length=0,ft=!0);for(let Z=0;Z<ut.length;Z++){let Mt=ut[Z],xt=null;if(m!==null)xt=m.getViewport(Mt);else{let mt=d.getViewSubImage(f,Mt);xt=mt.viewport,Z===0&&(t.setRenderTargetTextures(v,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(v))}let vt=y[Z];vt===void 0&&(vt=new Xe,vt.layers.enable(Z),vt.viewport=new Kt,y[Z]=vt),vt.matrix.fromArray(Mt.transform.matrix),vt.projectionMatrix.fromArray(Mt.projectionMatrix),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),Z===0&&S.matrix.copy(vt.matrix),ft===!0&&S.cameras.push(vt)}}for(let ut=0;ut<w.length;ut++){let ft=b[ut],Z=w[ut];ft!==null&&Z!==void 0&&Z.update(ft,ot,c||a)}if(lt&&lt(H,ot),ot.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ot.detectedPlanes});let ut=null;for(let ft of M)ot.detectedPlanes.has(ft)||(ut===null&&(ut=[]),ut.push(ft));if(ut!==null)for(let ft of ut)M.delete(ft),T.delete(ft),n.dispatchEvent({type:"planeremoved",data:ft});for(let ft of ot.detectedPlanes)if(!M.has(ft))M.add(ft),T.set(ft,ot.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ft});else{let Z=T.get(ft);ft.lastChangedTime>Z&&(T.set(ft,ft.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ft}))}}_=null}let _t=new $h;_t.setAnimationLoop(st),this.setAnimationLoop=function(H){lt=H},this.dispose=function(){}}};function C0(o,t){function e(u,p){p.color.getRGB(u.fogColor.value,Jh(o)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function n(u,p,v,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(u,p):p.isMeshToonMaterial?(i(u,p),h(u,p)):p.isMeshPhongMaterial?(i(u,p),c(u,p)):p.isMeshStandardMaterial?(i(u,p),d(u,p),p.isMeshPhysicalMaterial&&f(u,p,b)):p.isMeshMatcapMaterial?(i(u,p),m(u,p)):p.isMeshDepthMaterial?i(u,p):p.isMeshDistanceMaterial?(i(u,p),_(u,p)):p.isMeshNormalMaterial?i(u,p):p.isLineBasicMaterial?(r(u,p),p.isLineDashedMaterial&&a(u,p)):p.isPointsMaterial?s(u,p,v,w):p.isSpriteMaterial?l(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map),p.alphaMap&&(u.alphaMap.value=p.alphaMap),p.bumpMap&&(u.bumpMap.value=p.bumpMap,u.bumpScale.value=p.bumpScale,p.side===Ye&&(u.bumpScale.value*=-1)),p.displacementMap&&(u.displacementMap.value=p.displacementMap,u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap),p.normalMap&&(u.normalMap.value=p.normalMap,u.normalScale.value.copy(p.normalScale),p.side===Ye&&u.normalScale.value.negate()),p.specularMap&&(u.specularMap.value=p.specularMap),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(u.envMap.value=v,u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap){u.lightMap.value=p.lightMap;let M=o.physicallyCorrectLights!==!0?Math.PI:1;u.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.iridescenceMap?w=p.iridescenceMap:p.iridescenceThicknessMap?w=p.iridescenceThicknessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),u.uvTransform.value.copy(w.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),u.uv2Transform.value.copy(b.matrix))}function r(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity}function a(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function s(u,p,v,w){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*v,u.scale.value=w*.5,p.map&&(u.map.value=p.map),p.alphaMap&&(u.alphaMap.value=p.alphaMap),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),u.uvTransform.value.copy(b.matrix))}function l(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map),p.alphaMap&&(u.alphaMap.value=p.alphaMap),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),u.uvTransform.value.copy(v.matrix))}function c(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function h(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function d(u,p){u.roughness.value=p.roughness,u.metalness.value=p.metalness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function f(u,p,v){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),u.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ye&&u.clearcoatNormalScale.value.negate())),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=v.texture,u.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap)}function m(u,p){p.matcap&&(u.matcap.value=p.matcap)}function _(u,p){u.referencePosition.value.copy(p.referencePosition),u.nearDistance.value=p.nearDistance,u.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function P0(o,t,e,n){let i={},r={},a=[],s=e.isWebGL2?o.getParameter(35375):0;function l(w,b){let M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=i[w.id];M===void 0&&(_(w),M=h(w),i[w.id]=M,w.addEventListener("dispose",p));let T=b.program;n.updateUBOMapping(w,T);let D=t.render.frame;r[w.id]!==D&&(f(w),r[w.id]=D)}function h(w){let b=d();w.__bindingPointIndex=b;let M=o.createBuffer(),T=w.__size,D=w.usage;return o.bindBuffer(35345,M),o.bufferData(35345,T,D),o.bindBuffer(35345,null),o.bindBufferBase(35345,b,M),M}function d(){for(let w=0;w<s;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=i[w.id],M=w.uniforms,T=w.__cache;o.bindBuffer(35345,b);for(let D=0,O=M.length;D<O;D++){let y=M[D];if(m(y,D,T)===!0){let S=y.__offset,N=Array.isArray(y.value)?y.value:[y.value],q=0;for(let J=0;J<N.length;J++){let U=N[J],k=u(U);typeof U=="number"?(y.__data[0]=U,o.bufferSubData(35345,S+q,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=U.elements[0],y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=U.elements[0],y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=U.elements[0]):(U.toArray(y.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,y.__data)}}o.bindBuffer(35345,null)}function m(w,b,M){let T=w.value;if(M[b]===void 0){if(typeof T=="number")M[b]=T;else{let D=Array.isArray(T)?T:[T],O=[];for(let y=0;y<D.length;y++)O.push(D[y].clone());M[b]=O}return!0}else if(typeof T=="number"){if(M[b]!==T)return M[b]=T,!0}else{let D=Array.isArray(M[b])?M[b]:[M[b]],O=Array.isArray(T)?T:[T];for(let y=0;y<D.length;y++){let S=D[y];if(S.equals(O[y])===!1)return S.copy(O[y]),!0}}return!1}function _(w){let b=w.uniforms,M=0,T=16,D=0;for(let O=0,y=b.length;O<y;O++){let S=b[O],N={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let J=0,U=q.length;J<U;J++){let k=q[J],W=u(k);N.boundary+=W.boundary,N.storage+=W.storage}if(S.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,O>0){D=M%T;let J=T-D;D!==0&&J-N.boundary<0&&(M+=T-D,S.__offset=M)}M+=N.storage}return D=M%T,D>0&&(M+=T-D),w.__size=M,w.__cache={},this}function u(w){let b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){let b=w.target;b.removeEventListener("dispose",p);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function v(){for(let w in i)o.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:v}}function R0(){let o=qr("canvas");return o.style.display="block",o}function dl(o={}){this.isWebGLRenderer=!0;let t=o.canvas!==void 0?o.canvas:R0(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let d=null,f=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ei,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1;let u=this,p=!1,v=0,w=0,b=null,M=-1,T=null,D=new Kt,O=new Kt,y=null,S=t.width,N=t.height,q=1,J=null,U=null,k=new Kt(0,0,S,N),W=new Kt(0,0,S,N),Q=!1,it=new Xs,Y=!1,lt=!1,st=null,_t=new le,H=new Bt,ot=new X,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return b===null?q:1}let Z=e;function Mt(E,G){for(let K=0;K<E.length;K++){let V=E[K],nt=t.getContext(V,G);if(nt!==null)return nt}return null}try{let E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",tt,!1),Z===null){let G=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&G.shift(),Z=Mt(G,E),Z===null)throw Mt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xt,vt,mt,kt,Et,wt,pe,De,ue,Ie,Qt,Nt,rn,ke,C,A,j,ct,dt,L,P,x,g,R;function F(){xt=new jg(Z),vt=new qg(Z,xt,o),xt.init(vt),x=new A0(Z,xt,vt),mt=new S0(Z,xt,vt),kt=new t_,Et=new f0,wt=new T0(Z,xt,mt,Et,vt,x,kt),pe=new Yg(u),De=new $g(u),ue=new cp(Z,vt),g=new Gg(Z,xt,ue,vt),Ie=new Kg(Z,ue,kt,g),Qt=new r_(Z,Ie,ue,kt),dt=new i_(Z,vt,wt),A=new Xg(Et),Nt=new u0(u,pe,De,xt,vt,g,A),rn=new C0(u,Et),ke=new p0,C=new y0(xt,vt),ct=new Hg(u,pe,De,mt,Qt,h,a),j=new w0(u,Qt,vt),R=new P0(Z,kt,vt,mt),L=new Wg(Z,xt,kt,vt),P=new Qg(Z,xt,kt,vt),kt.programs=Nt.programs,u.capabilities=vt,u.extensions=xt,u.properties=Et,u.renderLists=ke,u.shadowMap=j,u.state=mt,u.info=kt}F();let z=new Qo(u,Z);this.xr=z,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let E=xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(S,N,!1))},this.getSize=function(E){return E.set(S,N)},this.setSize=function(E,G,K){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,N=G,t.width=Math.floor(E*q),t.height=Math.floor(G*q),K!==!1&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(S*q,N*q).floor()},this.setDrawingBufferSize=function(E,G,K){S=E,N=G,q=K,t.width=Math.floor(E*K),t.height=Math.floor(G*K),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,G,K,V){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,G,K,V),mt.viewport(D.copy(k).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,G,K,V){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,G,K,V),mt.scissor(O.copy(W).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){mt.setScissorTest(Q=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,G=!0,K=!0){let V=0;E&&(V|=16384),G&&(V|=256),K&&(V|=1024),Z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),ke.dispose(),C.dispose(),Et.dispose(),pe.dispose(),De.dispose(),Qt.dispose(),g.dispose(),R.dispose(),Nt.dispose(),z.dispose(),z.removeEventListener("sessionstart",ht),z.removeEventListener("sessionend",gt),st&&(st.dispose(),st=null),St.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let E=kt.autoReset,G=j.enabled,K=j.autoUpdate,V=j.needsUpdate,nt=j.type;F(),kt.autoReset=E,j.enabled=G,j.autoUpdate=K,j.needsUpdate=V,j.type=nt}function tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){let G=E.target;G.removeEventListener("dispose",at),yt(G)}function yt(E){I(E),Et.remove(E)}function I(E){let G=Et.get(E).programs;G!==void 0&&(G.forEach(function(K){Nt.releaseProgram(K)}),E.isShaderMaterial&&Nt.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,K,V,nt,bt){G===null&&(G=ut);let At=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=ni(E,G,K,V,nt);mt.setMaterial(V,At);let Rt=K.index,Ft=1;V.wireframe===!0&&(Rt=Ie.getWireframeAttribute(K),Ft=2);let Dt=K.drawRange,It=K.attributes.position,ee=Dt.start*Ft,Ue=(Dt.start+Dt.count)*Ft;bt!==null&&(ee=Math.max(ee,bt.start*Ft),Ue=Math.min(Ue,(bt.start+bt.count)*Ft)),Rt!==null?(ee=Math.max(ee,0),Ue=Math.min(Ue,Rt.count)):It!=null&&(ee=Math.max(ee,0),Ue=Math.min(Ue,It.count));let Mn=Ue-ee;if(Mn<0||Mn===1/0)return;g.setup(nt,V,Pt,K,Rt);let ii,ne=L;if(Rt!==null&&(ii=ue.get(Rt),ne=P,ne.setIndex(ii)),nt.isMesh)V.wireframe===!0?(mt.setLineWidth(V.wireframeLinewidth*ft()),ne.setMode(1)):ne.setMode(4);else if(nt.isLine){let Ot=V.linewidth;Ot===void 0&&(Ot=1),mt.setLineWidth(Ot*ft()),nt.isLineSegments?ne.setMode(1):nt.isLineLoop?ne.setMode(2):ne.setMode(3)}else nt.isPoints?ne.setMode(0):nt.isSprite&&ne.setMode(4);if(nt.isInstancedMesh)ne.renderInstances(ee,Mn,nt.count);else if(K.isInstancedBufferGeometry){let Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Qs=Math.min(K.instanceCount,Ot);ne.renderInstances(ee,Mn,Qs)}else ne.render(ee,Mn)},this.compile=function(E,G){function K(V,nt,bt){V.transparent===!0&&V.side===jn&&V.forceSinglePass===!1?(V.side=Ye,V.needsUpdate=!0,ve(V,nt,bt),V.side=Qn,V.needsUpdate=!0,ve(V,nt,bt),V.side=jn):ve(V,nt,bt)}f=C.get(E),f.init(),_.push(f),E.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(u.physicallyCorrectLights),E.traverse(function(V){let nt=V.material;if(nt)if(Array.isArray(nt))for(let bt=0;bt<nt.length;bt++){let At=nt[bt];K(At,E,V)}else K(nt,E,V)}),_.pop(),f=null};let B=null;function et(E){B&&B(E)}function ht(){St.stop()}function gt(){St.start()}let St=new $h;St.setAnimationLoop(et),typeof self!="undefined"&&St.setContext(self),this.setAnimationLoop=function(E){B=E,z.setAnimationLoop(E),E===null?St.stop():St.start()},z.addEventListener("sessionstart",ht),z.addEventListener("sessionend",gt),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(G),G=z.getCamera()),E.isScene===!0&&E.onBeforeRender(u,E,G,b),f=C.get(E,_.length),f.init(),_.push(f),_t.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),it.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,Y=A.init(this.clippingPlanes,lt),d=ke.get(E,m.length),d.init(),m.push(d),Ut(E,G,0,u.sortObjects),d.finish(),u.sortObjects===!0&&d.sort(J,U),Y===!0&&A.beginShadows();let K=f.state.shadowsArray;if(j.render(K,E,G),Y===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(d,E),f.setupLights(u.physicallyCorrectLights),G.isArrayCamera){let V=G.cameras;for(let nt=0,bt=V.length;nt<bt;nt++){let At=V[nt];Gt(d,E,At,At.viewport)}}else Gt(d,E,G);b!==null&&(wt.updateMultisampleRenderTarget(b),wt.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(u,E,G),g.resetDefaultState(),M=-1,T=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ut(E,G,K,V){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){V&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);let At=Qt.update(E),Pt=E.material;Pt.visible&&d.push(E,At,Pt,K,ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==kt.render.frame&&(E.skeleton.update(),E.skeleton.frame=kt.render.frame),!E.frustumCulled||it.intersectsObject(E))){V&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);let At=Qt.update(E),Pt=E.material;if(Array.isArray(Pt)){let Rt=At.groups;for(let Ft=0,Dt=Rt.length;Ft<Dt;Ft++){let It=Rt[Ft],ee=Pt[It.materialIndex];ee&&ee.visible&&d.push(E,At,ee,K,ot.z,It)}}else Pt.visible&&d.push(E,At,Pt,K,ot.z,null)}}let bt=E.children;for(let At=0,Pt=bt.length;At<Pt;At++)Ut(bt[At],G,K,V)}function Gt(E,G,K,V){let nt=E.opaque,bt=E.transmissive,At=E.transparent;f.setupLightsView(K),Y===!0&&A.setGlobalState(u.clippingPlanes,K),bt.length>0&&re(nt,G,K),V&&mt.viewport(D.copy(V)),nt.length>0&&Tt(nt,G,K),bt.length>0&&Tt(bt,G,K),At.length>0&&Tt(At,G,K),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function re(E,G,K){let V=vt.isWebGL2;st===null&&(st=new Nn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Gr:Ai,minFilter:Hr,samples:V&&r===!0?4:0})),u.getDrawingBufferSize(H),V?st.setSize(H.x,H.y):st.setSize(ko(H.x),ko(H.y));let nt=u.getRenderTarget();u.setRenderTarget(st),u.clear();let bt=u.toneMapping;u.toneMapping=On,Tt(E,G,K),u.toneMapping=bt,wt.updateMultisampleRenderTarget(st),wt.updateRenderTargetMipmap(st),u.setRenderTarget(nt)}function Tt(E,G,K){let V=G.isScene===!0?G.overrideMaterial:null;for(let nt=0,bt=E.length;nt<bt;nt++){let At=E[nt],Pt=At.object,Rt=At.geometry,Ft=V===null?At.material:V,Dt=At.group;Pt.layers.test(K.layers)&&se(Pt,G,K,Rt,Ft,Dt)}}function se(E,G,K,V,nt,bt){E.onBeforeRender(u,G,K,V,nt,bt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),nt.onBeforeRender(u,G,K,V,E,bt),nt.transparent===!0&&nt.side===jn&&nt.forceSinglePass===!1?(nt.side=Ye,nt.needsUpdate=!0,u.renderBufferDirect(K,G,V,nt,E,bt),nt.side=Qn,nt.needsUpdate=!0,u.renderBufferDirect(K,G,V,nt,E,bt),nt.side=jn):u.renderBufferDirect(K,G,V,nt,E,bt),E.onAfterRender(u,G,K,V,nt,bt)}function ve(E,G,K){G.isScene!==!0&&(G=ut);let V=Et.get(E),nt=f.state.lights,bt=f.state.shadowsArray,At=nt.state.version,Pt=Nt.getParameters(E,nt.state,bt,G,K),Rt=Nt.getProgramCacheKey(Pt),Ft=V.programs;V.environment=E.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=(E.isMeshStandardMaterial?De:pe).get(E.envMap||V.environment),Ft===void 0&&(E.addEventListener("dispose",at),Ft=new Map,V.programs=Ft);let Dt=Ft.get(Rt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===At)return bn(E,Pt),Dt}else Pt.uniforms=Nt.getUniforms(E),E.onBuild(K,Pt,u),E.onBeforeCompile(Pt,u),Dt=Nt.acquireProgram(Pt,Rt),Ft.set(Rt,Dt),V.uniforms=Pt.uniforms;let It=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=A.uniform),bn(E,Pt),V.needsLights=su(E),V.lightsStateVersion=At,V.needsLights&&(It.ambientLightColor.value=nt.state.ambient,It.lightProbe.value=nt.state.probe,It.directionalLights.value=nt.state.directional,It.directionalLightShadows.value=nt.state.directionalShadow,It.spotLights.value=nt.state.spot,It.spotLightShadows.value=nt.state.spotShadow,It.rectAreaLights.value=nt.state.rectArea,It.ltc_1.value=nt.state.rectAreaLTC1,It.ltc_2.value=nt.state.rectAreaLTC2,It.pointLights.value=nt.state.point,It.pointLightShadows.value=nt.state.pointShadow,It.hemisphereLights.value=nt.state.hemi,It.directionalShadowMap.value=nt.state.directionalShadowMap,It.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,It.spotShadowMap.value=nt.state.spotShadowMap,It.spotLightMatrix.value=nt.state.spotLightMatrix,It.spotLightMap.value=nt.state.spotLightMap,It.pointShadowMap.value=nt.state.pointShadowMap,It.pointShadowMatrix.value=nt.state.pointShadowMatrix);let ee=Dt.getUniforms(),Ue=cr.seqWithValue(ee.seq,It);return V.currentProgram=Dt,V.uniformsList=Ue,Dt}function bn(E,G){let K=Et.get(E);K.outputEncoding=G.outputEncoding,K.instancing=G.instancing,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function ni(E,G,K,V,nt){G.isScene!==!0&&(G=ut),wt.resetTextureUnits();let bt=G.fog,At=V.isMeshStandardMaterial?G.environment:null,Pt=b===null?u.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ei,Rt=(V.isMeshStandardMaterial?De:pe).get(V.envMap||At),Ft=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Dt=!!V.normalMap&&!!K.attributes.tangent,It=!!K.morphAttributes.position,ee=!!K.morphAttributes.normal,Ue=!!K.morphAttributes.color,Mn=V.toneMapped?u.toneMapping:On,ii=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ne=ii!==void 0?ii.length:0,Ot=Et.get(V),Qs=f.state.lights;if(Y===!0&&(lt===!0||E!==T)){let Be=E===T&&V.id===M;A.setState(V,E,Be)}let fe=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Qs.state.version||Ot.outputEncoding!==Pt||nt.isInstancedMesh&&Ot.instancing===!1||!nt.isInstancedMesh&&Ot.instancing===!0||nt.isSkinnedMesh&&Ot.skinning===!1||!nt.isSkinnedMesh&&Ot.skinning===!0||Ot.envMap!==Rt||V.fog===!0&&Ot.fog!==bt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==A.numPlanes||Ot.numIntersection!==A.numIntersection)||Ot.vertexAlphas!==Ft||Ot.vertexTangents!==Dt||Ot.morphTargets!==It||Ot.morphNormals!==ee||Ot.morphColors!==Ue||Ot.toneMapping!==Mn||vt.isWebGL2===!0&&Ot.morphTargetsCount!==ne)&&(fe=!0):(fe=!0,Ot.__version=V.version);let ri=Ot.currentProgram;fe===!0&&(ri=ve(V,G,nt));let gl=!1,xr=!1,ta=!1,Se=ri.getUniforms(),si=Ot.uniforms;if(mt.useProgram(ri.program)&&(gl=!0,xr=!0,ta=!0),V.id!==M&&(M=V.id,xr=!0),gl||T!==E){if(Se.setValue(Z,"projectionMatrix",E.projectionMatrix),vt.logarithmicDepthBuffer&&Se.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,xr=!0,ta=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){let Be=Se.map.cameraPosition;Be!==void 0&&Be.setValue(Z,ot.setFromMatrixPosition(E.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||nt.isSkinnedMesh)&&Se.setValue(Z,"viewMatrix",E.matrixWorldInverse)}if(nt.isSkinnedMesh){Se.setOptional(Z,nt,"bindMatrix"),Se.setOptional(Z,nt,"bindMatrixInverse");let Be=nt.skeleton;Be&&(vt.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Se.setValue(Z,"boneTexture",Be.boneTexture,wt),Se.setValue(Z,"boneTextureSize",Be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ea=K.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0&&vt.isWebGL2===!0)&&dt.update(nt,K,V,ri),(xr||Ot.receiveShadow!==nt.receiveShadow)&&(Ot.receiveShadow=nt.receiveShadow,Se.setValue(Z,"receiveShadow",nt.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(si.envMap.value=Rt,si.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),xr&&(Se.setValue(Z,"toneMappingExposure",u.toneMappingExposure),Ot.needsLights&&ru(si,ta),bt&&V.fog===!0&&rn.refreshFogUniforms(si,bt),rn.refreshMaterialUniforms(si,V,q,N,st),cr.upload(Z,Ot.uniformsList,si,wt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cr.upload(Z,Ot.uniformsList,si,wt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(Z,"center",nt.center),Se.setValue(Z,"modelViewMatrix",nt.modelViewMatrix),Se.setValue(Z,"normalMatrix",nt.normalMatrix),Se.setValue(Z,"modelMatrix",nt.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Be=V.uniformsGroups;for(let na=0,au=Be.length;na<au;na++)if(vt.isWebGL2){let _l=Be[na];R.update(_l,ri),R.bind(_l,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function ru(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function su(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,G,K){Et.get(E.texture).__webglTexture=G,Et.get(E.depthTexture).__webglTexture=K;let V=Et.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){let K=Et.get(E);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,K=0){b=E,v=G,w=K;let V=!0,nt=null,bt=!1,At=!1;if(E){let Rt=Et.get(E);Rt.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(36160,null),V=!1):Rt.__webglFramebuffer===void 0?wt.setupRenderTarget(E):Rt.__hasExternalTextures&&wt.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);let Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(At=!0);let Dt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(nt=Dt[G],bt=!0):vt.isWebGL2&&E.samples>0&&wt.useMultisampledRTT(E)===!1?nt=Et.get(E).__webglMultisampledFramebuffer:nt=Dt,D.copy(E.viewport),O.copy(E.scissor),y=E.scissorTest}else D.copy(k).multiplyScalar(q).floor(),O.copy(W).multiplyScalar(q).floor(),y=Q;if(mt.bindFramebuffer(36160,nt)&&vt.drawBuffers&&V&&mt.drawBuffers(E,nt),mt.viewport(D),mt.scissor(O),mt.setScissorTest(y),bt){let Rt=Et.get(E.texture);Z.framebufferTexture2D(36160,36064,34069+G,Rt.__webglTexture,K)}else if(At){let Rt=Et.get(E.texture),Ft=G||0;Z.framebufferTextureLayer(36160,36064,Rt.__webglTexture,K||0,Ft)}M=-1},this.readRenderTargetPixels=function(E,G,K,V,nt,bt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){mt.bindFramebuffer(36160,Pt);try{let Rt=E.texture,Ft=Rt.format,Dt=Rt.type;if(Ft!==un&&x.convert(Ft)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let It=Dt===Gr&&(xt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Dt!==Ai&&x.convert(Dt)!==Z.getParameter(35738)&&!(Dt===wi&&(vt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-V&&K>=0&&K<=E.height-nt&&Z.readPixels(G,K,V,nt,x.convert(Ft),x.convert(Dt),bt)}finally{let Rt=b!==null?Et.get(b).__webglFramebuffer:null;mt.bindFramebuffer(36160,Rt)}}},this.copyFramebufferToTexture=function(E,G,K=0){let V=Math.pow(2,-K),nt=Math.floor(G.image.width*V),bt=Math.floor(G.image.height*V);wt.setTexture2D(G,0),Z.copyTexSubImage2D(3553,K,0,0,E.x,E.y,nt,bt),mt.unbindTexture()},this.copyTextureToTexture=function(E,G,K,V=0){let nt=G.image.width,bt=G.image.height,At=x.convert(K.format),Pt=x.convert(K.type);wt.setTexture2D(K,0),Z.pixelStorei(37440,K.flipY),Z.pixelStorei(37441,K.premultiplyAlpha),Z.pixelStorei(3317,K.unpackAlignment),G.isDataTexture?Z.texSubImage2D(3553,V,E.x,E.y,nt,bt,At,Pt,G.image.data):G.isCompressedTexture?Z.compressedTexSubImage2D(3553,V,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,At,G.mipmaps[0].data):Z.texSubImage2D(3553,V,E.x,E.y,At,Pt,G.image),V===0&&K.generateMipmaps&&Z.generateMipmap(3553),mt.unbindTexture()},this.copyTextureToTexture3D=function(E,G,K,V,nt=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let bt=E.max.x-E.min.x+1,At=E.max.y-E.min.y+1,Pt=E.max.z-E.min.z+1,Rt=x.convert(V.format),Ft=x.convert(V.type),Dt;if(V.isData3DTexture)wt.setTexture3D(V,0),Dt=32879;else if(V.isDataArrayTexture)wt.setTexture2DArray(V,0),Dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,V.flipY),Z.pixelStorei(37441,V.premultiplyAlpha),Z.pixelStorei(3317,V.unpackAlignment);let It=Z.getParameter(3314),ee=Z.getParameter(32878),Ue=Z.getParameter(3316),Mn=Z.getParameter(3315),ii=Z.getParameter(32877),ne=K.isCompressedTexture?K.mipmaps[0]:K.image;Z.pixelStorei(3314,ne.width),Z.pixelStorei(32878,ne.height),Z.pixelStorei(3316,E.min.x),Z.pixelStorei(3315,E.min.y),Z.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?Z.texSubImage3D(Dt,nt,G.x,G.y,G.z,bt,At,Pt,Rt,Ft,ne.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Dt,nt,G.x,G.y,G.z,bt,At,Pt,Rt,ne.data)):Z.texSubImage3D(Dt,nt,G.x,G.y,G.z,bt,At,Pt,Rt,Ft,ne),Z.pixelStorei(3314,It),Z.pixelStorei(32878,ee),Z.pixelStorei(3316,Ue),Z.pixelStorei(3315,Mn),Z.pixelStorei(32877,ii),nt===0&&V.generateMipmaps&&Z.generateMipmap(Dt),mt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?wt.setTextureCube(E,0):E.isData3DTexture?wt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?wt.setTexture2DArray(E,0):wt.setTexture2D(E,0),mt.unbindTexture()},this.resetState=function(){v=0,w=0,b=null,mt.reset(),g.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var tl=class extends dl{};tl.prototype.isWebGL1Renderer=!0;var Zs=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var Li=class extends xe{constructor(t,e,n,i,r,a,s,l,c){super(t,e,n,i,r,a,s,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Xt,this.magFilter=r!==void 0?r:Xt,this.generateMipmaps=!1;let h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};function $n(o,t,e){return eu(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function Is(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function eu(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var gr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let s=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let s=e[1];t<s&&(n=2,r=s);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let s=n+a>>>1;t<e[s]?a=s:n=s+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends gr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,s=i[r],l=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case ih:r=t,s=2*e-n;break;case rh:r=i.length-2,s=e+i[r]-i[r+1];break;default:r=t,s=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:a=t,l=2*n-e;break;case rh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-s),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=t*s,c=l-s,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(n-e)/(i-e),u=_*_,p=u*_,v=-f*p+2*f*u-f*_,w=(1+f)*p+(-1.5-2*f)*u+(-.5+f)*_+1,b=(-1-m)*p+(1.5+m)*u+.5*_,M=m*p-m*u;for(let T=0;T!==s;++T)r[T]=v*a[h+T]+w*a[c+T]+b*a[l+T]+M*a[d+T];return r}},nl=class extends gr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=t*s,c=l-s,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==s;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},il=class extends gr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new el(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case Ns:e=this.InterpolantFactoryMethodLinear;break;case ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let s=this.getValueSize();this.times=$n(n,r,a),this.values=$n(this.values,r*s,a*s)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let s=0;s!==r;s++){let l=n[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,a),t=!1;break}a=l}if(i!==void 0&&eu(i))for(let s=0,l=i.length;s!==l;++s){let c=i[s];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,c),t=!1;break}}return t}optimize(){let t=$n(this.times),e=$n(this.values),n=this.getValueSize(),i=this.getInterpolation()===ro,r=t.length-1,a=1;for(let s=1;s<r;++s){let l=!1,c=t[s],h=t[s+1];if(c!==h&&(s!==1||c!==t[0]))if(i)l=!0;else{let d=s*n,f=d-n,m=d+n;for(let _=0;_!==n;++_){let u=e[d+_];if(u!==e[f+_]||u!==e[m+_]){l=!0;break}}}if(l){if(s!==a){t[a]=t[s];let d=s*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let s=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[s+c];++a}return a!==t.length?(this.times=$n(t,0,a),this.values=$n(e,0,a*n)):(this.times=t,this.values=e),this}clone(){let t=$n(this.times,0),e=$n(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Ns;var Di=class extends pn{};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Fs;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends pn{};rl.prototype.ValueTypeName="color";var sl=class extends pn{};sl.prototype.ValueTypeName="number";var al=class extends gr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=(n-e)/(i-e),c=t*s;for(let h=c+s;c!==h;c+=4)ei.slerpFlat(r,0,a,c-s,a,c,l);return r}},Zr=class extends pn{InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.DefaultInterpolation=Ns;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends pn{};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Fs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends pn{};ol.prototype.ValueTypeName="vector";var Bh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},ll=class{constructor(t,e,n){let i=this,r=!1,a=0,s=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){s++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,s),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},L0=new ll,Js=class{constructor(t){this.manager=t!==void 0?t:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};var cl=class extends Js{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Bh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let s=qr("img");function l(){h(),Bh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}};var $s=class extends Js{constructor(t){super(t)}load(t,e,n,i){let r=new xe,a=new cl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}};var pl="\\[\\]\\.:\\/",D0=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",I0="[^"+pl.replace("\\.","")+"]",O0=/((?:WC+[\/:])*)/.source.replace("WC",ml),F0=/(WCOD+)?/.source.replace("WCOD",I0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),k0=new RegExp("^"+O0+F0+N0+z0+"$"),U0=["material","materials","bones","map"],hl=class{constructor(t,e,n){let i=n||zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},zt=class{constructor(t,e,n){this.path=e,this.parsedPath=n||zt.parseTrackName(e),this.node=zt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new zt.Composite(t,e,n):new zt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(t){let e=k0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);U0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let s=r[a];if(s.name===e||s.uuid===e)return s;let l=n(s.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=zt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=hl;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function nu(o){function t(){for(var Y=0;Y<arguments.length;Y++)if(arguments[Y]!==void 0)return arguments[Y]}console.log("%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ","color: #bada55; font-size: 0.8rem");var e=o.parent,n=o.displacementImage,i=o.image1,r=o.image2,a=t(o.imagesRatio,1),s=t(o.intensity1,o.intensity,1),l=t(o.intensity2,o.intensity,1),c=t(o.angle,Math.PI/4),h=t(o.angle1,c),d=t(o.angle2,3*-c),f=t(o.speedIn,o.speed,1.6),m=t(o.speedOut,o.speed,1.2),_=t(o.hover,!0),u=t(o.easing,"expo.out"),p=t(o.video,!1);if(e)if(i&&r&&n){var v=new Zs,w=new Yr(e.offsetWidth/-2,e.offsetWidth/2,e.offsetHeight/2,e.offsetHeight/-2,1,1e3);w.position.z=1;var b=new dl({antialias:!1,alpha:!0});b.setPixelRatio(2),b.setClearColor(16777215,0),b.setSize(e.offsetWidth,e.offsetHeight),e.appendChild(b.domElement);var M=function(){b.render(v,w)},T=new $s;T.crossOrigin="";var D,O,y=T.load(n,M);if(y.magFilter=y.minFilter=Xt,p){(function Y(){requestAnimationFrame(Y),b.render(v,w)})(),(p=document.createElement("video")).autoplay=!0,p.loop=!0,p.muted=!0,p.src=i,p.load();var S=document.createElement("video");S.autoplay=!0,S.loop=!0,S.muted=!0,S.src=r,S.load();var N=new Li(p),q=new Li(S);N.magFilter=q.magFilter=Xt,N.minFilter=q.minFilter=Xt,S.addEventListener("loadeddata",function(){S.play(),(q=new Li(S)).magFilter=Xt,q.minFilter=Xt,U.uniforms.texture2.value=q},!1),p.addEventListener("loadeddata",function(){p.play(),(N=new Li(p)).magFilter=Xt,N.minFilter=Xt,U.uniforms.texture1.value=N},!1)}else N=T.load(i,M),q=T.load(r,M),N.magFilter=q.magFilter=Xt,N.minFilter=q.minFilter=Xt;var J=a;e.offsetHeight/e.offsetWidth<J?(D=1,O=e.offsetHeight/e.offsetWidth/J):(D=e.offsetWidth/e.offsetHeight*J,O=1);var U=new dn({uniforms:{intensity1:{type:"f",value:s},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:h},angle2:{type:"f",value:d},texture1:{type:"t",value:N},texture2:{type:"t",value:q},disp:{type:"t",value:y},res:{type:"vec4",value:new Kt(e.offsetWidth,e.offsetHeight,D,O)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,fragmentShader:`
varying vec2 vUv;

uniform float dispFactor;
uniform float dpr;
uniform sampler2D disp;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec4 res;
uniform vec2 parent;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);

  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);


  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`,transparent:!0,opacity:1}),k=new Ri(e.offsetWidth,e.offsetHeight,1),W=new en(k,U);v.add(W),_&&(e.addEventListener("mouseenter",Q),e.addEventListener("touchstart",Q),e.addEventListener("mouseleave",it),e.addEventListener("touchend",it)),window.addEventListener("resize",function(Y){e.offsetHeight/e.offsetWidth<J?(D=1,O=e.offsetHeight/e.offsetWidth/J):(D=e.offsetWidth/e.offsetHeight*J,O=1),W.material.uniforms.res.value=new Kt(e.offsetWidth,e.offsetHeight,D,O),b.setSize(e.offsetWidth,e.offsetHeight),M()}),this.next=Q,this.previous=it}else console.warn("One or more images are missing");else console.warn("Parent missing");function Q(){an.to(U.uniforms.dispFactor,{duration:f,value:1,ease:u,onUpdate:M,onComplete:M})}function it(){an.to(U.uniforms.dispFactor,{duration:m,value:0,ease:u,onUpdate:M,onComplete:M})}}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{iu.default.init({preventRunning:!0,transitions:[{from:{namespace:["blog"]},to:{namespace:["cards"]},async leave(e){await an.to(e.current.container,{opacity:0,duration:1})},beforeEnter(){t()},async enter(e){an.from(e.next.container,{opacity:0,duration:1}),await an.to(e.next.container,{opacity:1,duration:0})}},{from:{namespace:["cards"]},to:{namespace:["blog"]},async leave(e){await an.to(e.current.container,{opacity:0,duration:1})},async enter(e){an.from(e.next.container,{opacity:0,duration:1}),await an.to(e.next.container,{opacity:1,duration:0})}}]});function o(e,n){return Math.random()*(n-e)+e}function t(){let e=document.querySelectorAll(".blogpost-image_thumbnail"),n=document.querySelectorAll(".blogpost-image_image"),i=document.querySelectorAll('[zu-hipostazy="blogpost-morph"]');for(let r=0;r<i.length;r++)new nu({parent:i[r],intensity:.25,angle:o(1,4),image1:`${e[r].src}`,image2:`${n[r].src}`,displacementImage:"https://uploads-ssl.webflow.com/644bc713fd500afe82fdab78/6499521f8931839715de7ed0_displacement-mask.png"})}t()});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.1
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
