<template>
	<view class="se_body">
		<!-- 无背景 -->
		<view class="minebanner pd30" v-if="akela.background == ''">
			<view class="dis_f mine">
				<image :src="akela.avatar" mode=""></image>
				<view class="sp dis_f">
					<view>
						<p>{{akela.nickname}}</p>
						<!-- <text>级别：好奇宝宝</text> -->
					</view>
					<text class="attention" v-show="!isCare" @click="isCare = !isCare">
						+关注
					</text>
					<text class="attention" v-show="isCare" @click="isCare = !isCare">
						已关注
					</text>
				</view>
			</view>
		</view>

		<!-- 有背景 -->
		<view class="minebanner pd30 mens posir" v-else>
			<image class="bannes" :src="akela.background" mode=""></image>
			<view class="">
				<view class="dis_f mine sps posia pd30">
					<image :src="akela.avatar" mode=""></image>
					<view class="sp dis_f ">
						<view>
							<p>{{akela.nickname}}</p>
						</view>
						<text class="attention" v-show="!akela.is_attention" @click="attention">
							+关注
						</text>
						<text class="attention" v-show="akela.is_attention" @click="attention">
							已关注
						</text>
					</view>
				</view>
			</view>
		</view>

		<view class="pd30 ge_sign">
			<p>{{akela.intro}}</p>
			<view class="dis_f">
				<view class="menu dis_f flex_c alitmc" @click="toWallet(akela.fund)">
					<image src="@/static/image/mine/qb.jpg" mode=""></image>
					<text>我的钱包</text>
				</view>

				<view class="menu dis_f flex_c alitmc" @click="toWipeout()">
					<image src="@/static/image/mine/mn.jpg" mode=""></image>
					<text>报销管理</text>
				</view>

				<view class="menu dis_f flex_c alitmc" @click="toconcat()">
					<image src="@/static/image/mine/qiandao.png" mode=""></image>
					<text>签到管理</text>
				</view>
			</view>
		</view>

		<view class="dos_he">
			<view class="dis_f dos">
				<view class="hot">
					<p>{{akela.order_number}}</p>
					<text>带队</text>
				</view>
				<view class="hot">
					<p>{{akela.grade}}</p>
					<text>评分</text>
				</view>
				<view class="hot">
					<p>{{akela.attention_number}}</p>
					<text>关注</text>
				</view>
				<view class="hot">
					<p>{{akela.to_attention_number}}</p>
					<text>粉丝</text>
				</view>
			</view>

			<view class="tabs">
				<u-tabs :inactiveStyle="{
            fontSize:'26rpx'
           }" :activeStyle="{color: '#49CAA4',fontSize:'26rpx' }" @click="chelist" lineWidth='50' lineColor="#49CAA4"
					itemStyle="width:18%;padding-bottom:20rpx" :list="list"></u-tabs>
			</view>

			<!-- 带队活动 -->
			<view class="pb20" v-show="list[0].state">
				<view v-if="hot.no_start != null">
					<view class="shaky pd30" v-for="(v,i) in hot.no_start" :key="i">
						<view class="shaky_banner">
							<p class="shaky_position">{{v.no_start.identity}}</p>
							<image :src="v.master_image" mode=""></image>
						</view>
						<view class="shaky_content">
							<p class="shaky_tit">{{v.title}} {{v.start_week}}天</p>
							<view class="dis_f jscb alitmc shaky_label">
								<text class="shaky_text">{{v.start_day}} 出发{{v.start_week}}天</text>
								<label>{{v.status_text}}</label>
							</view>
						</view>
					</view>
				</view>
				<p v-if="hot.over != null" class="pd30 tis">已结束的活动</p>
				<view v-if="hot.over != null" class="pd30">
					<view class="shaky_bot dis_f posir" v-for="(v,index) in hot.over" :key="index">
						<image class="bor_r" :src="v.master_image" mode=""></image>
						<view class="dis_f flex_c ml20">
							<p class="shaky_position">{{v.identity}}</p>
							<p>{{v.title}} {{v.start_week}}天</p>
							<text>{{v.start_day}} 出发{{v.start_week}}天</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 带队评分 -->
			<view class="notice pd30" v-show="list[1].state">
				<view class="new" v-for="(v,index) in evaluate" :key="index">
					<view class="dis_f">
						<view class="user_img dis_f flex_c alitmc">
							<image :src="v.user_avatar" mode=""></image>
							<text class="username">{{v.user_nickname}}</text>
						</view>
						<text class="content">
							路线:
							{{v.content}}
						</text>
					</view>
					<view class="rate">
						<u-rate readonly :count="count" v-model="v.grade"></u-rate>
						<text class="nstit">{{v.created_at}}出发 {{v.trip_title}}</text>
					</view>
				</view>
			</view>


			<!-- 带队相册 -->
			<view class="pd30 album dis_f" v-show="list[2].state">
				<view :class="'c'+((index%16)+1)" class="pddb" v-for="(v,index) in album" :key="index">
					<image class="bor_r" :src="v" mode="" @click="clickImg(v,index)">
					</image>
				</view>
			</view>

			<!-- 个人动态 -->
			<view v-show="list[3].state">
				<view class="cont pd30 dis_f" v-for="(item,index) in dynamic" :key="index">
					<p><label>{{item.day}}</label>/{{item.month}}月</p>
					<view class="is">
						<view class="right">
							<image @click='$Resize(v)' v-for="(v,i) in item.images" :key="i" :src="v" mode=""></image>
						</view>
						<view class="io">
							<p>{{item.content}}</p>
						</view>
						<view class="dis_f plq">
							<image class="sn" src="@/static/trends/pl.png" mode=""></image>
							<view class="dis_f ssss">
								<image src="@/static/trends/ax.png" mode="">{{item.comment_number}}</image>
								<span style="margin-left: 10rpx;color:#666">{{item.like_number}}</span>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 5,
				value: 4,
				isCare: false,
				list: [{
					name: '带队活动',
					state: true
				}, {
					name: '带队评分',
					state: false
				}, {
					name: '带队相册',
					state: false
				}, {
					name: '个人动态',
					state: false
				}],
				akela: {}, //领队信息
				hot: {}, //带队活动
				evaluate: null, //评论列表
				album: null, //相册数据
				dynamic: null, //动态数据
			}
		},
		onLoad() {
			//获取领队信息
			this.getlist()
			//获取带队活动
			this.gethot()
		},
		methods: {
			async getlist() {
				uni.showLoading()
				const res = await this.$http('/akela/detail')
				uni.hideLoading()
				this.akela = res.data.data
			},
			async gethot() { //活动
				const res = await this.$http('/akela/trip/list')
				this.hot = res.data.data
			},
			async getevaluate() { //评分
				uni.showLoading()
				const res = await this.$http('/akela/evaluate/list', {
					page: 1,
					limit: 10
				})
				uni.hideLoading()
				this.evaluate = res.data.data
			},
			async getalbum() { //相册
				uni.showLoading()
				const res = await this.$http('/akela/album/list', {
					page: 1,
					limit: 10
				})
				uni.hideLoading()
				this.album = res.data.data
			},
			async getdynamic() { //动态
				uni.showLoading()
				const res = await this.$http('/akela/dynamic/list', {
					page: 1,
					limit: 10
				})
				uni.hideLoading()
				this.dynamic = res.data.data
			},
			// 是否关注
			attention() {
				this.is_attention = !this.is_attention
			},
			chelist(item) {
				this.list.forEach((v, index) => {
					v.state = false
				})
				this.list[item.index].state = true
				if (item.index == 0) {
					this.gethot()
					return false;
				} else if (item.index == 1) {
					this.getevaluate()
					return false;
				} else if (item.index == 2) {
					this.getalbum()
					return false;
				} else if (item.index == 3) {
					this.getdynamic()
					return false;
				}
			},
			toWallet(v) {
				this.$jump('./wallet?money=','params',v)
			},
			toWipeout() {
				this.$jump('./Wipeout')
			},
			toconcat() {
				this.$jump('../inchecken')
			},
			toUser() {
				this.$jump('./userguide')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.se_body {
		background-color: #fafafa;
	}

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
				color: white;

				text {
					font-size: 22rpx;
				}
			}

		}
	}

	.mens {
		padding: 0 !important;
		background: none;

		.bannes {
			width: 100%;
			height: 442rpx;
		}

		.sps {
			top: 282rpx;
			left: 0;
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

	.dos_he {
		width: 100%;
		background-color: #fff;
		padding-top: 10rpx;
	}

	.dos {
		margin: 20rpx 30rpx 0;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #e6e6e6;

		.hot {
			width: 25%;
			text-align: center;

			p {
				font-size: 38rpx;
				font-weight: bold;
				color: #000000;
			}

			text {
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}
		}
	}

	.ge_sign {
		margin: 0rpx 0 20rpx;
		background-color: white;
		padding-top: 40rpx;

		p {
			font-size: 28rpx;
			font-weight: 500;
			color: #666666;
		}

		image {
			width: 68rpx;
			height: 68rpx;
		}

		.menu {
			margin: 30rpx;
		}

		text {
			font-size: 24rpx;
			font-weight: 500;
			color: #000000;
		}
	}

	.tabs {
		width: 100%;
		margin-top: 20rpx;
		padding-bottom: 40rpx;
		margin: 20rpx 30rpx 0;
	}

	.shaky {
		margin-bottom: 40rpx;

		.shaky_banner {
			margin: 20rpx auto;
			width: 100%;
			position: relative;

			image {
				width: 100%;
				height: 340rpx;
				border-radius: 20rpx 20rpx 0 0;
			}
		}

		.shaky_content {
			.shaky_tit {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}

			.shaky_text {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}

			.shaky_label {
				margin-top: 10rpx;
			}

			label {
				display: block;
				font-size: 24rpx;
				color: #FFFFFF;
				background: #F2AD5A;
				padding: 0 8rpx;
			}
		}
	}

	.shaky_position {
		position: absolute;
		top: 0;
		left: 0rpx;
		z-index: 2;
		color: white !important;
		font-size: 22rpx !important;
		width: 98rpx;
		height: 42rpx;
		line-height: 42rpx;
		background: #FF6766;
		border-radius: 16rpx 0rpx 20rpx 0rpx;
		text-align: center;
	}

	.shaky_bot {
		margin: 20rpx 0;

		image {
			width: 180rpx;
			height: 180rpx;
		}

		p {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #222222;
			line-height: 36rpx;
			margin-bottom: 20rpx;
		}

		text {
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}
	}

	.tis {
		font-size: 30rpx;
		font-weight: bold;
		color: #2F1D1D;
		line-height: 36rpx;
	}

	.notice {
		max-height: 600px; //设置最大的高度
		overflow: auto; // 超出这个最大高度的数据，会被隐藏起来，上下滑动
		overflow-x: hidden; //隐藏x轴滚动条
		padding-bottom: 100rpx;

		.new {
			padding: 20rpx 0;
			border-bottom: 1px solid #E6E6E6;
		}

		p {
			font-size: 22rpx;
			font-weight: 500;
			color: #666666;
			margin: 10rpx auto;
		}

		.user_img {
			image {
				width: 100rpx;
				height: 100rpx;
			}

			.username {
				font-size: 22rpx;
				color: #222222;
			}
		}

		.content {
			display: block;
			margin-left: 20rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #444444;
		}

		.rate {
			margin-top: 30rpx;
			margin-left: 114rpx;

			.nstit {
				font-size: 22rpx;
				font-weight: 500; 
				color: #999999;
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.album {
		align-items: center;
		flex-wrap: wrap;

		image {
			border-radius: 20rpx;
		}
	}

	.c1 {
		margin: 10rpx 0;
		width: 66%;
		height: 450rpx;
		text-align: center;

		image {
			width: 450rpx;
			height: 450rpx;
		}
	}

	.c2 {
		margin: 10rpx 0;
		margin-left: 10rpx;
		width: 210rpx;
		height: 450rpx;
		overflow: hidden;
		position: relative;
		overflow: hidden;
		border-radius: 20rpx;
		text-align: center;

		image {
			height: 450rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.c3,
	.c4,
	.c5,
	.c6,
	.c7,
	.c8 {
		margin: 10rpx 0;
		height: 210rpx;
		width: 33%;
		text-align: center;

		image {
			width: 210rpx;
			height: 210rpx;
		}
	}

	.c9 {
		margin: 10rpx 0;
		margin-left: 10rpx;
		width: 210rpx;
		height: 450rpx;
		overflow: hidden;
		position: relative;
		border-radius: 20rpx;
		text-align: center;

		image {
			height: 450rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.c10 {
		margin: 10rpx 0;
		width: 66%;
		height: 450rpx;
		text-align: center;
		margin-left: 16rpx;

		image {
			width: 450rpx;
			height: 450rpx;
		}
	}

	.c11,
	.c12,
	.c13,
	.c14,
	.c15,
	.c16 {
		margin: 10rpx 0;
		height: 210rpx;
		width: 33%;
		text-align: center;

		image {
			width: 210rpx;
			height: 210rpx;
		}
	}

	.cont {
		margin-top: 20rpx;
		padding-bottom: 20rpx;

		p {
			font-size: 28rpx;

			label {
				font-size: 34rpx;
				font-weight: bold;
			}
		}

		.right {
			width: 590rpx;

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
</style>