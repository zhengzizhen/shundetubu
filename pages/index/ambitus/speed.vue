<template>
	<view class="pd30">
		<view class="ts_tbs dis_f">
			<p :class="v.state?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v)">
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
						<text>03.18已满员</text>
						<label>04.02剩3名额</label>
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
					<p :class="curry == index ?'green':''" v-for="(v,index) in tablist1" :key="index" @click="chetbs1(v,index)">
						{{v}}
					</p>
				</view>
				
				<p class="tit">价格</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="curry1 == index?'green':''" v-for="(v,index) in tablist2" :key="index" @click="chetbs2(v,index)">
						{{v}}
					</p>
				</view>
				
				<p class="tit">活动状态</p>
				<p class="forList"></p>
				<view class="oy_tabs dis_f flexw">
					<p :class="curry2 == index?'green':''" v-for="(v,index) in tablist3" :key="index" @click="chetbs3(v,index)">
						{{v}}
					</p>
				</view>
				
				<view class="dis_f btn">
					<p class="ps" @click='resage'>重置</p>
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
				curry:null,
				tablist1: ['1天','2~3天','4天及以上'],
				curry1:null,
				tablist2: ['0-100','100-200','200-500','500-1000','1000以上'],
				curry2:null,
				tablist3: ['报告中', '即将成行','已成行'],
				list: [1, 2, 3, 4, 5]
			}
		},
		onLoad(option){
			uni.setNavigationBarTitle({
			    title: option.title
			});
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
			chetbs1(e,index) {
				this.curry = index
			},
			chetbs2(e,index) {
				this.curry1 = index
			},
			chetbs3(e,index) {
				this.curry2 = index
			},
			close(){
				this.isShow= false
			},
			open(){
				
			},
			resage(){
				this.tablist1.forEach((item,index)=>{
					item.state = false
				})
				this.tablist2.forEach((item,index)=>{
					item.state = false
				})
				this.tablist3.forEach((item,index)=>{
					item.state = false
				})
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

			text {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #FFA1AD;
			}

			label {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #F2AD5A;
				margin-left: 10rpx;
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
			margin-top: 80rpx;
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