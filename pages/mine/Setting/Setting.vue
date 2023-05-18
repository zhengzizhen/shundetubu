<template>
	<view class="st_body">
		<view class="st_top dis_f jscb pd30">
			<p>用户ID</p>
			<view class="right">
				<p>123456</p>
			</view>
		</view>

		<view class="st_top dis_f jscb pd30" @click="changelist(item.title)" v-for="(item,index) in list" :key="index">
			<p>{{item.title}}</p>
			<view class="right dis_f">
				<p v-if="!item.image">{{item.text}}</p>
				<image class="image" v-else :src="$store.state.userinfo.avatar" mode=""></image>
				<image class="go_img" src="/static/image/mine/right.jpg" mode=""></image>
			</view>
		</view>




		<view class="m30">
			<view class="st_top dis_f jscb pd30" v-for="(v,i) in radiolist" :key="i">
				<p>{{v.title}}</p>
				<view class="right dis_f">
					<u-switch activeColor="#4CD967" v-model="v.state" @change="messageset(i)"></u-switch>
				</view>
			</view>
		</view>





		<view class="st_top dis_f jscb pd30" style="margin-top: 30rpx;">
			<p>活动有可报名名额提醒</p>
			<view class="right dis_f">
				<p>订阅活动：{{userinfo.subscription_trip}}个</p>
			</view>
		</view>
		<button class="btns" :class="'btn'+sum" @click="goLogin()">退出登录</button>

		<view>
			<u-datetime-picker confirmColor='#999' :show="isShow" v-model="new_date" mode="date" :minDate="1456979510"
				:maxDate="end_date" @confirm="confirm" @cancel="cancel"></u-datetime-picker>
		</view>

		<u-popup :show="popShow" :round="10" mode="center" @close="close" @open="open">
			<view class="popview">
				<image src="@/static/image/mine/x.jpg" mode="" class="closes" @click="close()"></image>
				<text class="tit">个人标签设置</text>
				<view class="label">
					<view class="color dis_f">
						<p :class="v.state?'active'+sum:'dactive'+sum" v-for="(v,i) in labelLsit" :key="i"
							@click='chelabel(v)'>{{v.label}}</p>
					</view>
				</view>
				<view class="srotate">
					<view @click="getmsg" class="dis_f ps">
						<image src="@/static/image/mine/rotate.jpg" mode=""></image>
						<text>换一批</text>
					</view>
				</view>

				<view class="input dis_f" :class="'input'+sum">
					<label>自定义：</label>
					<input type="text" placeholder="六字以内" v-model="labelvalue">
				</view>

				<view class="dis_f m30 input inpt">
					<label>气泡颜色：</label>
					<view class="sltcolor dis_f">
						<p @click='changeColor(index)' :class="'c'+index" v-for="(item,index) in list" :key="index"></p>
					</view>
				</view>

				<button class="btn" :class="'btn'+sum" @click="submit()">提交</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import store from '@/store/index.js'
	export default {
		computed: {
			...mapState(['userinfo'])
		},
		data() {
			return {
				isShow: false, //日期选择器
				popShow: false, //弹窗选择器
				list: [{
						title: '昵称',
						text: ''
					},
					{
						title: '头像',
						image: ''
					},
					{
						title: '性别',
						text: ''
					},
					{
						title: '生日',
						text: ''
					},
					{
						title: '实名认证',
						text: ''
					},
					{
						title: '提现账户',
						text: ''
					},
					{
						title: '个人标识',
						text: ''
					},
				],
				radiolist: [{
						title: '匿名报名',
						state: false
					},
					{
						title: '隐藏活动记录',
						state: false
					},
					{
						title: '关注的领队动态提醒',
						state: false
					},
					{
						title: '有全新路线时提醒我',
						state: false
					},
					{
						title: '有评论/回复提醒我',
						state: false
					},
					{
						title: '有券过期通知我',
						state: false
					}
				],
				labelLsit: [{
						label: '',
						state: true
					},
					{
						label: '',
						state: false
					},
					{
						label: '',
						state: false
					},
					{
						label: '',
						state: false
					},
					{
						label: '',
						state: false
					},
					{
						label: '',
						state: false
					},
				],
				sum: 1,
				new_date: null, //更新时间
				end_date: null, //结束时间
				label: null, //提交的label
				labelvalue: '', //输入框自定义标签
			};
		},
		onLoad() {
			this.end_date = new Date().valueOf()
		},
		onShow() {
			//vuex赋值
			this.getlist()
			//获取标签
			this.getmsg()
		},
		methods: {
			getlist() {
				//个人信息
				this.list[0].text = this.userinfo.nickname
				this.list[1].image = this.userinfo.avatar
				this.list[2].text = this.userinfo.sex
				if (this.userinfo.birthday == '') {
					this.list[3].text = '暂未设置生日'
				} else {
					this.list[3].text = this.userinfo.birthday
					this.new_date = new Date(this.userinfo.birthday).valueOf()
				}
				if (this.userinfo.real_status == 0) {
					this.list[4].text = '未绑定'
				} else {
					this.list[4].text = '已实名'
				}

				//匿名报名
				this.radiolist[0].state = this.userinfo.message_set.anonymity
				//隐藏活动记录
				this.radiolist[1].state = this.userinfo.message_set.hide_trip_log
				//关注的领队
				this.radiolist[2].state = this.userinfo.message_set.attention_akela_dynamic
				//新活动
				this.radiolist[3].state = this.userinfo.message_set.new_trip
				//新评论
				this.radiolist[4].state = this.userinfo.message_set.new_comment
				//过期
				this.radiolist[5].state = this.userinfo.message_set.coupon_out
			},
			change(e) {
				console.log(e)
			},
			changelist(v) {
				switch (v) {
					case '昵称':
						this.$jump('./Rename?name=', 'params', this.list[0].text)
						break;
					case '头像':
						this.Upimage()
						break;
					case '性别':
						this.$jump('./SettingSex?sex=', 'params', this.list[2].text)
						break;
					case '生日':
						this.isShow = true
						break;
					case '实名认证':
						if (this.userinfo.real_status == 0) {
							this.$jump('./userID')
						} else {
							uni.$u.toast('您已实名')
						}
						break;
					case '提现账户':

						this.$jump('./playRMB')
						break;
					case '个人标识':
						this.popShow = true
						break;
				}
			},
			// 上传照片
			async Upimage() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						uni.showLoading({
							title: '修改中'
						})
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://www.tbq11.com/api/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								let img = JSON.parse(uploadFileRes.data).data.path
								this.changeuserimg(img)
							}
						});
					}
				});
			}, //更改头像
			async changeuserimg(img) {
				const res = await this.$http('/user/update/data', {
					avatar: img
				})
				uni.hideLoading()
				this.$store.commit('reavatar', img)
			},
			cancel() {
				this.isShow = false
			},
			//日期选择器
			confirm(e) {
				let year = new Date(e.value).getFullYear()
				let moment = parseInt(new Date(e.value).getMonth() + 1)
				let day = new Date(e.value).getDate()
				if (moment < 10) {
					moment = '0' + moment
				}
				this.isShow = false
				let birthday = year + '-' + moment + '-' + day
				this.changebirthday(birthday)
			},
			//修改生日
			async changebirthday(birthday) {
				uni.showLoading()
				const res = await this.$http('/user/update/data', {
					birthday
				})
				this.$store.commit('rebirthday', birthday)
				this.getlist()
				uni.hideLoading()
				uni.$u.toast('修改成功')
			},
			open() {
				// console.log(1)
			},
			close() {
				this.popShow = false
			},
			changeColor(v) {
				console.log(v)
				this.sum = v
			},
			chelabel(v) {
				console.log(v);
				this.labelLsit.forEach((item, index) => {
					item.state = false
				})
				v.state = true
				this.label = v.label
			},
			async submit() {
				uni.showLoading()
				if (this.labelvalue != '') {
					const res = await this.$http('/user/update/label', {
						label: this.labelvalue,
						label_color: this.sum
					})
					this.$store.commit('changeLabel', this.sum)
					this.labelvalue = ''
					uni.hideLoading()
					this.popShow = false
					return false
				}

				const res = await this.$http('/user/update/label', {
					label: this.label,
					label_color: this.sum
				})
				this.$store.commit('changeLabel', this.sum)
				uni.hideLoading()
				this.popShow = false
			},
			goLogin() {
				uni.removeStorageSync('token')
				uni.removeStorageSync('userinfo')
				this.$store.commit('remove',null)
				this.$jump('../../login/otherLogin', 'reLaunch')
			},
			//获取消息列表
			async getmsg() {
				const res = await this.$http('/user/set/label/list')
				for (let i = 0; i < res.data.data.list.length; i++) {
					this.labelLsit[i].label = res.data.data.list[i]
				}
				if (this.userinfo.label_color == '') {
					this.sum = 1
					return false
				}
				this.sum = this.userinfo.label_color
			},
			//更改关注列表
			async messageset(v) {
				switch (v) {
					case 0:
						const res = await this.$http('/user/update/messageset', {
							anonymity: this.radiolist[0].state
						})
						this.$store.commit('anonymity',this.radiolist[0].state)
						break;
					case 1:
						const res1 = await this.$http('/user/update/messageset', {
							hide_trip_log: this.radiolist[1].state
						})
						this.$store.commit('hide_trip_log',this.radiolist[1].state)
						break;
					case 2:
						const res2 = await this.$http('/user/update/messageset', {
							attention_akela_dynamic: this.radiolist[2].state
						})
						this.$store.commit('attention_akela_dynamic',this.radiolist[2].state)
						break;
					case 3:
						const res3 = await this.$http('/user/update/messageset', {
							new_trip: this.radiolist[3].state
						})
						this.$store.commit('new_trip',this.radiolist[3].state)
						break;
					case 4:
						const res4 = await this.$http('/user/update/messageset', {
							new_comment: this.radiolist[4].state
						})
						this.$store.commit('new_comment',this.radiolist[4].state)
						break;
					case 5:
						const res5 = await this.$http('/user/update/messageset', {
							coupon_out: this.radiolist[5].state
						})
						this.$store.commit('coupon_out',this.radiolist[5].state)
						break;
				}
			}
		}
	}
