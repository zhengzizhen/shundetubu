<template>
	<view class="pd30">
		<u-subsection @change="sectionChange" :list="list" :current="current" activeColor='#49CAA4'></u-subsection>
		<view class="dc_mod dis_f" v-for=" (item,index) in list1" :key="index">
			<image src="@/static/image/index/banners.jpg" mode=""></image>
			<view class="dc_god">
				<p>【亭可马里季】斯里兰卡纯玩9天</p>
				<view class="dc_latt dis_f">
					<label>04.02丨剩3名额</label>
					<text>04.02丨报名中</text>
					<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
				</view>
				<view class="dc_span dis_f">
					<text>￥88</text>
					<label>4.91分丨291人去过</label>
				</view>
			</view>
		</view>
		
		
		<p class="HKtitle">高铁出行</p>
		<view class="dis_f">
			<view class="as_zh dis_f" v-for="(item,index) in list1" :key='index'>
				<image src="@/static/index/zheng.jpg" mode=""></image>
				<label>3天</label>
				<text>云端轻奢武功山</text>
				<p>￥88</p>
			</view>
		</view>
		
		<p class="HKtitle">亲子活动</p>
		
		<view class="">
			<view class="dc_mod dis_f" v-for=" (item,index) in list1" :key="index">
				<image src="@/static/image/index/banners.jpg" mode=""></image>
				<view class="dc_god">
					<p>【亭可马里季】斯里兰卡纯玩9天</p>
					<view class="dc_latt dis_f">
						<label>04.02丨剩3名额</label>
						<text>04.02丨报名中</text>
						<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="dc_span dis_f">
						<text>￥88</text>
						<label>4.91分丨291人去过</label>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 热门推荐 -->
		<view class="ix_block index_pad">
			<view class="ix_img dis_f">
				<view class="ix_flexs" v-for="(item,index) in list2" :key="index">
					<image src="@/static/index/zheng.jpg"></image>
					<text class="posw">3天</text>
					<p class="ix_title">【花漫天山】新疆伊犁 杏花大环线8日</p>
					<view class="ds_bt dis_f">
						<label>04.02丨报名中</label>
						<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="sp dis_f">
						<p>￥88</p>
						<label>291人去过</label>
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
				list: ['当季推荐', '口碑路线'],
				current: 0,
				list1: [1, 2, 3],
				list2: [1, 2, 3,4]
			}
		},
		methods: {
			sectionChange(e){
				this.current = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dc_mod {
		position: relative;
		background-color: white;
		padding: 30rpx 20rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #E6E6E6;

		image {
			width: 180rpx;
			height: 180rpx;
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
			margin-top: 20rpx;

			text {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #49CAA4;
				margin-left: 10rpx;
			}

			label {
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

	}

	.dc_span {
		margin-top: 35rpx;
		justify-content: space-between;
		align-items: center;

		label {
			color: #999999;
			font-size: 24rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}
	.HKtitle{
		font-size: 34rpx;
		font-weight: bold;
		margin: 20rpx 0;
		color: #000000;
	}
	.as_zh {
		width: 33%;
		flex-direction: column;
		position: relative;
		width: 240rpx;
		
		image {
			width: 217rpx;
			height: 217rpx;
			border-radius: 20rpx;
		}
		
		label {
			position: absolute;
			top: 0%;
			left: 0rpx;
			width: 80rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #49CAA4;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			color: white;
			text-align: center;
			font-size: 22rpx;
		}
	
		text {
			font-size: 28rpx;
			margin: 10rpx 0;
			text-align: left;
		}
	
		p {
			color: red;
			font-weight: bold;
			text-align: left;
		}
	}
	.ix_block {
		position: relative;
		margin-top: 60rpx;
	
		label {
			display: flex;
			font-weight: bold;
			font-size: 32rpx;
			margin-bottom: 30rpx;
		}
	
		.ix_img {
			justify-content: space-between;
			flex-wrap: wrap;
	
			image {
				margin: 20rpx auto 10rpx;
				width: 335rpx;
				height: 335rpx;
				border-radius: 20rpx;
			}
	
			.ix_flexs {
				position: relative;
				width: 335rpx;
				height: auto;
	
				.posw {
					position: absolute;
					top: 20rpx;
					left: 0rpx;
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
			}
	
			.ix_posi {
				position: absolute;
				top: 20rpx;
				left: 0;
				width: 125rpx;
				height: 42rpx;
				background: #000000;
				border-radius: 20rpx 0rpx 20rpx 0rpx;
				padding: 5rpx 20rpx;
				color: white;
				text-align: center;
				opacity: 0.5;
			}
	
			.ix_title {
				margin: 0 auto 20rpx;
				word-wrap: normal;
				font-size: 28rpx;
			}
	
			.ix_txtgreen {
				width: 106rpx;
				height: 36rpx;
				color: #49CAA4;
				font-size: 22rpx;
				text-align: center;
				background: #EBFFF9;
				border-radius: 6rpx;
			}
	
			.ix_yellow {
				font-size: 30rpx;
				font-weight: 500;
				color: #FF4040;
			}
		}
	}
	.ds_bt {
		// justify-content: space-between
		height: 40rpx;
		justify-content: space-between;
	
		label {
			height: 40rpx;
			background: #49CAA4;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 36rpx;
			padding: 5rpx 10rpx;
		}
	
		p {
			font-size: 24rpx;
			color: #999999;
		}
	
	}
	
	.sp {
		margin-top: 20rpx;
		justify-content: space-between;
	
		p {
			color: red !important;
			font-size: 28rpx;
			font-weight: bold;
		}
	
		label {
			color: #999999;
			font-size: 24rpx;
		}
	}
</style>