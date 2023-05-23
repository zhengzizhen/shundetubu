<template>
	<view class="body pd30">
		<p class="ty_title dis_f" @click='isShow= true'><label>{{city}}</label> <u-icon color='#FFF'
				name="arrow-down-fill"></u-icon></p>
		<view @click="toDetails(item.id)" class="dc_mod dis_f bor_r" v-for=" (item,index) in list" :key="index">
			<image :src="item.master_image" mode=""></image>
			<view class="dc_god dis_f flex_c jscb">
				<p>{{item.title}}</p>
				<text class="posw">{{item.day}}天</text>
				<view class="dc_latt dis_f" v-if="item.trip_team!=''">
					<text v-for="(v,i) in item.trip_team">{{v.start_day}}{{v.status_text}}</text>
					<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
				</view>
				<p class="title dis_f">
					<label v-for="(t,l) in item.label" :key="l">{{t}}</label>
				</p>
				<view class="dc_span dis_f">
					<text>￥{{item.price}}</text>
					<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
				</view>
			</view>
		</view>


		<u-popup :show="isShow" mode="top" @close="close" @open="open">
			<view class="popViews pd30">
				<p class="tit">城市选择</p>
				<p class="forList"></p>

				<view class="oy_tabs dis_f flexw">
					<p :class="daycurry == index ?'green':''" v-for="(v,index) in Seach" :key="index"
						@click="checkday(v,index)">
						{{v.name}}
					</p>
				</view>

				<view class="dis_f btn">
					<p class="ps" @click='resetting'>重置</p>
					<p class="gs" @click='toclick'>确定</p>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				list: [],
				Seach: [],
				daycurry: null,
				cityid:[],
				bottom:false,
				page:1,
				city:'',
				citys:''
			}
		},
		onLoad() {
			const params = {
				page:this.page,
				limit:10
			}
			this.getlist(params)
			this.getSeach()
		},
		onReachBottom() {
			if(this.bottom == true){
				return false
			}else{
				const params = {
					page:this.page,
					limit:10
				}
				this.getlist(params)
			}
		},
		methods: {
			async getlist(params) {
				const res = await this.$http('/trip/vicinity/list/2day',params)
				this.list = this.list.concat(res.data.data) 
				if(res.data.data.length < 10){
					this.bottom = true
				}
			},
			close() {
				this.isShow = false
			},
			async getSeach(){
				const res = await this.$http('/trip/search/vicinity_workday')
				this.Seach = res.data.data.search_city
				this.city = this.Seach[0].name
			},
			async open() {
				
			},
			checkday(e, index) { //出行天数
				this.daycurry = index
				this.cityid = e.id
				this.citys = e.name
			},
			resetting() {
				this.daycurry = null
			},
			async toclick(){
				this.page = 1
				this.list = []
				// this.city = this.Seach[0].name
				const params = {
					page:this.page,
					limit:10,
					city_id:this.cityid
				}
				this.getlist(params)
				this.city = this.citys
				this.isShow = false
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 490rpx;
		background-color: #2A755E;
		padding-bottom: 100rpx;
		min-height: 1500rpx;
		height: auto;
	}

	.popViews {
		height: auto;

		.tit {
			padding: 30rpx 0;
			font-size: 32rpx;
			font-weight: 500;
			color: #000000;
		}
	}

	.oy_tabs {
		text-align: center;

		p {
			width: 158rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			background: #F4F4F4;
			border-radius: 8rpx;
			font-size: 28rpx;
			border: 1px solid #F4F4F4;
			margin: 10rpx 40rpx 20rpx 0rpx;
		}

		.green {
			background: #E9FFF9;
			border: 1px solid #49CAA4;
			border-radius: 10rpx;
			color: #49CAA4;
		}
	}

	.ty_title {
		text-align: right;
		color: white;
		justify-content: flex-end;
		align-items: center;

		label {
			display: block;
			font-size: 30rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-right: 10rpx;
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 20rpx 20rpx;
		margin: 20rpx 0;

		image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;
			flex: 1;
			p {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}
		}

		.posw {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
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
		
			text:nth-child(1) {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #FFA1AD;
			}
		
			text:nth-child(2) {
				margin-left: 10rpx;
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #F2AD5A;
			}
		
			p {
				font-size: 22rpx;
				align-items: center;
				margin-left: 10rpx;
			}
		}

		.title {
			margin: 10rpx 0 30rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			align-items: center;

			label {
				display: block;
				margin-right: 10rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #E49332;
				background: #FFECD6;
				line-height: 36rpx;
				padding: 2rpx 15rpx;
			}
		}
	}

	.dc_span {
		justify-content: space-between;
		align-items: center;

		label {
			color: #999999;
			font-size: 24rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}

	.btn {
		p {
			width: 345rpx;
			height: 124rpx;
			line-height: 124rpx;
			background: #FFFFFF;
			text-align: center;
			box-sizing: border-box;
			margin-top: 140rpx;
		}

		.ps {
			border: 1px solid #999999;
		}

		.gs {
			background: #49CAA4;
			color: white;
		}
	}
</style>