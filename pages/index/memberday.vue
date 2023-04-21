<template>
	<view class="body pd30">

		<u-tabs :list="list1" @click="click" lineColor='#ffffff' :activeStyle="{
        color: '#ffffff',
    }" :inactiveStyle="{
        color: '#ffffff',
    }" itemStyle="width:130rpx;height: 34px;"></u-tabs>
		<view class="dc_mod dis_f bor_r" v-for=" (item,index) in list" :key="index">
			<image src="@/static/index/zheng.jpg" mode=""></image>
			<view class="dc_god">
				<p>【亭可马里季】斯里兰卡纯玩9天</p>
				<text class="posw">3天</text>
				<view class="dc_latt dis_f">
					<label>04.02剩3名额</label>
					<text>03.18已满员</text>
					<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
				</view>
				<p class="title dis_f">
					<label>出入西藏首选</label>
					<label>限时40天</label>
				</p>
				<view class="dc_span dis_f">
					<text>￥888</text>
					<label>4.91分丨291人去过</label>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 2, 3, 4],
				list1: [{
					name: '3月',
				}, {
					name: '4月',
				}, {
					name: '5月',
				}, {
					name: '6月',
				}]
			}
		},
		methods: {
			click(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sky {
		p {
			display: inline-block;
			border-radius: 32rpx;
			padding: 10rpx 30rpx;
			background: rgba(255, 255, 255, 0.4);
			border: 1px solid rgba(255, 255, 255, 0.4);
			color: white;
			font-size: 28rpx;
			margin-right: 20rpx;
		}
	}

	.body {
		padding-top: 490rpx;
		background-color: #35C77C;
		padding-bottom: 100rpx;
	}

	.ty_title {
		text-align: right;
		color: white;
		justify-content: flex-end;
		align-items: center;

		label {
			display: block;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-right: 10rpx;
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 20rpx 20rpx;
		margin: 20rpx 0;

		image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;

			p {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}
		}

		.posw {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
			width: 80rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #49CAA4;
			z-index: 2;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			text-align: center;
			color: white;
			font-size: 22rpx;

		}

		.dc_latt {
			margin-top: 10rpx;

			text {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #FFA1AD;
				margin-left: 10rpx;
			}

			label {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #F2AD5A;
			}

			p {
				font-size: 22rpx;
				align-items: center;
				margin-left: 10rpx;
			}
		}

		.title {
			margin: 20rpx 0 20rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			align-items: center;

			label {
				display: block;
				margin-right: 10rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #E49332;
				background: #FFECD6;
				line-height: 36rpx;
				padding: 2rpx 15rpx;
			}
		}
	}

	.dc_span {
		justify-content: space-between;
		align-items: center;

		label {
			color: #999999;
			font-size: 24rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}
</style>