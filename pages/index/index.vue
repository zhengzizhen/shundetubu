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
						<span>{{cityname}}</span>
						<u-icon name="arrow-down" color="#FFFFFF" size='12'></u-icon>
					</view>
					<u-search @focus='toSeach()' class="input" placeholder="想去哪就去哪" v-model="seachValue"
						:showAction='false' :height='28'>
					</u-search>
				</view>
				<!-- 轮播图 -->
				<view class="Swiper">
					<u-swiper circular :list="list1" keyName="image" @change="e =>changeSwiper(e)"
						@click="toDetails"></u-swiper>
				</view>
				<view class="" style="border-radius: 20rpx;">
					<u-notice-bar bgColor='#FFFFFF' color='#49CAA4' :text="notice" direction='column'></u-notice-bar>
				</view>
			</view>

			<!-- 菜单 -->
			<view class="ix_shop index_pads dis_f">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="item.id" @click='clinto(item.title)'>
					<image style="border-radius: 50%;" :src="item.value" mode=""></image>
					<text>{{item.title}}</text>
				</view>
			</view>

			<!-- 下周活动 -->
			<view class="ix_shop index_pad dis_f">
				<view class="ix_model bor_r" v-if="index==0" v-for="(v,index) in modelList" :key="index"
					@click="tomust(v)">
					<image class="bor_r" :src="v.image" mode=""></image>
					<view class="ix_float">
						<text>{{v.title}}</text>
						<p>{{v.sub_title}}</p>
					</view>
				</view>
				<view class="ix_model bor_r" v-if="index!=0" v-for="(v,index) in modelList" :key="index"
					@click="todocs(v)">
					<image class="bor_r" :src="v.image" mode=""></image>
					<view class="ix_float">
						<text>{{v.title}}</text>
						<p>{{v.sub_title}}</p>
					</view>
				</view>
			</view>

			<!-- 省内一天路线 -->
			<view class="ix_block index_pad">
				<label>{{Province.name}}</label>
				<view class="ix_subsection dis_f">
					<p :class="curry == index ?'check':'checks'" v-for="(item,index) in checklist" :key="index"
						@click="checkout(item,index)">{{item}}</p>
				</view>

				<!-- 骨架屏 -->
				<view class="ix_img dis_f" v-if="loading">
					<view class="ix_flexs" v-for="(item,index) in 4" :key="index">
						<view class="backgous">
						</view>
						<p class="content" :class="'content'+index">{{item.grade}}分 | {{item.traveller_number}}人去过
						</p>
						<p class="ix_title">{{item.title}}</p>
					</view>
				</view>

				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in imglist" :key="index" @click="toDetails(item.id)">
						<image :src="item.master_image"></image>
						<p class="ix_posi">{{item.day}}天</p>
						<p class="content" :class="'content'+index">{{item.grade}}分 | {{item.traveller_number}}人去过
						</p>
						<p class="ix_title">{{item.title}}</p>
					</view>
				</view>
			</view>

			<!-- 全国精选路线 -->
			<view class="ix_block index_pad">
				<view class="ix_block_header dis_f">
					<label>{{Selection.name}}</label>
					<view class="ix_icon" @click="toambitus">
						<span>更多</span>
						<u-icon name="arrow-right" size='12'></u-icon>
					</view>
				</view>
				<view class="ix_imgplus dis_f" v-if="Selection.data">
					<view class="rltw" @click="toDetails(Selection.data[0].id)">
						<image class="imgplus bor_r" :src="Selection.data[0].master_image"></image>
						<view class="abslt ix_botn">
							<p style="color: white;">{{Selection.data[0].title}}</p>
						</view>
					</view>
					<view class="ix_bot" @click="toDetails(Selection.data[1].id)">
						<image class="ix_imgbot bor_r" :src="Selection.data[1].master_image"></image>
						<view class="abslt ix_botn">
							<p style="color: white;word-wrap:break-word;width: 284rpx;word-break:break-all;">
								{{Selection.data[1].title}}
							</p>
						</view>
						<view class="ix_botsub bor_r">
							<view class="ix_posi_r" @click="toDetails(Selection.data[2].id)">
								<image class="bor_r" :src="Selection.data[2].master_image">
								</image>
								<view class="ix_pos_c">
									<p style="color: white;">{{Selection.data[2].title}}</p>
								</view>
							</view>
							<view class="ix_posi_r" @click="toDetails(Selection.data[3].id)">
								<image class="bor_r" :src="Selection.data[3].master_image">
								</image>
								<view class="ix_pos_c">
									<p style="color: white;">{{Selection.data[3].title}}</p>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 活动日历 -->
			<view class="ix_block index_pad">
				<label>{{calendar.name}}</label>
				<view class="ix_imgplus dis_f">
					<view class="ix_background bor_r" :style="{'background': 'url('+ calendar.data[0].image +')'}">
						<image class="ixxbanner" :src="calendar.image" mode=""></image>
						<view class="ix_bgfz">
							<p>{{calendar.data[0].month}}月 {{calendar.data[0].name}}</p>
							<span>更多<u-icon name="arrow-right" color='#EAC326' size='12'></u-icon></span>
						</view>
						<view @click="todateHot(calendar.data[0].month)" class="ix_bg_img">
							<image v-for="(v,index) in trip" :key="index" :src="v.image"></image>
						</view>
					</view>


					<view class="ix_bot">
						<view @click="todateHot(calendar.data[1].month)" class="ix_imgbotbg bor_r"
							:style="{'background': 'url('+ calendar.data[1].image +')'}">
							<view class="ix_bgfz">
								<p>{{calendar.data[1].month}}月 {{calendar.data[1].name}}</p>
								<span><u-icon name="arrow-right" color='#EAC326' size='12'></u-icon></span>
							</view>
							<view class="ix_five bor_r">
								<view class="ix_six">
									<p class="god" v-for="(v,index) in calendar.data[1].trip" :key="v.id">{{v.title}}
									</p>
								</view>
							</view>
						</view>

						<view @click="todateHot(calendar.data[2].month)" class="ix_imgbotbg bor_r"
							:style="{'background': 'url('+ calendar.data[2].image +')'}">
							<view class="ix_bgfz">
								<p>{{calendar.data[2].month}}月 {{calendar.data[2].name}}</p>
								<span><u-icon name="arrow-right" color='#EAC326' size='12'></u-icon></span>
							</view>
							<view class="ix_five bor_r">
								<view class="ix_six">
									<p class="god" v-for="(v,index) in calendar.data[2].trip" :key="v.id">{{v.title}}
									</p>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 品牌IP活动 -->
			<!-- <view class="ix_block index_pad">
				<label>品牌IP活动</label>
				<view class="dis_f god jscb m20">
					<image @click="tomemberday" class="les bor_r" src="@/static/as/changs.jpg" mode=""></image>
					<view class="dis_f flex_c jscb">
						<image @click="tomemberday" class="ri bor_r" src="@/static/index/zheng.jpg" mode=""></image>
						<image @click="tomemberday" class="ri bor_r" src="@/static/index/zheng.jpg" mode=""></image>
					</view>
				</view>
			</view> -->

			<!-- 童步营 -->
			<view class="ix_block index_pad">
				<label>童步营</label>
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in Camp" :key="index" @click="toDetails(item.id)">
						<image :src="item.master_image"></image>
						<p class="ix_posi">{{item.day}}天</p>
						<p class="ix_title">{{item.title}}</p>
						<p class="ix_yellow" style="font-size: 26rpx;">￥{{item.price}}/人</p>
					</view>
				</view>
			</view>

			<!-- 火爆路线 -->
			<view class="ix_block index_pad">
				<label>火爆路线</label>
				<view @click="toDetails(v.id)" class="ix_imgplus dis_f" v-for="(v,index) in datelist" :key="index">
					<image class="imgplus bor_r" :src="v.master_image"></image>
					<view class="ix_pos_t">
						<p>TOP{{index+1}}</p>
					</view>
					<view class="ix_posimg">
						<view class="ix_pos_p dis_f" v-for="(item,i) in v.trip_team" :key='i'>
							<p>{{item.start_day}}</p>
							<p>{{item.status_text}}</p>
						</view>
						<view class="ix_pos_p dis_f">
							<p class="ags">更多<u-icon name="arrow-right" color='#FFFFFF' size='12'></u-icon></p>
						</view>
					</view>
				</view>
			</view>

			<!-- 更多产品 -->
			<view class="ix_block index_pad">
				<label>更多产品</label>
				<view class="ix_img dis_f">
					<view @click="toshop(item.id)" class="ix_flexs" v-for="(item,index) in moenylist" :key="index">
						<image :src="item.master_image"></image>
						<p class="ix_title">{{item.name}}</p>
						<p class="ix_yellow">￥{{item.price}}</p>
					</view>
				</view>
			</view>

			<!-- 地区选择器 -->
			<u-popup :round="10" :show="isShow" :closeable='true' @close="close" @open="open">
				<view class="ix_pop pd30">
					<view v-if="v.city" v-for="(v,index) in city" :key="v.id">
						<p>{{v.name}}</p>
						<view class="dis_f ps">
							<view @click="changecity(item)" class="dis_f prp" v-for="(item,i) in v.city" :key="item.id">
								<image :src="item.image" mode=""></image>
								<text>{{item.name}}</text>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
			<!-- 联系客服 -->
			<u-popup closeable mode="center" :round="10" :show="isShow1" @close="close1" @open="open1">
				<view class="ke">
					<image
						src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
						mode=""></image>
					<p>扫码联系客服</p>
				</view>
			</u-popup>
			<view style="height: 100rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachValue: '',
				list1: [], //轮播图
				curry: 0, //省内一天路线切换
				checklist: ['当季热门', '好评榜单', '最新上架'],
				arrlist: [], //金刚区
				modelList: [], //本下周活动
				Province: {}, //省内一天你路线
				Selection: {}, //全国精选路线
				trip: [], //图片
				calendar: {
					data: [{}, {}, {}]
				}, //活动日历
				imglist: [],
				datelist: [],
				moenylist: [],
				isShow: false,
				isShow1: false,
				addcurry: 0,
				city: [],
				notice: [], //公告内容
				cityid: 9998,
				cityname: '全国',
				Camp: [],
				loading: true
			}
		},
		onLoad() {
			this.getlist()
			//获取用户信息
		},
		methods: {
			async getlist() {
				uni.setStorageSync('cityid', this.cityid)
				let that = this
				const res = await this.$http('/sys/index')
				let datas = res.data.data
				that.list1 = datas.banner
				that.arrlist = datas.icon
				that.modelList = datas.active
				console.log(that.modelList);

				datas.notice.forEach((item, index) => {
					this.notice.push(item.content)
				})
				console.log(this.notice);
				//城市列表
				const citys = await this.$http('/sys/city')
				that.city = citys.data.data

				//活动数据
				const hotdate = await this.$http('/index/trip')
				this.loading = false
				//省内一天路线
				that.Province = hotdate.data.data[0]
				that.imglist = this.Province.data.hot
				uni.setStorageSync('hot', that.imglist)
				//全国精选路线
				that.Selection = hotdate.data.data[1]
				that.calendar = hotdate.data.data[2]
				that.trip = that.calendar.data[0].trip
				that.Camp = hotdate.data.data[6].data
				that.datelist = hotdate.data.data[3].data
				that.moenylist = hotdate.data.data[4].data
			},
			//轮播图修改
			changeSwiper(e) {

			},
			click() {
				// 轮播图点击
			},
			todateHot(v) {
				this.$jump('./dateHot?date=', 'params', v)
			},
			checkout(e, index) {
				this.curry = index
				switch (index) {
					case 0:
						this.imglist = this.Province.data.hot
						break;
					case 1:
						this.imglist = this.Province.data.grade
						break;
					case 2:
						this.imglist = this.Province.data.new
						break;
				}
			},
			open() {

			},
			toambitus() {
				this.$jump('./ambitus/ambitus')
			},
			close() {
				this.isShow = false
			},
			open1() {

			},
			tomust(v) {
				const params = {
					url: '/trip/active/trip',
					seach: '/trip/search/oactive',
					title: v.title
				}
				this.$jump('./domestics?tit=', 'params', JSON.stringify(params));
			},
			todocs(v) {
				const params = {
					url: '/trip/active/trip',
					seach: '/trip/search/week',
					title: v.title
				}
				this.$jump('./hotruns?tit=', 'params', JSON.stringify(params));
			},
			close1() {
				this.isShow1 = false
			},
			toshop(v) {
				this.$jump('/pages/mine/menu/shopDetail?id=', 'params', v)
			},
			clinto(v) {
				switch (v) {
					case '周边路线':
						this.$jump('./ambitus/ambitus');
						break;
					case '国内精选':
						const params = {
							url: '/trip/internal/trip',
							seach: '/trip/search/internal',
							title: '国内精选'
						}
						this.$jump('./domestic?tit=', 'params', JSON.stringify(params));
						break;
					case '国外精选':
						const info = {
							url: '/trip/foreign/trip',
							seach: '/trip/search/foreign',
							title: '国外精选'
						}
						this.$jump('./domestic?tit=', 'params', JSON.stringify(info));
						break;
					case '活动日历':
						this.$jump('./dateHot');
						break;
					case '团队定制':
						this.$jump('./team/team');
						break;
					case '亲子路线':
						const kids = {
							title: '亲子路线',
							url: '/trip/kids/trip',
							seach: '/trip/search/kids'
						}
						this.$jump('./Province?obj=', 'params', JSON.stringify(kids));
						break;
					case '城市玩家':
						const city = {
							title: '城市玩家',
							url: '/trip/city/trip',
							seach: '/trip/search/city'
						}
						this.$jump('./Province?obj=', 'params', JSON.stringify(city));
						break;
					case '必玩榜单':
						this.$jump('./mustPlay');
						break;
					case '好物商城':
						this.$jump('/pages/mine/menu/HaowuMall');
						break;
					case '联系客服':
						this.isShow1 = true
						break;
				}
			},
			toSeach() {
				this.$jump('./Seach/Seach');
			},
			toDetails(e) {
				this.$jump('./Details/Details?id=', 'params', e);
			},
			ckaddress(e, index) {
				this.addcurry = index
			},
			tomemberday() {
				this.$jump('./memberday')
			},
			changecity(v) {
				this.cityid = v.id
				this.cityname = v.name
				uni.setStorageSync('city', this.cityid)
				this.isShow = false
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
		padding: 10rpx 30rpx;
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
			margin-top: 10rpx;
			font-size: 24rpx;
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
			margin: 20rpx auto;
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

				.content {
					margin-top: -50rpx;
					position: relative;
					width: 222rpx;
					height: 56rpx;
					line-height: 56rpx;
					background: #93A8C3;
					border: 1px solid #FFFFFF;
					border-radius: 28rpx 28rpx 28rpx 4rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #FFFFFF;
					text-align: center;
				}

				.content1 {
					background: #BCAD95 !important;
				}

				.content2 {
					background: #B19D90 !important;
				}

				.content3 {
					background: #A28085 !important;
				}
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
				margin: 20rpx auto 20rpx;
				word-wrap: normal;
				font-size: 28rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
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
					width: 335rpx;
					height: 300rpx;
					padding: 20rpx;
					// background: url(@/static/index/chang.jpg);
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

				.ixxbanner {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0%;
					left: 0;
				}

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
				font-size: 22rpx;
				color: black !important;
			}

			.god {
				padding: 10rpx 0 !important;
				border-bottom: 1px solid #E6E6E6 !important;
			}

			.god:last-child {
				border-bottom: none !important;
			}
		}
	}

	.ix_botn {
		left: 20rpx;
		bottom: 20rpx;
		font-size: 26rpx;

		word-wrap:break-word p {}
	}

	.ix_pop {
		height: 1000rpx;

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

				.position {
					position: absolute;
					right: 10rpx;
					top: 0;
					width: 32rpx;
					height: 32rpx;
				}
			}

		}
	}

	.cont {
		width: 100%;

		.lef {
			width: 454rpx;
			height: 300rpx;
		}

		.ris {
			width: 217rpx;
			height: 300rpx;
		}

		.txt {
			bottom: 30rpx;
			right: 160rpx;
			color: white;
			font-size: 28rpx;
			text-align: center;
		}

		.txts {
			text-align: center;
			bottom: 30rpx;
			right: 40rpx;
			color: white;
			font-size: 28rpx;
		}
	}

	.god {
		.les {
			width: 335rpx;
			height: 480rpx;
		}

		.ri {
			width: 310rpx;
			height: 230rpx;
		}
	}

	.ke {
		width: 506rpx;
		height: 447rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		text-align: center;

		image {
			margin: 50rpx 0 20rpx;
			width: 311rpx;
			height: 311rpx;
		}
	}

	.backgous {
		width: 335rpx;
		height: 335rpx;
		background-color: #ccc;
		border-radius: 20rpx;
	}

	/deep/ .u-notice-bar {
		border-radius: 10rpx;
	}
</style>