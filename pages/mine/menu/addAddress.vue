<template>
	<view>
		<view class="nav pd30 dis_f alitmc jscb">
			<view class="dis_f">
				<u-icon @click="back" name="arrow-left" color='#000' size='18'></u-icon>
				<span>编辑收货地址</span>
			</view>
			<p>删除</p>
		</view>
		
		<view class="dis_f content pd30 alitmc">
			<label>收货人</label>
			<input type="text">
		</view>
		
		<view class="dis_f content pd30 alitmc">
			<label>手机号码</label>
			<input maxlength="11" type="number">
		</view>
		
		<view class="dis_f content pd30 alitmc">
			<label>所在地区</label>
			<input type="text">
			<image @click="getLocaltion" src="@/static/image/mine/address.png" mode=""></image>
		</view>
		
		<view class="dis_f content pd30">
			<label>详细地址</label>
			<textarea class="textarea" name="" id="" cols="30" rows="10"></textarea>
		</view>
		
		<view class="pd30 dis_f alitmc jscb">
			<p>设为默认收货地址</p>
			<u-switch v-model="isTrue" @change="change"></u-switch>
		</view>
		
		
		
		<view class="btn dis_f alitmc jscc">
			<p>添加地址</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTrue:false
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			change(e){
				console.log(e);
			},
			getLocaltion(){
				uni.chooseLocation({
					success: function (res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		width: 100%;
		height: 88rpx;
		background-color: white;
		box-sizing: border-box;
		span {
			font-size: 32rpx;
			font-weight: bold;
			color: #222222;
			margin-left: 20rpx;
		}
		p{
			font-size: 28rpx;
			font-weight: 500;
			color: #49CAA4;
		}
	}
	.content{
		margin: 30rpx auto;
		font-size: 30rpx;
		label{
			width: 140rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}
		input{
			margin-left: 30rpx;
			box-sizing: border-box;
			padding-left: 30rpx;
			width: 500rpx;
			height: 99rpx;
			background: #F6F6F6;
			border-radius: 20rpx;
		}
		image{
			width: 27rpx;
			height: 36rpx;
			margin-left: -50rpx;
		}
		.textarea{
			margin-left: 30rpx;
			box-sizing: border-box;
			padding-left: 30rpx;
			width: 500rpx;
			height: 150rpx;
			background: #F6F6F6;
			border-radius: 20rpx;
		}
	}
	.btn {
		margin: 700rpx auto 0;
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
	}
</style>