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
			<button class="cls" @click='wxlogin()'>
				<p>使用微信授权登录</p>
			</button>
			<button class="pls" @click="myPhone()">
				<p>手机号登录</p>
			</button>
		</view>

		<view class="ln_txt dis_f">
			<image v-show="isShow" src="@/static/login/xz.png" mode="" @click="isShow = !isShow"></image>
			<image v-show="!isShow" src="@/static/login/wxz.png" mode="" @click="isShow = !isShow"></image>
			<p>我已阅读并同意<label @click="todetails(13)">《顺德徒步圈服务协议》</label> 和<label @click="todetails(12)">《隐私协议》</label></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				code: ''
			}
		},
		onShow() {
			this.getUrlParam()
		},
		methods: {
			todetails(v){
				this.$jump('./agreement?id=','params',v)
			},
			wxlogin() {
				let local = encodeURIComponent(window.location.href); //获取当前页面地址
				window.location.href =
					"https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
					'wx3ec2b3f8c9503af2' + ///你APP申请的APPId，每个app都有个ID是识别你app的方式
					"&redirect_uri=" +
					local +
					"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
			},
			myPhone() {
				this.$jump('./login')
			},
			getUrlParam() {
				let url = window.location.href.split('#')[0]
				let serch = url.split('?')[1]
				let _this = this;
				if (serch) {
					let arr = serch.split('&')
					let code = arr[0].split('code=')[1]
					this.code = arr[0].split('code=')[1]
					// 此时获取到的code码需要你传给后端，因为微信的安全机制，前端不能做处理
					this.logins(code)
				} else {
					return null
				}
			},
			async logins(v) {
				uni.showLoading({
					title: '登录中'
				})
				const res = await this.$http('/login/wx_login', {
					code: v
				})
				uni.hideLoading()
				uni.$u.toast('登陆成功')
				uni.setStorageSync('userinfo', res.data)
				uni.setStorageSync('token', res.data.data.token)
				setTimeout(() => {
					this.$jump('/pages/index/index', 'reLaunch')
				}, 200)
				return false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ln_body {
		background: url('../../static/login/banner.gif') no-repeat -100rpx 0;
		background-size: 130%;
		padding-bottom: 50rpx;

		.ln_header {
			padding: 250rpx 0 0 125rpx;
			border-radius: 20rpx;

			image {
				width: 114rpx;
				height: 114rpx;
				border-radius: 20rpx;
			}
		}

		.ln_title {
			margin-left: 40rpx;
			color: #FFFFFF;
			flex-direction: column;

			p {
				font-size: 40rpx;
				font-family: YS HelloFont BangBangTi;
				font-weight: 400;
			}

			label {
				margin-top: 20rpx;
				font-size: 30rpx;
				font-weight: normal;
			}
		}

		.ln_btn {
			margin-top: 712rpx;

			.cls {
				margin: 0 auto;
				color: white;
				width: 518rpx;
				height: 88rpx;
				line-height: 88rpx;
				background: #35C77C;
				border-radius: 44rpx;
			}

			.pls {
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

	.ln_txt {
		justify-content: center;
		margin-top: 112rpx;
		margin-bottom: 112rpx;
		text-align: center;

		image {
			width: 32rpx;
			height: 32rpx;
		}

		p {
			margin-left: 10rpx;
			width: 440rpx;
			color: white;
			font-size: 24rpx;

			label {
				font-size: 24rpx;
				color: #35C77C;
			}
		}
	}
</style>