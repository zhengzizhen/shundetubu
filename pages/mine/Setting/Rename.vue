<template>
	<view class="pos">
		<Nav title='编辑名字'>
			<template slot="left">
				<image @click="back()" class="leftimg" src="@/static/image/retail/back.png" mode=""></image>
			</template>
			<template slot="right">
				<p class="green" @click='reback()'>保存</p>
			</template>
		</Nav>
		<view class="st_body pd30">
			<view class="st_top dis_f jscb pd30 bor_r">
				<input ref="inputs" maxlength="24" type="text" v-model="name">
				<p>{{name.length}}/24</p>
			</view>
			<text>请设置2-24个字符</text>
		</view>
	</view>
</template>

<script>
	import Nav from '@/component/navgation/navgation.vue'
	export default {
		components: {
			Nav
		},
		data() {
			return {
				name: '',
				oldname:''
			};
		},
		onLoad(option) {
			this.oldname = option.name
			this.name = option.name
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			async reback() {
				if(this.name.length<2){
					uni.$u.toast('昵称格式不正确')
					return false
				}
				if(this.name == this.oldname){
					this.$jump('./Setting', 'redirect')
					return false
				}
				uni.showLoading()
				const res = await this.$http('/user/update/data',{
					nickname:this.name
				})
				uni.hideLoading()
				this.$store.commit('rename',this.name)
				this.$jump('./Setting', 'redirect')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pos{
	}
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

		input {}

		p {
			font-size: 22rpx;
			color: #999;
		}
	}

	text {
		font-size: 22rpx;
		color: #999;
	}

	.green {
		color: #49CAA4 !important;
		font-size: 28rpx;
	}
</style>