"use strict";(self.webpackChunkMovies=self.webpackChunkMovies||[]).push([[602],{7602:function(e,n,r){r.r(n);var t=r(5861),a=r(9439),c=r(4687),s=r.n(c),i=r(2791),u=r(7596),o=r(1989),p=r(7689),d=r(1087),f=r(4152),l=r(5558),h=r(184),v=(0,i.lazy)((function(){return r.e(736).then(r.bind(r,9736))})),x=(0,i.lazy)((function(){return r.e(186).then(r.bind(r,186))}));n.default=function(){var e,n,r=(0,i.useState)(null),c=(0,a.Z)(r,2),j=c[0],m=c[1],w=(0,i.useState)(!1),g=(0,a.Z)(w,2),b=g[0],k=g[1],Z=(0,i.useState)(null),y=(0,a.Z)(Z,2),z=y[0],A=y[1],H=(0,p.UO)().movieId,S=(0,p.TH)(),_=(0,i.useRef)(null!==(e=null===(n=S.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,i.useEffect)((function(){if(H){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,f.Y5)(H);case 4:n=e.sent,m(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),A(e.t0.message),u.Am.error(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[H]);var O=null!==j&&void 0!==j?j:{},U=O.title,W=O.release_date,C=O.poster_path,G=O.vote_average,I=O.overview,M=O.genres,V=W?W.split("-")[0]:"";return(0,h.jsxs)(h.Fragment,{children:[z&&(0,h.jsxs)("p",{children:["Whoops, something went wrong: ",z]}),b&&(0,h.jsx)(o.a,{}),j&&(0,h.jsxs)(l.im,{children:[(0,h.jsx)(d.rU,{to:_.current,children:(0,h.jsx)(l.zx,{children:" Go back "})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)(l.uA,{children:[(0,h.jsx)(l.Wf,{src:C?"".concat(f.bV).concat(C):"https://img.freepik.com/premium-vector/funny-angry-grumpy-black-cat-watercolor-vector_878932-39.jpg?size=626&ext=jpg&ga=GA1.1.2050841542.1692818493&semt=ais",alt:U}),(0,h.jsxs)(l.kI,{children:[(0,h.jsxs)(l.Dx,{children:[U," (",V,")"]}),(0,h.jsxs)(l.h4,{children:["User score: ",Math.round(10*G),"%"]}),(0,h.jsxs)(l.Hs,{children:[(0,h.jsx)("b",{children:"Overview"}),(0,h.jsx)("br",{})," ",I]}),(0,h.jsx)(l.h4,{children:"Genres:"}),(0,h.jsx)(l.Hs,{children:M.map((function(e){return e.name})).join(" ")})]})]}),(0,h.jsx)(l.h4,{children:"Additional information"}),(0,h.jsxs)("div",{children:[(0,h.jsx)(d.OL,{to:"cast",children:(0,h.jsx)(l.zx,{children:"Cast"})}),(0,h.jsx)(d.OL,{to:"reviews",children:(0,h.jsx)(l.zx,{children:"Reviews"})})]}),(0,h.jsx)("div",{children:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(o.a,{}),children:(0,h.jsxs)(p.Z5,{children:[(0,h.jsx)(p.AW,{path:"cast",element:(0,h.jsx)(v,{})}),(0,h.jsx)(p.AW,{path:"reviews",element:(0,h.jsx)(x,{})})]})})})]})]})]})}},4152:function(e,n,r){r.d(n,{HI:function(){return l},Hx:function(){return x},Y5:function(){return h},bV:function(){return p},uV:function(){return v},wr:function(){return f}});var t=r(5861),a=r(4687),c=r.n(a),s=r(1243),i="https://api.themoviedb.org/3",u="".concat(i,"/trending/movie/day"),o="".concat(i,"/search/movie"),p="https://image.tmdb.org/t/p/w500",d={params:{api_key:"38ec0872f8907a52000e0e854bdd72ed",language:"en-US"}},f=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u),d);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"?query=").concat(n),d);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(n),d);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(n,"/credits"),d);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(n,"/reviews"),d);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.5aa299b0.chunk.js.map