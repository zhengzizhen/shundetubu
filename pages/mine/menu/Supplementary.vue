<template>
	<view class="cd_body">
		<view class="header">
			<u-tabs itemStyle="width:42%;padding-left: 15px; padding-right: 15px; height: 44px;" lineWidth="25"
				lineColor='#49CAA4' :list="list1" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		<view class="content" v-for="(item,index) in list" :key="index">
			<view class="cont_header dis_f jscb alitmc">
				<p>订单编号：8269686684414</p>
			</view>
			<view class="bot dis_f">
				<!-- <image src="@/static/index/zheng.jpg" mode=""></image> -->
				<view class="dis_f flex_c right">
					<p>【亭可马里季】斯里兰卡纯玩9天</p>
					<label>下单时间：2023-02-20  18:19</label>
					<view class="text">
						<text>订单金额：￥125</text>
						<text v-show="Sub" class="red">补款金额：￥125</text>
					</view>	
				</view>
			</view>
			<view class="bottom dis_f">
				<p v-show="!Sub" @click='toHotreissue'>改签</p>
				<p v-show="Sub">支付</p>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				listpls:[1,2],
				lists:[1],
				list1: [{
					name: '改签订单',
				}, {
					name: '补款订单',
				}],
				Sub:false
			}
		},
		onLoad() {
			this.list = this.listpls
		},
		methods: {
			change(item) {
				if(item.index == 1){
					this.list = this.lists
					this.Sub  = true
				}else{
					this.list = this.listpls
					this.Sub  = false
				}
			},
			toHotreissue(){
				this.$jump('/pages/mine/Hotorder/Hotreissue')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cd_body{
		background-color: #fafafa;
		height: 1500rpx;
		.header{
			width: 100%;
			background-color: white;
		}
	}
	.content{
		width: 690rpx;
		height: auto;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 20rpx 30rpx;
		padding: 30rpx;
		box-sizing: border-box;
		.cont_header{
			border-bottom: 1px solid #e6e6e6;
			padding-bottom: 20rpx;
			p{
				font-size: 30rpx;
				font-weight: 500;
				color: #666666;
			}
			text{
				font-size: 28rpx;
				font-weight: 500;
				color: #49CAA4;
			}
		}
		.bot{
			margin-top: 20rpx;
			image{
				width: 180rpx;
				height: 180rpx;
				border-radius: 20rpx;
			}
			.right{
				margin-left: 20rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
				label{
					font-size: 26rpx;
					font-weight: 500;
					color: #999999;
					margin: 10rpx 0;
				}
				.text{
					margin-top: 50rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #000000;
					.red{
						margin-left: 20rpx;
						color: #FF4040;
					}
				}
			}
		}
		.bottom{
			margin: 30rpx 0;
			justify-content: flex-end;
			p{
				width: 148rpx;
				height: 54rpx;
				line-height: 54rpx;
				text-align: center;
				background: #FFFFFF;
				border: 1px solid #999999;
				border-radius: 31rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #999999;
				margin-left: 30rpx;
			}
		}
	}
</style>