(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-message-hot"],{"2cc0":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"body pd30"},t._l(t.list,(function(n,a){return e("v-uni-view",{key:a,staticClass:"m30",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.todeil(n.id)}}},[e("v-uni-view",{staticClass:"cont"},[e("v-uni-image",{staticClass:"banner",attrs:{src:n.image,mode:""}}),e("v-uni-view",{staticClass:"txt"},[e("p",[t._v(t._s(n.title))]),e("v-uni-text",[t._v(t._s(n.intro))])],1)],1)],1)})),1)},r=[]},"38be":function(t,n,e){"use strict";e.r(n);var a=e("3b74"),r=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"3b74":function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("c7eb")),i=a(e("1da1")),o={data:function(){return{list:[],page:1}},onLoad:function(){this.getlist()},methods:{getlist:function(){var t=this;return(0,i.default)((0,r.default)().mark((function n(){var e;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http("/user/message/article/list",{page:t.page,limit:10,category_id:11});case 2:e=n.sent,t.list=e.data.data;case 4:case"end":return n.stop()}}),n)})))()},todeil:function(){this.$jump("./deil")}}};n.default=o},"53f6":function(t,n,e){"use strict";var a=e("b5e5"),r=e.n(a);r.a},"5fac":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.body[data-v-6f057d92]{padding-top:%?20?%;background-color:#fafafa;height:%?1500?%}.title[data-v-6f057d92]{padding:%?5?%;width:%?104?%;height:%?34?%;text-align:center;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#fff;margin:0 auto;background:#dedfe1;line-height:%?34?%}.cont[data-v-6f057d92]{border-radius:%?20?%;margin-top:%?30?%;background-color:#fff}.cont .banner[data-v-6f057d92]{border-radius:%?20?% %?20?% 0 0;width:100%;height:%?300?%}.txt[data-v-6f057d92]{padding:%?20?%}.txt p[data-v-6f057d92]{color:#222}.txt uni-text[data-v-6f057d92]{font-size:%?24?%;color:#666}.m30[data-v-6f057d92]{margin-top:%?40?%}',""]),t.exports=n},8959:function(t,n,e){"use strict";e.r(n);var a=e("2cc0"),r=e("38be");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("53f6");var o=e("f0c5"),d=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"6f057d92",null,!1,a["a"],void 0);n["default"]=d.exports},b5e5:function(t,n,e){var a=e("5fac");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("7442ab54",a,!0,{sourceMap:!1,shadowMode:!1})}}]);