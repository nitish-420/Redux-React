(this.webpackJsonpreduxapp=this.webpackJsonpreduxapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(3),i=n.n(a),s=(n(12),n(13),n(2)),u=n(1),o=function(){var e=Object(s.c)((function(e){return e.changeTheNumber})),t=Object(s.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Increament/decrement counter"}),Object(u.jsx)("h3",{children:"Using react and redux"}),Object(u.jsxs)("div",{class:"quantity",children:[Object(u.jsx)("button",{className:"minus",title:"Decrement",onClick:function(){return t({type:"DECREMENT",payload:3})},children:Object(u.jsx)("span",{children:"-"})}),Object(u.jsx)("input",{name:"quantity",type:"text",value:e}),Object(u.jsx)("button",{className:"plus",title:"Increment",onClick:function(){return t({type:"INCREMENT",payload:5})},children:Object(u.jsx)("span",{children:"+"})}),Object(u.jsx)("button",{className:"reset",title:"Reset",onClick:function(){return t({type:"RESET",payload:0})},children:Object(u.jsx)("span",{children:"#"})})]})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},d=n(4),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+t.payload;case"DECREMENT":return e-t.payload;case"RESET":return t.payload;default:return e}},b=Object(d.a)({changeTheNumber:j}),h=Object(d.b)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());h.subscribe((function(){return console.log(h.getState())})),i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{store:h,children:Object(u.jsx)(o,{})})}),document.getElementById("root")),l()}},[[21,1,2]]]);
//# sourceMappingURL=main.1fbd1556.chunk.js.map