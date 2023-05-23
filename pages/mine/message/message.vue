<template>
	<view>
		<view @click="goordermsg()" class="ms_logo dis_f">
			<image src="/static/image/meassage/order.jpg" mode=""></image>
			<view class="ws dis_f flex_c" v-if="this.list.系统消息">
				<view class="dis_f msgtop">
					<p>系统消息</p>
					<text>{{this.list.系统消息.time}}</text>
				</view>
				<view class="dis_f msgbottm">
					<p>{{this.list.系统消息.title}}</p>
					<text v-if="this.list.系统消息.unread_number != 0">{{this.list.系统消息.unread_number}}</text>
				</view>
			</view>
		</view>
		
		<view @click="goRecommend()" class="ms_logo dis_f">
			<image src="/static/image/meassage/shoucang.jpg" mode=""></image>
			<view class="ws dis_f flex_c" v-if="this.list.精选推荐">
				<view class="dis_f msgtop">
					<p>精选推荐</p>
					<text>{{this.list.精选推荐.time}}</text>
				</view>
				<view class="dis_f msgbottm">
					<p>{{this.list.精选推荐.title}}</p>
					<text v-if="this.list.精选推荐.unread_number != 0">{{this.list.精选推荐.unread_number}}</text>
				</view>
			</view>
		</view>
		
		<view class="ms_logo dis_f" @click='goHot()'>
			<image src="/static/image/meassage/hot.jpg" mode=""></image>
			<view class="ws dis_f flex_c" v-if="this.list.每周热门">
				<view class="dis_f msgtop">
					<p>每周热门</p>
					<text>{{this.list.每周热门.time}}</text>
				</view>
				<view class="dis_f msgbottm">
					<p>{{this.list.每周热门.title}}</p>
					<text v-if="this.list.每周热门.unread_number != 0">{{this.list.每周热门.unread_number}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{},
			}
		},
		onLoad() {
			this.getmessage()
		},
		methods: {
			async getmessage(){
				uni.showLoading()
				const res = await this.$http('/user/message/category')
				uni.hideLoading()
				this.list =  res.data.data
			},
			goHot(){
				this.$jump('./hot')
			},
			goRecommend(){
				this.$jump('./recommend')
			},
			goordermsg(){
				this.$jump('./ordermsg')
			}
		}
	}
</script>

<style lang="scss" scoped>
.ms_logo{
	padding: 30rpx;
	border-bottom: 2rpx solid #f3f3f3;
	image{
		width: 82rpx;
		height: 82rpx;
	}
	.ws{
		width: 85%;
	}
	.msgtop{
		margin-left: 30rpx;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		p{
			font-size: 30rpx;
		}
		text{
			font-size: 24rpx;
			font-weight: 500;
			color: #666666;
		}
	}
	.msgbottm{
		margin-left: 30rpx;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin-top: 10rpx;
		p{
			font-size: 24rpx;
			font-weight: 500;
			color: #666666;
		}
		text{
			font-size: 22rpx;
			font-weight: 500;
			color: white;
			padding: 2rpx;
			background-color: red;
			border-radius: 50rpx;
			text-align: center;
			min-height: 30rpx;
			min-width: 30rpx;
			height: auto;
			width: auto;
		}
	}
}
</style>
