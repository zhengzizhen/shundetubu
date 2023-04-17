<template>
	<view class="cd_body">
		<view class="header">
			<u-tabs itemStyle="width:14%;height: 44px;" lineWidth="25"
				lineColor='#49CAA4' :list="list1" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		<view class="content" v-for="(item,index) in list" :key="index">
			<view class="cont_header dis_f jscb alitmc">
				<p>订单编号：8269686684414</p>
				<text>已报名</text>
			</view>
			<view class="bot dis_f">
				<image src="@/static/index/zheng.jpg" mode=""></image>
				<view class="dis_f flex_c right">
					<p>【亭可马里季】斯里兰卡纯玩9天</p>
					<label>下单时间：2023-02-20  18:19</label>
					<text>订单金额：￥125</text>
				</view>
			</view>
			<view class="bottom dis_f">
				<p>活动签到</p>
				<p>改签订单</p>
				<p>取消报名</p>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3],
				list1: [{
					name: '全部',
				}, {
					name: '待支付',
				}, {
					name: '待发货',
				},{
					name: '待收货',
				}, {
					name: '已完成',
				}, {
					name: '已取消',
				}],
			}
		},
		methods: {
			change(item) {
				if(item.index === 0){
					this.isShow1 = true
					this.isShow2 = true
				}else if(item.index === 1){
					this.isShow1 = true
					this.isShow2 = false
				}else if(item.index === 2){
					this.isShow1 = false
					this.isShow2 = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cd_body{
		background-color: #fafafa;
		height: 1500rpx;
		.header{
			width: 100%;
			background-color: white;
		}
	}
	.content{
		width: 690rpx;
		height: 408rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 20rpx 30rpx;
		padding: 30rpx;
		box-sizing: border-box;
		.cont_header{
			border-bottom: 1px solid #e6e6e6;
			padding-bottom: 20rpx;
			p{
				font-size: 30rpx;
				font-weight: 500;
				color: #666666;
			}
			text{
				font-size: 28rpx;
				font-weight: 500;
				color: #49CAA4;
			}
		}
		.bot{
			margin-top: 20rpx;
			image{
				width: 180rpx;
				height: 180rpx;
				border-radius: 20rpx;
			}
			.right{
				margin-left: 20rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
				label{
					font-size: 26rpx;
					font-weight: 500;
					color: #999999;
					margin: 10rpx 0;
				}
				text{
					margin-top: 50rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #000000;
				}
			}
		}
		.bottom{
			margin: 30rpx 0;
			justify-content: flex-end;
			p{
				width: 148rpx;
				height: 54rpx;
				line-height: 54rpx;
				text-align: center;
				background: #FFFFFF;
				border: 1px solid #999999;
				border-radius: 31rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #999999;
				margin-left: 30rpx;
			}
		}
	}
</style>