<template>
	<view class="mn_body">
		<view class="mn_header">
			<p class="pls">{{tel}}</p>
			<p class="bls">由中国移动提供认证服务</p>
			<button><p>一键登录</p></button>
			<p @click='otherLogin()' class="os">登录其他账号</p>
		</view>
		
		<view class="ln_txt dis_f">
			<image v-show="isShow" src="../../static/login/xz.png" mode="" @click="isShow = !isShow"></image>
			<image v-show="!isShow" src="../../static/login/wxz.png" mode="" @click="isShow = !isShow"></image>
			<p>我已阅读并同意<label>《顺德徒步圈服务协议》</label> 和<label>《隐私协议》</label>及<label>《中国移动认证服务协议》</label></p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true,
				tel:'17633612613'
			}
		},
		created() {
			this.tel = this.geTel()
		},
		methods: {
			login(){
				if(this.isShow == false){
					uni.showToast({
						title:'请先阅读协议'
					})
					return false
				}
			},
			otherLogin(){
				this.$jump('./otherLogin')
			},
			geTel(){
			    var reg = /^(\d{3})\d{6}(\d{2})$/;  
			    return this.tel.replace(reg, "$1******$2");
			}
			// geTel(tel){
			//     return tel.substring(0, 3)+"****"+tel.substr(tel.length-4);
			// }
		}
	}
</script>

<style lang="scss" scoped>
.mn_header{
	padding-top: 451rpx;
	text-align: center;
	.pls{
		font-size: 58rpx;
		font-weight: bold;
	}
	.bls{
		font-size: 22rpx;
		color: #999999;
	}
	button{
		margin-top: 60rpx;
		width: 518rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #35C77C;
		border-radius: 44rpx;
		color: white;
		font-size: 30rpx;
	}
	.os{
		margin-top: 40rpx;
		font-weight: 500;
		font-size: 26rpx;
	}
}
.ln_txt{
	justify-content: center;
	margin-top: 112rpx;
	text-align: center;
	image{
		width: 32rpx;
		height: 32rpx;
	}
	p{
		width: 480rpx;
		color: black;
		font-size: 24rpx;
		label{
			font-size: 24rpx;
			color: #35C77C;
		}
	}
}
</style>
