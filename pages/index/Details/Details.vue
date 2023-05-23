<template>
	<view class="ds_body">
		<view class="ds_banner posir">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="false" :duration="500">
				<swiper-item @click="$Resize(swiperlist,index)" v-for="(item,index) in swiperlist" :key="index">
					<image :src="item" mode=""></image>
				</swiper-item>
			</swiper>
			<p class="swiperposi posia">
				{{this.swiperlist.length}}张照片
			</p>
		</view>
		<view class="pd30">
			<p class="header_title">
				{{detail.title}}
			</p>
				<label class="red">{{price}}元/人</label>
			<view class="ds_user dis_f">
				<image :src="avatar" mode=""></image>
				<p class="dis_f flex_c">
					<text>{{nickname}}</text>
					<text>评分：{{grade}}（{{grade_number}}人点评）</text>
				</p>
				<view class="ds_love dis_f flex_c alitmc" @click="tolove">
					<image v-show="!detail.is_attention" src="@/static/trends/ax.png" mode=""></image>
					<image v-show="detail.is_attention" src="@/static/image/trends/zan.png" mode="">
					</image>
					<label>种草</label>
				</view>
			</view>

			<p class="ds_lv">难度:{{detail.difficulty_level}}<label>+{{detail.exp}}成长值</label></p>
			<p class="ds_lv">集合：{{venue}}</p>
			<p class="ds_lv mrtop dis_f jscb" @click='isShow1 = true'>
				<text>{{setof}}集合</text>
				<u-icon name="arrow-right" color='#acacac' size='16'></u-icon>
			</p>
			<!-- 选择框 -->
			<view class="ts_tbs dis_f">
				<p v-if="!(v.data == '')" :class="curry == index ?'green':''" v-for="(v,index) in detail.team"
					:key="index" @click="chetbs(v,index)">
					{{v.month}}月
				</p>
			</view>
			<view class="dis_f" v-if="detail.team">
				<view @click="Datetbs(item,index)" :class="teamcurry == index ?'ds_datehot':'bgs ds_datehot'"
					v-for="(item,index) in detail.team[curry].data" :key="index" class="dis_f alitmc flex_c jscc">
					<p>{{item.time_interval}}</p>
					<text class="three" v-if="item.status == 0">火热报名中</text>
					<text class="one" v-else-if="item.status == 1">即将成团</text>
					<text class="two" v-else-if="item.status == 2">已成团</text>
					<text class="two" v-else-if="item.status == 3">已满员</text>
				</view>
			</view>

			<p class="ds_lv mrtop dis_f jscb noborder">
				<text @click='isShow = true'>我要定制</text>
				<u-icon @click='isShow = true' name="arrow-right" color='#acacac' size='16'></u-icon>
			</p>

			<!-- <p class="ds_lv mrtop dis_f jscb noborder">
				<view>
					<text>活动分销</text><label>分销成功提成3%</label>
				</view>
				<view @click="toRestore" class="dis_f image alitmc">
					<image src="@/static/image/Details/wen.jpg" mode=""></image>
					<text>分销说明</text>
				</view>
			</p> -->
		</view>
		<!-- 已参加的人 -->
		<view class="ams" v-if="min">
			<view class="dsimg">
				<p class="ds_lv mrtop dis_f jscb" v-if="detail.team">
					<text>已参加的人({{detail.team[curry].data[teamcurry].minimum_people_number}}人成行)</text>
					<view class="dis_f" @click="toCratic(users)">
						<text>总共{{detail.team[curry].data[teamcurry].people_count}}/{{detail.team[curry].data[teamcurry].maximum_people_number}}人</text>
						<u-icon name="arrow-right" color='#acacac' size='16'></u-icon>
					</view>
				</p>
				<view class="os_img dis_f" v-if="users">
					<view v-if="i<5" v-for="(v,i) in users" :key="i" class="sio">
						<image :src="v.avatar" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 切换 -->
		<view class="content">
			<!-- tabs -->
			<view class="ts_tbs dis_f jscb">
				<p :class="tabcurry == index?'green':''" v-for="(v,index) in CheckTablist" :key="index"
					@click="CheckTab(v,index)">
					{{v}}
				</p>
			</view>
			<!-- 活动详情 -->
			<view v-show="tabcurry == 0" class="hotDetiails pd30">
				<!-- <image src="/static/index/chang.jpg" mode=""></image> -->
				<text class="tit">活动详情</text>
				<u-parse :content="detail.trip_content"></u-parse>
			</view>
			<!-- 行程与准备 -->
			<view v-show="tabcurry == 1" class="reday pd30">
				<p class="tit" v-if="detail.journey_content">详细行程 (共{{detail.journey_content.length}}天)</p>
				<view v-for="(item,index) in detail.journey_content" :key="index">
					<p class="ftit">
						<label>({{item.day}})</label>
						{{item.title}}
					</p>

					<view v-if='item.all'>
						<view class="dis_f">
							<p class="left">全天</p>
							<view class="leftbor">
								<p class="dis"></p>
								<p class="content">{{item.all}}</p>
							</view>
						</view>
					</view>

					<view v-else>
						<view class="dis_f" v-if="item.am != null">
							<p class="left">上午</p>
							<view class="leftbor">
								<p class="dis"></p>
								<p class="content">{{item.am}}</p>
							</view>
						</view>
						<view class="dis_f" v-if="item.noon != null">
							<p class="left">中午</p>
							<view class="leftbor">
								<p class="dis"></p>
								<p class="content">
									{{item.noon}}
								</p>
							</view>
						</view>
						<view class="dis_f" v-if="item.pm != null">
							<p class="left">下午</p>
							<view class="leftbor">
								<p class="dis"></p>
								<p class="content">
									{{item.pm}}
								</p>
							</view>
						</view>
						<view class="dis_f" v-if="item.night != null">
							<p class="left">晚上</p>
							<view class="leftbor">
								<p class="dis"></p>
								<p class="content">
									{{item.night}}
								</p>
							</view>
						</view>
					</view>

					<view class="dis_f">
						<p class="left">餐饮</p>
						<view class="leftbor">
							<image src="@/static/image/Details/eat.jpg" mode=""></image>
							<p class="content">{{item.catering}}</p>
						</view>
					</view>

					<view class="dis_f">
						<p class="left">住宿</p>
						<view class="leftbor">
							<image src="@/static/image/Details/shuip.jpg" mode=""></image>
							<p class="content">{{item.stay}}</p>
						</view>
					</view>

					<view class="dis_f">
						<p class="left">交通</p>
						<view class="leftbor noborder">
							<image src="@/static/image/Details/bus.jpg" mode=""></image>
							<p class="content">{{item.vehicle}}</p>
						</view>
					</view>
				</view>
			</view>

			<!-- 费用须知 -->
			<view class="notice pd30" v-show="tabcurry == 2">
				<text class="tit">费用须知</text>

				<u-parse :content="detail.cost_content"></u-parse>
				<!-- <p>本活动谢绝孕妇参加;</p>
				<p>本活动谢绝携带未报名的婴幼儿参加:</p>
				<p>本活动谢绝私自替员参加活动:</p>
				<p>本活动谢绝携宠物参加</p>
				<p>本活动可报名的年龄范围为5-65岁</p> -->
			</view>

			<!-- 最新评价 -->
			<view class="notice pd30" v-show="tabcurry == 3">
				<scroll-view  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
					@scrolltolower="lower" @scroll="scroll">
					<text class="tit">最新评价</text>
					<view class="new" v-for="(v,index) in evaluate" :key="index">
						<view class="dis_f">
							<view class="user_img dis_f flex_c alitmc">
								<image :src="v.user_avatar" mode=""></image>
								<text class="username">{{v.user_nickname}}</text>
							</view>
							<text class="content">
								{{v.content}}
							</text>
						</view>
						<view class="rate">
							<u-rate readonly :count="count" v-model="v.grade"></u-rate>
							<text class="nstit">{{v.start_day}}出发 领队：{{v.akela_nickname}}</text>
						</view>
					</view>
				</scroll-view>
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
					<view class="dis_f prp" v-for="(item,index) in addList" :key="index" @click="ckaddress(item,index)">
						<image :src="item.image" mode=""></image>
						<image v-show="curryimg == index " class="position" src="@/static/image/Details/success.png"
							mode="">
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
		
		<u-overlay :show="overlay" @click="show = false"></u-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperlist: [],
				toshow: false,
				list: [1, 2, 3, 4, 5],
				count: 5, //评分
				value: 4, //评分
				isShow: false,
				isShow1: false,
				isShow2: false,
				curry: 0, //月份选择
				tablist: [{
						name: '3月',
					},
					{
						name: '4月',
					}
				],
				curryimg: 0, //地区选择器
				addList: [],
				tabcurry: 0, //底部选择器
				CheckTablist: ['活动详情', '行程与准备', '费用须知', '评价'],
				datecurry: 0, //日期选择
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
				],
				detail: {}, //总数据
				start_address: '', //集合地数据
				setof: '', //当下集合地
				venue: '', //默认集合地
				teamcurry: 0, //团队选中
				nickname: '', //领队人
				avatar: '', //领队头像
				grade: '', //领对评分
				grade_number: '', //评分人数
				users: [], //已报名人数
				id: '', //详情页id
				page: 1, //页码
				evaluate: [], //评价列表
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				timer:null,//设置防抖
				overlay:true,//遮罩层
				price:'',
				min : true
			}
		},
		onLoad(option) {
			this.id = option.id
			//获取详情页数据
			this.getlist(option.id)
			//评论列表
			this.getevaluate()
		},
		methods: {
			async getlist(id) {
				uni.showLoading({
					title:'加载中'
				})
				const res = await this.$http('/trip/detail', {
					trip_id: id
				})
				this.overlay = false
				uni.hideLoading()
				const datas = res.data.data
				this.detail = res.data.data
				this.swiperlist = datas.assist_images // 轮播图
				this.start_address = datas.start_citys //出发地
				this.setof = this.start_address[0].name
				this.venue = this.start_address[0].venue
				this.addList = datas.start_citys
				for(let i =0;i<datas.team.length;i++){
					if(datas.team[i].data.length != 0){
						this.nickname = datas.team[i].data[0].master_akela.nickname
						this.avatar = datas.team[i].data[0].master_akela.avatar
						this.grade = datas.team[i].data[0].master_akela.grade
						this.grade_number = datas.team[i].data[0].master_akela.grade_number
						this.users = datas.team[i].data[0].users
						this.chetbs(datas.team[i],i)
						return false
					}
				}
				this.min = false
			},
			//获取评论
			async getevaluate() {
				let _this = this
				const res = await this.$http('/trip/evaluate/list', {
					trip_id: _this.id,
					page: _this.page,
					limit: 10
				})
				this.evaluate = res.data.data
			},
			//种草
			async tolove() {
				// 防抖方法
				// clearTimeout(this.timer)
				// let that = this
				// this.timer = setTimeout(async ()=>{
				// 	that.detail.is_attention = !that.detail.is_attention
				// 	if (that.detail.is_attention == true) {
				// 		that.detail.attention_number = that.detail.attention_number + 1
				// 		const res = await that.$http('/trip/attention', {
				// 			trip_id: that.id
				// 		})
				// 		return false
				// 	} else if (that.detail.is_attention == false) {
				// 		that.detail.attention_number = that.detail.attention_number - 1
				// 		const res = await that.$http('/trip/attention', {
				// 			trip_id: that.id
				// 		})
				// 	}
				// },200)
				
				let that = this
				that.detail.is_attention = !that.detail.is_attention
				if (that.detail.is_attention == true) {
					that.detail.attention_number = that.detail.attention_number + 1
					const res = await that.$http('/trip/attention', {
						trip_id: that.id
					})
					return false
				} else if (that.detail.is_attention == false) {
					that.detail.attention_number = that.detail.attention_number - 1
					const res = await that.$http('/trip/attention', {
						trip_id: that.id
					})
				}
			},
			chetbs(e, index) {
				this.curry = index
				this.Datetbs(e.data[0], 0)
			},
			async Datetbs(e, index) {
				this.teamcurry = index
				// this.nickname = this.detail.team[this.curry].data[index].master_akela.nickname
				// this.avatar = this.detail.team[this.curry].data[index].master_akela.avatar
				// this.grade = this.detail.team[this.curry].data[index].master_akela.grade
				this.grade_number = this.detail.team[this.curry].data[index].master_akela.grade_number
				this.users = this.detail.team[this.curry].data[index].users
				this.price = this.detail.team[this.curry].data[this.teamcurry].price
				const teamid = e.id
				const res = await this.$http('/trip/team/detail', {
					trip_id: this.id,
					trip_team_id: teamid
				})
				this.detail.journey_content = res.data.data.journey_content
			},
			CheckTab(e, index) {
				this.tabcurry = index
			},
			popClose() {
				this.isShow = false
			},
			//懒加载
			upper: function(e) {
				// console.log(e)
			},
			lower: async function(e) {
				uni.showLoading({
					title:'加载中'
				})
				this.page = this.page + 1
				const res = await this.$http('/trip/evaluate/list', {
					trip_id: this.id,
					page: this.page,
					limit: 10
				})
				uni.hideLoading()
				if(res.data.data == ''){
					uni.$u.toast('已经到底部了')
					return false
				}
				this.evaluate = this.evaluate.concat(res.data.data)
			},
			 scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
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
				this.$jump('./Cratic?user=', 'params', JSON.stringify(this.users))
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
			ckaddress(e, index) {
				this.curryimg = index
				this.setof = this.start_address[index].name
				this.venue = this.start_address[index].venue
				this.isShow1 = false
			},
			toback() {
				uni.navigateBack()
			},
			toRestore() {
				this.$jump('/pages/retail/restore')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ds_body{
		padding-bottom: 180rpx;
	}
	.ds_banner {
		width: 100%;
		height: 494rpx;

		image {
			width: 100%;
			height: 494rpx;
		}

		.swiper {
			width: 100%;
			height: 494rpx;
		}

		.swiperposi {
			top: 60rpx;
			right: 30rpx;
			z-index: 99;
			color: red;
			background-color: rgba(32, 32, 32, .5);
			padding: 8rpx 20rpx;
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
			margin-left: 260rpx;

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
		z-index: 9 !important;
		margin-top: 40rpx;
		padding-bottom: 60rpx;
		justify-content: space-around;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);
		padding-top: 20rpx;
		padding-left: 20rpx;
		background-color: white;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
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

	.scroll-Y {
		max-height: 500rpx;
		overflow: auto; // 超出这个最大高度的数据，会被隐藏起来，上下滑动
		overflow-x: hidden; //隐藏x轴滚动条
	}

	.notice {
		// max-height: 300px; //设置最大的高度
		// overflow: auto; // 超出这个最大高度的数据，会被隐藏起来，上下滑动
		// overflow-x: hidden; //隐藏x轴滚动条
		max-height: 500rpx;

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

	.fixed {
		position: fixed;
		top: 80rpx;
		left: 20rpx;
	}
</style>