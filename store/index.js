import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
// 方法1（直接写）
const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
	    name: '一个阳光明媚的人',
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
		//相当于同步的操作
        //传递数值
        add(state, n) {
            state.text1 += n
        },
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
        addCountAction (context , payload) {
            context.commit('add',payload)
        }
	}
})
export default store