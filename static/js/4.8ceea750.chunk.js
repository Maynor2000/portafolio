(this.webpackJsonpprotafolio=this.webpackJsonpprotafolio||[]).push([[4],{100:function(e,s,c){},126:function(e,s,c){},127:function(e,s,c){},184:function(e,s,c){},185:function(e,s,c){},186:function(e,s,c){},187:function(e,s,c){},394:function(e,s,c){"use strict";c.r(s);var t=c(124),i=c.n(t),n=c(125),l=c(6),a=c(1),r=(c(184),c(0)),o=function(){var e=new Date,s=e.toLocaleDateString(),c=e.getHours(),t=s+" "+c+":"+e.getMinutes()+(c>=12?"PM":"AM");return t},j=function(){var e=Object(a.useState)(0),s=Object(l.a)(e,2),c=s[0],t=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(n.a)(i.a.mark((function e(){var s,c,n,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://portafolioapi.herokuapp.com/visitas");case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,n=0,c._embedded.followersVisitasList.forEach((function(e){e.visita&&n++})),t(n),l={id:n+1||1,fecha:o(),visita:!0},fetch("https://portafolioapi.herokuapp.com/visitas",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=document.querySelector(".like"),s=document.querySelector(".like2");document.addEventListener("click",(function(c){c.target.matches(".like")&&(c.target.style.setProperty("fill","#FF0000"),s.style.setProperty("fill","#000000")),c.target.matches(".like2")&&(c.target.style.setProperty("fill","#FF0000"),e.style.setProperty("fill","#000000"))}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("nav",{className:"level",children:[Object(r.jsx)("div",{className:"level-item has-text-centered",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading",children:"Visitas"}),Object(r.jsx)("p",{className:"title",children:c})]})}),Object(r.jsx)("div",{className:"level-item has-text-centered",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading",children:"No me gusta"}),Object(r.jsx)("svg",{className:"like",id:"like",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{className:"like",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})]})}),Object(r.jsx)("div",{className:"level-item has-text-centered",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"heading",children:"Me gusta"}),Object(r.jsx)("svg",{className:"like2",id:"like",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"#fg4516",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})]})})]}),Object(r.jsx)("hr",{})]})},d=(c(20),c.p,c(126),function(){return Object(r.jsxs)("div",{className:"card",style:{width:"90%",margin:"auto",overflow:"hidden"},children:[Object(r.jsx)("div",{id:"card-image",className:"card-image",style:{overflow:"hidden"},children:Object(r.jsx)("figure",{className:"image is-4by3 _card_hover",style:{},children:Object(r.jsx)("img",{src:"",alt:"Placeholder image"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("div",{className:"media",children:Object(r.jsxs)("div",{className:"media-content",children:[Object(r.jsx)("p",{className:"title is-4",children:"Mayno Alvarez Acopa"}),Object(r.jsx)("p",{className:"subtitle is-6",children:"@Java FullStack developer"})]})}),Object(r.jsxs)("div",{className:"content",children:["Actualmente soy estudiante de Ingenieria en computacion en la UADY, Comenz\xe9 a programar a los 16 a\xf1os esto debido a que desde corta edad me apasionaba el mundo de la programar.",Object(r.jsx)("br",{}),Object(r.jsxs)("p",{style:{textAlig:"center"},children:["11:09 PM - ",(new Date).toLocaleDateString()]})]})]})]})}),m=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{className:"title is-2 is-spaced font-effect-outline",style:{fontFamily:'"Sofia", sans-serif',textAlign:"center"},children:"Lenguajes, Herramientas y Framework"})})},h=(c(127),function(){return Object(r.jsxs)("div",{className:"columns",children:[Object(r.jsx)("div",{className:"column",children:Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("ol",{className:"",children:[Object(r.jsx)("h1",{style:{fontFamily:'"Sofia", sans-serif'},children:"Frontend"}),Object(r.jsxs)("ol",{className:"",type:"1",style:{fontFamily:'"Sofia", sans-serif'},children:[Object(r.jsx)("li",{children:"React"}),Object(r.jsx)("li",{children:"anime js"}),Object(r.jsx)("li",{children:"Styled component"}),Object(r.jsx)("li",{children:"Javascript"}),Object(r.jsx)("li",{children:"Html"}),Object(r.jsx)("li",{children:"Css"}),Object(r.jsx)("li",{children:"Bulma"}),Object(r.jsx)("li",{children:"Bootstrap"})]})]})})}),Object(r.jsx)("div",{className:"column",children:Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("ol",{children:[Object(r.jsx)("h1",{style:{fontFamily:'"Sofia", sans-serif'},children:"Backend"}),Object(r.jsxs)("ol",{type:"1",style:{fontFamily:'"Sofia", sans-serif'},children:[Object(r.jsx)("li",{children:"Java EE"}),Object(r.jsx)("li",{children:"Java SE"}),Object(r.jsx)("li",{children:"Spring Framework"}),Object(r.jsx)("li",{children:"Spring boot"}),Object(r.jsx)("li",{children:"Spring security"}),Object(r.jsx)("li",{children:"Hibernate jpa"}),Object(r.jsx)("li",{children:"Sql"}),Object(r.jsx)("li",{children:"Mysql"})]})]})})}),Object(r.jsx)("div",{className:"column",children:Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("ol",{children:[Object(r.jsx)("h1",{style:{fontFamily:'"Sofia", sans-serif'},children:"Herramientas"}),Object(r.jsxs)("ol",{type:"1",style:{fontFamily:'"Sofia", sans-serif'},children:[Object(r.jsx)("li",{children:"phothoshop"}),Object(r.jsx)("li",{children:"Adobe Ilustrator"}),Object(r.jsx)("li",{children:"CorelDraw"}),Object(r.jsx)("li",{children:"Visual studio code"}),Object(r.jsx)("li",{children:"Eclipse"}),Object(r.jsx)("li",{children:"NetBeans"}),Object(r.jsx)("li",{children:"Git y Github"})]})]})})})]})}),b=c(9),x=(c(100),c(185),function(){var e;return Object(r.jsxs)("div",{className:"columns ",children:[Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/color/48/000000/javascript.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/color/48/000000/react-native.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/color/48/000000/html-5--v1.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/color/48/000000/css3.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/ios/48/000000/java-coffee-cup-logo.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/color/48/000000/spring-logo.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",(e={className:"tr"},Object(b.a)(e,"className","tr"),Object(b.a)(e,"src","https://img.icons8.com/color/48/000000/git.png"),e))}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/color/48/000000/mysql-logo.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/dusk/48/000000/sql.png"})}),Object(r.jsx)("div",{className:"_img column",children:Object(r.jsx)("img",{className:"tr",src:"https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png"})})]})}),O=function(){return Object(r.jsx)("div",{className:"container is-max-widescreen",children:Object(r.jsxs)("div",{className:"notification is-primary",style:{padding:" 1rem 1rem 1rem 1rem"},children:[Object(r.jsx)(m,{}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{})]})})},u=function(){return Object(r.jsxs)("div",{className:"columns is-mobile is-gapless",id:"is-mobile",style:{width:"100%"},children:[Object(r.jsx)("div",{className:" _card_r column",style:{},children:Object(r.jsx)(d,{})}),Object(r.jsx)("div",{className:"column is-8_r is-vcentered",children:Object(r.jsx)(O,{})}),Object(r.jsx)("div",{className:"column is-1"})]})},p=(c(186),function(){return Object(r.jsxs)("section",{className:"section is-medium bk ",children:[Object(r.jsxs)("h1",{className:"title anime2",style:{color:"white"},children:[Object(r.jsx)("span",{style:{color:"#f4511e",fontSize:"2em"},children:"Galeria"}),"\xa0"," de Proyectos y","\xa0",Object(r.jsx)("span",{style:{color:"#f4511e",fontSize:"1em"},children:"colaboraciones"})]}),Object(r.jsx)("h2",{className:"subtitle anime2",style:{color:"white"}})]})}),g=(c(187),c.p,c(26),c.p+"static/media/hearts.603d5577.svg"),f=function(){return Object(r.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%",verticalAlign:"middle"},children:Object(r.jsx)("img",{src:g,alt:"",style:{width:"10vh",margin:"auto"}})})},v=Object(a.lazy)((function(){return c.e(5).then(c.bind(null,395))})),N=function(){var e=Object(a.useState)([]),s=Object(l.a)(e,2),c=s[0],t=s[1];Object(a.useEffect)((function(){(function(){var e=Object(n.a)(i.a.mark((function e(){var s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://portafolioapi.herokuapp.com/cards/");case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,t(c._embedded.cardsList);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(r.jsx)("div",{className:"columns is-multiline is-mobile is-primary",children:c.map((function(e){return Object(r.jsx)("div",{className:"column is-one-quarter",id:"is_one_quarter",children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(f,{}),children:Object(r.jsx)(v,{data:e})})})}))})},y=function(){return Object(r.jsx)("section",{className:"section is-large",style:{paddingTop:"6%",paddingBottom:"6%"},children:Object(r.jsx)(N,{})})},w=c(188),S=Object(w.withScriptjs)(Object(w.withGoogleMap)((function(e){return Object(r.jsx)(w.GoogleMap,{defaultZoom:16,defaultCenter:{lat:20.967778,lng:-89.601857},children:Object(r.jsx)(w.Marker,{position:{lat:20.967778,lng:-89.621667}})})}))),k=function(){return Object(r.jsxs)("div",{className:"columns is-vcentered",children:[Object(r.jsxs)("div",{className:"column is-6",style:{color:"white"},children:[Object(r.jsx)("h1",{className:"title",children:"Experiencia"}),Object(r.jsx)("article",{class:"message is-info",children:Object(r.jsxs)("div",{class:"message-body",children:["Desarrollo en el area de Backend podra decirse que es en lo que estoy mas especializado pero tambien tengo experiencia desarrollando en el area de frontend, a lo largo de mi carrera como desarrollador he usado algunos lenguajes y tecnologias conocidas como lo son: ",Object(r.jsx)("strong",{children:"PHP,"}),"\xa0",Object(r.jsx)("strong",{children:"JAVA,"}),"\xa0",Object(r.jsx)("strong",{children:"REACT,"}),"\xa0",Object(r.jsx)("strong",{children:"JAVASCRIPT, CSS, HTML5,"}),"\xa0",Object(r.jsx)("strong",{children:"SPRING,"}),"\xa0","Siendo las que mas uso","\xa0",Object(r.jsx)("strong",{children:"JAVA, SPRING, JAVASCRIPT, REACT."}),"\xa0","Actualmente me encuentro aprendiendo inteligencia artificial con","\xa0",Object(r.jsx)("strong",{children:"PHYTON"}),"\xa0","y desarrollo m\xf3vil"]})})]}),Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(S,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBY6rX-jtj5nYq52neF2YYkIF6qQVRwx3s&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(r.jsx)("div",{style:{height:"100%"}}),containerElement:Object(r.jsx)("div",{style:{height:"50vh",width:"100%",border:"2px solid blue"}}),mapElement:Object(r.jsx)("div",{style:{height:"100%"}})})})]})},A=function(){return Object(r.jsx)("section",{className:"section has-background-primary",children:Object(r.jsx)(k,{})})},F=c(24),_=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(F.a,{})})};s.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(u,{}),Object(r.jsx)(p,{}),Object(r.jsx)(y,{}),Object(r.jsx)(A,{}),Object(r.jsx)(_,{margin:"0"})]})}}}]);
//# sourceMappingURL=4.8ceea750.chunk.js.map