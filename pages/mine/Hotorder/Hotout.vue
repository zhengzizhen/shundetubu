<template>
	<view class="body pd30">
		<p class="title">勾选退出人员</p>
		<view class="content bor_r dis_f alitmc jscb">
			<text>乐乐</text>
			<label>已交报名费： 192元</label>
			<image @click="isShow = !isShow" v-show="isShow" src="@/static/image/mine/check1.png" mode=""></image>
			<image @click="isShow = !isShow" v-show="!isShow" src="@/static/image/mine/check.png" mode=""></image>
		</view>
		
		<p class="title">勾选退出人员</p>
		<view class="contents bor_r">
			<view class="dis_f alitmc jscb cus">
				<text>退出人数</text>
				<p class="green">0人</p>
			</view>
			<view class="dis_f alitmc jscb cus">
				<text>扣除应扣款</text>
				<p>按规则核算</p>
			</view>
			
			<view class="dis_f alitmc jscb cus">
				<text>活动费用退款</text>
				<p>0元</p>
			</view>
			
			<view class="dis_f alitmc jscb cus noborder">
				<text>合计退款金额</text>
				<p>0元</p>
			</view>
		</view>
		
		<p class="title">退出原因</p>
		
		<textarea placeholder="请输入您的退出原因" class="textarea" v-model="content" id="" cols="30" rows="10"></textarea>
		
		<p class="title">退款规则</p>
		<text class="label">2023年03月09日23:59前退出活动，应扣款=[报名费0%]</text>
		<text class="label">2023年03月10日23:59前逼出活动、应扣款=[报名费20%]</text>
		<text class="label">2023年03月10日23:59后退出活动，应扣款=[报名费”100%]</text>
		<text class="label">活动当天由于个人原因未能参加活动的，活动费用不遇还;</text>
		<text class="label">不接受替员参加</text>
		
		<p class="title">退款规则</p>
		<text class="label">使用后由于个人原因退出活动的，代金券不退还;</text>
		<text class="label">特殊代金券《如生日礼券等]，使用后不遗还;</text>
		
		<p class="btn">
			申请退款
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				content:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.body{
	background-color: #fafafa;
	min-height:750px;
	padding-top: 10rpx;
	height: auto;
	padding-bottom: 150rpx;
}
.title{
	margin: 20rpx 0;
	font-size: 30rpx;
	font-weight: 500;
	color: #49CAA4;
}
.content{
	width: 100%;
	background-color: white;
	height: 86rpx;
	padding:0 20rpx;
	box-sizing: border-box;
	image{
		width: 35rpx;
		height: 35rpx;
	}
	label{
		width: 400rpx;
		display: block;
	}
}
.contents{
	width: 100%;
	background-color: white;
	height: auto;
	padding:0 20rpx;
	box-sizing: border-box;
	.cus{
		height: 86rpx;
		border-bottom: 1px solid #E6E6E6;
	}
	text{
		font-size: 30rpx;
		font-weight: 500;
		color: #000000;
	}
	p{
		font-size: 30rpx;
		font-weight: 500;
		color: #000000;
	}
	.green{
		color: #49CAA4;
	}
}
.textarea{
		width: 690rpx;
		height: 180rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #999999;
		box-sizing: border-box;
		padding: 30rpx;
}
.label{
	display: block;
	font-size: 22rpx;
	font-weight: 500;
	color: #999999;
}
.btn{
	margin-top: 80rpx;
	width: 690rpx;
	height: 78rpx;
	line-height: 78rpx;
	text-align: center;
	color: white;
	background: #49CAA4;
	border-radius: 39rpx;
}
</style>
