<template>
	<view>
		<view class="re_seach dis_f">
			<u-icon @click='back()' name="arrow-left" color='#222222' size='20'></u-icon>
			<u-search :showAction="true" actionText="取消" :animation="false"></u-search>
		</view>
		<view class="pd30">
			<p class="title">不关联记录</p>
		</view>

		<view class="re_content" v-for="(item,index) in list" :key="index">
			<!-- 内容 -->
			<view class="dc_mod dis_f">
				<text class="posw">3天</text>
				<!-- <image src="@/static/image/index/banners.jpg" mode=""></image> -->
				<view class="dc_god">
					<p>【亭可马里季】斯里兰卡纯玩 9天</p>
					<view class="dc_latt dis_f">
						<text>03.18已满员</text>
						<label>04.02剩3名额</label>
						<u-icon name="arrow-right" color="#999999" size='12'></u-icon>
					</view>
					<view class="dc_out">
						<text>03.18已满员</text>
						<text style="margin-left: 10rpx;">限时40天</text>
					</view>
					<view class="dc_span dis_f">
						<text>￥888</text>
						<label>4.91分丨291人去过</label>
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
				searchvalue: '',
				list: [1, 2, 3]
			}
		},
		methods: {
			back() {
				this.$jump('./News', 'redirect')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.re_seach {
		margin: 100rpx 20rpx 20rpx;

		input {
			margin-left: 10rpx;
		}
	}

	.title {
		margin: 30rpx 0 0;
	}

	.dc_mod {
		position: relative;
		background-color: white;
		border-radius: 20rpx;
		padding: 30rpx 20rpx;

		image {
			width: 240rpx;
			height: 240rpx;
			border: 20rpx;
		}

		.dc_god {
			width: 388rpx;
			margin-left: 20rpx;
		}

		.posw {
			position: absolute;
			top: 30rpx;
			left: 20rpx;
			width: 80rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #49CAA4;
			z-index: 2;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			text-align: center;
			color: white;
			font-size: 22rpx;

		}

		.dc_latt {
			margin-top: 10rpx;

			text {
				padding: 5rpx 15rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				background-color: #FFA1AD;
			}

			label {
				margin-left: 10rpx;
				padding: 5rpx 20rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				background-color: #F2AD5A;
			}
		}

		.dc_out {
			margin-top: 20rpx;

			text {
				padding: 5rpx 15rpx;
				color: #E49332;
				font-size: 24rpx;
				background-color: #FFECD6;
			}
		}
	}

	.re_content {
		padding: 0 30rpx;
	}

	.dc_span {
		margin-top: 10rpx;
		justify-content: space-between;
		align-items: center;

		label {
			color: #999999;
			font-size: 24rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}
</style>