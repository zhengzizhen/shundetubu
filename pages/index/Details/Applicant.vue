<template>
	<view class="body">
		<view @click="setpropos(v)" class="card dis_f flex_c pd30" v-for="(v,index) in list" :key="index">
			<p class="header">
				<label>默认</label>
				<text>{{v.username}}</text>
				<text>{{v.phone}}</text>
			</p>
			<p class="center">{{v.idcard}}</p>
			<view class="bottom dis_f alitmc">
				<p class="dis_f alitmc">
					<image v-if="v.is_default == 0" @click.stop="check(v,index)"  class="ius" src="@/static/image/mine/radio.png" mode="">
					</image>
					<image v-else  class="ius" src="@/static/image/mine/radio1.png" mode="">
					</image>
					<label>设为默认</label>
				</p>
				<p @click.stop="touser(v)" class="dis_f alitmc left">
					<image src="@/static/image/mine/bianji.png" mode=""></image>
					<label >编辑</label>
				</p>
				<p  class="dis_f alitmc ml20">
					<image src="@/static/image/mine/delete.png" mode=""></image>
					<label @click.stop="deletes(v)">删除</label>
				</p>
			</view>
		</view>
		
		
		<view class="posfx">
			<view class="btn dis_f alitmc jscc" @click="toAdd">
				<image src="@/static/image/mine/add.png" mode=""></image>
				<p>添加报名人</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				list:[]
			}
		},
		onLoad() {
		},
		onShow() {
			this.getlist()
		},
		methods: {
			async getlist(){
				const res = await this.$http('/trip/traveller/list')
				this.list = res.data.data
			},
			back() {
				uni.navigateBack()
			},
			async check(v,index) {
				uni.showLoading()
				const res = await this.$http('/trip/traveller/default',{
					traveller_id:v.id
				})
				uni.hideLoading()
				uni.$u.toast('设置成功')
				this.getlist()
			},
			toAdd() {
				this.$jump('./Adduser')
			},
			toaddress(){
				this.$jump('./Adduser')
			},
			touser(v){
				this.$jump('./Adduser?obj=','params',JSON.stringify(v))
			},
			async deletes(v){
				uni.showLoading({
					title:'删除中'
				})
				const ress = await this.$http('/trip/traveller/delete',{
					traveller_id:v.id
				})
				uni.hideLoading()
				uni.$u.toast('删除成功')
				this.getlist()
			},
			setpropos(v){
				uni.setStorageSync('Applicant',v)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		min-height: 750px;
		height: auto;
		padding-bottom: 150rpx;
		padding-top:20rpx;
		.nav {
			width: 100%;
			height: 88rpx;
			background-color: white;
			margin-top: 88rpx;
			span {
				font-size: 32rpx;
				font-weight: bold;
				color: #222222;
				margin-left: 20rpx;
			}
		}

		.card {
			padding: 30rpx;
			box-sizing: border-box;
			margin: 30rpx auto;
			width: 690rpx;
			height: 223rpx;
			background: #FFFFFF;
			border-radius: 20rpx;

			.header {
				font-size: 26rpx;

				label {
					width: 70rpx;
					height: 36rpx;
					background: #49CAA4;
					border-radius: 6rpx;
					color: white;
					font-size: 22rpx;
					padding: 0 10rpx;
					margin-right: 20rpx;
				}
			}

			.center {
				margin: 20rpx 0;
				font-size: 30rpx;
				padding-bottom: 20rpx;
				border-bottom: 1px solid #E6E6E6;
			}

			.bottom {
				.ius {
					width: 34rpx;
					height: 34rpx;
				}

				image {
					width: 22rpx;
					height: 22rpx;
				}

				label {
					margin-left: 10rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #666666;
				}

				.left {
					margin-left: 300rpx;
				}
			}
		}
		.posfx{
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			padding-bottom: 80rpx;
		}
		.btn {
			
			margin: 500rpx auto 0;
			width: 690rpx;
			height: 84rpx;
			background: #49CAA4;
			color: white;
			text-align: center;
			border-radius: 42rpx;

			p {
				font-size: 32rpx;
				margin-left: 10rpx;
			}

			image {
				width: 33rpx;
				height: 33rpx;
			}
		}
	}
</style>