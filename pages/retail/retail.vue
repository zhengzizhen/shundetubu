<template>
	<view>
		<!-- 骨架屏 -->
		<view class="osi" v-if="loading"></view>
		<!-- 轮播图 -->
		<swiper v-if="!loading" class="swiper" circular :indicator-dots="false" :autoplay="false" :duration="500">
			<swiper-item @click="toDetails(item.id)" v-for="(item,index) in swiperlist" :key="index">
				<image :src="item.image" mode=""></image>
			</swiper-item>
		</swiper>

		<view class="rl_menu dis_f" v-for="(item,index) in menulist" :key="index" @click="jump(index)">
			<view class="rl_p dis_f">
				<image :src="item.img" mode=""></image>
				<p>{{item.name}}</p>
			</view>
			<u-icon name="arrow-right" size='14'></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menulist: [{
						name: '分销说明',
						img: '../../static/image/retail/import.jpg'
					},
					{
						name: '分销订单',
						img: '../../static/image/retail/order.jpg'
					},
					{
						name: '分销收入',
						img: '../../static/image/retail/money.jpg'
					}
				],
				swiperlist: [], //轮播图
				loading:true
			}
		},
		onLoad() {
			this.getlist()
		},
		methods: {
			async getlist() {
				const res = await this.$http('/distribution/banner')
				this.swiperlist = res.data.data
				this.loading = false
			},
			jump(v) {
				switch (v) {
					case 0:
						this.$jump('./restore')
						break
					case 1:
						this.$jump('./retailorder')
						break
					case 2:
						this.$jump('./income')
						break
				}
			},
			toDetails(e) {
				this.$jump('./Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.rl_banner {
		width: 100%;
		height: 320rpx;
		background-color: #999;

		image {
			width: 100%;
			height: 320rpx;
		}
	}

	.rl_menu {
		background: #FFFFFF;
		border-bottom: 1px solid #E6E6E6;
		justify-content: space-between;
		margin: 0 30rpx;
		.rl_p {
			align-items: center;
			height: 100rpx;
			p {
				margin-left: 20rpx;
				font-size: 30rpx;
			}
		}
		image {
			width: 40rpx;
			height: 40rpx;
		}
	}
	.swiper {
		width: 100%;
		height: 320rpx;
		image {
			width: 100%;
			height: 320rpx;
		}
	}
	.osi{
		width: 100%;
		height: 320rpx;
		background-color: #ccc;
	}
</style>