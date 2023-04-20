<template>
	<view class="pd30">
		<view class="ts_tbs dis_f">
			<p :class="v.state?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v)">
				{{v.name}}
			</p>
		</view>

		<view class="ts_tabs dis_f">
			<p :class="v.state?'green':''" v-for="(v,index) in tablist1" :key="index" @click="chetbs1(v)">
				{{v.name}}
			</p>
		</view>

		<view class="">
			<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
				<image src="@/static/index/zheng.jpg" mode=""></image>
				<view class="dc_god">
					<p>【亭可马里季】斯里兰卡纯玩9天</p>
					<text class="posw">3天</text>
					<view class="dc_latt dis_f">
						<label>04.02剩3名额</label>
						<text>03.18已满员</text>
						<p class="dis_f"><u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<p class="title dis_f"><label>难度： 休闲</label><u-icon name="star" size='14'></u-icon></p>
					<view class="dc_span dis_f">
						<text>￥888</text>
						<label>4.91分丨291人去过</label>
					</view>
				</view>
			</view>
		</view>


		<u-popup :show="isShow"  mode="top" @close="close" @open="open">
			<view class="popViews pd30">
				<p class="tit">路线类型</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="v.state?'green':''" v-for="(v,index) in tablist1" :key="index" @click="chetbs1(v)">
						{{v.name}}
					</p>
				</view>
				
				<p class="tit">路线类型</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="v.state?'green':''" v-for="(v,index) in tablist1" :key="index" @click="chetbs1(v)">
						{{v.name}}
					</p>
				</view>
				
				<p class="tit">路线类型</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="v.state?'green':''" v-for="(v,index) in tablist1" :key="index" @click="chetbs1(v)">
						{{v.name}}
					</p>
				</view>
				
				
				<view class="dis_f btn">
					<p class="ps">重置</p>
					<p class="gs">确定（20个活动）</p>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				tablist: [{
						name: '综合',
						state: true
					},
					{
						name: '口碑',
						state: false
					},
					{
						name: '热度',
						state: false
					},
					{
						name: '筛选',
						state: false
					}
				],
				tablist1: [{
						name: '登山徒步',
						state: false
					},
					{
						name: '美食休闲',
						state: false
					},
					{
						name: '亲子活动',
						state: false
					},
				],
				list: [1, 2, 3, 4, 5]
			}
		},
		methods: {
			chetbs(e) {
				this.tablist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				if(e.name == '筛选'){
					this.isShow = true
				}
			},
			chetbs1(e) {
				e.state = !e.state
			},
			close(){
				this.isShow= false
			},
			open(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ts_tbs {
		text-align: center;

		p {
			width: 24%;
			padding: 20rpx;
		}

		.green {
			color: #49CAA4;
		}
	}

	.ts_tabs {
		margin: 30rpx 0;
		text-align: center;

		p {
			width: 158rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			background: #F4F4F4;
			border-radius: 31rpx;
			margin-right: 20rpx;
			font-size: 28rpx;
		}

		.green {
			color: white;
			background: #49CAA4;
		}
	}

	.dc_mod {
		position: relative;
		background-color: white;
		padding: 20rpx 20rpx;

		image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;
			p{
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}
		}

		.posw {
			position: absolute;
			top: 30rpx;
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

			text {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #FFA1AD;
				margin-left: 10rpx;
			}

			label {
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
			
			align-items: center;
			label {
				display: block;
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
				margin-right: 10rpx;
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
	.popViews{
		height: auto;
		padding-bottom: 20rpx;
		.tit{
			padding: 30rpx 0;
			font-size: 32rpx;
			font-weight: 500;
			color: #000000;
		}
	}
	.oy_tabs {
		margin: 0rpx 0;
		text-align: center;
		p {
			width: 158rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			background: #F4F4F4;
			border-radius: 8rpx;
			margin-right: 20rpx;
			font-size: 28rpx;
			border: 1px solid #F4F4F4;
			margin: 10rpx 10rpx 20rpx 0rpx;
		}
	
		.green {
			background: #E9FFF9;
			border: 1px solid #49CAA4;
			border-radius: 10rpx;
			color: #49CAA4;
		}
	}
	.btn{
		p{
			width: 345rpx;
			height: 124rpx;
			line-height: 124rpx;
			background: #FFFFFF;
			text-align: center;
			box-sizing: border-box;
			margin-top: 140rpx;
		}
		.ps{
			border: 1px solid #999999;
		}
		.gs{
			background: #49CAA4;
			color: white;
		}
	}
</style>