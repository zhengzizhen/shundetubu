<template>
	<view>
		<view class="ie_nav dis_f">
			<view class="ie_left">
				<text>余额 (元)</text>
				<p>{{list.balance}}</p>
				<label>当前余额只展示已完成的订单佣金</label>
			</view>
			<view class="ie_right dis_f flex_c">
				<p @click='jupCase()'>立即提现</p>
				<text>满{{list.withdraw_full_set}}元以上可提现</text>
				<text>申请提现后{{list.withdraw_delayed_set}}个工作日到账</text>
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
			<view class="dis_f ie_cont" v-for="(v,i) in price" :key="i">
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
				contlist: [],
				tixianlist: [],
				list:[],//接口数据
				lists:[],//分销记录
				price:[],//佣金明细
				log:[],//提现明细
				page:1
			};
		},
		onLoad() {
			//获取分销数据
			this.getlist()
			//获取分销记录
			this.getprice()
			this.getprices()
		},
		methods: {
			async getlist(){
				const res = await this.$http('/distribution/price')
				this.list = res.data.data
			},
			async getprice(){
				this.page = 1
				const res = await this.$http('/distribution/log',{
					type:'佣金明细',
					page:this.page,
					limit:10
				})
				if(res.data.data.length<10){
					this.bottom = true
				}
				this.price = res.data.data
			},
			async getprices(){
				this.page = 1
				const res = await this.$http('/distribution/log',{
					type:'提现明细',
					page:this.page,
					limit:10
				})
				if(res.data.data.length<10){
					this.bottom = true
				}
				this.tixianlist = res.data.data
			},
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
			margin-left: 60rpx;
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