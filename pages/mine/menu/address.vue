<template>
	<view class="body">
		<view class="nav pd30 dis_f alitmc">
			<u-icon @click="back" name="arrow-left" color='#000' size='18'></u-icon>
			<span>收货地址</span>
		</view>

		<view @click="setstro(v)" class="card dis_f flex_c pd30" v-for="(v,index) in list" :key="index">
			<p class="header">
				<label v-if="v.is_default == 1">默认</label>
				<text>{{v.name}}</text>
				<text>{{v.phone}}</text>
			</p>
			<p class="center">{{v.area}}{{v.address}}</p>
			<view class="bottom dis_f alitmc">
				<p class="dis_f alitmc" @click.stop="check(v,index)">
					<image v-show="v.is_default != 1"  class="ius"
						src="@/static/image/mine/radio.png" mode="">
					</image>
					<image v-show="v.is_default == 1"  class="ius"
						src="@/static/image/mine/radio1.png" mode="">
					</image>
					<label>设为默认</label>
				</p>
				<p class="dis_f alitmc left">
					<image src="@/static/image/mine/bianji.png" mode=""></image>
					<label @click.stop="toaddress(v)">编辑</label>
				</p>
				<p class="dis_f alitmc ml20">
					<image src="@/static/image/mine/delete.png" mode=""></image>
					<label @click.stop="deletes(v)">删除</label>
				</p>
			</view>
		</view>

		<view class="fixed dis_f jscc alitmc">
			<view class="btn dis_f alitmc jscc" @click="toAdd">
				<image src="@/static/image/mine/add.png" mode=""></image>
				<p>添加地址</p>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				list: [],
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getaddress()
		},
		methods: {
			async getaddress(){
				const res = await this.$http('/shop/user/address/list')
				this.list = res.data.data
			},
			setstro(v){
				const olay = uni.getStorageSync('play')
				if(olay == 'run'){
					uni.setStorageSync('address',v)
					uni.removeStorageSync('play')
					this.$jump('/pages/mine/menu/goPlay')
				}
				return false
			},
			back() {
				uni.navigateBack()
			},
			async check(v, index) {
				if(v.is_default == 1){
					return false
				}
				uni.showLoading()
				this.list.forEach((item,index)=>{
					item.is_default = 0
				})
				v.is_default = 1
				const res = await this.$http('/shop/user/address/default',{
					address_id:v.id
				})
				uni.hideLoading()
				this.getaddress()
			},
			toAdd() {
				this.$jump('./addAddress')
			},
			toaddress(v) {
				console.log(v);
				uni.navigateTo({
					url: './addAddress?id=' + v.id
				})
			},
			async deletes(v){
				uni.showLoading()
				const res = await this.$http('/shop/user/address/delete',{
					address_id:v.id
				})
				uni.hideLoading()
				uni.$u.toast('删除成功！')
				this.getaddress()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		min-height: 750px;
		height: auto;
		padding-bottom: 150rpx;

		.nav {
			width: 100%;
			height: 88rpx;
			background-color: white;
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

		.btn {
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
	.fixed{
		width: 100%;
		position: fixed;
		bottom: 80rpx;
		left: 0;
	}
</style>