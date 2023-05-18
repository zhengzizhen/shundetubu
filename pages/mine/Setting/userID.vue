<template>
	<view>
		<view class="cont">
			<view class="input dis_f">
				<label class="dis_f">姓名</label>
				<input type="text" placeholder="请输入姓名" v-model="user.username">
			</view>
			
			<view class="input dis_f">
				<label class="dis_f">身份证号</label>
				<input type="text" maxlength="18" placeholder="请输入身份证号" v-model="user.idcard">
			</view>
			
			<view class="input dis_f">
				<label class="dis_f">手机号</label>
				<input type="number" maxlength="11" placeholder="请输入手机号" v-model="user.phone">
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
					username:'',
					idcard:'',
					phone:''
				}
			}
		},
		onLoad() {
			this.user.phone = this.$store.state.userinfo.real.id_card_phone
		},
		methods: {
			async submit(){
				let regName= /^\u4e00-\u9fa5{1,5}$/;
				let regPhoen = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
				if(this.user.username == ''){
					uni.$u.toast('请输入姓名')
					return false
				}else 
				if(!regPhoen.test(this.user.phone)){
					uni.$u.toast('请输入正确的手机号')
					return false
				}
				uni.showLoading()
				const res = await this.$http('/user/update/real',this.user)
				uni.$u.toast(res.data.msg)
				this.$store.commit('real_status',1)
				setTimeout(()=>{
					this.$jump('/pages/mine/Setting/Setting','redirect')
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont{
		margin-top: 75rpx;
		padding: 0 30rpx;
		.input{
			margin-top: 20rpx;
			border-bottom: 1px solid #E6E6E6;
			padding-bottom: 20rpx;
			label{
				width: 200rpx;
				font-size: 32rpx;
			}
		}
	}
	.btn{
		width: 690rpx;
		height: 88rpx;
		background: #49CAA4;
		border-radius: 44rpx;
		color:white;
		font-size: 32rpx;
		margin-top: 800rpx;
	}
</style>
