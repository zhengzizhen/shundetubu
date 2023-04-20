<template>
	<view class="body">
		<view class="content">
			<text>请选择需要替换的报名人员</text>
			<text>如果报名人信息填写错误，也可用替员功能更正</text>
			<text class="jilo">替员功能说明:</text>
			<text>1、替员暂时只支持一天来回的的活动</text>
			<text>2、活动出发前一天晚上10点后不可替员</text>
			<text>3、会员日活动不提供替员功能</text>
			<text class="red">4、替员只能操作1次，不可撤销，请谨慎操作</text>
		</view>


		<view class="bottom">
			<view class="inpt dis_f">
				<label>姓名：</label>
				<input v-model="user.name" type="text" maxlength="6" placeholder="请输入姓名">
			</view>
			<view class="inpt dis_f">
				<label>证件号码：</label>
				<input v-model="user.id" type="text" maxlength="18" placeholder="请输入证件号码">
			</view>
			<view class="inpt dis_f">
				<label>电话号码：</label>
				<input v-model="user.phone" type="text" maxlength="11" placeholder="请输入电话号码">
			</view>
		</view>

		<p class="btn">
			替员
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: "来了",
					id: '596594948445544888',
					phone: '175648844884'
				}
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.body {
		background-color: #FAFAFA;
		min-height: 1500rpx;
		height: auto;
		padding-top: 20rpx;

		.content {
			box-sizing: border-box;
			margin: 0 auto;
			padding: 30rpx;
			font-size: 26rpx;
			width: 690rpx;
			height: 334rpx;
			background: #FFFFFF;
			border-radius: 20rpx;

			.red {
				color: #FF5353;
			}

		}

		text {
			display: block;
		}

		.jilo {
			margin-top: 30rpx;
		}

		.bottom {
			padding: 30rpx;
			box-sizing: border-box;
			margin: 30rpx auto;
			width: 690rpx;
			height: 280rpx;
			background: #FFFFFF;
			border-radius: 20rpx;

			.inpt {
				height: 89rpx;
				color: #000;
				font-size: 30rpx;
			}
		}
	}
	.btn{
		margin: 700rpx auto 0;
		width: 690rpx;
		height: 78rpx;
		line-height: 78rpx;
		text-align: center;
		background: #49CAA4;
		border-radius: 39rpx;
		color: white;
	}
</style>