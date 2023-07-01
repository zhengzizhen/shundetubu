<template>
	<view class="body pd30">
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
		<view class="sky">
			<p @click='tocheckout(v,i)' :class="curry == i?'green':''" v-for="(v,i) in seach" :key="i">{{v.title}}</p>
		</view>
		<view @click="toDeatil(item.id)" class="dc_mod dis_f bor_r" v-for=" (item,index) in list" :key="index">
			<image :src="item.master_image" mode=""></image>
			<view class="dc_god dis_f flex_c jscb">
				<p class="runs">{{item.title}}</p>
				<text class="posw">{{item.day}}天</text>
				<view class="dc_latt dis_f" v-if="item.trip_team.length!=0">
					<text v-for="(v,i) in item.trip_team" :key="i">{{v.start_day}}{{v.status_text}}</text>
					<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
				</view>
				<p class="title dis_f">
					<label v-for='(s,x) in item.label' :key="x">{{s}}</label>
				</p>
				<view class="dc_span dis_f">
					<text>￥{{item.price}}</text>
					<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
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
				autoplay: false,
				interval: 2000,
				duration: 500,
				list: [],
				params: {},
				page: 1,
				seach: [],
				curry: null,
				search_min_day: '',
				search_max_day: '',
				bottom: false
			}
		},
		onLoad(option) {
			this.params = JSON.parse(option.obj)
			uni.setNavigationBarTitle({
				title: this.params.title
			})
			this.getSwiper()
			this.getlist(this.params.url)
			this.getseach(this.params.seach)
		},
		onReachBottom() {
			if (this.bottom == true) {
				return false
			} else {
				this.page += 1
				this.concatlist(this.params.url)
			}
		},
		methods: {
			async getSwiper() {
				const res = await this.$http('/trip/top', {
					type: '首页-' + this.params.title
				})
				this.swiper = res.data.data.image
				if (res.data.data.video) {
					this.swiper.unshift(res.data.data.video)
				}
			},
			async getlist(params) {
				uni.showLoading()
				const res = await this.$http(params, {
					page: this.page,
					limit: 10,
				})
				uni.hideLoading()
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				this.list = res.data.data
			},
			async getseach(url) {
				const res = await this.$http(url)
				this.seach = res.data.data.search_day
			},
			async concatlist(params) {
				const res = await this.$http(params, {
					page: this.page,
					limit: 10,
					search_min_day: this.search_min_day,
					search_max_day: this.search_max_day
				})
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				this.list = this.list.concat(res.data.data)
			},
			toDeatil(v) {
				this.$jump('/pages/index/Details/Details?id=', 'params', v)
			},
			async tocheckout(v, index) {
				this.curry = index
				this.search_min_day = v.min
				this.search_max_day = v.max
				this.bottom = false
				uni.showLoading()
				const res = await this.$http(this.params.url, {
					page: this.page,
					limit: 10,
					search_min_day: v.min,
					search_max_day: v.max
				})
				uni.hideLoading()
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				this.list = res.data.data
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sky {
		margin-top:20rpx;
		p {
			display: inline-block;
			border-radius: 32rpx;
			padding: 10rpx 30rpx;
			background: rgba(255, 255, 255, 0.4);
			border: 1px solid rgba(255, 255, 255, 0.4);
			color: white;
			font-size: 26rpx !important;
			margin-right: 20rpx;
		}
	}

	.body {
		background-color: #2A755E;
		padding-bottom: 100rpx;
		min-height: 100vh;
		height: auto;
		padding-top: 20rpx;
	}

	.ty_title {
		text-align: right;
		color: white;
		justify-content: flex-end;
		align-items: center;

		label {
			display: block;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-right: 10rpx;
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 20rpx 20rpx;
		margin: 20rpx 0rpx;

		image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;
			flex: 1;

			p {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}
		}

		.posw {
			position: absolute;
			top: 20rpx;
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
			}

			text:nth-child(2) {
				margin-left: 10rpx;
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

		.title {
			margin: 20rpx 0 20rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			align-items: center;

			label {
				display: block;
				margin-right: 10rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #E49332;
				background: #FFECD6;
				line-height: 36rpx;
				padding: 2rpx 15rpx;
			}
		}
	}

	.dc_span {
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

	.green {
		color: white;
		font-size: 22rpx;
		text-align: center;
		background-color: #49CAA4 !important;
		border-radius: 6rpx;
	}

	.swiper {
		width: 100%;
		height: 350rpx;
		border-radius: 20rpx;
		image {
			width: 100%;
			height: 350rpx;
			border-radius: 20rpx;
		}
	}

	.runs {
		font-size: 26rpx !important;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		-webkit-box-orient: vertical;
	}
</style>