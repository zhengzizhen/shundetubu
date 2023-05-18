const BASE_URL = 'https://www.tbq11.com/api';


export const myRequest = (url, datas, methods) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token')
		uni.request({
			url: BASE_URL + url,
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				// 'Content-Type': 'multipart/form-data',
				'token': token
			},
			method: methods || 'POST',
			data: datas || {},
			success: (res) => {
				if(res.data.code == 401){
					uni.reLaunch({
						url:'/pages/login/otherLogin'
					})
					return uni.showToast({
						title: res.data.msg,
						icon: 'none'
					});
				}
				if (res.data.code != 200) {
					if(url == '/trip/detail'&&res.data.code === 500){
						setTimeout(()=>{
							uni.navigateBack()
						},500)
					}
					return uni.showToast({
						title: res.data.msg,
						icon: 'none'
					});
				}
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title: '请求接口失败(可能服务器没有开)',
					icon: 'fail'
				})
				reject(err)
			}
		})
	})
}