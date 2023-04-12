<template>
	<view class="al_body pd30">
		<view class="al_tost">
			<view class="dis_f jscb al_title">
				<p>温馨提示</p>
			</view>
			<text class="tost">当前选择：3月18日全国出发，单价2812元/人 </text>
			<label class="label">请填写真实信息，否则报名及保险将无效</label>
		</view>

		<view class="al_tost">
			<view class="dis_f jscb al_title">
				<p>报名信息</p>
				<p class="to30"><label>小计：</label>0元</p>
			</view>
			<text class="addUser" @click="toAdduser()">+添加报名人</text>
		</view>

		<view class="al_tost pb20">
			<view class="dis_f jscb al_title">
				<p>优惠抵扣</p>
				<p class="to30"><label>小计：</label>0元</p>
			</view>
			<view class="dis_f jscb noborder">
				<p class="cblist">代金券</p>
				<p class="red dis_f">
					<text>你有0张可用</text>
					<u-icon name="arrow-right" color='#FF4040' size='10'></u-icon>
				</p>
			</view>
		</view>

		<view class="al_tost pb20">
			<view class="dis_f jscb al_title">
				<p>支付方式</p>
			</view>
			<u-radio-group v-model="radiovalue1" borderBottom iconPlacement="right" placement="column"
				@change="groupChange">
				<u-radio activeColor='#49CAA4' :customStyle="{marginBottom: '8px'}" v-for="(item, index) in radiolist1"
					:key="index" :label="item.name" :name="item.name">
				</u-radio>
			</u-radio-group>
		</view>

		<view class="ay_check dis_f">
			<image v-show="isShow" src="@/static/login/xz.png" mode="" @click="isShow = !isShow"></image>
			<image v-show="!isShow" src="@/static/login/wxz.png" mode="" @click="isShow = !isShow"></image>
			<p> 我已阅读并同意
				<label>《旅游服务协议》</label>
				<label>《费用说明及报名须知》</label>
				<label>《中国公民国内旅游文明行为公约》</label>
				<label>《旅游同业诚信公约》</label>
			</p>
		</view>

		<view class="flexi">
			<view class="dis_f alitmc jscb m20">
				<p>总费用： 0元</p>
				<view class="btns">支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				radiolist1: [{
						name: '微信支付',
						disabled: false
					},
					{
						name: '支付宝支付',
						disabled: false
					},
					{
						name: '银行卡支付',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue1: '微信支付',
			};
		},
		methods: {
			groupChange() {

			},
			toAdduser() {
				this.$jump('./Adduser')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.al_body {
		background-color: #FAFAFA;
		padding-top: 50rpx;
		padding-bottom: 300rpx;
	}

	.al_tost {
		box-sizing: border-box;
		height: auto;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: 20rpx 0;
		padding: 20rpx 20rpx 40rpx;

		p {
			font-size: 34rpx;
			font-weight: 500;
			color: #49CAA4;
		}

		.al_title {
			box-sizing: border-box;
			padding-bottom: 10rpx;
			border-bottom: 1px solid #e6e6e6;
			margin-bottom: 20rpx;

		}

		.tost {
			display: block;
			font-size: 26rpx;
			font-weight: 500;
			color: #999999;
		}

		.label {
			display: block;
			font-size: 26rpx;
			font-weight: 500;
			color: #FF4040;
		}

		.addUser {
			display: block;
			width: 650rpx;
			height: 86rpx;
			line-height: 86rpx;
			font-size: 30rpx;
			text-align: center;
			background: #F6F7F9;
			margin: 20rpx auto;
			border: none;
			border-radius: 20rpx;
		}

		.cblist {
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}

		.red {
			font-size: 30rpx;
			font-weight: 500;
			color: #FF4040;
		}
	}

	.to30 {
		font-size: 30rpx !important;
	}

	label {
		font-size: 30rpx;
		color: #666666;
	}

	.ay_check {
		image {
			margin-top: 4rpx;
			width: 26rpx;
			height: 26rpx;
		}

		p {
			margin-left: 20rpx;
			width: 659rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #999999;

			label {
				font-weight: 500;
				font-size: 22rpx;
				color: #49CAA4;
			}
		}
	}

	.flexi {
		position: fixed;
		bottom: 0%;
		right: 0;
		width: 100%;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);

		p {
			margin-left: 30rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}

		.btns {
			width: 230rpx;
			height: 78rpx;
			line-height: 78rpx;
			text-align: center;
			color: white;
			background: #49CAA4;
			border-radius: 39rpx;
			margin-right: 30rpx;
		}
	}
</style>