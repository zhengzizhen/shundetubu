<template>
		<view class="st_body pd30">
			<view class="bor_r">
				<view class="st_top dis_f jscb pd30 " @click="man()">
					<p>男</p>
					<image v-show="isShow" src="@/static/image/mine/success.jpg" mode=""></image>
				</view>
				<view class="st_top dis_f jscb pd30" @click="woman()">
					<p>女</p>
					<image v-show="!isShow" src="@/static/image/mine/success.jpg" mode=""></image>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				isShow:true,
				timer:''
			};
		},
		onLoad(option) {
			if(option.sex == '女'){
				this.isShow = false
			}
		},
		methods:{
			man(){
				if(this.isShow){
					return false
				}
				clearTimeout(this.timer)
				this.timer = setTimeout(async ()=>{
					const res = await this.$http('/user/update/data',{
						sex:'男'
					})
				},500)
				this.$store.commit('resex','男')
				console.log(this.$store.state.userinfo);
				this.isShow = true
			},
			woman(){
				if(!this.isShow){
					return false
				}
				clearTimeout(this.timer)
				this.timer = setTimeout(async ()=>{
					const res = await this.$http('/user/update/data',{
						sex:'女'
					})
				},500)
				this.$store.commit('resex','女')
				console.log(this.$store.state.userinfo);
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.st_body {
		background: #FAFAFA;
		padding-top: 30rpx;
		padding-bottom: 190rpx;
		height: 750px;
	}

	.st_top {
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid #f7f7f7;
		background-color: white;
		align-items: center;
		image{
			width: 29rpx;
			height: 21rpx;
		}
	}
</style>