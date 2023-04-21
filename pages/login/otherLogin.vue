<template>
	<view class="mn_body">
		<view class="mn_header">
			<view class="">
				<u--input type='number' maxlength='11' placeholder="请输入手机号" shape='circle' :customStyle='styobj'
					border="surround" v-model="user.phone"></u--input>
			</view>

			<view class="mn_ps">
				<u--input type='number' maxlength='6' placeholder="请输入验证码" shape='circle' :customStyle='styobj'
					border="surround" v-model="user.code">
					<template slot="suffix">
						<u-code ref="uCode" @change="codeChange" seconds="60" changeText="X秒重新获取"></u-code>
						<u-button class="getcode" @tap="getCode" :text="tips"></u-button>
					</template>
				</u--input>
			</view>
			<button class="button">登录</button>
			<p class="os" @click='myLogin()'>本机号码一键登录</p>
		</view>

		<view class="ln_txt dis_f">
			<image v-show="isShow" src="../../static/login/xz.png" mode="" @click="isShow = !isShow"></image>
			<image v-show="!isShow" src="../../static/login/wxz.png" mode="" @click="isShow = !isShow"></image>
			<p>我已阅读并同意<label>《顺德徒步圈服务协议》</label> 和<label>《隐私协议》</label></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					phone: '',
					code: ''
				},
				isShow: true,
				styobj: {
					backgroundColor: "#F7F7F7",
					paddingLeft: '40rpx',
					height: '50rpx'
				},
				tips: '',
				value: ''
			}
		},
		onLoad() {
			this.getUser()
			console.log();
		},
		methods: {
			async  getUser() {
			  try {
			    const data = await this.$request({
			      url: '/user/over/order'
			    })
			    console.log(data)
			  } catch (error) {
			    console.log(error)
			  }
			},
			change(e) {
				console.log('change', e);
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			codeChange(text) {
				this.tips = text;
			},
			myLogin() {
				this.$jump('./myLogin', 'redirect')
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