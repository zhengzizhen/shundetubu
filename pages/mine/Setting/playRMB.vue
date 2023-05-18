<template>
	<view class="">
		<view class="st_body pd30">
			<view class="st_top dis_f jscb pd30 bor_r" @click="jupRMB(item.tit)" v-for="(item,index) in RMBlist"
				:key="index">
				<view class="dis_f Rimage">
					<image class="logo" :src="item.logo" mode=""></image>
					<p>{{item.tit}}</p>
				</view>
				<view>
					<text v-if="item.state == 0">去绑定</text>
					<image class="go_img" src="/static/image/mine/right.jpg" mode=""></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import store from '@/store/index.js'
	export default {
		computed: {
			...mapState(['userinfo']),
		},
		data() {
			return {
				wxState: null,
				alipayState: null,
				bankState: null,
				RMBlist: [{
						logo: '../../../static/image/retail/zfb.jpg',
						tit: '支付宝账户',
					},
					{
						logo: '../../../static/image/retail/wx.jpg',
						tit: '微信账户',
					},
					{
						logo: '../../../static/image/retail/yhk.jpg',
						tit: '银行卡账户',
					}
				],
			};
		},
		onLoad() {
			this.changgelist()
		},
		methods: {
			changgelist() {
				// 0 未绑定 1已绑定
				this.RMBlist[0].state = this.userinfo.alipay_status
				this.RMBlist[1].state = this.userinfo.wx_status
				this.RMBlist[2].state = this.userinfo.bank_status
			},
			jupRMB(v) {
				switch (v) {
					case '支付宝账户':
						this.$jump('./bindZFB')
						break;
					case '微信账户':
					
						break;
					case '银行卡账户':
						this.$jump('./bindUser')
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.st_body {
		background: #FAFAFA;
		padding-top: 30rpx;
		padding-bottom: 190rpx;
		height: 750px;
	}

	.st_top {
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid #f7f7f7;
		background-color: white;
		align-items: center;
	}

	text {
		color: #FF3939;
	}

	.logo {
		margin-right: 20rpx;
		width: 42rpx;
		height: 42rpx;
	}

	.Rimage {
		align-items: center;
	}
</style>