<template>
	<view class="as_body">
		<!-- 列表渲染 -->
		<view>
			<view class="ix_shop index_pads dis_f pd30">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click='toChild(item.name)'>
					<image style="border-radius: 50%;" :src="item.image" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>
			<!-- <p class="as_fid">邀请好友</p> -->

			<p class="as_tit pd30">本周最热</p>
			<view class="uni-margin-wrap">
				<swiper class="swiper" @change='change' circular :autoplay="false" next-margin='160rpx'
					previous-margin='180rpx' :interval="2000" :duration="500">
					<swiper-item v-for="(item,index) in swiperlist" :key="index">
						<view class="posir">
							<image :src="item" mode=""></image>
							<view v-show="swipercurrent == index" class="posiswiper dis_f flex_c">
								<p>春行婺源秘境</p>
								<view class="ios">
									<text>高铁往返</text>
									<text class="m10">闲适2日</text>
								</view>
								<label>4.91分丨291人去过</label>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="info dis_f">
					<p :class="swipercurrent==index?'active':''" v-for="(v,index) in swiperlist.length"></p>
				</view>
			</view>

			<view class="as_fdq pd30">
				<u-subsection :customStyle='obj' :list="sublist" :current="current" @change="sectionChange"
					activeColor='#49CAA4'></u-subsection>
			</view>
			<!-- //小图 -->
			<view class="pd30">
				<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
					<image src="@/static/index/zheng.jpg" mode=""></image>
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

			<p class="as_tit pd30">高铁出行</p>
			<view class="dis_f pd30">
				<view class="as_zh dis_f" v-for="(item,index) in list" :key='index'>
					<image src="@/static/index/zheng.jpg" mode=""></image>
					<label>3天</label>
					<text>云端轻奢武功山</text>
					<p>￥88</p>
				</view>
			</view>

			<p class="as_tit pd30">亲子活动</p>
			<view class="pd30">
				<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
					<image src="@/static/index/zheng.jpg" mode=""></image>
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

			<p class="as_tit pd30">全部周边活动</p>
			<!-- 单选 -->
			<view class="cheborder pd30">
				<p :class="curry == index?'colors':''" @click='chekelist(item,index)' v-for="(item,index) in hotlist"
					:key="index">{{item}}</p>
			</view>

			<!-- 热门推荐 -->
			<view class="ix_block index_pad pd30">
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in list" :key="index">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrlist: [{
						name: '省内1天',
						image: '../../../static/index/zblx.jpg'
					},
					{
						name: '省内2天',
						image: '../../../static/index/gnjx.jpg'
					},
					{
						name: '省内亲子',
						image: '../../../static/index/gwjx.jpg'
					},
					{
						name: '美食路线',
						image: '../../../static/index/hdrl.jpg'
					},
					{
						name: '登山路线',
						image: '../../../static/index/hwsc.jpg'
					},
					{
						name: '非周末',
						image: '../../../static/index/bwbd.jpg'
					},
					{
						name: '高铁出行',
						image: '../../../static/index/tddz.jpg'
					},
					{
						name: '香港专区',
						image: '../../../static/index/qzlx.jpg'
					}
				],
				swiperlist: [
					'../../../static/as/changs.jpg',
					'../../../static/as/changs.jpg',
					'../../../static/as/changs.jpg',
					'../../../static/as/changs.jpg',
				],
				sublist: ['当季推荐', '口碑路线'],
				swipercurrent: 0,
				current: 0,
				list: ['1', '2', '3'],
				curry: 0,
				hotlist: ['本周', '已成行', '1天', '2天'],
				obj: {
					height: '80rpx'
				}
			};
		},
		methods: {
			sectionChange(index) {
				this.current = index;
			},
			chekelist(e, index) {
				this.curry = index
			},
			change(e) {
				console.log(e.detail.current);
				this.swipercurrent = e.detail.current
			},
			toChild(name) {
				switch (name) {
					case '省内1天':
						this.$jump('./oneday')
						break;
					case '省内2天':
						this.$jump('./twoday')
						break;
					case '省内亲子':
						this.$jump('./Parenting')
						break;
					case '高铁出行':
						this.$jump('./speed?title=', 'params', '高铁出行')
						break;
					case '非周末':
						this.$jump('./speed?title=', 'params', '非周末')
						break;
					case '美食路线':
						this.$jump('./speed?title=', 'params', '美食路线')
						break;
					case '登山路线':
						this.$jump('./speed?title=', 'params', '登山路线')
						break;
					case '香港专区':
						this.$jump('./HongKong')
						break;
				}
			}
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
				width: 100rpx;
				height: 100rpx;
			}

			text {
				margin-top: 10rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}
		}
	}

	.as_fid {
		margin: 60rpx auto;
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

	.sp {
		margin-top: 10rpx;
		justify-content: space-between;
		height: 64rpx;
		line-height: 64rpx;

		p {
			color: red !important;
			font-size: 28rpx;
			font-weight: bold;
		}

		label {
			color: #999999;
			font-size: 24rpx;
			display: inline-block;
		}
	}

	.cheborder {
		width: 100%;
		font-size: 30rpx;

		p {
			margin-right: 20rpx;
			margin-top: 10rpx;
			border-radius: 50rpx;
			border: 1px solid #ccc;
			display: inline-block;
			padding: 10rpx 30rpx;
			color: #49CAA4;
		}

		.colors {
			color: white;
			background-color: #49CAA4;
			border: 1px solid #49CAA4;
		}
	}

	.swiper {
		width: 100%;
		height: 500rpx;
		text-align: center;

		.posir {
			width: 380rpx;
			height: 500rpx;
		}

		image {
			margin: 0 auto;
			width: 380rpx;
			height: 500rpx;
			border-radius: 20rpx;
		}

		.posiswiper {
			position: absolute;
			bottom: 20rpx;
			left: 0;
			padding: 10rpx 20rpx;
			text-align: left;
			animation: scaleout .5s ease-in-out;
			p {
				font-size: 30rpx;
				font-weight: bold;
				color: #FFFFFF;
			}
			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #FFFFFF;
				background: rgba(255, 255, 255, .5);
				padding: 5rpx 10rpx;
			}
			.ios {
				margin: 10rpx 0 20rpx;
			}
			.m10 {
				margin-left: 10rpx;
			}
			label {
				font-size: 24rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}
	.info{
		width: 100%;
		text-align: center;
		margin: 20rpx auto;
		justify-content: center;
		p{
			margin: 0 8rpx;
			width: 22rpx;
			height: 22rpx;
			background: #F0F0F0;
			border-radius: 50%;
		}
		.active{
			background: #49CAA4 !important;
		}
	}
	
	@keyframes scaleout {
		0% {
			opacity: 0;
		}

		50% {
			opacity: .5;
		}

		100% {
			opacity: 1;
		}
	}
</style>