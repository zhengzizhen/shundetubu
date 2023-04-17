<template>
	<view class="body">
		<view class="nav pd30 dis_f alitmc">
			<u-icon @click="back" name="arrow-left" color='#000' size='18'></u-icon>
			<span>收货地址</span>
		</view>

		<view class="card dis_f flex_c pd30">
			<p class="header">
				<label>默认</label>
				<text>云溪</text>
				<text>17633612154</text>
			</p>
			<p class="center">河南省新乡市红旗区和平大道212号</p>
			<view class="bottom dis_f alitmc">
				<p class="dis_f alitmc">
					<image v-show="!isShow" @click="check" class="ius" src="@/static/image/mine/radio.png" mode="">
					</image>
					<image v-show="isShow" @click="check" class="ius" src="@/static/image/mine/radio1.png" mode="">
					</image>
					<label>设为默认</label>
				</p>
				<p class="dis_f alitmc left">
					<image src="@/static/image/mine/bianji.png" mode=""></image>
					<label>编辑</label>
				</p>
				<p class="dis_f alitmc ml20">
					<image src="@/static/image/mine/delete.png" mode=""></image>
					<label>删除</label>
				</p>
			</view>
		</view>

		<view class="btn dis_f alitmc jscc" @click="toAdd">
			<image src="@/static/image/mine/add.png" mode=""></image>
			<p>添加地址</p>
		</view>
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
			back() {
				uni.navigateBack()
			},
			check() {
				this.isShow = !this.isShow
			},
			toAdd() {
				this.$jump('./addAddress')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		padding-bottom: 150rpx;

		.nav {
			width: 100%;
			height: 88rpx;
			background-color: white;

			span {
				font-size: 32rpx;
				font-weight: bold;
				color: #222222;
				margin-left: 20rpx;
			}
		}

		.card {
			padding: 30rpx;
			box-sizing: border-box;
			margin: 30rpx auto;
			width: 690rpx;
			height: 223rpx;
			background: #FFFFFF;
			border-radius: 20rpx;

			.header {
				font-size: 26rpx;

				label {
					width: 70rpx;
					height: 36rpx;
					background: #49CAA4;
					border-radius: 6rpx;
					color: white;
					font-size: 22rpx;
					padding: 0 10rpx;
					margin-right: 20rpx;
				}
			}

			.center {
				margin: 20rpx 0;
				font-size: 30rpx;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #E6E6E6;
			}

			.bottom {
				.ius {
					width: 34rpx;
					height: 34rpx;
				}

				image {
					width: 22rpx;
					height: 22rpx;
				}

				label {
					margin-left: 10rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #666666;
				}

				.left {
					margin-left: 300rpx;
				}
			}
		}

		.btn {
			margin: 1100rpx auto 0;
			width: 690rpx;
			height: 84rpx;
			background: #49CAA4;
			color: white;
			text-align: center;
			border-radius: 42rpx;

			p {
				font-size: 32rpx;
				margin-left: 10rpx;
			}

			image {
				width: 33rpx;
				height: 33rpx;
			}
		}
	}
</style>