<template>
	<!-- 国内精选 -->
	<view class="dc_bg">
		<view class="dc_header pd30">
			<!-- label标签 -->
			<view class="dc_label dis_f">
				<view class="dc_spans" v-for="(item,index) in laberlist" :key="index">
					<text>{{item}}</text>
				</view>
				<view class="sx" @click="isShow = true">
					<u-icon name="arrow-down" color="#FFFFFF" size='12'></u-icon>
				</view>
			</view>
			<!-- 大图 -->
			<view class="dc_banner">
				<p class="dc_posi">3天</p>
				<image src="../../static/image/retail/banner.jpg" mode=""></image>
				<view class="dc_text dis_f">
					<p>亭可马里季斯里兰卡纯玩9天</p>
					<view class="dc_span dis_f">
						<label>4.91分丨291人去过</label>
						<text>￥888</text>
					</view>
					<view class="dc_ms dis_f">
						<p>查看更多</p>
						<view class="dc_go dis_f">
							<text>03.18出发</text>
							<label class="pink">已满员</label>
						</view>
						<view class="dc_go dis_f">
							<text>03.18出发</text>
							<label class="pink">已满员</label>
						</view>
						<view class="dc_go dis_f">
							<text>03.18出发</text>
							<label class="pink">已满员</label>
						</view>
						<view class="dc_go dis_f">
							<text>03.18出发</text>
							<label class="pink">已满员</label>
						</view>
					</view>
				</view>
			</view>

			<!-- //小图 -->
			<view class="dc_mod dis_f">
				<text class="posw">3天</text>
				<image src="../../static/index/组 12@2x(1).jpg" mode=""></image>
				<view class="dc_god">
					<p>【亭可马里季】斯里兰卡纯玩 9天</p>
					<view class="dc_latt dis_f">
						<text>03.18已满员</text>
						<label>04.02剩3名额</label>
						<u-icon name="arrow-right" color="#999999" size='12'></u-icon>
					</view>
					<view class="dc_out">
						<text>03.18已满员</text>
						<text style="margin-left: 10rpx;">限时40天</text>
					</view>
					<view class="dc_span dis_f">
						<text>￥888</text>
						<label>4.91分丨291人去过</label>
					</view>
				</view>
			</view>

			<!-- //小图 -->
			<view class="dc_mod dis_f">
				<text class="posw">3天</text>
				<image src="../../static/index/组 12@2x(1).jpg" mode=""></image>
				<view class="dc_god">
					<p>【亭可马里季】斯里兰卡纯玩 9天</p>
					<view class="dc_latt dis_f">
						<text>03.18已满员</text>
						<label>04.02剩3名额</label>
						<u-icon name="arrow-right" color="#999999" size='12'></u-icon>
					</view>
					<view class="dc_out">
						<text>03.18已满员</text>
						<text style="margin-left: 10rpx;">限时40天</text>
					</view>
					<view class="dc_span dis_f">
						<text>￥888</text>
						<label>4.91分丨291人去过</label>
					</view>
				</view>
			</view>
		</view>

		<u-popup :show="isShow" @close="close" @open="open">
			<u-popup :round="10" :show="isShow" :closeable = 'true' @close="close" @open="open">
				<view class="ix_pop pd30">
					<p>天数</p>
					<view class="dis_f ps">
						<view class="dis_f prp">
							<text>2~3天</text>
						</view>
						<view class="dis_f prp">
							<text>3~10天</text>
						</view>
					</view>
					
					<p>天数</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(v,index) in addresslist" :key="index">
							<text>{{v.address}}</text>
						</view>
					</view>
					
					<p>价格</p>
					<view class="dis_f ps">
						<view class="dis_f prp">
							<text>上海</text>
						</view>
						<view class="dis_f prp">
							<text>杭州</text>
						</view>
					</view>
				</view>
				
			</u-popup>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				laberlist: ['亲子路线', '高铁出行', '轻奢活动', '轻奢活动'],
				isShow: false,
				addresslist:[
					{address:'休闲'},
					{address:'轻松徒步'},
					{address:'稍有难度'},
					{address:'中等难度'},
					{address:'难度较大'},
					{address:'高难度'},
				]
			};
		},
		methods:{
			open() {
				
			},
			close() {
				this.isShow = !this.isShow
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dc_bg {
		width: 100%;
		height: auto;
		background-color: #18ACB6;
		padding-bottom: 50rpx;
	}

	.dc_header {

		padding-top: 457rpx;

		.dc_label {
			position: relative;

			.dc_spans {
				background: rgba(255, 255, 255, .4);
				border-radius: 32rpx;
				padding: 10rpx 20rpx;
				margin: 10rpx 10rpx;
				color: white;
				font-size: 28rpx;
			}

			.sx {
				padding-left: 40rpx;
				width: 40rpx;
				height: 80rpx;
				display: flex;
				align-items: center;
				background-color: #18ACB6;
				position: absolute;
				right: 0;
			}
		}

		.dc_banner {
			position: relative;
			height: 590rpx;
			background-color: white;
			border-radius: 20rpx;
			margin: 20rpx auto;

			image {
				width: 100%;
				border-radius: 20rpx 20rpx 0rpx 0rpx;
				height: 340rpx;
			}

			.dc_posi {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 2;
				width: 80rpx;
				height: 42rpx;
				background: #49CAA4;
				border-radius: 20rpx 0rpx 20rpx 0rpx;
				text-align: center;
				color: white;
			}

			.dc_text {
				flex-direction: column;
				padding: 0 20rpx;

				p {
					color: #222222;
					font-size: 30rpx;
				}

				.dc_span {
					margin-top: 10rpx;
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

				.dc_ms {
					// margin-top: 20rpx;
					position: relative;

					p {
						position: absolute;
						right: 0;
						bottom: 0;
						background-color: white;
						width: 60rpx;
						height: 132rpx;
						padding: 0 20rpx;
						display: flex;
						text-align: center;
						align-items: center;
						color: #49CAA4;
						font-size: 20rpx;
					}

					.dc_go {
						padding: 20rpx;
						flex-direction: column;
						text-align: center;
						border-right: 1px solid #ccc;

						text {
							font-size: 26rpx;
						}

						.pink {
							margin-top: 20rpx;
							padding: 0rpx 5rpx;
							background-color: #FFA1AD;
							border-radius: 50rpx;
							color: white;
						}
					}
				}
			}
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		border-radius: 20rpx;
		padding: 30rpx 20rpx;
		margin-bottom: 20rpx;

		image {
			width: 240rpx;
			height: 240rpx;
			border: 20rpx;
		}

		.dc_god {
			width: 388rpx;
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
			text {
				padding: 5rpx 15rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				background-color: #FFA1AD;
			}

			label {
				margin-left: 10rpx;
				padding: 5rpx 20rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				background-color: #F2AD5A;
			}
		}

		.dc_out {
			margin-top: 20rpx;

			text {
				padding: 5rpx 15rpx;
				color: #E49332;
				font-size: 24rpx;
				background-color: #FFECD6;
			}
		}
	}

	.dc_span {
		margin-top: 20rpx;
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
	.ix_pop{
		height: 1000rpx;
		p{
			margin: 40rpx auto 20rpx;
			font-size: 32rpx;
			font-weight: bold;
		}
		.ps{
			flex-wrap: wrap;
			.prp{
				margin: 10rpx 0;
				width: 33%;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
		.dis_f{
			text{
				background: #FFFFFF;
				color: #999999;
				border: 2px solid #999999;
				border-radius: 50rpx;
				width: 162rpx;
				height: 64rpx;
				line-height: 64rpx;
				text-align: center;
			}
		}
	}
</style>