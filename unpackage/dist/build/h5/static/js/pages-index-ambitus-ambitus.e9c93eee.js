(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ambitus-ambitus"],{2462:function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{arrlist:[{name:"省内1天",image:"../../../static/index/zblx.jpg"},{name:"省内2天",image:"../../../static/index/gnjx.jpg"},{name:"省内亲子",image:"../../../static/index/gwjx.jpg"},{name:"美食路线",image:"../../../static/index/hdrl.jpg"},{name:"登山路线",image:"../../../static/index/hwsc.jpg"},{name:"非周末",image:"../../../static/index/bwbd.jpg"},{name:"高铁出行",image:"../../../static/index/tddz.jpg"},{name:"香港专区",image:"../../../static/index/qzlx.jpg"}],swiperlist:["../../../static/as/changs.jpg","../../../static/as/changs.jpg","../../../static/as/changs.jpg","../../../static/as/changs.jpg"],sublist:["当季推荐","口碑路线"],swipercurrent:0,current:0,list:["1","2","3"],curry:0,hotlist:["本周","已成行","1天","2天"],obj:{height:"80rpx"}}},methods:{sectionChange:function(t){this.current=t},chekelist:function(t,i){this.curry=i},change:function(t){console.log(t.detail.current),this.swipercurrent=t.detail.current},toChild:function(t){switch(t){case"省内1天":this.$jump("./oneday");break;case"省内2天":this.$jump("./twoday");break;case"省内亲子":this.$jump("./Parenting");break;case"高铁出行":this.$jump("./speed?title=","params","高铁出行");break;case"非周末":this.$jump("./speed?title=","params","非周末");break;case"美食路线":this.$jump("./speed?title=","params","美食路线");break;case"登山路线":this.$jump("./speed?title=","params","登山路线");break;case"香港专区":this.$jump("./HongKong");break}}}};i.default=e},"2b3e":function(t,i,a){"use strict";a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={uSubsection:a("f4e4").default,uIcon:a("d8e2").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"as_body"},[e("v-uni-view",[e("v-uni-view",{staticClass:"ix_shop index_pads dis_f pd30"},t._l(t.arrlist,(function(i,a){return e("v-uni-view",{key:a,staticClass:"ix_list dis_f",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toChild(i.name)}}},[e("v-uni-image",{staticStyle:{"border-radius":"50%"},attrs:{src:i.image,mode:""}}),e("v-uni-text",[t._v(t._s(i.name))])],1)})),1),e("p",{staticClass:"as_tit pd30"},[t._v("本周最热")]),e("v-uni-view",{staticClass:"uni-margin-wrap"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,autoplay:!1,"next-margin":"160rpx","previous-margin":"180rpx",interval:2e3,duration:500},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},t._l(t.swiperlist,(function(i,a){return e("v-uni-swiper-item",{key:a},[e("v-uni-view",{staticClass:"posir"},[e("v-uni-image",{attrs:{src:i,mode:""}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.swipercurrent==a,expression:"swipercurrent == index"}],staticClass:"posiswiper dis_f flex_c"},[e("p",[t._v("春行婺源秘境")]),e("v-uni-view",{staticClass:"ios"},[e("v-uni-text",[t._v("高铁往返")]),e("v-uni-text",{staticClass:"m10"},[t._v("闲适2日")])],1),e("v-uni-label",[t._v("4.91分丨291人去过")])],1)],1)],1)})),1),e("v-uni-view",{staticClass:"info dis_f"},t._l(t.swiperlist.length,(function(i,a){return e("p",{class:t.swipercurrent==a?"active":""})})),0)],1),e("v-uni-view",{staticClass:"as_fdq pd30"},[e("u-subsection",{attrs:{customStyle:t.obj,list:t.sublist,current:t.current,activeColor:"#49CAA4"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.sectionChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"pd30"},t._l(t.list,(function(i,s){return e("v-uni-view",{key:s,staticClass:"dc_mod dis_f"},[e("v-uni-image",{attrs:{src:a("195e"),mode:""}}),e("v-uni-view",{staticClass:"dc_god"},[e("p",[t._v("【亭可马里季】斯里兰卡纯玩9天")]),e("v-uni-view",{staticClass:"dc_latt dis_f"},[e("v-uni-label",[t._v("04.02剩3名额")]),e("v-uni-text",[t._v("03.18已满员")]),e("p",{staticClass:"dis_f"},[t._v("更多"),e("u-icon",{attrs:{name:"arrow-right",color:"#999999",size:"12"}})],1)],1),e("v-uni-view",{staticClass:"dc_span dis_f"},[e("v-uni-text",[t._v("￥888")]),e("v-uni-label",[t._v("4.91分丨291人去过")])],1)],1)],1)})),1),e("p",{staticClass:"as_tit pd30"},[t._v("高铁出行")]),e("v-uni-view",{staticClass:"dis_f pd30"},t._l(t.list,(function(i,s){return e("v-uni-view",{key:s,staticClass:"as_zh dis_f"},[e("v-uni-image",{attrs:{src:a("195e"),mode:""}}),e("v-uni-label",[t._v("3天")]),e("v-uni-text",[t._v("云端轻奢武功山")]),e("p",[t._v("￥88")])],1)})),1),e("p",{staticClass:"as_tit pd30"},[t._v("亲子活动")]),e("v-uni-view",{staticClass:"pd30"},t._l(t.list,(function(i,s){return e("v-uni-view",{key:s,staticClass:"dc_mod dis_f"},[e("v-uni-image",{attrs:{src:a("195e"),mode:""}}),e("v-uni-view",{staticClass:"dc_god"},[e("p",[t._v("【亭可马里季】斯里兰卡纯玩9天")]),e("v-uni-text",{staticClass:"posw"},[t._v("3天")]),e("v-uni-view",{staticClass:"dc_latt dis_f"},[e("v-uni-label",[t._v("04.02剩3名额")]),e("v-uni-text",[t._v("03.18已满员")]),e("p",{staticClass:"dis_f"},[t._v("更多"),e("u-icon",{attrs:{name:"arrow-right",color:"#999999",size:"12"}})],1)],1),e("v-uni-view",{staticClass:"dc_span dis_f"},[e("v-uni-text",[t._v("￥888")]),e("v-uni-label",[t._v("4.91分丨291人去过")])],1)],1)],1)})),1),e("p",{staticClass:"as_tit pd30"},[t._v("全部周边活动")]),e("v-uni-view",{staticClass:"cheborder pd30"},t._l(t.hotlist,(function(i,a){return e("p",{key:a,class:t.curry==a?"colors":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chekelist(i,a)}}},[t._v(t._s(i))])})),0),e("v-uni-view",{staticClass:"ix_block index_pad pd30"},[e("v-uni-view",{staticClass:"ix_img dis_f"},t._l(t.list,(function(i,s){return e("v-uni-view",{key:s,staticClass:"ix_flexs"},[e("v-uni-image",{attrs:{src:a("195e")}}),e("v-uni-text",{staticClass:"posw"},[t._v("3天")]),e("p",{staticClass:"ix_title"},[t._v("【花漫天山】新疆伊犁 杏花大环线8日")]),e("v-uni-view",{staticClass:"ds_bt dis_f"},[e("v-uni-label",[t._v("04.02丨报名中")]),e("p",{staticClass:"dis_f"},[t._v("更多"),e("u-icon",{attrs:{name:"arrow-right",color:"#999999",size:"12"}})],1)],1),e("v-uni-view",{staticClass:"sp dis_f"},[e("p",[t._v("￥88")]),e("v-uni-label",[t._v("291人去过")])],1)],1)})),1)],1)],1)],1)},n=[]},"6e08":function(t,i,a){"use strict";a.r(i);var e=a("2b3e"),s=a("a32b");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("cd1f");var o=a("f0c5"),r=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,"977fb782",null,!1,e["a"],void 0);i["default"]=r.exports},8101:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.as_body[data-v-977fb782]{margin-bottom:%?1000?%}.ix_shop[data-v-977fb782]{flex-wrap:wrap;justify-content:space-between}.ix_shop .ix_list[data-v-977fb782]{margin-top:%?30?%;flex-direction:column;justify-content:center;align-items:center;width:24%}.ix_shop .ix_list uni-image[data-v-977fb782]{width:%?100?%;height:%?100?%}.ix_shop .ix_list uni-text[data-v-977fb782]{margin-top:%?10?%;font-size:%?26?%;font-weight:500;color:#000}.as_fid[data-v-977fb782]{margin:%?60?% auto;height:%?120?%;line-height:%?120?%;padding-left:%?40?%;color:#fff;background:#537ecd;border-radius:%?20?%}.as_tit[data-v-977fb782]{font-weight:700;margin:%?40?% 0;font-size:%?32?%}.as_fdq[data-v-977fb782]{margin:%?50?% auto %?20?%}.dc_mod[data-v-977fb782]{position:relative;background-color:#fff;padding:%?30?% %?20?%;margin-bottom:%?20?%;border-bottom:1px solid #ccc}.dc_mod uni-image[data-v-977fb782]{width:%?240?%;height:%?240?%;border-radius:%?20?%}.dc_mod .dc_god[data-v-977fb782]{margin-left:%?20?%}.dc_mod .posw[data-v-977fb782]{position:absolute;top:%?30?%;left:%?20?%;width:%?80?%;height:%?42?%;line-height:%?42?%;background:#49caa4;z-index:2;border-radius:%?20?% %?0?% %?20?% %?0?%;text-align:center;color:#fff;font-size:%?22?%}.dc_mod .dc_latt[data-v-977fb782]{margin-top:%?20?%}.dc_mod .dc_latt uni-text[data-v-977fb782]{padding:%?5?% %?8?%;color:#fff;font-size:%?22?%;background-color:#ffa1ad;margin-left:%?10?%}.dc_mod .dc_latt uni-label[data-v-977fb782]{padding:%?5?% %?8?%;color:#fff;font-size:%?22?%;background-color:#f2ad5a}.dc_mod .dc_latt p[data-v-977fb782]{font-size:%?22?%;align-items:center;margin-left:%?10?%}.dc_span[data-v-977fb782]{margin-top:%?55?%;justify-content:space-between;align-items:center}.dc_span uni-label[data-v-977fb782]{color:#999;font-size:%?24?%}.dc_span uni-text[data-v-977fb782]{color:#ff4040;font-weight:700}.as_zh[data-v-977fb782]{width:33%;flex-direction:column;position:relative;width:%?240?%}.as_zh uni-image[data-v-977fb782]{width:%?217?%;height:%?217?%;border-radius:%?20?%}.as_zh uni-label[data-v-977fb782]{position:absolute;top:0;left:%?0?%;width:%?80?%;height:%?42?%;line-height:%?42?%;background:#49caa4;border-radius:%?20?% %?0?% %?20?% %?0?%;color:#fff;text-align:center;font-size:%?22?%}.as_zh uni-text[data-v-977fb782]{font-size:%?28?%;margin:%?10?% 0;text-align:left}.as_zh p[data-v-977fb782]{color:red;font-weight:700;text-align:left}.u-page__tag-item[data-v-977fb782]{display:inline-block;justify-content:space-between;margin-right:%?40?%}.ix_block[data-v-977fb782]{position:relative;margin-top:%?60?%}.ix_block uni-label[data-v-977fb782]{display:flex;font-weight:700;font-size:%?32?%;margin-bottom:%?30?%}.ix_block .ix_img[data-v-977fb782]{justify-content:space-between;flex-wrap:wrap}.ix_block .ix_img uni-image[data-v-977fb782]{margin:%?20?% auto %?10?%;width:%?335?%;height:%?335?%;border-radius:%?20?%}.ix_block .ix_img .ix_flexs[data-v-977fb782]{position:relative;width:%?335?%;height:auto}.ix_block .ix_img .ix_flexs .posw[data-v-977fb782]{position:absolute;top:%?20?%;left:%?0?%;width:%?80?%;height:%?42?%;line-height:%?42?%;background:#49caa4;z-index:2;border-radius:%?20?% %?0?% %?20?% %?0?%;text-align:center;color:#fff;font-size:%?22?%}.ix_block .ix_img .ix_posi[data-v-977fb782]{position:absolute;top:%?20?%;left:0;width:%?125?%;height:%?42?%;background:#000;border-radius:%?20?% %?0?% %?20?% %?0?%;padding:%?5?% %?20?%;color:#fff;text-align:center;opacity:.5}.ix_block .ix_img .ix_title[data-v-977fb782]{margin:0 auto %?20?%;word-wrap:normal;font-size:%?28?%}.ix_block .ix_img .ix_txtgreen[data-v-977fb782]{width:%?106?%;height:%?36?%;color:#49caa4;font-size:%?22?%;text-align:center;background:#ebfff9;border-radius:%?6?%}.ix_block .ix_img .ix_yellow[data-v-977fb782]{font-size:%?30?%;font-weight:500;color:#ff4040}.ds_bt[data-v-977fb782]{height:%?40?%;justify-content:space-between}.ds_bt uni-label[data-v-977fb782]{height:%?40?%;background:#49caa4;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff;line-height:%?36?%;padding:%?5?% %?10?%}.ds_bt p[data-v-977fb782]{font-size:%?24?%;color:#999}.sp[data-v-977fb782]{margin-top:%?10?%;justify-content:space-between;height:%?64?%;line-height:%?64?%}.sp p[data-v-977fb782]{color:red!important;font-size:%?28?%;font-weight:700}.sp uni-label[data-v-977fb782]{color:#999;font-size:%?24?%;display:inline-block}.cheborder[data-v-977fb782]{width:100%;font-size:%?30?%}.cheborder p[data-v-977fb782]{margin-right:%?20?%;margin-top:%?10?%;border-radius:%?50?%;border:1px solid #ccc;display:inline-block;padding:%?10?% %?30?%;color:#49caa4}.cheborder .colors[data-v-977fb782]{color:#fff;background-color:#49caa4;border:1px solid #49caa4}.swiper[data-v-977fb782]{width:100%;height:%?500?%;text-align:center}.swiper .posir[data-v-977fb782]{width:%?380?%;height:%?500?%}.swiper uni-image[data-v-977fb782]{margin:0 auto;width:%?380?%;height:%?500?%;border-radius:%?20?%}.swiper .posiswiper[data-v-977fb782]{position:absolute;bottom:%?20?%;left:0;padding:%?10?% %?20?%;text-align:left;-webkit-animation:scaleout-data-v-977fb782 .5s ease-in-out;animation:scaleout-data-v-977fb782 .5s ease-in-out}.swiper .posiswiper p[data-v-977fb782]{font-size:%?30?%;font-weight:700;color:#fff}.swiper .posiswiper uni-text[data-v-977fb782]{font-size:%?24?%;font-weight:500;color:#fff;background:hsla(0,0%,100%,.5);padding:%?5?% %?10?%}.swiper .posiswiper .ios[data-v-977fb782]{margin:%?10?% 0 %?20?%}.swiper .posiswiper .m10[data-v-977fb782]{margin-left:%?10?%}.swiper .posiswiper uni-label[data-v-977fb782]{font-size:%?24?%;font-weight:500;color:#fff}.info[data-v-977fb782]{width:100%;text-align:center;margin:%?20?% auto;justify-content:center}.info p[data-v-977fb782]{margin:0 %?8?%;width:%?22?%;height:%?22?%;background:#f0f0f0;border-radius:50%}.info .active[data-v-977fb782]{background:#49caa4!important}@-webkit-keyframes scaleout-data-v-977fb782{0%{opacity:0}50%{opacity:.5}100%{opacity:1}}@keyframes scaleout-data-v-977fb782{0%{opacity:0}50%{opacity:.5}100%{opacity:1}}',""]),t.exports=i},a32b:function(t,i,a){"use strict";a.r(i);var e=a("2462"),s=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},cd1f:function(t,i,a){"use strict";var e=a("d4ff"),s=a.n(e);s.a},d4ff:function(t,i,a){var e=a("8101");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("771ddd4c",e,!0,{sourceMap:!1,shadowMode:!1})}}]);