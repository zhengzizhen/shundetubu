(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-retail-retailorder"],{"0af2":function(t,r,n){var e=n("7cb1");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("f9c633c0",e,!0,{sourceMap:!1,shadowMode:!1})},"0e56":function(t,r,n){"use strict";n.r(r);var e=n("36d7"),a=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){n.d(r,t,(function(){return e[t]}))}(i);r["default"]=a.a},"18ea":function(t,r,n){"use strict";n.d(r,"b",(function(){return e})),n.d(r,"c",(function(){return a})),n.d(r,"a",(function(){}));var e=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-uni-view",{staticClass:"body"},[e("Nav",{attrs:{title:"分销订单"}},[e("template",{slot:"left"},[e("v-uni-image",{staticClass:"leftimg",attrs:{src:n("ae3c"),mode:""},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.back()}}})],1),e("template",{slot:"right"},[e("v-uni-image",{staticClass:"rightimg",attrs:{src:n("87fb"),mode:""},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.torestore.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"fenx",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.torestore.apply(void 0,arguments)}}},[t._v("分销说明")])],1)],2),e("v-uni-view",{staticClass:"rr_body"},t._l(t.list,(function(r,a){return e("v-uni-view",{key:a,staticClass:"rr_order bor_r"},[e("v-uni-view",{staticClass:"rr_header dis_f"},[e("p",[t._v("订单编号：6454484986484")]),1==r.state?e("v-uni-text",[t._v("已结束")]):t._e(),2==r.state?e("v-uni-text",[t._v("已退出")]):t._e(),3==r.state?e("v-uni-text",[t._v("已报名")]):t._e()],1),e("v-uni-view",{staticClass:"rr_cont dis_f"},[e("v-uni-image",{attrs:{src:n("a428"),mode:""}}),e("v-uni-view",{staticClass:"cont_txt dis_f flex_c"},[e("p",[t._v("【亭可马里季】斯里兰卡纯玩9天")]),e("v-uni-text",{staticClass:"txt"},[t._v("下单时间：2023-02-20 18:19")]),e("v-uni-view",{staticClass:"label dis_f"},[e("v-uni-label",[t._v("订单金额：￥125")]),e("v-uni-label",{staticClass:"red"},[t._v("佣金：￥5.29")])],1)],1)],1)],1)})),1)],1)},a=[]},"36d7":function(t,r,n){"use strict";n("7a82");var e=n("4ea4").default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=e(n("5788")),i={components:{Nav:a.default},data:function(){return{list:[{order:"88282292299",state:1},{order:"88282292299",state:2},{order:"88282292299",state:3}]}},methods:{back:function(){uni.navigateBack()},torestore:function(){this.$jump("./restore")}}};r.default=i},"3b36":function(t,r,n){"use strict";n("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={props:["title"],data:function(){return{}},methods:{}}},5702:function(t,r,n){"use strict";var e=n("0af2"),a=n.n(e);a.a},5788:function(t,r,n){"use strict";n.r(r);var e=n("9330"),a=n("fecf");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(r,t,(function(){return a[t]}))}(i);n("fc52");var c=n("f0c5"),o=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"413f930c",null,!1,e["a"],void 0);r["default"]=o.exports},"7cb1":function(t,r,n){var e=n("24fb");r=e(!1),r.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.rr_body[data-v-5c25bc66]{background-color:#fafafa;height:%?1500?%;padding:%?30?% %?30?%}.rr_body .rr_order[data-v-5c25bc66]{margin-bottom:%?20?%;background-color:#fff;height:%?320?%}.rr_body .rr_order .rr_header[data-v-5c25bc66]{justify-content:space-between;padding-bottom:%?20?%;border-bottom:1px solid #e6e6e6;padding:%?20?%}.rr_body .rr_order .rr_header p[data-v-5c25bc66]{color:#666;font-size:%?30?%}.rr_body .rr_order .rr_header uni-text[data-v-5c25bc66]{font-size:%?30?%;color:#ff4040}.rr_body .rr_cont[data-v-5c25bc66]{padding:%?20?%}.rr_body .rr_cont uni-image[data-v-5c25bc66]{width:%?180?%;height:%?180?%;border-radius:%?20?%}.rr_body .rr_cont .cont_txt[data-v-5c25bc66]{margin-left:%?30?%}.rr_body .rr_cont .cont_txt p[data-v-5c25bc66]{font-size:%?30?%}.rr_body .rr_cont .cont_txt .txt[data-v-5c25bc66]{color:#999;font-size:%?26?%;margin-top:%?10?%}.rr_body .rr_cont .cont_txt .label[data-v-5c25bc66]{margin-top:%?40?%;font-size:%?26?%;justify-content:space-between}.rr_body .rr_cont .cont_txt .label .red[data-v-5c25bc66]{margin-left:%?20?%;color:#ff4040}.fenx[data-v-5c25bc66]{font-size:%?24?%}.rightimg[data-v-5c25bc66]{width:%?30?%;height:%?30?%}',""]),t.exports=r},"87fb":function(t,r,n){t.exports=n.p+"static/img/import.58724374.jpg"},9205:function(t,r,n){"use strict";n.r(r);var e=n("18ea"),a=n("0e56");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(r,t,(function(){return a[t]}))}(i);n("5702");var c=n("f0c5"),o=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"5c25bc66",null,!1,e["a"],void 0);r["default"]=o.exports},9330:function(t,r,n){"use strict";n.d(r,"b",(function(){return e})),n.d(r,"c",(function(){return a})),n.d(r,"a",(function(){}));var e=function(){var t=this.$createElement,r=this._self._c||t;return r("v-uni-view",{staticClass:"nav dis_f"},[r("v-uni-view",{staticClass:"left"},[this._t("left")],2),r("v-uni-view",{staticClass:"center"},[r("p",[this._v(this._s(this.title))])]),r("v-uni-view",{staticClass:"right"},[this._t("right")],2)],1)},a=[]},a428:function(t,r,n){t.exports=n.p+"static/img/zheng.51c3030a.jpg"},ae3c:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAzFJREFUeF7tmknITlEYx39fYiWsDNkgKcoCKcVCEaVQpliYSoYkYxamkillLLNCiMxDMq2IFbEiZaFEUaIoWVjQv/63Tm8+3/e9733rnnvus3vv4u3+fve59zzPOU8LiUdL4vxUAqoMSNxA9QokngDVR7CZr8BhYBKwArhT1ExrloCzwFxDLweOpCTgGLDEwG+BacDrVATsB1YZ9gMwHXheVHjdV56vwA5gg2G/Gv5xkeHzFLAJ2GbYX4a/V3T4vASsAfYGsDOAazHA5yFgKXA0gJ0HnIsFvlEB84EzAay+/Cdigm9EwCzgUgC7GjgQG3y9AiYDN4BOBt4I7IwRvh4B4w3f1cBa+rQCRBsdqQNGA9eBnqZV0aMVIOpor4DhXtr6mfY4oBUg+miPgCHAVWCwadXoaAUoRbQloD9wBRhhWonQCvCnFPRt9AK9DT/GsHcN/7Ms8P9bBboDl4EJhn1k+C9lgm9NQBfDTzXsM8O/Lxt8awIuArMN+8rwb8oI/y8Bp4CFhn0HzARelhW+VoD27ZYZ9pOf/NMyw4cC1M9nVd13wz8sO3wmYDughkbx2/A3U4DPBIR7eUkKkAj18iv91H84Cx6kkAVhKXwSWGToz5bwpOwSanuBC8CcYBlU3f+izBJqBXR25zfF0DrRUS2QTCEk7h6WMM4SdLIjCcmUwuLuawmjLEEnPJKQRDOUvfKDLGGoL9wHdOiRRDucSRhmCQN8QXuCkpDEhkgmQRsi2gnq5Qvng7P/6BeItrbEMsCJlpBth6tmWBw9fQePxzXooEzIpB0MZgGiddHeDMgANfaiXeEsdgUzAVFK6KgAQdaeCG8G1FFGGfUIEOhaYE9ArN/7YjRQrwCxbgG2BtDaTdKAVFTRiACB7gbWB8Q6MQq/EYWX0agAAR4CNAuYhUpmrRZRRB4CBHoaWGBiDUmpWtRJUuEjLwEC1UmSnr7imwckkxmTE7QmRm57Pli/P1pCMoOSgu4G3ALGOhOSG5UVdx9LGGkJ62rmCAv1XcjzGxCCDQTUNaqNVuWoNrqQ0SwBhYT9101VAqJ5VE260SoDmiQ2mr+tMiCaR9WkG00+A/4CGX16QYr2aiAAAAAASUVORK5CYII="},bf7b:function(t,r,n){var e=n("24fb");r=e(!1),r.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav[data-v-413f930c]{width:100%;height:%?88?%;background-color:#fff;justify-content:space-between;padding:0 %?30?%;align-items:center;line-height:%?88?%;box-sizing:border-box}.left[data-v-413f930c]{text-align:left;display:flex;align-items:center}.center[data-v-413f930c]{text-align:center}.right[data-v-413f930c]{display:flex;justify-content:right;align-items:center;line-height:%?88?%}.right uni-image[data-v-413f930c]{width:%?30?%;height:%?30?%}',""]),t.exports=r},e4cd:function(t,r,n){var e=n("bf7b");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("73840340",e,!0,{sourceMap:!1,shadowMode:!1})},fc52:function(t,r,n){"use strict";var e=n("e4cd"),a=n.n(e);a.a},fecf:function(t,r,n){"use strict";n.r(r);var e=n("3b36"),a=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(t){n.d(r,t,(function(){return e[t]}))}(i);r["default"]=a.a}}]);