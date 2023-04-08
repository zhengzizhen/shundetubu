<template>
	<view>
		<view @click="goordermsg()" class="ms_logo dis_f">
			<image src="../../../static/image/meassage/order.jpg" mode=""></image>
			<view class="ws dis_f flex_c">
				<view class="dis_f msgtop">
					<p>订单</p>
				</view>
				<view class="dis_f msgbottm">
					<p>暂无消息</p>
				</view>
			</view>
		</view>
		
		<view @click="goRecommend()" class="ms_logo dis_f">
			<image src="../../../static/image/meassage/shoucang.jpg" mode=""></image>
			<view class="ws dis_f flex_c">
				<view class="dis_f msgtop">
					<p>精选推荐</p>
					<text>3月18日</text>
				</view>
				<view class="dis_f msgbottm">
					<p>房车纵横计划-南疆，驰骋帕米尔之...</p>
					<text>12</text>
				</view>
			</view>
		</view>
		
		<view class="ms_logo dis_f" @click='goHot()'>
			<image src="../../../static/image/meassage/hot.jpg" mode=""></image>
			<view class="ws dis_f flex_c">
				<view class="dis_f msgtop">
					<p>每周热门</p>
					<text>3月18日</text>
				</view>
				<view class="dis_f msgbottm">
					<p>五一连休五天，请3休5，你别不信就....</p>
					<text>111</text>
				</view>
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
			goHot(){
				this.$jump('./hot')
			},
			goRecommend(){
				this.$jump('./recommend')
			},
			goordermsg(){
				this.$jump('./ordermsg')
			}
		}
	}
</script>

<style lang="scss" scoped>
.ms_logo{
	padding: 30rpx;
	border-bottom: 2rpx solid #f3f3f3;
	image{
		width: 82rpx;
		height: 82rpx;
	}
	.ws{
		width: 85%;
	}
	.msgtop{
		margin-left: 30rpx;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		p{
			font-size: 30rpx;
		}
		text{
			font-size: 24rpx;
			font-weight: 500;
			color: #666666;
		}
	}
	.msgbottm{
		margin-left: 30rpx;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin-top: 10rpx;
		p{
			font-size: 24rpx;
			font-weight: 500;
			color: #666666;
		}
		text{
			font-size: 22rpx;
			font-weight: 500;
			color: white;
			background-color: red;
			padding:5rpx;
			border-radius: 50rpx;
		}
	}
}
</style>
