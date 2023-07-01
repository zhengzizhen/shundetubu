<template>
	<view class="body pd30">
		<p class="title">勾选退出人员</p>
		<view @click="checkout(item,index)" class="content bor_r dis_f alitmc jscb" v-for="(item,index) in traveller"
			:key="index">
			<text>{{item.username}}</text>
			<label>已交报名费： {{item.price}}元</label>
			<image v-if="item.state"  src="@/static/image/mine/check.png" mode=""></image>
			<image v-else src="@/static/image/mine/check1.png" mode=""></image>
		</view>

		<p class="title">勾选退出人员</p>
		<view class="contents bor_r">
			<view class="dis_f alitmc jscb cus">
				<text>退出人数</text>
				<p class="green">{{sum}}人</p>
			</view>
			<view class="dis_f alitmc jscb cus">
				<text>扣除应扣款</text>
				<p>按规则核算</p>
			</view>

			<view class="dis_f alitmc jscb cus">
				<text>活动费用退款</text>
				<p>{{money.refund_trip_price}}元</p>
			</view>

			<view class="dis_f alitmc jscb cus noborder">
				<text>合计退款金额</text>
				<p>{{money.refund_all_price}}元</p>
			</view>
		</view>

		<p class="title">退出原因</p>

		<textarea placeholder="请输入您的退出原因" class="textarea" v-model="content" id="" cols="30" rows="10"></textarea>

		<p class="title">退款规则</p>
		<text class="label">{{day2.time}}前退出活动，应扣款=[报名费{{day2.set}}%]</text>
		<text class="label">{{day1.time}}前逼出活动、应扣款=[报名费{{day1.set}}%]</text>
		<text class="label">{{today.time}}后退出活动，应扣款=[报名费{{today.set}}%]</text>
		<text class="label">活动当天由于个人原因未能参加活动的，活动费用不遇还;</text>
		<text class="label">不接受替员参加</text>

		<p class="title">退款规则</p>
		<text class="label">使用后由于个人原因退出活动的，代金券不退还;</text>
		<text class="label">特殊代金券《如生日礼券等》，使用后不退还;</text>

		<p class="btn" @click='submit'>
			申请退款
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				content: '',
				traveller: [],
				sum: 0,
				usersid: [],
				id:'',
				money:{},
				day2:{},
				day1:{},
				today:{},
				params:{}
			}
		},
		onLoad(option) {
			this.getlist(option.id)
			this.id = option.id
		},
		methods: {
			async getlist(v) {
				const res = await this.$http('/trip/order/detail', {
					order_no: v
				})
				this.traveller = res.data.data.traveller
				for (let i = 0; i < this.traveller.length; i++) {
					this.traveller[i].state = false
				}
				this.userid = this.traveller[0].id
				this.checkout(this.traveller[0],0)
			},
			async checkout(v, index) {
				if (v.state == true) {
					this.sum -= 1
					for (let i = 0; i < this.usersid.length; i++) {
						if (this.usersid[i] = v.id) {
							this.usersid.splice(i, 1)
						}
					}
				} else {
					this.sum += 1
					this.usersid = this.usersid.concat(v.id)
				}
				v.state = !v.state
				this.$forceUpdate()
				this.params = {
					traveller_ids:'',
					order_no:this.id
				}
				for (let j = 0; j < this.usersid.length; j++) {
					if(j==0){
						this.params.traveller_ids = this.usersid[j]
					}else{
						this.params.traveller_ids = this.params.traveller_ids +','+ this.usersid[j]
					}
				}
				uni.showLoading()
				const res = await this.$http('/trip/order/refund/predict',this.params)
				uni.hideLoading()
				this.money = res.data.data
				this.day1 = res.data.data.setting.day1
				this.day2 = res.data.data.setting.day2
				this.today = res.data.data.setting.today
			},
			async submit(){
				uni.showLoading({
					title:'申请退款中'
				})
				const res = await this.$http('/trip/order/refund',{
					order_no:this.id,
					traveller_ids:this.params.traveller_ids,
					content:this.content
				})
				uni.hideLoading()
				uni.$u.toast('申请退款成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 750px;
		padding-top: 10rpx;
		height: auto;
		padding-bottom: 150rpx;
	}

	.title {
		margin: 20rpx 0;
		font-size: 30rpx;
		font-weight: 500;
		color: #49CAA4;
	}

	.content {
		width: 100%;
		background-color: white;
		height: 86rpx;
		padding: 0 20rpx;
		box-sizing: border-box;

		image {
			width: 35rpx;
			height: 35rpx;
		}

		label {
			width: 400rpx;
			display: block;
		}

		text {
			width: 200rpx;
		}
	}

	.contents {
		width: 100%;
		background-color: white;
		height: auto;
		padding: 0 20rpx;
		box-sizing: border-box;

		.cus {
			height: 86rpx;
			border-bottom: 1px solid #E6E6E6;
		}

		text {
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}

		p {
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}

		.green {
			color: #49CAA4;
		}
	}

	.textarea {
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

	.label {
		display: block;
		font-size: 22rpx;
		font-weight: 500;
		color: #999999;
	}

	.btn {
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