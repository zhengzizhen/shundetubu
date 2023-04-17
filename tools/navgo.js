export function jump(url, type, params) {

	switch (type) {
		case 'params': //保留当前页面，跳转到应用内的某个页面
			uni.navigateTo({
				url: url + params
			});
			break;
		case 'navigate': //保留当前页面，跳转到应用内的某个页面
			uni.navigateTo({
				url: url
			});
			break;
		case 'redirect': //关闭当前页面, 跳转到应用内的某个页面
			uni.redirectTo({
				url: url
			});
			break;
		case 'reLaunch': //关闭所有页面, 打开到应用内的某个页面
			uni.reLaunch({
				url: url
			});
			break;
		case 'switch': //跳转到tabbar页面
			uni.switchTab({
				url: url
			});
			break;
		case 'web':
			uni.navigateTo({ //跳转外部链接
				url: '/pages/web/index?link=' + encodeURIComponent(JSON.stringify(url))
			});
			break;
		default: //默认方法
			uni.navigateTo({
				url: url
			});
			break;
			// 传递多个参数
			// uni.navigateTo({
			// 	url: '/pages/index/index?myData=' + encodeURIComponent(JSON.stringify(row))
			// })
	}
}