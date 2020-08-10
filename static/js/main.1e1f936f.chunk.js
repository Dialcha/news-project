(this["webpackJsonpnews-chavarria-diego"]=this["webpackJsonpnews-chavarria-diego"]||[]).push([[0],{56:function(e,a,t){e.exports=t(75)},66:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),i=(t(61),t(31)),o=t(15),s=t(48),m={news:{isFetching:!0,items:[]}};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_CATEGORY":return Object.assign({},e,{isFetching:!0});case"RECEIVE_NEWS":return Object.assign({},e,{isFetching:!1,items:a.news,lastUpdated:a.receivedAt});default:return e}}var p=Object(o.c)({newsByCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"RECEIVE_NEWS":case"REQUEST_CATEGORY":return Object.assign({},e,{news:u(e[a.category],a)});default:return e}}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,h=Object(o.e)(p,E(Object(o.a)(s.a))),d=t(18),f=(t(66),t(25)),g=t(26),v=t(27),y=t(34),b=t(32),k=t(82),C=t(83),w=t(81),O=t(53),j=t(77),L=t(17);var N=function(e){var a=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement(k.a,{bg:"light",expand:"lg"},r.a.createElement(L.LinkContainer,{exact:!0,to:"/"},r.a.createElement(k.a.Brand,null,"KIOSKO APPLICATION")),r.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto"},r.a.createElement(L.LinkContainer,{exact:!0,to:"/"},r.a.createElement(C.a.Link,null,"Principales")),r.a.createElement(L.LinkContainer,{to:"/politica"},r.a.createElement(C.a.Link,null,"Pol\xedtica")),r.a.createElement(L.LinkContainer,{to:"/internacionales"},r.a.createElement(C.a.Link,null,"Internacionales")),r.a.createElement(L.LinkContainer,{to:"/tecnologia"},r.a.createElement(C.a.Link,null,"Tecnolog\xeda")),r.a.createElement(L.LinkContainer,{to:"/espectaculos"},r.a.createElement(C.a.Link,null,"Espect\xe1culos")),r.a.createElement(L.LinkContainer,{to:"/deportes"},r.a.createElement(C.a.Link,null,"Deportes"))),r.a.createElement(w.a,{inline:!0},r.a.createElement(O.a,{id:"searchInput",type:"text",placeholder:"Buscar noticias..",className:"mr-sm-2"}),r.a.createElement(j.a,{variant:"outline-success",onClick:a},"Buscar")))))},S=[{id:0,category:"Principal",route:"/"},{id:1,category:"Pol\xedtica",route:"/politica"},{id:2,category:"Internacionales",route:"/internacionales"},{id:3,category:"Tecnolog\xeda",route:"/tecnologia"},{id:4,category:"Espect\xe1culos",route:"/espectaculos"},{id:5,category:"Deportes",route:"/deportes"}],_=t(5),I=function(e){Object(y.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(f.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(g.a)(t,[{key:"handleSubmit",value:function(){var e=document.getElementById("searchInput").value;this.props.history.push("/search/".concat(e))}},{key:"render",value:function(){return r.a.createElement(N,{handleSubmit:this.handleSubmit,items:S})}}]),t}(n.Component),R=Object(_.o)(I),T=t(36),B=t.n(T),A=t(55);function D(e){return{type:"REQUEST_CATEGORY",category:e}}function x(e,a){return{type:"RECEIVE_NEWS",category:e,news:a.map((function(e){return e})),receivedAt:Date.now()}}var P=t(78),Y=t(80),F=t(84);var Q=function(e){var a=e.image,t=e.title,n=e.source,c=e.url;return r.a.createElement(F.a,{className:"p-3"},r.a.createElement(F.a.Img,{variant:"top",src:a}),r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Title,null,t),r.a.createElement(F.a.Text,null,n),r.a.createElement(j.a,{variant:"primary"},r.a.createElement("a",{target:"_blank",href:c},"Ver noticia original"))))},U=t(79),V=t(54);t(72);var G=function(){return r.a.createElement(P.a,null,r.a.createElement(U.a,{className:"justify-content-md-center"},r.a.createElement(V.a,{md:"auto"},r.a.createElement("div",{className:"center1"},r.a.createElement("div",{className:"lds-facebook justify-content-md-center center2"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("h3",null,"Cargando noticias"))))};var J=function(e){var a=e.newsByCategory;return a.news.isFetching?r.a.createElement(G,null):r.a.createElement(P.a,null,r.a.createElement(Y.a,null,a.news.items.map((function(e){return r.a.createElement(Q,{image:e.img_url,title:e.title,source:e.source_name,url:e.url})}))))},M=function(e){Object(y.a)(t,e);var a=Object(b.a)(t);function t(e){var n;if(Object(f.a)(this,t),"/search/:keyword"===(n=a.call(this,e)).props.match.path)n.props.onCategoryClick("search",n.props.match.params.keyword);else{var r=n.props.match.path,c=S.find((function(e){return e.route===r}));n.props.onCategoryClick(c.id)}return n}return Object(g.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(this.props.match.path===e.match.path){if("/search/:keyword"!==e.match.path||e.match.params.keyword===this.props.match.params.keyword)return;this.props.onCategoryClick("search",e.match.params.keyword)}else if("/search/:keyword"===e.match.path)this.props.onCategoryClick("search",e.match.params.keyword);else{var a=e.match.path,t=S.find((function(e){return e.route===a}));this.props.onCategoryClick(t.id),console.log(this.props.match)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,{newsByCategory:this.props.newsByCategory}))}}]),t}(n.Component),W=Object(i.b)((function(e){return{newsByCategory:e.newsByCategory}}),(function(e){return{onCategoryClick:function(a,t){return e(function(e,a){return function(t){if(0===e){var n=A().format("YYYY-MM-DD");return t(D(e)),B()("https://api.canillitapp.com/latest/".concat(n)).then((function(e){return e.json()})).then((function(a){var n=a.slice(0,10);t(x(e,n))}))}return"search"===e?(t(D(e)),B()("https://api.canillitapp.com/search/".concat(a)).then((function(e){return e.json()})).then((function(a){var n=a.slice(0,10);t(x(e,n))}))):(t(D(e)),B()("https://api.canillitapp.com/news/category/".concat(e)).then((function(e){return e.json()})).then((function(a){var n=a.slice(0,10);t(x(e,n))})))}}(a,t))}}}))(M);t(73);var q=function(){return r.a.createElement(P.a,null,r.a.createElement(V.a,null,r.a.createElement("div",{className:"mainbox"},r.a.createElement("div",{className:"err"},"4"),r.a.createElement("i",{className:"far fa-question-circle fa-spin"}),r.a.createElement("div",{className:"err2"},"4"),r.a.createElement("div",{className:"msg"},"La p\xe1gina que buscas no existe",r.a.createElement("p",null,"An\xedmate e ingresa a ",r.a.createElement(d.Link,{to:"/"},"Principales")," e inf\xf3rmate con las \xfaltimas noticias")))))};t(74);var K=function(){return r.a.createElement("footer",{class:"footer-distributed"},r.a.createElement("div",{class:"footer-left"},r.a.createElement("h3",null,"About ",r.a.createElement("span",null,"Diego Chavarr\xeda")),r.a.createElement("p",{class:"footer-links"},r.a.createElement("a",{target:"_blank",href:"https://github.com/Dialcha"},"Github")),r.a.createElement("p",{class:"footer-company-name"},"\xa9 2020 Diego Chavarr\xeda")),r.a.createElement("div",{class:"footer-center"},r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-map-marker"}),r.a.createElement("p",null,"Medell\xedn - Colombia")),r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-phone"}),r.a.createElement("p",null,"+57 3012928144")),r.a.createElement("div",null,r.a.createElement("i",{class:"fa fa-envelope"}),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:diego.chavarriap@gmail.com"},"diego.chavarriap@gmail.com")))),r.a.createElement("div",{class:"footer-right"},r.a.createElement("p",{class:"footer-company-about"},r.a.createElement("span",null,"About the developer"),"Developer with knowledge of React, Redux, Angular, NodeJS, Java, SQL and PL / SQL"),r.a.createElement("div",{class:"footer-icons"},r.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/chdiego1/"},r.a.createElement("i",{class:"fa fa-instagram"})),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/diegochavarriap"},r.a.createElement("i",{class:"fa fa-linkedin"})))))};var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null),r.a.createElement("br",null),r.a.createElement(_.g,null,r.a.createElement(_.d,{exact:!0,path:"/",component:W}),r.a.createElement(_.d,{path:"/politica",component:W}),r.a.createElement(_.d,{path:"/internacionales",component:W}),r.a.createElement(_.d,{path:"/tecnologia",component:W}),r.a.createElement(_.d,{path:"/espectaculos",component:W}),r.a.createElement(_.d,{path:"/deportes",component:W}),r.a.createElement(_.d,{path:"/search/:keyword",component:W}),r.a.createElement(_.d,null,r.a.createElement(q,null))),r.a.createElement(K,null))};l.a.render(r.a.createElement(d.BrowserRouter,null,r.a.createElement(i.a,{store:h},r.a.createElement(X,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.1e1f936f.chunk.js.map