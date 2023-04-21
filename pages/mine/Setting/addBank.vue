<template>
	<view class="pd30 ak_body">
		<p class="title">添加银行卡</p>
		<p class="label">为防范风险、保护当事人合法权益，需要添加银行卡进行实名认证</p>

		<view class="ak_content">
			<label>持卡人姓名</label>
			<input type="text" placeholder="请输入持卡人姓名" v-model="user.name">

			<label>银行卡号</label>
			<input type="text" maxlength="18" placeholder="请输入银行卡号" v-model="user.BankID">

			<label>银行类型</label>
			<input type="text" maxlength="18" placeholder="请选择银行类型" v-model="user.Bank" @click="isShow = true">

			<label>开户支行</label>
			<input type="text" placeholder="请输入开户行" v-model="user.Bankaddress">
		</view>

		<p class="btn">确认</p>
		<u-picker @cancel="close()" @confirm="confirm" :show="isShow"
			:columns="columns"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: '',
					Bankaddress: '',
					BankID: '',
					Bank: ''
				},
				isShow: false,
				columns: [
					['中国工商银行', '中国邮政银行', '中国招商银行']
				],
			}
		},
		methods: {
			confirm(e) {
				this.isShow = false
				this.user.Bank = e.value[0]
				console.log(e.value);
			},
			close() {
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ak_body {
		padding-top: 100rpx;
		margin-top: 100rpx;
		.title {
			font-size: 48rpx;
			font-weight: bold;
			color: #222222;
		}

		.label {
			display: block;
			font-size: 26rpx;
			font-weight: 500;
			color: #999999;
			margin: 10rpx 0 60rpx;
		}
	}

	.ak_content {
		margin-top: 100rpx;

		label {
			display: block;
			margin-top: 30rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
		}

		input {
			margin-top: 30rpx;
			font-size: 28rpx;
			font-weight: 500;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #e6e6e6;
		}
	}

	.btn {
		width: 694rpx;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 32rpx;
		background: #49CAA4;
		border-radius: 44rpx;
		color: white;
		text-align: center;
		margin-top: 350rpx;
	}
</style>