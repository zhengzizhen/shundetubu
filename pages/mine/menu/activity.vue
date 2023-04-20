<template>
	<view class="pd30">
		<view class="cs_header dis_f">
			<text>路线评价</text>
		</view>
		<view class="content posir">
			<textarea maxlength="200" placeholder="说说你的感受..." class="textarea" v-model="content" cols="30" rows="10"></textarea>
			<p class="posi posia">{{content.length}}/200</p>
		</view>
		
		<view class="cs_header dis_f">
			<text>领队评价</text>
		</view>
		<view class="content posir">
			<textarea maxlength="200" placeholder="说说你的感受..." class="textarea" v-model="content1" cols="30" rows="10"></textarea>
			<p class="posi posia">{{content.length}}/200</p>
		</view>
		
		<view class="cs_header dis_f">
			<text>总体评价</text>
			<u-rate activeColor='#F7B36B' inactiveColor='#CCCCCC' :count="count1" v-model="value1"></u-rate>
		</view>
		
		<view class="cs_header dis_f">
			<text>领队评价</text>
			<u-rate activeColor='#F7B36B' inactiveColor='#CCCCCC' :count="count2" v-model="value2"></u-rate>
		</view>
		
		
		<view class="bot dis_f alitmc">
			<image @click="isShow = !isShow" v-show="!isShow" src="@/static/login/wxz.png" mode=""></image>
			<image @click="isShow = !isShow" v-show="isShow" src="@/static/login/xz.png" mode=""></image>
			<p>匿名评论 （不公开头像和昵称）</p>
		</view>
		
		<p class="btn mat">
			提交
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				count1: 5,//物流服务
				value1: 2,//物流服务
				count2: 5,//商家服务
				value2: 2,//商家服务
				content: '',
				content1: '',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.cs_header {
		margin: 30rpx 0;

		text {
			margin-right: 20rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #000000;
		}
	}

	.content {
		.textarea {
			box-sizing: border-box;
			width: 100%;
			height: 240rpx;
			font-size: 22rpx;
			background-color: #F6F6F6;
			padding: 30rpx 20rpx;
			font-family: 'PF';
		}

		p {
			bottom: 20rpx;
			right: 20rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #999999;
		}
	}
	.upload{
		margin: 30rpx 0;
	}
	.bot{
		margin-top: 40rpx;
		image{
			width: 33rpx;
			height: 33rpx;
		}
		p{
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			margin-left: 20rpx;
		}
	}
	.btn{
		margin-top: 470rpx;
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #49CAA4;
		font-size: 30rpx;
		border-radius: 40rpx;
		color: white;
	}
</style>