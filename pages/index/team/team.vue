<template>
	<view class="as_body">
		<!-- 列表渲染 -->
		<view>
			<view class="ix_shop index_pads dis_f pd30">
				<view class="ix_list dis_f" v-for="(item,index) in arrlist" :key="index" @click='clinto(item,index)'>
					<image style="border-radius: 50%;" :src="item.image" mode=""></image>
					<text>{{item.title}}</text>
					<label>{{item.intro}}</label>
				</view>
			</view>

			<view class="as_mon pd30">
				<view class="tit dis_f">
					<p>本月精彩团建转播</p>
					<view class="dis_f"  @click='goWonderful()'>
						<span>更多</span>
						<u-icon name="arrow-right" color="#000000" size='12'></u-icon>
					</view>
				</view>

				<view class="img dis_f">
					<view @click="toDetails(v.id)"  v-for="(v,i) in monthlist" :key="i">
						<view class="" v-if="i<3">
							<image v-if="v.images[0]" :src="v.images[0]" mode=""></image>
							<p>{{v.trip_name}}</p>
						</view>
					</view>
				</view>
			</view>

			<p class="as_tit pd30">当季热门</p>
			
			<view class="uni-margin-wrap">
				<swiper class="swiper" @change='change' circular :autoplay="false" next-margin='160rpx'
					previous-margin='180rpx' :interval="2000" :duration="500">
					<swiper-item  @click="toDetails(item.id)" v-for="(item,index) in swiperlist" :key="index">
						<view class="posir">
							<image :src="item.master_image" mode=""></image>
							<view v-show="swipercurrent == index" class="posiswiper dis_f flex_c">
								<p>{{item.title}}</p>
								<view class="ios">
									<text v-for="(v,i) in item.label" :key="i">{{v}}</text>
								</view>
								<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="info dis_f">
					<p :class="swipercurrent==index?'active':''" v-for="(v,index) in swiperlist.length"></p>
				</view>
			</view>
			<p class="as_tit pd30">口碑之选</p>
			<view class="ix_subsection dis_f pd30">
				<span :class="curry == index ?'check':'checks'" v-for="(item,index) in checklist" :key="index"
					@click="checkout(item,index)">{{item}}</span>
			</view>
			<view class="pd30">
				<view class="as_kb dis_f" v-for="(item,index) in list" :key="index">
					<view class="as_posi">
						<p>{{item.title}}</p>
						<image :src="item.master_image" mode=""></image>
					</view>
					<view class="as_text dis_f">
						<view class="dis_f jus">
							<text>{{item.traveller_number}}人去过丨{{item.grade}}分</text>
							<label>{{item.difficulty}}</label>
						</view>
						<text class="xq" @click="toDetails(item.id)">
							查看详情
						</text>
					</view>
				</view>
			</view>
			
			<!-- 个性定制 -->
			<p class="as_tit pd30">个性定制</p>
			
			<view class="ix_subsection dis_f pd30">
				<span :class="curry1 == index?'check':'checks'" v-for="(item,index) in checklist1" :key="index"
					@click="checkout1(item,index)">{{item.name}}</span>
			</view>
			<view class="ix_img dis_f pd30">
				<view @click="toDetails(item.id)" class="ix_flexs" v-for="(item,index) in imglist" :key="index">
					<image :src="item.master_image"></image>
					<p class="ix_posi">{{item.title}}</p>
					<p class="ix_title">{{item.difficulty}}</p>
					<p class="ix_txtgreen">{{item.traveller_number}}人去过</p>
				</view>
			</view>
			
			<!-- <p class="as_tit pd30">口碑之选</p>
			<view class="dis_f tm_img pd30">
				<image class="c" src="@/static/index/luowu.jpg" mode=""></image>
				<image class="z" src="@/static/image/index/banners.jpg" mode=""></image>
			</view>
			<view class="dis_f jscb ima pd30" >
				<image class="ima" v-for="(item,index) in list" :key="index" src="@/static/image/index/banners.jpg" mode=""></image>
			</view> -->
		</view>
		
		<!-- <p class="tm_btn" @click='isShow = !isShow'>立即定制</p> -->
		
		<!-- 我要定制 -->
		<u-popup :show="isShow" mode="bottom" :closeable='true' @close="popClose" @open="popOpen">
			<view class="popViews pd30">
				<p class="Poptitle">想要定制活动吗?</p>
				<p class="ider">方法一：长按识别二维码，添加策划师企业微信</p>
				<image
					src="https://img2.baidu.com/it/u=2020520018,1139302565&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
					mode=""></image>
				<p class="ider">方法二：留下你的联系方式，我们会与你联系</p>
		
				<input v-model="userphone" type="text" class="wx" placeholder="联系电话/微信号">
				<view class="dis_f twoipt jscb">
					<input v-model="username" class="names" type="text" placeholder="如何称呼您？">
					<input v-model="usernumber" class="names" type="number" placeholder="出行人数是">
				</view>
				<p class="popbtn" @click='Popbtn()'>提交</p>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrlist: [],
				swiperlist: [],
				sublist: ['当季推荐', '口碑路线'],
				swipercurrent:0,
				swiperlist: [],
				current: 0,
				list: [],
				curry:0,
				checklist: ['1天定制','2~3天','4天以上',],
				curry1:0,
				checklist1: [{
						name: '企业定制',
					},
					{
						name: '亲子定制',
					},
					{
						name: '私人定制',
					},
				],
				imglist: [],
				public_praise:[],//时间选择
				team:[],//团队选择
				monthlist:[],
				isShow:false,
				username:'',
				usernumber:'',
				userphone:''
			};
		},
		onLoad() {
			this.getlist()
			this.getmonth()
		},
		methods: {
			async getlist(){
				const res = await this.$http('/trip/teamcustom/index')
				this.arrlist = res.data.data.icon_list //金刚区
				this.swiperlist = res.data.data.hot
				this.public_praise = res.data.data.public_praise
				this.list = res.data.data.public_praise.day1
				this.team = res.data.data.team
				this.imglist = res.data.data.team.firm
			},
			async getmonth(){
				const res = await this.$http('/trip/teamcustom/dynamic/list',{
					page:1,
					limit:3
				})
				this.monthlist = res.data.data
			},
			sectionChange(index) {
				this.current = index;
			},
			checkout(e,index) {
				this.curry = index
				if(this.curry == 0){
					this.list = this.public_praise.day1
				}else if(this.curry == 1){
					this.list = this.public_praise.day23
				}else if(this.curry == 2){
					this.list = this.public_praise.day4
				}
			},
			change(e) {
				console.log(e.detail.current);
				this.swipercurrent = e.detail.current
			},
			checkout1(e,index) {
				this.curry1 = index
				if(this.curry1 == 0){
					this.list = this.team.firm
				}else if(this.curry1 == 1){
					this.list = this.team.kids
				}else if(this.curry1 == 2){
					this.list = this.team.private
				}
			},
			toDetails(e) {
				this.$jump('/pages/index/Details/Details?id=', 'params', e);
			},
			goWonderful(){
				this.$jump('./Wonderful')
			},
			clinto(item,index){
				const params = {
					id:item.id,
					name:item.title
				}
				this.$jump('./oneday?obj=','params',JSON.stringify(params))
			},
			//提交定制
			async Popbtn(){
				const params = {
					
				}
				const res = await this.$http('/feedback/feedback',)
			},
			popClose(){
				this.isShow = !this.isShow
			},
			popOpen(){
				
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
			box-sizing: border-box;
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
	.swiper {
		width: 100%;
		height: 500rpx;
		text-align: center;
	
		.posir {
			width: 380rpx;
			height: 500rpx;
		}
	
		image {
			margin: 0 auto;
			width: 380rpx;
			height: 500rpx;
			border-radius: 20rpx;
		}
	
		.posiswiper {
			position: absolute;
			bottom: 20rpx;
			left: 0;
			padding: 10rpx 20rpx;
			text-align: left;
			animation: scaleout .5s ease-in-out;
			p {
				font-size: 30rpx;
				font-weight: bold;
				color: #FFFFFF;
			}
			text {
				font-size: 24rpx;
				font-weight: 500;
				color: #FFFFFF;
				background: rgba(255, 255, 255, .5);
				padding: 5rpx 10rpx;
			}
			.ios {
				margin: 10rpx 0 20rpx;
				text:nth-child(2){
					margin-left: 10rpx;
				}
			}
			.m10 {
				margin-left: 10rpx;
			}
			label {
				font-size: 24rpx;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}
	.info{
		width: 100%;
		text-align: center;
		margin: 20rpx auto;
		justify-content: center;
		p{
			margin: 0 8rpx;
			width: 22rpx;
			height: 22rpx;
			background: #F0F0F0;
			border-radius: 50%;
		}
		.active{
			background: #49CAA4 !important;
		}
	}
	.popViews {
		height: 1078rpx;
		text-align: center;
	
		.Poptitle {
			margin: 40rpx auto;
			font-size: 36rpx;
			font-weight: 500;
			color: #000000;
		}
	
		.ider {
			font-size: 28rpx;
			font-weight: 500;
			color: #000000;
			text-align: left;
		}
	
		image {
			width: 228rpx;
			height: 228rpx;
			margin: 40rpx auto;
		}
	
		.wx {
			box-sizing: border-box;
			margin: 50rpx auto 20rpx;
			width: 580rpx;
			height: 92rpx;
			background: #F6F7F9;
			border-radius: 20rpx;
			text-align: left;
			padding-left: 20rpx;
			font-size: 28rpx;
		}
	
		.twoipt {
			width: 580rpx;
			margin: 0 auto;
			text-align: left;
	
			.names {
				font-size: 28rpx;
				box-sizing: border-box;
				padding-left: 20rpx;
				width: 280rpx;
				height: 92rpx;
				background: #F6F7F9;
				border-radius: 20rpx;
			}
		}
	
		.popbtn {
			width: 580rpx;
			height: 92rpx;
			margin: 40rpx auto;
			background: #49CAA4;
			border-radius: 46rpx;
			color: white;
			line-height: 92rpx;
			text-align: center;
		}
	}
</style>