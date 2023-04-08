<template>
	<view>
		<view class="dt_header">
			<view class="dt_pbl">
				<u-search class="input" placeholder="请搜索目的地" v-model="seachValue" clearable :showAction='false'
					:height='28'></u-search>
				<label>国内热门</label>
				<view class="dt_dis_bool dis_f">
					<view class="dt_cimg">
						<image class="bor_r" src="../../static/index/ban.jpg" mode=""></image>
						<p>大美新疆</p>
					</view>
					<view class="dt_zimg ">
						<image class="bor_r" src="../../static/index/zheng.jpg" mode=""></image>
						<p>丽江</p>
					</view>
				</view>
				<view class="dt_forimg dis_f">
					<view v-for="(item,index) in imglist" :key="index" class="dt_gd" @click="Chankimg()">
						<image class="bor_r"  :src="item" mode=""></image>
						<p>大理</p>
					</view>
				</view>
			</view>
		</view>

		<view>
			<view class="dt_pbl dt_impr">
				<p>国外热门</p>
				<view class="dt_dis_bool dis_f">
					<view class="dt_cimg">
						<image class="bor_r" src="../../static/index/ban.jpg" mode=""></image>
						<p>耶路撒冷</p>
					</view>
					<view class="dt_zimg ">
						<image class="bor_r" src="../../static/index/zheng.jpg" mode=""></image>
						<p>奥利给</p>
					</view>
				</view>
				<view class="dt_forimg dis_f">
					<view v-for="(item,index) in imglist" :key="index" class="dt_gd">
						<image class="bor_r"  :src="item" mode=""></image>
						<p>泰国</p>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachValue: '',
				imglist: ["../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
					"../../static/index/zheng.jpg",
				]
			}
		},
		methods: {
			Chankimg(){
				this.$jump('./Destination')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dt_header {
		width: 100%;
		height: auto;
		background: linear-gradient(0deg, #FFFFFF 0%, #49CAA4 100%);
	}

	.dt_pbl {
		padding: 100rpx 30rpx 0;

		label {
			display: flex;
			margin-top: 50rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
		}

		.dt_dis_bool {
			margin-top: 20rpx;
			width: 100%;
			justify-content: space-between;

			.dt_cimg {
				position: relative;

				image {
					width: 454rpx;
					height: 300rpx;
				}

				p {
					position: absolute;
					bottom: 20rpx;
					left: 20rpx;
					color: #FFFFFF;
				}
			}

			.dt_zimg {
				position: relative;

				image {
					width: 217rpx;
					height: 300rpx;
				}

				p {
					position: absolute;
					bottom: 20rpx;
					left: 20rpx;
					color: #FFFFFF;
				}
			}
		}

		.dt_forimg {
			width: 100%;
			justify-content: space-between;
			flex-wrap: wrap;
			.dt_gd{
				position: relative;
				p {
					position: absolute;
					bottom: 20rpx;
					left: 20rpx;
					color: #FFFFFF;
				}
			}
			
			image {
				margin: 10rpx 0;
				width: 217rpx;
				height: 217rpx;
			}
			
		}

	}

	.dt_impr {
		padding: 40rpx 30rpx 0 !important;
	}
</style>