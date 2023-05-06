<template>
	<view>
		<view>
			<view class="pd30 album dis_f">
				<view :class="'c'+((index%16)+1)" class="pddb" v-for="(v,index) in list" :key="index">
					<image class="bor_r" :src="v" mode="" @click="clickImg(v,index)">
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
					'../../static/index/zheng.jpg',
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
				]
			}
		},
		onLoad() {
			this.getlist()
		},
		methods: {
			getlist() {
				
			},
			clickImg(v,index) {
				uni.previewImage({
					urls: this.list,
					current: index
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

	.album {
		align-items: center;
		flex-wrap: wrap;

		image {
			border-radius: 20rpx;
		}
	}

	.c1 {
		margin: 10rpx 0;
		width: 66%;
		height: 450rpx;
		text-align: center;

		image {
			width: 450rpx;
			height: 450rpx;
		}
	}

	.c2 {
		margin: 10rpx 0;
		margin-left: 10rpx;
		width: 210rpx;
		height: 450rpx;
		overflow: hidden;
		position: relative;
		overflow: hidden;
		border-radius: 20rpx;
		text-align: center;

		image {
			height: 450rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.c3,
	.c4,
	.c5,
	.c6,
	.c7,
	.c8 {
		margin: 10rpx 0;
		height: 210rpx;
		width: 33%;
		text-align: center;

		image {
			width: 210rpx;
			height: 210rpx;
		}
	}

	.c9 {
		margin: 10rpx 0;
		margin-left: 10rpx;
		width: 210rpx;
		height: 450rpx;
		overflow: hidden;
		position: relative;
		border-radius: 20rpx;
		text-align: center;

		image {
			height: 450rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.c10 {
		margin: 10rpx 0;
		width: 66%;
		height: 450rpx;
		text-align: center;
		margin-left: 16rpx;

		image {
			width: 450rpx;
			height: 450rpx;
		}
	}

	.c11,
	.c12,
	.c13,
	.c14,
	.c15,
	.c16 {
		margin: 10rpx 0;
		height: 210rpx;
		width: 33%;
		text-align: center;

		image {
			width: 210rpx;
			height: 210rpx;
		}
	}
</style>