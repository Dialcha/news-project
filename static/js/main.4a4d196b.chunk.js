(this["webpackJsonpnews-chavarria-diego"]=this["webpackJsonpnews-chavarria-diego"]||[]).push([[0],{56:function(e,t,a){e.exports=a(74)},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(61),a(30)),o=a(15),s=a(48),u={news:{isFetching:!0,items:[]}};function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CATEGORY":return Object.assign({},e,{isFetching:!0});case"RECEIVE_NEWS":return Object.assign({},e,{isFetching:!1,items:t.news,lastUpdated:t.receivedAt});default:return e}}var p=Object(o.c)({selectedCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"principales",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CATEGORY":return t.category;default:return e}},newsByCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_NEWS":case"REQUEST_CATEGORY":return Object.assign({},e,{news:m(e[t.category],t)});default:return e}}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,h=Object(o.e)(p,E(Object(o.a)(s.a))),d=a(18),g=(a(66),a(24)),v=a(25),f=a(26),y=a(33),C=a(31),k=a(81),b=a(82),w=a(80),O=a(53),j=a(76),N=a(17);var S=function(e){var t=e.handleSubmit;return e.paramSearch,r.a.createElement("div",null,r.a.createElement(k.a,{bg:"light",expand:"lg"},r.a.createElement(N.LinkContainer,{exact:!0,to:"/"},r.a.createElement(k.a.Brand,null,"NEWS-APP")),r.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(N.LinkContainer,{exact:!0,to:"/"},r.a.createElement(b.a.Link,null,"Principales")),r.a.createElement(N.LinkContainer,{to:"/politica"},r.a.createElement(b.a.Link,null,"Pol\xedtica")),r.a.createElement(N.LinkContainer,{to:"/internacionales"},r.a.createElement(b.a.Link,null,"Internacionales")),r.a.createElement(N.LinkContainer,{to:"/tecnologia"},r.a.createElement(b.a.Link,null,"Tecnolog\xeda")),r.a.createElement(N.LinkContainer,{to:"/espectaculos"},r.a.createElement(b.a.Link,null,"Espect\xe1culos")),r.a.createElement(N.LinkContainer,{to:"/deportes"},r.a.createElement(b.a.Link,null,"Deportes"))),r.a.createElement(w.a,{inline:!0},r.a.createElement(O.a,{id:"searchInput",type:"text",placeholder:"Buscar noticias..",className:"mr-sm-2"}),r.a.createElement(j.a,{variant:"outline-success",onClick:t},"Buscar")))))},L=[{id:0,category:"Principal",route:"/"},{id:1,category:"Pol\xedtica",route:"/politica"},{id:2,category:"Internacionales",route:"/internacionales"},{id:3,category:"Tecnolog\xeda",route:"/tecnologia"},{id:4,category:"Espect\xe1culos",route:"/espectaculos"},{id:5,category:"Deportes",route:"/deportes"}],_=a(5),T=function(e){Object(y.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(v.a)(a,[{key:"handleSubmit",value:function(){var e=document.getElementById("searchInput").value;this.props.history.push("/search/".concat(e))}},{key:"render",value:function(){return r.a.createElement(S,{handleSubmit:this.handleSubmit,items:L})}}]),a}(n.Component),B=Object(_.o)(T),R=a(35),I=a.n(R),x=a(55);function A(e){return{type:"REQUEST_CATEGORY",category:e}}function P(e,t){return{type:"RECEIVE_NEWS",category:e,news:t.map((function(e){return e})),receivedAt:Date.now()}}var Y=a(77),D=a(79),F=a(83);var U=function(e){var t=e.image,a=e.title,n=e.source,c=e.url;return r.a.createElement(F.a,{style:{width:"18rem"},className:"p-3"},r.a.createElement(F.a.Img,{variant:"top",src:t}),r.a.createElement(F.a.Body,null,r.a.createElement(F.a.Title,null,a),r.a.createElement(F.a.Text,null,n),r.a.createElement(j.a,{variant:"primary"},r.a.createElement("a",{target:"_blank",href:c},"Ver noticia original"))))},V=a(78),W=a(54);a(72);var G=function(){return r.a.createElement(Y.a,null,r.a.createElement(V.a,{className:"justify-content-md-center"},r.a.createElement(W.a,{md:"auto"},r.a.createElement("div",{className:"center1"},r.a.createElement("div",{className:"lds-facebook justify-content-md-center center2"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("h3",null,"Cargando noticias"))))};var M=function(e){var t=e.newsByCategory;return t.news.isFetching?r.a.createElement(G,null):r.a.createElement(Y.a,null,r.a.createElement(D.a,null,t.news.items.map((function(e){return r.a.createElement(U,{image:e.img_url,title:e.title,source:e.source_name,url:e.url})}))))},Q=function(e){Object(y.a)(a,e);var t=Object(C.a)(a);function a(e){var n;if(Object(g.a)(this,a),"/search/:keyword"===(n=t.call(this,e)).props.match.path)n.props.onCategoryClick("search",n.props.match.params.keyword);else{var r=n.props.match.path,c=L.find((function(e){return e.route===r}));n.props.onCategoryClick(c.id)}return n}return Object(v.a)(a,[{key:"componentWillReceiveProps",value:function(e){if(this.props.match.path===e.match.path){if("/search/:keyword"!==e.match.path||e.match.params.keyword===this.props.match.params.keyword)return;this.props.onCategoryClick("search",e.match.params.keyword)}else if("/search/:keyword"===e.match.path)this.props.onCategoryClick("search",e.match.params.keyword);else{var t=e.match.path,a=L.find((function(e){return e.route===t}));this.props.onCategoryClick(a.id),console.log(this.props.match)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{newsByCategory:this.props.newsByCategory}))}}]),a}(n.Component),q=Object(i.b)((function(e){return{newsByCategory:e.newsByCategory}}),(function(e){return{onCategoryClick:function(t,a){return e(function(e,t){return function(a){if(0===e){var n=x().format("YYYY-MM-DD");return a(A(e)),I()("https://api.canillitapp.com/latest/".concat(n)).then((function(e){return e.json()})).then((function(t){var n=t.slice(0,10);a(P(e,n))}))}return"search"===e?(a(A(e)),I()("https://api.canillitapp.com/search/".concat(t)).then((function(e){return e.json()})).then((function(t){var n=t.slice(0,10);a(P(e,n))}))):(a(A(e)),I()("https://api.canillitapp.com/news/category/".concat(e)).then((function(e){return e.json()})).then((function(t){var n=t.slice(0,10);a(P(e,n))})))}}(t,a))}}}))(Q);a(73);var J=function(){return r.a.createElement("div",{className:"mainbox"},r.a.createElement("div",{className:"err"},"4"),r.a.createElement("i",{className:"far fa-question-circle fa-spin"}),r.a.createElement("div",{className:"err2"},"4"),r.a.createElement("div",{className:"msg"},"La p\xe1gina que buscas no existe",r.a.createElement("p",null,"An\xedmate e ingresa a ",r.a.createElement(d.Link,{to:"/"},"Principales")," e inf\xf3rmate con las \xfaltimas noticias")))};var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement("br",null),r.a.createElement(_.g,null,r.a.createElement(_.d,{exact:!0,path:"/",component:q}),r.a.createElement(_.d,{path:"/politica",component:q}),r.a.createElement(_.d,{path:"/internacionales",component:q}),r.a.createElement(_.d,{path:"/tecnologia",component:q}),r.a.createElement(_.d,{path:"/espectaculos",component:q}),r.a.createElement(_.d,{path:"/deportes",component:q}),r.a.createElement(_.d,{path:"/search/:keyword",component:q}),r.a.createElement(_.d,null,r.a.createElement(J,null))))};l.a.render(r.a.createElement(d.BrowserRouter,null,r.a.createElement(i.a,{store:h},r.a.createElement(X,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4a4d196b.chunk.js.map