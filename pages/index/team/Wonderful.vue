<template>
	<view class="wl_body">
		<view class="wl_banner">
			<p>精彩团建</p>
		</view>
		
		<view class="wl_cont dis_f flex_c pd30" v-for="(v,i) in list" :key="i">
			<p class="wl_tit">武汉黄金屋</p>
			<view class="wl_location">
				<image  src="@/static/image/team/location.png" mode=""></image>
				<label>安徽·黄山 2023-01-12 出发</label>
			</view>
			<view class="wl_img dis_f">
				<view @click="$Resize(imglist,index)" class="img_c dis_f" v-for="(item,index) in imglist" :key="index">
					<image  class="bor_r" :src="item" mode=""></image>
				</view>
			</view>
			
			<view class="wl_link dis_f alitmc">
				<image src="@/static/image/team/link.jpg" mode=""></image>
				<text>【春行婺源】高铁往返，探秘境画里村落</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3],
				imglist:[
					'../../../static/index/zheng.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/zheng.jpg',
				]
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.wl_body{
		padding-bottom: 100rpx;
	}
.wl_banner{
	height: 430rpx;
	background: #537ECD;
	position: relative;
	p{
		color: white;
		font-size: 36rpx;
		position: absolute;
		font-weight: 500;
		bottom: 30rpx;
		left: 30rpx;
	}
}
.wl_cont{
	margin-top: 60rpx;
	.wl_tit{
		font-size: 30rpx;
		font-weight: bold;
		color: #222222;
	}
	.wl_location{
		margin: 10rpx 0;
		image{
			width: 20rpx;
			height: 20rpx;
		}
		label{
			font-size: 22rpx;
			font-weight: 500;
			color: #999999;
		}
	}
	.wl_img{
		flex-wrap: wrap;
		.img_c{
			margin: 10rpx 0;
			width: 33%;
			justify-content: center;
		}
		image{
			width: 214rpx;
			height: 214rpx;
		}
	}
	.wl_link{
		margin: 10rpx 0 0;
		image{
			width: 32rpx;
			height: 32rpx;
		}
		text{
			font-size: 26rpx;
			font-weight: 500;
			color: #49CAA4;
		}
	}
}
</style>
