<template>
	<view class="oy_body">
		<image class="imgs" :src="params.image" mode=""></image>
		<view class="oy_cont bor_r" v-for="(item,index) in list" :key="index">
			<image :src="item.master_image" mode=""></image>
			<p class="tit">{{item.title}}</p>
			<view class="oy_location dis_f jscb">
				<view class="left dis_f alitmc ">
					<image src="@/static/image/team/location.png" mode=""></image>
					<label>{{item.bourn}} {{item.day}}天</label>
				</view>
				<view class="right">
					<label>￥{{item.price}}/人</label><text>起</text>
				</view>
			</view>
			
			<view class="oy_tos dis_f alitmc jscb">
				<view class="tosimg">
					<image v-for="(v,i) in item.user_avatar" :key="i" :src="v" mode=""></image>
				</view>
				<p>{{item.traveller_number}}人去过</p>
				<button @click="toDetails(item.id)">查看详情</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				page:1
			}
		},
		onLoad(option) {
			this.params = JSON.parse(option.obj)
			uni.setNavigationBarTitle({
				title:this.params.name
			})
			this.getlist(this.params.id)
		},
		methods: {
			async getlist(id){
				uni.showLoading()
				const res = await this.$http('/trip/teamcustom/detail',{
					page:this.page,
					limit:10,
					id
				})
				uni.hideLoading()
				this.list = this.list.concat(res.data.data)
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.oy_body {
		background-color: #18ACB6;
		padding: 80rpx 30rpx 100rpx;
		min-height: 100vh;
		height: auto;
	}
	.imgs{
		border-radius: 20rpx;
		width: 100%;
		height: 350rpx;
		box-sizing: border-box;
	}
	.oy_cont {
		margin: 20rpx 0rpx;
		height: 570rpx;
		padding:0 0 20rpx 0;
		background-color: white;
		image {
			width: 100%;
			height: 340rpx;
			border-radius: 20rpx 20rpx 0 0;
		}

		.tit {
			margin-top: 20rpx;
			width: 100%;
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
			padding: 0 10rpx;
		}

		.oy_location {
			padding: 0 20rpx;

			image {
				width: 27rpx;
				height: 27rpx;
			}

			.left {
				label {
					font-size: 24rpx;
					font-weight: 500;
					color: #999999;
					margin-left: 5rpx;
				}
			}

			.right {
				label {
					font-size: 28rpx;
					color: #FF4040;
				}
				text{
					font-size: 22rpx;
					color: #999;
				}
			}
		}
	}
	.oy_tos{
		margin-top: 20rpx;
		padding: 0 10rpx;
		image{
			width: 65rpx;
			height: 64rpx;
			border-radius: 50%;
		}
		.tosimg{
			width: 200rpx;
			image{
				margin-left: -25rpx;
			}
			image:first-child{
				margin-left: 0 !important;
			}
		}
		p{
			width: 270rpx;
			font-size: 24rpx;
			margin-left: 10rpx;
			font-weight: 500;
			color: #999999;
		}
		button{
			width: 182rpx;
			height: 64rpx;
			line-height: 64rpx;
			background: #49CAA4;
			border-radius: 32rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
		}
	}
	button{
		font-family: 'PF';
	}
</style>