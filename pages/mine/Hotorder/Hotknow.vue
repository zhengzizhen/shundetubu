<template>
	<view class="bodys">
		<view class="label pd30">
			<view class="dis_f">
				<image class="ewm" @click="isShow = true"
					src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
					mode=""></image>
				<view class="dis_f flex_c sos">
					<view class="dis_f kbdg alitmc jscc">
						<image src="@/static/image/mine/kxdg.png" mode=""></image>
						<p>恭喜你报名成功</p>
					</view>
					<p class="ca dis_f"><u-icon name="arrow-left" color='#49CAA4' size='12'></u-icon>长按二维码加入活动咨询群</p>
				</view>
			</view>
		</view>

		<view class="con pd30">
			<p>佛冈小龙斗原始险峰攀登 ></p>
			<text>时间：3月11日</text>
			<text>集合：广州地铁客村站B出口</text>
			<text>已报名：郭乐</text>
		</view>

		<u-popup :show="isShow" closeable :round="10" mode="bottom" @close="close" @open="open">
			<view class="popViews">
				<text class="tti">活动资讯群</text>
				<image
					src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
					mode=""></image>
				<p>活动长按二维码</p>
				<p>加入【佛冈小龙斗】原始险峰攀登活动群</p>
				<view class="con pd30">
					<text>这是公开接受咨询的活动群，温馨提醒大家：</text>
					<text>1、请谨慎对待群内其他用户私加好友的请求：</text>
					<text>2、勿向陌生人转账，活动报名付款都是通过官方公众号或APP完成。</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		methods: {
			open() {

			},
			close() {
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bodys {
		background-color: #FAFAFA;
		min-height: 1500rpx;

		.label {
			width: 750rpx;
			height: 320rpx;
			background: #49CAA4;
			padding-top: 70rpx;
			box-sizing: border-box;

			.ewm {
				width: 130rpx;
				height: 130rpx;
			}

			.kbdg {
				image {
					width: 30rpx;
					height: 30rpx;
				}

				p {
					font-size: 30rpx;
					font-weight: 500;
					color: #FFFFFF;
					margin-left: 10rpx;
				}
			}
		}

		.sos {
			align-items: flex-start;
			justify-content: space-around;
			margin-left: 30rpx;
		}

		.ca {
			padding-left: 10rpx;
			width: 340rpx;
			height: 40rpx;
			line-height: 40rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #49CAA4;
		}
	}

	.con {
		padding-top: 20rpx;
		margin-top: -50rpx;
		height: 200rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0rpx 0rpx;

		p {
			font-size: 32rpx;
			font-weight: 500;
			color: #49CAA4;
		}

		text {
			margin: 10rpx 0;
			font-size: 26rpx;
			font-weight: 500;
			color: #999999;
			display: block;
		}
	}

	.popViews {
		height: 823rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0rpx 0rpx;
		text-align: center;

		.tti {
			display: block;
			margin: 50rpx 0;
		}

		image {
			width: 250rpx;
			height: 250rpx;
		}

		p {
			margin: 20rpx 0;
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}

		.con {
			margin-top: 40rpx;
			text-align: left;
		}
	}
</style>