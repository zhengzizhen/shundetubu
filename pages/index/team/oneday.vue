<template>
	<view class="oy_body">
		<view class="oy_cont bor_r" v-for="(item,index) in list" :key="index">
			<image src="@/static/index/chang.jpg" mode=""></image>
			<p class="tit">【亭可马里季】斯里兰卡纯玩9天</p>
			<view class="oy_location dis_f jscb">
				<view class="left dis_f alitmc ">
					<image src="@/static/image/team/location.png" mode=""></image>
					<label>安徽·黄山 2023-01-12 出发</label>
				</view>
				<view class="right">
					<label>￥888人</label><text>起</text>
				</view>
			</view>
			
			<view class="oy_tos dis_f alitmc jscb">
				<view class="tosimg">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<image src="@/static/image/trends/wxx.jpg" mode=""></image>
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				</view>
				<p>18919人去过</p>
				<button>查看详情</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.oy_body {
		background-color: #18ACB6;
		padding: 392rpx 30rpx 100rpx;

	}

	.oy_cont {
		margin: 20rpx 0;
		height: 570rpx;
		background-color: white;

		image {
			width: 100%;
			height: 340rpx;
			border-radius: 20rpx 20rpx 0 0;
		}

		.tit {
			margin-top: 20rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		.oy_location {
			padding: 0 20rpx;

			image {
				width: 27rpx;
				height: 27rpx;
			}

			.left {
				label {
					font-size: 24rpx;
					font-weight: 500;
					color: #999999;
					margin-left: 5rpx;
				}
			}

			.right {
				label {
					font-size: 28rpx;
					color: #FF4040;
				}
				text{
					font-size: 22rpx;
					color: #999;
				}
			}
		}
	}
	.oy_tos{
		margin-top: 20rpx;
		padding: 0 10rpx;
		image{
			width: 65rpx;
			height: 64rpx;
			border-radius: 50%;
		}
		.tosimg{
			width: 200rpx;
			image{
				margin-left: -20rpx;
			}
			image:first-child{
				margin-left: 0 !important;
			}
		}
		p{
			width: 270rpx;
			font-size: 24rpx;
			margin-left: 10rpx;
			font-weight: 500;
			color: #999999;
		}
		button{
			width: 182rpx;
			height: 64rpx;
			line-height: 64rpx;
			background: #49CAA4;
			border-radius: 32rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
		}
	}
	button{
		font-family: 'PF';
	}
</style>