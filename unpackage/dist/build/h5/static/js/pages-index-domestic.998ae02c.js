(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-domestic"],{1264:function(a,t,e){"use strict";e.r(t);var i=e("56fa"),n=e("4cb7c");for(var s in n)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return n[a]}))}(s);e("1dc5");var r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"aa9e93a6",null,!1,i["a"],void 0);t["default"]=c.exports},"1dc5":function(a,t,e){"use strict";var i=e("5f1d"),n=e.n(i);n.a},"4cb7c":function(a,t,e){"use strict";e.r(t);var i=e("98f2"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(s);t["default"]=n.a},"56fa":function(a,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return i}));var i={uIcon:e("393f").default,uPopup:e("e1e8").default},n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",{staticClass:"dc_bg"},[i("v-uni-view",{staticClass:"uni-margin-wrap"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":a.indicatorDots,autoplay:a.autoplay,interval:a.interval,duration:a.duration}},[a.video?i("v-uni-swiper-item",[i("v-uni-video",{staticClass:"myVideo",attrs:{src:a.video}})],1):a._e(),a._l(a.swiper,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.$Resize(a.swiper,e)}}},[i("v-uni-image",{attrs:{src:t,mode:""}})],1)],1)}))],2)],1),i("v-uni-view",{staticClass:"dc_header pd30"},[i("v-uni-view",{staticClass:"dc_label dis_f",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.isShow=!0}}},[a._l(a.laberlist,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dc_spans"},[i("v-uni-text",[a._v(a._s(t.name))])],1)})),i("v-uni-view",{staticClass:"sx"},[i("v-uni-image",{attrs:{src:e("cad9"),mode:""}})],1)],2),i("v-uni-view",a._l(a.list,(function(t,e){return i("v-uni-view",{key:e},[0==e?i("v-uni-view",{staticClass:"dc_banner",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.toDetails(t.id)}}},[i("p",{staticClass:"dc_posi"},[a._v(a._s(t.day)+"天")]),i("v-uni-image",{staticClass:"bor_r",attrs:{src:t.master_image,mode:""}}),i("v-uni-view",{staticClass:"dc_text dis_f"},[i("p",[a._v(a._s(t.title))]),i("v-uni-view",{staticClass:"dc_span dis_f"},[i("v-uni-label",[a._v(a._s(t.grade)+"分丨"+a._s(t.traveller_number)+"人去过")]),i("v-uni-text",[a._v("￥"+a._s(t.price))])],1),i("v-uni-view",{staticClass:"dc_ms dis_f jscb"},[0!=t.trip_team.length?i("v-uni-view",{staticClass:"dis_f"},a._l(t.trip_team,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dc_go dis_f"},[i("v-uni-text",[a._v(a._s(t.start_day)+"出发")]),i("v-uni-label",{staticClass:"pink"},[a._v(a._s(t.status_text))])],1)})),1):i("v-uni-view"),i("p",[a._v("查看更多")])],1)],1)],1):a._e()],1)})),1),a._l(a.list,(function(t,e){return i("v-uni-view",{key:e,on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.toDetails(t.id)}}},[0!=e?i("v-uni-view",{staticClass:"dc_mod dis_f"},[i("v-uni-text",{staticClass:"posw"},[a._v(a._s(t.day)+"天")]),i("v-uni-image",{staticClass:"bor_r",attrs:{src:t.master_image,mode:""}}),i("v-uni-view",{staticClass:"dc_god dis_f flex_c jscb"},[i("p",[a._v(a._s(t.title))]),""!=t.trip_team?i("v-uni-view",{staticClass:"dc_latt dis_f"},[a._l(t.trip_team,(function(t,e){return i("v-uni-text",{key:e},[a._v(a._s(t.start_day)+a._s(t.status_text))])})),i("u-icon",{attrs:{name:"arrow-right",color:"#999999",size:"12"}})],2):a._e(),i("v-uni-view",{staticClass:"dc_out"},a._l(t.label,(function(t,e){return i("v-uni-text",{key:e},[a._v(a._s(t))])})),1),i("v-uni-view",{staticClass:"dc_span dis_f"},[i("v-uni-text",[a._v("￥"+a._s(t.price))]),i("v-uni-label",[a._v(a._s(t.grade)+"分丨"+a._s(t.traveller_number)+"人去过")])],1)],1)],1):a._e()],1)}))],2),i("u-popup",{attrs:{show:a.isShow},on:{close:function(t){arguments[0]=t=a.$handleEvent(t),a.close.apply(void 0,arguments)},open:function(t){arguments[0]=t=a.$handleEvent(t),a.open.apply(void 0,arguments)}}},[i("u-popup",{attrs:{round:10,show:a.isShow,closeable:!0},on:{close:function(t){arguments[0]=t=a.$handleEvent(t),a.close.apply(void 0,arguments)},open:function(t){arguments[0]=t=a.$handleEvent(t),a.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"ix_pop pd30"},[i("p",[a._v("天数")]),i("v-uni-view",{staticClass:"dis_f ps"},a._l(a.days,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dis_f prp",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.todays(t,e)}}},[i("v-uni-text",{class:a.daycurry==e?"select":""},[a._v(a._s(t.title))])],1)})),1),i("p",[a._v("难度")]),i("v-uni-view",{staticClass:"dis_f ps"},a._l(a.lvlist,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dis_f prp",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.tolv(t,e)}}},[i("v-uni-text",{class:a.lvcurry==e?"select":""},[a._v(a._s(t.name))])],1)})),1),i("p",[a._v("价格")]),i("v-uni-view",{staticClass:"dis_f ps"},a._l(a.moenylist,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dis_f prp",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.tomoney(t,e)}}},[i("v-uni-text",{class:a.moneycurry==e?"select":""},[a._v(a._s(t.title))])],1)})),1),i("p",[a._v("状态")]),i("v-uni-view",{staticClass:"dis_f ps"},a._l(a.staticlist,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dis_f prp",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.tostate(t,e)}}},[i("v-uni-text",{class:a.statecurry==e?"select":""},[a._v(a._s(t.name))])],1)})),1),i("p",[a._v("地区选择")]),i("v-uni-view",{staticClass:"dis_f ps"},a._l(a.addresslist,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dis_f prp",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.toaddress(t,e)}}},[i("v-uni-text",{class:a.addcurry==e?"select":""},[a._v(a._s(t.name))])],1)})),1),i("p",[a._v("出行方式")]),i("v-uni-view",{staticClass:"dis_f ps"},a._l(a.label,(function(t,e){return i("v-uni-view",{key:e,staticClass:"dis_f prp",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.tolabel(t,e)}}},[i("v-uni-text",{class:a.labelcurry==e?"select":""},[a._v(a._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"btn dis_f alitmc"},[i("p",{on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.reset.apply(void 0,arguments)}}},[a._v("重置")]),i("v-uni-button",{on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submit.apply(void 0,arguments)}}},[a._v("筛选")])],1)],1)],1)],1)],1)},s=[]},"589f":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.dc_bg[data-v-aa9e93a6]{width:100%;min-height:100vh;height:auto;background-color:#18acb6;padding-bottom:%?50?%;padding-top:%?20?%}.dc_header .dc_label[data-v-aa9e93a6]{position:relative}.dc_header .dc_label .dc_spans[data-v-aa9e93a6]{background:hsla(0,0%,100%,.4);border-radius:%?32?%;padding:%?10?% %?20?%;margin:%?10?% %?10?%;color:#fff;font-size:%?28?%}.dc_header .dc_label .sx[data-v-aa9e93a6]{padding-left:%?40?%;width:%?40?%;height:%?80?%;display:flex;align-items:center;background-color:#18acb6;position:absolute;right:%?0?%}.dc_header .dc_label .sx uni-image[data-v-aa9e93a6]{width:%?40?%;height:%?40?%}.dc_header .dc_banner[data-v-aa9e93a6]{position:relative;height:auto;background-color:#fff;border-radius:%?20?%;margin:%?20?% auto;padding:0 0 %?20?% 0}.dc_header .dc_banner uni-image[data-v-aa9e93a6]{width:100%;border-radius:%?20?% %?20?% %?0?% %?0?%;height:%?340?%}.dc_header .dc_banner .dc_posi[data-v-aa9e93a6]{position:absolute;top:0;left:0;z-index:2;width:%?80?%;height:%?42?%;background:#49caa4;border-radius:%?20?% %?0?% %?14?% %?0?%;text-align:center;color:#fff}.dc_header .dc_banner .dc_text[data-v-aa9e93a6]{flex-direction:column;padding:0 %?20?%}.dc_header .dc_banner .dc_text p[data-v-aa9e93a6]{color:#222;font-size:%?30?%}.dc_header .dc_banner .dc_text .dc_span[data-v-aa9e93a6]{margin-top:%?10?%;justify-content:space-between;align-items:center}.dc_header .dc_banner .dc_text .dc_span uni-label[data-v-aa9e93a6]{color:#999;font-size:%?24?%}.dc_header .dc_banner .dc_text .dc_span uni-text[data-v-aa9e93a6]{color:#ff4040;font-weight:700}.dc_header .dc_banner .dc_text .dc_ms[data-v-aa9e93a6]{margin-top:%?20?%;position:relative}.dc_header .dc_banner .dc_text .dc_ms p[data-v-aa9e93a6]{background-color:#fff;width:%?60?%;padding:0 %?20?%;display:flex;text-align:center;align-items:center;color:#49caa4;font-size:%?20?%}.dc_header .dc_banner .dc_text .dc_ms .dc_go[data-v-aa9e93a6]{padding:%?10?% %?20?%;flex-direction:column;text-align:center;border-right:1px solid #ccc}.dc_header .dc_banner .dc_text .dc_ms .dc_go uni-text[data-v-aa9e93a6]{font-size:%?26?%}.dc_header .dc_banner .dc_text .dc_ms .dc_go .pink[data-v-aa9e93a6]{margin-top:%?20?%;padding:%?5?% %?5?%;background-color:#ffa1ad;border-radius:%?50?%;color:#fff;font-size:%?24?%}.dc_mod[data-v-aa9e93a6]{position:relative;background-color:#fff;border-radius:%?20?%;padding:%?30?% %?20?%;margin-bottom:%?20?%}.dc_mod uni-image[data-v-aa9e93a6]{width:%?240?%;height:%?240?%;border:%?20?%}.dc_mod .dc_god[data-v-aa9e93a6]{width:%?388?%;margin-left:%?20?%}.dc_mod .posw[data-v-aa9e93a6]{position:absolute;top:%?30?%;left:%?20?%;width:%?80?%;height:%?42?%;line-height:%?42?%;background:#49caa4;z-index:2;border-radius:%?20?% %?0?% %?20?% %?0?%;text-align:center;color:#fff;font-size:%?22?%}.dc_mod .dc_latt uni-text[data-v-aa9e93a6]{padding:%?5?% %?15?%;color:#fff;font-size:%?24?%;background-color:#ffa1ad}.dc_mod .dc_latt uni-text[data-v-aa9e93a6]:nth-child(2){margin-left:%?10?%;padding:%?5?% %?20?%;color:#fff;font-size:%?24?%;background-color:#f2ad5a}.dc_mod .dc_out[data-v-aa9e93a6]{margin-top:%?20?%}.dc_mod .dc_out uni-text[data-v-aa9e93a6]{padding:%?5?% %?15?%;color:#e49332;font-size:%?24?%;background-color:#ffecd6}.dc_mod .dc_out uni-text[data-v-aa9e93a6]:nth-child(2){margin-left:%?10?%}.dc_span[data-v-aa9e93a6]{margin-top:%?20?%;justify-content:space-between;align-items:center}.dc_span uni-label[data-v-aa9e93a6]{color:#999;font-size:%?24?%}.dc_span uni-text[data-v-aa9e93a6]{color:#ff4040;font-weight:700}.ix_pop[data-v-aa9e93a6]{height:auto}.ix_pop p[data-v-aa9e93a6]{margin:%?10?% auto %?20?%;font-size:%?32?%;font-weight:700}.ix_pop .ps[data-v-aa9e93a6]{flex-wrap:wrap}.ix_pop .ps .prp[data-v-aa9e93a6]{margin:%?0?% %?10?%;width:30%;flex-direction:column;justify-content:center;align-items:center;margin-right:%?10?%;margin-bottom:%?10?%}.ix_pop .dis_f uni-text[data-v-aa9e93a6]{background:#fff;color:#999;border:%?2?% solid #999;border-radius:%?50?%;min-width:%?142?%;width:auto;padding:%?5?% %?10?%;height:%?54?%;line-height:%?54?%;text-align:center;font-size:%?26?%}.ix_pop .dis_f .select[data-v-aa9e93a6]{background-color:#49caa4;color:#fff;border:none;border:%?2?% solid #49caa4}.ix_pop .btn[data-v-aa9e93a6]{margin:%?80?% 0 %?50?%}.ix_pop .btn p[data-v-aa9e93a6]{font-size:%?30?%;font-weight:500;color:#666}.ix_pop .btn uni-button[data-v-aa9e93a6]{width:%?451?%;height:%?88?%;line-height:%?88?%;text-align:center;background:#49caa4;border-radius:%?44?%;color:#fff}.swiper[data-v-aa9e93a6]{margin:%?20?% 0;width:100%;height:%?350?%;box-sizing:border-box;padding:0 %?30?%;border-radius:%?16?%}.swiper uni-image[data-v-aa9e93a6]{width:100%;height:%?350?%;border-radius:%?16?%}.myVideo[data-v-aa9e93a6]{width:100%;height:%?350?%;border-radius:%?20?%}',""]),a.exports=t},"5f1d":function(a,t,e){var i=e("589f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("5af5b680",i,!0,{sourceMap:!1,shadowMode:!1})},"98f2":function(a,t,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("99af");var n=i(e("c7eb")),s=i(e("1da1")),r={data:function(){return{swiper:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,laberlist:[],isShow:!1,lvcurry:null,lvlist:[],moneycurry:null,moenylist:[],statecurry:null,staticlist:[],addcurry:null,addresslist:[],daycurry:null,label:[],labelcurry:null,days:[],obj:{},list:[],page:1,seach:[],search_min_day:"",search_max_day:"",search_difficulty:"",search_status:"",search_bourn:"",search_min_price:"",search_max_price:"",search_label:"",video:""}},created:function(){},onLoad:function(a){this.obj=JSON.parse(a.tit),uni.setNavigationBarTitle({title:this.obj.title});var t={url:this.obj.url,params:{page:this.page,limit:10}};this.getSwiper(),this.getlist(t),this.getSeach(this.obj.seach)},methods:{getSwiper:function(){var a=this;return(0,s.default)((0,n.default)().mark((function t(){var e;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.$http("/trip/top",{type:"首页-"+a.obj.title});case 2:e=t.sent,a.swiper=e.data.data.image,""!=e.data.data.video&&(a.video=e.data.data.video);case 5:case"end":return t.stop()}}),t)})))()},getlist:function(a){var t=this;return(0,s.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http(a.url,a.params);case 2:i=e.sent,t.list=t.list.concat(i.data.data);case 4:case"end":return e.stop()}}),e)})))()},getSeach:function(a){var t=this;return(0,s.default)((0,n.default)().mark((function e(){var i;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http(a);case 2:i=e.sent,t.days=i.data.data.search_day,t.lvlist=i.data.data.search_difficulty,t.moenylist=i.data.data.search_price,t.staticlist=i.data.data.search_status,t.addresslist=i.data.data.search_bourn,t.laberlist=i.data.data.search_label,t.label=i.data.data.search_label;case 10:case"end":return e.stop()}}),e)})))()},reset:function(){this.lvcurry=null,this.addcurry=null,this.daycurry=null,this.moneycurry=null,this.statecurry=null,this.labelcurry=null},open:function(){},close:function(){this.isShow=!this.isShow},todays:function(a,t){if(t==this.daycurry)return this.daycurry=null,this.search_min_day="",this.search_max_day="",!1;this.daycurry=t,this.search_min_day=a.min,this.search_max_day=a.max},tolabel:function(a,t){if(t==this.labelcurry)return this.labelcurry=null,this.search_label="",!1;this.labelcurry=t,this.search_label=a.name},tolv:function(a,t){if(t==this.lvcurry)return this.lvcurry=null,this.search_difficulty="",!1;this.lvcurry=t,this.search_difficulty=a.name},tomoney:function(a,t){if(t==this.moneycurry)return this.moneycurry=null,this.search_min_price="",this.search_max_price="",!1;this.moneycurry=t,this.search_min_price=a.min,this.search_max_price=a.max},tostate:function(a,t){if(t==this.statecurry)return this.statecurry=null,this.search_status="",!1;this.statecurry=t,this.search_status=t},toaddress:function(a,t){if(t==this.addcurry)return this.addcurry=null,this.search_bourn="",!1;this.addcurry=t,this.search_bourn=a.id},toDetails:function(a){this.$jump("/pages/index/Details/Details?id=","params",a)},submit:function(){var a=this;return(0,s.default)((0,n.default)().mark((function t(){var e;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.page=1,a.list=[],e={url:a.obj.url,params:{page:a.page,limit:10,search_min_price:a.search_min_price,search_max_price:a.search_max_price,search_min_day:a.search_min_day,search_max_day:a.search_max_day,search_difficulty:a.search_difficulty,search_status:a.search_status,search_bourn:a.search_bourn,search_label:a.search_label}},a.getlist(e),a.isShow=!1;case 5:case"end":return t.stop()}}),t)})))()}}};t.default=r},cad9:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAjRJREFUWEftlrtrFUEUxn/fP2BhZWNjKVpb+ijSaAQRhUSjBsEXKqIRFHwHVMREVPCFignGIKhYiIUg2tjYWKXQJrWNjZ2gn0yYvaw3d3fuyt5sk2kud+fMOb8z850zIxoeajg+iwCtHbC9B9jdwyOZkPSk3X8e4AOwrocADyTtLwMYAJ5Fgy/A8RpgXgJLgY/AZkk/CwHChO29wMNo9AkYkjT7PyC2Z4CVwDegX1L4nTfmVYHto8DNaPkOGJD0owqE7ffABiBkHDIPO9BxdCxD26eAK3HFa2CrpD/dQNieAgaj7aCk6bJ1hX3A9iXgbFw8JWlnCsD2WE47I5LC/9JR2ohsXwdORA/3JB0s8mb7JHAtzo9JGkkFD/PJTmj7DpAFvirpdLtj20PAZPw+LSk7giRDEiBWxwSwK+mtpNwqibCTse1Uo/odyq6o3OoEuCjpQubQ9ihwJpScpCVd7NI/Jl0dQTyGbAfaAYLwggC/S1oWbVuAhZnHJOoAuAUcAWYlrcgBnC+tf2kudh0A94F9wIykVREgeall3bEOgMfAMPBZ0pomNPAU2BFuPEnrm9DAc2A78FbSxiY08ArYAryQtG1BNABclvQrBnsDhMwnJVV+0lUR4WHgdk5k48AN4BHQB9yVdCh3BGsTZTinl64BouNNseT6c87DYyOUXesGtB0aUb19IJ+N7fDaORaeWrnvo5LO9awMCy6o1bENLwcOSPq6oABVg3Wyr6SBOgK2+1gE+As+NPEhldvsbAAAAABJRU5ErkJggg=="}}]);