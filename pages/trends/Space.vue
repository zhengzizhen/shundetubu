<template>
	<view>
		<!-- 无背景 -->
		<view class="minebanner pd30">
			<view class="dis_f mine">
				<image :src="avatar" mode=""></image>
				<view class="sp dis_f">
					<view>
						<p>{{nickname}}</p>
						<text>级别：{{level}}</text>
					</view>
					<view v-if="userid != $store.state.userinfo.id">
						<text class="attention" v-show="!is_attention" @click="attention(userid)">
							+关注
						</text>
						<text class="attention" v-show="is_attention" @click="attention(userid)">
							已关注
						</text>
					</view>
				</view>
			</view>
		</view>

		<view class="dis_f dos">
			<view class="hot">
				<p>{{order_number}}</p>
				<text>活动</text>
			</view>
			<view class="hot">
				<p>{{dynamic_number}}</p>
				<text>轻季</text>
			</view>
			<view class="hot">
				<p>{{attention_number}}</p>
				<text>关注</text>
			</view>
			<view class="hot">
				<p>{{to_attention_number}}</p>
				<text>粉丝</text>
			</view>
		</view>


		<view class="cont pd30 dis_f" v-for="(item,index) in list" :key="index">
			<p><label>{{item.day}}</label>/{{item.month}}月</p>
			<view class="is">
				<view class="right">
					<image @click='$Resize(item.images,i)' v-for="(v,i) in item.images" :key="i" :src="v" mode="">
					</image>
				</view>
				<view class="io">
					<p>{{item.content}}</p>
				</view>
				<view class="dis_f plq">
					<image class="sn" src="@/static/trends/pl.png"></image>
					<view class="dis_f ssss">
						<image v-show="!item.show" @click="love(item)" src="@/static/trends/ax.png"></image>
						<image v-show="item.show" @click="love(item)" src="@/static/image/trends/zan.png" mode="">
						</image>
						<span style="margin-left: 10rpx;color:#666">{{item.like_number}}</span>
					</view>
				</view>
			</view>
		</view>

		<view class="fixed">
			<u-icon @click='toback' name="arrow-left" size='20' color='#FFFFFF'></u-icon>
		</view>

		<view class="ts_flex" @click="toNews()">
			<image src="@/static/trends/tels.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				list: [],
				userinfo: null, //用户信息
				nickname: '', //用户名
				level: '',
				is_attention: '',
				attention_number: '',
				to_attention_number: '',
				dynamic_number: '',
				order_number: '',
				avatar: '',
				userid: ''
			}
		},
		onLoad(option) {
			this.getlist(option.id)
			this.userid = option.id
		},
		onShow() {
			this.getlist(this.userid)
		},
		methods: {
			async getlist(id) {
				uni.showLoading()
				const res = await this.$http('/circle/user/detail', {
					to_uid: id
				})
				uni.hideLoading()
				this.changlist(res.data.data)
			},
			changlist(data) {
				this.nickname = data.nickname //昵称
				this.level = data.level //级别
				this.is_attention = data.is_attention //是否关注
				this.attention_number = data.attention_number //关注人数
				this.to_attention_number = data.to_attention_number //粉丝数量
				this.dynamic_number = data.dynamic_number //轻季
				this.order_number = data.order_number //昵称
				this.avatar = data.avatar //头像
				this.list = data.dynamic_list
			},
			love(item) {
				item.show = !item.show
				if (item.show == false) {
					item.lovenum--
				} else {
					item.lovenum++
				}

			},
			async attention() { //关注用户
				this.is_attention = !this.is_attention
				const res = await this.$http('/circle/user/attention', {
					to_uid: this.userid
				})
				if (res.data.data.status == true) {
					uni.$u.toast('关注成功')
				} else {
					uni.$u.toast('取消关注')
				}
			},
			toback() {
				uni.navigateBack()
			},
			toNews() {
				this.$jump('./News/News')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.minebanner {
		box-sizing: border-box;
		height: 442rpx;
		background: linear-gradient(32deg, #49CAA4 0%, #49CA7A 100%);
		padding-top: 282rpx;

		image {
			width: 129rpx;
			height: 129rpx;
		}

		.mine {
			align-items: center;

			.sp {
				width: 540rpx;
				margin-left: 20rpx;
				justify-content: space-between;
				align-items: center;
				color: white;

				text {
					font-size: 22rpx;
				}
			}
		}
	}

	.attention {
		display: block;
		font-size: 28rpx !important;
		width: 148rpx;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		border: 2rpx solid #FFFFFF;
		border-radius: 50rpx;

	}

	.dos {
		margin: 30rpx 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #E6E6E6;

		.hot {
			width: 25%;
			text-align: center;

			p {
				font-size: 40rpx;
				font-weight: bold;
			}

			text {
				font-size: 26rpx;
				font-weight: 500;
				color: #666666;
			}
		}
	}

	.cont {
		margin-top: 20rpx;

		p {
			font-size: 28rpx;

			label {
				font-size: 34rpx;
				font-weight: bold;
			}
		}

		.right {
			width: 560rpx;

			image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 20rpx;
				margin: 5rpx;
			}
		}
	}

	.io {
		p {
			width: 500rpx;
		}
	}

	.plq {
		margin-top: 20rpx;
		align-items: center;
		margin-left: 400rpx;

		.sn {
			margin-right: 30rpx;
		}

		.ssss {
			align-items: center;
		}

		image {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.is {
		// margin-left: 20rpx;
	}

	.fixed {
		position: fixed;
		top: 80rpx;
		left: 20rpx;
	}

	.ts_flex {
		position: fixed;
		bottom: 200rpx;
		right: 50rpx;
		z-index: 99;

		image {
			width: 114rpx;
			height: 114rpx;
		}
	}
</style>