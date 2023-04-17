<template>
	<view class="cd_body">
		<view class="header">
			<u-tabs itemStyle="width:25%;padding-left: 15px; padding-right: 15px; height: 44px;" lineWidth="25"
				lineColor='#49CAA4' :list="list1" @change="(item)=>change(item)"
				:activeStyle="{ color: '#49CAA4' }"></u-tabs>
		</view>
		
		<view v-show="isShow1">
			<view class="cd_content pd30 posir" v-for="(item,index) in list" :key="index">
				<image src="@/static/image/mine/effective.jpg" mode=""></image>
				<view class="position posia">
					<view class="dis_f flex_c">
						<p>30<label>元</label><text>满30元可用</text></p>
						<p class="bot">7天有效优惠直减券</p>
					</view>
				</view>
			</view>
		</view>
		
		<view v-show="isShow2">
			<view  class="cd_content pd30 posir" v-for="(item,index) in list" :key="index">
				<image src="@/static/image/mine/overdue.jpg" mode=""></image>
				<view class="position posia">
					<view class="dis_f flex_c">
						<p>30<label>元</label><text>满30元可用</text></p>
						<p class="bot">7天有效优惠直减券</p>
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
				list1: [{
					name: '全部',
				}, {
					name: '已使用',
				}, {
					name: '已过期',
				}],
				list:[1,2],
				isShow1:true,
				isShow2:true
			}
		},
		methods: {
			change(item) {
				if(item.index === 0){
					this.isShow1 = true
					this.isShow2 = true
				}else if(item.index === 1){
					this.isShow1 = true
					this.isShow2 = false
				}else if(item.index === 2){
					this.isShow1 = false
					this.isShow2 = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cd_body{
		background-color: #fafafa;
		height: 1500rpx;
		.header{
			width: 100%;
			background-color: white;
		}
	}
	.cd_content{
		margin: 30rpx 0;
		width: 690rpx;
		height: 224rpx;
		image{
			width: 690rpx;
			height: 224rpx;
		}
		.position{
			top: 30rpx;
			left: 80rpx;
			p{
				font-size: 77rpx;
				font-weight: 400;
				color: #FFFEFE;
				label{
					font-size: 40rpx;
				}
			}
			text{
				margin-left: 30rpx;
				font-size: 24rpx;
				color: white;
			}
			.bot{
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFEFE;
				margin-top: 30rpx;
			}
		}
	}
</style>