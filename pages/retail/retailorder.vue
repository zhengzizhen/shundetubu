<template>
	<view class="">
		<Nav title="分销订单">
			<template slot="left">
				<image @click="back()" class="leftimg" src="../../static/image/retail/back.png" mode=""></image>
			</template>
			<template slot="right">
				<image class="rightimg" src="../../static/image/retail/import.jpg" mode=""></image>
				<text>分销说明</text>
			</template>
		</Nav>
		<view class="rr_body">
			<view class="rr_order bor_r" v-for="(v,i) in list" :key='i'>
				<view class="rr_header dis_f">
					<p>订单编号：6454484986484</p>
					<text>已结束</text>
				</view>
				<view class="rr_cont dis_f">
					<image src="../../static/index/zheng.jpg" mode=""></image>
					<view class="cont_txt dis_f flex_c">
						<p>【亭可马里季】斯里兰卡纯玩9天</p>
						<text class="txt">下单时间：2023-02-20 18:19</text>
						<view class="label dis_f">
							<label>订单金额：￥125</label>
							<label class="red">佣金：￥5.29</label>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import Nav from '@/component/navgation/navgation.vue'
	export default {
		components: {
			Nav
		},
		data() {
			return {
				list: [1, 2, 3]
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rr_body {
		background-color: #FAFAFA;
		height: 1500rpx;
		padding: 30rpx 30rpx;

		.rr_order {
			margin-bottom: 20rpx;
			background-color: white;
			height: 320rpx;

			.rr_header {
				justify-content: space-between;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #E6E6E6;
				padding: 20rpx;

				p {
					color: #666;
					font-size: 30rpx;
				}

				text {
					font-size: 30rpx;
					color: #FF4040;
				}
			}
		}

		.rr_cont {
			padding: 20rpx;

			image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 20rpx;
			}

			.cont_txt {
				margin-left: 30rpx;

				p {
					font-size: 30rpx;
				}

				.txt {
					color: #999999;
					font-size: 26rpx;
					margin-top: 10rpx;
				}

				.label {
					margin-top: 40rpx;
					font-size: 26rpx;
					justify-content: space-between;

					.red {
						margin-left: 20rpx;
						color: #FF4040;
					}
				}
			}
		}
	}

	
</style>