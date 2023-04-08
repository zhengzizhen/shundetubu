<template>
	<view>
		<view class="cont">


			<view class="input dis_f">
				<label class="dis_f">姓名</label>
				<input type="text" placeholder="请输入您的姓名" v-model="user.name">
			</view>

			<view class="input dis_f">
				<label class="dis_f">银行卡号</label>
				<input type="number" maxlength="19" placeholder="请输入银行卡号" v-model="user.BankID">
			</view>

			<view class="input dis_f" @click="isShow = true">
				<label class="dis_f">银行类型</label>
				<!-- <input type="number" maxlength="19" placeholder="请输入银行卡号" v-model="user.BankID"> -->
				<input type="text" placeholder="请选择银行卡类型" disabled >
				<u-icon name="arrow-down" size='12'></u-icon>
			</view>



			<view class="input dis_f">
				<label class="dis_f">开户支行</label>
				<input type="text" maxlength="11" placeholder="请输入开户支行" v-model="user.Bankaddress">
			</view>

		</view>

		<button class="btn" @click="submit">提交</button>
		<u-picker  @cancel = "close()" @confirm="confirm" @change="changeHandler" :show="isShow" :columns="columns"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: '',
					BankID: '',
					Bankaddress: ''
				},
				times: 60,
				timer: null,
				isShow: false,
				columns: [
					['中国工商银行', '中国邮政银行', '中国招商银行']
				],
			}
		},
		methods: {
			submit() {
				console.log('验证通过');
			},
			changeHandler(e) {
				// const {
				// 	columnIndex,
				// 	value,
				// 	values, // values为当前变化列的数组内容
				// 	index,
				// 	// 微信小程序无法将picker实例传出来，只能通过ref操作
				// 	picker = this.$refs.uPicker
				// } = e
				// // 当第一列值发生变化时，变化第二列(后一列)对应的选项
				// if (columnIndex === 0) {
				// 	// picker为选择器this实例，变化第二列对应的选项
				// 	picker.setColumnValues(1, this.columnData[index])
				// }
			},
			confirm(e) {
				console.log('confirm', e)
				this.isShow = false
			},
			close(){
				this.isShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cont {
		margin-top: 121rpx;
		padding: 0 30rpx;

		.input {
			margin-top: 20rpx;
			border-bottom: 1px solid #E6E6E6;
			padding-bottom: 20rpx;

			label {
				width: 190rpx;
				font-size: 32rpx;
			}

			input {
				width: 400rpx;
			}
		}

		.send {
			text-align: right;
			width: 220rpx;
			color: #49CAA4;
		}

		.ms {
			text-align: right;
			font-size: 28rpx;
			width: 220rpx;
		}
	}

	.btn {
		width: 690rpx;
		height: 88rpx;
		background: #49CAA4;
		border-radius: 44rpx;
		color: white;
		font-size: 32rpx;
		margin-top: 1000rpx;
	}
</style>