</script>

<style lang="scss" lang="scss">
	.st_body {
		background: #FAFAFA;
		padding-bottom: 90rpx;
	}

	.st_top {
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1px solid #f7f7f7;
		background-color: white;

		.right {

			color: #999999;
			align-items: center;

			p {
				font-size: 30rpx;
			}

			.image {
				width: 62rpx;
				height: 62rpx;
			}

		}
	}

	.m30 {
		margin-top: 30rpx;
	}

	.popview {
		position: relative;

		.closes {
			position: absolute;
			right: 20rpx;
			height: 0;
			width: 20rpx;
			height: 20rpx;
		}

		.tit {
			display: block;
			margin: 10rpx 0;
		}

		box-sizing: border-box;
		width: 540rpx;
		height: 903rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 20rpx 30rpx;
		text-align: center;

		.label {
			margin-top: 20rpx;
			text-align: center;
			font-size: 22rpx;
			display: block;
			padding: 10rpx;
			border-radius: 50rpx;
			width: 178rpx;
			height: 33rpx;
			line-height: 33rpx;
			// border: 1px solid #CCCCCC;
			color: #999999;
		}

		.color {
			width: 500rpx;
			margin-top: 40rpx;
			flex-wrap: wrap;

			p {
				margin-top: 20rpx;
				margin-right: 30rpx;
				text-align: center;
				padding: 10rpx 30rpx;
				font-size: 22rpx;
				border-radius: 50rpx;
			}

			.active1 {
				color: white;
				background-color: #49CAA4;
				border: 1px solid #49CAA4;
				;
			}

			.dactive1 {
				color: #49CAA4;
				background-color: white;
				border: 1px solid #49CAA4;
				;
			}

			.active2 {
				color: white;
				background-color: #F2AD5A;
				border: 1px solid #F2AD5A;
				;
			}

			.dactive2 {
				color: #F2AD5A;
				background-color: white;
				border: 1px solid #F2AD5A;
			}

			.active3 {
				color: white;
				background-color: #90D1FF;
				border: 1px solid #90D1FF;
				;
			}

			.dactive3 {
				color: #90D1FF;
				background-color: white;
				border: 1px solid #90D1FF;
				;
			}

			.active4 {
				color: white;
				background-color: #97F68E;
				border: 1px solid #97F68E;
				;
			}

			.dactive4 {
				color: #97F68E;
				background-color: white;
				border: 1px solid #97F68E;
				;
			}

			.active5 {
				color: white;
				background-color: #AAA9FF;
				border: 1px solid #AAA9FF;
				;
			}

			.dactive5 {
				color: #AAA9FF;
				background-color: white;
				border: 1px solid #AAA9FF;
				;
			}
		}
	}

	.srotate {
		margin-top: 310rpx;
		width: 100%;
		// margin: 65rpx 0;
		align-items: center;

		.ps {
			justify-content: center;
			align-items: center;
		}

		text {
			font-size: 22rpx;
			color: #49CAA4
		}

		image {
			width: 28rpx;
			height: 30rpx;
		}
	}

	.input {
		margin-top: 30rpx;
		align-items: center;

		label {
			font-size: 22rpx;
		}

		input {
			padding-left: 10rpx;
			text-align: left;
			font-size: 22rpx;
			color: #49CAA4;
			width: 341rpx;
			height: 53rpx;
			background: #FFFFFF;
			border: 1px solid #49CAA4;
			border-radius: 26rpx;
		}
	}

	.input1 {
		input {
			color: #49CAA4;
			background: #FFFFFF;
			border: 1px solid #49CAA4;
		}
	}

	.input2 {
		input {
			color: #F2AD5A;
			background: #FFFFFF;
			border: 1px solid #F2AD5A;
		}
	}

	.input3 {
		input {
			color: #90D1FF;
			background: #FFFFFF;
			border: 1px solid #90D1FF;
		}
	}

	.input4 {
		input {
			color: #97F68E;
			background: #FFFFFF;
			border: 1px solid #97F68E;
		}
	}

	.input5 {
		input {
			color: #AAA9FF;
			background: #FFFFFF;
			border: 1px solid #AAA9FF;
		}
	}

	.sltcolor {
		p {
			margin-right: 20rpx;
		}

		.c1 {
			width: 40rpx;
			height: 40rpx;
			background-color: #49CAA4;
			border-radius: 6rpx;
		}

		.c2 {
			width: 40rpx;
			height: 40rpx;
			background-color: #F2AD5A;
			border-radius: 6rpx;
		}

		.c3 {
			width: 40rpx;
			height: 40rpx;
			background-color: #90D1FF;
			border-radius: 6rpx;
		}

		.c4 {
			width: 40rpx;
			height: 40rpx;
			background-color: #97F68E;
			border-radius: 6rpx;
		}

		.c5 {
			width: 40rpx;
			height: 40rpx;
			background-color: #AAA9FF;
			border-radius: 6rpx;
		}
	}

	.inpt {
		margin-top: 70rpx;
	}

	.btn {
		width: 460rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;

		border-radius: 40rpx;
		color: white;
		text-align: center;
		margin-top: 80rpx;
	}

	.btns {
		width: 660rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;

		border-radius: 40rpx;
		color: white;
		text-align: center;
		margin-top: 80rpx;
	}

	.btn1 {
		background: #49CAA4;
	}

	.btn2 {
		background: #F2AD5A;
	}

	.btn3 {
		background: #90D1FF;
	}

	.btn4 {
		background: #97F68E;
	}

	.btn5 {
		background: #AAA9FF;
	}

	.ss {
		margin-left: 10rpx;
	}
</style>