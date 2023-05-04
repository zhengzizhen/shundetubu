<template>
	<view class="as_body">
		<!-- 列表渲染 -->
		<view class="pd30">
			<view class="ix_shop index_pads dis_f">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click='clinto(index)'>
					<image style="border-radius: 50%;" :src="item.image" mode=""></image>
					<text>{{item.name}}</text>
					<label>{{item.label}}</label>
				</view>
			</view>

			<view class="as_mon">
				<view class="tit dis_f">
					<p>本月精彩团建转播</p>
					<view class="dis_f"  @click='goWonderful()'>
						<span>更多</span>
						<u-icon name="arrow-right" color="#000000" size='12'></u-icon>
					</view>
				</view>

				<view class="img dis_f">
					<view class="" v-for="(v,i) in list" :key="i">
						<image src="@/static/index/two.jpg" mode=""></image>
						<p>乔达·意式山城...</p>
					</view>
				</view>
			</view>

			<p class="as_tit">当季热门</p>
			<u-swiper :list="swiperlist" previousMargin="30" height='400' :radius='10' indicator indicatorMode="line"
				nextMargin="30" circular :autoplay="false" radius="5" bgColor="#ffffff"></u-swiper>

			<p class="as_tit">口碑之选</p>
			<view class="ix_subsection dis_f">
				<span :class="curry == index ?'check':'checks'" v-for="(item,index) in checklist" :key="index"
					@click="checkout(item,index)">{{item}}</span>
			</view>
			<view class="">
				<view class="as_kb dis_f" v-for="(item,index) in list" :key="index">
					<view class="as_posi">
						<p>【樱花物语】听见心动的声音</p>
						<image src="@/static/index/luowu.jpg" mode=""></image>
					</view>
					<view class="as_text dis_f">
						<view class="dis_f jus">
							<text>111个团队去过丨4.93分</text>
							<label>全球最大的樱花海</label>
						</view>
						<text class="xq">
							查看详情
						</text>
					</view>
				</view>
			</view>
			
			<!-- 个性定制 -->
			<p class="as_tit">个性定制</p>
			
			<view class="ix_subsection dis_f">
				<span :class="curry1 == index?'check':'checks'" v-for="(item,index) in checklist1" :key="index"
					@click="checkout1(item,index)">{{item.name}}</span>
			</view>
			<view class="ix_img dis_f">
				<view class="ix_flexs" v-for="(item,index) in imglist" :key="index">
					<image :src="item.image"></image>
					<p class="ix_posi">{{item.title}}</p>
					<p class="ix_title">{{item.text}}</p>
					<p class="ix_txtgreen">55个团队去过</p>
				</view>
			</view>
			
			<p class="as_tit">口碑之选</p>
			<view class="dis_f tm_img">
				<image class="c" src="@/static/index/luowu.jpg" mode=""></image>
				<image class="z" src="@/static/image/index/banners.jpg" mode=""></image>
			</view>
			<view class="dis_f jscb ima" >
				<image class="ima" v-for="(item,index) in list" :key="index" src="@/static/image/index/banners.jpg" mode=""></image>
			</view>
		</view>
		
		<p class="tm_btn">立即定制</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrlist: [{
						name: '1日团建',
						image: '../../../static/index/zblx.jpg',
						label:'畅游周边轻拓展'
					},
					{
						name: '2-3日',
						image: '../../../static/index/gnjx.jpg',
						label:'团队放松小假日'
					},
					{
						name: '4日以上',
						image: '../../../static/index/gwjx.jpg',
						label:'向远方同行出发'
					},
					{
						name: '美食路线',
						image: '../../../static/index/hdrl.jpg',
						label:'自由式休闲度假'
					},
					{
						name: '小众深度',
						image: '../../../static/index/hwsc.jpg',
						label:'人气宝藏旅行地'
					},
					{
						name: '户外酷玩',
						image: '../../../static/index/bwbd.jpg',
						label:'玩些与众不同的'
					},
					{
						name: '亲子定制',
						image: '../../../static/index/tddz.jpg',
						label:'打造童年小时光'
					},
					{
						name: '关于我们',
						image: '../../../static/index/qzlx.jpg',
						label:'专业团建服务方'
					}
				],
				swiperlist: [
					'../../../static/as/changs.jpg',
					'../../../static/as/changs.jpg',
					'../../../static/as/changs.jpg',
					'../../../static/as/changs.jpg',
				],
				sublist: ['当季推荐', '口碑路线'],

				current: 0,
				list: ['1', '2', '3'],
				radios: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				],
				curry:null,
				checklist: ['2~3天','4天以上','1天定制'],
				curry1:null,
				checklist1: [{
						name: '企业定制',
						state: true
					},
					{
						name: '亲子定制',
						state: false
					},
					{
						name: '私人定制',
						state: false
					},
				],
				imglist: [{
						title: '3天',
						image: '../../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					},
					{
						title: '3天',
						image: '../../../static/index/zheng.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					},
					{
						title: '3天',
						image: '../../../static/index/zheng.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					},
					{
						title: '3天',
						image: '../../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日'
					}
				],
			};
		},
		methods: {
			sectionChange(index) {
				this.current = index;
			},
			radioClick(name) {
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			checkout(e,index) {
				this.curry = index
			},
			checkout1(e,index) {
				this.curry1 = index
			},
			goWonderful(){
				this.$jump('./Wonderful')
			},
			clinto(index){
				this.$jump('./oneday')
				// switch (index){
				// 	case 0:
				// 		this.$jump('./oneday')
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.as_body {
		margin-bottom: 1000rpx;
	}

	.ix_shop {
		flex-wrap: wrap;
		justify-content: space-between;

		.ix_list {
			margin-top: 30rpx;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 24%;

			image {
				width: 62rpx;
				height: 62rpx;
			}

			text {
				margin-top: 10rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #000000;
			}
			label{
				font-size: 22rpx;
				font-weight: 500;
				color: #666666;
			}
		}
	}


	.as_tit {
		font-weight: bold;
		margin: 40rpx 0;
		font-size: 32rpx;
	}


	.dc_span {
		margin-top: 100rpx;
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


	.u-page__tag-item {
		display: inline-block;
		justify-content: space-between;
		margin-right: 40rpx;
	}

	.ds_bt {
		// justify-content: space-between
		height: 40rpx;
		justify-content: space-between;

		label {
			height: 40rpx;
			background: #49CAA4;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 36rpx;
			padding: 5rpx 10rpx;
		}

		p {
			font-size: 24rpx;
			color: #999999;
		}

	}

	.sp {
		margin-top: 20rpx;
		justify-content: space-between;

		p {
			color: red !important;
			font-size: 24rpx;
			font-weight: bold;
		}

		label {
			color: #999999;
			font-size: 24rpx;
		}
	}

	.as_mon {
		margin-top: 50rpx;
		height: 320rpx;
		background: linear-gradient(0deg, #E5FEF7 0%, #ECFFF9 100%);
		border-radius: 20rpx;
		padding: 30rpx 20rpx;
		flex-direction: column;

		.tit {
			justify-content: space-between;
			align-items: center;

			p {
				color: #49CAA4
			}

			span {
				font-size: 26rpx;
			}
		}

		.img {
			width: 100%;
			justify-content: space-between;
			margin-top: 20rpx;

			image {
				width: 200rpx;
				height: 200rpx;
			}

			p {
				margin-top: 10rpx;
				font-size: 28rpx;
			}
		}

	}
	.ix_subsection {
		margin: 40rpx auto;
		// justify-content: space-around;
		align-items: center;
	
		span {
			display: block;
			font-size: 30rpx;
			margin-right: 30rpx;
		}
	
		.check {
			box-sizing: border-box;
			display: block;
			background-color: #49CAA4;
			border: 1px solid #49CAA4;
			padding: 10rpx 30rpx;
			color: white;
			border-radius: 50rpx;
			font-family: 'PF';
		}
	
		.checks {
			border: 1px solid #ccc;
			color: #666666;
			box-sizing: border-box;
			display: block;
			padding: 10rpx 30rpx;
			border-radius: 50rpx;
			font-family: 'PF';
		}
	}
	.as_kb{
		flex-direction: column;
		margin-bottom: 30rpx;
		.as_posi{
			position: relative;
			p{
				font-size: 28rpx;
			}
		}
		.as_text{
			justify-content: space-between;
			align-items: center;
			font-size: 30rpx;
			.xq{
				width: 182rpx;
				height: 64rpx;
				line-height: 64rpx;
				text-align: center;
				background: #49CAA4;
				border-radius: 32rpx;
				color: white;
				font-size: 30rpx;
			}
			.jus{
				flex-direction: column;
				label{
					margin-top: 20rpx;
					width: 220rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					font-size: 24rpx;
					color:#49CAA4;
					display:block;
					border:1px solid #49CAA4;
				}
			}
		}
		p{
			position: absolute;
			bottom: 40rpx;
			left: 10rpx;
			z-index: 2;
			color: white;
		}
		image{
			width: 100%;
			height: 300rpx;
		}
	}
	.ix_img {
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 40rpx;
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
		}
	
		.ix_posi {
			position: absolute;
			top: 20rpx;
			left: 0;
			width: 80rpx;
			height: 42rpx;
			line-height: 42rpx;
			background: #49CAA4;
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			font-size: 22rpx;
			color: white;
			text-align: center;
		}
	
		.ix_title {
			margin: 0 auto 20rpx;
			word-wrap: normal;
			font-size: 28rpx;
		}
	
		.ix_txtgreen {
			width: 166rpx;
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
	.tm_img{
		justify-content: space-between;
		.c{
			width:454rpx ;
			height: 300rpx;
		}
		.z{
			width: 217rpx;
			height: 300rpx;
		}
	}
	.ima{
		margin-top: 10rpx;
		image{
			width: 217rpx;
			height: 217rpx;
		}
	}
	.tm_btn{
		margin: 80rpx auto;
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: white;
		background: #49CAA4;
		border-radius: 39rpx 40rpx 40rpx 39rpx;
	}
	
</style>