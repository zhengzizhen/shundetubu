(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-Setting-userID"],{"00a7":function(n,t,e){var s=e("24fb");t=s(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cont[data-v-756517bc]{margin-top:%?75?%;padding:0 %?30?%}.cont .input[data-v-756517bc]{margin-top:%?20?%;border-bottom:1px solid #e6e6e6;padding-bottom:%?20?%}.cont .input uni-label[data-v-756517bc]{width:%?200?%;font-size:%?32?%}.btn[data-v-756517bc]{width:%?690?%;height:%?88?%;background:#49caa4;border-radius:%?44?%;color:#fff;font-size:%?32?%;margin-top:%?800?%}',""]),n.exports=t},"2e68":function(n,t,e){var s=e("00a7");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);var i=e("4f06").default;i("596462bc",s,!0,{sourceMap:!1,shadowMode:!1})},"548b":function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"cont"},[e("v-uni-view",{staticClass:"input dis_f"},[e("v-uni-label",{staticClass:"dis_f"},[n._v("姓名")]),e("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:n.user.name,callback:function(t){n.$set(n.user,"name",t)},expression:"user.name"}})],1),e("v-uni-view",{staticClass:"input dis_f"},[e("v-uni-label",{staticClass:"dis_f"},[n._v("身份证号")]),e("v-uni-input",{attrs:{type:"text",maxlength:"18",placeholder:"请输入身份证号"},model:{value:n.user.ID,callback:function(t){n.$set(n.user,"ID",t)},expression:"user.ID"}})],1),e("v-uni-view",{staticClass:"input dis_f"},[e("v-uni-label",{staticClass:"dis_f"},[n._v("手机号")]),e("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:n.user.phone,callback:function(t){n.$set(n.user,"phone",t)},expression:"user.phone"}})],1)],1),e("v-uni-button",{staticClass:"btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[n._v("提交")])],1)},i=[]},"9be5":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac1f"),e("00b4");var s={data:function(){return{user:{name:"",ID:"",phone:""}}},methods:{submit:function(){return/^\u4e00-\u9fa5{1,5}$/.test(this.user.name)?/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.user.phone)?this.user.ID.length<18?(console.log("请输入正确的身份证号"),!1):void console.log("验证通过"):(console.log("请输入正确的手机号"),!1):(console.log("请输入正确的姓名"),!1)}}};t.default=s},bf10:function(n,t,e){"use strict";e.r(t);var s=e("548b"),i=e("e5ce");for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("c86d");var r=e("f0c5"),u=Object(r["a"])(i["default"],s["b"],s["c"],!1,null,"756517bc",null,!1,s["a"],void 0);t["default"]=u.exports},c86d:function(n,t,e){"use strict";var s=e("2e68"),i=e.n(s);i.a},e5ce:function(n,t,e){"use strict";e.r(t);var s=e("9be5"),i=e.n(s);for(var a in s)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return s[n]}))}(a);t["default"]=i.a}}]);