(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(6),a=c.n(n),o=(c(12),c(4)),i=c.n(o),l=c(7),j=c(2),u=c(0),h=function(){return Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)("h1",{children:"loading..."})})},b=c(5),d=function(e){var t=e.id,c=e.image,r=e.info,n=e.price,a=e.name,o=e.removeTour,i=Object(s.useState)(!1),l=Object(j.a)(i,2),h=l[0],b=l[1];return Object(u.jsxs)("div",{className:"single-tour",children:[Object(u.jsx)("div",{className:"tour-img",children:Object(u.jsx)("img",{src:c,alt:a})}),Object(u.jsxs)("div",{className:"tour-content",children:[Object(u.jsx)("h3",{className:"name",children:a}),Object(u.jsxs)("p",{className:"info",children:[h?r:"".concat(r.substring(0,200),"..."),Object(u.jsx)("button",{className:"readmore",onClick:function(){b(!h)},children:h?"show less":"read more"})]}),Object(u.jsxs)("p",{className:"price",children:["Price : ",n," $"]}),Object(u.jsx)("button",{className:"delete",onClick:function(){return o(t)},children:"not intrested"})]})]})},O=function(e){var t=e.tours,c=e.removeTour,s=e.fetchTours,r="";return r=t.length<5?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"lower-heading",children:0===t.length?"There is no tours Please refresh the page to see all tours":"Please refresh the page to see all tours"}),Object(u.jsx)("button",{className:"refresh",onClick:s,children:"Refresh"})]}):Object(u.jsx)("h1",{children:"All Tours"}),Object(u.jsxs)("div",{className:"tours-section",children:[Object(u.jsx)("div",{className:"title",children:r}),Object(u.jsx)("div",{className:"tours-list",children:t.map((function(e){return Object(u.jsx)(d,Object(b.a)(Object(b.a)({},e),{},{removeTour:c}),e.id)}))})]})};var m=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)([]),a=Object(j.a)(n,2),o=a[0],b=a[1],d=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,r(!1),b(c),console.log(c),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),r(!1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){d()}),[]),c?Object(u.jsx)("main",{children:Object(u.jsx)(h,{})}):Object(u.jsx)("main",{children:Object(u.jsx)(O,{tours:o,removeTour:function(e){var t=o.filter((function(t){return t.id!==e}));b(t)},fetchTours:d})})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.421fea54.chunk.js.map