<template>
	<view class="trends">
		<view class="ts_header dis_f">
			<u-search class="input" placeholder="请搜索目的地" v-model="seachValue" clearable :showAction='false'
				:height='28'></u-search>
			<view class="headerimg">
				<image @click="gomsg()" src="@/static/image/trends/msg.jpg" mode=""></image>
				<image v-if="$store.state.userinfo" class="bor_y" @click="goSpace($store.state.userinfo.id)"
					:src="$store.state.userinfo.avatar" mode=""></image>
			</view>
		</view>

		<view class="pd30">
			<view class="ts_tbs dis_f">
				<p :class="v.state?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v,index)">
					{{v.name}}
				</p>
			</view>
			<!-- 关注列表 -->
			<view v-show="state">
				<view v-for="(item,index) in userlist1" :key="index">
					<!-- 用户信息 -->
					<view class="ts_text dis_f">
						<view class="ts_user dis_f">
							<view @click="goSpace(item.user_detail.uid)" class="ts_img dis_f">
								<image class="bor_y" :src="item.user_detail.avatar" mode=""></image>
								<view class="ts_tes dis_f">
									<p>{{item.user_detail.nickname}}</p>
									<span>{{item.user_detail.dynamic_number}}篇活动动态</span>
								</view>
							</view>
							<view v-show="item.user_detail.is_attention" class="ts_active" @click="isClik(item,index)">
								已关注
							</view>
							<view v-show="!item.user_detail.is_attention" class="ts_actives"
								@click="isClik(item,index)">
								关注
							</view>
						</view>
					</view>
					<!-- 动态内容 -->
					<view class="ts_txt">
						<p>{{item.content}}</p>
					</view>
					<!-- 图片 -->
					<view class="ts_imglist dis_f flexw">
						<view class="ts_js dis_f" v-for="(v,i) in item.images" :key="i">
							<image class="bor_r" :src="v" mode="" @click='clickImg(item.images,i)'></image>
						</view>
					</view>
					<!-- 评论区 -->
					<view class="">
						<!-- 输入区 -->
						<view class="ts_pls dis_f">
							<u--input placeholder="喜欢就评论吧" border="surround" fontSize='12' :customStyle='obj'
								shape='circle' v-model="item.pinlun" @change="e=>change(e)"></u--input>
							<view class="dis_f">
								<image @click="addcomment(item)" src="@/static/trends/pl.png" mode=""></image>
								<view class="dis_f ix_span alitmc">
									<image v-show="!item.is_like" @click="addlove(item,index)"
										src="@/static/trends/ax.png" mode=""></image>
									<image v-show="item.is_like" @click="relove(item,index)"
										src="@/static/image/trends/zan.png" mode=""></image>
									<p>{{item.like_number}}</p>
								</view>
							</view>
						</view>
						<!-- 已有得评论 -->
						<view v-if="item.comment_number != 0" class="dis_f ts_plq" @click='changeShow(item)'>
							<view class="dis_f">
								<p>{{item.comment.nickname}} :</p><label>{{item.comment.content}}</label>
							</view>
							<u-icon name="arrow-right" size='14'></u-icon>
						</view>
						<view class="dis_xhx">
							<u-line color='#E6E6E6'></u-line>
						</view>
					</view>
				</view>
			</view>

			<view v-show="!state">
				<!-- 推荐列表 -->
				<view v-for="(item,index) in userlist2" :key="index">
					<!-- 用户信息 -->
					<view class="ts_text dis_f">
						<view class="ts_user dis_f">
							<view @click="goSpace(item.user_detail.uid)" class="ts_img dis_f">
								<image class="bor_y" :src="item.user_detail.avatar" mode=""></image>
								<view class="ts_tes dis_f">
									<p>{{item.user_detail.nickname}}</p>
									<span>{{item.user_detail.dynamic_number}}篇活动动态</span>
								</view>
							</view>
							<view v-show="item.user_detail.is_attention" class="ts_active" @click="isClik(item,index)">
								已关注
							</view>
							<view v-show="!item.user_detail.is_attention" class="ts_actives"
								@click="isClik(item,index)">
								关注
							</view>
						</view>
					</view>
					<!-- 动态内容 -->
					<view class="ts_txt">
						<p>{{item.content}}</p>
					</view>
					<!-- 图片 -->
					<view class="ts_imglist dis_f flexw">
						<view class="ts_js dis_f" v-for="(v,i) in item.images" :key="i">
							<image class="bor_r" :src="v" mode="" @click='clickImg(item.images,i)'></image>
						</view>
					</view>
					<!-- 评论区 -->
					<view class="">
						<!-- 输入区 -->
						<view class="ts_pls dis_f">
							<u--input placeholder="喜欢就评论吧" border="surround" fontSize='12' :customStyle='obj'
								shape='circle' v-model="item.pinlun" @change="e=>change(e)"></u--input>
							<view class="dis_f">
								<image @click="addcomment(item)" src="@/static/trends/pl.png" mode=""></image>
								<view class="dis_f ix_span alitmc">
									<image v-show="!item.is_like" @click="addlove(item,index)"
										src="@/static/trends/ax.png" mode=""></image>
									<image v-show="item.is_like" @click="relove(item,index)"
										src="@/static/image/trends/zan.png" mode=""></image>
									<p>{{item.like_number}}</p>
								</view>
							</view>
						</view>
						<!-- 已有得评论 -->
						<view v-if="item.comment_number != 0" class="dis_f ts_plq" @click='changeShow(item)'>
							<view class="dis_f">
								<p>{{item.comment.nickname}} :</p><label>{{item.comment.content}}</label>
							</view>
							<u-icon name="arrow-right" size='14'></u-icon>
						</view>

						<view class="dis_xhx">
							<u-line color='#E6E6E6'></u-line>
						</view>
					</view>
				</view>
			</view>

		</view>
		<!-- 弹出层 -->
		<u-popup :show="isShow" @close="close" @open="open">
			<view class="pop">
				<label>评论</label>
				<view class="ts_text dis_f" v-for="(v,x) in comment" :key="x">
					<view class="ts_user dis_f">
						<view class="ts_img dis_f">
							<image :src="v.user_detail.avatar" mode=""></image>
							<view class="ts_tes dis_f">
								<p>{{v.user_detail.nickname}}</p>
								<span>{{v.created_time}}</span>
								<text class="zlsplq">{{v.content}}</text>
								<u-line color='#E6E6E6'></u-line>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
		<view class="ts_flex" @click="toNews()">
			<image src="@/static/trends/tels.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachValue: '',
				plvalue: '',
				tablist: [{
						name: '关注',
						state: true
					},
					{
						name: '推荐',
						state: false
					}
				],
				userlist: [],
				userlist1: [],
				userlist2: [],
				obj: {
					height: '28rpx',
					backgroundColor: '#F4F5F7'
				},
				isShow: false,
				state: true, //什么位置
				comment: [], //评论列表
				recommendPage: 1, //推荐页数
				followPage: 1, //关注页数
				rebottom: false, //推荐页是否触底
				fobottom: false, //关注页是否触底
			}
		},
		onLoad() {},
		onShow() {
			//关注列表
			this.getlist('关注')
			// //推荐列表
			this.getlistc('推荐')
		},
		onReachBottom() {
			if (this.state == false) {
				if (this.rebottom == true) {
					uni.$u.toast('已经到底了哦')
					return false
				}
				this.recommendPage += 1
				this.getlistc('推荐')
				return false
			} else if (this.state == true) {
				if (this.fobottom == true) {
					uni.$u.toast('已经到底了哦')
					return false
				}
				this.followPage += 1
				this.getlist('关注')
				return false
			}
		},
		methods: {
			//获取关注列表
			async getlist(e) {
				uni.showLoading()
				const res = await this.$http('/circle/dynamic/list', {
					type: e,
					page: this.followPage,
					limit: 10
				})
				this.userlist1 = this.userlist1.concat(res.data.data)
				if (res.data.data.length < 10) {
					this.fobottom = true
				}
				uni.hideLoading()
			},
			//获取推荐列表
			async getlistc(e) {
				uni.showLoading()
				const res = await this.$http('/circle/dynamic/list', {
					type: e,
					page: this.recommendPage,
					limit: 10
				})
				this.userlist2 = this.userlist2.concat(res.data.data)
				if (res.data.data.length < 10) {
					this.rebottom = true
				}
				uni.hideLoading()
			},
			open() {

			},
			close() {
				this.isShow = false
			},
			chetbs(e, index) {
				if (e.state == true) {
					return false
				}
				this.tablist.forEach(function(item, index) {
					item.state = false
				})
				this.fobottom = false
				this.rebottom = false
				e.state = true
				this.state = !this.state
				if (this.state == true) {
					this.userlist1 = []
					this.getlist('关注')
				}
			},
			async isClik(v, index) {
				const res = await this.$http('/circle/user/attention', {
					to_uid: v.user_detail.uid
				})
				this.userlist1.forEach((item, i) => {
					if (item.user_detail.uid == v.user_detail.uid) {
						item.user_detail.is_attention = !item.user_detail.is_attention
					}
				})
				this.userlist2.forEach((item, i) => {
					if (item.user_detail.uid == v.user_detail.uid) {
						item.user_detail.is_attention = !item.user_detail.is_attention
					}
				})
				if (res.data.data.status == true) {
					uni.$u.toast('关注成功')
				} else if (res.data.data.status == false) {
					uni.$u.toast('已取消关注')
				}
			},
			change(e) {
				// console.log(e)
			},
			clickImg(item, index) {
				uni.previewImage({
					urls: item,
					current: index
				})
			},
			goSpace(e) {
				this.$jump('./Space?id=', 'params', e)
			},
			gomsg() {
				this.$jump('./message')
			},
			toNews() {
				this.$jump('./News/News')
			},
			async addlove(e, index) {
				if (this.state == true) {
					this.userlist1[index].is_like = true
				} else {
					this.userlist2[index].is_like = true
				}
				e.like_number += 1
				const res = await this.$http('/circle/dynamic/like', {
					dynamic_id: e.id
				})
			},
			async relove(e, index) {
				if (this.state == true) {
					this.userlist1[index].is_like = false
				} else {
					this.userlist2[index].is_like = false
				}
				e.like_number -= 1
				const res = await this.$http('/circle/dynamic/like', {
					dynamic_id: e.id
				})
			},
			async addcomment(item) { //添加评论
				if (item.pinlun == null) {
					return false
				}
				const res = await this.$http('/circle/dynamic/comment', {
					dynamic_id: item.id,
					content: item.pinlun
				})
				if (item.comment_number == 0) {
					item.comment.nickname = this.$store.state.userinfo.nickname
					item.comment.content = item.pinlun
					item.comment_number = 1
				}
				uni.$u.toast('评论成功')
				item.pinlun = ''
				console.log(item);
			},
			async changeShow(item) {
				//打开评论区
				uni.showLoading()
				const res = await this.$http('/circle/dynamic/comment/list', {
					dynamic_id: item.id
				})
				uni.hideLoading()
				this.isShow = true
				this.comment = res.data.data
			},
		}
	}
