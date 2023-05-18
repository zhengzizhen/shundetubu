<template>
	<view>
		<view class="cont">
			<view class="input dis_f">
				<label class="dis_f">姓名</label>
				<input type="text" maxlength="11" placeholder="请输入姓名" v-model="user.username">
			</view>
			
			<view class="input dis_f">
				<label class="dis_f">支付宝账号</label>
				<input type="number" maxlength="11" placeholder="请输入支付宝账号" v-model="user.account">
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
					account:'',
				},
				isShow:true,
				times:60,
				timer:null
			}
		},
		onLoad() {
			this.user.username = this.$store.state.userinfo.alipay.alipay_username
			this.user.account = this.$store.state.userinfo.alipay.alipay_account
			console.log(this.user);
		},
		methods: {
			async submit(){
				if(this.user.username == ''){
					uni.$u.toast('姓名不能为空')
					return false
				}else if(this.user.account == ''){
					uni.$u.toast('收款账号不能为空')
					return false
				}
				uni.showLoading()
				const res = await this.$http('/user/update/alipay',this.user)
				uni.hideLoading()
				var value = {}
				value.user = this.user
				value.state = 1
				this.$store.commit('alipay_status',value)
				uni.$u.toast('绑定成功')
				setTimeout(()=>{
					this.$jump('/pages/mine/Setting/playRMB','redirect')
				},500)
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
