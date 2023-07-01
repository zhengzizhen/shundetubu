<template>
	<!-- 国内精选 -->
	<view class="dc_bg">
		<view class="dis_f jscb headss">
			<p @click='changelist(v,index)' :class="currys == index?'selcet':''" v-for="(v,index) in heads">{{v}}</p>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-if="video!=''">
					<video class="myVideo" :src="video"></video>
				</swiper-item>
				<swiper-item v-for="(item,index) in swiper" :key="index">
					<view @click="$Resize(swiper,index)" class="swiper-item">
						<image :src="item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- label标签 -->
		<view class="dc_label dis_f" @click="isShow = true">
			<view class="dc_spans" v-for="(item,index) in laberlist" :key="index">
				<text>{{item.name}}</text>
			</view>
			<view class="sx">
				<image src="@/static/index/sx.png" mode=""></image>
			</view>
		</view>
		<view class="dc_header pd30">
			<!-- 大图 -->
			<view>
				<view v-for="(item,index) in list" :key="index" style="margin-top: 20rpx;">
					<view @click="toDetails(item.id)" class="dc_banner" v-if="index == 0">
						<p class="dc_posi">{{item.day}}天</p>
						<image class="bor_r" :src="item.master_image" mode=""></image>
						<view class="dc_text dis_f">
							<p>{{item.title}}</p>
							<view class="dc_span dis_f">
								<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
								<text>￥{{item.price}}</text>
							</view>
							<view class="dc_ms dis_f jscb">
								<view class="dis_f" v-if="item.trip_team.length != 0">
									<view class="dc_go dis_f" v-for="(v,i) in item.trip_team" :key="i">
										<text>{{v.start_day}}出发</text>
										<label class="pink">{{v.status_text}}</label>
									</view>
								</view>
								<view v-else>

								</view>
								<p>查看更多</p>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- //小图 -->
			<view @click="toDetails(item.id)" v-for="(item,index) in list" :key="index">
				<view class="dc_mod dis_f" v-if='index!=0'>
					<text class="posw">{{item.day}}天</text>
					<image class="bor_r" :src="item.master_image" mode=""></image>
					<view class="dc_god dis_f flex_c jscb">
						<p>{{item.title}}</p>
						<view class="dc_latt dis_f" v-if="item.trip_team !=''">
							<text v-for="(v,i) in item.trip_team" :key="i">{{v.start_day}}{{v.status_text}}</text>
							<u-icon name="arrow-right" color="#999999" size='12'></u-icon>
						</view>
						<view class="dc_out">
							<text v-for="(s,j) in item.label" :key="j">{{s}}</text>
						</view>
						<view class="dc_span dis_f">
							<text>￥{{item.price}}</text>
							<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
						</view>
					</view>
				</view>
			</view>
		</view>

		<u-popup :show="isShow" @close="close" @open="open">
			<u-popup :round="10" :show="isShow" :closeable='true' @close="close" @open="open">
				<view class="ix_pop pd30">
					<p>天数</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(item,index) in days" :key="index" @click="todays(item,index)">
							<text :class="daycurry == index ?'select':''">{{item.title}}</text>
						</view>
					</view>
					<p>难度</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(item,index) in lvlist" :key="index" @click="tolv(item,index)">
							<text :class="lvcurry == index ?'select':''">{{item.name}}</text>
						</view>
					</view>
					<p>价格</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(item,index) in moenylist" :key="index"
							@click="tomoney(item,index)">
							<text :class="moneycurry == index ?'select':''">{{item.title}}</text>
						</view>
					</view>
					<p>状态</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(item,index) in staticlist" :key="index"
							@click="tostate(item,index)">
							<text :class="statecurry == index ?'select':''">{{item.name}}</text>
						</view>
					</view>
					<p>地区选择</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(v,index) in addresslist" :key="index"
							@click="toaddress(v,index)">
							<text :class="addcurry == index ?'select':''">{{v.name}}</text>
						</view>
					</view>
					<p>出行方式</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(v,index) in label" :key="index" @click="tolabel(v,index)">
							<text :class="labelcurry == index ?'select':''">{{v.name}}</text>
						</view>
					</view>
					<view class="btn dis_f alitmc">
						<p @click='reset'>重置</p>
						<button @click='submit'>筛选</button>
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
				heads: ['本周活动', '下周活动'],
				swiper: [],
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				laberlist: [],
				isShow: false,
				lvcurry: null,
				lvlist: [],
				moneycurry: null,
				moenylist: [],
				statecurry: null,
				staticlist: [],
				addcurry: null,
				addresslist: [],
				daycurry: null,
				label: [],
				labelcurry: null,
				days: [],
				obj: {}, //接收的参数
				list: [],
				page: 1,
				seach: [],
				search_min_day: '', //最少天数
				search_max_day: '', //最多天数
				search_difficulty: '', //难度等级
				search_status: '', //状态
				search_bourn: '', //地区id
				search_min_price: '', //最低价格
				search_max_price: '', //最高价格
				search_label: '', //标签
				currys: 0,
				page: 1,
				bottom: false,
				data: '',
				loadings: false,
				video: ''
			};
		},
		created() {

		},
		onLoad(option) {
			this.obj = JSON.parse(option.tit)
			uni.setNavigationBarTitle({
				title: this.obj.title
			});
			this.title = this.obj.title

			this.getlists()
			this.getSeach(this.obj.seach)
		},
		methods: {
			async getlists() {
				uni.showLoading({
					title: '加载中'
				})
				const res = await this.$http('/trip/active/trip', {
					title: this.title,
					page: this.page,
					limit: 99
				})
				uni.hideLoading()
				this.data = res.data.data
				if (this.currys == 0) {
					this.list = this.list.concat(res.data.data.this_week)
				} else {
					this.list = this.list.concat(res.data.data.next_week)
				}
				this.swiper = res.data.data.banners
				if (res.data.data.video != '') {
					this.video = res.data.data.video
					console.log(this.swiper);
					return false
				}
			},
			async getSwiper() {
				const res = await this.$http('/trip/top', {
					type: this.obj.title
				})
				this.swiper = res.data.data.image
				if (res.data.data.video) {
					this.video = res.data.data.video
					this.swiper.unshift(res.data.data.video)
				}
			},
			async getlist(info) {
				const res = await this.$http(info.url, info.params)
				this.data = res.data.data
				if (this.currys == 0) {
					this.list = this.list.concat(res.data.data.this_week)
				} else {
					this.list = this.list.concat(res.data.data.next_week)
				}
				this.swiper = res.data.data.banners
			},
			async getSeach(url) {
				const res = await this.$http(url)
				this.days = res.data.data.search_day
				this.lvlist = res.data.data.search_difficulty
				this.moenylist = res.data.data.search_price
				this.staticlist = res.data.data.search_status
				this.addresslist = res.data.data.search_bourn
				this.laberlist = res.data.data.search_label
				this.label = res.data.data.search_label
			},
			reset() {
				this.lvcurry = null
				this.addcurry = null
				this.daycurry = null
				this.moneycurry = null
				this.statecurry = null
				this.labelcurry = null
			},
			open() {

			},
			close() {
				this.isShow = !this.isShow
			},
			changelist(v, index) {
				this.currys = index
				this.list = []
				this.page = 1
				this.bottom = false
				if (this.currys == 0) {
					this.list = this.list.concat(this.data.this_week)
				} else if (this.currys == 1) {
					this.list = this.list.concat(this.data.next_week)
				}
			},
			todays(v, index) {
				if (index == this.daycurry) {
					this.daycurry = null
					this.search_min_day = ''
					this.search_max_day = ''
					return false
				}
				this.daycurry = index
				this.search_min_day = v.min
				this.search_max_day = v.max
			},
			tolabel(v, index) {
				if (index == this.labelcurry) {
					this.labelcurry = null
					this.search_label = ''
					return false
				}
				this.labelcurry = index
				this.search_label = v.name
			},
			tolv(v, index) {
				if (index == this.lvcurry) {
					this.lvcurry = null
					this.search_difficulty = ''
					return false
				}
				this.lvcurry = index
				this.search_difficulty = v.name
			},
			tomoney(v, index) {
				if (index == this.moneycurry) {
					this.moneycurry = null
					this.search_min_price = ''
					this.search_max_price = ''
					return false
				}
				this.moneycurry = index
				this.search_min_price = v.min
				this.search_max_price = v.max
			},
			tostate(v, index) {
				if (index == this.statecurry) {
					this.statecurry = null
					this.search_status = ''
					return false
				}
				this.statecurry = index
				this.search_status = index
			},
			toaddress(v, index) {
				if (index == this.addcurry) {
					this.addcurry = null
					this.search_bourn = ''
					return false
				}
				this.addcurry = index
				this.search_bourn = v.id
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
			async submit() {
				this.page = 1
				this.list = []
				const info = {
					url: this.obj.url,
					params: {
						page: this.page,
						limit: 10,
						title: this.title,
						search_min_price: this.search_min_price,
						search_max_price: this.search_max_price,
						search_min_day: this.search_min_day,
						search_max_day: this.search_max_day,
						search_difficulty: this.search_difficulty,
						search_status: this.search_status,
						search_bourn: this.search_bourn,
						search_label: this.search_label
					}
				}
				this.getlist(info)
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dc_bg {
		width: 100%;
		min-height: 100vh;
		height: auto;
		background-color: #18ACB6;
		padding-bottom: 50rpx;
		padding-top: 100rpx;
	}
	.dc_label {
		position: relative;
		margin: 30rpx 0;
		padding: 0 30rpx;
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
			right: 30rpx;
			top: -20rpx;
			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	.dc_header {
		padding-top: 10rpx;

		.dc_banner {
			position: relative;
			// height: 590rpx;
			background-color: white;
			border-radius: 20rpx;
			margin: 20rpx auto;
			padding: 0 0 20rpx 0;

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
				border-radius: 20rpx 0rpx 14rpx 0rpx;
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
					margin-top: 20rpx;
					position: relative;

					p {
						background-color: white;
						width: 60rpx;
						padding: 0 20rpx;
						display: flex;
						text-align: center;
						align-items: center;
						color: #49CAA4;
						font-size: 20rpx;
					}

					.dc_go {
						padding: 10rpx 20rpx;
						flex-direction: column;
						text-align: center;
						border-right: 1px solid #ccc;

						text {
							font-size: 26rpx;
						}

						.pink {
							margin-top: 20rpx;
							padding: 5rpx 5rpx;
							background-color: #FFA1AD;
							border-radius: 50rpx;
							color: white;
							font-size: 24rpx;
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

			text:nth-child(2) {
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

			text:nth-child(2) {
				margin-left: 10rpx;
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

	.ix_pop {
		height: auto;

		p {
			margin: 10rpx auto 20rpx;
			font-size: 32rpx;
			font-weight: bold;
		}

		.ps {
			flex-wrap: wrap;

			.prp {
				margin: 0rpx 10rpx;
				width: 30%;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 10rpx;
				margin-bottom: 10rpx;
			}
		}

		.dis_f {
			text {
				background: #FFFFFF;
				color: #999999;
				border: 2rpx solid #999999;
				border-radius: 50rpx;
				min-width: 142rpx;
				width: auto;
				padding: 5rpx 10rpx;
				height: 54rpx;
				line-height: 54rpx;
				text-align: center;
				font-size: 26rpx;
			}

			.select {
				background-color: #49CAA4;
				color: white;
				border: none;
				border: 2rpx solid #49CAA4;
			}
		}

		.btn {
			margin: 80rpx 0 50rpx;

			p {
				font-size: 30rpx;
				font-weight: 500;
				color: #666666;
			}

			button {
				width: 451rpx;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				background: #49CAA4;
				border-radius: 44rpx;
				color: white;
			}
		}
	}
	.myVideo{
		width: 100%;
		height: 350rpx;
		border-radius: 20rpx;
	}
	.swiper {
		width: 100%;
		height: 350rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		border-radius: 20rpx;

		image {
			width: 100%;
			height: 350rpx;
			border-radius: 20rpx;
		}
	}

	.headss {
		justify-content: space-around;
		position: absolute;
		top: 20rpx;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		z-index: 99;

		p {
			color: white;
			padding-bottom: 20rpx;
		}

		.selcet {
			border-bottom: 2px solid white;
		}
	}
</style>