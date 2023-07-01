<template>
	<view class="body">
		<view class="header pd30">
			<u-search @custom='custom' class="input" showAction placeholder="姓名/昵称/手机号" v-model="seachValue" :showAction='true' :height='28'>
			</u-search>
			<view class="dis_f select jscb posir">
				<p class="dis_f alitmc jscc"><text @click="all">全部</text><u-icon @click='isShow = !isShow'
						name="arrow-down" color="#000" size='14'></u-icon></p>
				<p @click='tofalse'>未签到</p>
				<p @click='totrue'>已签到</p>

				<view class="posia pos bor_r" v-show="isShow">
					<p @click='toajax(v.city_id)' v-for="(v,index) in venue" :key="index">{{v.venue_name}}({{v.number}}人)</p>
				</view>
			</view>
		</view>

		<view class="Statistiche dis_f flex_c bor_r">
			<p class="border">总报名人数: {{all_number}}</p>
			<view class="bot dis_f jscb">
				<p class="dis_f alitmc"><label class="tr"></label><text>已签到: {{status_1}}</text></p>
				<p class="dis_f alitmc"><label class="fa"></label><text>未签到: {{status_0}}</text></p>
			</view>
		</view>


		<view class="contnet bor_r" v-for="(item,index) in travellers" :key="index">
			<view class="dis_f alitmc top">
				<label>{{item.username}}</label>
				<image src="@/static/image/mine/phoen.jpg"></image>
				<p class="phone">{{item.phone}}</p>
			</view>
			<p class="dis_f jscb center">
				<text>昵称： {{item.nickname}}</text>
				<text>订单： {{item.order_no}}</text>
			</p>
			<p class="dis_f jscb bottom">
				<view class="dis_f alitmc" v-if="item.sign_status == false">
					<label class="fa"></label><text class="ml20">未签到</text>
				</view>
				<view class="dis_f alitmc" v-if="item.sign_status == true">
					<label class="tr"></label><text class="ml20">已签到</text>
				</view>
				<text class="yellow" @click="runsv(item)" v-if="item.state == 0">设为已签到</text>
				<text class="green" v-if="item.state == 1">已签到</text>
			</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachValue: '',
				isShow: false,
				arrlist: [],
				list: [],
				list1: [],
				id:'',
				venue:[],
				status_0:0,
				status_1:0,
				all_number:0,
				status:'',
				city_id:'',
				search:'',
				travellers:[]
			}
		},
		onLoad(option) {
			this.id = option.id
			this.arrlist = this.list
			this.Numbers()
			this.getlist()
		},
		methods: {
			async getlist(){
				const params = {
					trip_team_id:this.id,
					status:this.status,
					city_id:this.city_id,
					search:this.search
				}
				const res = await this.$http('/trip/akela/sign/list',params)
				this.venue = res.data.data.venue
				this.travellers = res.data.data.travellers
				this.status_0 = res.data.data.status_0
				this.status_1 = res.data.data.status_1
				this.all_number = res.data.data.all_number
				this.search = ''
			},
			toajax(v) {
				this.status = ''
				this.city_id = v
				this.search = '';
				this.getlist()
				this.isShow = !this.isShow
			},
			Numbers() {
				let arr = [];
				let arr1 = [];
				this.list.forEach((item, index) => {
					if (item.state == 1) {
						arr.push(item)
					}
					if (item.state == 0) {
						arr1.push(item)
					}
				})
				this.inpro = arr.length
				this.outpro = arr1.length
			},
			all() {
				this.arrlist = this.list
			},
			tofalse() {
				this.status = 0
				this.getlist()
			},
			totrue() {
				this.status = 1
				this.getlist()
			},
			async runsv(v){
				uni.showLoading({
					title:'设置中'
				})
				const res = await this.$http('/trip/akela/sign',{
					trip_team_id:this.id,
					traveller_id:v.traveller_id
				})
				uni.hideLoading()
				v.sign_status = true
				uni.$u.toast('设置成功')
			},
			custom(e){
				this.status = ''
				this.city_id = ''
				this.search = e
				this.getlist()
			}

		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		height: auto;
		min-height: 1500rpx;
		padding-bottom: 100rpx;
		.header {
			padding-bottom: 30rpx;
			background-color: white;
			.select {
				margin: 40rpx 0 0;

				p {
					width: 33%;
					color: #666666;

					text {
						color: #222222
					}
				}
				text-align: center;
			}
			.pos {
				width: 305rpx;
				padding: 20rpx 20rpx;
				height: auto;
				background-color: white;
				top: 70rpx;
				left: 130rpx;
				text-align: left;
				p {
					font-size: 28rpx;
					color: #222222;
					width: 305rpx;
					padding: 10rpx;
				}
			}
		}
	}
	.Statistiche {
		background-color: white;
		margin: 40rpx 30rpx;
		.border {
			margin: 20rpx 0 0rpx;
			border-bottom: 1px solid #e6e6e6;
			text-align: center;
			padding-bottom: 10rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #666666;
		}
		.bot {
			margin: 10rpx 0;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			padding: 0 100rpx;
			text {
				margin-left: 10rpx;
			}
		}
	}
	.contnet {
		margin: 40rpx 30rpx;
		background-color: white;
		.top {
			border-bottom: 1px solid #e6e6e6;
			padding: 20rpx 20rpx;

			image {
				width: 19rpx;
				height: 27rpx;
				margin-left: 42rpx;
				margin-right: 16rpx;
			}

			label {
				font-size: 30rpx;
			}

			.phone {
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}
		}

		.center {
			padding: 20rpx 20rpx;

			text {
				font-size: 26rpx;
				font-weight: 500;
				color: #999999;
			}
		}

		.bottom {
			padding: 20rpx 20rpx;

			text {
				font-size: 30rpx;
				font-weight: 500;
				color: #666666;
			}

			.green {
				color: #49CAA4;
			}

			.yellow {
				color: #F2AD5A;
			}
		}
	}

	.tr {
		display: block;
		width: 20rpx;
		height: 20rpx;
		background: #49CAA4;
		border-radius: 50%;
	}

	.fa {
		display: block;
		width: 20rpx;
		height: 20rpx;
		background: #F2AD5A;
		border-radius: 50%;
	}
</style>