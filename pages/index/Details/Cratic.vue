<template>
	<view class="cc_body">
		<p>活动领队</p>
		<view class="pd30 dis_f cc_user">
			<view class="cc_group dis_f flex_c alitmc" v-for="(v,i) in list" :key="i">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<text>肉肉</text>
			</view>
		</view>
		
		<p>已报名</p>
		<view class="pd30 dis_f cc_user">
			<view class="cc_group dis_f flex_c alitmc" v-for="(v,i) in Userlist" :key="i">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<text class="bold">哈哈哈</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1],
				Userlist:[1,2,3,4,5,6,7]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.cc_body{
		background-color: #FAFAFA;
	}
	p {
		margin: 30rpx 0 0rpx;
		padding: 10rpx 30rpx 30rpx;
		background-color: white;
	}
	image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 850%;
	}
	.cc_user {
		flex-wrap: wrap;
		background-color: white;
		.cc_group {
			width: 20%;
			margin: 0rpx 0 20rpx;
			text {
				font-size: 28rpx;
				font-weight: 500;
				color: #FF482A;
			}
		}
		.bold{
			color: #666666 !important;
		}
	}
</style>