<template>
	<view class="al_body pd30">
		<view class="al_tost">
			<view class="dis_f jscb al_title">
				<p>温馨提示</p>
			</view>
			<text class="tost">当前选择：{{obj.start_day}}日全国出发，单价{{obj.price}}元/人 </text>
			<label class="label">请填写真实信息，否则报名及保险将无效</label>
		</view>

		<view class="al_tost">
			<view class="dis_f jscb al_title">
				<p>报名信息</p>
				<p class="to30"><label>小计：</label>{{parseFloat(obj.price*Applicant.length)+insure}}元</p>
			</view>
			<view class="dis_f jscb rosx" v-for="(v,i) in Applicant" :key="i">
				<p>{{v.username}}</p>
				<p>{{v.phone}}</p>
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
				<p class="red dis_f" @click='toCard'>
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
			<p>我已阅读并同意
				<label @click="toagreement(13)">《旅游服务协议》</label>
				<label @click="toagreement(14)">《费用说明及报名须知》</label>
				<label @click="toagreement(15)">《中国公民国内旅游文明行为公约》</label>
				<label @click="toagreement(16)">《旅游同业诚信公约》</label>
			</p>
		</view>

		<view class="flexi">
			<view class="dis_f alitmc jscb m20">
				<p>总费用： {{parseFloat(obj.price*Applicant.length)+insure}} 元</p>
				<view class="btns" @click="submit">支付</view>
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
				obj: {},
				Applicant: [], //报名人信息
				traveller_ids: '', //单、多个
				type: 'h5微信',
				insure: 0
			};
		},
		onLoad(option) {
			this.obj = JSON.parse(option.obj)
		},
		onShow() {
			const Applicant = uni.getStorageSync('Applicant')
			if (Applicant == '') {
				return false
			}
			if (Applicant.id != '') {
				for (let i = 0; i < this.Applicant.length; i++) {
					if (this.Applicant[i].id == Applicant.id) {
						uni.$u.toast('不能选择相同的用户')
						uni.removeStorageSync('Applicant')
						return false
					}
				}
				this.Applicant = this.Applicant.concat(Applicant)
				this.obj.case_code != '' ? this.getinsure(Applicant.id) : ''
				uni.removeStorageSync('Applicant')
				console.log(this.Applicant);
			}
		},
		methods: {
			groupChange() {

			},
			async getinsure(v) {
				uni.showLoading({
					title:'正在获取保单金额'
				})
				const res = await this.$http('/trip/insure/price', {
					traveller_id: v,
					trip_team_id: this.obj.trip_team_id
				})
				uni.hideLoading()
				this.insure = this.insure + (res.data.data.price / 100)
			},
			toAdduser() {
				this.$jump('./Applicant')
			},
			toCard() {
				this.$jump('/pages/mine/Card')
			},
			toagreement(v) {
				this.$jump('/pages/login/agreement?id=', 'params', v)
			},
			submit() {
				if (this.isShow == false) {
					uni.$u.toast('请先同意相关协议')
					return false
				}
				if (this.Applicant.length == 0) {
					uni.$u.toast('请选择报名人')
					return false
				}
				if (this.Applicant.length == 1) {
					this.traveller_ids = this.Applicant[0].id
				} else if (this.Applicant.length > 1) {
					for (let i = 0; i < this.Applicant.length; i++) {
						if (i == 0) {
							this.traveller_ids = this.Applicant[i].id
						} else {
							this.traveller_ids = this.traveller_ids + ',' + this.Applicant[i].id
						}
					}
				}
				this.type = '';
				if (this.radiovalue1 == '微信支付') {
					this.type = 'h5微信'
				} else if (this.radiovalue1 == '支付宝支付') {
					this.type = 'h5支付宝'
				} else if (this.radiovalue1 == '银行卡支付') {
					this.type = '银行卡'
				}
				const params = {
					trip_id: this.obj.trip_id,
					trip_team_id: this.obj.trip_team_id,
					traveller_ids: this.traveller_ids,
					deduction_money: this.obj.price * this.Applicant.length,
					pay_method: this.type
				}
				this.runload(params)
			},
			async runload(params) {
				uni.showLoading({
					title: '支付中'
				})
				const res = await this.$http('/trip/order/create', params)
				uni.hideLoading()
				let form = res.data.data.pay_data
				const div = document.createElement('formdiv');
				div.innerHTML = form;
				document.body.appendChild(div);
				// document.forms[0].setAttribute('target', ' self');
				document.forms[0].submit();
				div.remove()
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

	.rosx {
		margin: 20rpx 0;

		p {
			font-size: 30rpx;
			color: black;
		}
	}
</style>