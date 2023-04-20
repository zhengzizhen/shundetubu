<template>
	<view class="body pd30">
		<view class="cont dis_f alitmc jscc" v-show="isShow" @click="isShow = !isShow">
			<p>+ 添加紧急联系人</p>
		</view>

		<view class="bottom" v-show="!isShow">
			<view class="inpt dis_f">
				<label>姓名：</label>
				<input v-model="user.name" type="text" maxlength="6" placeholder="请输入姓名">
			</view>
			<view class="inpt dis_f">
				<label>证件号码：</label>
				<input v-model="user.id" type="text" maxlength="18" placeholder="请输入证件号码">
			</view>
			<view class="inpt dis_f">
				<label>电话号码：</label>
				<input v-model="user.phone" type="text" maxlength="11" placeholder="请输入电话号码">
			</view>
		</view>


		<view class="fixed" @click="toshow">
			<p class="btn">替员</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true,
				user:{
					name:'',
					id:'',
					phone:''
				}
			}
		},
		methods: {
			toshow(){
				if(this.isShow == false){
					let regphone = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
					var regID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
					if(this.user.id == ''){
						uni.showToast({
							title:'身份证不能为空',
							icon:'none'
						})
						return false;
					}else if(!regID.test(this.user.id)){
						uni.showToast({
							title:'身份证输入不合法',
							icon:'none'
						})
						return false;
					}else if(this.user.phone == ''){
						uni.showToast({
							title:'手机号码不能为空',
							icon:'none'
						})
						return false;
					}else if(!regphone.test(this.user.phone)){
						uni.showToast({
							title:'请填写正确的手机号码',
							icon:'none'
						})
						return false;
					}
					this.isShow = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 1500rpx;
		height: auto;
		padding-top: 40rpx;

		.cont {
			width: 690rpx;
			height: 88rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			color: #999999;
		}
	}

	.fixed {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 750rpx;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);

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

	.bottom {
		padding: 30rpx;
		box-sizing: border-box;
		margin: 30rpx auto;
		width: 690rpx;
		height: 280rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		label{
			font-size: 30rpx;
		}
		input{
			font-size: 30rpx;
		}
		.inpt {
			height: 89rpx;
			color: #000;
			font-size: 30rpx;
		}
	}
</style>