(this.webpackJsonpprotafolio=this.webpackJsonpprotafolio||[]).push([[5],{382:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=s(383);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var c=s(384),i=null,n="https://api.emailjs.com";function l(e,t,s){return void 0===s&&(s={}),new Promise((function(c,i){var n=new XMLHttpRequest;for(var l in n.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?c(t):i(t)})),n.addEventListener("error",(function(e){i(new a.EmailJSResponseStatus(e.target))})),n.open("POST",e,!0),s)n.setRequestHeader(l,s[l]);n.send(t)}))}function r(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function o(e,t){i=e,n=t||"https://api.emailjs.com"}function d(e,t,s,a){var c={lib_version:"2.6.4",user_id:a||i,service_id:e,template_id:t,template_params:r(s)};return l(n+"/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})}function u(e,t,s,a){var r;if("string"===typeof s&&(s=document.querySelector("#"!==(r=s)[0]&&"."!==r[0]?"#"+r:r)),!s||"FORM"!==s.nodeName)throw"Expected the HTML form element or the style selector of form";c.UI.progressState(s);var o=new FormData(s);return o.append("lib_version","2.6.4"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",a||i),l(n+"/api/v1.0/email/send-form",o).then((function(e){return c.UI.successState(s),e}),(function(e){return c.UI.errorState(s),Promise.reject(e)}))}t.init=o,t.send=d,t.sendForm=u,t.default={init:o,send:d,sendForm:u}},383:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},384:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},385:function(e,t,s){},388:function(e,t,s){"use strict";s.r(t);var a=s(4),c=s(1),i=s(0),n=function(e){return Object(i.jsx)("div",{className:"columns",children:e.grid.map((function(e){return Object(i.jsx)("div",{className:"column",id:"_inline",children:Object(i.jsx)("img",{src:e,alt:"img"})})}))})},l=(s(26),s(8)),r=s(382),o=s.n(r),d=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),s=t[0],n=t[1],r=Object(c.useRef)(),d=Object(c.useRef)(),u=Object(c.useRef)(),j=Object(c.useRef)(),m=Object(c.useRef)(),b=Object(c.useRef)();return Object(i.jsx)("div",{className:"content",style:{color:"white",marginTop:"20px",width:"70%",margin:"auto",background:"rgba(204,255,204,.4) ",padding:"4%",borderRadius:"2%",border:"2px solid"},children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.sendForm("service_31tzauq","template_57zt61d",e.target,"user_nLBM9GNP5NB5NVITWMwTq").then((function(e){n(!0),b.current.style.display="inline-block",console.log(e.text)}),(function(e){n(!1),console.log(e.text),b.current.style.display="inline-block"})),r.current.value="",d.current.value="",u.current.value="",j.current.value="",m.current.value=""},style:{color:"white"},children:[Object(i.jsx)("div",{className:"field",children:Object(i.jsxs)("div",{className:"control",children:[Object(i.jsx)("label",{className:"label",style:{display:"inline",color:"white"},children:"Nombre"}),Object(i.jsx)("input",Object(l.a)({ref:r,required:!0,className:"input",id:"n",type:"text",placeholder:"Nombre...",name:"Nombre",autoComplete:"off"},"required",!0))]})}),Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{style:{color:"white"},className:"label",children:"Apellido"}),Object(i.jsx)("div",{className:"control ",children:Object(i.jsx)("input",{ref:d,required:!0,className:"input",type:"text",placeholder:"Apellido...",name:"Apellido",autoComplete:"off"})})]}),Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{style:{color:"white"},className:"label",children:"Nombre de la Empresa"}),Object(i.jsx)("div",{className:"control ",children:Object(i.jsx)("input",{ref:j,required:!0,className:"input",type:"text",placeholder:"Nombre de la empresa...",name:"NombreEmpresa",autoComplete:"off"})})]}),Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{style:{color:"white"},className:"label",children:"Email"}),Object(i.jsxs)("div",{className:"control has-icons-left",children:[Object(i.jsx)("input",{ref:u,required:!0,className:"input",type:"email",placeholder:"Email...",name:"Email",autoComplete:"off"}),Object(i.jsx)("span",{className:"icon is-small is-left",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAADnElEQVRIx91WS28bVRQejwGBVCQ2hQ0IUKELICuE2CEWpUiIIvELQIIVsCMLJAQUqRQppagqqZL0EUekJukjIimW43j8dmwnUR5yYrtxKZDGpcShTZ2Z1OOZ67kf545jZBS7ScWuV/p0j8/5zvnmnHs9tiTd9+snJSLdWr9dswMRWaAecyvheyu24ZckzV+ztZrt0Mckh6o84oj5PnHWeTHfx86SssuOCU5jzo6WNtrc3+Wb29dNaJrj3WEH6qXNBJ+0a61PerzYLe1Gp/TY0EjHp5GUF5EJL8huFz4RW3NJu4n7qMhRR+5S/GwgLP3uf0XSg7Kz1q7zeDn1DNen21bKUy+u6enXYGbeIOyHsG3fdFuxnHrW1Pxyl8iphGRny3MRhynWcnzfg2IvBxwnUf0cqJziMLqAjaNVM3+AG4tvcWgdlu2rnALML0DcPpGzNP7OA421tqxzisdRt1eUpy9Bawf0kybKJyx99mVu5N6EkT8Afe5VjjudHHoPg/oZispT3oab5bhrBzPe1x/qDWSGCol3gb8/tCz9DOfq92BL79PTusDV71CefB7CZ+mnOW5+ZBUSb8MVSF+MKu0P10SadED321bu9fy81zOVQSTajdWlrzlYJ3DnOLh+Grx02C5u/PEejaeHBH8gziEuuJ6pBfR5PS/VaoXlLQL11g72DeyZyORY8baOwPQMn82e5Uw9BrBumNc+QCVPnXEXhE/EBGe1pGMim2Pfui++0FKg3sGh/sHnxuezFlCFYRg8fbUAZdKP5UIvUPoSWD+I5eUztk/EBAewkFjIWkcGh1oLuBsEBLnKGCqVCucWw63SBmLzeSSTx5BMHCX7iu0TMcER3ORCzuoYuEcBXdftZMOogJkGfr1+04awha/OIfLOBb7pP2ePiLLAq1X+2/UbCM+msa5p9JnZULUNRObSuFr4ExZxuEUjmt9mROS0Bb5yufdMZC+bNNsq7SyWXmAlVWVUiJmmYUPYJMji6QxL0YUQ3MnconnYfX77Dk4Me/aG57MYz+WRoyekE6QjpBtp8f9A+ERMcOLZRUQop+eX0bbWHSg1gQvh+BM/jgV9A8FoyDc5HRiOp4LD8WRwZJz2Tdg2+URMcAaJSzmj58OxJxunsWUNRRP/+wfqQiTePEAjqr2PQjGp3x+S6cnkQnFVvvbXCqHYAis2Z2xqRu4fC8mDoWj9PJu9i8L/7gJC0LbFvg3cDbzNL+199KfhHyfDYsfSB4qwAAAAAElFTkSuQmCC",style:{opacity:".4"}})})]})]}),Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{style:{color:"white"},className:"label",children:"Mensaje"}),Object(i.jsx)("div",{className:"control",children:Object(i.jsx)("textarea",{ref:m,className:"textarea",placeholder:"Textarea",name:"mensaje"})})]}),Object(i.jsxs)("div",{className:"field is-grouped",children:[Object(i.jsx)("div",{className:"control",children:Object(i.jsx)("button",{type:"submit",className:"button is-active",children:"Enviar"})}),s?Object(i.jsx)("span",{style:{display:"none"},ref:b,className:"tag is-success",children:"Enviado"}):Object(i.jsxs)("span",{style:{display:"none"},ref:b,className:"tag is-danger",children:[console.log(s),"No Enviado"]})]})]})})},u=function(e){var t=e.visible,s=e.func,a=Object(c.useRef)();return Object(c.useEffect)((function(){a.current.style.display=t?"block":"none"})),Object(i.jsxs)("div",{className:"modal",ref:a,style:{maxHeight:"100vh",backdropFilter:"blur(10px)"},children:[Object(i.jsx)("div",{className:"modal-background"}),Object(i.jsxs)("div",{className:"modal-content",style:{maxHeight:"100vh"},children:[Object(i.jsx)("br",{}),Object(i.jsx)(d,{})]}),Object(i.jsx)("button",{onClick:function(e){s(!1)},className:"modal-close is-large","aria-label":"close",style:{right:"0",top:"0",backdropFilter:"blur(10px)"}})]})};s(385),t.default=function(e){var t=Object(c.useState)(!1),s=Object(a.a)(t,2),l=s[0],r=s[1],o=function(e){r(e)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"card _card",style:{border:"2px solid  #00d1b2"},children:[Object(i.jsx)("div",{className:"card-image",style:{overflow:"hidden"},children:Object(i.jsx)("figure",{className:"image is-4by3",children:Object(i.jsx)("img",{src:e.data.img,alt:e.data.nombre})})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsxs)("div",{className:"media",children:[Object(i.jsx)("div",{className:"media-left",children:Object(i.jsx)("figure",{className:"image is-48x48 _card",style:{borderRadius:"100%",borderTop:"1px solid  #00d1b2",borderBottom:" 1px solid #3b055e"},children:Object(i.jsx)("a",{href:e.data.url,target:"_blank",rel:"noopener",children:Object(i.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"Placeholder image"})})})}),Object(i.jsxs)("div",{className:"media-content",children:[Object(i.jsx)("p",{className:"title is-4",style:{fontSize:"2.7vh"},children:e.data.nombre}),Object(i.jsx)("p",{className:"subtitle is-6",children:e.data.titulo})]})]}),Object(i.jsx)(n,{grid:[]}),Object(i.jsxs)("div",{className:"content",children:[e.data.descripccion,Object(i.jsx)("br",{}),Object(i.jsxs)("time",{datetime:e.data.fecha,children:[e.data.fecha,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",Object(i.jsx)("div",{className:"control",style:{display:"inline-block"},children:Object(i.jsxs)("div",{className:"tags has-addons",onClick:function(){o(!0)},children:[Object(i.jsx)("span",{className:"tag is-dark",children:"Contacto"}),Object(i.jsx)("span",{className:"tag is-primary",children:"Click +"})]})})]})]})]})]}),Object(i.jsx)(u,{visible:l,func:o})]})}}}]);
//# sourceMappingURL=5.352f57a6.chunk.js.map