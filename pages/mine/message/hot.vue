<template>
	<view class="body pd30">
		<p class="title">3月29日</p>
		
		<view class="cont">
			<image @click="todeil" class="banner" src="@/static/as/changs.jpg" mode=""></image>
			<view class="txt dis_f" v-for="(item,index) in list" @click="todeil">
				<p>房车纵横计划·南疆，驰骋帕米尔 之春!我愿称之为“马尔地阿福”</p>
				<image src="@/static/index/zheng.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5,6,7]
			}
		},
		methods: {
			todeil(){
				this.$jump('./deil')
			}
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
		height: 34rpx;
		text-align: center;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin: 0 auto;
		background: #DEDFE1;
		line-height: 34rpx;
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
		.txt{
			margin: 20rpx 0;
			padding: 0 20rpx;
			align-items: center;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #e6e6e6;
			justify-content: space-between;
			font-size: 30rpx;
			p{
				width:432rpx;
			}
			image{
				width: 108rpx;
				height: 108rpx;
				border-radius: 20rpx;
			}
		}
		.txt:last-of-type{
			border-bottom: none;
		}
	}
	
</style>