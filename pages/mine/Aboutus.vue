<template>
	<view class="pd30 dis_f flex_c">
		<image :src="image" mode=""></image>
		<view style="margin: 20rpx 0;">
			<text style="color: #999;font-size: 26rpx;text-align: center;display: block;">{{created_at}}</text>
		</view>
		<view class="u-content" style="margin-top: 40rpx;">
			<u-parse :content="content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				created_at:'',
				title:'',
				image:''
			}
		},
		onLoad() {
			this.getlist()
		},
		methods: {
			async getlist() {
				const res = await this.$http('/sys/article/detail', {
					id: 10
				})
				this.content = res.data.data.content
				uni.setNavigationBarTitle({
					title: res.data.data.title
				})
				this.title = res.data.data.title
				this.created_at = res.data.data.created_at
				this.image = res.data.data.image
			}
		}
	}
</script>

<style lang="scss" scoped>
image{
	width: 260rpx;
	height: 260rpx;
	border-radius: 20rpx;
	margin: 20rpx auto;
}
</style>