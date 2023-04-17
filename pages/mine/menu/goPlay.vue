<template>
	<view class="body pd30">
		<view class="header bor_r dis_f jscb pd30">
			<p>请设置收货地址</p>
			<u-icon color='#666666' name="arrow-right"></u-icon>
		</view>
		
		<view class="content dis_f">
			<image class="bor_r" src="@/static/index/zheng.jpg" mode=""></image>
			<view class="dis_f flex_c ml20">
				<p class="title">铝合金外锁登山杖，不走寻常路</p>
				<label>绿色</label>
				<p class="bottom dis_f jscb">
					<text class="red">￥78.00</text>
					<text>×1</text>
				</p>
			</view>
		</view>
		
		<view class="coslp bor_r">
			<view class="border dis_f jscb">
				<p>商品价格</p>
				<text>￥78.00</text>
			</view>
			<view class="border dis_f jscb">
				<p>运费</p>
				<text>￥0</text>
			</view>
			<view class="border dis_f jscb">
				<p>实付金额</p>
				<text>￥78.00</text>
			</view>
			<view class="border dis_f noborder">
				<p>订单备注</p>
				<input type="text" placeholder="备注一下">
			</view>
		</view>
		
		<view class="header bor_r dis_f jscb pd30 m20 alitmc">
			<p>微信支付</p>
			<image @click="isShow = !isShow" v-show="!isShow" src="@/static/image/mine/true.png" mode=""></image>
			<image @click="isShow = !isShow" v-show="isShow" src="@/static/image/mine/false.png" mode=""></image>
		</view>
		
		<view class="fixed">
			<view class="pd30 dis_f alitmc jscb m20">
				<view class="dis_f alitmc">
					<label>含运费</label>
					<text>合计</text>
					<p class="red">￥78.00</p>
				</view>
				<p class="btn">支付</p>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.body{
	padding-top: 20rpx;
	height: 1500rpx;
	background-color: #FAFAFA;
	.header{
		height: 100rpx;
		line-height: 100rpx;
		background-color: white;
		image{
			width: 36rpx;
			height: 36rpx;
		}
	}
	.content{
		margin-top: 20rpx;
		padding: 30rpx;
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-sizing: border-box;
		image{
			width: 180rpx;
			height: 180rpx;
		}
		.title{
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}
		label{
			width: 62rpx;
			height: 32rpx;
			line-height: 32rpx;
			margin: 10rpx 0 60rpx;
			text-align: center;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			background: #F0F0F0;
			border-radius: 6rpx;
		}
		.bottom{
			.red{
				font-size: 30rpx;
				font-weight: 500;
				color: #FF4040;
			}
		}
	}
	.coslp{
		box-sizing: border-box;
		margin-top: 30rpx;
		padding:20rpx 30rpx;
		width: 100%;
		height: auto;
		background-color: white;
		.border{
			margin-top: 20rpx;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #E6E6E6;
			p{
				font-size: 30rpx;
			}
			text{
				font-size: 30rpx;
				color: #FF4040;
			}
			input{
				padding-left: 20rpx;
			}
		}
	}
}
.fixed{
	position: fixed;
	bottom: 0;
	right: 0;
	width: 750rpx;
	height: 166rpx;
	background: #FFFFFF;
	box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4,0,0,0.16);
	label{
		font-size: 24rpx;
		color: #666;
	}
	text{
		margin-left: 10rpx;
		font-size: 26rpx;
	}
	.red{
		font-size: 26rpx;
		color: #FF4040;
	}
	.btn{
		width: 242rpx;
		height: 80rpx;
		background: #49CAA4;
		border-radius: 40rpx;
		color: white;
		text-align: center;
		line-height: 80rpx;
		font-size: 30rpx;
	}
}
</style>
