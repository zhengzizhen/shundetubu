<template>
	<view class="body pd30">
		<p class="ty_title dis_f"><label>全国</label> <u-icon color='#FFF' name="arrow-down-fill"></u-icon></p>
		<view class="dc_mod dis_f bor_r" v-for=" (item,index) in list" :key="index">
			<image src="@/static/index/zheng.jpg" mode=""></image>
			<view class="dc_god">
				<p>【亭可马里季】斯里兰卡纯玩9天</p>
				<text class="posw">3天</text>
				<view class="dc_latt dis_f">
					<text>03.18已满员</text>
					<label>04.02剩3名额</label>
					<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
				</view>
				<!-- <p class="title dis_f"><label>难度： 休闲</label><u-icon name="star" size='14'></u-icon></p> -->
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
				list:[1,2,3,4]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		padding-top: 490rpx;
		background-color: #2A755E;
		padding-bottom: 100rpx;
	}
	.ty_title{
		text-align: right;
		color: white;
		justify-content: flex-end;
		align-items: center;
		label{
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
			p{
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
			}

			label {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				margin-left: 10rpx;
				background-color: #F2AD5A;
			}

			p {
				font-size: 22rpx;
				align-items: center;
				margin-left: 10rpx;
			}
		}

		.title {
			margin: 10rpx 0 30rpx;
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
