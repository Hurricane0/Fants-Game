(this["webpackJsonpfants-game"]=this["webpackJsonpfants-game"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=(a(23),a(1)),s=function(e){var t=e.chosenTime,a=0;return 30===t?a="30 \u0441\u0435\u043a\u0443\u043d\u0434 ":60===t&&(a="1 \u043c\u0438\u043d\u0443\u0442\u0430"),90===t&&(a="1:30"),120===t&&(a="2 \u043c\u0438\u043d\u0443\u0442\u044b"),c.a.createElement("div",{className:"time-container"},c.a.createElement("div",{className:"time-block"},a))};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var m=c.a.createElement("animate",{attributeName:"stroke-dashoffset",repeatCount:"indefinite",dur:"1s",keyTimes:"0;1",values:"0;256.58892822265625"}),b=function(e){var t=e.svgRef,a=e.title,n=u(e,["svgRef","title"]);return c.a.createElement("svg",i({style:{margin:"auto",background:"rgb(255, 255, 255)",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t},n),a?c.a.createElement("title",null,a):null,c.a.createElement("path",{fill:"none",stroke:"#744253",strokeWidth:8,strokeDasharray:"42.76482137044271 42.76482137044271",d:"M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z",strokeLinecap:"round",style:{transform:"scale(0.8)",transformOrigin:"50px 50px"}},m))},f=c.a.forwardRef((function(e,t){return c.a.createElement(b,i({svgRef:t},e))})),p=(a.p,function(){return c.a.createElement("div",null,c.a.createElement(f,{style:{backgroundColor:"#272727",height:"50px",width:"50px",color:"#fff"}}))}),d=function(e){var t=e.chosenPlace,a=Object(n.useState)(!0),r=Object(o.a)(a,2),l=r[0],s=r[1];return Object(n.useEffect)((function(){s(!0);var e=setTimeout((function(){s(!1)}),2e3);return function(){return clearTimeout(e)}}),[t]),l?c.a.createElement("div",{className:"action-place-block"},c.a.createElement(p,null)):c.a.createElement("div",{className:"action-place-block"},c.a.createElement("span",null,t))},E=function(e){var t=e.chosenAction,a=Object(n.useState)(!0),r=Object(o.a)(a,2),l=r[0],s=r[1];return Object(n.useEffect)((function(){s(!0);var e=setTimeout((function(){s(!1)}),2e3);return function(){return clearTimeout(e)}}),[t]),l?c.a.createElement("div",{className:"action-place-block"},c.a.createElement(p,null)):c.a.createElement("div",{className:"action-place-block"},c.a.createElement("span",null,t))},h=function(e){var t=e.play;return c.a.createElement("div",{className:"button-container"},c.a.createElement("span",{onClick:t,role:"img","aria-label":""},"\ud83d\udd25"))},O=a(8),j=a(6),v=function(){return c.a.createElement("div",{className:"mode-button-container"},c.a.createElement(O.b,{className:"button",to:"/quests"},"\u223c\u0420\u0435\u0436\u0438\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u0439\u223c"))},g=function(e){var t=e.playQuest,a=e.quest;return c.a.createElement("div",{className:"quests-container"},c.a.createElement("span",{className:"fire",onClick:t,role:"img","aria-label":""},"\ud83d\udd25"),c.a.createElement("div",null,c.a.createElement("span",{className:"quest-text"},a)),c.a.createElement(O.b,{className:"back-to-fant-button",to:"/"},"\u223c\u0420\u0435\u0436\u0438\u043c \u0424\u0430\u043d\u0442\u043e\u0432\u223c"))};var y=function(){var e=Object(n.useState)([30,60,90,120]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(["\u0413\u0443\u0431\u044b \ud83d\udc8b","\u0428\u0435\u044e","\u0421\u043f\u0438\u043d\u0443","\u0413\u0440\u0443\u0434\u044c","\u0416\u0438\u0432\u043e\u0442","\u041f\u043e\u043f\u0443","\u0413\u0443\u0431\u044b","\u0412\u043e\u043a\u0440\u0443\u0433","\u0411\u0435\u0434\u0440\u0430","\u0421\u0442\u0443\u043f\u043d\u0438","\u041a\u043b\u0438\u0442\u043e\u0440","\u0413\u0443\u0431\u044b","\u041a\u043b\u0438\u0442\u043e\u0440","\u041a\u043b\u0438\u0442\u043e\u0440","\u041a\u043b\u0438\u0442\u043e\u0440","\u041a\u043b\u0438\u0442\u043e\u0440","\u041a\u043b\u0438\u0442\u043e\u0440"]),r=Object(o.a)(a,1)[0],l=Object(n.useState)(["\u041b\u0438\u0437\u0430\u0442\u044c","\u0421\u043e\u0441\u0430\u0442\u044c","\u041a\u0443\u0441\u0430\u0442\u044c","\u0426\u0435\u043b\u043e\u0432\u0430\u0442\u044c","\u0413\u043b\u0430\u0434\u0438\u0442\u044c","\u0429\u0438\u043f\u0430\u0442\u044c","\u0417\u0430\u0441\u043e\u0441","\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c","\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"]),i=Object(o.a)(l,1)[0],u=Object(n.useState)(["\u0413\u0443\u0431\u044b","\u0428\u0435\u044e","\u0421\u043f\u0438\u043d\u0443","\u0413\u0440\u0443\u0434\u044c","\u0416\u0438\u0432\u043e\u0442","\u041f\u043e\u043f\u0443","\u0413\u0443\u0431\u044b","\u0412\u043e\u043a\u0440\u0443\u0433","\u0411\u0435\u0434\u0440\u0430","\u041f\u043b\u0435\u0447\u0438","\u0427\u043b\u0435\u043d","\u042f\u0438\u0447\u043a\u0438"]),m=Object(o.a)(u,1)[0],b=Object(n.useState)(["\u041b\u0438\u0437\u0430\u0442\u044c","\u0421\u043e\u0441\u0430\u0442\u044c","\u041a\u0443\u0441\u0430\u0442\u044c","\u0426\u0435\u043b\u043e\u0432\u0430\u0442\u044c","\u0413\u043b\u0430\u0434\u0438\u0442\u044c","\u0429\u0438\u043f\u0430\u0442\u044c","\u0417\u0430\u0441\u043e\u0441","\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c","\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"]),f=Object(o.a)(b,1)[0],p=Object(n.useState)(["\u041f\u0430\u0440\u0435\u043d\u044c \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0441\u043f\u0438\u043d\u0435. \u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u0440\u0443\u0434\u044c\u044e \u0441 \u043d\u043e\u0433 \u0434\u043e \u0433\u043e\u043b\u043e\u0432\u044b \u043f\u043e \u043f\u0430\u0440\u043d\u044e, \u0430 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u0430\u0435\u0442 \u043f\u0430\u0440\u043d\u044e \u0446\u0435\u043b\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u0441\u043e\u0441\u043e\u0447\u043a\u0430","\u041f\u0430\u0440\u0435\u043d\u044c \u043f\u043e\u043b\u0442\u043e\u0440\u044b (\u0434\u0432\u0435) \u043c\u0438\u043d\u0443\u0442\u044b \u043b\u0430\u0441\u043a\u0430\u0435\u0442, \u0446\u0435\u043b\u0443\u0435\u0442 \u0441\u0442\u0443\u043f\u043d\u0438 \u0434\u0435\u0432\u0443\u0448\u043a\u0438","\u041f\u0430\u0440\u0435\u043d\u044c \u0434\u0432\u0435 \u043c\u0438\u043d\u0443\u0442\u044b \u043e\u0431\u043b\u0438\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0443\u0441\u0430\u0435\u0442, \u0446\u0435\u043b\u0443\u0435\u0442 \u043f\u043e\u043f\u043a\u0443 \u0434\u0435\u0432\u0443\u0448\u043a\u0438","\u041f\u0430\u0440\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043a \u0437\u0435\u0440\u043a\u0430\u043b\u0443 \u0438 \u0446\u0435\u043b\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 ~1 \u043c\u0438\u043d\u0443\u0442\u044b","\u0412\u0437\u044f\u0442\u044c \u0434\u0435\u0432\u0443\u0448\u043a\u0443 \u0434\u0432\u0443\u043c\u044f \u0440\u0443\u043a\u0430\u043c\u0438 \u0437\u0430 \u0433\u0440\u0443\u0434\u044c, \u0438 10 \u0440\u0430\u0437 \u043f\u0440\u043e\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u044f\u0437\u044b\u043a\u043e\u043c \u0432 \u0432\u0430\u0433\u0438\u043d\u0443","\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 30 \u0441\u0435\u043a\u0443\u043d\u0434 \u0432\u043e\u0434\u0438\u0442 \u0433\u0440\u0443\u0434\u044c\u044e \u043f\u043e \u0441\u043f\u0438\u043d\u0435 \u043f\u0430\u0440\u043d\u044f","\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u0441\u0430\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u0443\u043b \u0438 \u0437\u0430\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442 \u043d\u043e\u0433\u0438 \u043d\u0430 \u043c\u0443\u0436\u0447\u0438\u043d\u0443. \u041c\u0443\u0436\u0447\u0438\u043d\u0430 2 \u043c\u0438\u043d\u0443\u0442\u044b \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u0443\u043d\u0438","\u041f\u0430\u0440\u0435\u043d\u044c \u043b\u0435\u0436\u0438\u0442 \u043d\u0430 \u0441\u043f\u0438\u043d\u0435. \u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u0440\u0443\u0434\u044c\u044e \u0441 \u043d\u043e\u0433 \u0434\u043e \u0433\u043e\u043b\u043e\u0432\u044b \u043f\u043e \u043f\u0430\u0440\u043d\u044e, \u0430 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u0430\u0435\u0442 \u043f\u0430\u0440\u043d\u044e \u0446\u0435\u043b\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u0441\u043e\u0441\u043e\u0447\u043a\u0430.","\u041f\u0430\u0440\u0435\u043d\u044c \u043b\u043e\u0436\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u043f\u0438\u043d\u0443. \u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u0432\u043e\u0434\u0438\u0442 \u043f\u043e \u043b\u0438\u0446\u0443 \u043f\u0430\u0440\u043d\u044f \u0441\u0432\u043e\u0435\u0439 \u0432\u0430\u0433\u0438\u043d\u043e\u0439 \u043a\u0430\u043a \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 2 \u043c\u0438\u043d\u0443\u0442","\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u0446\u0435\u043b\u0443\u0435\u0442 \u043f\u0430\u0440\u043d\u044f \u043e\u0442 \u0433\u0443\u0431 \u0434\u043e \u0447\u043b\u0435\u043d\u0430 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 1 \u043c\u0438\u043d\u0443\u0442\u044b","\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u043f\u0440\u043e\u0433\u0438\u0431\u0430\u0435\u0442 \u0441\u043f\u0438\u043d\u0443 \u0438 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u043a\u043b\u0430\u0441\u0442\u044c \u0433\u0440\u0443\u0434\u044c \u043d\u0430 \u043a\u0440\u043e\u0432\u0430\u0442\u044c. \u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0432\u0432\u043e\u0434\u0438\u0442 \u043f\u0430\u043b\u0435\u0446 \u0438\u043b\u0438 \u043f\u0430\u043b\u044c\u0446\u044b \u0432 \u0434\u0435\u0432\u0443\u0448\u043a\u0443 \u0438 \u043c\u0438\u043d\u0443\u0442\u0443 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u0440\u0443\u0433\u043e\u0432\u044b\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438","\u0414\u0435\u0432\u0443\u0448\u043a\u0430 \u043b\u043e\u0436\u0438\u0442\u0441\u044f \u043d\u0430 \u043a\u0440\u0430\u0439 \u043a\u0440\u043e\u0432\u0430\u0442\u0438. \u041f\u0430\u0440\u0435\u043d\u044c \u0441\u0430\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043a\u043e\u043b\u0435\u043d\u0438 \u043f\u0435\u0440\u0435\u0434 \u043a\u0440\u043e\u0432\u0430\u0442\u044c\u044e. \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0448\u0438\u0440\u043e\u043a\u043e \u0440\u0430\u0437\u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u043d\u043e\u0433\u0438 \u0434\u0435\u0432\u0443\u0448\u043a\u0438 \u0432 \u0448\u043f\u0430\u0433\u0430\u0442 \u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u0443\u043d\u0438 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u043f\u043e\u043b\u0442\u043e\u0440\u044b \u043c\u0438\u043d\u0443\u0442\u044b"]),y=Object(o.a)(p,1)[0],k=Object(n.useState)(0),N=Object(o.a)(k,2),S=N[0],x=N[1],M=Object(n.useState)("Hot"),w=Object(o.a)(M,2),T=w[0],C=w[1],q=Object(n.useState)("Hot"),P=Object(o.a)(q,2),R=P[0],A=P[1],B=Object(n.useState)(0),H=Object(o.a)(B,2),I=H[0],J=H[1],Q=Object(n.useState)("Hot"),z=Object(o.a)(Q,2),D=z[0],F=z[1],L=Object(n.useState)("Hot"),W=Object(o.a)(L,2),Y=W[0],G=W[1],K=Object(n.useState)("\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443"),U=Object(o.a)(K,2),V=U[0],X=U[1],Z=Object(n.useState)(0),$=Object(o.a)(Z,2),_=$[0],ee=$[1],te=Object(n.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],ce=ae[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,null,c.a.createElement(j.a,{exact:!0,path:"/"},c.a.createElement("div",{className:ne?"with-background":null},c.a.createElement("div",{style:{marginTop:"-17px"},className:"container"},c.a.createElement(s,{chosenTime:S}),c.a.createElement("div",{className:"main-container"},c.a.createElement(d,{chosenPlace:T}),c.a.createElement(E,{chosenAction:R})),c.a.createElement(h,{play:function(){x(t[Math.floor(Math.random()*t.length)]),C(r[Math.floor(Math.random()*r.length)]),A(i[Math.floor(Math.random()*i.length)])}})),c.a.createElement("div",{style:{borderTop:"1px solid #0000002e",paddingTop:"50px",marginBottom:"0px"},className:ne?"container second-with-bg":"container second"},c.a.createElement(s,{chosenTime:I}),c.a.createElement("div",{className:"main-container"},c.a.createElement(d,{chosenPlace:D}),c.a.createElement(E,{chosenAction:Y})),c.a.createElement(h,{play:function(){J(t[Math.floor(Math.random()*t.length)]),F(m[Math.floor(Math.random()*r.length)]),G(f[Math.floor(Math.random()*i.length)])}}),c.a.createElement(v,null),c.a.createElement("div",{className:"bg-button-container"},c.a.createElement("span",{className:"bg-button",onClick:function(){return ce(!ne)}},"Background"))))),c.a.createElement(j.a,{path:"/quests"},c.a.createElement(g,{playQuest:function(){_>=y.length-1?(ee(0),X(y[_])):(X(y[_]),ee(_+1))},quest:V}))))};l.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6fabf7c1.chunk.js.map