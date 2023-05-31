<template>
	<view class="body pd30">
		<view v-if="address != null" class="header bor_r dis_f jscb pd30" @click="toAddress">
			<p>{{address.name}} {{address.address}}</p>
			<u-icon color='#666666' name="arrow-right"></u-icon>
		</view>
		<view v-else class="header bor_r dis_f jscb pd30" @click="toAddress">
			<p>请设置收货地址</p>
			<u-icon color='#666666' name="arrow-right"></u-icon>
		</view>

		<view>
			<view class="content dis_f" v-for="(item,index) in params" :key="index">
				<image class="bor_r" :src="item.master_image" mode=""></image>
				<view class="dis_f flex_c ml20 jscb texts">
					<p class="title">{{item.name}}</p>
					<view class="dis_f">
						<label v-for="(v,i) in item.sku" :key="i">{{v}}</label>
					</view>
					<p class="bottom dis_f jscb">
						<text class="red">￥{{item.price}}</text>
						<text>×{{item.number}}</text>
					</p>
				</view>
			</view>
		</view>

		<view class="coslp bor_r">
			<view class="border dis_f jscb">
				<p>商品价格</p>
				<text>￥{{moeny}}</text>
			</view>
			<view class="border dis_f jscb">
				<p>运费</p>
				<text>￥{{yuns}}</text>
			</view>
			<view class="border dis_f jscb">
				<p>实付金额</p>
				<text>￥{{parseInt(moeny)+parseInt(yuns)}}</text>
			</view>
			<view class="border dis_f noborder">
				<p>订单备注</p>
				<input v-model="remark" type="text" placeholder="备注一下">
			</view>
		</view>

		<view class="header bor_r dis_f jscb pd30 m20 alitmc">
			<p>微信支付</p>
			<image @click="isShow = !isShow" v-show="!isShow" src="@/static/image/mine/true.png" mode=""></image>
			<image @click="isShow = !isShow" v-show="isShow" src="@/static/image/mine/false.png" mode=""></image>
		</view>

		<view class="fixed">
			<view class="pd30 dis_f alitmc jscb m20">
				<view class="dis_f alitmc">
					<label>含运费</label>
					<text>合计</text>
					<p class="red">￥{{parseInt(moeny)+parseInt(yuns)}}</p>
				</view>
				<p class="btn" @click='submit'>支付</p>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				goods: {},
				params: {},
				remark: '',
				address: {},
				moeny: 0,
				yuns: 0,
				car_ids:[]
			}
		},
		onLoad(option) {
			this.params = JSON.parse(option.obj)
			this.params.forEach((item, index) => {
				this.moeny += item.price
			})
			this.params.forEach((item, index) => {
				this.yuns += item.freight
				console.log(item);
			})
			console.log(this.params);
		},
		onShow() {
			this.address = uni.getStorageSync('address')
		},
		methods: {
			async getlist(v) {
				const res = await this.$http('/shop/goods/detail', {
					goods_id: v
				})
				this.goods = res.data.data
			},
			toAddress() {
				uni.setStorageSync('play', 'run')
				this.$jump('./address')
			},
			async submit() {
				uni.showLoading()
				this.params.forEach((item, index) => {
					this.car_ids = this.car_ids.concat(item.id)
				})
				if (this.params[0].id != null) {
					const res = await this.$http('/shop/order/create', {
						car_ids:this.car_ids,
						address_id: this.address.id,
						remark: this.remark,
						pay_method: 'app微信'
					})
					uni.hideLoading()
					return false
				}
				const res = await this.$http('/shop/order/create',{
					goods_id:this.params[0].goods_id,
					number:this.params[0].number,
					sku:this.params[0].sku,
					address_id:this.address.id,
					remark:this.remark,
					pay_method:'app微信'
				})
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 20rpx;
		height: 1500rpx;
		background-color: #FAFAFA;

		.header {
			height: 100rpx;
			line-height: 100rpx;
			background-color: white;

			image {
				width: 36rpx;
				height: 36rpx;
			}
		}

		.texts {
			flex: 1;
		}

		.content {
			margin-top: 20rpx;
			padding: 30rpx;
			width: 690rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			box-sizing: border-box;

			image {
				width: 180rpx;
				height: 180rpx;
			}

			.title {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}

			label {
				width: 62rpx;
				// height: 32rpx;
				// line-height: 32rpx;
				// margin: 10rpx 0 60rpx;
				text-align: center;
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
				background: #F0F0F0;
				border-radius: 6rpx;
				margin-right: 20rpx;
			}

			.bottom {
				.red {
					font-size: 30rpx;
					font-weight: 500;
					color: #FF4040;
				}
			}
		}

		.coslp {
			box-sizing: border-box;
			margin-top: 30rpx;
			padding: 20rpx 30rpx;
			width: 100%;
			height: auto;
			background-color: white;

			.border {
				margin-top: 20rpx;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #E6E6E6;

				p {
					font-size: 30rpx;
				}

				text {
					font-size: 30rpx;
					color: #FF4040;
				}

				input {
					padding-left: 20rpx;
				}
			}
		}
	}

	.fixed {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 750rpx;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);

		label {
			font-size: 24rpx;
			color: #666;
		}

		text {
			margin-left: 10rpx;
			font-size: 26rpx;
		}

		.red {
			font-size: 26rpx;
			color: #FF4040;
		}

		.btn {
			width: 242rpx;
			height: 80rpx;
			background: #49CAA4;
			border-radius: 40rpx;
			color: white;
			text-align: center;
			line-height: 80rpx;
			font-size: 30rpx;
		}
	}
</style>