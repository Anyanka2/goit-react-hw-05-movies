"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[631,247],{1247:function(t,n,e){e.r(n);var r=e(5861),a=e(9439),c=e(4687),u=e.n(c),s=e(2791),i=e(7689),o=e(4152),p=e(7596),f=e(1989),h=e(184);n.default=function(){var t=(0,i.UO)().movieId,n=(0,s.useState)([]),e=(0,a.Z)(n,2),c=e[0],v=e[1],d=(0,s.useState)(!1),l=(0,a.Z)(d,2),m=l[0],x=l[1],g=(0,s.useState)(!1),w=(0,a.Z)(g,2),b=w[0],Z=w[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.uV)(t);case 3:e=n.sent,r=e.cast,v(r),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),Z(n.t0.message),p.Am.error("Error fetching movie details: ".concat(n.t0));case 12:return n.prev=12,x(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,h.jsxs)(h.Fragment,{children:[0!==c.length&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Movie Cast"}),(0,h.jsx)("ul",{children:c.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{width:"200px",height:"300px",src:t.profile_path?"".concat(o.bV).concat(t.profile_path):"https://stock.adobe.com/pl/images/portrait-of-a-surprised-cat-scottish-straight/97589769",alt:t.original_name}),(0,h.jsx)("p",{children:t.name})]},t.id)}))})]}),0===c.length&&(0,h.jsx)("div",{children:"We don't have any cast for this movie."}),b&&(0,h.jsxs)("p",{children:["Whoops, something went wrong: ",b]}),m&&(0,h.jsx)(f.a,{})]})}},4152:function(t,n,e){e.d(n,{HI:function(){return v},Hx:function(){return m},Y5:function(){return d},bV:function(){return p},uV:function(){return l},wr:function(){return h}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),s="https://api.themoviedb.org/3",i="".concat(s,"/trending/movie/day"),o="".concat(s,"/search/movie"),p="https://image.tmdb.org/t/p/w500",f={params:{api_key:"38ec0872f8907a52000e0e854bdd72ed",language:"en-US"}},h=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i),f);case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"?query=").concat(n),f);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(n),f);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/credits"),f);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/reviews"),f);case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=631.a8ea12c4.chunk.js.map