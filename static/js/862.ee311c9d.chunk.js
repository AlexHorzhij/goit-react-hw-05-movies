"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[862],{862:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,c,a,u,o=e(885),i=e(791),s=e(731),p=e(739),f=e(242),l=e(168),h=e(444),v=h.ZP.ul(r||(r=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    font-size: 24px;\n"]))),d=h.ZP.li(c||(c=(0,l.Z)(["\n    :hover{\n        text-decoration: underline;\n    }\n\n"]))),g=h.ZP.h1(a||(a=(0,l.Z)(["\n    margin-bottom: 20px;\n"]))),x=h.ZP.main(u||(u=(0,l.Z)(["\n    padding-left:30px;\n"]))),m=e(184);function y(){var n=(0,i.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],c=(0,p.TH)();return(0,i.useEffect)((function(){(0,f.Hg)().then(r)}),[]),(0,m.jsxs)(x,{children:[(0,m.jsx)(g,{children:"Trending today"}),(0,m.jsx)(v,{children:e&&e.results.map((function(n){return(0,m.jsx)(d,{children:(0,m.jsx)(s.rU,{to:"movies/".concat(n.id),state:{from:c},children:n.title})},n.id)}))})]})}},242:function(n,t,e){e.d(t,{Hg:function(){return s},Pg:function(){return f},V0:function(){return x},Yc:function(){return h},fI:function(){return d}});var r=e(861),c=e(757),a=e.n(c),u=e(44).Z,o="https://api.themoviedb.org/3/",i="2c7b4a4208b8b77d3cb05264c9eb54e5";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,u.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 5:return e=n.sent,n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(2),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=862.ee311c9d.chunk.js.map