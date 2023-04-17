<template>
	<view class="br_conent pd30">
		<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
			<image src="@/static/index/组 12@2x(1).jpg" mode=""></image>
			<view class="dc_god">
				<p>【亭可马里季】斯里兰卡纯玩9天</p>
				<view class="dc_latt dis_f">
					<label>04.02剩3名额</label>
				</view>
				<view class="dc_span dis_f alitmc jscb">
					<text>2天前浏览</text>
					<label>报名中</label>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.dc_mod {
		position: relative;
		background-color: white;
		padding: 30rpx 20rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #e6e6e6;
	
		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}
	
		.dc_god {
			margin-left: 20rpx;
			p{
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}
		}
	
		.posw {
			position: absolute;
			top: 30rpx;
			left: 20rpx;
			width: 80rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #49CAA4;
			z-index: 2;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			text-align: center;
			color: white;
			font-size: 22rpx;
	
		}
	
		.dc_latt {
			margin-top: 20rpx;
	
			label {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
	
		}
		.dc_span{
			margin-top: 50rpx;
			text{
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
			label{
				width: 99rpx;
				height: 40rpx;
				line-height: 40rpx;
				background: #F2AD5A;
				font-size: 24rpx;
				color: white;
				text-align: center;
			}
		}
	
	}
</style>