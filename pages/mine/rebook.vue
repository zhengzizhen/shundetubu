<template>
	<view class="body">
		<view class="dis_f rk_content jscb  alitmc" @click="toMenu(0)">
			<image src="@/static/image/mine/g1.jpg" mode=""></image>
			<view class="center">
				<p>我要改签</p>
				<text>每个用户可改签一次</text>
			</view>
			<u-icon name="arrow-right" size='12'></u-icon>
		</view>

		<view class="dis_f rk_content jscb  alitmc" @click="toMenu(1)">
			<image src="@/static/image/mine/g2.jpg" mode=""></image>
			<view class="center">
				<p>我要替员</p>
				<text>可通过替员修改报名信息</text>
			</view>
			<u-icon name="arrow-right" size='12'></u-icon>
		</view>

		<view class="dis_f rk_content jscb  alitmc" @click="toMenu(2)">
			<image src="@/static/image/mine/g3.jpg" mode=""></image>
			<view class="center">
				<p>退出活动</p>
				<text>退款将在2-5天内回到你的账户</text>
			</view>
			<u-icon name="arrow-right" size='12'></u-icon>
		</view>

		<view class="dis_f rk_content jscb  alitmc" @click="toMenu(3)">
			<image src="@/static/image/mine/g4.jpg" mode=""></image>
			<view class="center">
				<p>商品退款</p>
				<text>仅限活动报名购买的商品</text>
			</view>
			<u-icon name="arrow-right" size='12'></u-icon>
		</view>


		<view class="tit pd30">
			<p>提示</p>
			<text>1.若该活动无其他排期，不能改签:</text>
			<text>2.仅有一日活动可改签，需在出发日期前一天22点之前操作</text>
			<text>3.仅有常规一天活动可替员。会员活动、大型专题活动，策划活动算不可替员;</text>
			<text>4.活动出发前一天22点后不允许替员或改签</text>
			<text>5.若您遭出的活动订单中包含增值商品，遇出活动将视为商品自动退款，该退款将从原渠道单独退回到t谢谢您的理解。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toMenu(e) {
				switch (e) {
					case 0:
						this.$jump('./Hotorder/Hotreissue')
						break;
					case 1:
						this.$jump('./Hotorder/Hotreplace')
						break;
					case 2:
						this.$jump('./Hotorder/Hotout')
						break;
					case 3:
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 1500rpx;
	}

	.rk_content {
		padding: 30rpx;
		border-bottom: 1px solid #ececec;
		background-color: white;

		image {
			width: 62rpx;
			height: 62rpx;
		}

		.center {
			width: 540rpx;

			p {
				font-size: 28rpx;
				font-weight: 500;
			}

			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
		}
	}

	.tit {
		margin-top: 60rpx;

		p {
			font-size: 30rpx;
			color: #999999;
		}

		text {
			display: block;
			font-size: 24rpx;
			color: #999999;
		}
	}
</style>