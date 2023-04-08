<template>
	<view class="body pd30">
		<p class="title">3月29日</p>
		<view class="banner bor_r">
			<view class=" txt dis_f">
				<image src="@/static/image/trends/qq.jpg" mode=""></image>
				<p>你购买的【亭可马里季】斯里兰卡纯 玩9天 已到出发时间</p>
			</view>
			<view class="dis_f m30">
				<p>查看详情</p>
				<u-icon name="arrow-right" color="#666666" size='12'></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 20rpx;
		background-color: #FAFAFA;
		height: 1500rpx;
	}

	.title {
		padding: 5rpx;
		width: 104rpx;
		height: 24rpx;
		text-align: center;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin: 0 auto;
		background: #DEDFE1;
		line-height: 30rpx;
	}
	.txt{
		border-bottom: 1px solid #E6E6E6;
		padding-bottom: 20rpx;
	}
	.banner{
		margin-top: 30rpx;
		background-color: white;
		padding:  40rpx 20rpx 20rpx;
		image{
			width: 130rpx;
			height: 130rpx;
			border-radius: 20rpx;
		}
		p{
			flex: 1;
			margin-left: 20rpx;
		}
	}
	.m30{
		margin-top: 20rpx;
	}
</style>
