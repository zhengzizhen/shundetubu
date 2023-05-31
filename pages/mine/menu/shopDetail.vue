<template>
	<view class="body">

		<view class="ds_banner posir">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="false" :duration="500">
				<swiper-item v-for="(item,index) in swiperlist" :key="index">
					<image @click="$Resize(swiperlist,index)" :src="item" mode=""></image>
				</swiper-item>

			</swiper>
			<p class="swiperposi posia">
				{{swiperlist.length}}张照片
			</p>
		</view>

		<view class="title pd30">
			<p class="head">{{goods.name}}</p>
			<label>{{goods.intro}}</label>
			<p class="bottom dis_f jscb alitmc">
				<view class="ius">
					<p class="red"><text>￥</text>{{runs.price}}</p>
				</view>
				<text class="num">已售： {{goods.acura}}</text>
			</p>
		</view>

		<view class="pd30 content">
			<view @click="specifications = true" class="pos dis_f">
				<label>选择:</label>
				<text>已选: "{{guide}}"</text>
			</view>
			<view class="pos dis_f">
				<label>物流:</label>
				<text>物流：包邮，平日下单后{{goods.l_post_l}}h之内发货，五一假期期间不发货，节后安排发货</text>
			</view>
			<view class="pos dis_f noborder">
				<label>{{goods.qa_tabs}}</label>
			</view>
		</view>

		<view class="detach">
			<view class="ts_tbs dis_f jscb">
				<p :class="tabcurry == index ?'green':''" v-for="(v,index) in CheckTablist" :key="index"
					@click="CheckTab(v,index)">
					{{v}}
				</p>
			</view>
			<!-- 详情 -->
			<view class="image" v-show="tabcurry == 0">
				<!-- <image src="@/static/as/changs.jpg" mode=""></image> -->
				<view class="u-content">
					<u-parse :content="goods.content"></u-parse>
				</view>
			</view>
			<!-- 评价 -->
			<view class="nocity" v-show="tabcurry == 1">
				<view class="content" v-for="(item,index) in list" :key="index">
					<view class="header dis_f">
						<image src="@/static/trends/user.png" mode=""></image>
						<view class="dis_f flex_c ml20 jscb">
							<p>晴天</p>
							<u-rate readonly active-color="#FFAA50" :count="count" v-model="value"></u-rate>
						</view>
					</view>
					<p class="center">非常Nice</p>
					<label>2023-03-10 02:00 红色</label>
				</view>
			</view>

			<view @click="toshop" class="ix_block index_pad pd30" v-show="tabcurry == 2">
				<view class="ix_img dis_f">
					<view class="ix_flexs" v-for="(item,index) in moenylist" :key="index">
						<image :src="item.image"></image>
						<p class="ix_title">{{item.text}}</p>
						<p class="ix_yellow">￥{{item.money}}.00</p>
					</view>
				</view>
			</view>
		</view>
		<!-- 更多好物 -->
		<view class="bottoms dis_f ">
			<view class="dis_f alitmc jscb">
				<view class="dis_f flex_c alitmc con">
					<image src="@/static/image/mine/message.png" mode=""></image>
					<text @click="tofirst">更多好物</text>
				</view>
				<view class="dis_f flex_c alitmc con">
					<image src="@/static/image/mine/msg.png" mode=""></image>
					<text>咨询</text>
				</view>
				<view class="dis_f flex_c alitmc con" @click="toCar">
					<image src="@/static/image/mine/cart.png" mode=""></image>
					<text>购物车</text>
				</view>
				<view class="dis_f">
					<p class="addcar"  @click='tocard'>加入购物车</p>
					<p class="goshop" @click='toPlay()'>立即购买</p>
				</view>
			</view>
		</view>
		<!-- 返回 -->
		<view class="fixed">
			<u-icon @click='toback' name="arrow-left" size='20' color='#FFFFFF'></u-icon>
		</view>
		<!-- 选择规格 -->
		<u-popup :show="specifications" mode="bottom" closeable @close="closes" @open="opens">
			<view class="space pd30">
				<view class="static dis_f alitmc">
					<image class="bor_r" :src="runs.image" mode=""></image>
					<view class="popview">
						<text>￥{{runs.price}}</text>
						<p>已选： “<span v-for="(i,s) in runs.attr">{{i}}</span>”</p>
					</view>
				</view>
				<view class="" v-if="goods.sku">
					<view v-if="goods.sku.attrs[0]">
						<p class="poptitle">{{goods.sku.attrs[0].attr}}</p>
						<view class="chekpop">
							<p @click='chestatic(goods.sku.attrs[0],index)' :class="curry == item ? 'chekpops':''"
								v-for="(item,index) in goods.sku.attrs[0].items" :key="index">{{item}}</p>
						</view>
					</view>
					
					<view v-if="goods.sku.attrs[1]">
						<p class="poptitle">{{goods.sku.attrs[1].attr}}</p>
						<view class="chekpop">
							<p @click='chestatic1(goods.sku.attrs[1],index)' :class="curry1 == item ? 'chekpops':''"
								v-for="(item,index) in goods.sku.attrs[1].items" :key="index">{{item}}</p>
						</view>
					</view>
				</view>
				<p class="mo poptitle">选择数量</p>
				<view class="number dis_f">
					<p @click='reduce'>-</p>
					<text>{{num}}</text>
					<p @click='add'>+</p>
					<label>库存 ： {{runs.stock}}</label>
				</view>
				<view class="bottoms dis_f nobor">
					<view class="dis_f alitmc jscb">
						<view class="dis_f flex_c alitmc con">
							<image src="@/static/image/mine/message.png" mode=""></image>
							<text @click="tofirst">更多好物</text>
						</view>
						<view class="dis_f flex_c alitmc con">
							<image src="@/static/image/mine/msg.png" mode=""></image>
							<text>咨询</text>
						</view>
						<view class="dis_f flex_c alitmc con" @click="toCar">
							<image src="@/static/image/mine/cart.png" mode=""></image>
							<text>购物车</text>
						</view>
						<view class="dis_f">
							<p class="addcar" @click='tocard'>加入购物车</p>
							<p class="goshop" @click='toPlay()'>立即购买</p>
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
				swiperlist: [],
				list: [1, 2, 3],
				count: 5,
				value: 4,
				num: 1,
				specifications: false, //规格选择
				tabcurry: 0,
				CheckTablist: ['详情', '评价', '推荐'],
				moenylist: [{
						image: '../../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日',
						money: '60'
					},
					{
						image: '../../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日',
						money: '75'
					},
					{
						image: '../../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日',
						money: '75'
					},
					{
						image: '../../../static/index/chang.jpg',
						text: '【花漫天山】新疆伊犁 杏花大环线8日',
						money: '75'
					},
				],
				curry: 0,
				curry1:0,
				check: ['绿色', '红色', '彩虹色'],
				goods: {},
				guide:'',
				attr:[],
				runs:{},
				id:'',
				moeny:''
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getlist(option.id)
		},
		methods: {
			async getlist(v) {
				const res = await this.$http('/shop/goods/detail', {
					goods_id: v
				})
				this.goods = res.data.data
				this.swiperlist = this.swiperlist.concat(res.data.data.master_image)
				this.swiperlist = this.swiperlist.concat(res.data.data.assist_images)
				this.guide = res.data.data.sku.attrs[0].items[0]
				this.runs = res.data.data.sku.sku[0]
				this.runs.price = this.runs.price * this.num
				this.curry = this.runs.attr[0]
				this.curry1 = this.runs.attr[1]
				this.attr[0] = this.runs.attr[0]
				this.attr[1] = this.runs.attr[1]
			},
			CheckTab(e, index) {
				this.tabcurry = index
			},
			toPlay() {
				const params = [
					{
						goods_id:this.id,
						number:this.num,
						sku:this.attr,
						price:this.runs.price,
						master_image:this.goods.master_image,
						name:this.goods.name,
						freight:parseInt(this.goods.freight)
					}
				]
				this.$jump('./goPlay?obj=','params',JSON.stringify(params))
			},
			toCar() {
				this.$jump('./MyCart')
			},
			toshop() {
				this.$jump('./shopDetail')
			},
			toback() {
				uni.navigateBack()
			},
			tofirst() {
				this.$jump('./HaowuMall')
			},
			opens() {

			},
			closes() {
				this.specifications = false
			},
			chestatic(e, index) {
				this.curry = e.items[index]
				this.attr[0] = e.items[index] 
				this.price()
			},
			chestatic1(e, index) {
				this.curry1 = e.items[index]
				this.attr[1] = e.items[index]
				this.price()
			},
			price(){
				this.goods.sku.sku.forEach((item,index)=>{
					if(JSON.stringify(item.attr) === JSON.stringify(this.attr)){
						this.runs = item
						this.moeny = item.price
						this.runs.price = this.moeny * this.num
					}
				})
			},
			valChange(e) {
				console.log(e);
			},
			reduce() {
				if (this.num == 1) {
					return false
				}
				this.num--
				this.runs.price = this.moeny*this.num
			},
			add() {
				this.num++
				this.runs.price = this.moeny*this.num
			},
			async tocard(){
				const res = await this.$http('/shop/car/add',{
					goods_id:this.id,
					sku:this.attr,
					number:this.num
				})
				uni.$u.toast('添加成功')
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.body {
		height: auto;
		background-color: #FAFAFA;
		padding-bottom: 200rpx;
	}

	.banner {

		image {
			width: 750rpx;
			height: 494rpx;
		}
	}

	.title {
		margin: 20rpx 0;
		background-color: white;

		.head {
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		label {
			display: block;
			margin: 20rpx 0;
			font-size: 24rpx;
			font-weight: 500;
			color: #666666;
		}

		.bottom {
			.ius {
				display: flex;
				width: 200rpx;

				text {
					color: #FF4040;
					display: inline-block;
					font-size: 26rpx;
				}
			}

			.red {
				color: #FF4040;
				font-size: 40rpx;
			}

			.num {
				font-size: 24rpx;
				font-weight: 500;
				color: #666666;
			}
		}
	}

	.content {
		height: auto;
		background-color: white;
		padding: 10rpx 30rpx;

		.pos {
			margin: 20rpx 0;
			padding: 10rpx 0 20rpx;
			border-bottom: 1px solid #E6E6E6;
			background: url('../../../static/image/mine/right.jpg') no-repeat 660rpx 10rpx;
			background-size: 2%;
		}

		label {
			font-size: 28rpx;
			font-weight: 500;
			color: #666666;
		}

		text {
			display: block;
			width: 540rpx;
			margin-left: 30rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #222222;
		}
	}

	.ts_tbs {
		p {
			text-align: center;
			width: 33%;
			padding: 20rpx;
			font-size: 28rpx;
		}

		.green {
			color: #49CAA4;
		}
	}

	.detach {
		margin: 20rpx 0;
		background-color: white;
	}

	.image {
		width: 690rpx;
		height: 966rpx;
		margin: 0 auto;

		image {
			width: 690rpx;
			height: 966rpx;
		}
	}

	.bottoms {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);

		image {
			width: 40rpx;
			height: 40rpx;
		}

		.con {
			width: 122rpx;
		}

		text {
			font-size: 22rpx;
			font-weight: 500;
			color: #222222;
		}

		.addcar {
			width: 181rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #41ACD8;
			color: white;
			font-size: 28rpx;
			border-radius: 40rpx 0rpx 0rpx 40rpx;
		}

		.goshop {
			width: 181rpx;
			height: 80rpx;
			line-height: 80rpx;
			color: white;
			text-align: center;
			background: #49CAA4;
			font-size: 28rpx;
			border-radius: 0rpx 40rpx 40rpx 0rpx;
		}
	}

	.nocity {
		.content {
			padding-bottom: 20rpx;
			margin: 20rpx 0;
			border-bottom: 1px solid #e6e6e6;

			.header {
				image {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.center {
				margin: 30rpx 0;
				font-size: 24rpx;
				font-weight: 500;
				color: #444444;
			}

			label {
				font-size: 22rpx;
				font-weight: 500;
				color: #999999;
			}
		}
	}

	.ix_block {
		position: relative;


		.ix_subsection {
			margin: 40rpx auto;
			justify-content: space-around;
			align-items: center;

			span {
				display: block;
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
			}


			.ix_title {
				margin: 0 auto 20rpx;
				word-wrap: normal;
				font-size: 28rpx;
			}

			.ix_yellow {
				font-size: 30rpx;
				font-weight: 500;
				color: #FF4040;
			}
		}
	}

	.fixed {
		position: fixed;
		top: 80rpx;
		left: 20rpx;
	}

	.space {
		width: 100%;
		min-height: 760rpx;
		height: auto;
		background-color: white;
		padding: 30rpx;
		box-sizing: border-box;
		margin-bottom: 200rpx;
		.static {
			padding-bottom: 20rpx;
			border-bottom: 1px solid #E6E6E6;

			image {
				width: 240rpx;
				height: 240rpx;
			}

			.popview {
				margin-left: 20rpx;

				text {
					font-size: 30rpx;
					font-weight: 500;
					color: #FF4040;
				}

				p {
					font-size: 26rpx;
					font-weight: 500;
					color: #000000;
				}
			}
		}

		.poptitle {
			margin: 20rpx 0;
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}

		.chekpop {
			p {
				display: inline-block;
				padding: 10rpx 40rpx;
				background: #F2F2F2;
				border-radius: 10rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #999999;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				border: 1px solid #F2F2F2;
			}

			.chekpops {
				background: #e9fff4;
				border: 1px solid #35C77C;
				color: #35C77C;
			}
		}

		.mo {
			margin-top: 0 !important;
		}

		.number {
			text {
				margin: 0 10rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: #000000;
				width: 40rpx;
				text-align: center;
			}

			p {
				width: 42rpx;
				height: 42rpx;
				line-height: 42rpx;
				background: #F2F2F2;
				border-radius: 10rpx;
				text-align: center;
			}

			label {
				font-size: 28rpx;
				font-weight: 500;
				color: #999999;
				margin-left: 20rpx;
			}
		}

		.nobor {
			box-shadow: 0rpx 0rpx 0rpx 0rpx !important;
			margin-bottom: 40rpx;
		}
	}
</style>