</script>

<style lang="scss" scoped>
	.trends {
		width: 100%;
		padding-bottom: 150rpx;
	}

	.headerimg {
		margin-left: 40rpx;

		image {
			width: 63rpx;
			height: 63rpx;
			margin-right: 10rpx;
		}
	}

	.ts_header {
		margin-top: 100rpx;
		padding: 0rpx 30rpx;
	}

	.ts_tbs {
		p {
			padding: 20rpx;
		}

		.green {
			color: #49CAA4;
		}
	}

	.ts_text {
		margin-top: 30rpx;

		.ts_user {
			width: 100%;
			justify-content: space-between;
			align-items: center;

			.ts_img {
				.ts_tes {
					flex-direction: column;
					justify-content: space-around;
					margin-left: 20rpx;

					span {
						font-size: 22rpx;
						font-weight: 500;
						color: #999999;
					}
				}
			}

			.ts_active {
				color: #999999;
				padding: 8rpx 20rpx;
				border-radius: 50rpx;
				border: 2rpx solid #999999;
			}

			.ts_actives {
				color: #49CAA4;
				padding: 8rpx 20rpx;
				border-radius: 50rpx;
				border: 2rpx solid #49CAA4;
			}

			image {
				width: 100rpx;
				height: 100rpx;
				display: inline-block;
			}

			p {
				display: inline-block;
			}

		}
	}

	.ts_txt {
		margin-top: 30rpx;

		p {
			width: 100%;
			word-wrap: break-word;
		}
	}

	.ts_imglist {
		margin-top: 20rpx;

		// justify-content: space-between;
		.ts_js {
			margin: 10rpx 0;
			width: 33%;
			justify-content: center;
		}

		image {
			width: 214rpx;
			height: 214rpx;

		}
	}

	.ts_pls {
		margin-top: 20rpx;
		align-items: center;

		image {
			margin-left: 40rpx;
			width: 48rpx;
			height: 48rpx;
		}

		span {
			padding-left: 10rpx;
		}
	}

	.ts_plq {
		margin-top: 20rpx;
		justify-content: space-between;

		p {
			color: #222;
		}

		label {
			margin-left: 10rpx;
			display: flex;
			color: #666666;
		}
	}

	.dis_xhx {
		margin-top: 20rpx;
	}

	.ts_flex {
		position: fixed;
		bottom: 140rpx;
		right: 50rpx;
		z-index: 99;

		image {
			width: 114rpx;
			height: 114rpx;
		}
	}

	.pop {
		height: 910rpx;
		padding: 30rpx 20rpx;

		label {
			text-align: center;
			display: block;
			margin-bottom: 20rpx;
		}

		.zlsplq {
			margin: 20rpx 0;
			width: 590rpx;
		}
	}

	.ix_span {
		p {
			display: inline-block;
			margin-left: 10rpx;
			font-size: 28rpx;
		}
	}
</style>