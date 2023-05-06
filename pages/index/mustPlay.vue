<template>
	<view class="body">
		<view class="ms_header pd30">
			<view class="ms_cont">
				<image class="header" src="../../static/image/mustPlay/newpro.png" mode=""></image>
				<view class="ms_qsn dis_f">
					<view class="pos">
						<image src="../../static/image/mustPlay/yhq.png" mode=""></image>
						<p>100<span>元</span></p>
					</view>
					<view class="pos">
						<image src="../../static/image/mustPlay/yhq.png" mode=""></image>
						<p>100<span>元</span></p>
					</view>
				</view>
				<text class="text">已领取</text>
			</view>
			<view class="title">
				<p class="ts">经典策划</p>
				<view class="t_to dis_f">
					<view class="bk" v-for="(v,i) in list" :key="i">
						<image src="../../static/index/zheng.jpg" mode=""></image>
						<p>每月1次</p>
						<view class="gd dis_f">
							<label class="tit">青蓝行动</label>
							<label class="nm">一年一度大型公益活动</label>
						</view>
					</view>
				</view>
				<view class="ms_tbs">
					<u-tabs lineColor='#FFFFFF' :inactiveStyle="{color:'#FFFFFF'}" :activeStyle="{color: '#FFFFFF'}"
						:list="list1" @click="click"></u-tabs>
				</view>
				<view class="ix_subsection dis_f">
					<span :class="curry == index ?'check':'checks'" v-for="(item,index) in checklist" :key="index"
						@click="checkout(item,index)">{{item}}</span>
				</view>
				<view class="banner" v-for="(v,i) in list" :key='i'>
					<p class="iun">HOT{{i+1}}</p>
					<view class="videos">
						<video class="myVideo"
							src="https://webstatic.mihoyo.com/upload/static-resource/2022/01/04/72f41ca0acf28922ee3cc2278d920a5f_7569813998111725618.mp4"></video>
					</view>
					<view class="dis_f txt">
						<p>【亭可马里季】斯里兰卡纯玩9天</p>
						<view class="dis_f jscb sil">
							<label class="green">跟团·3天</label>
							<label class="red">￥888</label>
						</view>
						<view class="">
							<label class="red">17181 </label><text>新用户首次活动选择</text>
						</view>
					</view>
					<view class="ms_user dis_f">
						<view>
							<image src="@/static/trends/user.png" mode=""></image>
							<p>李菲</p>
						</view>
						<view class="io">
							<text>02-19</text>
							<p>〝领队阿三非常有责任心 对旅途中每一个点了如指掌 路线设计劳逸结合 给力〞</p>
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
				list: [1, 2],
				list1: [{
					name: '新人榜',
				}, {
					name: '人气榜',
				}, {
					name: '评分榜'
				}],
				curry:null,
				checklist: ['1天活动', '2~3天', '4天+'],
			}
		},
		methods: {
			click(item) {
				// console.log('item', item);
			},
			checkout(e,index) {
				// console.log(e) //切换
				this.curry = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		height: 2800rpx;
		background-color: #FAFAFA;
	}
	.ms_header {
		height: 2000rpx;
		background: linear-gradient(180deg, #FE5F1D 0%, #FE5F1D 80%, #FAFAFA 100%);
		.ms_cont {
			transform: translateY(700rpx);
			height: 380rpx;
			background: #FFD5C4;
			border-radius: 20rpx;
			text-align: center;

			.header {
				margin-top: -5rpx;
				width: 435rpx;
				height: 52rpx;
			}
		}

		.ms_qsn {
			justify-content: space-around;
			margin-top: 60rpx;

			.pos {
				position: relative;

				p {
					position: absolute;
					top: 40rpx;
					left: 32rpx;
					font-size: 38rpx;
					font-weight: 900;
					color: #FF4C37;

					span {
						font-size: 26rpx;
					}
				}
			}

			image {
				width: 300rpx;
				height: 126rpx;
			}
		}

		.text {
			display: block;
			width: 400rpx;
			height: 62rpx;
			line-height: 62rpx;
			color: white;
			font-weight: 600;
			color: white;
			margin: 40rpx auto 0;
			background: linear-gradient(0deg, #FE8153 0%, #FE5B51 100%);
			border-radius: 31rpx;
		}
	}

	.title {
		transform: translateY(700rpx);
		margin-top: 50rpx;
		text-align: center;

		.ts {
			color: white;
			font-weight: 600;
			font-size: 34rpx;
		}

		.bk {
			width: 280rpx;
			height: 300rpx;
			background: #5CB3FF;
			border-radius: 20rpx;
			position: relative;

			p {
				position: absolute;
				top: 10rpx;
				right: 20rpx;
				z-index: 2;
				width: 110rpx;
				height: 30rpx;
				background: linear-gradient(-79deg, #FD8354 0%, #FF5E55 100%);
				border-radius: 15rpx 15rpx 15rpx 2rpx;
				font-size: 20rpx;
				font-weight: normal;
				color: white;
			}

			image {
				width: 100%;
				height: 200rpx;
				border-radius: 20rpx 20rpx 0 0;
				z-index: 2;
			}

		}
	}

	.gd {
		flex-direction: column;
		text-align: left;

		.tit {
			margin-left: 20rpx;
			font-size: 34rpx;
			font-weight: 800;
			color: white;
		}

		.nm {
			margin-left: 20rpx;
			margin-top: 10rpx;
			font-size: 22rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 15rpx;
		}
	}

	.t_to {
		margin-top: 30rpx;
		justify-content: space-around;
	}

	.ms_tbs {
		margin-top: 180rpx;
	}

	.banner {
		height: 730rpx;
		margin-top: 30rpx;
		background-color: white;
		border-radius: 20rpx;
		position: relative;
		.iun{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			color: white;
			background: linear-gradient(0deg, #F36B31 0%, #FDB675 100%);
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			width: 98rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			font-size: 26rpx;
		}
		.videos{
			padding: 10rpx;
			background-color: black;
			border-radius: 20rpx 20rpx 0 0;
		}
		.myVideo {
			width: 100%;
			height: 340rpx;
			border-radius: 20rpx 20rpx 0 0;
		}
		.txt{
			flex-direction: column;
			text-align: left;
			justify-content: center;
			padding: 10rpx 20rpx;
			.sil{
				margin-top: 10rpx;
			}
			.green{
				font-size: 22rpx;
				color: #49CAA4;
			}
			.red{
				color: red;
				font-size: 32rpx;
				font-weight: normal;
			}
		}
	}
	.ms_user{
		padding: 10rpx 20rpx;
		margin-top: 20rpx;
		image{
			width: 70rpx;
			height: 70rpx;
		}
		.io{
			text-align: left;
			margin-left: 30rpx;
			background-color: #F6F7F9;
			padding: 20rpx;
			border-radius: 20rpx;
			text{
				font-size: 24rpx;
			}
			p{
				font-size: 24rpx;
			}
		}
	}
	.ix_subsection {
		width: 80%;
		margin: 40rpx 0;
		justify-content: space-around;
		align-items: center;
	
		span {
			display: block;
		}
	
		.check {
			box-sizing: border-box;
			display: block;
			background-color: #FF7D0F;
			padding: 10rpx 30rpx;
			color: white;
			border-radius: 32rpx;
		}
	
		.checks {
			box-sizing: border-box;
			display: block;
			color: white;
			padding: 10rpx 30rpx;
			border-radius: 32rpx;
		}
	}
</style>