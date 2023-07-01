<template>
	<view class="body ">
		<view class="header pd30" >
			<p class="title">本活动存在其他期次，可以选择改签:</p>
			<p class="title">请注意其他期次得集合点</p>
		</view>

		<view class="content bor_r">
			<view @click="changeindex(item,index)" class="dis_f jscb alitmc just pd30" v-for="(item,index) in list" :key="index" >
				<view class="dis_f flex_c">
					<p>{{item.start_day}}</p>
					<text>价格：{{item.price}}</text>
				</view>
				<image v-if="curry == index" src="@/static/image/mine/success.jpg" mode=""></image>
			</view>
			<view v-if="list.length == 0">
				<p style="margin: 20rpx 0;">暂无可改签的期次</p>
			</view>
		</view>

		<!-- <p class="sios pd30">选择改签人员</p>
		
		<view class="dis_f jscb user alitmc" v-for="(v,index) in traveller" :key="index">
			<p>{{v.username}}</p>
			<image @click="changgecurry == index" v-show="!isShow" src="@/static/image/mine/check.png" mode=""></image>
		</view> -->

		<p class="sios pd30">改签说明</p>
		<text class="kitro pd30">1.活动改签无需支付任何费用，仅可改签一次;</text>
		<text class="kitro pd30">2.根据服务约定，因为当前退款无需扣费，所以改签后再申请退出的，按改签后的活动退款规则处理</text>
		<view class="fixed">
			<p class="btn" @click='submit'>确定改签</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				list: [{
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: true
				}],
				curry:0,
				id:''
			}
		},
		onLoad(option) {
			this.getlist(option.id)
			this.id = option.id
		},
		methods: {
			async getlist(v){
				uni.showLoading({
					title:'加载中'
				})
				const res = await this.$http('/trip/order/detail',{
					order_no:v
				})
				uni.hideLoading()
				this.getid(res.data.data.trip.trip_id)
			},
			async getid(v){
				const res = await this.$http('/trip/team/list',{
					trip_id:v
				})
				this.list = res.data.data
				this.teamid = res.data.data[0].trip_team_id
			},
			changeindex(e,index){
				this.curry = index
				this.teamid = e.trip_team_id
				console.log(e);
			},
			async submit(){
				if(!trip_team_id){
					uni.$u.toast('请选择需要改签的日期')
				}
				uni.showLoading()
				const res = await this.$http('/trip/order/ticket',{
					order_no:this.id,
					trip_team_id:this.teamid
				})
				uni.hideLoading()
				uni.$u.taost('改签成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 1500rpx;
		height: auto;
		padding-top: 10rpx;

		.header {
			margin: 20rpx 0;

			.title {
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}
		}

		.content {
			margin: 0 30rpx;
			background-color: white;
			height: auto;
			padding: 10rpx 30rpx;

			.just:last-child {
				border: none;
			}

			.just {
				margin: 20rpx 0 0rpx;
				border-bottom: 1px solid #f4f4f4;
				padding-bottom: 20rpx;
			}

			p {
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}

			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}

			image {
				width: 32rpx;
				height: 24rpx;
			}
		}
	}

	.sios {
		margin: 30rpx 0;
		font-size: 30rpx;
		font-weight: 500;
		color: #49CAA4;
	}

	.user {
		margin: 0 30rpx;
		height: 86rpx;
		line-height: 86rpx;
		padding: 0 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		image {
			width: 35rpx;
			height: 35rpx;
		}
	}

	.kitro {
		display: block;
		font-size: 24rpx;
		font-weight: 500;
		color: #999999;
	}

	.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);
		padding-top: 20rpx;
		.btn {
			margin: 40rpx auto;
			width: 690rpx;
			height: 78rpx;
			line-height: 78rpx;
			background: #49CAA4;
			border-radius: 39rpx;
			color: white;
			text-align: center;
			font-size: 30rpx;
		}
	}
</style>