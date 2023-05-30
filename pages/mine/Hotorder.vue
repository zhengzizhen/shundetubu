<template>
	<view class="cd_body">
		<view class="header">
			<u-tabs itemStyle="width:25%;padding-left: 15px; padding-right: 15px; height: 44px;" lineWidth="25"
				lineColor='#49CAA4' :list="menu" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		
		<view>
			<view @click="toHotorder(item.order_no)" class="content" v-for="(item,index) in list" :key="index" v-show="curry == 0">
				<view class="cont_header dis_f jscb alitmc">
					<p>订单编号：{{item.order_no}}</p>
					<text>已报名</text>
				</view>
				<view class="bot dis_f">
					<image :src="item.trip_master_image" mode=""></image>
					<view class="dis_f flex_c right">
						<p>{{item.title}}</p>
						<label>下单时间：{{item.created_at}}</label>
						<text>订单金额：￥{{item.all_price}}</text>
					</view>
				</view>
				<view class="bottom dis_f">
					<p @click.stop='toinchecken(item.order_no)'>活动签到</p>
					<p @click.stop = 'torebook(item.order_no)'>改签订单</p>
					<p @click.stop = 'torebook(item.order_no)'>取消报名</p>
				</view>
			</view>
		</view>
		
		<view>
			<view @click="toHotorder(item.order_no)"  class="content" v-for="(item,index) in list1" :key="index"  v-show="curry == 1">
				<view class="cont_header dis_f jscb alitmc">
					<p>订单编号：{{item.order_no}}</p>
					<text>已报名</text>
				</view>
				<view class="bot dis_f">
					<image :src="item.trip_master_image" mode=""></image>
					<view class="dis_f flex_c right">
						<p>{{item.title}}</p>
						<label>下单时间：{{item.created_at}}</label>
						<text>订单金额：￥{{item.all_price}}</text>
					</view>
				</view>
				<view class="bottom dis_f">
					<p>共享相册</p>
					<p @click='toactivity'>去评价</p>
				</view>
			</view>
		</view>
		
		<view>
			<view @click="toHotorder(item.order_no)" class="content" v-for="(item,index) in list1" :key="index"  v-show="curry == 2">
				<view class="cont_header dis_f jscb alitmc">
					<p>订单编号：{{item.order_no}}</p>
					<text>已报名</text>
				</view>
				<view class="bot dis_f">
					<image :src="item.trip_master_image" mode=""></image>
					<view class="dis_f flex_c right">
						<p>{{item.title}}</p>
						<label>下单时间：{{item.created_at}}</label>
						<text>订单金额：￥{{item.all_price}}</text>
					</view>
				</view>
				<view class="bottom dis_f">
					<p>取消成功</p>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				menu: [{
					name: '已报名',
				}, {
					name: '已结束',
				}, {
					name: '已退出',
				}],
				list1:[],
				list2:[],
				page:1,
				curry:0,
				bottom:false
			}
		},
		onLoad() {
			this.getlist(1) //已报名
			this.getlist1(2) //已结束
			this.getlist2(3) //已退出
		},
		onReachBottom() {
			if(this.bottom == true){
				return false
			}
			this.page += 1
			if(this.curry == 0){
				this.getlist(1)
			}else if(this.curry == 1){
				this.getlist1(2)
			}else if(this.curry == 2){
				this.getlist2(3)
			}
		},
		methods: {
			async getlist(status){
				const res = await this.$http('/trip/order/list',{
					page:this.page,
					limit:10,
					status
				})
				this.list = this.list.concat(res.data.data) 
				if(res.data.data.length<10){
					this.bottom = true
				}
			},
			async getlist1(status){
				const res = await this.$http('/trip/order/list',{
					page:this.page,
					limit:10,
					status
				})
				this.list1 = this.list1.concat(res.data.data) 
				if(res.data.data.length<10){
					this.bottom = true
				}
			},
			async getlist2(status){
				const res = await this.$http('/trip/order/list',{
					page:this.page,
					limit:10,
					status
				})
				this.list2 = this.list2.concat(res.data.data) 
				if(res.data.data.length<10){
					this.bottom = true
				}
			},
			change(item) {
				this.page = 1
				this.bottom = false
				this.curry = item.index
			},
			toactivity(){
				this.$jump('./menu/activity')
			},
			async toinchecken(v){
				uni.showLoading({
					title:'签到中'
				})
				const res = this.$http('/trip/order/sign',{
					order_no:v
				})
				uni.hideLoading()
				uni.$u.toast(res.data.msg)
			},
			torebook(v){
				this.$jump('./rebook?id=','params',v)
			},
			toHotorder(v){
				this.$jump('./Hotorder/Hotorder?id=','params',v)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cd_body {
		background-color: #fafafa;
		height: 1500rpx;

		.header {
			width: 100%;
			background-color: white;
		}
	}

	.content {
		width: 690rpx;
		height: 408rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 20rpx 30rpx;
		padding: 30rpx;
		box-sizing: border-box;

		.cont_header {
			border-bottom: 1px solid #e6e6e6;
			padding-bottom: 20rpx;

			p {
				font-size: 30rpx;
				font-weight: 500;
				color: #666666;
			}

			text {
				font-size: 28rpx;
				font-weight: 500;
				color: #49CAA4;
			}
			.red{
				color: #FF4040;
			}
			.dis{
				color: #999999;
			}
		}

		.bot {
			margin-top: 20rpx;

			image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 20rpx;
			}

			.right {
				margin-left: 20rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;

				label {
					font-size: 26rpx;
					font-weight: 500;
					color: #999999;
					margin: 10rpx 0;
				}

				text {
					margin-top: 50rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #000000;
				}
			}
		}

		.bottom {
			margin: 30rpx 0;
			justify-content: flex-end;

			p {
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