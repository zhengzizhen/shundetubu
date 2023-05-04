<template>
	<view class="pd30">
		<view class="ts_tbs dis_f">
			<p :class="curry == index ?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v,index)">
				{{v}}
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
				<p class="tit">天数</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="daycurry == index ?'green':''" v-for="(v,index) in day" :key="index" @click="checkday(v,index)">
						{{v}}
					</p>
				</view>
				
				<p class="tit">价格</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="moneycurry == index?'green':''" v-for="(v,index) in money" :key="index" @click="checkmoney(v,index)">
						{{v}}
					</p>
				</view>
				
				<p class="tit">活动状态</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="statecurry == index?'green':''" v-for="(v,index) in state" :key="index" @click="checkstate(v,index)">
						{{v}}
					</p>
				</view>
				
				
				<view class="dis_f btn">
					<p class="ps" @click='resetting'>重置</p>
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
				curry:0,//综合选择
				tablist: ['综合','口碑','热度','筛选',
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
				list: [1, 2, 3, 4, 5],
				daycurry:null,
				day:['1天','2~3天','4天及以上'],
				moneycurry:null,
				money:['0-100','100-200','200-500','500-1000','1000以上'],
				statecurry:null,
				state:['报告中','即将成行','已成行'],
			}
		},
		methods: {
			chetbs(e,index) {
				this.curry = index
				if(index == 3){
					this.isShow = true
				}
			},
			chetbs1(e) {
				e.state = !e.state
				
			},
			checkday(e,index){ //筛选日期
				this.daycurry = index
			},
			checkmoney(e,index){ //筛选价格
				this.moneycurry = index
			},
			checkstate(e,index){ //筛选状态
				this.statecurry = index
			},
			close(){
				this.isShow= false
			},
			open(){
				
			},
			resetting(){
				this.daycurry = null
				this.moneycurry = null
				this.statecurry = null
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
		.tit{
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