<template>
	<view class="ce_body pd30 pb20">
		<view class="ce_banner">
			<text>币圈</text>
			<p>2000</p>
		</view>
		
		<p class="title">币圈明细</p>
		
		<view class="content dis_f alitmc jscb" v-for="(item,index) in list" :key="index">
			<view class="left">
				<p>邀请好友</p>
				<text>2023-09-21 18:11</text>
			</view>
			<label>+19</label>
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
	.ce_body{
		padding-top: 30rpx;
		.ce_banner{
			width: 690rpx;
			height: 300rpx;
			box-sizing: border-box;
			background: linear-gradient(0deg, #49CAA4 0%, #49CAC5 100%);
			border-radius: 20rpx;
			padding-top: 100rpx;
			padding-left: 40rpx;
			text{
				font-size: 30rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
			p{
				margin-top: 40rpx;
				font-size: 60rpx;
				font-weight: bold;
				color: #FFFFFF;
				line-height: 15rpx;
			}
		}
	}
	.title{
		margin-top: 40rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #000000;
	}
	.content{
		margin: 20rpx 0 0;
		border-bottom: 1px solid #E6E6E6;
		padding-bottom: 20rpx;
		.left{
			p{
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}
			text{
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
		}
		label{
			font-size: 30rpx;
			font-weight: 500;
			color: #FF4040;
		}
	}

</style>
