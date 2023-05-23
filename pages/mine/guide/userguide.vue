<template>
	<view class="pd30 body">
		<view class="input dis_f">
			<label>姓名</label>
			<input type="text" placeholder="请输入姓名" v-model="user.username">
		</view>

		<view class="input dis_f">
			<label>手机号</label>
			<input type="number" maxlength="11" placeholder="请输入手机号" v-model="user.phone">
		</view>

		<view class="input dis_f">
			<label>身份证号</label>
			<input type="text" placeholder="请输入身份证号" maxlength="18" v-model="user.idcard">
		</view>

		<view class="input dis_f">
			<label>住址</label>
			<input type="text" placeholder="请输入住址" v-model="user.address">
		</view>

		<view class="input dis_f">
			<label>城市</label>
			<input type="text" placeholder="请输入所在城市" v-model="user.city">
		</view>

		<view class="input dis_f">
			<label>签名</label>
			<input type="text" placeholder="请输入签名" v-model="user.intro">
		</view>

		<view class="input dis_f">
			<label>ID</label>
			<p>{{ID}}</p>
		</view>

		<p class="btn" @click='submit'>立即核对信息</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: '',
					phone: '',
					idcard: '',
					address: '',
					city: '',
					intro: ''
				},
				ID:''
			}
		},
		onLoad() {
			this.ID = this.$store.state.userinfo.id
		},
		methods: {
			async submit(){
				if(this.user.username == ''){
					uni.$u.toast('姓名不能为空')
					return false;
				}else if(this.user.phone == ''){
					uni.$u.toast('手机号不能为空')
					return false;
				}else if(this.user.idcard == ''){
					uni.$u.toast('身份证号不能为空')
					return false;
				}else if(this.user.address == ''){
					uni.$u.toast('住址不能为空')
					return false;
				}else if(this.user.city == ''){
					uni.$u.toast('城市不能为空')
					return false;
				}
				
				uni.showLoading()
				const res = await this.$http('/user/apply/akela',this.user)
				uni.hideLoading()
				this.$jump('./guide')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 50rpx;
	}

	.input {
		padding: 20rpx 0;
		border-bottom: 1px solid #E6E6E6;

		label {
			width: 160rpx;
		}

		input {
			padding-left: 40rpx;
		}

		p {
			padding-left: 40rpx;
		}
	}

	.btn {
		margin-top: 700rpx;
		font-size: 30rpx;
		width: 690rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		color: white;
		background: #49CAA4;
		border-radius: 44rpx;
	}
</style>