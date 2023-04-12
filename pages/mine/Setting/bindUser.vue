<template>
	<view>
		<view class="bank dis_f">
			<image src="@/static/image/trends/wxx.jpg" mode=""></image>
			<view class="dis_f flex_c mls">
				<p>中国银行</p>
				<text>储蓄卡</text>
				<label>**** **** **** 7254</label>
			</view>
		</view>
		
		
		<view class="addbank">
			<p @click='toBank()'>+添加银行卡</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toBank(){
				this.$jump('./addBank')
			}
		}
	}
</script>

<style lang="scss" scoped>
.bank{
	width: 694rpx;
	height: 238rpx;
	background: #E60012;
	border-radius: 20rpx;
	margin: 20rpx auto;
	padding: 30rpx;
	box-sizing: border-box;
	image{
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
	}
}
.mls{
	margin-left: 20rpx;
	p{
		font-size: 30rpx;
		font-weight: bold;
		color: #FFFFFF;
	}
	text{
		font-size: 26rpx;
		font-weight: 500;
		color: #FFE2E6;
	}
	label{
		display: block;
		margin-top: 50rpx;
		font-weight: bold;
		color: #FFE2E6;
		font-size: 36rpx;
	}
}
.addbank{
	width: 694rpx;
	height: 100rpx;
	box-sizing: border-box;
	color: #CCCCCC;
	line-height: 100rpx;
	border: 1px solid #CCCCCC;
	border-radius: 10rpx;
	margin: 0 auto;
	padding-left: 30rpx;
}
</style>
