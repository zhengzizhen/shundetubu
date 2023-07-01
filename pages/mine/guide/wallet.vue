<template>
	<view class="wt_body">
		<view class="wt_ios dis_f jscb alitmc">
			<view class="dis_f flex_c">
				<text class="text">我的余额</text>
				<text class="money">￥ {{money}}</text>
			</view>
			<p class="got" @click='toCashout()'>去提现</p>
		</view>
		<p class="pd30 title">提现记录</p>
		<view class="take dis_f alitmc jscb" v-for="(item,index) in list" :key="index">
			<view>
				<p>{{item.fund_type}}</p>
				<label>{{item.created_at}}</label>
			</view>
			<text>{{item.number}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:null,
				list:[]
			}
		},
		onLoad(option) {
			this.money = option.money
			this.getlist()
		},
		methods: {
			async getlist(){
				const res = await this.$http('/akela/fund/log',{
					page:1,
					limit:10
				})
				this.list = res.data.data
			},
			toCashout(){
				uni.navigateTo({
					url:'./Casuh?money='+ this.money
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
