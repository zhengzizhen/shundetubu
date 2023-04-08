<template>
	<view>
		<view>
			<view class="pd30 album dis_f">
				<view class="pddb" v-for="(v,index) in list" :key="index">
					<image :class="'c'+((index%16)+1)" :src="v" mode="" @click="clickImg(v)">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/zheng.jpg',
					'../../static/index/one.jpg',
					'../../static/index/one.jpg',
				]
			}
		},
		onLoad() {

		},
		methods: {
			clickImg(v) {
				wx.previewImage({
					urls: [v], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: '', // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.album {
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		image {
			border-radius: 20rpx;
		}
	}
	.c1 {
		margin: 10rpx 0;
		width: 420rpx;
		height: 420rpx;
	}
	.c2 {
		margin: 10rpx 0;
		width: 210rpx;
		height: 420rpx;
	}
	.c3,
	.c4,
	.c5,
	.c6,
	.c7,
	.c8 {
		margin: 10rpx 0;
		width: 210rpx;
		height: 210rpx;
	}
	.c9 {
		margin: 10rpx 0;
		width: 210rpx;
		height: 420rpx;
	}

	.c10 {
		margin: 10rpx 0;
		width: 420rpx;
		height: 420rpx;
	}

	.c11,
	.c12,
	.c13,
	.c14,
	.c15,
	.c16 {
		margin: 10rpx 0;
		width: 210rpx;
		height: 210rpx;
	}
</style>