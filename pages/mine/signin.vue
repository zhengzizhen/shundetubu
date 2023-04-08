<template>
	<view class="body">
		<view class="header">
			<view class="top pd30 dis_f">
				<view class="dis_f alitmc">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<view class="text">
						<p>已经连续签到1天</p>
						<text>明天签到可获得10圈币</text>
					</view>
				</view>
				<view class="right dis_f alitmc">
					<image src="@/static/image/mine/money.jpg" mode=""></image>
					<text>421</text>
				</view>
			</view>
		</view>

		<view class="views pd30">
			<p class="tit">连续签到领好礼</p>
			<view class="dis_f send">
				<view @click="cheout(item)"  :class="item.state?'greendiv':'greendivs'" class=" dis_f" v-for="(item,index) in list" :key="index">
					<p>{{item.name}}</p>
					<image src="@/static/image/mine/money.jpg" mode=""></image>
					<p class="ns">10圈币</p>
				</view>
			</view>
		</view>
		
		<view class="views pd30 mat">
			<p class="tit">做任务赚金币</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'第一天',state:true},
					{name:'第二天',state:false},
					{name:'第三天',state:false},
					{name:'第四天',state:false},
					{name:'第五天',state:false},
					{name:'第六天',state:false},
					{name:'第七天',state:false},
				]
			}
		},
		methods: {
			cheout(v){
				this.list.forEach((item,index)=>{
					item.state = false
				})
				v.state = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		height: 1500rpx;
		background-color: #FAFAFA;
	}

	.header {
		background-color: #49CAA4;
		height: 429rpx;
		padding-top: 10rpx;
	}

	.top {
		margin-top: 210rpx;
		align-items: center;
		justify-content: space-between;

		image {
			width: 96rpx;
			height: 96rpx;
			border-radius: 50%;
		}
	}

	.text {
		margin-left: 20rpx;
		color: white;

		p {
			font-size: 30rpx;
		}

		text {
			font-size: 24rpx;
		}
	}

	.right {
		border: 1px solid white;
		padding: 10rpx 20rpx;
		border-radius: 50rpx;

		image {
			width: 50rpx;
			height: 50rpx;
		}

		text {
			margin-left: 10rpx;
			color: white;
			font-size: 30rpx;
		}
	}

	.views {
		margin: -50rpx 30rpx 0;
		border-radius: 20rpx;
		height: 460rpx;
		background-color: white;
	}

	.tit {
		padding: 20rpx 0;
		font-weight: bold;
	}

	.send {
		justify-content: start;
		flex-wrap: wrap;
	}
	.greendivs {
		flex-direction: column;
		width: 138rpx;
		height: 160rpx;
		background: #F4F4F4;
		border-radius: 20rpx;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		color: #000000;
		margin-top: 20rpx;
		margin-left: 20rpx;
		p {
			font-size: 22rpx;
		}
		.ns{
			color: #999999;
		}
		image {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
		}
	}
	.greendiv {
		flex-direction: column;
		width: 138rpx;
		height: 160rpx;
		background: #49CAA4;
		border-radius: 20rpx;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		color: white;
		margin-top: 20rpx;
		margin-left: 20rpx;
		p {
			font-size: 22rpx;
		}

		image {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
		}
	}
	.mat{
		margin-top: 50rpx !important;
	}
</style>