<template>
	<view class="body">
		<view class="header pd30">
			<u-search class="input" placeholder="姓名/昵称/手机号" v-model="seachValue" :showAction='false' :height='28'>
			</u-search>
			<view class="dis_f select jscb posir">
				<p class="dis_f alitmc jscc"><text @click="all">全部</text><u-icon @click='isShow = !isShow'
						name="arrow-down" color="#000" size='14'></u-icon></p>
				<p @click='tofalse'>未签到</p>
				<p @click='totrue'>已签到</p>

				<view class="posia pos bor_r" v-show="isShow">
					<p @click='toajax'>集合点1 （10人）</p>
					<p @click='toajax'>集合点2 （10人）</p>
					<p @click='toajax'>集合点3 （5人）</p>
				</view>
			</view>
		</view>

		<view class="Statistiche dis_f flex_c bor_r">
			<p class="border">总报名人数: {{list.length}}</p>
			<view class="bot dis_f jscb">
				<p class="dis_f alitmc"><label class="tr"></label><text>已签到: {{inpro}}</text></p>
				<p class="dis_f alitmc"><label class="fa"></label><text>未签到: {{outpro}}</text></p>
			</view>
		</view>


		<view class="contnet bor_r" v-for="(item,index) in arrlist" :key="index">
			<view class="dis_f alitmc top">
				<label>{{item.name}}</label>
				<image src="@/static/image/mine/phoen.jpg"></image>
				<p class="phone">{{item.phone}}</p>
			</view>
			<p class="dis_f jscb center">
				<text>昵称： {{item.user}}</text>
				<text>订单： {{item.id}}</text>
			</p>
			<p class="dis_f jscb bottom">
				<view class="dis_f alitmc" v-if="item.state == 0">
					<label class="fa"></label><text class="ml20">未签到</text>
				</view>
				<view class="dis_f alitmc" v-if="item.state == 1">
					<label class="tr"></label><text class="ml20">已签到</text>
				</view>
				<text class="yellow" v-if="item.state == 0">设为已签到</text>
				<text class="green" v-if="item.state == 1">已签到</text>
			</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachValue: '',
				isShow: false,
				arrlist: [],
				list: [{
						name: '艾伦',
						phone: '199999999999',
						user: '元始天尊',
						id: '865478798768778',
						state: 0
					},
					{
						name: '艾伦',
						phone: '199999999999',
						user: '元始天尊',
						id: '865478798768778',
						state: 0
					},
					{
						name: '米卡桑',
						phone: '176154898988',
						user: '原始巨人',
						id: '41156554654654654',
						state: 1
					},
				],
				list1: [{
						name: '艾伦',
						phone: '199999999999',
						user: '元始天尊',
						id: '865478798768778',
						state: 0
					},
					{
						name: '艾伦',
						phone: '199999999999',
						user: '元始天尊',
						id: '865478798768778',
						state: 0
					},
					{
						name: '米卡桑',
						phone: '176154898988',
						user: '原始巨人',
						id: '41156554654654654',
						state: 1
					},
					{
						name: '米卡桑',
						phone: '176154898988',
						user: '原始巨人',
						id: '41156554654654654',
						state: 1
					},
					{
						name: '米卡桑',
						phone: '176154898988',
						user: '原始巨人',
						id: '41156554654654654',
						state: 1
					},
				]
			}
		},
		onLoad() {
			this.arrlist = this.list
			this.Numbers()
		},
		methods: {
			toajax() {
				this.isShow = !this.isShow
				this.$nextTick(() => {
					this.list = this.list1
					this.Numbers()
					this.all()
				});
			},
			Numbers() {
				let arr = [];
				let arr1 = [];
				this.list.forEach((item, index) => {
					if (item.state == 1) {
						arr.push(item)
					}
					if (item.state == 0) {
						arr1.push(item)
					}
				})
				this.inpro = arr.length
				this.outpro = arr1.length
			},
			all() {
				this.arrlist = this.list
			},
			tofalse() {
				this.arrlist = []
				this.list.forEach((item, index) => {
					if (item.state == 0) {
						this.arrlist.push(item)
					}
				})
			},
			totrue() {
				this.arrlist = []
				this.list.forEach((item, index) => {
					if (item.state == 1) {
						this.arrlist.push(item)
					}
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		height: auto;
		min-height: 1500rpx;
		padding-bottom: 100rpx;
		.header {
			padding-bottom: 30rpx;
			background-color: white;
			.select {
				margin: 40rpx 0 0;

				p {
					width: 33%;
					color: #666666;

					text {
						color: #222222
					}
				}

				text-align: center;
			}

			.pos {
				width: 305rpx;
				padding: 20rpx 20rpx;
				height: auto;
				background-color: white;
				top: 70rpx;
				left: 130rpx;

				p {
					width: 305rpx;
					padding: 10rpx;
				}
			}
		}
	}

	.Statistiche {
		background-color: white;
		margin: 40rpx 30rpx;

		.border {
			margin: 20rpx 0 0rpx;
			border-bottom: 1px solid #e6e6e6;
			text-align: center;
			padding-bottom: 10rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #666666;
		}

		.bot {
			margin: 10rpx 0;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			padding: 0 100rpx;

			text {
				margin-left: 10rpx;
			}
		}
	}

	.contnet {
		margin: 40rpx 30rpx;
		background-color: white;

		.top {
			border-bottom: 1px solid #e6e6e6;
			padding: 20rpx 20rpx;

			image {
				width: 19rpx;
				height: 27rpx;
				margin-left: 42rpx;
				margin-right: 16rpx;
			}

			label {
				font-size: 30rpx;
			}

			.phone {
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}
		}

		.center {
			padding: 20rpx 20rpx;

			text {
				font-size: 26rpx;
				font-weight: 500;
				color: #999999;
			}
		}

		.bottom {
			padding: 20rpx 20rpx;

			text {
				font-size: 30rpx;
				font-weight: 500;
				color: #666666;
			}

			.green {
				color: #49CAA4;
			}

			.yellow {
				color: #F2AD5A;
			}
		}
	}

	.tr {
		display: block;
		width: 20rpx;
		height: 20rpx;
		background: #49CAA4;
		border-radius: 50%;
	}

	.fa {
		display: block;
		width: 20rpx;
		height: 20rpx;
		background: #F2AD5A;
		border-radius: 50%;
	}
</style>