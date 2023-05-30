<template>
	<view class="pd30">
		<view class="ts_tbs dis_f">
			<p :class="curry == index ?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v,index)">
				{{v}}
			</p>
		</view>
		<view v-show="curry == 0">
			<view class="msgcont dis_f " v-for="(item,index) in pllist" :key="index">
				<image @click="goSpace(item.user_detail.uid)" :src="item.user_detail.avatar" mode=""></image>
				<view class="dis_f txt">
					<p>{{item.user_detail.nickname}}</p>
					<label>评论了你的笔记 {{item.created_time}}</label>
					<text>{{item.content}}</text>
				</view>
			</view>
		</view>

		<view v-show="curry == 1">
			<view class="msgcont dis_f " v-for="(item,index) in godlist" :key="index">
				<image @click="goSpace(item.uid)" :src="item.avatar" mode=""></image>
				<view class="dis_f txt jscc">
					<p>{{item.nickname}}赞了你</p>
					<label>{{item.created_time}}</label>
				</view>
			</view>
		</view>

		<view v-show="curry == 2">
			<view class="msgcont dis_f " v-for="(item,index) in gzlist" :key="index">
				<image @click="goSpace(item.uid)" :src="item.avatar" mode=""></image>
				<view class="dis_f txt jscc frist">
					<p>{{item.nickname}}</p>
					<text class="gz" v-if="item.is_attention == true" @click="chat(item)">已关注</text>
					<text class="gz" @click="chat(item)" v-else>关注</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tablist: ['评论/回复', '赞', '关注'],
				pllist: [],
				godlist: [],
				gzlist: [],
				curry: 0,
				page: 1
			}
		},
		onLoad() {
			this.getlist() //评论区
			this.godslist() //赞
			this.gzslist() //关注
		},
		methods: {
			async getlist() {
				const res = await this.$http('/circle/user/comment/list', {
					page: this.page,
					limit: 10
				})
				this.pllist = res.data.data
			},
			async godslist() {
				const res = await this.$http('/circle/user/like/list', {
					page: this.page,
					limit: 10
				})
				this.godlist = res.data.data
			},
			async gzslist() {
				const res = await this.$http('/circle/user/attention/list', {
					page: this.page,
					limit: 10
				})
				this.gzlist = res.data.data
			},
			chetbs(e, index) {
				this.curry = index
			},
			goSpace(e) {
				this.$jump('./Space?id=', 'params', e)
			},
			async chat(item) {
				uni.showLoading()
				const res = await this.$http('/circle/user/attention', {
					uid: item.uid
				})
				uni.hideLoading()
				item.is_attention = !item.is_attention

			}
		}
	}
</script>

<style lang="scss" scoped>
	.ts_tbs {
		text-align: center;

		p {
			width: 33%;
			padding: 20rpx;
		}

		.green {
			color: #49CAA4;
		}
	}

	.msgcont {
		margin-top: 30rpx;
		padding: 10rpx;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #f1f1f1;

		image {
			width: 84rpx;
			height: 84rpx;
			border-radius: 50%;
		}

		.txt {
			margin-left: 20rpx;
			flex-direction: column;

			p {
				font-size: 30rpx;
				font-weight: bold;
			}

			label {
				font-size: 26rpx;
				color: #666666;
			}

			text {
				display: block;
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #222;
				font-weight: 500;
			}
		}
	}

	.frist {
		width: 80%;
		flex-direction: row !important;
		justify-content: space-between !important;
		align-items: center;
	}

	.gz {
		width: 110rpx;
		height: 27rpx;
		line-height: 27rpx;
		padding: 15rpx 30rpx;
		background: #FFFFFF;
		border: 2rpx solid #999999;
		border-radius: 50rpx;
		font-size: 28rpx;
		text-align: center;
	}
</style>