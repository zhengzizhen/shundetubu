<template>
	<view class="cd_body">
		<view class="header">
			<u-tabs itemStyle="width:14%;height: 44px;" lineWidth="25" lineColor='#49CAA4' :list="listps"
				@change="(item)=>change(item)" :activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		<view class="content" v-for="(item,index) in list" :key="index" @click="toDeail(item)">
			<view class="cont_header dis_f jscb alitmc">
				<p>订单编号：{{item.order_no}}</p>
				<text v-if="item.status == -1" class="six">已取消</text>
				<text v-if="item.status == 0" class="red">待支付</text>
				<text v-if="item.status == 1" class="red">待发货</text>
				<text v-if="item.status == 2" class="yif">已发货</text>
				<text v-if="item.status == 3">已完成</text>
				<text v-if="item.status == 5">已退款</text>
			</view>
			<view class="bot dis_f">
				<image v-if="item.goods[0]" :src="item.goods[0].goods_master_image" mode=""></image>
				<view class="dis_f flex_c right jscb">
					<p>{{item.name}}</p>
					<label>下单时间：{{item.created_at}}</label>
					<text>订单金额：￥{{item.all_price}}</text>
				</view>
			</view>
			<view class="bottom dis_f" v-if="item.state == 0">
				<p @click.stop='Deleteshop()'>取消订单</p>
			</view>
			<view class="bottom dis_f" v-if="item.state == 1">
				<p @click.stop='Deleteshop()'>删除订单</p>
				<p @click.stop='toaddress()'>修改地址</p>
				<p>立即支付</p>
			</view>
			<view class="bottom dis_f" v-if="item.state == 2">
				<p @click.stop='Deleteshop()'>取消订单</p>
			</view>
			<view class="bottom dis_f" v-if="item.state == 3">
				<p>确认收货</p>
			</view>
			<view class="bottom dis_f" v-if="item.state == 4">
				<p @click.stop='Deleteshop()'>删除订单</p>
				<p @click.stop='toComments()'>去评价</p>
			</view>
		</view>
		<view class="back" v-show="deletepop">
			<view class="cont">
				<p>确认要删除订单吗？</p>
				<view class="btn dis_f jscb">
					<text class="lefts" @click="deletepop = false">取消</text>
					<text class="rights" @click="deletepop = false">确定</text>
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
				list1: [],
				listps: [{
					name: '全部',
				}, {
					name: '待支付',
				}, {
					name: '待发货',
				}, {
					name: '待收货',
				}, {
					name: '已完成',
				}, {
					name: '已取消',
				}],
				deletepop: false,
				page: 1,
				bottom: false
			}
		},
		onLoad() {
		},
		onShow() {
			this.getlist()
		},
		methods: {
			async getlist() {
				uni.showLoading()
				const res = await this.$http('/shop/order/list', {
					page: this.page,
					limit: 10
				})
				uni.hideLoading()
				if (this.list.length < 10) {
					this.bottom = true
				}
				this.list = res.data.data
				this.list1 = res.data.data
			},
			change(v) {
				switch (v.index) {
					case 0:
						this.list = this.list1
						break;
					case 1:
						this.list = []
						this.list1.forEach((item, index) => {
							if (item.status == 0) {
								this.list = this.list.concat(item)
							}
						})
						break;
					case 2:
						this.list = []
						this.list1.forEach((item, index) => {
							if (item.status == 1) {
								this.list = this.list.concat(item)
							}
						})
						break;
					case 3:
						this.list = []
						this.list1.forEach((item, index) => {
							if (item.status == 2) {
								this.list = this.list.concat(item)
							}
						})
						break;
					case 4:
						this.list = []
						this.list1.forEach((item, index) => {
							if (item.status == 3) {
								this.list = this.list.concat(item)
							}
						})
						break;
					case 5:
						this.list = []
						this.list1.forEach((item, index) => {
							if (item.status == -1) {
								this.list = this.list.concat(item)
							}
						})
						break
				}
			},
			toComments() {
				this.$jump('./menu/comments')
				return false
			},
			toDeail(v) {
				this.$jump('./menu/Status?obj=', 'params', JSON.stringify(v))
				return false
			},
			Deleteshop() {
				this.deletepop = true
			},
			toaddress() {
				this.$jump('./menu/address')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cd_body {
		background-color: #fafafa;
		min-height: 1500rpx;
		height: auto;

		.header {
			width: 100%;
			background-color: white;
		}
	}

	.content {
		width: 690rpx;
		height: auto;
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

			.red {
				color: #FF4040;
			}

			.six {
				color: #666666;
			}

			.yif {
				color: #000000;
			}

			text {
				font-size: 28rpx;
				font-weight: 500;
				color: #49CAA4;
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

	.back {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .4);
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 99;

		.cont {
			margin: 0 auto;
			transform: translateY(700rpx);
			background-color: white;
			border-radius: 20rpx;
			width: 520rpx;
			height: 166rpx;
			text-align: center;
			padding-top: 50rpx;
		}

		p {
			font-size: 30rpx;
			color: #222;
		}

		.btn {
			width: 100%;
			margin-top: 50rpx;

			text {
				display: block;
				text-align: center;
				width: 50%;
				height: 74rpx;
				line-height: 74rpx;
				border-top: 1px solid #ccc;
				font-size: 28rpx;
				font-weight: 500;
				color: #222222;
			}

			.lefts {
				border-radius: 0 0 0 20rpx;
			}

			.rights {
				border-radius: 0 0 20rpx 0;
				border-left: 1px solid #ccc;
			}
		}
	}
</style>