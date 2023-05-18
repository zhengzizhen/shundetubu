<template>
	<view class="body">
		<view class="bank dis_f" v-if="this.userinfo.bank_status != 0">
			<image src="@/static/image/trends/wxx.jpg" mode=""></image>
			<view class="dis_f flex_c mls">
				<p>{{userinfo.bank.bank_name}}</p>
				<text>储蓄卡</text>
				<label>**** **** **** {{userinfo.bank.bank_code.substr(-4)}}</label>
			</view>
		</view>
		
		
		<view class="addbank" v-else>
			<p @click='toBank()'>+添加银行卡</p>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import store from '@/store/index.js'
	export default {
		computed:{
			...mapState(['userinfo'])
		},
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		methods: {
			toBank(){
				this.$jump('./addBank')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		padding-top: 40rpx;
	}
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
