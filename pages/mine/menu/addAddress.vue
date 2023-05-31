<template>
	<view>
		<view class="nav pd30 dis_f alitmc jscb">
			<view class="dis_f">
				<u-icon @click="back" name="arrow-left" color='#000' size='18'></u-icon>
				<span>编辑收货地址</span>
			</view>
			<p>删除</p>
		</view>

		<view class="dis_f content pd30 alitmc">
			<label>收货人</label>
			<input type="text" v-model="address.name">
		</view>

		<view class="dis_f content pd30 alitmc">
			<label>手机号码</label>
			<input maxlength="11" type="number" v-model="address.phone">
		</view>

		<view class="dis_f content pd30 alitmc">
			<label>所在地区</label>
			<input type="text" v-model="address.area">
			<!-- <image @click="getLocaltion" src="@/static/image/mine/address.png" mode=""></image> -->
		</view>

		<view class="dis_f content pd30">
			<label>详细地址</label>
			<textarea class="textarea" v-model="address.address" name="" id="" cols="30" rows="10"></textarea>
		</view>

		<view class="pd30 dis_f alitmc jscb">
			<p>设为默认收货地址</p>
			<u-switch activeColor="#49CAA4" v-model="address.is_default" @change="change"></u-switch>
		</view>

		<view class="btn dis_f alitmc jscc">
			<p @click='toadd'>{{btn}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTrue: null,
				address: {
					name: '',
					phone: '',
					area: '',
					address: '',
					is_default: ''
				},
				btn:'添加地址'
			}
		},
		onLoad(option) {
			if (option.v) {
				console.log(option.v);
				this.address = JSON.parse(option.v)
				if(this.address.is_default == 1){
					this.address.is_default = true
				}else{
					this.address.is_default = false
				}
				this.btn = '保存地址'
				return false
			}
			console.log(1);
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			change(e) {
				console.log(e);
			},
			getLocaltion() {
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
			},
			async toadd() {
				if (this.address.name == '') {
					uni.$u.toast('收货人不能为空')
					return false
				} else if (this.address.phone == '') {
					uni.$u.toast('手机号码不能为空')
					return false
				} else if (this.address.area == '') {
					uni.$u.toast('收货地区不能为空')
					return false
				} else if (this.address.address == '') {
					uni.$u.toast('详细地址不能为空')
					return false
				}
				const params = this.address
				if (this.address.is_default == true) {
					params.is_default == 1
				} else {
					params.is_default == 0
				}
				const rend = this.address
				if (this.address.is_default == true) {
					rend.is_default == 1
				} else{
					rend.is_default == 0
				}
				rend.address_id = this.address.id
				if(this.btn == '添加地址'){
					uni.showLoading()
					const res = await this.$http('/shop/user/address/add', params)
					uni.hideLoading()
					uni.$u.toast('添加成功')
					this.$jump('./address','redirect')
					return false
				}else if(this.btn == '保存地址'){
					uni.showLoading()
					const res = await this.$http('/shop/user/address/update', rend)
					uni.hideLoading()
					uni.$u.toast('修改成功')
					this.$jump('./address','redirect')
					return false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		width: 100%;
		height: 88rpx;
		margin-top: 88rpx;
		background-color: white;
		box-sizing: border-box;

		span {
			font-size: 32rpx;
			font-weight: bold;
			color: #222222;
			margin-left: 20rpx;
		}

		p {
			font-size: 28rpx;
			font-weight: 500;
			color: #49CAA4;
		}
	}

	.content {
		margin: 30rpx auto;
		font-size: 30rpx;

		label {
			width: 140rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
		}

		input {
			margin-left: 30rpx;
			box-sizing: border-box;
			padding-left: 30rpx;
			font-size: 28rpx;
			width: 500rpx;
			height: 99rpx;
			background: #F6F6F6;
			border-radius: 20rpx;
			color: #222;
		}

		image {
			width: 27rpx;
			height: 36rpx;
			margin-left: -50rpx;
		}

		.textarea {
			margin-left: 30rpx;
			box-sizing: border-box;
			padding: 20rpx;
			width: 500rpx;
			height: 150rpx;
			background: #F6F6F6;
			border-radius: 20rpx;
			font-size: 28rpx;
			color: #222;
		}
	}

	.btn {
		margin: 600rpx auto 0;
		width: 690rpx;
		height: 84rpx;
		background: #49CAA4;
		color: white;
		text-align: center;
		border-radius: 42rpx;

		p {
			font-size: 32rpx;
			margin-left: 10rpx;
		}
	}
</style>