(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-ambitus-twoday"],{"0c92":function(i,n,o){var c=o("9355");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[i.i,c,""]]),c.locals&&(i.exports=c.locals);var e=o("4f06").default;e("6d6ba382",c,!0,{sourceMap:!1,shadowMode:!1})},"195e":function(i,n,o){i.exports=o.p+"static/img/zheng.51c3030a.jpg"},2541:function(i,n,o){"use strict";var c=o("0c92"),e=o.n(c);e.a},4423:function(i,n,o){"use strict";o.r(n);var c=o("72bd"),e=o("edf5");for(var t in e)["default"].indexOf(t)<0&&function(i){o.d(n,i,(function(){return e[i]}))}(t);o("2541");var u=o("f0c5"),l=Object(u["a"])(e["default"],c["b"],c["c"],!1,null,"49f4b8fa",null,!1,c["a"],void 0);n["default"]=l.exports},4796:function(i,n,o){"use strict";o.r(n);var c=o("787e"),e=o.n(c);for(var t in c)["default"].indexOf(t)<0&&function(i){o.d(n,i,(function(){return c[i]}))}(t);n["default"]=e.a},"72bd":function(i,n,o){"use strict";o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return t})),o.d(n,"a",(function(){return c}));var c={uIcon:o("d8e2").default},e=function(){var i=this,n=i.$createElement,c=i._self._c||n;return c("v-uni-view",{staticClass:"body pd30"},[c("p",{staticClass:"ty_title dis_f"},[c("v-uni-label",[i._v("全国")]),c("u-icon",{attrs:{color:"#FFF",name:"arrow-down-fill"}})],1),i._l(i.list,(function(n,e){return c("v-uni-view",{key:e,staticClass:"dc_mod dis_f bor_r"},[c("v-uni-image",{attrs:{src:o("195e"),mode:""}}),c("v-uni-view",{staticClass:"dc_god"},[c("p",[i._v("【亭可马里季】斯里兰卡纯玩9天")]),c("v-uni-text",{staticClass:"posw"},[i._v("3天")]),c("v-uni-view",{staticClass:"dc_latt dis_f"},[c("v-uni-text",[i._v("03.18已满员")]),c("v-uni-label",[i._v("04.02剩3名额")]),c("p",{staticClass:"dis_f"},[c("u-icon",{attrs:{name:"arrow-right",color:"#999999",size:"12"}})],1)],1),c("p",{staticClass:"title dis_f"},[c("v-uni-label",[i._v("出入西藏首选")]),c("v-uni-label",[i._v("限时40天")])],1),c("v-uni-view",{staticClass:"dc_span dis_f"},[c("v-uni-text",[i._v("￥888")]),c("v-uni-label",[i._v("4.91分丨291人去过")])],1)],1)],1)}))],2)},t=[]},"787e":function(i,n,o){"use strict";o("7a82");var c=o("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("14d9"),o("caad"),o("2532"),o("c975");var e=c(o("b7de")),t=c(o("8939")),u={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,t.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),i.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),i},icon:function(){return e.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.preventEvent(i)}}};n.default=u},8939:function(i,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,o("a9e3");var c={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};n.default=c},9355:function(i,n,o){var c=o("24fb");n=c(!1),n.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.body[data-v-49f4b8fa]{padding-top:%?490?%;background-color:#2a755e;padding-bottom:%?100?%}.ty_title[data-v-49f4b8fa]{text-align:right;color:#fff;justify-content:flex-end;align-items:center}.ty_title uni-label[data-v-49f4b8fa]{display:block;font-size:%?30?%;font-weight:500;color:#fff;margin-right:%?10?%}.dc_mod[data-v-49f4b8fa]{position:relative;background-color:#fff;padding:%?20?% %?20?%;margin:%?20?% 0}.dc_mod uni-image[data-v-49f4b8fa]{width:%?240?%;height:%?240?%;border-radius:%?20?%}.dc_mod .dc_god[data-v-49f4b8fa]{margin-left:%?20?%}.dc_mod .dc_god p[data-v-49f4b8fa]{font-size:%?30?%;font-weight:500;color:#222}.dc_mod .posw[data-v-49f4b8fa]{position:absolute;top:%?20?%;left:%?20?%;width:%?80?%;height:%?42?%;line-height:%?42?%;background:#49caa4;z-index:2;border-radius:%?20?% %?0?% %?20?% %?0?%;text-align:center;color:#fff;font-size:%?22?%}.dc_mod .dc_latt[data-v-49f4b8fa]{margin-top:%?10?%}.dc_mod .dc_latt uni-text[data-v-49f4b8fa]{padding:%?5?% %?8?%;color:#fff;font-size:%?22?%;background-color:#ffa1ad}.dc_mod .dc_latt uni-label[data-v-49f4b8fa]{padding:%?5?% %?8?%;color:#fff;font-size:%?22?%;margin-left:%?10?%;background-color:#f2ad5a}.dc_mod .dc_latt p[data-v-49f4b8fa]{font-size:%?22?%;align-items:center;margin-left:%?10?%}.dc_mod .title[data-v-49f4b8fa]{margin:%?10?% 0 %?30?%;font-size:%?24?%;font-weight:500;color:#999;align-items:center}.dc_mod .title uni-label[data-v-49f4b8fa]{display:block;margin-right:%?10?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#e49332;background:#ffecd6;line-height:%?36?%;padding:%?2?% %?15?%}.dc_span[data-v-49f4b8fa]{justify-content:space-between;align-items:center}.dc_span uni-label[data-v-49f4b8fa]{color:#999;font-size:%?24?%}.dc_span uni-text[data-v-49f4b8fa]{color:#ff4040;font-weight:700}',""]),i.exports=n},a8d6:function(i,n,o){"use strict";var c=o("dc3a"),e=o.n(c);e.a},b7a8:function(i,n,o){"use strict";o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return e})),o.d(n,"a",(function(){}));var c=function(){var i=this,n=i.$createElement,o=i._self._c||n;return o("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(n){arguments[0]=n=i.$handleEvent(n),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?o("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):o("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?o("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},e=[]},b7de:function(i,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""}},c7ca:function(i,n,o){var c=o("24fb");n=c(!1),n.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-8aba839c], uni-scroll-view[data-v-8aba839c], uni-swiper-item[data-v-8aba839c]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-8aba839c]{display:flex;align-items:center}.u-icon--left[data-v-8aba839c]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-8aba839c]{flex-direction:row;align-items:center}.u-icon--top[data-v-8aba839c]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-8aba839c]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-8aba839c]{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.u-icon__icon--primary[data-v-8aba839c]{color:#3c9cff}.u-icon__icon--success[data-v-8aba839c]{color:#5ac725}.u-icon__icon--error[data-v-8aba839c]{color:#f56c6c}.u-icon__icon--warning[data-v-8aba839c]{color:#f9ae3d}.u-icon__icon--info[data-v-8aba839c]{color:#909399}.u-icon__img[data-v-8aba839c]{height:auto;will-change:transform}.u-icon__label[data-v-8aba839c]{line-height:1}',""]),i.exports=n},d8e2:function(i,n,o){"use strict";o.r(n);var c=o("b7a8"),e=o("4796");for(var t in e)["default"].indexOf(t)<0&&function(i){o.d(n,i,(function(){return e[i]}))}(t);o("a8d6");var u=o("f0c5"),l=Object(u["a"])(e["default"],c["b"],c["c"],!1,null,"8aba839c",null,!1,c["a"],void 0);n["default"]=l.exports},dc3a:function(i,n,o){var c=o("c7ca");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[i.i,c,""]]),c.locals&&(i.exports=c.locals);var e=o("4f06").default;e("4c14dcfb",c,!0,{sourceMap:!1,shadowMode:!1})},ec7d:function(i,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{list:[1,2,3,4]}},methods:{}}},edf5:function(i,n,o){"use strict";o.r(n);var c=o("ec7d"),e=o.n(c);for(var t in c)["default"].indexOf(t)<0&&function(i){o.d(n,i,(function(){return c[i]}))}(t);n["default"]=e.a}}]);