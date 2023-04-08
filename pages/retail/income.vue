<template>
	<view>
		<view class="ie_nav dis_f">
			<view class="ie_left">
				<text>余额 (元)</text>
				<p>9.10</p>
				<label>当前余额只展示已完成的订单佣金</label>
			</view>
			<view class="ie_right dis_f flex_c">
				<p @click='jupCase()'>立即提现</p>
				<text>满100元以上可提现</text>
				<text>申请提现后7个工作日到账</text>
			</view>
		</view>

		<view class="tabs">
			<u-tabs itemStyle="width:40%;padding-left: 15px; padding-right: 15px; height: 44px;" lineWidth="60"
				lineColor='#49CAA4' :list="list1" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		<!-- 佣金明细 -->
		<view v-show="isShow">
			<view class="dis_f ie_cont">
				<p class="date"> 订单时间</p>
				<p>订单金额</p>
				<p>分销佣金</p>
				<p>余额</p>
			</view>
			<view class="dis_f ie_cont" v-for="(v,i) in contlist" :key="i">
				<p class="date">{{v.date}}</p>
				<p>{{v.ordermoney}}</p>
				<p  class="green">{{v.retaiilmoney}}</p>
				<p>{{v.howmoney}}</p>
			</view>
		</view>

		<!-- 提现明细 -->
		<view v-show="!isShow">
			<view class="dis_f ie_cont">
				<p> 提现时间</p>
				<p>提现金额</p>
			</view>
			<view class="dis_f ie_cont" v-for="(v,i) in tixianlist" :key="i">
				<p>{{v.date}}</p>
				<p  class="green">{{v.money}}</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				list1: [{
					name: '佣金明细',
				}, {
					name: '提现明细',
				}],
				contlist: [{
						date: '2022-10-10 18:12',
						ordermoney: 261,
						retaiilmoney: 9.1,
						howmoney: 9.1
					},
					{
						date: '2022-10-10 18:12',
						ordermoney: 261,
						retaiilmoney: 9.1,
						howmoney: 9.1
					},
				],
				tixianlist: [{
						date: '2023-04-05 11:53',
						money: 9.9
					},
					{
						date: '2023-04-05 11:53',
						money: 9.9
					}
				]
			};

		},
		methods: {
			jupCase(){
				this.$jump('./Cashout/Cashout')
			},
			change(e){
				if(e.index == 0){
					this.isShow = true
					return false
				}else if(e.index == 1){
					this.isShow = false
					return false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ie_nav {
		height: 288rpx;
		background-color: #49CAA4;
		box-sizing: border-box;
		padding: 60rpx 0rpx 0 0rpx;

		.ie_left {
			margin-left: 80rpx;
			// width: 400rpx;
			color: white;

			p {
				font-size: 72rpx;
				font-weight: bold;
				margin: 10rpx 0;
			}

			label {
				font-size: 22rpx;
			}
		}

		.ie_right {
			color: white;
			text-align: center;
			align-items: center;
			margin-left: 20rpx;

			p {
				width: 200rpx;
				padding: 20rpx 10rpx;
				border: 2rpx solid #FFFFFF;
				border-radius: 50rpx;
				margin-bottom: 20rpx;
			}

			text {
				font-size: 22rpx;
				display: block;
				text-align: center;
			}
		}
	}

	.tabs {
		width: 100%;
		height: 80rpx;
	}

	.ie_cont {
		text-align: center;
		height: 50rpx;
		margin: 30rpx;
		border-bottom: 1px solid #E6E6E6;

		p {
			flex: 1;
			font-size: 24rpx;
		}

		.date {
			flex: 1.5;
		}

	}
	.green{
		color: #49CAA4;
	}
</style>