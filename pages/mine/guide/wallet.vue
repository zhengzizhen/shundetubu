<template>
	<view class="wt_body">
		<view class="wt_ios dis_f jscb alitmc">
			<view class="dis_f flex_c">
				<text class="text">我的余额</text>
				<text class="money">￥ 273.02</text>
			</view>
			<p class="got" @click='toCashout()'>去提现</p>
		</view>
		<p class="pd30 title">提现记录</p>
		<view class="take dis_f alitmc jscb" v-for="(item,index) in list" :key="index">
			<view>
				<p>{{item.tit}}</p>
				<label>{{item.date}}</label>
			</view>
			<text>+{{item.money}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{tit:'领队工资',date:'2023-09-22 18:11',money:'229'},
					{tit:'领队工资',date:'2023-09-21 18:11',money:'121'},
					{tit:'报销项目',date:'2023-09-20 18:11',money:'100'}
				]
			}
		},
		methods: {
			toCashout(){
				uni.navigateTo({
					url:'/pages/retail/Cashout/Cashout'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wt_body{
		padding-top: 150rpx;
		.wt_ios{
			box-sizing: border-box;
			margin: 0rpx auto 40rpx;
			width: 690rpx;
			height: 286rpx;
			background: linear-gradient(0deg, #49CAA4 0%, #4EB6C9 100%);
			box-shadow: 0rpx 10rpx 7rpx 0rpx rgba(73,202,164,0.08);
			border-radius: 20rpx;
			padding:90rpx 30rpx;
		}
		.text{
			font-size: 24rpx;
			font-weight: 500;
			color: #FFFFFF;
		}
		.money{
			font-size: 60rpx;
			font-weight: bold;
			color: #FFFFFF;
		}
		.got{
			width: 138rpx;
			height: 62rpx;
			line-height: 62rpx;
			background: #FFFFFF;
			border-radius: 30rpx;
			color: #4CBDBC;
			text-align: center;
			font-size: 24rpx;
			font-weight: 500;
		}
	}
	.title{
		font-size: 32rpx;
		font-weight: bold;
		color: #000000;
	}
	.take{
		margin: 20rpx 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #E6E6E6;
		p{
			font-size: 28rpx;
			font-weight: 500;
			color: #000000;
		}
		label{
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}
		text{
			font-size: 30rpx;
			font-weight: 500;
			color: #FF4040;
		}
	}
</style>
