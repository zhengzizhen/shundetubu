<template>
	<view class="body">
		<view class="content">
			<text>请选择需要替换的报名人员</text>
			<!-- <text>如果报名人信息填写错误，也可用替员功能更正</text> -->
			<text class="jilo">替员功能说明:</text>
			<text>1、替员暂时只支持一天来回的的活动</text>
			<text>2、活动出发前一天晚上10点后不可替员</text>
			<text>3、会员日活动不提供替员功能</text>
			<text class="red">4、替员只能操作1次，不可撤销，请谨慎操作</text>
		</view>


		<!-- <view class="bottom">
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
		</view> -->
		<view class="contents bor_r">
			<view class="dis_f jscb alitmc just pd30" v-for="(item,index) in traveller" :key="index" @click="check(item,index)">
				<view class="dis_f flex_c">
					<p>{{item.username}}</p>
					<text>{{item.idcard}}</text>
				</view>
				<image v-if="curry == index" src="@/static/image/mine/success.jpg" mode=""></image>
			</view>
		</view>

		<p class="sios pd30">选择替员人员</p>
		<view class="dis_f jscb user alitmc" @click="checkty(item,index)" v-for="(item,index) in list" :key="index">
			<p>{{item.username}}</p>
			<image @click="checkty(item,index)" v-if="tycurry == index" src="@/static/image/mine/check.png" mode=""></image>
		</view>
		<p class="btn" @click='submit'>
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
				},
				traveller: [],
				isShow: false,
				list: [{
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: true
				}, {
					date: '04月23日周日',
					address: '集合：广州地铁客户村B出口',
					state: false
				}],
				id:'',
				curry:0,
				tycurry:0,
				changeid:'',//替员
				loonid:''//被替员
			}
		},
		onLoad(option) {
			this.id = option.id
			this.gettraveller()
			this.getlist()
		},
		methods: {
			async gettraveller(){
				const res = await this.$http('/trip/traveller/list')
				this.list = res.data.data
				this.changeid = res.data.data[0].id
			},
			async getlist() {
				const res = await this.$http('/trip/order/detail', {
					order_no: this.id
				})
				this.traveller = res.data.data.traveller
				this.loonid = res.data.data.traveller[0].id
			},
			check(e,index) {
				this.curry = index
				this.loonid = e.id
			},
			checkty(item,index){
				this.tycurry = index
				this.changeid = item.id
			},
			async submit(){
				uni.showLoading()
				const res = await this.$http('/trip/order/replace',{
					order_no:this.id,
					traveller_id:this.loonid,
					replace_traveller_id:this.changeid
				})
				uni.hideLoading()
				uni.$u.toast('替员成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
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

				label {
					display: block;
					width: 160rpx;
					font-size: 28rpx;
				}

				input {
					font-size: 28rpx;
				}
			}
		}
	}

	.btn {
		margin: 500rpx auto 0;
		width: 690rpx;
		height: 78rpx;
		line-height: 78rpx;
		text-align: center;
		background: #49CAA4;
		border-radius: 39rpx;
		color: white;
	}

	.sios {
		margin: 30rpx 0;
		font-size: 30rpx;
		font-weight: 500;
		color: #49CAA4;
	}
	
	.user {
		margin: 0 30rpx;
		height: 86rpx;
		line-height: 86rpx;
		padding: 0 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
	
		image {
			width: 35rpx;
			height: 35rpx;
		}
	}
	.contents {
		margin: 0 30rpx;
		background-color: white;
		height: auto;
		padding: 10rpx 30rpx;
		.just:last-child {
			border: none;
		}
	
		.just {
			margin: 20rpx 0 0rpx;
			border-bottom: 1px solid #f4f4f4;
			padding-bottom: 20rpx;
		}
	
		p {
			font-size: 28rpx;
			font-weight: 500;
			color: #000000;
		}
	
		text {
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}
	
		image {
			width: 32rpx;
			height: 24rpx;
		}
	}
</style>