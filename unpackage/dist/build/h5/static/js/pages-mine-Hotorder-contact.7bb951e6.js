(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-Hotorder-contact"],{"5e8f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.body[data-v-1476c0d3]{background-color:#fafafa;min-height:%?1500?%;height:auto;padding-top:%?40?%}.body .cont[data-v-1476c0d3]{width:%?690?%;height:%?88?%;background:#fff;border-radius:%?20?%;color:#999}.fixed[data-v-1476c0d3]{position:fixed;bottom:0;right:0;width:%?750?%;height:%?166?%;background:#fff;box-shadow:%?0?% %?2?% %?8?% %?0?% rgba(4,0,0,.16)}.fixed .btn[data-v-1476c0d3]{margin:%?40?% auto;width:%?690?%;height:%?78?%;line-height:%?78?%;background:#49caa4;border-radius:%?39?%;color:#fff;text-align:center;font-size:%?30?%}.bottom[data-v-1476c0d3]{padding:%?30?%;box-sizing:border-box;margin:%?30?% auto;width:%?690?%;height:%?280?%;background:#fff;border-radius:%?20?%}.bottom uni-label[data-v-1476c0d3]{font-size:%?30?%}.bottom uni-input[data-v-1476c0d3]{font-size:%?30?%}.bottom .inpt[data-v-1476c0d3]{width:%?600?%;height:%?89?%;color:#000;font-size:%?30?%}.user[data-v-1476c0d3]{background-color:#fff;padding:%?20?%;border-radius:%?20?%;margin-bottom:%?20?%}.user .pp[data-v-1476c0d3]{margin:%?20?% 0}.user .ops[data-v-1476c0d3]{margin:%?20?% 0;justify-content:flex-end}.user .ops uni-image[data-v-1476c0d3]{width:%?30?%;height:%?30?%;margin-right:%?10?%}.user .ops uni-text[data-v-1476c0d3]{font-size:%?26?%}.user .ops uni-view[data-v-1476c0d3]{margin-right:%?20?%}',""]),t.exports=e},"64e5":function(t,e,n){"use strict";n.r(e);var i=n("8432"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},8432:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var a=i(n("c7eb")),r=i(n("1da1")),s={data:function(){return{isShow:!0,user:{username:"",relation:"",phone:""},list:[],change:!1,id:""}},onLoad:function(){this.getconcat()},methods:{getconcat:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var n;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中"}),e.next=3,t.$http("/trip/contact/list");case 3:n=e.sent,t.list=n.data.data,uni.hideLoading();case 6:case"end":return e.stop()}}),e)})))()},changgeuser:function(t){this.user.username=t.username,this.user.phone=t.phone,this.user.relation=t.relation,this.isShow=!1,this.change=!0,this.id=t.id},deletes:function(t){var e=this;return(0,r.default)((0,a.default)().mark((function n(){return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading(),n.next=3,e.$http("/trip/contact/delete",{contact_id:t.id});case 3:n.sent,uni.hideLoading(),uni.$u.toast("删除成功"),e.getconcat();case 7:case"end":return n.stop()}}),n)})))()},toshow:function(){var t=this;return(0,r.default)((0,a.default)().mark((function e(){var n,i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=t.isShow){e.next=43;break}if(n=/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,""!=t.user.id){e.next=7;break}return uni.showToast({title:"身份证不能为空",icon:"none"}),e.abrupt("return",!1);case 7:if(""!=t.user.phone){e.next=12;break}return uni.showToast({title:"手机号码不能为空",icon:"none"}),e.abrupt("return",!1);case 12:if(n.test(t.user.phone)){e.next=15;break}return uni.showToast({title:"请填写正确的手机号码",icon:"none"}),e.abrupt("return",!1);case 15:if(1!=t.change){e.next=32;break}return i=t.user,i.contact_id=t.id,uni.showLoading(),e.next=21,t.$http("/trip/contact/update",t.user);case 21:return e.sent,uni.hideLoading(),uni.$u.toast("修改成功"),t.change=!1,t.id="",t.isShow=!0,t.user.phone="",t.user.relation="",t.user.username="",t.getconcat(),e.abrupt("return",!1);case 32:return uni.showLoading(),e.next=35,t.$http("/trip/contact/add",t.user);case 35:e.sent,t.getconcat(),uni.hideLoading(),uni.$u.toast("保存成功"),t.isShow=!0,t.user.phone="",t.user.relation="",t.user.username="";case 43:case"end":return e.stop()}}),e)})))()}}};e.default=s},"8c50":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"body pd30"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"dis_f flex_c jscb user"},[n("v-uni-view",{staticClass:"dis_f jscb pp"},[n("p",[t._v(t._s(e.username)+" ("+t._s(e.relation)+")")]),n("p",[t._v(t._s(e.phone))])]),n("v-uni-view",{staticClass:"dis_f ops"},[n("v-uni-view",{staticClass:"dis_f alitmc",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changgeuser(e)}}},[n("v-uni-image",{attrs:{src:"/static/image/mine/m5.jpg",mode:""}}),n("v-uni-text",[t._v("编辑")])],1),n("v-uni-view",{staticClass:"dis_f alitmc",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deletes(e)}}},[n("v-uni-image",{attrs:{src:"/static/image/mine/delete.png",mode:""}}),n("v-uni-text",[t._v("删除")])],1)],1)],1)})),n("v-uni-view",{staticClass:"cont dis_f alitmc jscc",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=!t.isShow}}},[n("p",[t._v("+ 添加紧急联系人")])])],2),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"bottom"},[n("v-uni-view",{staticClass:"inpt dis_f"},[n("v-uni-label",[t._v("姓名：")]),n("v-uni-input",{attrs:{type:"text",maxlength:"6",placeholder:"请输入姓名"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),n("v-uni-view",{staticClass:"inpt dis_f"},[n("v-uni-label",[t._v("电话号码：")]),n("v-uni-input",{attrs:{type:"text",maxlength:"11",placeholder:"请输入电话号码"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}})],1),n("v-uni-view",{staticClass:"inpt dis_f"},[n("v-uni-label",[t._v("关系：")]),n("v-uni-input",{attrs:{type:"text",maxlength:"6",placeholder:"紧急联系人与您的关系"},model:{value:t.user.relation,callback:function(e){t.$set(t.user,"relation",e)},expression:"user.relation"}})],1),n("v-uni-view",{staticClass:"fixed",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toshow.apply(void 0,arguments)}}},[n("p",{staticClass:"btn"},[t._v("保存")])])],1)],1)},a=[]},"8e86":function(t,e,n){"use strict";n.r(e);var i=n("8c50"),a=n("64e5");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c787");var s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1476c0d3",null,!1,i["a"],void 0);e["default"]=o.exports},c787:function(t,e,n){"use strict";var i=n("d4d4"),a=n.n(i);a.a},d4d4:function(t,e,n){var i=n("5e8f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7ad4b8fe",i,!0,{sourceMap:!1,shadowMode:!1})}}]);