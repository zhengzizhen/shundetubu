<template>
	<view>
		<view class="cont">
			<view class="input dis_f">
				<label class="dis_f">姓名</label>
				<input type="text" maxlength="11" placeholder="请输入姓名" v-model="user.name">
			</view>
			<!-- <view class="input dis_f">
				<label class="dis_f">身份证号</label>
				<input type="text" maxlength="11" placeholder="请输入身份证号" v-model="user.ID">
			</view> -->
			<view class="input dis_f">
				<label class="dis_f">支付宝账号</label>
				<input type="number" maxlength="11" placeholder="请输入支付宝账号" v-model="user.phone">
			</view>
			
		</view>
		
		<button class="btn" @click="submit">提交</button>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				user:{
					name:'',
					phone:'',
				},
				isShow:true,
				times:60,
				timer:null
			}
		},
		methods: {
			submit(){
				// let regName= /^\u4e00-\u9fa5{1,5}$/;
				// let regPhoen = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
				// if(!regName.test(this.user.name)){
				// 	console.log('请输入正确的姓名');
				// 	return false
				// }else if(!regPhoen.test(this.user.phone)){
				// 	console.log('请输入正确的手机号');
				// 	return false
				// }else if(this.user.ID.length<18){
				// 	console.log('请输入正确的身份证号');
				// 	return false
				// }
					console.log('验证通过');
			},
			cleartime(){
				if(this.times == 0){
					clearInterval(this.timer)
					this.isShow = true
					this.times = 60
					return false
				}
				this.times--
				
			},
			sendCode(){
				if(!this.isShow){
					return false
				}
				uni.showLoading({})
				
				let ms = setTimeout(uni.hideLoading,500)
				clearTimeout(ms)
				this.isShow = !this.isShow
				this.timer = setInterval(this.cleartime,1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont{
		margin-top: 121rpx;
		padding: 0 30rpx;
		.input{
			margin-top: 20rpx;
			border-bottom: 1px solid #E6E6E6;
			padding-bottom: 20rpx;
			label{
				width: 190rpx;
				font-size: 32rpx;
			}
			input{
				width: 300rpx;
			}
		}
		.send{
			text-align: right;
			width: 220rpx;
			color: #49CAA4;
		}
		.ms{
			text-align: right;
			font-size: 28rpx;
			width: 220rpx;
		}
	}
	.btn{
		width: 690rpx;
		height: 88rpx;
		background: #49CAA4;
		border-radius: 44rpx;
		color:white;
		font-size: 32rpx;
		margin-top: 1100rpx;
	}
</style>
