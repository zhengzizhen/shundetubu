<template>
	<view class="cd_body">
		<view class="header">
			<u-tabs itemStyle="width:25%;padding-left: 15px; padding-right: 15px; height: 44px;" lineWidth="25"
				lineColor='#49CAA4' :list="menu" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		
		<view>
			<view @click="toHotorder" class="content" v-for="(item,index) in list1" :key="index" v-if="item.state == 0">
				<view class="cont_header dis_f jscb alitmc">
					<p>订单编号：{{item.id}}</p>
					<text>已报名</text>
				</view>
				<view class="bot dis_f">
					<image src="@/static/index/zheng.jpg" mode=""></image>
					<view class="dis_f flex_c right">
						<p>{{item.title}}</p>
						<label>下单时间：{{item.date}}</label>
						<text>订单金额：￥{{item.money}}</text>
					</view>
				</view>
				<view class="bottom dis_f">
					<p @click.stop='toinchecken'>活动签到</p>
					<p @click.stop = 'torebook'>改签订单</p>
					<p>取消报名</p>
				</view>
			</view>
		</view>
		
		<view>
			<view class="content" v-for="(item,index) in list1" :key="index" v-show="item.state == 1">
				<view class="cont_header dis_f jscb alitmc">
					<p>订单编号：{{item.id}}</p>
					<text class="red">已结束</text>
				</view>
				<view class="bot dis_f">
					<image src="@/static/index/zheng.jpg" mode=""></image>
					<view class="dis_f flex_c right">
						<p>{{item.title}}</p>
						<label>下单时间：{{item.date}}</label>
						<text>订单金额：￥{{item.money}}</text>
					</view>
				</view>
				<view class="bottom dis_f">
					<p>共享相册</p>
					<p @click='toactivity'>去评价</p>
				</view>
			</view>
		</view>
		
		<view>
			<view class="content" v-for="(item,index) in list1" :key="index" v-if="item.state == 2">
				<view class="cont_header dis_f jscb alitmc">
					<p>订单编号：{{item.id}}</p>
					<text class="dis">已退出</text>
				</view>
				<view class="bot dis_f">
					<image src="@/static/index/zheng.jpg" mode=""></image>
					<view class="dis_f flex_c right">
						<p>{{item.title}}</p>
						<label>下单时间：{{item.date}}</label>
						<text>订单金额：￥{{item.money}}</text>
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
				list: [{
					id: 8269685454554,
					state:0,
					title:'【亭可马里季】斯里兰卡纯玩9天',
					date:'2023-02-20 18:19',
					money:'125',
				},{
					id: 8269685454554,
					state:0,
					title:'【亭可马里季】斯里兰卡纯玩9天',
					date:'2023-02-20 18:19',
					money:'125',
				},
				{
					id: 9448685454554,
					state:1,
					title:'芜湖大司马',
					date:'2023-04-05 18:54',
					money:'999',
				},{
					id: 4858685454554,
					state:2,
					title:'慢慢的变呆',
					date:'2023-06-07 20:19',
					money:'666',
				},
				{
					id: 4858685454554,
					state:2,
					title:'慢慢的变呆',
					date:'2023-06-07 20:19',
					money:'666',
				}
				],
				menu: [{
					name: '已报名',
				}, {
					name: '已结束',
				}, {
					name: '已退出',
				}],
				list1:[],
			}
		},
		onLoad() {
			let arr = {index:0}
			this.change(arr)
		},
		methods: {
			change(item) {
				if (item.index === 0) {
					this.list1 = []
					this.list.forEach((item,index)=>{
						if(item.state == 0){
							this.list1.push(item)
						}
					})
				} else if (item.index === 1) {
					this.list1 = []
					this.list.forEach((item,index)=>{
						if(item.state == 1){
							this.list1.push(item)
							console.log(item);
						}
					})
				} else if (item.index === 2) {
					this.list1 = []
					this.list.forEach((item,index)=>{
						if(item.state == 2){
							this.list1.push(item)
						}
					})
				}
			},
			toactivity(){
				this.$jump('./menu/activity')
			},
			toinchecken(){
				this.$jump('./inchecken')
			},
			torebook(){
				this.$jump('./rebook')
			},
			toHotorder(){
				this.$jump('./Hotorder/Hotorder')
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