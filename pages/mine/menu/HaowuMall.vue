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
				<image class="bor_r" :src="item.master_image" mode=""></image>
				<view class="text dis_f flex_c jscb">
					<p>{{item.name}}</p>
					<text>{{item.intro}}</text>
					<view  v-if="item.stock != 0" class="dis_f label">
						<label>￥{{item.price}}</label>
						<p>原价￥{{item.old_price}}</p>
					</view>
					<label v-else>火热售罄，正在补货中...</label>
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
				list: [],
				arrlist: [],
				page: 1
			}
		},
		onLoad() {
			this.getlist()
			//推荐好物
			this.getrecommend()
		},
		methods: {
			async getlist() {
				const res = await this.$http('/shop/goods/category/list')
				this.arrlist = res.data.data
			},
			async getrecommend() {
				const res = await this.$http('/shop/goods/list', {
					is_recommend: '推荐好物',
					page: this.page,
					limit: 10
				})
				this.list = res.data.data
			},
			toChild(e) {
				this.$jump('./Limited?id=', 'params', e.id)
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
		// justify-content: space-between;

		.ix_list {
			margin-top: 30rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 25%;

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

				.label {
					margin-top: 70rpx;
					label{
						display: block;
						font-size: 26rpx;
						font-weight: 500;
						color: #FF4040;
					}
					p{
						margin-left: 10rpx;
						font-weight: 500;
						font-size: 26rpx;
						text-decoration: line-through;
						color: #999999;
					}
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