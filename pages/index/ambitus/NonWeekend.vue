<template>
	<view class="pd30">
		<view class="ts_tbs dis_f">
			<p :class="curry == index ?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v,index)">
				{{v}}
			</p>
		</view>
		<view @click="toDetails(item.id)" class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
			<image :src="item.master_image" mode=""></image>
			<view class="dc_god">
				<p>{{item.title}}</p>
				<text class="posw">{{item.day}}天</text>
				<view class="dc_latt dis_f" v-if="item.trip_team!=''">
					<text v-for="(v,i) in item.trip_team" :key="i">{{v.start_day}}{{v.status_text}}</text>
					<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
				</view>
				<p class="title dis_f"><label>难度： {{item.difficulty}}</label></p>
				<view class="dc_span dis_f">
					<text>￥{{item.price}}</text>
					<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
				</view>
			</view>
		</view>


		<u-popup :show="isShow" mode="top" @close="close" @open="open">
			<view class="popViews pd30">
				<p class="tit">出行天数</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="daycurry == index ?'green':''" v-for="(v,index) in day" :key="index"
						@click="checkday(v,index)">
						{{v.title}}
					</p>
				</view>

				<p class="tit">价格</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="moneycurry == index?'green':''" v-for="(v,index) in money" :key="index"
						@click="checkmoney(v,index)">
						{{v.title}}
					</p>
				</view>

				<p class="tit">出行状态</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="statecurry == index?'green':''" v-for="(v,index) in state" :key="index"
						@click="checkstate(v,index)">
						{{v.name}}
					</p>
				</view>


				<view class="dis_f btn">
					<p class="ps" @click='resetting'>重置</p>
					<p class="gs" @click='toclick'>确定</p>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				curry: 0, //综合选择
				tablist: ['综合', '口碑', '热度', '筛选'],
				list: [],
				daycurry: null,
				day: [],
				moneycurry: null,
				money: [],
				statecurry: null,
				state: [],
				page: 1,
				bottom: false,
				search_min_price: '', //最小金额
				search_max_price: '', //最大金额
				search_min_day: '', //最少天数
				search_max_day: '', //最多天数
				search_status: '', //报名状态
			}
		},
		onLoad() {
			const params = {
				page: this.page,
				limit: 10
			}
			this.getlist(params)
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
				this.getlist(params)
			}
		},
		methods: {
			async getlist(params) {
				const res = await this.$http('/trip/vicinity/list/wordday', params)
				this.list = this.list.concat(res.data.data)
				if (res.data.data.length < 10) {
					this.bottom = true
				}
			},
			chetbs(e, index) {
				this.curry = index
				if (index == 0) {
					let params = {
						page: this.page,
						limit: 10
					}
					this.getlist(params)
					return false
				}
				if (index == 1) {
					let params = {
						page: this.page,
						limit: 10,
						sort: '口碑'
					}
					this.getlist(params)
					return false
				} else if (index == 2) {
					let params = {
						page: this.page,
						limit: 10,
						sort: '热度'
					}
					this.getlist(params)
					return false
				} else if (index == 3) {
					this.getseach()
					this.isShow = true
					return false
				}
			},
			async getseach() {
				const res = await this.$http('/trip/search/vicinity_workday')
				this.day = res.data.data.search_day
				this.money = res.data.data.search_price
				this.state = res.data.data.search_status
			},
			chetbs1(e) {
				e.state = !e.state
			},
			checkday(e, index) { //出行天数
				this.daycurry = index
				this.search_min_day = e.min
				this.search_max_day = e.max
			},
			checkmoney(e, index) { //价格
				this.moneycurry = index
				this.search_min_price = e.min
				this.search_max_price = e.max
			},
			checkstate(e, index) { //状态
				this.statecurry = index
				this.search_status = index
			},
			close() {
				this.isShow = false
			},
			open() {

			},
			resetting() {
				this.daycurry = null
				this.moneycurry = null
				this.statecurry = null
			},
			toclick() {
				this.page = 1
				this.list = []
				const params = {
					page: this.page,
					limit: 10,
					search_min_price: this.search_min_price,
					search_max_price: this.search_max_price,
					search_min_day: this.search_min_day,
					search_max_day: this.search_max_day,
					search_status: this.search_status
				}
				this.getlist(params)
				this.isShow = false
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.ts_tbs {
		text-align: center;

		p {
			width: 24%;
			padding: 20rpx;
		}

		.green {
			color: #49CAA4;
		}
	}

	.ts_tabs {
		margin: 30rpx 0;
		text-align: center;

		p {
			width: 158rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			background: #F4F4F4;
			border-radius: 31rpx;
			margin-right: 20rpx;
			font-size: 28rpx;
		}

		.green {
			color: white;
			background: #49CAA4;
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 20rpx 20rpx;

		image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			flex: 1;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

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

			text:nth-child(1) {
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
			margin: 10rpx 0 30rpx;

			align-items: center;

			label {
				display: block;
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
				margin-right: 10rpx;
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

	.popViews {
		height: auto;

		.tit {
			padding: 30rpx 0;
			font-size: 32rpx;
			font-weight: 500;
			color: #000000;
		}
	}

	.oy_tabs {
		text-align: center;

		p {
			width: 158rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			background: #F4F4F4;
			border-radius: 8rpx;
			font-size: 28rpx;
			border: 1px solid #F4F4F4;
			margin: 10rpx 40rpx 20rpx 0rpx;
		}

		.green {
			background: #E9FFF9;
			border: 1px solid #49CAA4;
			border-radius: 10rpx;
			color: #49CAA4;
		}
	}

	.btn {
		p {
			width: 345rpx;
			height: 124rpx;
			line-height: 124rpx;
			background: #FFFFFF;
			text-align: center;
			box-sizing: border-box;
			margin-top: 140rpx;
		}

		.ps {
			border: 1px solid #999999;
		}

		.gs {
			background: #49CAA4;
			color: white;
		}
	}
</style>