import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
// 方法1（直接写）
const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
	    userinfo:null,
		text:1
    },
    getters: {
        // state的计算属性
        get1: state => {
            return state.text1+ 1
        },
        get2: (state, getters) => {
            //state ：可以访问数据
            //getters：访问其他函数，等同于 store.getters
            return getters.get1
        },
        getTodoById: (state) => (value) => {
            return state.text + value
        }
    },
    mutations: {
        //传递数值
        getuser(state, e) {
            state.userinfo = e
        },
		set_sign(state,e){
			state.userinfo.money += e
		},
		rename(state,e){ //更改姓名
			state.userinfo.nickname = e
		},
		reavatar(state,e){ //更改头像
			state.userinfo.avatar = e
		},
		resex(state,e){ //更改性别
			state.userinfo.sex = e
		},
		rebirthday(state,e){ //生日
			state.userinfo.birthday = e
		},
		real_status(state,e){ //实名
			state.userinfo.real_status = e
		},
		alipay_status(state,value){ //支付宝账号认证
			state.userinfo.alipay_status = value.state
			state.userinfo.alipay.alipay_account = value.user.account
			state.userinfo.alipay.alipay_username = value.user.username
		},
		bank_status(state,value){ //银行卡绑定
			state.userinfo.bank_status = 1
			state.userinfo.bank.bank_username = value.username
			state.userinfo.bank.bank_code = value.code
			state.userinfo.bank.bank_name = value.bank_name
			state.userinfo.bank.bank_username = value.subbank_name
		},
		changeLabel(state,value){
			state.userinfo.label_color = value
		},
		anonymity(state,value){
			state.userinfo.message_set.anonymity = value
		},
		attention_akela_dynamic(state,value){
			state.userinfo.message_set.attention_akela_dynamic = value
		},
		hide_trip_log(state,value){
			state.userinfo.message_set.hide_trip_log = value
		},
		new_trip(state,value){
			state.userinfo.message_set.new_trip = value
		},
		new_comment(state,value){
			state.userinfo.message_set.new_comment = value
		},
		coupon_out(state,value){
			state.userinfo.message_set.coupon_out = value
		},
		remove(state,value){
			state.userinfo = value
		}
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
        addCountAction (context , payload) {
            context.commit('add',payload)
        }
	}
})
export default store