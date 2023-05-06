<template>
	<view class="pd30 body">
		<view class="banners">
			<image src="../../static/index/changplus.jpg" mode=""></image>
		</view>
		
		<view class="banner" v-for="(v,i) in list" :key='i'>
			<p class="iun">HOT{{i+1}}</p>
			<view class="myVideos">
				<video class="myVideo"
					src="https://webstatic.mihoyo.com/upload/static-resource/2022/01/04/72f41ca0acf28922ee3cc2278d920a5f_7569813998111725618.mp4"></video>
			</view>
			<view class="dis_f txt">
				<p>【亭可马里季】斯里兰卡纯玩9天</p>
				<view class="dis_f jscb sil">
					<label class="green">跟团·3天</label>
					<label class="red">￥888</label>
				</view>
				<view class="">
					<label class="red">17181 </label><text>新用户首次活动选择</text>
				</view>
			</view>
			<view class="ms_user dis_f">
				<view>
					<image src="@/static/trends/user.png" mode=""></image>
					<p>李菲</p>
				</view>
				<view class="io">
					<text>02-19</text>
					<p>〝领队阿三非常有责任心 对旅途中每一个点了如指掌 路线设计劳逸结合 给力〞</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 2],
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title:option.name
			})
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.body{
	background-color: #FAFAFA;
}
video{
	border-radius: 20rpx;
}
.banners{
	image{
		margin-top: 40rpx;
		width: 100%;
		height: 300rpx;
		border-radius: 20rpx;
	}
}

.banner {
		height: 730rpx;
		margin-top: 30rpx;
		background-color: white;
		border-radius: 20rpx;
		position: relative;
		.iun{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 99;
			color: white;
			background: linear-gradient(0deg, #F36B31 0%, #FDB675 100%);
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			width: 98rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			font-size: 26rpx;
		}
		.myVideos{
			width: 100%;
			height: 360rpx;
			overflow: hidden;
			padding: 10rpx;
			background-color: #000;
			border-radius: 20rpx 20rpx 0 0;
			box-sizing: border-box;
			z-index: 98;
			.myVideo {
				box-sizing: border-box;
				z-index: 98;
				width: 100%;
				height: 340rpx;
			}
		}
		
		.txt{
			flex-direction: column;
			text-align: left;
			justify-content: center;
			padding: 10rpx 20rpx;
			.sil{
				margin-top: 10rpx;
			}
			.green{
				font-size: 22rpx;
				color: #49CAA4;
			}
			.red{
				color: red;
				font-size: 32rpx;
				font-weight: normal;
			}
		}
	}
	.ms_user{
		padding: 10rpx 20rpx;
		margin-top: 20rpx;
		text-align: center;
		image{
			width: 70rpx;
			height: 70rpx;
		}
		p{
			font-size: 26rpx;
		}
		.io{
			text-align: left;
			margin-left: 30rpx;
			background-color: #F6F7F9;
			padding: 20rpx;
			border-radius: 20rpx;
			text{
				font-size: 24rpx;
			}
			p{
				font-size: 24rpx;
			}
		}
	}
</style>
