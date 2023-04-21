<template>
	<view class="ds_body">
		<view class="ds_banner posir">
			<swiper class="swiper"  circular :indicator-dots="true" :autoplay="false"
				:duration="500">
				<swiper-item v-for="(item,index) in swiperlist" :key="index">
					<image :src="item" mode=""></image>
				</swiper-item>
				
			</swiper>
			<p class="swiperposi posia">
				{{this.swiperlist.length}}张照片
			</p>
		</view>
		<view class="pd30">
			<p class="header_title">
				郑州2日游玉米楼-夜景如梦
			</p>
			<label class="red">2000元/人</label>
			<view class="ds_user dis_f">
				<image src="@/static/trends/user.png" mode=""></image>
				<p class="dis_f flex_c">
					<text>领队人</text>
					<text>评分：4.9（1000人点评）</text>
				</p>
				<view class="ds_love dis_f flex_c alitmc">
					<image v-show="!toshow" @click="toshow = !toshow" src="@/static/trends/ax.png" mode=""></image>
					<image v-show="toshow" @click="toshow = !toshow" src="@/static/image/trends/zan.png" mode="">
					</image>
					<label>种草</label>
				</view>
			</view>

			<p class="ds_lv">难度:休闲深度游<label>+182成长值</label></p>
			<p class="ds_lv">集合：西藏</p>
			<p class="ds_lv mrtop dis_f jscb" @click='isShow1 = true'>
				<text>当地集合</text>
				<u-icon name="arrow-right" color='#acacac' size='16'></u-icon>
			</p>
			<!-- 选择框 -->
			<view class="ts_tbs dis_f">
				<p :class="v.state?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v,index)">
					{{v.name}}
				</p>
			</view>
			<view class="dis_f">
				<view @click="Datetbs(item)" :class="item.state?'ds_datehot':'bgs ds_datehot'"
					v-for="(item,index) in datelist" :key="index" class="dis_f alitmc flex_c jscc">
					<p>{{item.date}}</p>
					<text class="one" v-if="item.static == 1">已满员</text>
					<text class="two" v-else-if="item.static == 2">已成行</text>
					<text class="three" v-else>火热报名中</text>
				</view>
			</view>

			<p class="ds_lv mrtop dis_f jscb noborder">
				<text @click='isShow = true'>我要定制</text>
				<u-icon @click='isShow = true' name="arrow-right" color='#acacac' size='16'></u-icon>
			</p>

			<p class="ds_lv mrtop dis_f jscb noborder">
				<view>
					<text>活动分销</text><label>分销成功提成3%</label>
				</view>
				<view @click="toRestore" class="dis_f image alitmc">
					<image src="@/static/image/Details/wen.jpg" mode=""></image>
					<text>分销说明</text>
				</view>
			</p>
		</view>
		<!-- 已参加的人 -->
		<view class="ams">
			<view class="dsimg">
				<p class="ds_lv mrtop dis_f jscb">
					<text>已参加的人(8人成行)</text>
					<view class="dis_f" @click="toCratic()">
						<text>总共12/20人</text>
						<u-icon name="arrow-right" color='#acacac' size='16'></u-icon>
					</view>
				</p>
				<view class="os_img dis_f">
					<view v-for="(v,i) in list" :key="i" class="sio">
						<image src="@/static/trends/user.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 切换 -->
		<view class="content">
			<!-- tabs -->
			<view class="ts_tbs dis_f jscb">
				<p :class="v.state?'green':''" v-for="(v,index) in CheckTablist" :key="index"
					@click="CheckTab(v,index)">
					{{v.name}}
				</p>
			</view>
			<!-- 活动详情 -->
			<view v-show="CheckTablist[0].state" class="hotDetiails pd30">
				<image src="/static/index/chang.jpg" mode=""></image>
			</view>
			<!-- 行程与准备 -->
			<view v-show="CheckTablist[1].state" class="reday pd30">
				<p class="tit">详细行程 (共四天)</p>
				<p class="ftit">
					<label>(3月16日)</label>
					全国各地-贵阳（集合日）
				</p>

				<view class="dis_f">
					<p class="left">上午</p>
					<view class="leftbor">
						<p class="dis"></p>
						<p class="content">全国各地出发，开启一路向黔的浪漫樱花之旅早到的小伙伴上午可以去黔灵山看看黔金丝猴，坐个缆车上山俯瞰贵阳新城,感受下贵阳人民的后花园</p>
					</view>
				</view>
				<view class="dis_f">
					<p class="left">下午</p>
					<view class="leftbor">
						<p class="dis"></p>
						<p class="content">
							来到贵阳不可不去的是贵州省博,不管任何年龄段的伙伴都能从中找到乐趣!文化的、历史的、收藏的慎物馆是保护和和传承人类文明的重要殿堂.我们会邀约讲解带上大家在此参观1.5-2小时了解贵州的历史文化.而后可去到最美网红书店钟书阁(对博物馆实在不感兴趣的伙伴可以自行去到黔灵山/甲秀楼.欣赏贵州地标)
						</p>
					</view>
				</view>
				<view class="dis_f">
					<p class="left">晚上</p>
					<view class="leftbor">
						<p class="dis"></p>
						<p class="content">
							来到贵阳不可不去的是贵州省博,不管任何年龄段的伙伴都能从中找到乐趣!文化的、历史的、收藏的慎物馆是保护和和传承人类文明的重要殿堂.我们会邀约讲解带上大家在此参观1.5-2小时了解贵州的历史文化.而后可去到最美网红书店钟书阁
						</p>
					</view>
				</view>

				<view class="dis_f">
					<p class="left">餐饮</p>
					<view class="leftbor">
						<image src="@/static/image/Details/eat.jpg" mode=""></image>
						<p class="content">三餐自理</p>
					</view>
				</view>

				<view class="dis_f">
					<p class="left">住宿</p>
					<view class="leftbor">
						<image src="@/static/image/Details/shuip.jpg" mode=""></image>
						<p class="content">精品酒店</p>
					</view>
				</view>

				<view class="dis_f">
					<p class="left">交通</p>
					<view class="leftbor noborder">
						<image src="@/static/image/Details/bus.jpg" mode=""></image>
						<p class="content">高铁5小时</p>
					</view>
				</view>
			</view>

			<!-- 费用须知 -->
			<view class="notice pd30" v-show="CheckTablist[2].state">
				<text class="tit">费用须知</text>
				<p>本活动谢绝孕妇参加;</p>
				<p>本活动谢绝携带未报名的婴幼儿参加:</p>
				<p>本活动谢绝私自替员参加活动:</p>
				<p>本活动谢绝携宠物参加</p>
				<p>本活动可报名的年龄范围为5-65岁</p>
			</view>

			<!-- 最新评价 -->
			<view class="notice pd30" v-show="CheckTablist[3].state">
				<text class="tit">最新评价</text>
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

			<view class="btn dis_f">
				<view class="dis_f flex_c alitmc img">
					<image src="@/static/image/Details/home.jpg" mode=""></image>
					<p>更多活动</p>
				</view>
				<view class="dis_f flex_c alitmc img " @click="isShow2 = true">
					<image src="@/static/image/Details/mine.jpg" mode=""></image>
					<p>进群</p>
				</view>
				<text @click="toApply()">立即报名</text>
			</view>
		</view>

		<!-- 我要定制 -->
		<u-popup :show="isShow" mode="bottom" :closeable='true' @close="popClose" @open="popOpen">
			<view class="popViews pd30">
				<p class="Poptitle">想要定制活动吗?</p>
				<p class="ider">方法一：长按识别二维码，添加策划师企业微信</p>
				<image
					src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
					mode=""></image>
				<p class="ider">方法二：留下你的联系方式，我们会与你联系</p>

				<input type="text" class="wx" placeholder="联系电话/微信号">
				<view class="dis_f twoipt jscb">
					<input class="names" type="text" placeholder="如何称呼您？">
					<input class="names" type="number" placeholder="出行人数是">
				</view>
				<p class="popbtn" @click='Popbtn()'>提交</p>
			</view>
		</u-popup>
		<!-- 当地集合 -->
		<u-popup :show="isShow1" mode="bottom" :closeable='true' @close="popClose1" @open="popOpen1">
			<view class="ix_pop pd30">
				<p>出发城市选择</p>
				<view class="dis_f ps">
					<view class="dis_f prp" v-for="(item,index) in addList" :key="index" @click="ckaddress(item)">
						<image src="@/static/trends/user.png" mode=""></image>
						<image v-show="item.state" class="position" src="@/static/image/Details/success.png" mode="">
						</image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 进群 -->
		<u-popup :show="isShow2" mode="center" :round="10" :closeable='true' @close="popClose2" @open="popOpen2">
			<view class="popView pd30">
				<image
					src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
					mode=""></image>
				<p class="ds_title">欢迎长按二维码</p>
				<p class="ds_title mb20">加入天山杏花活动群</p>
				<view class="bom">
					<text>这是公开接受咨询的活动群，温馨提醒大家：</text>
					<text>1、请谨慎对待群内其他用户私加好友的请求;</text>
					<text>2、勿向陌生人转账，活动报名付费都是通过官方公众号或APP完成。</text>
				</view>
			</view>
		</u-popup>
		
		<view class="fixed">
			<u-icon @click='toback' name="arrow-left" size='20' color='#FFFFFF'></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperlist:['../../../static/index/zheng.jpg','../../../static/index/chang.jpg'],
				toshow: false,
				list: [1, 2, 3, 4, 5],
				count: 5, //评分
				value: 4, //评分
				isShow: false,
				isShow1: false,
				isShow2: false,
				tablist: [{
						name: '3月',
					},
					{
						name: '4月',
					}
				],
				addList: [{
						name: '北京'
					}, {
						name: '上海'
					},
					{
						name: '广州'
					},
					{
						name: '曹县'
					}
				],
				CheckTablist: [{
						name: '活动详情',
						state: true
					},
					{
						name: '行程与准备',
						state: false
					},
					{
						name: '费用须知',
						state: false
					},
					{
						name: '评价',
						state: false
					}
				],
				datelist: [{
						date: '3/25 周六~04/01',
						static: '1'
					}, {
						date: '3/25 周六~04/01',
						static: '2'
					},
					{
						date: '3/25 周六~04/01',
						static: '3'
					},
				]
			}
		},
		onLoad(option) {
			console.log(option);
			this.tablist.forEach(function(item, index) {
				item.state = false
			})
			this.tablist[0].state = true

			this.datelist.forEach(function(item, index) {
				item.state = false
			})
			this.datelist[0].state = true

			this.addList.forEach(function(item, index) {
				item.state = false
			})
			this.addList[0].state = true
		},
		methods: {
			chetbs(e, index) {
				this.tablist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				this.$forceUpdate()
			},
			Datetbs(e) {
				this.datelist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				this.$forceUpdate()
			},
			CheckTab(e, index) {
				this.CheckTablist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				this.$forceUpdate()
			},
			popClose() {
				this.isShow = false
			},
			popOpen() {

			},
			popClose1() {
				this.isShow1 = false
			},
			popOpen1() {

			},
			popClose2() {
				this.isShow2 = false
			},
			popOpen2() {

			},
			toCratic() {
				this.$jump('./Cratic')
			},
			toApply() {
				this.$jump('./Apply')
			},
			Popbtn() {
				this.isShow = false;
				uni.showToast({
					title: '提交成功',
					icon: 'none'
				});
			},
			ckaddress(e) {
				this.addList.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				this.$forceUpdate()
			},
			toback(){
				uni.navigateBack()
			},
			toRestore(){
				this.$jump('/pages/retail/restore')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ds_banner {
		width: 100%;
		height: 494rpx;
		image {
			width: 100%;
			height: 494rpx;
		}
		.swiper{
			width: 100%;
			height: 494rpx;
		}
		.swiperposi{
			top: 60rpx;
			right: 30rpx;
			z-index: 99;
			color: red;
			background-color: rgba(32, 32, 32, .5);
			padding:8rpx 20rpx;
			border-radius: 32rpx;
			font-size: 26rpx;
			color: #FFFFFF;
		}
	}

	.header_title {
		font-size: 30rpx;
		font-weight: 500;
		color: #222222;
		margin: 20rpx 0;
	}

	.red {
		font-size: 30rpx;
		font-weight: bold;
		color: #FF4040;
	}

	.ds_user {
		margin: 20rpx 0;

		image {
			width: 100rpx;
			height: 100rpx;
		}

		p {
			margin-left: 20rpx;
			justify-content: space-around;
		}

		text:first-child {
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		text {
			font-size: 22rpx;
			font-weight: 500;
			color: #999999;
		}

		.ds_love {
			margin-left: 240rpx;

			image {
				width: 40rpx;
				height: 40rpx;
			}

			label {
				font-size: 26rpx;
				font-weight: 500;
				color: #222222;
			}
		}
	}

	.ds_lv {
		margin: 10rpx 0;
		font-size: 30rpx;
		font-weight: 500;
		color: #222222;

		label {
			margin-left: 20rpx;
			color: #FF8D1A;
		}
	}

	.mrtop {
		margin-top: 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #E6E6E6;
	}


	.ds_datehot {
		width: 212rpx;
		height: 112rpx;
		background: #E1FFF6;
		border: 1px solid #49CAA4;
		border-radius: 10rpx;
		text-align: center;
		margin-right: 20rpx;

		p {
			font-size: 22rpx;
			font-weight: 500;
			color: #49CAA4;
		}

		text {
			font-size: 28rpx;
			font-weight: 500;
		}

		.one {
			color: #49CAA4;
		}

		.two {
			color: #FF8D1A;
		}

		.three {
			color: #FF482A;
		}

	}

	.bgs {
		background-color: #F7F7F7;
		border: 1px solid #F7F7F7;

		p {
			font-size: 22rpx;
			font-weight: 500;
			color: #666;
		}

		.one {
			color: #49CAA4;
		}

		.two {
			color: #FF8D1A;
		}

		.three {
			color: #FF482A;
		}
	}

	.noborder {
		border: none !important;

		label {
			color: #ff4a2d;
		}

		image {
			width: 30rpx;
			height: 30rpx;
		}

		.image {
			text {
				margin-left: 10rpx;
			}
		}
	}

	.ams {
		height: 350rpx;
		background-color: #fafafa;
		padding: 30rpx 0;
		box-sizing: border-box;

		.dsimg {
			padding: 30rpx;
			background-color: white;
			height: 290rpx;
			box-sizing: border-box;
		}

		.os_img {
			width: 100%;
			margin: 30rpx auto;

			.sio {
				width: 24%;
				text-align: center;
			}

			image {
				width: 100rpx;
				height: 100rpx;
			}
		}
	}

	.ts_tbs {
		p {
			padding: 20rpx;
			font-size: 28rpx;
		}

		.green {
			color: #49CAA4;
		}
	}

	.content {}

	.hotDetiails {
		margin: 20rpx 0;

		image {
			width: 100%;
			height: 812rpx;
		}
	}

	.btn {
		margin-top: 40rpx;
		padding-bottom: 60rpx;
		justify-content: space-around;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);
		padding-top: 20rpx;
		padding-left: 20rpx;

		.img {
			flex: 1;

		}

		image {
			width: 40rpx;
			height: 40rpx;
		}

		p {
			font-size: 22rpx;
			font-weight: 500;
			color: #222222;
		}

		text {
			display: block;
			margin-right: 20rpx;
			width: 346rpx;
			height: 80rpx;
			background: #49CAA4;
			border-radius: 40rpx;
			color: white;
			line-height: 80rpx;
			text-align: center;
			font-size: 28rpx;
		}
	}

	.reday {
		.tit {
			margin: 30rpx 0 20rpx;
			padding-left: 10rpx;
			border-left: 2px solid #49CAA4;
			font-size: 30rpx;
			height: 30rpx;
			line-height: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		.ftit {
			margin: 20rpx 0 30rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #222222;

			label {
				font-size: 24rpx;
				font-weight: 500;
				color: #222222;
				margin-right: 20rpx;
			}
		}
	}

	.left {
		font-size: 28rpx;
		width: 400rpx;
	}

	.leftbor {
		border-left: 1px solid #E6E6E6;
		padding-left: 50rpx;
		position: relative;
		height: auto;

		image {
			width: 32rpx;
			height: 32rpx;
			position: absolute;
			top: 5rpx;
			left: -16rpx;
		}

		.dis {
			position: absolute;
			top: 0rpx;
			left: -20rpx;
			width: 20rpx;
			height: 20rpx;
			background: #49CAA4;
			border: 5px solid #CFFFF1;
			border-radius: 50%;
		}

		.content {
			width: 520rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #666666;
			padding-bottom: 50rpx;
		}
	}

	.tit {
		display: block;
		margin: 40rpx 0 20rpx;
		padding-left: 10rpx;
		border-left: 2px solid #49CAA4;
		font-size: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-weight: 500;
		color: #222222;
	}

	.notice {
		max-height: 300px; //设置最大的高度
		overflow: auto; // 超出这个最大高度的数据，会被隐藏起来，上下滑动
		overflow-x: hidden; //隐藏x轴滚动条

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

	.popViews {
		height: 1078rpx;
		text-align: center;

		.Poptitle {
			margin: 40rpx auto;
			font-size: 36rpx;
			font-weight: 500;
			color: #000000;
		}

		.ider {
			font-size: 28rpx;
			font-weight: 500;
			color: #000000;
			text-align: left;
		}

		image {
			width: 228rpx;
			height: 228rpx;
			margin: 40rpx auto;
		}

		.wx {
			box-sizing: border-box;
			margin: 50rpx auto 20rpx;
			width: 580rpx;
			height: 92rpx;
			background: #F6F7F9;
			border-radius: 20rpx;
			text-align: left;
			padding-left: 20rpx;
			font-size: 28rpx;
		}

		.twoipt {
			width: 580rpx;
			margin: 0 auto;
			text-align: left;

			.names {
				font-size: 28rpx;
				box-sizing: border-box;
				padding-left: 20rpx;
				width: 280rpx;
				height: 92rpx;
				background: #F6F7F9;
				border-radius: 20rpx;
			}
		}

		.popbtn {
			width: 580rpx;
			height: 92rpx;
			margin: 40rpx auto;
			background: #49CAA4;
			border-radius: 46rpx;
			color: white;
			line-height: 92rpx;
			text-align: center;
		}
	}

	.ix_pop {
		height: 317rpx;

		p {
			margin: 40rpx auto 20rpx;
			font-size: 32rpx;
			font-weight: bold;
		}

		image {
			width: 100rpx;
			height: 100rpx;
		}

		.ps {
			flex-wrap: wrap;

			.prp {
				margin: 10rpx 0;
				width: 20%;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
			}
		}

		.position {
			position: absolute;
			right: 10rpx;
			top: 0;
			width: 32rpx;
			height: 32rpx;
		}

	}

	.popView {
		width: 600rpx;
		height: 620rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		text-align: center;

		image {
			margin: 40rpx auto;
			width: 258rpx;
			height: 258rpx;
		}

		.ds_title {
			font-size: 28rpx;
			font-weight: 500;
			color: #999999;
		}

		.bom {
			padding-top: 20rpx;
			border-top: 1px solid #E6E6E6;
		}

		text {
			text-align: left;
			display: block;
			font-size: 24rpx;
			font-weight: 500;
			color: #49CAA4;
		}
	}
	.fixed{
		position: fixed;
		top: 80rpx;
		left: 20rpx;
	}
</style>