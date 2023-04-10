<template>
	<view class="trends">
		<view class="ts_header dis_f">
			<u-search class="input" placeholder="请搜索目的地" v-model="seachValue" clearable :showAction='false'
				:height='28'></u-search>
				<view class="headerimg">
					<image @click="gomsg()" src="@/static/image/trends/msg.jpg" mode=""></image>
					<image class="bor_y" @click="goSpace()" src="@/static/image/trends/wxx.jpg" mode=""></image>
				</view>
		</view>
		<view class="pd30">
			<view class="ts_tbs dis_f">
				<p :class="v.state?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v)">
					{{v.name}}
				</p>
			</view>
			<view v-for="(item,index) in userlist" :key="index">
				<!-- 用户信息 -->
				<view class="ts_text dis_f">
					<view class="ts_user dis_f">
						<view @click="goSpace()" class="ts_img dis_f">
							<image class="bor_y" src="@/static/image/trends/wxx.jpg" mode=""></image>
							<view class="ts_tes dis_f">
								<p>{{item.name}}</p>
								<span>{{item.huodong}}</span>
							</view>
						</view>
						<view v-show="item.isshow" class="ts_active" @click="isClik(item.isshow,index)">
							已关注
						</view>
						<view v-show="!item.isshow" class="ts_actives" @click="isClik(item.isshow,index)">
							关注
						</view>
					</view>
				</view>

				<!-- 动态内容 -->
				<view class="ts_txt">
					<p>{{item.text}}</p>
				</view>
				<!-- 图片 -->
				<view class="ts_imglist dis_f">
					<view class="ts_js dis_f" v-for="(v,index) in item.img" :key="index">
						<image class="bor_r" :src="v" mode="" @click='clickImg(v)'></image>
					</view>
				</view>
				<!-- 评论区 -->
				<view class="">
					<!-- 输入区 -->
					<view class="ts_pls dis_f">
						<u--input placeholder="喜欢就评论吧" border="surround" fontSize='12' :customStyle='obj' shape='circle'
							v-model="plvalue" @change="e=>change(e)"></u--input>
						<view class="dis_f">
							<image src="../../static/trends/pl.png" mode=""></image>
							<view class="dis_f ix_span">
								<image src="../../static/trends/ax.png" mode=""></image>
								<span>99+</span>
							</view>
						</view>
					</view>
					<!-- 已有得评论 -->
					<view class="dis_f ts_plq"  @click='isShow = true'>
						<view class="dis_f">
							<p>卢本伟 :</p><label>牛逼!</label>
						</view>
						<u-icon name="arrow-right" size='14'></u-icon>
					</view>
					<view class="dis_xhx">
						<u-line color='#E6E6E6'></u-line>
					</view>
				</view>
			</view>
		</view>
		<view class="ts_flex" @click="toNews()">
			<image src="../../static/trends/tels.png" mode=""></image>
		</view>

		<!-- 弹出层 -->
		<u-popup :show="isShow" @close="close" @open="open">
			<view class="pop">
				<label>评论</label>
				<view class="ts_text dis_f">
					<view class="ts_user dis_f">
						<view class="ts_img dis_f">
							<image src="../../static/trends/user.png" mode=""></image>
							<view class="ts_tes dis_f">
								<p>李菲</p>
								<span>2023-02-12</span>
								<text class="zlsplq">哇哦 很好看</text>
								<u-line color='#E6E6E6'></u-line>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
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
				userlist:[],
				userlist1: [{
					name: '一个阳光明媚的人',
					huodong: '5篇活动动态',
					text: '遗憾是常有的吧',
					isshow: true,
					img: ["../../static/index/zheng.jpg", "../../static/index/zheng.jpg",
						"../../static/index/zheng.jpg"
					],

				}, {
					name: '卢本伟',
					huodong: '5篇活动动态',
					text: '下山的路太吵了，跟上山时一样。',
					isshow: true,
					img: ["../../static/index/zheng.jpg", "../../static/index/zheng.jpg"],

				}],
				userlist2: [{
					name: '世界上最爱我的人',
					huodong: '10篇活动动态',
					text: '遗憾是常有的吧',
					isshow: true,
					img: ["../../static/index/zheng.jpg", "../../static/index/zheng.jpg",
						"../../static/index/zheng.jpg"
					],
				
				}, {
					name: '小李白',
					huodong: '5篇活动动态',
					text: '谁有不平事!',
					isshow: true,
					img: ["../../static/index/zheng.jpg", "../../static/index/zheng.jpg"],
				
				}],
				obj: {
					height: '28rpx',
					backgroundColor: '#F4F5F7'
				},
				isShow: false
			}
		},
		onLoad() {
			this.userlist =this.userlist1
		},
		methods: {
			open() {

			},
			close() {
				this.isShow = false
			},
			chetbs(e) {
				this.tablist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				if(e.name == '推荐'){
					this.userlist = this.userlist2
				}else if(e.name == '关注'){
					this.userlist = this.userlist1
				}
			},
			isClik(v, index) {
				this.userlist[index].isshow = !this.userlist[index].isshow
			},
			change(e) {
				console.log(e)
			},
			clickImg(v) {
				wx.previewImage({
					urls: [v], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: '', // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},
			goSpace(){
				this.$jump('./Space')
			},
			gomsg(){
				this.$jump('./message')
			},
			toNews(){
				this.$jump('./News/News')
			}

		}
	}
</script>

<style lang="scss" scoped>
	.trends {
		width: 100%;
	}
.headerimg{
	margin-left: 40rpx;
	image{
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

		image {
			width: 114rpx;
			height: 114rpx;
		}
	}

	.pop {
		height: 910rpx;
		padding: 30rpx 20rpx;
		label{
			text-align: center;
			display: block;
			margin-bottom: 20rpx;
		}
		.zlsplq{
			margin: 20rpx 0;
			width: 590rpx;
		}
	}
	
</style>