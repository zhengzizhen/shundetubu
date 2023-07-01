<template>
	<view class="mn_body">
		<view class="mn_header">
			<view class="">
				<u--input type='number' maxlength='11' placeholder="请输入手机号" shape='circle' :customStyle='styobj'
					border="surround" v-model="user.phone"></u--input>
			</view>

			<view class="mn_ps">
				<u--input type='number' maxlength='6' placeholder="请输入验证码" shape='circle' :customStyle='styobj'
					border="surround" v-model="user.sms_code">
					<template slot="suffix">
						<u-code ref="uCode" @change="codeChange" seconds="60" changeText="X秒重新获取"></u-code>
						<u-button class="getcode" @tap="getCode" :text="tips"></u-button>
					</template>
				</u--input>
			</view>
			<button class="button" @click="toindex">登录</button>
			<p class="os" @click='myLogin()'>本机号码一键登录</p>
		</view>

		<view class="ln_txt dis_f">
			<image v-show="isShow" src="/static/login/xz.png" mode="" @click="isShow = !isShow"></image>
			<image v-show="!isShow" src="/static/login/wxz.png" mode="" @click="isShow = !isShow"></image>
			<p>我已阅读并同意<label @click="todetails(13)">《顺德徒步圈服务协议》</label> 和<label  @click="todetails(12)">《隐私协议》</label></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					phone: '',
					sms_code: ''
				},
				isShow: true,
				styobj: {
					backgroundColor: "#F7F7F7",
					paddingLeft: '40rpx',
					height: '50rpx'
				},
				tips: '',
				value: '',
				phone: ''
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			todetails(v){
				this.$jump('./agreement?id=','params',v)
			},
			async getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})

					let phone = /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/

					if (!phone.test(this.user.phone)) {
						uni.$u.toast('请输入正确的手机号码')
						return false
					} else {
						uni.showLoading()
						const res = await this.$http('/send/sms', {
							phone: this.user.phone,
							type: 'register'
						})
						uni.hideLoading()
						uni.$u.toast(res.data.msg)
					}
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			async toindex() {
				let phone = /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/

				if (!phone.test(this.user.phone)) {
					uni.$u.toast('请输入正确的手机号')
					return false
				} else if (this.user.sms_code.length < 6) {
					uni.$u.toast('验证码格式不正确')
					return false
				} else {
					uni.showLoading()
					const res = await this.$http('/login/phone_smscode', this.user)
					uni.hideLoading()
					uni.$u.toast('登陆成功')
					uni.setStorageSync('userinfo', res.data)
					uni.setStorageSync('token', res.data.data.token)
					setTimeout(() => {
						this.$jump('/pages/index/index', 'reLaunch')
					}, 200)
					return false
				}
			},
			codeChange(text) {
				this.tips = text;
			},
			myLogin(){
				this.$jump('./myLogin')
			},
			myLogins(){
				this.$jump('./login')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mn_header {
		width: 75%;
		margin: 0 auto;
		padding-top: 451rpx;
		text-align: center;

		.pls {
			font-size: 58rpx;
			font-weight: bold;
		}

		.bls {
			font-size: 22rpx;
			color: #999999;
		}

		.os {
			margin-top: 40rpx;
			font-weight: 500;
			font-size: 26rpx;
		}
	}

	.ln_txt {
		justify-content: center;
		margin-top: 112rpx;
		text-align: center;

		image {
			width: 32rpx;
			height: 32rpx;
		}

		p {
			width: 430rpx;
			color: black;
			font-size: 24rpx;

			label {
				font-size: 24rpx;
				color: #35C77C;
			}
		}
	}

	.mn_ps {
		margin-top: 50rpx;
	}

	.getcode {
		border: none;
		height: 50rpx;
		background-color: #F7F7F7;
		color: #35C77C;
	}

	.button {
		margin-top: 60rpx;
		width: 568rpx;
		height: 78rpx;
		line-height: 78rpx;
		background: #35C77C;
		border-radius: 44rpx;
		color: white;
		font-size: 30rpx;
	}
</style>