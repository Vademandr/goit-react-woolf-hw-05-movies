"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[544],{146:function(t,n,r){r.d(n,{Z:function(){return b}});var e,a,u,p=r(689),o=r(168),c=r(924),s=r(87),i=r(401),l=c.ZP.ul(e||(e=(0,o.Z)(["\n  list-style-type: none;\n"]))),f=c.ZP.li(a||(a=(0,o.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: #4f46e5;\n  }\n"]))),q=(0,c.ZP)(s.rU)(u||(u=(0,o.Z)(["\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 400px;\n    height: 560px;\n    display: block;\n    border-radius: 4px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1;\n    color: #4f46e5;\n  }\n"])),(function(t){return t.cover?"url('https://image.tmdb.org/t/p/w500/".concat(t.cover,"')"):"url(".concat(i,")")})),m=r(184),b=function(t){var n=t.films,r=(0,p.TH)();return(0,m.jsx)(l,{children:n.map((function(t){return(0,m.jsx)(f,{children:(0,m.jsx)(q,{to:"/movies/".concat(t.id),state:{from:r},cover:t.poster_path,children:t.title})},t.id)}))})}},544:function(t,n,r){r.r(n);var e=r(861),a=r(439),u=r(757),p=r.n(u),o=r(791),c=r(146),s=r(575),i=r(258),l=r(184);n.default=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1],f=(0,o.useState)(!0),q=(0,a.Z)(f,2),m=q[0],b=q[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Tg)();case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:return t.prev=10,b(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{className:"pb-10 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"Trending today"}),(0,l.jsx)(c.Z,{films:r}),m&&(0,l.jsx)(i.Z,{})]})}},575:function(t,n,r){r.d(n,{Bt:function(){return f},Ml:function(){return s},Tg:function(){return c},Y5:function(){return i},wL:function(){return l}});var e=r(861),a=r(757),u=r.n(a),p=r(294);p.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="8e2468915fb7f75d6585f81724e8c87a",c=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("trending/movie/day?api_key=".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.get("movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},401:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=544.c7028911.chunk.js.map