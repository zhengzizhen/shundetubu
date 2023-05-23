<template>
	<view class="dt_body">
		<view>
			<uni-calendar :date='dater' :insert="true" :lunar="false" :disable-before="true" :start-date="start"
				:selected='selected' :end-date="end" @change="change" />
		</view>
		<view class="dt_text">
			<!-- <view class="dt_bor">
				<p @click='checktabs(item,index)' :class="curry == index ?'green':''" v-for="(item,index) in lists"
					:key="index">{{item.title}}</p>
			</view> -->
			<view class="dis_f dt_col">
				<view @click="toDetails(item.trip_id)" class="dt_im dis_f" v-for="(item,index) in list" :key="index">
					<image :src="item.trip_image" mode=""></image>
					<view class="dis_f dt_kk flex_c jscb">
						<text class="one">{{item.trip_title}}</text>
						<text class="two">领队：{{item.akela_nickname}}</text>
						<text class="three"><text class="ls">{{item.week}}丨{{item.status_text}}</text>
							<text>{{item.month}}月{{item.day}}日丨{{item.trip_day}}天</text>
						</text>
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
				dater: '', //默认日期,
				start: '',
				end: '',
				show: true,
				list: [],
				curry: null,
				lists: [],
				selected: [
					// 	{
					// 	date: '2023-05-01',
					// 	info: '劳动节'
					// },
				],
				year: '',
				month: '',
				page:1,
				seach:''
			}
		},
		onLoad(option) {
			this.getseach()
			const date = new Date()
			let a = date.getFullYear()
			let b = date.getMonth() + 1
			let c = date.getDate()
			this.month = b
			if (b < 10) {
				b = '0' + b
			}
			if (c < 10) {
				c = '0' + c
			}
			if (option.date >= 10) {
				this.month = option.date
				this.dater = a + '-' + option.date 
				this.start = a + '-' + option.date
				this.end = a + '-' + option.date + '-31'
				this.getlist()
				return false
			} else if (option.date < 10) {
				this.month = option.date
				this.dater = a + '-0' + option.date
				this.start = a + '-0' + option.date
				this.end = a + '-' + option.date + '-31'
				this.getlist()
				return false
			}
			this.dater = a + '-' + b + '-' + c
			this.start = a + '-' + b
			this.end = a + '-' + b + '-31'
			this.getlist()
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
			// TODO 模拟请求异步同步数据
		},
		methods: {
			async getlist(){
				const res = await this.$http('/trip/calendar/trip',{
					page:this.page,
					limit:10,
					month:this.month
				})
				this.list = this.list.concat(res.data.data) 
			},
			async getseach(){
				const res = await this.$http('/trip/search/calendar')
				this.lists = res.data.data.search_price
			},
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				// if (this.info.selected.length > 5) return
				// this.info.selected.push({
				// 	date: e.fulldate,
				// 	info: '打卡'
				// })
				this.page = 1
				this.list = []
				const params = {
					page:this.page,
					limit:10,
					month:this.month,
					day:e.date
				}
				this.getlistplus(params)
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
			// checktabs(item, index) {
			// 	this.page = 1
			// 	this.list = []
			// 	this.curry = index
			// 	const params = {
			// 		page:this.page,
			// 		limit:10,
			// 		search_min_day:item.min,
			// 		search_max_day:item.max
			// 	}
			// 	this.getlistplus(params)
			// },
			async getlistplus(params){
				uni.showLoading()
				const res = await this.$http('/trip/calendar/trip',params)
				uni.hideLoading()
				this.list = res.data.data
			},
			toDetails(e) {
				this.$jump('./Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style scoped lang="scss">
	.dt_body {
		width: 100%;
		height: 750px;
		background-color: #f5f5f5;
	}

	.dt_text {
		margin-top: 30rpx;
		height: 600rpx;
		background-color: white;
		padding: 20rpx 30rpx;

		p {
			display: inline-flex;
			margin-right: 30rpx;
			padding: 10rpx 20rpx;
			background: #FFFFFF;
			border: 1px solid #CCCCCC;
			border-radius: 32rpx;
			color: #666666;
			font-size: 24rpx;
		}

		.green {
			color: white;
			background-color: #49CAA4;
			border: 1px solid #49CAA4;
		}
	}

	.dt_im {
		margin-top: 50rpx;
		background: url('../../static/index/bgxlx.png') no-repeat 600rpx 40rpx;
		background-size: 12%;

		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}

		.dt_kk {
			width: 500rpx;
			margin-left: 20rpx;
			flex-direction: column;

			.one {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}

			.two {
				font-size: 26rpx;
				font-weight: 500;
				color: #999999;
			}

			.three {
				margin-top: 30rpx;

				.ls {
					color: white;
					margin-left: 0 !important;
					width: 180rpx;
					height: 36rpx;
					background: #F2AD5A;
					font-size: 24rpx;
					padding: 5rpx 10rpx;
				}

				text {
					margin-left: 20rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #999999;
				}
			}

		}
	}

	.dt_col {
		flex-direction: column;
	}
</style>