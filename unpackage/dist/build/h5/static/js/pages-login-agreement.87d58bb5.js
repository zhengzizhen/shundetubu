(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-agreement"],{4119:function(t,e,n){"use strict";n.r(e);var a=n("d1a1"),r=n("c833");for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"75c76c53",null,!1,a["a"],void 0);e["default"]=i.exports},"687e":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("c7eb")),u=a(n("1da1")),c={data:function(){return{content:""}},onLoad:function(t){this.getlist(t.id)},methods:{getlist:function(t){var e=this;return(0,u.default)((0,r.default)().mark((function n(){var a;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http("/sys/article/detail",{id:t});case 2:a=n.sent,e.content=a.data.data.content;case 4:case"end":return n.stop()}}),n)})))()}}};e.default=c},c833:function(t,e,n){"use strict";n.r(e);var a=n("687e"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},d1a1:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uParse:n("b44a").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"pd30"},[e("u-parse",{attrs:{content:this.content}})],1)},u=[]}}]);