import {
	getToken
} from '@/tools/getToken.js'

const Baseurl = 'http://yy.jyytkj.cn/api'


const request = async (url, data, methods) => {
	// 从本地存储获取token
	const token = getToken()
	// 拼接请求头，包括token验证
	const headers = {
		'Content-Type': 'application/json',
		token: token
	}
	if (token) {
		headers.Authorization = `Bearer ${token}`
	}
	if (!token) {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	// 设置默认请求方式为 POST
	const method = methods || 'POST'

	// 使用 try...catch 处理异常
	try {
		// 使用 await 等待请求结果
		const res = await uni.request({
			method: method,
			url: Baseurl + url,
			data: data || {},
			header: headers
		})

		// 判断请求结果状态码
		if (res.statusCode === 200) {
			// 返回请求结果
			if(res.data.code == 200){
				return res.data
			}
			if (res.data.code == 500) {
				console.log(res.data);
				return false
			}
		} else {
			// 抛出异常并在界面上显示错误提示
			uni.showToast({
				title: '请求错误',
				icon: 'none'
			})
			throw res.data
		}
	} catch (error) {
		// 抛出异常并在界面上显示错误提示
		uni.showToast({
			title: error.errMsg || '请求失败',
			icon: 'none'
		})
		throw error
	}
}

export default request