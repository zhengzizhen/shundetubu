<template>
	<view>
		<view class="dt_header">
			<view class="dt_pbl">
				<u-search @focus='toSeach()' class="input" placeholder="请搜索目的地" v-model="seachValue" clearable
					:showAction='false' :height='28'></u-search>
				<label>国内热门</label>
				<view class="dt_dis_bool dis_f">
					<view v-for="(item,index) in list.internal_bourn" :key="item.id" class="dt_cimg posir"
						@click="Chankimg(item)">
						<view v-if="index == 0">
							<image class="bor_r" :src="item.image" mode=""></image>
							<text class="positions posia">TOP1</text>
							<p>{{item.name}}</p>
						</view>
					</view>
					<view>
						<view v-for="(item,index) in list.internal_bourn" :key="item.id" class="dt_zimg posir"
							@click="Chankimg(item)">
							<view v-if="index == 1">
								<image class="bor_r" :src="item.image" mode=""></image>
								<text class="positions posia">TOP2</text>
								<p>{{item.name}}</p>
							</view>
						</view>
					</view>
				</view>
				<view class="dt_forimg dis_f">
					<view v-if="index>1" v-for="(item,index) in list.internal_bourn" :key="index">
						<view  class="dt_gd" @click="Chankimg(item)">
							<image class="bor_r" :src="item.image" mode=""></image>
							<text class="positions posia" v-if="index<=4">TOP{{index+1}}</text>
							<p>{{item.name}}</p>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view>
			<view class="dt_pbl dt_impr">
				<p>国外热门</p>
				<view class="dt_dis_bool dis_f">
					<view v-for="(item,index) in list.foreign_bourn" :key="item.id" class="dt_cimg posir"
						@click="Chankimg(item)">
						<view v-if="index == 0">
							<image class="bor_r" :src="item.image" mode=""></image>
							<text class="positions posia">TOP1</text>
							<p>{{item.name}}</p>
						</view>
					</view>
					<view>
						<view v-for="(item,index) in list.foreign_bourn" :key="item.id" class="dt_zimg posir"
							@click="Chankimg(item)">
							<view v-if="index == 1">
								<image class="bor_r" :src="item.image" mode=""></image>
								<text class="positions posia">TOP2</text>
								<p>{{item.name}}</p>
							</view>
						</view>
					</view>
				</view>
				<view class="dt_forimg dis_f">
					<view v-if="index>1" v-for="(item,index) in list.foreign_bourn" :key="index">
						<view  class="dt_gd" @click="Chankimg(item)">
							<image class="bor_r" :src="item.image" mode=""></image>
							<text class="positions posia" v-if="index<=4">TOP{{index+1}}</text>
							<p>{{item.name}}</p>
						</view>
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
				],
				list: []
			}
		},
		onLoad() {
			this.getlist()
		},
		methods: {
			async getlist() {
				const res = await this.$http('/trip/bourn')
				this.list = res.data.data
			},
			Chankimg(e) {
				this.$jump('./Destination?obj=', 'params',JSON.stringify(e))
			},
			toSeach() {
				this.$jump('/pages/index/Seach/Seach');
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dt_header {
		width: 100%;
		height: auto;
		background: linear-gradient(0deg, #FFFFFF 0%, #49CAA4 100%);
	}

	.positions {
		display: block;
		width: 80rpx;
		text-align: center;
		height: 32rpx;
		line-height: 32rpx;
		background: linear-gradient(70deg, #F7B36B 0%, #FF8F68 100%);
		border-radius: 6rpx;
		top: 20rpx;
		left: 20rpx;
		font-size: 24rpx;
		color: #FFFFFF;
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

			.dt_gd {
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