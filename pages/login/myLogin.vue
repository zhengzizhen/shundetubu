<template>
	<view class="mn_body">
		<view class="btn" @click="login">
			本机账号一键登录
		</view>
	</view>
</template>
<script>
	import NEOneLogin from '@yidun/quickpass-sdk-one-login-h5';
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			const oMeta = document.createElement('meta');
			oMeta.name = "referrer";
			oMeta.content = "always"
			document.getElementsByTagName('head')[0].appendChild(oMeta);
			this.getlist()
		},
		methods: {
			getlist(){
				const neOneLogin = new NEOneLogin({
					businessId: '4898ffb3aad24a319c4343645299755d',
					logo: 'https://img0.baidu.com/it/u=2024800254,155138524&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500',
					phoneInputStyle: 'square'
				});
				console.log(neOneLogin);
				neOneLogin.getToken();
			},
			login() {
				// this.neOneLogin.on('success', (data) => {
				//   console.log('success', data);
				//   // ajax({
				//   //   url: 'https://xxxxx.com/login',
				//   //   data: {
				//   //     token: data.token,
				//   //     accessToken: data.accessToken,
				//   //   },
				//   // });
				// });
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn {
		margin: 480rpx auto;
		color: white;
		width: 518rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #35C77C;
		border-radius: 44rpx;
		text-align: center;
	}
</style>