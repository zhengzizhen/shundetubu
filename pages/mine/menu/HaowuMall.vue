<template>
	<view class="pd30">
		<view class="ix_shop index_pads dis_f">
			<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click="toChild(item)">
				<image style="border-radius: 50%;" :src="item.image" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="notice">
			<u-notice-bar bgColor='#FFF' color='#000' :text="text1"></u-notice-bar>
		</view>

		<view class="hl_content">
			<p class="title">推荐好物</p>

			<view class="content dis_f" v-for="(item,index) in list" :key="index" @click="toshopDetail">
				<image class="bor_r" src="@/static/index/zheng.jpg" mode=""></image>
				<view class="text">
					<p>锡兰红茶，来自斯里兰卡高山 纯手工采摘</p>
					<text>斯里兰卡原装进口，世界上最干净的 茶op等级锡兰红茶，唐红透亮...</text>
					<label>火热售罄，正在补货中...</label>
				</view>
			</view>

		</view>

		<view class="fixed" @click="toShop">
			<image src="@/static/image/mine/shop.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text1: '月***是  购买了铝合金外锁登山...',
				list: [1, 2, 3],
				arrlist: [{
						name: '限时特惠',
						image: '../../../static/index/zblx.jpg'
					},
					{
						name: '热销榜单',
						image: '../../../static/index/gnjx.jpg'
					},
					{
						name: '特色风物',
						image: '../../../static/index/gwjx.jpg'
					},
					{
						name: '旅行美学',
						image: '../../../static/index/hdrl.jpg'
					},
					{
						name: '健康轻食',
						image: '../../../static/index/hwsc.jpg'
					},
					{
						name: '个性饮品',
						image: '../../../static/index/bwbd.jpg'
					},
					{
						name: '运动户外',
						image: '../../../static/index/tddz.jpg'
					},
					{
						name: '亲子成长',
						image: '../../../static/index/qzlx.jpg'
					}
				],
			}
		},
		methods: {
			toChild(e) {
				console.log(e.name)
				this.$jump('./Limited')
			},
			toShop() {
				this.$jump('./MyCart')
			},
			toshopDetail() {
				this.$jump('./shopDetail')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ix_shop {
		flex-wrap: wrap;
		justify-content: space-between;

		.ix_list {
			margin-top: 30rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 24%;

			image {
				width: 100rpx;
				height: 100rpx;
			}

			text {
				margin-top: 10rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}
		}
	}

	.notice {
		margin: 40rpx 0;
	}

	.hl_content {
		.title {
			text-align: center;
			font-size: 36rpx;
			font-weight: bold;
			color: #000000;
			margin-bottom: 80rpx;
		}

		.content {
			margin: 20rpx 0;
			padding-bottom: 30rpx;
			border-bottom: 1px solid #e6e6e6;

			image {
				width: 280rpx;
				height: 280rpx;
			}

			.text {
				margin-left: 20rpx;
				width: 400rpx;

				p {
					font-size: 30rpx;
					font-weight: 500;
					color: #222222;
				}

				text {
					font-size: 24rpx;
					font-weight: 500;
					color: #666666;
				}

				label {
					display: block;
					margin-top: 70rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #FF4040;
				}
			}
		}
	}

	.fixed {
		position: fixed;
		bottom: 160rpx;
		right: 50rpx;

		image {
			width: 114rpx;
			height: 114rpx;
		}
	}
</style>