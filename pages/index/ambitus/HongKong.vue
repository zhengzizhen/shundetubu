<template>
	<view class="pd30">
		<u-subsection :customStyle='obj' @change="sectionChange" :list="list" :current="current"
			activeColor='#49CAA4'></u-subsection>
		<view class="min">
			<view @click="toDetails(item.id)" class="dc_mod dis_f" v-for=" (item,index) in lists" :key="index">
				<image :src="item.master_image" mode=""></image>
				<view class="dc_god">
					<p>{{item.title}}</p>
					<view class="dc_latt dis_f">
						<text v-for='(v,i) in item.trip_team' :key="i">{{v.start_day}}丨{{v.status_text}}</text>
						<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="dc_span dis_f">
						<text>￥{{item.price}}</text>
						<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
					</view>
				</view>
			</view>
		</view>


		<view v-if="ktx.length!=0">
			<p class="HKtitle">高铁出行</p>
			<view class="dis_f">
				<view @click="toDetails(item.id)" class="as_zh dis_f" v-for="(item,index) in ktx" :key='index'>
					<image :src="item.master_image" mode=""></image>
					<label>{{item.day}}天</label>
					<text>{{item.title}}</text>
					<p>￥{{item.price}}</p>
				</view>
			</view>
		</view>

		<view v-if="chind.length!=0">
			<p class="HKtitle">亲子活动</p>
			<view class="">
				<view @click="toDetails(item.id)" class="dc_mod dis_f" v-for=" (item,index) in chind" :key="index">
					<image :src="item.master_image" mode=""></image>
					<view class="dc_god">
						<p>{{item.title}}</p>
						<view class="dc_latt dis_f">
							<text v-for='(v,i) in item.trip_team' :key="i">{{v.start_day}}丨{{v.status_text}}</text>
							<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
						</view>
						<view class="dc_span dis_f">
							<text>￥{{item.price}}</text>
							<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
						</view>
					</view>
				</view>
			</view>
		</view>
		<p class="HKtitle">全部周边活动</p>
		<!-- 单选 -->
		<view class="cheborder">
			<p :class="curry == index?'colors':''" @click='chekelist(item,index)' v-for="(item,index) in hotlist"
				:key="index">{{item}}</p>
		</view>
		<!-- 热门推荐 -->
		<view class="ix_block index_pad">
			<view class="ix_img dis_f">
				<view class="ix_flexs dis_f flex_c jscb" v-for="(item,index) in periphery" :key="index">
					<image :src="item.master_image"></image>
					<text class="posw">{{item.day}}天</text>
					<p class="ix_title">{{item.title}}</p>
					<view class="ds_bt dis_f">
						<label v-for="(v,i) in item.trip_team" :key="i">{{v.start_day}}丨{{v.status_text}}</label>
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
</template>

<script>
	export default {
		data() {
			return {
				list: ['当季推荐', '口碑路线'],
				current: 0,
				obj: {
					height: '80rpx'
				},
				curry: null,
				lists: [], //提神
				recommend: [], //当季推荐
				wom: [], //口碑推荐
				ktx: [], //高铁出行
				chind: [], //亲子活动
				periphery: [], //下半部
				bottom: false,
				hotlist: ['报名中', '即将成团', '已成行', '1天', '2天'],
				page: 1
			}
		},
		onLoad() {
			this.getlist('/trip/hk/index')
			const params = {
				page: this.page,
				limit: 10
			}
			this.getperiphery(params)
		},
		methods: {
			async getlist(url) {
				const res = await this.$http(url)
				this.recommend = res.data.data.recommend
				this.wom = res.data.data.wom //当季推荐
				this.lists = res.data.data.recommend //口碑路线
				this.ktx = res.data.data.ktx //高铁出行
				this.chind = res.data.data.chind
			},
			async getperiphery(params) {
				const res = await this.$http('/trip/vicinity/list/all', params)
				this.periphery = this.periphery.concat(res.data.data)
				if (this.periphery.length < 10) {
					this.bottom = true
				}
			},
			sectionChange(e) {
				this.current = e
				if (e == 0) {
					this.lists = this.recommend
				} else if (e == 1) {
					this.lists = this.wom
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
				this.page = 1
				this.periphery = []
				if (index == 0) {
					//报名中
					let params = {
						page: this.page,
						limit: 10,
						search_status: 0
					}
					this.getperiphery(params)
					return false
				} else if (index == 1) {
					//即将成团
					let params = {
						page: this.page,
						limit: 10,
						search_status: 1
					}
					this.getperiphery(params)
					return false
				} else if (index == 2) {
					//已成团
					let params = {
						page: this.page,
						limit: 10,
						search_status: 2
					}
					this.getperiphery(params)
					return false
				} else if (index == 3) {
					//已成团
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
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.min {
		max-height: 740rpx;
		overflow: auto;
		overflow-x: hidden; //隐藏x轴滚动条
		padding-bottom: 20rpx;
	}

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
			font-size: 30rpx;
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

			text:nth-child(1) {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #49CAA4;
				margin-left: 10rpx;
			}

			text:nth-child(2) {
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

	.HKtitle {
		font-size: 32rpx;
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