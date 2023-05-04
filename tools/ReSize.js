export function Resize(v,index) {
	uni.previewImage({
		urls: v,
		current: index
	})
}