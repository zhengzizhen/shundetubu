<template>
	<view class="cc_body">
		<p>活动领队</p>
		<view class="pd30 dis_f cc_user">
			<view class="cc_group dis_f flex_c alitmc" v-for="(v,i) in list" :key="i">
				<image :src="v.avatar" mode=""></image>
				<text>{{v.nickname}}</text>
			</view>
		</view>
		
		<p>已报名</p>
		<view class="pd30 dis_f cc_user">
			<view class="cc_group dis_f flex_c alitmc" v-for="(v,i) in Userlist" :key="i">
				<image :src="v.avatar" mode=""></image>
				<text class="bold">{{v.nickname}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				Userlist:[]
			}
		},
		onLoad(option) {
			const users = JSON.parse(option.user)
			users.forEach((item,index)=>{
				if(item.identity=='会员'){
					this.Userlist.push(item)
				}else{
					this.list.push(item)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.cc_body{
		background-color: #FAFAFA;
	}
	p {
		margin: 30rpx 0 0rpx;
		padding: 10rpx 30rpx 30rpx;
		background-color: white;
	}
	image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 850%;
	}
	.cc_user {
		flex-wrap: wrap;
		background-color: white;
		text-align: center;
		.cc_group {
			width: 20%;
			margin: 0rpx 0 20rpx;
			text {
				font-size: 28rpx;
				font-weight: 500;
				color: #FF482A;
			}
		}
		.bold{
			color: #666666 !important;
		}
	}
</style>