export function Resize(v){
	wx.previewImage({
		urls: [v], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
		current: '', // 当前显示图片的http链接，默认是第一个
		success: function(res) {},
		fail: function(res) {},
		complete: function(res) {},
	})
}