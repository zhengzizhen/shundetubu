<template>
	<view class="pd30">
		<view class="ct_nav">
			<text>我的余额</text>
			<p>￥{{money}}</p>
		</view>
		<view class="dis_f jscb ct_header">
			<p>提现金额</p>
			<p class="red" @click='all'>全部提现</p>
		</view>
		<view class="ct_background dis_f">
			<label>￥</label><input type="number" maxlength="8" placeholder="请输入提现金额" v-model="tmoney">
		</view>
		<p class="rsed">提示：分销满100元可提现</p>
		<p class="grsed">选择提现方式</p>

		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="dis_f jscb ct_radio" v-for="(item, index) in items" :key="item.value">
					<view class="dis_f io">
						<image :src="item.image" mode=""></image>
						<text>{{item.name}}</text>
					</view>
					<view>
						<radio color='#FF4040' style="transform:scale(0.8)" :value="item.value"
							:checked="index === current" />
					</view>
				</label>
			</radio-group>
		</view>

		<button class="btn" @click="cashout()"><text>提交</text></button>
		<u-popup :round="10" :show="isShow" mode="center" @close="close" @open="open">
			<view class="ct_pop dis_f flex_c">
				<image @click="close()" class="close" src="../../../static/image/retail/close.png" mode=""></image>
				<image class="success" src="../../../static/image/retail/success.jpg" mode=""></image>
				<text>提现成功！</text>
			</view>
		</u-popup>
		
		
		<u-popup :round="10" :show="isShow1" mode="bottom" @close="close1" @open="open1">
			<view class="bank pd30">
				<p class="banktit">选择到账银行卡</p>
				
				<p class="bankcontent dis_f alitmc">
					<image src="@/static/trends/user.png" mode=""></image>
					<text @click="tobindUser">工商银行  储蓄卡  （2342）</text>
				</p>
				
				<p class="bankcontent dis_f alitmc" >
					<image  mode=""></image>
					<text @click='toBank'>使用新卡提现</text>
				</p>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: 299.99,
				tmoney: null,
				isShow:false,
				isShow1:false,
				items: [{
						value: 'ZFB',
						name: '提现到支付宝',
						checked: 'true',
						image: '../../../static/image/retail/zfb.jpg'
					},
					{
						value: 'WX',
						name: '提现到微信',
						image: '../../../static/image/retail/wx.jpg'
					},
					{
						value: 'Bank',
						name: '选择银行卡',
						image: '../../../static/image/retail/yhk.jpg'
					},
				],
				current: 0
			};
		},
		methods: {
			all() {
				this.tmoney = this.money
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
				if(evt.detail.value == 'Bank'){
					this.isShow1 = true
				}
				
			},
			cashout() {
				this.isShow = !this.isShow
			},
			open(){
				
			},
			close() {
				this.isShow = !this.isShow
			},
			open1(){
				
			},
			close1() {
				this.isShow1 = !this.isShow1
			},
			toBank(){
				this.isShow1 = !this.isShow1
				uni.navigateTo({
					url:'/pages/mine/Setting/addBank'
				})
			},
			tobindUser(){
				uni.navigateTo({
					url:'/pages/mine/Setting/bindUser'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ct_nav {
		box-sizing: border-box;
		margin-top: 20rpx;
		padding: 90rpx 40rpx;
		height: 286rpx;
		background: linear-gradient(0deg, #49CAA4 0%, #4EB6C9 100%);
		box-shadow: 0rpx 10rpx 7rpx 0rpx rgba(73, 202, 164, 0.08);
		border-radius: 20rpx;
		color: white;

		text {
			font-size: 22rpx;
		}

		p {
			font-size: 60rpx;
			font-weight: bold;
		}
	}

	.ct_header {
		margin: 60rpx 0 20rpx;
		align-items: center;

		.red {
			color: #FF4040;
			font-size: 22rpx;
		}

	}

	.ct_background {
		height: 88rpx;
		background: #F7F7F7;
		align-items: center;

		label {
			margin-left: 30rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #222222;
		}

		input {
			font-size: 36rpx;
			font-weight: bold;
			color: #222222;
		}
	}

	.rsed {
		margin: 10rpx 0 30rpx;
		font-size: 22rpx;
		font-weight: 500;
		color: #FF4040;
	}
	.grsed{
		margin: 10rpx 0 30rpx;
		font-size: 28rpx;
		font-weight: 500;
	}

	.ct_radio {
		margin: 20rpx 0;
		align-items: center;
		height: 50rpx;
		line-height: 50rpx;

		.io {
			align-items: center;

			text {
				font-size: 28rpx;
			}
		}

		image {
			display: inline-block;
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
	}

	.btn {
		width: 690rpx;
		height: 88rpx;
		background: #49CAA4;
		font-size: 32rpx;
		border-radius: 44rpx;
		color: white;
		margin-top: 458rpx;
	}
	.ct_pop{
		box-sizing: border-box;
		width: 570rpx;
		height: 420rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 20rpx 30rpx;
		justify-content: center;
		align-items: center;
		position: relative;
		.success{
			width: 129rpx;
			height: 129rpx;
			margin-bottom: 40rpx;
		}
		.close{
			position: absolute;
			right: 0;
			top: -30rpx;
			width: 20rpx;
			height: 20rpx;
		}
	}
	.bank{
		height: 360rpx;
		.banktit{
			margin: 40rpx auto;
			text-align: center;
			font-size: 34rpx;
			font-weight: 500;
			color: #222222;
		}
		image{
			width: 44rpx;
			height: 44rpx;
		}
		.bankcontent{
			margin-top: 20rpx;
			padding-top: 20rpx;
			border-top: 1px solid #e6e6e6;
			text{
				margin-left: 20rpx;
			}
		}
	}
</style>