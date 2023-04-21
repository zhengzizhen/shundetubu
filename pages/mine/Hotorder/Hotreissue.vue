<template>
	<view class="body ">
		<view class="header pd30" >
			<p class="title">本活动存在其他期次，可以选择改签:</p>
			<p class="title">请注意其他期次得集合点</p>
		</view>

		<view class="content bor_r">
			<view class="dis_f jscb alitmc just pd30" v-for="(item,index) in list" :key="index" @click="check(item)">
				<view class="dis_f flex_c">
					<p>{{item.date}}</p>
					<text>{{item.address}}</text>
				</view>
				<image v-if="item.state" src="@/static/image/mine/success.jpg" mode=""></image>
			</view>
		</view>

		<p class="sios pd30">选择改签人员</p>
		<view class="dis_f jscb user alitmc">
			<p>乐乐</p>
			<image @click="isShow = !isShow" v-show="isShow" src="@/static/image/mine/check1.png" mode=""></image>
			<image @click="isShow = !isShow" v-show="!isShow" src="@/static/image/mine/check.png" mode=""></image>
		</view>

		<p class="sios pd30">改签说明</p>

		<text class="kitro pd30">1.活动改签无需支付任何费用，仅可改签一次;</text>
		<text class="kitro pd30">2.根据服务约定，因为当前退款无需扣费，所以改签后再申请退出的，按改签后的活动退款规则处理</text>
		<view class="fixed">
			<p class="btn">确定改签</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				list: [{
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: true
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}]
			}
		},
		methods: {
			check(e) {
				this.list.forEach((item, index) => {
					item.state = false
				})
				e.state = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 1500rpx;
		height: auto;
		padding-top: 10rpx;

		.header {
			margin: 20rpx 0;

			.title {
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}
		}

		.content {
			margin: 0 30rpx;
			background-color: white;
			min-height: 300rpx;
			height: auto;
			padding: 10rpx 30rpx;

			.just:last-child {
				border: none;
			}

			.just {
				margin: 20rpx 0 0rpx;
				border-bottom: 1px solid #f4f4f4;
				padding-bottom: 20rpx;
			}

			p {
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}

			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}

			image {
				width: 32rpx;
				height: 24rpx;
			}
		}
	}

	.sios {
		margin: 30rpx 0;
		font-size: 30rpx;
		font-weight: 500;
		color: #49CAA4;
	}

	.user {
		margin: 0 30rpx;
		height: 86rpx;
		line-height: 86rpx;
		padding: 0 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		image {
			width: 35rpx;
			height: 35rpx;
		}
	}

	.kitro {
		display: block;
		font-size: 24rpx;
		font-weight: 500;
		color: #999999;
	}

	.fixed {
		margin-top: 50rpx;
		width: 100%;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);
		padding-top: 20rpx;
		.btn {
			margin: 40rpx auto;
			width: 690rpx;
			height: 78rpx;
			line-height: 78rpx;
			background: #49CAA4;
			border-radius: 39rpx;
			color: white;
			text-align: center;
			font-size: 30rpx;
		}
	}
</style>