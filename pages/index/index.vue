<template>
	<view>
		<view class="index_header">
			<view class="ix_headr_text">
				<p>徒步圈&两只脚户外旅行</p>
			</view>
			<view class="index_pads">
				<!-- 头部搜索框 -->
				<view class="index_seach dis_f">
					<view class="address" @click="isShow = true">
						<span >曼谷</span>
						<u-icon name="arrow-down" color="#FFFFFF" size='12'></u-icon>
					</view>
					<u-search class="input" placeholder="日照香炉生紫烟" v-model="seachValue" :showAction='false' :height='28'>
					</u-search>
				</view>
				<!-- 轮播图 -->
				<view class="Swiper">
					<u-swiper circular :list="list1" @change="e =>changeSwiper(e)" @click=""></u-swiper>
				</view>
				<view class="ix_noti dis_f">
					<view class="ix_message dis_f">
						<span>公告</span>
						<p>花满出行3月20日出行，即将...</p>
					</view>
				</view>
			</view>

			<!-- 列表渲染 -->
			<view class="ix_shop index_pads dis_f">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click='clinto(item.name)'>
					<image style="border-radius: 50%;" :src="item.image" mode=""></image>
					<text>{{item.name}}</text>
				</view>
			</view>

			<!-- 黑块 -->
			<view class="ix_shop index_pad dis_f">
				<view class="ix_model bor_r" v-for="(v,index) in modelList" :key="index">
					<image class="bor_r" :src="v.image" mode=""></image>
					<view class="ix_float">
						<text>{{v.title}}</text>
						<p>{{v.text}}</p>
					</view>
				</view>
			</view>

			<!-- 省内一天路线 -->
			<view class="ix_block index_pad">
				<label>省内一天路线</label>
				<view class="ix_subsection dis_f">
					<span :class="item.state?'check':'checks'" v-for="(item,index) in checklist" :key="index"
						@click="checkout(item)">{{item.name}}</span>
				</view>
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in imglist" :key="index">
						<image :src="item.image"></image>
						<p class="ix_posi">{{item.title}}</p>
						<p class="ix_title">{{item.text}}</p>
						<p class="ix_txtgreen">草原花开</p>
					</view>
				</view>
			</view>

			<!-- 全国精选路线 -->
			<view class="ix_block index_pad">
				<view class="ix_block_header dis_f">
					<label>全国精选路线</label>
					<view class="ix_icon">
						<span>更多</span>
						<u-icon name="arrow-right" size='12'></u-icon>
					</view>
				</view>
				<view class="ix_imgplus dis_f">
					<view class="rltw">
						<image class="imgplus bor_r" src="@/static/index/changplus.jpg"></image>
						<view class="abslt ix_botn">
							<p style="color: white;">斯里兰卡</p>
							<p style="color: white;">[夏日清爽]中部深度游</p>
						</view>
					</view>
					<view class="ix_bot">
						<image class="ix_imgbot bor_r" src="@/static/index/zheng.jpg"></image>
						<view class="abslt ix_botn">
							<p style="color: white;">斯里兰卡</p>
							<p style="color: white;">[夏日清爽]中部深度游</p>
						</view>
						<view class="ix_botsub bor_r">
							<view class="ix_posi_r">
								<image class="bor_r" src="@/static/index/chang.jpg"></image>
								<view class="ix_pos_c">
									<p style="color: white;">斯里兰卡</p>
									<p style="color: white;">[夏日清爽]中部深度游</p>
								</view>
							</view>
							<view class="ix_posi_r">
								<image class="bor_r" src="@/static/index/chang.jpg"></image>
								<view class="ix_pos_c">
									<p style="color: white;">斯里兰卡</p>
									<p style="color: white;">[夏日清爽]中部深度游</p>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 活动日历 -->
			<view class="ix_block index_pad">
				<label>活动日历</label>
				<view class="ix_imgplus dis_f">
					<view class="ix_background bor_r">
						<view class="ix_bgfz">
							<p>四月 春和日丽</p>
							<span>更多<u-icon name="arrow-right" color='#EAC326' size='12'></u-icon></span>
						</view>
						<view class="ix_bg_img">
							<image src="@/static/index/zheng.jpg"></image>
							<image src="@/static/index/chang.jpg"></image>
							<image src="@/static/index/zheng.jpg"></image>
						</view>
					</view>
					<view class="ix_bot">
						<view class="ix_imgbotbg bor_r">
							<view class="ix_bgfz">
								<p>五月 春和日丽</p>
								<span><u-icon name="arrow-right" color='#EAC326' size='12'></u-icon></span>
							</view>
							<view class="ix_five bor_r">
								<view class="ix_six">
									<p>仙居恩施清幽秘境</p>
									<u-divider color='#E6E6E6'></u-divider>
									<p>北疆大环线</p>
								</view>
							</view>
						</view>
						<view class="ix_imgbotbg bor_r">
							<view class="ix_bgfz">
								<p>六月 春和日丽</p>
								<span><u-icon name="arrow-right" color='#EAC326' size='12'></u-icon></span>
							</view>
							<view class="ix_five bor_r">
								<view class="ix_six">
									<p>独库伊昭公路</p>
									<u-divider color='#E6E6E6'></u-divider>
									<p>贵州全景大环线</p>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 火爆路线 -->
			<view class="ix_block index_pad">
				<label>火爆路线</label>
				<view class="ix_imgplus dis_f">
					<image class="imgplus bor_r" src="@/static/index/changplus.jpg"></image>
					<view class="ix_pos_t">
						<p>TOP1</p>
					</view>
					<view class="ix_posimg">
						<view class="ix_pos_p dis_f" v-for="(item,index) in datelist" :key='index'>
							<p>{{item.date}}</p>
							<p>{{item.state}}</p>
						</view>
						<view class="ix_pos_p dis_f">
							<p class="ags">更多<u-icon name="arrow-right" color='#FFFFFF' size='12'></u-icon></p>
						</view>
					</view>
				</view>

				<view class="ix_imgplus dis_f">
					<image class="imgplus bor_r" src="@/static/index/changplus.jpg"></image>
					<view class="ix_pos_t">
						<p>TOP2</p>
					</view>
					<view class="ix_posimg">
						<view class="ix_pos_p dis_f" v-for="(item,index) in datelist" :key='index'>
							<p>{{item.date}}</p>
							<p>{{item.state}}</p>
						</view>
						<view class="ix_pos_p dis_f">
							<p class="ags">更多<u-icon name="arrow-right" color='#FFFFFF' size='12'></u-icon></p>
						</view>
					</view>
				</view>

				<view class="ix_imgplus dis_f">
					<image class="imgplus bor_r" src="@/static/index/changplus.jpg"></image>
					<view class="ix_pos_t">
						<p>TOP3</p>
					</view>
					<view class="ix_posimg">
						<view class="ix_pos_p dis_f" v-for="(item,index) in datelist" :key='index'>
							<p>{{item.date}}</p>
							<p>{{item.state}}</p>
						</view>
						<view class="ix_pos_p dis_f">
							<p class="ags">更多<u-icon name="arrow-right" color='#FFFFFF' size='12'></u-icon></p>
						</view>
					</view>
				</view>
			</view>

			<!-- 户外装备 -->
			<view class="ix_block index_pad">
				<label>户外装备</label>
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in moenylist" :key="index">
						<image :src="item.image"></image>
						<p class="ix_title">{{item.text}}</p>
						<p class="ix_yellow">￥{{item.money}}.00</p>
					</view>
				</view>
			</view>
			<u-popup :round="10" :show="isShow" :closeable = 'true' @close="close" @open="open">
				<view class="ix_pop pd30">
					<p>请选择你所在的城市</p>
					<view class="dis_f ps">
						<view class="dis_f prp">
							<image src="../../static/mine/组 37.png" mode=""></image>
							<text>全国</text>
						</view>
						<view class="dis_f prp">
							<image src="../../static/mine/组 37.png" mode=""></image>
							<text>郑州</text>
						</view>
					</view>
					
					<p>华南地区</p>
					<view class="dis_f ps">
						<view class="dis_f prp" v-for="(v,index) in addresslist" :key="index">
							<image src="../../static/mine/组 37.png" mode=""></image>
							<text>{{v.address}}</text>
						</view>
					</view>
					
					<p>华东地区</p>
					<view class="dis_f ps">
						<view class="dis_f prp">
							<image src="../../static/mine/组 37.png" mode=""></image>
							<text>上海</text>
						</view>
						<view class="dis_f prp">
							<image src="../../static/mine/组 37.png" mode=""></image>
							<text>杭州</text>
						</view>
					</view>
				</view>
				
			</u-popup>
			<view style="height: 100rpx;">
				
			</view>


		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachValue: '',
				list1: [ //轮播图
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				checklist: [{
						name: '当季热门',
						state: true
					},
					{
						name: '好评榜单',
						state: false
					},
					{
						name: '最新上架',
						state: false
					},
				],
				arrlist: [{
						name: '周边路线',
						image: '../../static/index/zblx.jpg'
					},
					{
						name: '国内精选',
						image: '../../static/index/gnjx.jpg'
					},
					{
						name: '国外精选',
						image: '../../static/index/gwjx.jpg'
					},
					{
						name: '活动日历',
						image: '../../static/index/hdrl.jpg'
					},
					{
						name: '好物商城',
						image: '../../static/index/hwsc.jpg'
					},
					{
						name: '必玩榜单',
						image: '../../static/index/bwbd.jpg'
					},
					{
						name: '团队定制',
						image: '../../static/index/tddz.jpg'
					},
					{
						name: '亲子路线',
						image: '../../static/index/qzlx.jpg'
					},
					{
						name: '城市玩家',
						image: '../../static/index/cswj.jpg'
					},
					{
						name: '联系客服',
						image: '../../static/index/lxkf.jpg'
					},
				],
				modelList: [{
						title: '本下周活动',
						text: '说走就走',
						image: '../../static/index/one.jpg'
					},
					{
						title: '五一假期',
						text: '出行好时光',
						image: '../../static/index/two.jpg'
					},
					{
						title: '春暖花开',
						text: '赏花正当时',
						image: '../../static/index/three.jpg'
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
				datelist: [{
						date: '3月25日',
						state: "已成行"
					},
					{
						date: '3月26日',
						state: "已成行"
					},
					{
						date: '3月27日',
						state: "已成行"
					},
					{
						date: '3月28日',
						state: "已成行"
					},
				],
				moenylist: [{
						image: '../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日',
						money: '60'
					},
					{
						image: '../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日',
						money: '75'
					},
				],
				isShow: false,
				addresslist:[
					{address:'广州'},
					{address:'深圳'},
					{address:'佛山'},
					{address:'东莞'},
					{address:'中山'},
					{address:'江门'},
				]
			}
		},
		onLoad() {

		},
		methods: {
			//轮播图修改
			changeSwiper(e) {

			},
			click() {
				// 轮播图点击
			},
			checkout(e) {
				console.log(e) //切换
				this.checklist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
			},
			open() {

			},
			close() {
				this.isShow = false
			},
			clinto(v){
				switch(v){
					case '周边路线':
						this.$jump('./ambitus');
						break;
					case '国内精选':
						this.$jump('./domestic');
						break;
					case '活动日历':
						this.$jump('./dateHot');
						break;
					case '团队定制':
						this.$jump('./team');
						break;
					case '必玩榜单':
						this.$jump('./mustPlay');
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index_header {
		width: 100%;
		height: 1500rpx;
		padding-top: 80rpx;
		background: url(@/static/index/banner.jpg) no-repeat;
		background-size: 100% 740rpx;
	}

	.ix_headr_text {
		margin-bottom: 20rpx;
		height: 60rpx;
		text-align: center;

		p {
			font-size: 34rpx;
			color: white;
		}
	}

	.index_pad {
		padding: 30rpx;
	}

	.index_pads {
		padding: 0rpx 30rpx 20rpx;
	}

	.index_seach {
		width: 100%;
		align-items: center;

		.address {
			display: flex;
			justify-content: space-evenly;
			flex: 1;
			text-align: center;
			color: white;
		}

		.input {
			flex: 4;
		}
	}

	.Swiper {
		padding: 40rpx 0;
	}

	.ix_noti {
		height: 60rpx;
		background-color: white;
		border-radius: 16rpx;

		.ix_message {
			justify-content: start;
			align-items: center;
			text-align: center;
			padding: 20rpx 40rpx;

			p {
				font-size: 28rpx;
			}
		}

		span {
			color: #49CAA4;
			font-weight: 900;
			font-size: 28rpx;
		}

		p {
			padding-left: 20rpx;
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
			width: 19%;

			image {
				width: 62rpx;
				height: 62rpx;
			}

			text {
				margin-top: 10rpx;
				color: #666666;
				font-size: 24rpx;
			}
		}
	}

	.ix_model {
		position: relative;
		box-sizing: border-box;
		width: 215rpx;
		height: 180rpx;
		background-color: #999999;
		color: white;

		image {
			width: 215rpx;
			height: 180rpx;
		}

		span {
			font-size: 32rpx;
			font-weight: 600;
		}

		p {
			margin-top: 20rpx;
			font-size: 26rpx;
		}

		.ix_float {
			position: absolute;
			top: 20rpx;
			left: 20rpx;

			text {
				font-size: 32rpx;
			}
		}
	}

	.ix_block {
		position: relative;

		label {
			font-weight: 900;
			font-size: 34rpx;
		}

		.ix_subsection {
			margin: 40rpx auto;
			justify-content: space-around;
			align-items: center;

			span {
				display: block;
			}

			.check {
				box-sizing: border-box;
				display: block;
				background-color: #49CAA4;
				padding: 10rpx 30rpx;
				color: white;
				border-radius: 8rpx;
			}

			.checks {
				box-sizing: border-box;
				display: block;
				padding: 10rpx 30rpx;
				border-radius: 8rpx;
			}
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
				background: #000000;
				border-radius: 20rpx 0rpx 20rpx 0rpx;
				padding: 5rpx 20rpx;
				color: white;
				text-align: center;
				opacity: 0.5;
				font-size: 28rpx;
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
				background: url(@/static/index/backg.jpg);
				background-size: 120%;
				padding: 20rpx;

				.ix_bgfz {
					display: flex;
					align-items: center;
					margin-bottom: 40rpx;
					font-size: 28rpx;

					span {
						font-size: 24rpx;
					}
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

	.ix_five {
		width: 295rpx;
		height: 180rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;

		.ix_six {
			width: 240rpx;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;

			p {
				text-align: left;
				font-size: 28rpx;
				color: black !important;
			}
		}
	}

	.ix_botn {
		left: 20rpx;
		bottom: 20rpx;
		font-size: 26rpx;
	}
	.ix_pop{
		height: 1000rpx;
		p{
			margin: 40rpx auto 20rpx;
			font-size: 32rpx;
			font-weight: bold;
		}
		image{
			width: 100rpx;
			height: 100rpx;
		}
		.ps{
			flex-wrap: wrap;
			.prp{
				margin: 10rpx 0;
				width: 20%;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
		
	}
</style>