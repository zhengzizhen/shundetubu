<template>
	<view class="pd30">
		<view class="hl_content">			
			<view class="content dis_f" v-for="(item,index) in list" :key="index" @click="toDetail()">
				<image class="bor_r" src="@/static/index/zheng.jpg" mode=""></image>
				<view class="text">
					<p>锡兰红茶，来自斯里兰卡高山 纯手工采摘</p>
					<text>斯里兰卡原装进口，世界上最干净的 茶op等级锡兰红茶，唐红透亮...</text>
					<label>火热售罄，正在补货中...</label>
				</view>
			</view>
			
		</view>
		
		<view class="fixed">
			<image src="@/static/image/mine/shop.png" @click="toShop()" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3],
			}
		},
		methods: {
			toShop(){
				this.$jump('./MyCart')
			},
			toDetail(){
				this.$jump('./shopDetail')
			}
		}
	}
</script>

<style lang="scss" scoped>
.hl_content{
		.content{
			margin: 20rpx 0;
			padding-bottom: 30rpx;
			border-bottom: 1px solid #e6e6e6;
			image{
				width: 280rpx;
				height: 280rpx;
			}
			.text{
				margin-left: 20rpx;
				width: 400rpx;
				p{
					font-size: 30rpx;
					font-weight: 500;
					color: #222222;
				}
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #666666;
				}
				label{
					display: block;
					margin-top: 70rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #FF4040;
				}
			}
		}
	}
	.fixed{
		position: fixed;
		bottom: 160rpx;
		right: 50rpx;
		image{
			width: 114rpx;
			height: 114rpx;
		}
	}
</style>
