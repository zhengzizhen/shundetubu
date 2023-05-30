<template>
	<view class="body">
		<view class="top">
			<view class="dis_f alitmc jscc">
				<image src="@/static/image/mine/kxdg.png" mode=""></image>
				<p>{{list.status_text}}</p>
			</view>
			<text>{{list.start_day}}出发 {{trip.trip_day}}天</text>
		</view>

		<view class="posi dis_f">
			<image class="bor_r" :src="trip.trip_master_image" mode=""></image>
			<view class="dis_f flex_c text">
				<p>{{trip.trip_title}}</p>
				<p class="red"><label>￥</label>{{list.all_price}}</p>
				<view class="dis_f jscb ips">
					<label class="yellow">{{trip.team_status_text}}</label>
					<p class="dis_f green" @click='toHotde()'>活动详情<u-icon name="arrow-right" size='12'></u-icon></p>
				</view>
			</view>
		</view>

		<view class="contents dis_f flexw">
			<view class="dis_f flex_c alitmc ios" @click="toMenu(0)">
				<image src="@/static/image/mine/m1.jpg" mode=""></image>
				<p>行前须知</p>
			</view>

			<view class="dis_f flex_c alitmc ios" @click="toMenu(1)">
				<image src="@/static/image/mine/m2.jpg" mode=""></image>
				<p>旅游合同</p>
			</view>

			<view class="dis_f flex_c alitmc ios" @click="toMenu(2)">
				<image src="@/static/image/mine/m3.jpg" mode=""></image>
				<p>紧急联系人</p>
			</view>

			<view class="dis_f flex_c alitmc ios" @click="toMenu(3)">
				<image src="@/static/image/mine/m4.jpg" mode=""></image>
				<p>进群咨询</p>
			</view>

			<!-- <view class="dis_f flex_c alitmc ios" @click="toMenu(4)">
				<image src="@/static/image/mine/m5.jpg" mode=""></image>
				<p>添加报名</p>
			</view> -->

			<view class="dis_f flex_c alitmc ios" @click="toMenu(5)">
				<image src="@/static/image/mine/m6.jpg" mode=""></image>
				<p>修改/替员</p>
			</view>
		</view>

		<view class="user pd30">
			<p class="title">订单信息</p>
			<view class="cont bor_r dis_f flex_c pd30" v-for="(item,index) in list.traveller" :key="index">
				<view class="hr_top dis_f jscb">
					<label>{{item.username}}</label>
					<!-- <p class="dis_f">费用明细<u-icon name="arrow-right" size='12'></u-icon></p> -->
				</view>
				<view class="hr_tops dis_f jscb">
					<label>已报名</label>
					<view>
						<p @click='userinfo(item)'>个人信息</p>
						<p @click='toout()'>退款/退出</p>
					</view>
				</view>
			</view>
		</view>

		<u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open">
			<view class="user pd30">
				<view class="dis_f jscb ois">
					<p>姓名</p>
					<p>{{username}}</p>
				</view>
				<view class="dis_f jscb ois">
					<p>手机号</p>
					<p>{{phone}}</p>
				</view>
				<view class="dis_f jscb ois">
					<p>身份证号</p>
					<p>{{idcard}}</p>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {},
				trip: {},
				id: '',
				show: false,
				username:'',
				phone:'',
				idcard:''
			}
		},
		onLoad(option) {
			this.id = option.id
		},
		onShow() {
			this.getlist(this.id)
		},
		methods: {
			async getlist(v) {
				const res = await this.$http('/trip/order/detail', {
					order_no: v
				})
				this.list = res.data.data
				this.trip = res.data.data.trip
			},
			toMenu(e) {
				switch (e) {
					case 0:
						this.$jump('./Hottowhere?obj=','params',JSON.stringify(this.list))
						break;
					case 2:
						this.$jump('./contact')
						break;
					case 3:
						this.$jump('./Hotknow')
						break;
					// case 4:
					// 	this.$jump('/pages/index/Details/Applicant')
					// 	break;
					case 5:
						this.$jump('/pages/mine/rebook?id=','params',this.id)
						break;
				}
			},
			toHotde() {
				this.$jump('./Hottowhere?obj=','params',JSON.stringify(this.list))
			},
			toout() {
				this.$jump('/pages/mine/Hotorder/Hotout?id=', 'params', this.id)
			},
			userinfo(v) {
				this.username = v.username
				this.phone = v.phone
				this.idcard = v.idcard
				this.show = true
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 1500rpx;

		.top {
			width: 100%;
			height: 260rpx;
			background: #49CAA4;
			padding-top: 70rpx;
			box-sizing: border-box;
			text-align: center;

			image {
				width: 30rpx;
				height: 30rpx;
			}

			p {
				margin-left: 10rpx;
				font-size: 36rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}

		text {
			display: block;
			font-size: 24rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-top: 20rpx;
		}

		.posi {
			margin-top: -30rpx;
			height: 200rpx;
			padding: 30rpx;
			background: #FFFFFF;
			border-radius: 20rpx 20rpx 0rpx 0rpx;

			image {
				width: 180rpx;
				height: 180rpx;
			}

			.text {
				width: 500rpx;
				margin-left: 20rpx;

				p {
					font-size: 32rpx;
					font-weight: 500;
					color: #000000;
				}

				.red {
					margin-top: 40rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #FF4040;

					label {
						font-size: 24rpx;
					}
				}

				.ips {
					margin-top: 10rpx;

					.yellow {
						color: white;
						background-color: #F2AD5A;
						font-size: 24rpx;
						font-weight: 500;
						color: #FFFFFF;
						padding: 5rpx 10rpx;
					}

					.green {
						font-size: 26rpx;
						font-weight: 500;
						color: #49CAA4;
					}
				}

			}
		}

		.contents {
			margin-top: 30rpx;
			width: 100%;
			height: 330rpx;
			background: #FFFFFF;

			.ios {
				width: 24%;
				margin: 20rpx 0;
				text-align: center;
			}

			image {
				width: 68rpx;
				height: 68rpx;
			}

			p {
				margin-top: 10rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #666666;
			}
		}

		.user {
			width: 750rpx;
			height: 280rpx;
			background: #FFFFFF;
			margin-top: 30rpx;
			box-sizing: border-box;
			padding-top: 20rpx;

			.title {
				font-size: 32rpx;
				font-weight: bold;
				color: #222222;
			}

			.cont {
				margin-top: 20rpx;
				height: 150rpx;
				background: #F8F8F8;
				.hr_top {
					margin-top: 20rpx;
					label {
						font-size: 28rpx;
						font-weight: 500;
						color: #222222;
					}
					p {
						font-size: 28rpx;
						font-weight: 500;
						color: #999999;
					}
				}
				.hr_tops {
					margin-top: 20rpx;
					label {
						font-size: 28rpx;
						font-weight: 500;
						color: #49CAA4;
					}
					p {
						display: inline-block;
						font-size: 22rpx;
						font-weight: 500;
						color: #999999;
						padding: 5rpx 10rpx;
						background: #FFFFFF;
						border: 1px solid #CCCCCC;
						border-radius: 21rpx;
						margin-left: 20rpx;
					}
				}
			}
		}
	}
	.user{
		height: 260rpx;
		.ois{
			margin: 30rpx 0;
		}
	}
</style>