<template>
	<view class="nav dis_f">
		<view class="left">
			 <slot name="left"></slot>
		</view>
		<view class="center">
			<p>{{title}}</p>
		</view>
		 <view class="right">
		 	<slot name="right"></slot>
		 </view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.nav{
	width: 100%;
	height: 88rpx;
	background-color: white;
	justify-content: space-between;
	padding: 0 30rpx;
	align-items: center;
	line-height: 88rpx;
	box-sizing: border-box;
}
.left{
	text-align: left;
	display: flex;
	align-items: center;
}
.center{
	text-align: center;
}
.right{
	display: flex;
	justify-content: right;
	align-items: center;
	line-height: 88rpx;
	image{
		width: 30rpx;
		height: 30rpx;
	}
}
</style>
