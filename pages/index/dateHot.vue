<template>
	<view class="dt_body">
		<view>
			<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change"
				@monthSwitch="monthSwitch" />
		</view>
		<view class="dt_text">
			<view class="dt_bor">
				<p @click='checktabs(index)' :class="item.state?'green':''" v-for="(item,index) in labellist" :key="index">{{item.label}}</p>
			</view>
			<view class="dis_f dt_col">
				<view class="dt_im dis_f" v-for="(item,index) in list" :key="index">
					<image src="@/static/image/index/banners.jpg" mode=""></image>
					<view class="dis_f dt_kk">
						<text class="one">亭可马里季-斯里兰卡纯玩9天</text>
						<text class="two">领队：卢本伟</text>
						<text class="three"><text class="ls">周六丨报名中</text>
						<text>03月28日丨8天</text>
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
				info: {
					date:'',
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				show: true,
				list:[1,2,3],
				lists:['1天','2~3天','3~4天','5天+'],
				labellist:[]
			}
		},
		onLoad() {
			this.lists.forEach((item,index)=>{
				let tabs = {}
				tabs.label = item
				this.labellist.push(tabs)
			})
			
			this.labellist.forEach((item,index)=>{
				item.state = false
			})
			this.labellist[0].state = true
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
			// TODO 模拟请求异步同步数据
		},
		methods: {
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				// if (this.info.selected.length > 5) return
				// this.info.selected.push({
				// 	date: e.fulldate,
				// 	info: '打卡'
				// })
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
			checktabs(index){
				this.labellist.forEach((item,index)=>{
					item.state = false
				})
				this.labellist[index].state = true
				this.$forceUpdate()
			}
		}
	}
</script>

<style scoped lang="scss">
.dt_body{
	width: 100%;
	height: 750px;
	background-color:#f5f5f5;
}
.dt_text{
	margin-top: 30rpx;
	height: 600rpx;
	background-color: white;
	padding: 20rpx 30rpx;
	p{
		display: inline-flex;
		margin-right: 30rpx;
		padding: 10rpx 20rpx;
		background: #FFFFFF;
		border: 1px solid #CCCCCC;
		border-radius: 32rpx;
		color: #666666;
		font-size: 24rpx;
	}
	.green{
		color: white;
		background-color: #49CAA4;
		border: 1px solid #49CAA4;
	}
}
.dt_im{
	margin-top: 50rpx;
	background: url('../../static/index/bgxlx.png') no-repeat 600rpx 40rpx;
	background-size: 12%;
	image{
		width: 180rpx;
		height: 180rpx;
		border-radius: 20rpx;
	}
	.dt_kk{
		width: 500rpx;
		margin-left: 20rpx;
		flex-direction: column;
		.one{
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}
		.two{
			font-size: 26rpx;
			font-weight: 500;
			color: #999999;
		}
		.three{
			margin-top: 30rpx;
			.ls{
				color: white;
				margin-left: 0 !important;
				width: 180rpx;
				height: 36rpx;
				background: #F2AD5A;
				font-size: 24rpx;
				padding: 5rpx 10rpx;
			}
			text{
				margin-left: 20rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
		}
		
	}
}
.dt_col{
	flex-direction: column;
}
</style>