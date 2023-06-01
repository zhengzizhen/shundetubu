<template>
	<view class="ln_body">
		<view class="ln_header dis_f">
			<!-- <image src="@/static/trends/user.png" mode=""></image> -->
			<view class="ln_title dis_f">
				<p>徒步圈&两只脚户外旅行</p>
				<label for="">继续对世界好奇</label>
			</view>
		</view>
		
		<view class="ln_btn">
			<button class="cls" @click='gtIndex()'><p>使用微信授权登录</p></button>
			<button class="pls" @click="myPhone()"><p>本机号码一键登录</p></button>
		</view>
		
		<view class="ln_txt dis_f">
			<image v-show="isShow" src="@/static/login/xz.png" mode="" @click="isShow = !isShow"></image>
			<image v-show="!isShow" src="@/static/login/wxz.png" mode="" @click="isShow = !isShow"></image>
			<p>我已阅读并同意<label>《顺德徒步圈服务协议》</label> 和<label>《隐私协议》</label></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true
			}
		},
		methods: {
			gtIndex(){
				uni.setStorageSync('token','8802e3467daf0c0bec22b81c1f65495c')
				this.$jump('../index/index','reLaunch')
				console.log(1);
			},
			myPhone(){
				this.$jump('./myLogin')
			}
		}
	}
</script>

<style lang="scss" scoped>
.ln_body{
	background: url('../../static/login/banner.gif') no-repeat -100rpx 0;
	background-size: 130%;
	padding-bottom: 50rpx;
	.ln_header{
		padding: 250rpx  0 0 125rpx;
		border-radius: 20rpx;
		image{
			width: 114rpx;
			height: 114rpx;
			border-radius: 20rpx;
		}
	}
	.ln_title{
		margin-left: 40rpx;
		color: #FFFFFF;
		flex-direction: column;
		p{
			font-size: 40rpx;
			font-family: YS HelloFont BangBangTi;
			font-weight: 400;
		}
		label{
			margin-top: 20rpx;
			font-size: 30rpx;
			font-weight: normal;
		}
	}
	.ln_btn{
		margin-top: 712rpx;
		.cls{
			margin: 0 auto;
			color: white;
			width: 518rpx;
			height: 88rpx;
			line-height: 88rpx;
			background: #35C77C;
			border-radius: 44rpx;
		}
		.pls{
			margin: 69rpx auto;
			color: white;
			width: 518rpx;
			height: 88rpx;
			line-height: 88rpx;
			color: white;
			background: #808080;
			border-radius: 44rpx;
		}
	}
}
.ln_txt{
	justify-content: center;
	margin-top: 112rpx;
	margin-bottom: 112rpx;
	text-align: center;
	image{
		width: 32rpx;
		height: 32rpx;
	}
	p{
		margin-left: 10rpx;
		width: 440rpx;
		color: white;
		font-size: 24rpx;
		label{
			font-size: 24rpx;
			color: #35C77C;
		}
	}
}
</style>
