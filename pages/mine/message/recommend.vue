<template>
	<view class="body pd30">
		<view class="m30" v-for="(v,i) in list" :key="i">
			<p class="title">3月29日</p>
			<view class="cont">
				<image class="banner" src="@/static/as/changs.jpg" mode=""></image>
				<view class="txt">
					<p>房车纵横计划·南疆，驰骋帕米尔之春!</p>
					<text>高品质房车体验+绝色公路旅行，6天舒适度、自由度、纵深度拉满!特别安排白沙湖下午茶&杏花村房车露营，资深领队+专业司机全程带玩</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2]
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
	.cont{
		border-radius: 20rpx;
		margin-top: 30rpx;
		background-color: white;
		.banner{
			border-radius: 20rpx 20rpx 0 0;
			width: 100%;
			height: 300rpx;
		}
	}
	.txt{
		padding: 20rpx;
		p{
			color: #222222;
		}
		text{
			font-size: 24rpx;
			color: #666666;
		}
	}
	.m30{
		margin-top: 40rpx;
	}
</style>