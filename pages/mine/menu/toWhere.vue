<template>
	<view class="towhere pd30">
		<p class="totitle">姓名</p>
		<input type="text" placeholder="请输入" v-model="user.name">
		
		<p class="totitle">性别</p>
		<view class="sex dis_f alitmc" @click="cheout()">
			<image v-show="!isradio"  src="@/static/image/mine/radio.png" mode=""></image>
			<image v-show="isradio" src="@/static/image/mine/radio1.png" mode=""></image>
			<label>男</label>
		</view>
		<view class="sex m20 dis_f alitmc" @click="cheout1()">
			<image v-show="!isradio1"  src="@/static/image/mine/radio.png" mode=""></image>
			<image v-show="isradio1" src="@/static/image/mine/radio1.png" mode=""></image>
			<label>女</label>
		</view>
		
		<p class="totitle">当前居住地</p>
		<input type="text" placeholder="请输入" v-model="user.start">
		
		<p class="totitle">想去旅行地</p>
		<input type="text" placeholder="请输入" v-model="user.goto">
		
		<p class="totitle">日期时间</p>
		<input type="text" placeholder="请输入" v-model="user.time">
		
		<view class="btn" @click="submit">
			<p>提交</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isradio:true,
				isradio1:false,
				user:{
					name:'',
					start:'',
					goto:'',
					time:'',
					sex:'男'
				}
			}
		},
		methods: {
			cheout(){
				this.isradio = true
				this.isradio1 = false
				this.user.sex = '男'
			},
			cheout1(){
				this.isradio1 = true
				this.isradio = false
				this.user.sex = '女'
			},
			async submit(){
				if(this.user.name == ''){
					uni.$u.toast('姓名不能为空')
					return false
				}else if(this.user.start == ''){
					uni.$u.toast('出发地不能为空')
					return false
				}else if(this.user.goto == ''){
					uni.$u.toast('目的地不能为空')
					return false
				}else if(this.user.name == ''){
					uni.$u.toast('日期时间不能为空')
					return false
				}
				uni.showLoading()
				const res = await this.$http('/feedback/where',this.user)
				uni.hideLoading()
				uni.showToast({
					title:'提交成功',
					icon:"success"
				})
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
input{
	width: 691rpx;
	height: 89rpx;
	background: #FFFFFF;
	border: 1px solid #CCCCCC;
	font-size: 28rpx;
	padding-left: 20rpx;
	box-sizing: border-box;
}
.totitle{
	margin: 30rpx 0;
	font-size: 30rpx;
}
.sex{
	width: 691rpx;
	height: 89rpx;
	border: 1px solid #CCCCCC;
	box-sizing: border-box;
	image{
		margin-left: 20rpx;
		width: 40rpx;
		height: 40rpx;
	}
	label{
		margin-left: 10rpx;
	}
}
.btn{
	width: 690rpx;
	height: 88rpx;
	line-height: 88rpx;
	text-align: center;
	font-size: 32rpx;
	color: white;
	margin-top: 370rpx;
	background: #49CAA4;
	border-radius: 44rpx;
}
</style>
