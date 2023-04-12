<template>
	<view class="be_body pd30">
		<view class="be_header">
			<image src="@/static/image/trends/qq.jpg" mode=""></image>
			<p>青青</p>
		</view>

		<p class="ge_tit pd30">徽章墙</p>

		<view class="pd30 m20 dis_f flexw">
			<view class="content dis_f flex_c alitmc" v-for="(item,index) in list" :key="index">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>7周年</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5,6,8,7,9,1,2,3]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.be_body {
		height: 1500rpx;
		background: #272228;
		padding-top: 10rpx;

		.be_header {
			width: 100%;
			text-align: center;
			margin: 50rpx auto;

			image {
				width: 132rpx;
				height: 132rpx;
				border-radius: 50%;
			}

			p {
				font-size: 36rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}

	.ge_tit {
		margin-top: 120rpx;
		color: white;
		font-size: 34rpx;
		font-weight: 500;
		color: #fff;
	}

	.content {
		width: 33%;
		text-align: center;
		margin: 30rpx 0;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}

		p {
			color: #FFFFFF;
			margin: 10rpx 0;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
		}

	}
</style>