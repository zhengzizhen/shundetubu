<template>
	<view class="as_body">
		<!-- 列表渲染 -->
		<view>
			<view class="ix_shop index_pads dis_f pd30" v-if="loading">
				<view class="ix_list dis_f" v-for="(item,index) in 8" :key="index" @click='toChild(item.title)'>
					<view class="" style="border-radius: 50%;background-color: #ccc;width: 100rpx;height: 100rpx;">
					</view>
					<p style="width: 110rpx;height: 24rpx;background-color: #ccc;margin-top: 20rpx;"></p>
				</view>
			</view>

			<view class="ix_shop index_pads dis_f pd30">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click='toChild(item.title)'>
					<image style="border-radius: 50%;" :src="item.value" mode=""></image>
					<text>{{item.title}}</text>
				</view>
			</view>
			<!-- <p class="as_fid">邀请好友</p> -->

			<p class="as_tit pd30">本周最热</p>
			<view class="uni-margin-wrap">
				<swiper class="swiper" @change='change' circular :autoplay="false" next-margin='160rpx'
					previous-margin='180rpx' :interval="2000" :duration="500">
					<swiper-item @click="toDetails(item.id)" v-for="(item,index) in swiperlist" :key="index">
						<view class="posir">
							<image :src="item.master_image" mode=""></image>
							<view v-show="swipercurrent == index" class="posiswiper dis_f flex_c">
								<p>{{item.title}}</p>
								<view class="ios" v-if="item.label[0]!=null">
									<text>{{item.label[0]}}</text>
									<text class="m10" v-if="item.label[1]!=null">{{item.label[1]}}</text>
								</view>
								<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
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
			
			<view v-if="loading">
				<view v-for="(item,i) in 4" :key="i"  class="dc_mod dis_f" style="background-color: #ccc;margin: 0 30rpx;height: 330rpx; margin-top: 40rpx; border-radius: 20rpx;">
					
				</view>
			</view>
			<!-- 当季推荐/口碑路线 -->
			<view class="pd30">
				<view @click="toDetails(item.id)" class="dc_mod dis_f" v-for="(item,index) in curryents" :key="index">
					<image :src="item.master_image" mode=""></image>
					<view class="dc_god">
						<p class="nus">{{item.title}}</p>
						<view class="dc_latt dis_f">
							<text
								v-if="item.trip_team[0]!=null">{{item.trip_team[0].start_day}}{{item.trip_team[0].status_text}}</text>
							<label
								v-if="item.trip_team[1]!=null">{{item.trip_team[1].start_day}}{{item.trip_team[1].status_text}}</label>
							<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
						</view>
						<view class="dc_span dis_f">
							<text>￥{{item.price}}</text>
							<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
						</view>
					</view>
				</view>
			</view>

			<p class="as_tit pd30">高铁出行</p>
			<view class="dis_f pd30">
				<view v-if="index<3" @click="toDetails(item.id)" class="as_zh dis_f" v-for="(item,index) in rail"
					:key='index'>
					<image :src="item.master_image" mode=""></image>
					<label>{{item.day}}天</label>
					<text>{{item.title}}</text>
					<p>￥{{item.price}}</p>
				</view>
			</view>

			<p class="as_tit pd30">亲子活动</p>
			<view class="pd30">
				<view @click="toDetails(item.id)" class="dc_mod dis_f" v-for=" (item,index) in chind" :key="index">
					<image :src="item.master_image" mode=""></image>
					<view class="dc_god">
						<p class="nus">{{item.title}}</p>
						<text class="posw">{{item.day}}天</text>
						<view class="dc_latt dis_f" v-if="item.trip_team[0]!=null">
							<text>{{item.trip_team[0].start_day}}{{item.trip_team[0].status_text}}</text>
							<label
								v-if="item.trip_team[1]!=null">{{item.trip_team[1].start_day}}{{item.trip_team[1].status_text}}</label>
							<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
						</view>
						<view class="dc_span dis_f">
							<text>￥{{item.price}}</text>
							<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
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
					<view @click="toDetails(item.id)" class="ix_flexs" v-for="(item,index) in periphery" :key="index">
						<image :src="item.master_image"></image>
						<text class="posw">{{item.day}}天</text>
						<p class="ix_title">{{item.title}}</p>
						<view class="ds_bt dis_f" v-if="item.trip_team[0]!=null">
							<label>{{item.trip_team[0].start_day}} | {{item.trip_team[0].status_text}}</label>
							<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
						</view>
						<view class="sp dis_f">
							<p>￥{{item.price}}</p>
							<label>{{item.traveller_number}}人去过</label>
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
				arrlist: [], //金刚区
				swiperlist: [], //轮播图
				sublist: ['当季推荐', '口碑路线'],
				swipercurrent: 0,
				current: 0,
				list: [], //当季推荐
				lists: [], //口碑路线
				curryents: [], //赋值数据
				rail: [], //高铁出行
				chind: [], //亲子活动
				curry: null,
				hotlist: ['报名中', '即将成团', '已成行', '1天', '2天'],
				obj: {
					height: '80rpx'
				},
				page: 1,
				periphery: [], //周边数据
				bottom: false, //是否触底
				loading: true
			};
		},
		onLoad() {
			this.getlist()
			//全部周边活动
			const params = {
				page: this.page,
				limit: 10
			}
			this.getperiphery(params)
		},
		onReachBottom() {
			if (this.bottom == true) {
				return false
			} else {
				this.page += 1
				const params = {
					page: this.page,
					limit: 10
				}
				this.getperiphery(params)
			}
		},
		methods: {
			async getlist() {
				const res = await this.$http('/trip/vicinity/index')
				this.assignment(res.data.data)
				this.loading = false
			},
			async getperiphery(params) {
				const res = await this.$http('/trip/vicinity/list/all', params)
				this.periphery = this.periphery.concat(res.data.data)
				if (this.periphery.length < 10) {
					this.bottom = true
				}
			},
			assignment(data) {
				this.arrlist = data.icon_list //金刚区
				this.swiperlist = data.trip.hot //轮播图
				this.curryents = data.trip.recommend //第一次当季推荐赋值
				this.list = data.trip.recommend
				this.lists = data.trip.wom
				this.rail = data.trip.ktx
				this.chind = data.trip.chind
			},
			sectionChange(index) {
				this.current = index;
				if (index == 1) {
					this.curryents = this.lists
				} else if (index == 0) {
					this.curryents = this.list
				}
			},
			chekelist(e, index) {
				if (index == this.curry) {
					this.curry = null
					this.page = 1
					this.periphery = []
					const params = {
						page: this.page,
						limit: 10
					}
					this.getperiphery(params)
					return false
				}
				this.curry = index
				if (index == 0) {
					//报名中
					this.page = 1
					this.periphery = []
					let params = {
						page: this.page,
						limit: 10,
						search_status: 0
					}
					this.getperiphery(params)
					return false
				} else if (index == 1) {
					//即将成团
					this.page = 1
					this.periphery = []
					let params = {
						page: this.page,
						limit: 10,
						search_status: 1
					}
					this.getperiphery(params)
					return false
				} else if (index == 2) {
					//已成团
					this.page = 1
					this.periphery = []
					let params = {
						page: this.page,
						limit: 10,
						search_status: 2
					}
					this.getperiphery(params)
					return false
				} else if (index == 3) {
					//已成团
					this.page = 1
					this.periphery = []
					let params = {
						page: this.page,
						limit: 10,
						search_min_day: 1,
						search_max_day: 1
					}
					this.getperiphery(params)
					return false
				} else if (index == 4) {
					//已成团
					this.page = 1
					this.periphery = []
					let params = {
						page: this.page,
						limit: 10,
						search_min_day: 2,
						search_max_day: 2
					}
					this.getperiphery(params)
					return false
				}
			},
			change(e) {
				console.log(e.detail.current);
				this.swipercurrent = e.detail.current
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e)
			},
			toChild(name) {
				switch (name) {
					case '省内一天':
						this.$jump('./oneday')
						break;
					case '省内两天':
						this.$jump('./twoday')
						break;
					case '省内亲子':
						this.$jump('./Parenting')
						break;
					case '高铁出行':
						this.$jump('./speed')
						break;
					case '非周末':
						this.$jump('./NonWeekend')
						break;
					case '美食路线':
						this.$jump('./delicacy')
						break;
					case '登山路线':
						this.$jump('./mountaineering')
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
	body {
		box-sizing: border-box;
	}

	.as_body {
		margin-bottom: 1000rpx;
		padding-bottom: 100rpx;
		box-sizing: border-box;
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
			width: 400rpx;
			margin-left: 20rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
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
				margin-right: 10rpx;
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

	.nus {
		font-size: 28rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.as_zh {
		width: 33%;
		flex-direction: column;
		position: relative;
		width: 240rpx;

		text {
			font-size: 28rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

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
				height: 568rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

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
				margin: 0 auto 10rpx;
				word-wrap: normal;
				font-size: 26rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
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
		justify-content: space-between;
		height: 54rpx;
		line-height: 54rpx;

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
		box-sizing: border-box;

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

	.info {
		width: 100%;
		text-align: center;
		margin: 20rpx auto;
		justify-content: center;

		p {
			margin: 0 8rpx;
			width: 22rpx;
			height: 22rpx;
			background: #F0F0F0;
			border-radius: 50%;
		}

		.active {
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