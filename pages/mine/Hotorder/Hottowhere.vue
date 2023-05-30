<template>
	<view class="body">
		<view class="pd30 header">
			<view class=" dis_f jscb">
				<view class="left posir">
					<image src="@/static/image/mine/qunbanner1.png" mode=""></image>
					<view class="posi posia">
						<p>邀请朋友一同出行</p>
						<text>由你付费</text>
					</view>
				</view>
				<view class="right posir">
					<image src="@/static/image/mine/qunbanner.png" mode=""></image>
					<view class="posi posia">
						<p>活动咨询群</p>
						<text>点击进群</text>
					</view>
				</view>
			</view>
			<view class="dis_f jscb m20">
				<view class="bods dis_f flex_c jscc alitmc" @click="toCratic">
					<image src="@/static/image/mine/user.jpg" mode=""></image>
					<p>同行伙伴</p>
					<text>已报名{{trip.traveller_users_number}}人</text>
				</view>
				<view class="bods dis_f flex_c jscc alitmc" @click="goback">
					<image src="@/static/image/mine/order.jpg" mode=""></image>
					<p>订单详情</p>
					<text>点击查看</text>
				</view>
				<view class="bods dis_f flex_c jscc alitmc" @click="toconcat">
					<image src="@/static/image/mine/friend.jpg" mode=""></image>
					<p>紧急联系人</p>
					<text>点击查看</text>
				</view>
			</view>
		</view>

		<view class="headers">
			<u-tabs itemStyle="width:25%;padding-left: 15px; padding-right: 15px; height: 44px;" lineWidth="25"
				lineColor='#49CAA4' :list="menu" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>

		<view class="reday pd30" v-show="curry == 0">
			<p>订单信息 （共{{trip.trip_day}}天）</p>
			<view v-for="(item,index) in trip.trip_journey_content" :key="index">
				<p class="ftit">
					<label>{{item.day}} {{item.title}}</label>
				</p>
				<view class="dis_f" v-if="item.all!=null">
					<p class="lefts"></p>
					<view class="leftbor dis_f">
						<p class="dis"></p>
						<label>全天</label>
						<p class="content">{{item.all}}</p>
					</view>
				</view>
				<view class="" v-else>
					<view class="dis_f">
						<p class="lefts"></p>
						<view class="leftbor dis_f" v-if="item.am!=null">
							<p class="dis"></p>
							<label>早上</label>
							<p class="content">{{item.am}}</p>
						</view>
					</view>

					<view class="dis_f">
						<p class="lefts"></p>
						<view class="leftbor dis_f" v-if="item.noon!=null">
							<p class="dis"></p>
							<label>中午</label>
							<p class="content">{{item.noon}}</p>
						</view>
					</view>

					<view class="dis_f">
						<p class="lefts"></p>
						<view class="leftbor dis_f" v-if="item.pm!=null">
							<p class="dis"></p>
							<label>下午</label>
							<p class="content">{{item.pm}}</p>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="pd30" v-show="curry == 1">
			<u-parse :content="trip.trip_preparatory_content"></u-parse>
		</view>
		
		<view class="pd30" v-show="curry == 2">
			<u-parse :content="trip.cost_content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menu: [{
					name: '行程介绍',
				}, {
					name: '行前准备',
				}, {
					name: '费用说明',
				}],
				list: {},
				curry:0
			}
		},
		onLoad(option) {
			this.list = JSON.parse(option.obj)
			this.trip = this.list.trip
			console.log(this.list);
		},
		methods: {
			change(item) {
				if (item.index === 0) {
					this.curry = 0
				} else if (item.index === 1) {
					this.curry = 1
				} else if (item.index === 2) {
					this.curry = 2
				}
			},
			toCratic() {
				this.$jump('/pages/index/Details/Cratic?user=','params',JSON.stringify(this.trip.traveller_users))
			},
			toconcat() {
				this.$jump('./contact')
			},
			goback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		min-height: 1500rpx;
		height: auto;

		.header {
			padding-top: 50rpx;
			background-color: white;
			padding-bottom: 20rpx;

			.left {
				image {
					width: 454rpx;
					height: 210rpx;
				}

				.posi {
					top: 70rpx;
					left: 20rpx;

					p {
						font-size: 28rpx;
						font-weight: 500;
						color: #843F1E;
					}

					text {
						font-size: 26rpx;
						font-weight: 500;
						color: #F2AD5A;
					}
				}
			}

			.right {
				image {
					width: 217rpx;
					height: 210rpx;
				}

				.posi {
					top: 70rpx;
					left: 20rpx;

					p {
						font-size: 28rpx;
						font-weight: 500;
						color: #197F54;
					}

					text {
						font-size: 26rpx;
						font-weight: 500;
						color: #49CAA4;
					}
				}
			}
		}

		.bods {
			width: 217rpx;
			height: 210rpx;
			background: #F8F8F8;
			border-radius: 20rpx;

			image {
				width: 64rpx;
				height: 64rpx;
			}

			p {
				margin: 20rpx 0 5rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}

			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #666666;
			}
		}
	}

	.headers {
		width: 100%;
		background-color: white;
		margin-top: 20rpx;
	}

	.reday {
		background-color: white;
		padding-top: 20rpx;
		min-height: 700rpx;
		height: auto;
		padding-bottom: 150rpx;

		p {
			font-size: 32rpx;
			font-weight: bold;
			color: #222222;
		}

		text {
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
		}
	}

	.reday {
		.tit {
			margin: 30rpx 0 20rpx;
			padding-left: 10rpx;
			border-left: 2px solid #49CAA4;
			font-size: 30rpx;
			height: 30rpx;
			line-height: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		.ftit {
			margin: 20rpx 0 30rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #222222;
			margin-left: 50rpx;

			label {
				font-size: 28rpx;
				font-weight: 500;
				color: #222222;
				margin-right: 20rpx;
			}
		}
	}

	.lefts {
		font-size: 28rpx;
		width: 60rpx;
	}

	.leftbor {
		border-left: 1px solid #E6E6E6;
		padding-left: 40rpx;
		position: relative;
		height: auto;

		label {
			font-size: 28rpx;
			display: block;
			margin-right: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		image {
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			top: 5rpx;
			left: -16rpx;
		}

		.dis {
			position: absolute;
			top: 10rpx;
			left: -12rpx;
			// width: 20rpx;
			// height: 20rpx;
			// background: #49CAA4;
			// border: 5px solid #CFFFF1;
			// border-radius: 50%;
			width: 8rpx;
			height: 8rpx;
			background: #D2FFF2;
			border: 4px solid #49CAA4;
			border-radius: 50%;
		}

		.content {
			width: 500rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #666666;
			padding-bottom: 50rpx;
		}
	}
	.leftbor:nth-last-child(1){
		border: none !important;
	}
</style>