<template>
	<view class="se_body">
		<view class="minebanner pd30">
			<view class="dis_f mine">
				<image @click="toUser" src="@/static/trends/user.png" mode=""></image>
				<view class="sp dis_f">
					<view>
						<p>一个阳光明媚的人</p>
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

		<view class="pd30 ge_sign">
			<p>好像，所有我带过的队员，对我唯一的评价，都是长得帅
				嗯，应该就是这样了</p>
			<view class="dis_f">
				<view class="menu dis_f flex_c alitmc" @click="toWallet()">
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
					<p>162</p>
					<text>带队</text>
				</view>
				<view class="hot">
					<p>4.29</p>
					<text>评分</text>
				</view>
				<view class="hot">
					<p>10</p>
					<text>关注</text>
				</view>
				<view class="hot">
					<p>1993</p>
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
				<view class="shaky pd30" v-for="(v,i) in list" :key="i">
					<view class="shaky_banner">
						<p class="shaky_position">主题</p>
						<image src="@/static/index/chang.jpg" mode=""></image>
					</view>
					<view class="shaky_content">
						<p class="shaky_tit">亭可马里季斯里兰卡纯玩9天</p>
						<view class="dis_f jscb alitmc shaky_label">
							<text class="shaky_text">07月21日（周五）出发8天</text>
							<label>报名中</label>
						</view>
					</view>
				</view>
				<p class="pd30 tis">已结束的活动</p>
				<view class="pd30">
					<view class="shaky_bot dis_f posir" v-for="(v,index) in list" :key="index">
						<image class="bor_r" src="@/static/index/zheng.jpg" mode=""></image>
						<view class="dis_f flex_c ml20">
							<p class="shaky_position">主题</p>
							<p>亭可马里季斯里兰卡纯玩9天</p>
							<text>07月21日（周五）出发8天</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 带队评分 -->
			<view class="notice pd30" v-show="list[1].state">
				<view class="new" v-for="(v,index) in list" :key="index">
					<view class="dis_f">
						<view class="user_img dis_f flex_c alitmc">
							<image src="@/static/trends/user.png" mode=""></image>
							<text class="username">清天</text>
						</view>
						<text class="content">
							路线:
							作为亮点和卖点，11号出发看不到平坝樱花还是很遗憾，虽然当天额外安排了乌当的早樱和白玉兰。另外安顺的云峰堡屯也在整修，除了油菜花其实并没有什么好玩和好看的。所以路线满意度打了个折。领队十一热情友好，很会拍照，旅程结束还很贴心地打印了个人照给我们留念
						</text>
					</view>
					<view class="rate">
						<u-rate readonly :count="count" v-model="value"></u-rate>
						<text class="nstit">03-10出发 领队：李欣</text>
					</view>
				</view>
			</view>


			<!-- 带队相册 -->
			<view class="pd30 album dis_f" v-show="list[2].state">
				<view :class="'c'+((index%16)+1)" class="pddb" v-for="(v,index) in lists" :key="index">
					<image  :src="v" mode="" @click="$Resize(v)">
					</image>
				</view>
			</view>
			
			<!-- 个人动态 -->
			<view v-show="list[3].state">
				<view class="cont pd30 dis_f" v-for="(item,index) in list1" :key="index">
					<p><label>{{item.day}}</label>/{{item.mone}}月</p>
					<view class="is">
						<view class="right" >
							<image  @click='$Resize(v)' v-for="(v,i) in item.img" :key="i" :src="v" mode=""></image>
							
						</view>
						<view class="io">
							<p>{{item.cont}}</p>
						</view>
						<view class="dis_f plq">
							<image class="sn" src="@/static/trends/pl.png" mode=""></image>
							<view class="dis_f ssss">
								<image src="@/static/trends/ax.png" mode=""></image>
								<span style="margin-left: 10rpx;color:#666">99</span>
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
				isCare:false,
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
				list1: [
					{
						mone: '9',
						day: '14',
						img: [
							'../../../static/index/zheng.jpg',
							'../../../static/index/zheng.jpg',
						],
						cont: "分币不掏就是转，主打的就是一个陪伴。"
					},
					{
						mone: '9',
						day: '13',
						img: [
							'../../../static/index/zheng.jpg',
							'../../../static/index/zheng.jpg',
							'../../../static/index/zheng.jpg',
							'../../../static/index/zheng.jpg',
						],
						cont: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
					},
				],
				lists: [
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
					'../../../static/index/zheng.jpg',
					'../../../static/index/one.jpg',
				]
			}
		},
		methods: {
			chelist(item) {
				this.list.forEach((v, index) => {
					v.state = false
				})
				this.list[item.index].state = true
			},
			toWallet(){
				this.$jump('./wallet')
			},
			toWipeout(){
				this.$jump('./Wipeout')
			},
			toconcat(){
				this.$jump('../inchecken')
			},
			toUser(){
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
		padding-top: 40rpx;
	}

	.dos {
		margin: 20rpx 30rpx 0;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #e6e6e6;

		.hot {
			width: 25%;
			text-align: center;
			p {
				font-size: 40rpx;
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
		justify-content: space-around;
		flex-wrap: wrap;

		image {
			border-radius: 20rpx;
		}
	}

	.c1 {
		margin: 10rpx 0;
		width: 450rpx;
		height: 450rpx;
		image{
			width: 450rpx;
			height: 450rpx;
		}
	}
	.c2 {
		margin: 10rpx 0;
		width: 210rpx;
		height: 450rpx;
		overflow: hidden;
		position: relative;
		overflow: hidden;
		border-radius: 20rpx;
		image{
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
		width: 210rpx;
		height: 210rpx;
		image{
			width: 210rpx;
			height: 210rpx;
		}
	}
	.c9 {
		margin: 10rpx 0;
		width: 210rpx;
		height: 450rpx;
		overflow: hidden;
		position: relative;
		overflow: hidden;
		border-radius: 20rpx;
		image{
			 position: absolute;
			 top: 50%;
			 left: 50%;
			 transform: translate(-50%, -50%);
		}
	}
	
	.c10 {
		margin: 10rpx 0;
		width: 450rpx;
		height: 450rpx;
		image{
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
		width: 210rpx;
		height: 210rpx;
		image{
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
	.is{
		// margin-left: 20rpx;
	}
</style>