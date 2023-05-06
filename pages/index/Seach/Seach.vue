<template>
	<view :class="isShow?'bodys':'body'">
		<view class="sh_seach dis_f">
			<u-icon @click='back()' name="arrow-left" color='#222222' size='20'></u-icon>
			<u-search :showAction="true" :actionStyle ='tis' actionText="搜索" :animation="false" @search='search()' @custom = 'search()'></u-search>
		</view>
		<view v-show="isShow">
			<view class="pd30">
				<p class="title">本周热榜HOT</p>
			</view>
		
			<view class="pd30 sh_label dis_f ">
				<p><label>武夷山</label></p>
				<p><label>黄山</label></p>
				<p><label>泰山</label></p>
				<p><label>武夷山</label></p>
				<p><label>武夷山</label></p>
			</view>
			
			<view class="pd30">
				<p class="title">路线周榜</p>
			</view>
			
			<view class="sh_content dis_f pd30 alitmc" v-for="(item,index) in list" :key="index">
				<p class="titsh">{{index+1}}</p>
				<view class="center dis_f">
					<image src="@/static/image/trends/wxx.jpg" mode=""></image>
					<view class="centers">
						<view class="dis_f jscb inj">
							<p>[非周末]新疆游玩3天</p>
							<view class="dis_f hots alitmc jscb">
								<image src="../../../static/image/index/hot.png" mode=""></image>
								<label>1366</label>
							</view>
						</view>
						<label class="reds">￥</label><text class="red">40</text>
						<view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view v-show="!isShow" class="pd30">
			<view class="banner">
				<p class="iun">路线-2天</p>
				<image class="image" src="@/static/index/changplus.jpg" mode=""></image>
				<view class="dis_f txt">
					<p>【亭可马里季】斯里兰卡纯玩9天</p>
					<view class="iuso dis_f">
						<label >03.18已满员 </label>
						<text>04.02剩3名额</text>
						<u-icon name="arrow-right" color="#999999" size='12'></u-icon>
					</view>
					<view class="dis_f jscb sil">
						<label class="green">4.91分丨目的地集合</label>
						<label class="red">￥888</label>
					</view>
					
				</view>
				<view class="ms_user dis_f">
					<view style="text-align: center;">
						<image src="@/static/trends/user.png" mode=""></image>
						<p style="font-size: 24rpx;">李菲</p>
					</view>
					<view class="io">
						<text>02-19</text>
						<p>〝领队阿三非常有责任心 对旅途中每一个点了如指掌 路线设计劳逸结合 给力〞</p>
					</view>
				</view>
			</view>
			
			<view class="dc_mod dis_f" v-for=" (item,index) in list1" :key="index">
				<image src="@/static/index/zheng.jpg" mode=""></image>
				<view class="dc_god">
					<p>【亭可马里季】斯里兰卡纯玩9天</p>
					<text class="posw">3天</text>
					<view class="dc_latt dis_f">
						<text>03.18已满员</text>
						<label>04.02剩3名额</label>
						<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="dc_latts dis_f">
						<text>进入西藏首选</text>
						<label>限时40天</label>
					</view>
					<view class="dc_span dis_f">
						<text>￥888</text>
						<label>4.91分丨目的地集合</label>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true,
				list:[1,2,3,4,5],
				list1:[1,2,3],
				tis:{
					color:'white',
					padding:'10rpx',
					background:'#49CAA4',
					borderRadius:'50rpx'
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			search(){
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		background-color: #FAFAFA;
		padding-top: 88rpx;
	}
	.bodys{
		background-color: white;
		padding-top: 88rpx;
	}
	.sh_seach {
		margin: 40rpx 0rpx 20rpx;
		padding: 0 20rpx 20rpx;
		background-color: white;
		input {
			margin-left: 10rpx;
		}
	}

	.title {
		margin: 30rpx 0 10rpx;
	}

	.sh_label {
		flex-wrap: wrap;
		p {
			padding: 10rpx 30rpx;
			background-color: #F7F7F7;
			border-radius: 50rpx;
			margin: 20rpx 10rpx;
		}
		p:nth-child(-n + 3) {
			padding-left: 50rpx;
			// background-color: red;
			background: url('../../../static/image/index/hot.png') no-repeat 12rpx 18rpx;
			background-color: #F7F7F7;
			background-size: 15%;
		}
		label{
			font-size: 26rpx;
			color: #222222;
		}

		image {
			width: 25rpx;
			height: 29rpx;
		}
	}
	.sh_content{
		margin: 40rpx 0;
		.center{
			image{
				width:120rpx;
				height:120rpx;
				border-radius: 20rpx;
			}
		}
		
	}
	
	.titsh{
		font-size: 30rpx;
		font-weight: bold;
		color: #000000;
	}
	.center{
		margin-left: 20rpx;
		p{
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
		}
	}
	.red{
		color:#FF4040 ;
		font-size: 36rpx;
		font-weight: bold;
	}
	.reds{
			margin-left: 20rpx;
			font-size: 28rpx;
			color:#FF4040 ;
			font-weight: bold;
	}
	.hots{
		margin-left: 160rpx;
		image{
			width: 25rpx !important;
			height: 29rpx !important;
		}
		label{
			margin-left: 10rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}
		
	}
	.inj{
		margin-left: 20rpx;
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
				z-index: 2;
				color: white;
				line-height: 42rpx;
				text-align: center;
				font-size: 24rpx;
				width: 130rpx;
				height: 42rpx;
				background: #49CAA4;
				border-radius: 20rpx 0rpx 20rpx 0rpx;
			}
			.image {
				width: 100%;
				height: 340rpx;
				border-radius: 20rpx 20rpx 0 0;
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
					color: #999;
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
			image{
				width: 70rpx;
				height: 70rpx;
			}
			.io{
				text-align: left;
				margin-left: 30rpx;
				background-color: #F6F7F9;
				color: #999999;
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
		.iuso{
			margin: 10rpx 0;
			label{
				width: 158rpx;
				height: 36rpx;
				background: #FFA1AD;
				color: white;
				font-size: 24rpx;
				padding: 5rpx 10rpx;
			}
			text{
				margin-left: 20rpx;
				width: 158rpx;
				height: 36rpx;
				background: #F2AD5A;
				color: white;
				font-size: 24rpx;
				padding: 5rpx 10rpx;
			}
		}
		.dc_mod {
			position: relative;
			background-color: white;
			padding: 30rpx 20rpx;
			margin: 30rpx 0;
			border-radius: 20rpx;
			image {
				width: 240rpx;
				height: 240rpx;
				border-radius: 20rpx;
			}
		
			.dc_god {
				margin-left: 20rpx;
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
				margin-top: 10rpx;
		
				text {
					padding: 5rpx 8rpx;
					color: #FFFFFF;
					font-size: 22rpx;
					background-color: #FFA1AD;
					margin-left: 10rpx;
				}
		
				label {
					margin-left: 20rpx;
					padding: 5rpx 8rpx;
					color: #FFFFFF;
					font-size: 22rpx;
					background-color: #F2AD5A;
				}
		
				p {
					font-size: 22rpx;
					align-items: center;
					margin-left: 10rpx;
				}
			}
			.dc_latts {
				margin-top: 10rpx;
					
				text {
					padding: 5rpx 8rpx;
					color: #E49332;
					font-size: 22rpx;
					background-color: #FFECD6;
					margin-left: 10rpx;
				}
					
				label {
					margin-left: 20rpx;
					padding: 5rpx 8rpx;
					color: #E49332;
					font-size: 22rpx;
					background-color: #FFECD6;
				}
			}
		
		}
		.dc_span {
			justify-content: space-between;
			align-items: center;
			margin-top: 10rpx;
			label {
				color: #999999;
				font-size: 24rpx;
			}
		
			text {
				color: #FF4040;
				font-weight: bold;
			}
		}
</style>