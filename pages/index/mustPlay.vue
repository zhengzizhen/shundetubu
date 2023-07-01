<template>
	<view class="body">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item,index) in swiper" :key="index">
					<view @click="$Resize(swiper,index)" class="swiper-item">
						<image :src="item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="ms_header pd30">
			<view class="ms_cont">
				<image class="header" src="/static/image/mustPlay/newpro.png" mode=""></image>
				<view class="ms_qsn dis_f">
					<view class="pos">
						<image src="/static/image/mustPlay/yhq.png" mode=""></image>
						<p>100<span>元</span></p>
					</view>
					<view class="pos">
						<image src="/static/image/mustPlay/yhq.png" mode=""></image>
						<p>100<span>元</span></p>
					</view>
				</view>
				<text class="text">已领取</text>
			</view>
			<view class="title">
				<p class="ts">经典策划</p>
				<view class="t_to dis_f">
					<view class="bk" v-for="(v,i) in 2" :key="i">
						<!-- <image src="/static/index/zheng.jpg" mode=""></image> -->
						<p>每月1次</p>
						<view class="gd dis_f">
							<label class="tit">青蓝行动</label>
							<label class="nm">一年一度大型公益活动</label>
						</view>
					</view>
				</view>
				<view class="ms_tbs">
					<u-tabs lineColor='#FFFFFF' :inactiveStyle="{color:'#FFFFFF'}" :activeStyle="{color: '#FFFFFF'}"
						:list="list1" @click="click"></u-tabs>
				</view>
				<view class="ix_subsection dis_f">
					<span :class="curry == index ?'check':'checks'" v-for="(item,index) in seach" :key="index"
						@click="checkout(item,index)">{{item.title}}</span>
				</view>
				<view @click="toDetails(v.id)" class="banner" v-for="(v,i) in list" :key='i'>
					<p class="iun">HOT{{i+1}}</p>
					<view class="videos" v-if="v.video != ''">
						<video class="myVideo"
							src="https://webstatic.mihoyo.com/upload/static-resource/2022/01/04/72f41ca0acf28922ee3cc2278d920a5f_7569813998111725618.mp4"></video>
					</view>
					<view class="images" v-else>
						<image :src="v.master_image" mode=""></image>
					</view>
					<view class="dis_f txt">
						<p>{{v.title}}</p>
						<view class="dis_f jscb sil">
							<label class="green">跟团·{{v.day}}天</label>
							<label class="red fz32">￥{{v.price}}</label>
						</view>
						<view class="deram">
							<text>{{v.traveller_number}}人去过丨</text>
							<label class="red"> {{v.grade}}分</label>
						</view>
					</view>
					<!-- <view class="ms_user dis_f">
						<view>
							<image src="@/static/trends/user.png" mode=""></image>
							<p>李菲</p>
						</view>
						<view class="io">
							<text>02-19</text>
							<p>〝领队阿三非常有责任心 对旅途中每一个点了如指掌 路线设计劳逸结合 给力〞</p>
						</view>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				list: [],
				list1: [{
					name: '新人榜',
				}, {
					name: '人气榜',
				}, {
					name: '评分榜'
				}],
				curry: null,
				page: 1,
				name: '新人榜',
				seach: [],
				bottom: false
			}
		},
		onLoad() {
			this.getSwiper()
			this.getlist('新人榜')
			this.getSeach()
		},
		onReachBottom() {
			if (this.bottom == true) {
				return false
			} else {
				this.concatlist()
			}
		},
		methods: {
			async getSwiper() {
				const res = await this.$http('/trip/top', {
					type: '首页-必玩榜单'
				})
				this.swiper = res.data.data.image
				if (res.data.data.video) {
					this.swiper.unshift(res.data.data.video)
				}
			},
			async getlist(type) {
				const res = await this.$http('/trip/rank/trip', {
					page: this.page,
					limit: 10,
					type
				})
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				this.list = res.data.data
			},
			async getSeach() {
				const res = await this.$http('/trip/search/rank')
				this.seach = res.data.data.search_price
			},
			// 下拉合并
			async concatlist() {
				const res = await this.$http('/trip/rank/trip', {
					page: this.page,
					limit: 10,
					type: this.name,
					search_min_day: this.search_min_day,
					search_max_day: this.search_max_day
				})
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				this.list = this.list.concat(res.data.data)
			},
			click(item) {
				this.curry = null
				this.bottom = false
				this.page = 1
				this.getlist(item.name)
				this.name = item.name
			},
			async checkout(e, index) {
				this.curry = index
				this.bottom = false
				this.page = 1
				uni.showLoading()
				this.search_min_day = e.min
				this.search_max_day = e.max
				const res = await this.$http('/trip/rank/trip', {
					page: this.page,
					limit: 10,
					type: this.name,
					search_min_day: e.min,
					search_max_day: e.max
				})
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				uni.hideLoading()
				this.list = res.data.data
			},
			toDetails(e) {
				this.$jump('./Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		height: 2800rpx;
		background-color: #FAFAFA;
		background: linear-gradient(180deg, #FE5F1D 0%, #FE5F1D 80%, #FAFAFA 100%);
	}

	.ms_header {
		height: auto;
		.ms_cont {
			transform: translateY(40rpx);
			height: 380rpx;
			background: #FFD5C4;
			border-radius: 20rpx;
			text-align: center;

			.header {
				width: 435rpx;
				height: 52rpx;
			}
		}

		.ms_qsn {
			justify-content: space-around;
			margin-top: 60rpx;

			.pos {
				position: relative;

				p {
					position: absolute;
					top: 40rpx;
					left: 32rpx;
					font-size: 38rpx;
					font-weight: 900;
					color: #FF4C37;

					span {
						font-size: 26rpx;
					}
				}
			}

			image {
				width: 300rpx;
				height: 126rpx;
			}
		}

		.text {
			display: block;
			width: 400rpx;
			height: 62rpx;
			line-height: 62rpx;
			color: white;
			font-weight: 600;
			color: white;
			margin: 40rpx auto 0;
			background: linear-gradient(0deg, #FE8153 0%, #FE5B51 100%);
			border-radius: 31rpx;
		}
	}

	.title {
		transform: translateY(40rpx);
		margin-top: 50rpx;
		text-align: center;

		.ts {
			color: white;
			font-weight: 600;
			font-size: 34rpx;
		}

		.bk {
			width: 280rpx;
			height: 300rpx;
			background: #5CB3FF;
			border-radius: 20rpx;
			position: relative;

			p {
				position: absolute;
				top: 10rpx;
				right: 20rpx;
				z-index: 2;
				width: 110rpx;
				height: 30rpx;
				background: linear-gradient(-79deg, #FD8354 0%, #FF5E55 100%);
				border-radius: 15rpx 15rpx 15rpx 2rpx;
				font-size: 20rpx;
				font-weight: normal;
				color: white;
			}

			image {
				width: 100%;
				height: 200rpx;
				border-radius: 20rpx 20rpx 0 0;
				z-index: 2;
			}

		}
	}
	.gd {
		flex-direction: column;
		text-align: left;
		.tit {
			margin-left: 20rpx;
			font-size: 34rpx;
			font-weight: 800;
			color: white;
		}
		.nm {
			margin-left: 20rpx;
			margin-top: 10rpx;
			font-size: 22rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 15rpx;
		}
	}
	.t_to {
		margin-top: 30rpx;
		justify-content: space-around;
	}
	.ms_tbs {
		margin-top: 40rpx;
	}
	.banner {
		height: auto;
		margin-top: 30rpx;
		background-color: white;
		border-radius: 20rpx;
		position: relative;
		.iun {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			color: white;
			background: linear-gradient(0deg, #F36B31 0%, #FDB675 100%);
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			width: 98rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			font-size: 26rpx;
		}
		.videos {
			padding: 10rpx;
			background-color: black;
			border-radius: 20rpx 20rpx 0 0;
		}
		.images {
			border-radius: 20rpx 20rpx 0 0;

			image {
				width: 100%;
				border-radius: 20rpx 20rpx 0 0;
			}
		}
		.myVideo {
			width: 100%;
			height: 340rpx;
			border-radius: 20rpx 20rpx 0 0;
		}

		.txt {
			flex-direction: column;
			text-align: left;
			justify-content: center;
			padding: 10rpx 20rpx;
			.sil {
				margin-top: 10rpx;
			}
			.green {
				font-size: 22rpx;
				color: #49CAA4;
			}
			.red {
				color: red;
				font-size: 26rpx;
				font-weight: normal;
			}
			p{
				font-size: 28rpx;
			}
		}
	}

	.deram {
		font-size: 26rpx;
	}

	.ms_user {
		padding: 10rpx 20rpx;
		margin-top: 20rpx;

		image {
			width: 70rpx;
			height: 70rpx;
		}

		.io {
			text-align: left;
			margin-left: 30rpx;
			background-color: #F6F7F9;
			padding: 20rpx;
			border-radius: 20rpx;

			text {
				font-size: 24rpx;
			}

			p {
				font-size: 24rpx;
			}
		}
	}

	.ix_subsection {
		width: 80%;
		margin: 40rpx 0;
		justify-content: space-around;
		align-items: center;

		span {
			display: block;
		}

		.check {
			box-sizing: border-box;
			display: block;
			background-color: #FF7D0F;
			padding: 10rpx 30rpx;
			color: white;
			border-radius: 32rpx;
		}

		.checks {
			box-sizing: border-box;
			display: block;
			color: white;
			padding: 10rpx 30rpx;
			border-radius: 32rpx;
		}
	}

	.fz32 {
		font-size: 32rpx !important;
	}

	.swiper {
		width: 100%;
		height: 400rpx;
		box-sizing: border-box;
		image {
			width: 100%;
			height: 400rpx;
		}
	}
</style>