
export default function request(url, method, params) {
	// 显示Loading
	uni.showLoading('加载中');
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://yy.jyytkj.cn/api' + url,
			method: method || 'POST',
			data: params || {},
			header: {
				'Content-Type': 'application/json'
			},
			success: (res) => {
				// 隐藏Loading
				uni.hideLoading();
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					uni.showToast('网络请求失败，请稍后重试');
					reject(res);
				}
			},
			fail: (err) => {
				// 隐藏Loading
				uni.hideLoading();
				uni.showToast('网络请求失败，请稍后重试');
				reject(err);
			}
		});
	});
}