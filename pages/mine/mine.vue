<template>
	<view>
		<!-- 头部 -->
		<view class="my_header">
			<image class="banners" src="@/static/image/mine/banner.jpg" mode=""></image>
			<!-- 顶部按钮 -->
			<view class="position pd30">
				<view class="my_seting dis_f">
					<image @click="toSignin()" src="@/static/mine/date.png" mode=""></image>
					<view class="dis_f my_set">
						<image src="@/static/mine/msg.png" @click="toMessage()" mode=""></image>
						<image src="@/static/mine/seting.png" @click="toSetting()" mode=""></image>
					</view>
				</view>

				<!-- 头像信息 -->
				<view class="my_user dis_f">
					<image class="img" src="@/static/trends/user.png" mode=""></image>
					<view class="my_username dis_f">
						<p>{{name}}</p>
						<view class="dis_f my_rywj">
							<image v-if="lv==1" src="@/static/image/mine/l1.png" mode=""></image>
							<image v-if="lv==2" src="@/static/image/mine/l2.png" mode=""></image>
							<image v-if="lv==3" src="@/static/image/mine/l3.png" mode=""></image>
							<image v-if="lv==4" src="@/static/image/mine/l4.png" mode=""></image>
							<image v-if="lv==5" src="@/static/image/mine/l5.png" mode=""></image>
							<view class="my_jin" @click="toguide()">
								<p>进入领队板块</p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="my_center">
			<view class="dis_f my_jd">
				<p>190</p>
				<view class="my_line">
					<view class="dis_f my_txt">
						<p class="left">当前等级 : 好宝宝</p>
						<p class="right">下一等级 : 初出茅庐</p>
					</view>
					<u-line-progress :percentage="30" :showText="false" height="8"></u-line-progress>
				</view>
			</view>
			<u-line color="#E6E6E6" margin='40rpx 0'></u-line>

			<!-- 菜单 -->
			<view class="my_menu dis_f">
				<view class="my_phone dis_f" v-for="(item,index) in menulist" :key="index" @click="gotmenu(index)">
					<image :src="item.image" mode=""></image>
					<p>{{item.name}}</p>
				</view>
			</view>
			<!-- 卡券 -->
			<view class="my_frist dis_f">
				<view class="fone" @click="toCard()">
					<view class="ptext">
						<p>卡券</p>
						<span>0张可用</span>
					</view>
				</view>
				<view class="ftwo" @click="toCircle()">
					<view class="ptext">
						<p>圈币</p>
						<span>2000</span>
					</view>
				</view>
				<view class="fthree" @click="toRecommend()">
					<view class="ptext">
						<p>种草</p>
						<span>2条记录</span>
					</view>
				</view>
			</view>

			<!-- 邀请 -->
			<view class="my_green dis_f">
				<p>立即邀请</p>
			</view>

			<!-- 活动订单 -->
			<view class="my_hot dis_f">
				<view class="hot" @click="toHotorder()">
					<p>活动订单</p>
					<span>查看全部订单<u-icon name="arrow-right" color='#ccc' size='12'></u-icon></span>
				</view>
				<view class="hot" @click='toShoporder()'>
					<p>商品订单</p>
					<span>查看全部订单<u-icon name="arrow-right" color='#ccc' size='12'></u-icon>
					</span>
				</view>
			</view>

			<!-- 更多服务 -->
			<p class="litt">更多服务</p>
			<view class="ix_shop index_pad dis_f">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click="toindex(item)">
					<image :src="item.image" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>

			<!-- 热门推荐 -->
			<view class="ix_block index_pad">
				<label>热门推荐</label>
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in imglist" :key="index" @click="toDetails()">
						<image :src="item.image"></image>
						<p class="ix_posi">{{item.title}}</p>
						<p class="ix_title">{{item.text}}</p>
						<p class="ix_txtgreen">草原花开</p>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import store from '@/store/index.js';
	export default {
		computed: {
			...mapState(['name']),
		},
		data() {
			return {
				lv: 3,
				menulist: [{
						name: '相册',
						image: '../../static/mine/xc.png'
					},
					{
						name: '等级',
						image: '../../static/mine/dj.png'
					},
					{
						name: '徽章',
						image: '../../static/mine/hz.png'
					},
					{
						name: '足迹',
						image: '../../static/mine/zj.png'
					}
				],
				arrlist: [{
						name: '浏览记录',
						image: '../../static/mine/lljl.png'
					},
					{
						name: '好物商城',
						image: '../../static/mine/hwsc.png'
					},
					{
						name: '补款订单',
						image: '../../static/mine/bkdd.png'
					},
					{
						name: '团队定制',
						image: '../../static/mine/tddz.png'
					},
					{
						name: '想去哪里',
						image: '../../static/mine/xqnl.png'
					},
					{
						name: '我要反馈',
						image: '../../static/mine/wyfk.png'
					},
					{
						name: '收货地址',
						image: '../../static/mine/shdz.png'
					},
					{
						name: '关于我们',
						image: '../../static/mine/gywm.png'
					},
				],
				imglist: [{
						title: '跟团-8天',
						image: '../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					},
					{
						title: '跟团-8天',
						image: '../../static/index/zheng.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					},
					{
						title: '跟团-8天',
						image: '../../static/index/zheng.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					},
					{
						title: '跟团-8天',
						image: '../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					}
				],
			};
		},
		onLoad() {

		},
		methods: {
			gotmenu(index) {
				switch (index) {
					case 0:
						this.$jump('./album')
						break;
					case 1:
						this.$jump('./Grade?lv=', 'params', 3)
						break;
					case 2:
						this.$jump('./badge')
						break;
					case 3:
						this.$jump('./footmark')
						break;
				}
			},
			toSetting() {
				this.$jump('./Setting/Setting')
			},
			toMessage() {
				this.$jump('./message/message')
			},
			toSignin() {
				this.$jump('./signin')
			},
			toguide() {
				this.$jump('./guide/guide')
			},
			toDetails() {
				this.$jump('/pages/index/Details/Details')
			},
			toCircle() {
				this.$jump('./Circle')
			},
			toCard() {
				this.$jump('./Card')
			},
			toRecommend() {
				this.$jump('./recommend')
			},
			toHotorder() {
				this.$jump('./Hotorder')
			},
			toShoporder() {
				this.$jump('./Shoporder')
			},
			toindex(e) {
				switch (e.name) {
					case '浏览记录':
						this.$jump('./menu/Browser')
						break;
					case '好物商城':
						this.$jump('./menu/HaowuMall')
						break;
					case '补款订单':
						this.$jump('./menu/Supplementary')
						break;
					case '团队定制':
						this.$jump('/pages/index/team/team')
						break;
					case '想去哪里':
						this.$jump('./menu/toWhere')
						break;
					case '我要反馈':
						this.$jump('./menu/help')
						break;
					case '收货地址':
						this.$jump('./menu/address')
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my_header {
		box-sizing: border-box;
		height: 442rpx;
		width: 100%;
		.banners {
			width: 100%;
			height: 442rpx;
		}

		.position {
			position: absolute;
			top: 0;
			left: 0;
		}

		.my_seting {
			padding-top: 60rpx;
			justify-content: space-between;

			image {
				width: 44rpx;
				height: 44rpx;
			}

			.my_set {
				image {
					margin-left: 20rpx;
				}
			}
		}

		.my_user {
			margin-top: 170rpx;

			.img {
				width: 132rpx;
				height: 132rpx;
			}

			.my_username {
				margin-left: 20rpx;
				color: white;
				font-weight: bold;
				flex-direction: column;
				justify-content: space-around;
				align-items: flex-start;

				image {
					width: 153rpx;
					height: 48rpx;
				}

				.my_rywj {
					justify-content: space-between;

					.my_jin {
						margin-left: 220rpx;
						width: 166rpx;
						height: 46rpx;
						line-height: 46rpx;
						background-color: rgba(0, 0, 0, 0.5);
						border-radius: 23rpx;
						text-align: center;
						font-weight: normal;
					}

					p {
						font-size: 24rpx;
						font-weight: 500;
					}
				}
			}
		}
	}

	.my_center {
		padding: 30rpx;

		.my_jd {
			justify-content: space-around;
			align-items: center;

			p {
				flex: 1.5;
				text-align: center;
				color: #49CAA4;
				font-size: 38rpx;

			}

			.my_txt {
				justify-content: space-between;

				p {
					font-size: 20rpx;
					font-weight: 500;
					color: #999999;
					margin-bottom: 10rpx;
				}

				.left {
					text-align: left;
				}

				.right {
					text-align: right;
				}
			}

			.my_line {
				flex: 4;
				align-items: inherit;
			}
		}
	}

	.my_menu {
		justify-content: space-around;

		.my_phone {
			width: 100rpx;
			align-items: center;
			flex-direction: column;

			p {
				margin-top: 10rpx;
				color: #666666;
				font-size: 24rpx;
			}
		}

		image {
			width: 68rpx;
			height: 68rpx;
		}
	}

	.my_frist {
		margin-top: 40rpx;
		justify-content: space-between;

		.ptext {
			padding: 40rpx 20rpx;

			span {
				display: flex;
				margin-top: 10rpx;
				font-size: 24rpx;
				color: #666666;
			}
		}

		.fone {
			width: 214rpx;
			height: 160rpx;
			background: url(@/static/mine/one.png) no-repeat;
			background-size: 100%;
		}

		.ftwo {
			width: 214rpx;
			height: 160rpx;
			background: url(@/static/mine/two.png) no-repeat;
			background-size: 100%;
		}

		.fthree {
			width: 214rpx;
			height: 160rpx;
			background: url(@/static/mine/three.png) no-repeat;
			background-size: 100%;
		}

	}

	.my_green {
		width: 100%;
		height: 120rpx;
		margin-top: 30rpx;
		background-color: #49CAA4;
		align-items: center;
		justify-content: right;

		p {
			width: 120rpx;
			height: 20rpx;
			line-height: 20rpx;
			margin-right: 20rpx;
			padding: 20rpx 20rpx;
			background-color: white;
			border-radius: 40rpx;
			font-size: 28rpx;
		}
	}

	.my_hot {
		margin-top: 30rpx;
		justify-content: space-between;

		.hot {
			width: 335rpx;
			height: 160rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 1rpx 6rpx 0rpx rgba(0, 0, 0, 0.07);
			border-radius: 20rpx;

			p {
				font-size: 30rpx;
				padding: 32rpx;
				color: #222;
			}

			span {
				display: flex;
				font-size: 24rpx;
				color: #999;
				margin-left: 150rpx;
			}
		}
	}

	.ix_shop {
		flex-wrap: wrap;
		justify-content: space-between;

		.ix_list {
			margin-top: 30rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 24%;

			image {
				width: 62rpx;
				border-radius: 50%;
				height: 62rpx;
			}

			text {
				color: #666666;
				font-size: 24rpx;
			}
		}
	}

	.litt {
		margin: 50rpx auto 30rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.ix_block {
		position: relative;
		margin-top: 60rpx;

		label {
			display: flex;
			font-weight: bold;
			font-size: 32rpx;
			margin-bottom: 30rpx;
		}

		.ix_img {
			justify-content: space-between;
			flex-wrap: wrap;

			image {
				margin: 20rpx auto 10rpx;
				width: 335rpx;
				height: 335rpx;
				border-radius: 20rpx 20rpx 0rpx 0rpx;
			}

			.ix_flexs {
				position: relative;
				width: 335rpx;
				height: auto;
			}

			.ix_posi {
				position: absolute;
				top: 20rpx;
				left: 0;
				width: 125rpx;
				height: 42rpx;
				line-height: 42rpx;
				background: #000000;
				border-radius: 20rpx 0rpx 20rpx 0rpx;
				padding: 5rpx 20rpx;
				color: white;
				text-align: center;
				opacity: 0.5;
				font-size: 22rpx;
			}

			.ix_title {
				margin: 0 auto 20rpx;
				word-wrap: normal;
				font-size: 28rpx;
			}

			.ix_txtgreen {
				width: 106rpx;
				height: 36rpx;
				color: #49CAA4;
				font-size: 22rpx;
				text-align: center;
				background: #EBFFF9;
				border-radius: 6rpx;
			}

			.ix_yellow {
				font-size: 30rpx;
				font-weight: 500;
				color: #FF4040;
			}
		}

		.ix_block_header {
			justify-content: space-between;

			.ix_icon {
				display: flex;
				align-items: center;
				color: #999999;
				font-size: 26rpx;
			}
		}

		.ix_imgplus {
			flex-direction: column;
			position: relative;

			.ix_pos_t {
				position: absolute;
				top: 40rpx;
				left: 20rpx;
				background: linear-gradient(70deg, #F7B36B 0%, #FF8F68 100%);
				border-radius: 6rpx;

				p {
					font-size: 24rpx;
					font-weight: bold;
					color: #FFFFFF;
					padding: 5rpx;
				}
			}

			.ix_posimg {
				position: absolute;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 80rpx;
				background: #000000;
				opacity: 0.5;
				border-radius: 0rpx 0rpx 20rpx 20rpx;
				display: flex;

				.ix_pos_p {
					width: 150rpx;
					height: auto;
					font-size: 24rpx;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 30rpx;
					text-align: center;
					flex-direction: column;
					justify-content: space-around;

					.ags {
						display: flex;
						justify-content: center;
					}
				}
			}

			.imgplus {
				width: 100%;
				height: 300rpx;
				margin-top: 20rpx;
			}

			.ix_bot {
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;

				.ix_imgbot {
					width: 335rpx;
					height: 300rpx;
				}

				.ix_botsub {
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.ix_pos_c {
						position: absolute;
						bottom: 20rpx;
						left: 20rpx;
					}

					.ix_posi_r {
						position: relative;
					}

					image {
						width: 335rpx;
						height: 140rpx;
					}

					p {
						font-size: 26rpx;

					}
				}

				.ix_imgbotbg {
					background: url(@/static/index/zheng.jpg);
					width: 335rpx;
					height: 300rpx;
					padding: 20rpx;
					box-sizing: border-box;

					.ix_bgfz {
						display: flex;
						align-items: center;
						margin-bottom: 40rpx;
					}

					p {
						color: white;
						font-weight: bold;
						padding: 0rpx 10rpx;
					}

					span {
						background: #FFFFFF;
						padding: 5rpx;
						border-radius: 50%;
					}

					image {
						width: 202rpx;
						height: 202rpx;
						border-radius: 20rpx;
					}
				}
			}

			.ix_background {
				margin-top: 20rpx;
				height: 300rpx;
				background: url(@/static/index/chang.jpg);
				padding: 20rpx;

				.ix_bgfz {
					display: flex;
					align-items: center;
					margin-bottom: 40rpx;
				}

				.ix_bg_img {
					display: flex;
					justify-content: space-between;
				}

				p {
					color: white;
					font-weight: bold;
					padding: 0rpx 10rpx;
				}

				span {
					display: flex;
					justify-content: center;
					width: 96rpx;
					background: #FFFFFF;
					text-align: center;
					border-radius: 16rpx;
					padding: 0rpx 10rpx;
					color: #EAC326;
				}

				image {
					width: 202rpx;
					height: 202rpx;
					border-radius: 20rpx;
				}
			}
		}
	}
</style>