<template>
	<view class="pd30 body">
		<view class="input dis_f">
			<label>姓名</label>
			<input type="text" placeholder="请输入姓名" v-model="user.name">
		</view>

		<view class="input dis_f">
			<label>手机号</label>
			<input type="text" placeholder="请输入手机号" v-model="user.phone">
		</view>

		<view class="input dis_f">
			<label>身份证号</label>
			<input type="text" placeholder="请输入身份证号" v-model="user.ID">
		</view>

		<view class="input dis_f">
			<label>住址</label>
			<input type="text" placeholder="请输入住址" v-model="user.address">
		</view>

		<view class="input dis_f">
			<label>城市</label>
			<input type="text" placeholder="请输入所在城市" v-model="user.city">
		</view>

		<view class="input dis_f">
			<label>签名</label>
			<input type="text" placeholder="请输入签名" v-model="user.tyrs">
		</view>

		<view class="input dis_f">
			<label>ID</label>
			<p>{{ID}}</p>
		</view>

		<p class="btn">立即核对信息</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: '',
					phone: '',
					id: '',
					address: '',
					city: '',
					tyrs: ''
				},
				ID:123456
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 50rpx;
	}

	.input {
		padding: 20rpx 0;
		border-bottom: 1px solid #E6E6E6;

		label {
			width: 160rpx;
		}

		input {
			padding-left: 40rpx;
		}

		p {
			padding-left: 40rpx;
		}
	}

	.btn {
		margin-top: 700rpx;
		font-size: 30rpx;
		width: 690rpx;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		color: white;
		background: #49CAA4;
		border-radius: 44rpx;
	}
</style>