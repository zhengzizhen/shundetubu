<template>
	<view class="body pd30">

		<view class="" v-show="isShow">
			<view class="dis_f flex_c jscb user"  v-for="(v,index) in list" :key="index">
				<view class="dis_f jscb pp">
					<p>{{v.username}} ({{v.relation}})</p>
					<p>{{v.phone}}</p>
				</view>
				<view class="dis_f ops">
					<view class="dis_f alitmc" @click="changgeuser(v)">
						<image src="/static/image/mine/m5.jpg" mode=""></image>
						<text>编辑</text>
					</view>
					<view class="dis_f alitmc" @click="deletes(v)">
						<image src="/static/image/mine/delete.png" mode=""></image>
						<text>删除</text>
					</view>
				</view>
			</view>
			<view class="cont dis_f alitmc jscc" @click="isShow = !isShow">
				<p>+ 添加紧急联系人</p>
			</view>
		</view>
		
		<view class="bottom" v-show="!isShow">
			<view class="inpt dis_f">
				<label>姓名：</label>
				<input v-model="user.username" type="text" maxlength="6" placeholder="请输入姓名">
			</view>

			<view class="inpt dis_f">
				<label>电话号码：</label>
				<input v-model="user.phone" type="text" maxlength="11" placeholder="请输入电话号码">
			</view>

			<view class="inpt dis_f">
				<label>关系：</label>
				<input v-model="user.relation" type="text" maxlength="6" placeholder="紧急联系人与您的关系">
			</view>
			
			<view class="fixed" @click="toshow">
				<p class="btn">保存</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				user: {
					username: '',
					relation: '',
					phone: ''
				},
				list: [],
				change:false,
				id:''
			}
		},
		onLoad() {
			this.getconcat()
		},
		methods: {
			async getconcat() {
				uni.showLoading({
					title:'加载中'
				})
				const res = await this.$http('/trip/contact/list')
				this.list = res.data.data
				uni.hideLoading()
			},
			changgeuser(v) {
				this.user.username = v.username
				this.user.phone = v.phone
				this.user.relation = v.relation
				this.isShow = false
				this.change = true
				this.id = v.id
			},
			async deletes(v){
				uni.showLoading()
				const res = await this.$http('/trip/contact/delete',{
					contact_id:v.id
				})
				uni.hideLoading()
				uni.$u.toast('删除成功')
				this.getconcat()
			},
			async toshow() {
				if (this.isShow == false) {
					let regphone = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
					// var regID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
					if (this.user.id == '') {
						uni.showToast({
							title: '身份证不能为空',
							icon: 'none'
						})
						return false;
					} else if (this.user.phone == '') {
						uni.showToast({
							title: '手机号码不能为空',
							icon: 'none'
						})
						return false;
					} else if (!regphone.test(this.user.phone)) {
						uni.showToast({
							title: '请填写正确的手机号码',
							icon: 'none'
						})
						return false;
					}
					
					if(this.change == true){
						const params = this.user
						params.contact_id = this.id
						uni.showLoading()
						const res = await this.$http('/trip/contact/update', this.user)
						uni.hideLoading()
						uni.$u.toast('修改成功')
						this.change = false
						this.id = ''
						this.isShow = true
						this.user.phone = ''
						this.user.relation = ''
						this.user.username = ''
						this.getconcat()
						return false
					}
					uni.showLoading()
					const res = await this.$http('/trip/contact/add', this.user)
					this.getconcat()
					uni.hideLoading()
					uni.$u.toast('保存成功')
					this.isShow = true
					this.user.phone = ''
					this.user.relation = ''
					this.user.username = ''
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #fafafa;
		min-height: 1500rpx;
		height: auto;
		padding-top: 40rpx;

		.cont {
			width: 690rpx;
			height: 88rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			color: #999999;
		}
	}

	.fixed {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 750rpx;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);

		.btn {
			margin: 40rpx auto;
			width: 690rpx;
			height: 78rpx;
			line-height: 78rpx;
			background: #49CAA4;
			border-radius: 39rpx;
			color: white;
			text-align: center;
			font-size: 30rpx;
		}
	}

	.bottom {
		padding: 30rpx;
		box-sizing: border-box;
		margin: 30rpx auto;
		width: 690rpx;
		height: 280rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		label {
			font-size: 30rpx;
		}

		input {
			font-size: 30rpx;
		}

		.inpt {
			width: 600rpx;
			height: 89rpx;
			color: #000;
			font-size: 30rpx;
		}
	}

	.user {
		background-color: white;
		padding: 20rpx;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		.pp{
			margin: 20rpx 0;
		}
		.ops {
			margin: 20rpx 0;
			justify-content: flex-end;
			image{
				width: 30rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
			text{
				font-size: 26rpx;
			}
			view{
				margin-right: 20rpx;
			}
		}
	}
</style>