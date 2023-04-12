<template>
	<view class="pd30 body">
		<view class="bor_r user" >
			<view class="inlink dis_f">
				<label>姓名</label>
				<input type="text" placeholder="请务必填写实名">
				<image v-show="isShow" src="@/static/login/xz.png" mode="" @click="isShow = !isShow"></image>
				<view class="jiu" v-show="!isShow" @click="isShow = !isShow"></view>
				<label class="opi" >设为默认</label>
			</view>
			<view class="inlink dis_f">
				<label>身份证</label>
				<input  maxlength="18" type="text" placeholder="">
			</view>
			<view class="inlink dis_f">
				<label>电话号码</label>
				<input maxlength="11" type="number" placeholder="">
			</view>
			<text>保存联系人</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.body{
	background-color: #fafafa;
	padding-top: 50rpx;
	height: 1500rpx;
}
image{
	margin-left: 50rpx;
	width: 36rpx;
	height: 36rpx;
}
.jiu{
	width: 36rpx;
	height: 36rpx;
	background: #DEDEDE;
	border-radius: 50%;
	margin-left: 50rpx;
}
.opi{
	font-size: 24rpx;
	font-weight: 500;
	color: #666666;
	margin-left: 10rpx;
}
.user{
	height: 340rpx;
	background-color: #fff;
	padding: 20rpx 30rpx;
	.inlink{
		margin-top: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #E6E6E6;
	}
	input{
		margin-left: 40rpx;
	}
	text{
		display: block;
		font-size: 34rpx;
		text-align: center;
		margin: 30rpx auto 0;
		font-weight: 500;
		color: #49CAA4;
	}
}
</style>
