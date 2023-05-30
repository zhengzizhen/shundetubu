<template>
	<view class="pd30 body">
		<view class="bor_r user" >
			<view class="inlink dis_f">
				<label>姓名</label>
				<input type="text" placeholder="请务必填写实名" v-model="username">
				<image v-show="isShow" src="@/static/login/xz.png" mode="" @click="isShow = !isShow"></image>
				<view class="jiu" v-show="!isShow" @click="isShow = !isShow"></view>
				<label class="opi">设为默认</label>
			</view>
			<view class="inlink dis_f">
				<label>身份证</label>
				<input v-model="idcard"  maxlength="18" type="text" placeholder="请输入您的身份证号">
			</view>
			<view class="inlink dis_f">
				<label>电话号码</label>
				<input v-model="phone" maxlength="11" type="number" placeholder="请输入您的电话号码">
			</view>
			<text @click="changemit" v-if="change">保存联系人</text>
			<text @click="submit" v-else>保存联系人</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				username:'',
				idcard:'',
				phone:'',
				is_default:'',
				change:false,
				userid:''
			}
		},
		onLoad(option) {
			if(option.obj){
				const params = JSON.parse(option.obj)
				this.username = params.username
				this.phone = params.phone
				this.idcard = params.idcard
				this.is_default = params.is_default
				this.userid = params.id
				if(this.is_default == 0){
					this.isShow = false
				}else if(this.is_default == 1){
					this.isShow = true
				}
				this.change = true
			}
		},
		methods: {
			async submit(){
				let regu = /^1[3-9][0-9]{9}$/
				if(this.username == ''){
					uni.$u.toast('请填写您的姓名')
					return false
				}else if(this.idcard == ''){
					uni.$u.toast('请填写您的身份证号')
					return false
				}else if(this.phone == ''){
					uni.$u.toast('手机号码不能为空')
					return false
				}else if(!regu.test(this.phone)){
					uni.$u.toast('请输入正确的手机号码')
					return false
				}
				if(this.isShow == true){
					this.is_default = 1
				}else{
					this.is_default = 0
				}
				uni.showLoading()
				const res = await this.$http('/trip/traveller/add',{
					username:this.username,
					phone:this.phone,
					idcard:this.idcard,
					is_default:this.is_default,
				})
				uni.hideLoading()
				uni.$u.toast('保存成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			},
			async changemit(){
				let regu = /^1[3-9][0-9]{9}$/
				if(this.username == ''){
					uni.$u.toast('请填写您的姓名')
					return false
				}else if(this.idcard == ''){
					uni.$u.toast('请填写您的身份证号')
					return false
				}else if(this.phone == ''){
					uni.$u.toast('手机号码不能为空')
					return false
				}else if(!regu.test(this.phone)){
					uni.$u.toast('请输入正确的手机号码')
					return false
				}
				if(this.isShow == true){
					this.is_default = 1
				}else{
					this.is_default = 0
				}
				uni.showLoading()
				const res = await this.$http('/trip/traveller/update',{
					username:this.username,
					phone:this.phone,
					idcard:this.idcard,
					is_default:this.is_default,
					traveller_id:this.userid
				})
				uni.hideLoading()
				uni.$u.toast('保存成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
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
