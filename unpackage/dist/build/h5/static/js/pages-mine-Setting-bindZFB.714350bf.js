(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-Setting-bindZFB"],{8634:function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("c7eb")),r=a(e("1da1")),s={data:function(){return{user:{username:"",account:""},isShow:!0,times:60,timer:null}},onLoad:function(){this.user.username=this.$store.state.userinfo.alipay.alipay_username,this.user.account=this.$store.state.userinfo.alipay.alipay_account,console.log(this.user)},methods:{submit:function(){var t=this;return(0,r.default)((0,i.default)().mark((function n(){var e;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!=t.user.username){n.next=5;break}return uni.$u.toast("姓名不能为空"),n.abrupt("return",!1);case 5:if(""!=t.user.account){n.next=8;break}return uni.$u.toast("收款账号不能为空"),n.abrupt("return",!1);case 8:return uni.showLoading(),n.next=11,t.$http("/user/update/alipay",t.user);case 11:n.sent,uni.hideLoading(),e={},e.user=t.user,e.state=1,t.$store.commit("alipay_status",e),uni.$u.toast("绑定成功"),setTimeout((function(){t.$jump("/pages/mine/Setting/playRMB","redirect")}),500);case 19:case"end":return n.stop()}}),n)})))()},cleartime:function(){if(0==this.times)return clearInterval(this.timer),this.isShow=!0,this.times=60,!1;this.times--},sendCode:function(){if(!this.isShow)return!1;uni.showLoading({});var t=setTimeout(uni.hideLoading,500);clearTimeout(t),this.isShow=!this.isShow,this.timer=setInterval(this.cleartime,1e3)}}};n.default=s},"8ba4":function(t,n,e){"use strict";e.r(n);var a=e("8c09"),i=e("9d36");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("b6c1");var s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4c69949a",null,!1,a["a"],void 0);n["default"]=u.exports},"8c09":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"cont"},[e("v-uni-view",{staticClass:"input dis_f"},[e("v-uni-label",{staticClass:"dis_f"},[t._v("姓名")]),e("v-uni-input",{attrs:{type:"text",maxlength:"11",placeholder:"请输入姓名"},model:{value:t.user.username,callback:function(n){t.$set(t.user,"username",n)},expression:"user.username"}})],1),e("v-uni-view",{staticClass:"input dis_f"},[e("v-uni-label",{staticClass:"dis_f"},[t._v("支付宝账号")]),e("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入支付宝账号"},model:{value:t.user.account,callback:function(n){t.$set(t.user,"account",n)},expression:"user.account"}})],1)],1),e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)},i=[]},"9d36":function(t,n,e){"use strict";e.r(n);var a=e("8634"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},b6c1:function(t,n,e){"use strict";var a=e("c401"),i=e.n(a);i.a},c401:function(t,n,e){var a=e("ca58");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("9d386ac6",a,!0,{sourceMap:!1,shadowMode:!1})},ca58:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cont[data-v-4c69949a]{margin-top:%?121?%;padding:0 %?30?%}.cont .input[data-v-4c69949a]{margin-top:%?20?%;border-bottom:1px solid #e6e6e6;padding-bottom:%?20?%}.cont .input uni-label[data-v-4c69949a]{width:%?190?%;font-size:%?32?%}.cont .input uni-input[data-v-4c69949a]{width:%?300?%}.cont .send[data-v-4c69949a]{text-align:right;width:%?220?%;color:#49caa4}.cont .ms[data-v-4c69949a]{text-align:right;font-size:%?28?%;width:%?220?%}.btn[data-v-4c69949a]{width:%?690?%;height:%?88?%;background:#49caa4;border-radius:%?44?%;color:#fff;font-size:%?32?%;margin-top:%?1100?%}',""]),t.exports=n}}]);