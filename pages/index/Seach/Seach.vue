<template>
	<view :class="isShow?'bodys':'body'">
		<view class="sh_seach dis_f">
			<u-icon @click='back()' name="arrow-left" color='#222222' size='20'></u-icon>
			<u-search maxlength='20' @input='changeinput' v-model="value" :showAction="true" :actionStyle='tis'
				actionText="搜索" :animation="false" @search='search()' @custom='search()'></u-search>
		</view>
		<view v-show="isShow">
			<view class="pd30">
				<p class="title">本周热榜HOT</p>
			</view>

			<view class="pd30 sh_label dis_f">
				<p @click='goSeach(item.title)' class="dis_f alitmc" v-for="(item,index) in seachlist.hot_search" :key="index">
					<image v-if="item.is_hot == true" src="/static/image/index/hot.png" mode=""></image>
					<label>{{item.title}}</label>
				</p>
			</view>

			<view class="pd30" >
				<p v-if="seachlist.week_rank != ''" class="title">路线周榜</p>
			</view>

			<view @click="toDetails(item.id)" v-if="seachlist.week_rank != ''" class="sh_content dis_f pd30 alitmc"
				v-for="(item,index) in seachlist.week_rank" :key="index">
				<p class="titsh">{{index+1}}</p>
				<view class="center dis_f">
					<image :src="item.master_image" mode=""></image>
					<view class="centers">
						<view class="dis_f jscb inj">
							<p>{{item.title}}游玩{{item.day}}天</p>
							<view class="dis_f hots alitmc jscb">
								<image src="/static/image/index/hot.png" mode=""></image>
								<label>{{item.traveller_number}}</label>
							</view>
						</view>
						<label class="reds">￥</label><text class="red">{{item.price}}</text>
						<view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-show="!isShow" class="pd30">
			<view>
				<view @click="toDetails(item.id)" v-if="index == 0" class="banner" v-for="(item,index) in overSeach" :key="item.id">
					<p class="iun">路线-{{item.day}}天</p>
					<image class="image" :src="item.master_image" mode=""></image>
					<view class="dis_f txt">
						<p>{{item.title}}</p>
						<view class="iuso dis_f" v-if="item.trip_team !=''">
							<p>{{item.trip_team[0].start_day}}丨
								<label v-if="item.trip_team[0].status == 0">火热报名中</label>
								<label v-if="item.trip_team[0].status == 1">即将成团</label>
								<label v-if="item.trip_team[0].status == 2">已成团</label>
								<label v-if="item.trip_team[0].status == 3">已满员</label>
							</p>
							<text>{{item.trip_team[1].start_day}}丨剩{{item.trip_team[1].residue_people_number}}名额</text>
							<u-icon name="arrow-right" color="#999999" size='12'></u-icon>
						</view>
						<view class="dis_f jscb sil">
							<label class="green">{{item.grade}}分丨{{item.bourn}}</label>
							<label class="red">￥{{item.price}}</label>
						</view>

					</view>
					<view class="ms_user dis_f" v-if="item.evaluate != ''">
						<view style="text-align: center;">
							<image :src="item.evaluate.user_avatar" mode=""></image>
							<p style="font-size: 24rpx;">{{item.evaluate.user_nickname}}</p>
						</view>
						<view class="io">
							<text>{{item.evaluate.created_at}}</text>
							<p>{{item.evaluate.content}}</p>
						</view>
					</view>
				</view>
			</view>

			<view @click="toDetails(item.id)" v-if="index!=0" class="dc_mod dis_f" v-for="(item,index) in overSeach" :key="index">
				<image :src="item.master_image" mode=""></image>
				<view class="dc_god dis_f flex_c jscb">
					<p class="widths">{{item.title}}畅玩{{item.day}}天</p>
					<text class="posw">{{item.day}}天</text>
					<view class="dc_latt dis_f alitmc" >
						<p class="titles" v-if="item.trip_team[0]">{{item.trip_team[0].start_day}}
							<label v-if="item.trip_team[0].status == 0">火热报名中</label>
							<label v-if="item.trip_team[0].status == 1">即将成团</label>
							<label v-if="item.trip_team[0].status == 2">已成团</label>
							<label v-if="item.trip_team[0].status == 3">已满员</label>
						</p>
						<p class="text" v-if="item.trip_team[1]">{{item.trip_team[1].start_day}}剩{{item.trip_team[1].residue_people_number}}名额</p>
						<p class="dis_f" v-if="item.trip_team[0]"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="dc_latts dis_f" v-if="item.label!=''">
						<text v-for="(s,i) in item.label" :key="i">{{s}}</text>
					</view>
					<view class="dc_span dis_f">
						<text>￥{{item.price}}</text>
						<label>{{item.grade}}分丨{{item.bourn}}</label>
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
				isShow: true,
				list: [1, 2, 3, 4, 5],
				overSeach: [],
				tis: {
					color: 'white',
					padding: '10rpx',
					background: '#49CAA4',
					borderRadius: '50rpx'
				},
				seachlist: [], //搜索页面数据列表
				value: '', //搜索框绑定
				statu: true, //用于节流
			}
		},
		onLoad() {
			this.getSeachlist()
		},
		methods: {
			// 搜索前展示的数据
			async getSeachlist() {
				uni.showLoading()
				const res = await this.$http('/search/detail')
				uni.hideLoading()
				this.seachlist = res.data.data
			},
			//搜索后的列表
			async getlist() {
				const res = await this.$http('/search', {
					search: this.value
				})
				this.isShow = false
				this.overSeach = res.data.data
				console.log(res);
			},
			back() {
				uni.navigateBack()
			},
			search() {
				this.isShow = false
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
			goSeach(e){
				this.value = e
				this.getlist()
			},
			//搜索框节流
			changeinput(e) {
				const that = this
				if (!that.statu) {
					return
				}
				that.statu = false
				setTimeout(function() {
					that.getlist()
					that.statu = true
				}, 2000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		background-color: #FAFAFA;
		padding-top: 0rpx;
	}

	.bodys {
		background-color: white;
		padding-top: 88rpx;
	}

	.sh_seach {
		margin: 40rpx 0rpx 20rpx;
		padding: 0 20rpx 20rpx;
		background-color: white;

		input {
			margin-left: 10rpx;
		}
	}

	.title {
		margin: 30rpx 0 10rpx;
	}

	.sh_label {
		flex-wrap: wrap;

		p {
			padding: 10rpx 30rpx;
			background-color: #F7F7F7;
			border-radius: 50rpx;
			margin: 20rpx 10rpx;
		}

		image {
			margin-right: 8rpx;
			width: 36rpx;
			height: 36rpx;
		}

		// p:nth-child(-n + 3) {
		// 	padding-left: 50rpx;
		// 	// background-color: red;
		// 	background: url('../../../static/image/index/hot.png') no-repeat 12rpx 18rpx;
		// 	background-color: #F7F7F7;
		// 	background-size: 15%;
		// }
		label {
			font-size: 26rpx;
			color: #222222;
		}

		image {
			width: 25rpx;
			height: 29rpx;
		}
	}

	.sh_content {
		margin: 40rpx 0;

		.center {
			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 20rpx;
			}
		}

	}

	.titsh {
		font-size: 30rpx;
		font-weight: bold;
		color: #000000;
	}

	.center {
		margin-left: 20rpx;

		p {
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
		}
	}

	.red {
		color: #FF4040;
		font-size: 36rpx;
		font-weight: bold;
	}

	.reds {
		margin-left: 20rpx;
		font-size: 28rpx;
		color: #FF4040;
		font-weight: bold;
	}

	.hots {
		margin-left: 160rpx;

		image {
			width: 25rpx !important;
			height: 29rpx !important;
		}

		label {
			margin-left: 10rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}

	}

	.inj {
		margin-left: 20rpx;
	}

	.banner {
		height: auto;
		margin-top: 30rpx;
		background-color: white;
		border-radius: 20rpx;
		position: relative;

		.iun {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			color: white;
			line-height: 42rpx;
			text-align: center;
			font-size: 24rpx;
			width: 130rpx;
			height: 42rpx;
			background: #49CAA4;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
		}

		.image {
			width: 100%;
			height: 340rpx;
			border-radius: 20rpx 20rpx 0 0;
		}

		.txt {
			flex-direction: column;
			text-align: left;
			justify-content: center;
			padding: 10rpx 20rpx;

			.sil {
				margin-top: 10rpx;
			}

			.green {
				font-size: 22rpx;
				color: #999;
			}

			.red {
				color: red;
				font-size: 32rpx;
				font-weight: normal;
			}
		}
	}

	.ms_user {
		padding: 10rpx 20rpx;
		margin-top: 20rpx;

		image {
			width: 70rpx;
			height: 70rpx;
		}

		.io {
			text-align: left;
			margin-left: 30rpx;
			background-color: #F6F7F9;
			color: #999999;
			padding: 20rpx;
			border-radius: 20rpx;

			text {
				font-size: 24rpx;
			}

			p {
				font-size: 24rpx;
			}
		}
	}
	.centers{
		flex: 1;
	}
	.iuso {
		margin: 10rpx 0;

		p {
			width: 158rpx;
			height: 36rpx;
			background: #FFA1AD;
			color: white;
			font-size: 24rpx;
			padding: 5rpx 10rpx;
		}

		text {
			margin-left: 20rpx;
			width: 158rpx;
			height: 36rpx;
			background: #F2AD5A;
			color: white;
			font-size: 24rpx;
			padding: 5rpx 10rpx;
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 30rpx 10rpx;
		margin: 30rpx 0;
		border-radius: 20rpx;
		image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;
			.widths{
				width: 370rpx;
			}
		}

		.posw {
			position: absolute;
			top: 28rpx;
			left: 10rpx;
			width: 80rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #49CAA4;
			z-index: 2;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			text-align: center;
			color: white;
			font-size: 22rpx;

		}

		.dc_latt {
			margin-top: 10rpx;

			p {
				font-size: 22rpx;
				align-items: center;
				margin-left: 10rpx;
			}
			
			.titles {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #FFA1AD;
				margin-left: 10rpx;
			}
			
			.text {
				margin-left: 20rpx;
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #F2AD5A;
			}
		}

		.dc_latts {
			margin-top: 10rpx;

			text {
				padding: 5rpx 8rpx;
				color: #E49332;
				font-size: 22rpx;
				background-color: #FFECD6;
				margin-left: 10rpx;
			}

			label {
				margin-left: 20rpx;
				padding: 5rpx 8rpx;
				color: #E49332;
				font-size: 22rpx;
				background-color: #FFECD6;
			}
		}

	}

	.dc_span {
		justify-content: space-between;
		align-items: center;
		margin-top: 10rpx;

		label {
			color: #999999;
			font-size: 24rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}
</style>