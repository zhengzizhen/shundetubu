<template>
	<view class="as_body">
		<!-- 列表渲染 -->
		<view class="pd30">
			<view class="ix_shop index_pads dis_f">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click='clinto(item.name)'>
					<image style="border-radius: 50%;" :src="item.image" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			<p class="as_fid">邀请好友</p>

			<p class="as_tit">本周最热</p>
			<u-swiper :list="swiperlist" previousMargin="30" height='400' :radius='10' indicator indicatorMode="line"
				nextMargin="30" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>
			<view class="as_fdq">
				<u-subsection :list="sublist" :current="current" @change="sectionChange"
					activeColor='#49CAA4'></u-subsection>
			</view>
			<!-- //小图 -->
			<view class="">
				<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
					<image src="../../static/index/组 12@2x(1).jpg" mode=""></image>
					<view class="dc_god">
						<p>【亭可马里季】斯里兰卡纯玩9天</p>
						<view class="dc_latt dis_f">
							<label>04.02剩3名额</label>
							<text>03.18已满员</text>
							<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
						</view>
						<view class="dc_span dis_f">
							<text>￥888</text>
							<label>4.91分丨291人去过</label>
						</view>
					</view>
				</view>
			</view>

			<p class="as_tit">高铁出行</p>
			<view class="dis_f">
				<view class="as_zh dis_f" v-for="(item,index) in list" :key='index'>
					<image src="../../static/index/zheng.jpg" mode=""></image>
					<label>3天</label>
					<text>云端轻奢武功山</text>
					<p>￥88</p>
				</view>
			</view>

			<p class="as_tit">亲子活动</p>
			<view class="">
				<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
					<image src="../../static/index/zheng.jpg" mode=""></image>
					<view class="dc_god">
						<p>【亭可马里季】斯里兰卡纯玩9天</p>
						<text class="posw">3天</text>
						<view class="dc_latt dis_f">
							<label>04.02剩3名额</label>
							<text>03.18已满员</text>
							<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
						</view>
						<view class="dc_span dis_f">
							<text>￥888</text>
							<label>4.91分丨291人去过</label>
						</view>
					</view>
				</view>
			</view>

			<p class="as_tit">全部周边活动</p>
			<!-- 单选 -->
			<view class="u-page__tag-item dis_f" v-for="(item, index) in radios" :key="index">
				<u-tag shape="circle" size="large" plain color='#49CAA4' borderColor='#CCCCCC' :text="`选项${index + 1}`"
					:plain="!item.checked" :name="index" @click="radioClick">
				</u-tag>
			</view>

			<!-- 热门推荐 -->
			<view class="ix_block index_pad">
				<label>热门推荐</label>
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in list" :key="index">
						<image src="../../static/index/zheng.jpg"></image>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrlist: [{
						name: '周边路线',
						image: '../../static/index/zblx.jpg'
					},
					{
						name: '国内精选',
						image: '../../static/index/gnjx.jpg'
					},
					{
						name: '国外精选',
						image: '../../static/index/gwjx.jpg'
					},
					{
						name: '活动日历',
						image: '../../static/index/hdrl.jpg'
					},
					{
						name: '好物商城',
						image: '../../static/index/hwsc.jpg'
					},
					{
						name: '必玩榜单',
						image: '../../static/index/bwbd.jpg'
					},
					{
						name: '团队定制',
						image: '../../static/index/tddz.jpg'
					},
					{
						name: '亲子路线',
						image: '../../static/index/qzlx.jpg'
					}
				],
				swiperlist: [
					'../../static/as/changs.jpg',
					'../../static/as/changs.jpg',
					'../../static/as/changs.jpg',
					'../../static/as/changs.jpg',
				],
				sublist: ['当季推荐', '口碑路线'],

				current: 0,
				list: ['1', '2', '3'],
				radios: [{
						checked: false
					},
					{
						checked: false
					},
					{
						checked: false
					}
				],
			};
		},
		methods: {
			sectionChange(index) {
				this.current = index;
			},
			radioClick(name) {
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.as_body {
		margin-bottom: 1000rpx;

	}

	.ix_shop {
		flex-wrap: wrap;
		justify-content: space-between;

		.ix_list {
			margin-top: 30rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 24%;

			image {
				width: 62rpx;
				height: 62rpx;
			}

			text {
				margin-top: 10rpx;
				color: #666666;
				font-size: 24rpx;
			}
		}
	}

	.as_fid {
		margin: 30rpx auto;
		height: 120rpx;
		line-height: 120rpx;
		padding-left: 40rpx;
		color: white;
		background: #537ECD;
		border-radius: 20rpx;
	}

	.as_tit {
		font-weight: bold;
		margin: 40rpx 0;
		font-size: 32rpx;
	}

	.as_fdq {
		margin: 50rpx auto 20rpx;
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 30rpx 20rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #ccc;

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
			margin-top: 20rpx;

			text {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #FFA1AD;
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
		margin-top: 55rpx;
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

	.u-page__tag-item {
		display: inline-block;
		justify-content: space-between;
		margin-right: 40rpx;
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
	.sp{
		margin-top: 20rpx;
		justify-content: space-between;
		p{
			color: red !important; 
			font-size: 24rpx;
			font-weight: bold;
		}
		label{
			color: #999999;
			font-size: 24rpx;
		}
	}
</style>