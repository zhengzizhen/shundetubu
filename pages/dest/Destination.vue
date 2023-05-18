<template>
	<view class="pd30 body">
		
		<view class="Swiper">
			<u-swiper circular :list="swiper" @change="e =>changeSwiper(e)"></u-swiper>
		</view>

		<view class="banner" v-for="(v,i) in list" :key='i' @click="toDetail(v.id)">
			<p class="iun">HOT{{i+1}}</p>
			<view class="myVideos" v-if="v.video!=''">
				<video class="myVideo"
					:src="v.video"></video>
			</view>
			<view class="myVideos pdnone">
				<image :src="v.master_image" mode=""></image>
			</view>
			<view class="dis_f txt">
				<p>{{v.title}}</p>
				<view class="dis_f jscb sil alitmc">
					<label class="green">跟团·{{v.day}}天</label>
					<label class="red">￥{{v.price}}</label>
				</view>
				<view v-if='v.fisrt_people_number != 0'>
					<label class="red">{{v.fisrt_people_number}} </label><text>新用户首次活动选择</text>
				</view>
			</view>
			<view class="ms_user dis_f" v-if="v.evaluate!=''">
				<view>
					<image :src="v.evaluate.user_avatar" mode=""></image>
					<p>{{v.evaluate.user_nickname}}</p>
				</view>
				<view class="io">
					<text>{{v.evaluate.created_at}}</text>
					<p>{{v.evaluate.content}}</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				swiper: [],
				bottom:false,//是否触底
				page:2,
				id:''
			}
		},
		onLoad(option) {
			let title = JSON.parse(option.obj).name
			this.id = JSON.parse(option.obj).id
			uni.setNavigationBarTitle({
				title: title
			})
			this.getlist(this.id)
		},
		onReachBottom() {
			if(this.bottom == true){
				return false
			}
			this.bournlist()
		},
		methods: {
			async getlist(id) {
				const res = await this.$http('/trip/bourn/detail', {
					bourn_id: id
				})
				this.swiper = res.data.data.images
				this.list = res.data.data.trip
				if(this.list.length<10){
					this.bottom = true
				}
			},
			async bournlist(){
				const res = await this.$http('/bourn/trip/list',{
					bourn_id:this.id,
					page:this.page,
					limit:10
				})
				if(res.data.data.length<10){
					this.list = this.list.concat(res.data.data)
					this.bottom = true
					return false
				}
				this.list = this.list.concat(res.data.data)
			},
			changeSwiper(){
				
			},
			toDetail(e){
				this.$jump('/pages/index/Details/Details?id=','params',e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.body {
		background-color: #FAFAFA;
		padding-bottom: 100rpx;
		min-height: 1500rpx;
		height: auto;
	}

	video {
		border-radius: 20rpx;
	}

	.banners {
		image {
			margin-top: 40rpx;
			width: 100%;
			height: 300rpx;
			border-radius: 20rpx;
		}
	}

	.banner {
		height: auto;
		margin-top: 30rpx;
		padding-bottom: 20rpx;
		background-color: white;
		border-radius: 20rpx;
		position: relative;

		.iun {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 99;
			color: white;
			background: linear-gradient(0deg, #F36B31 0%, #FDB675 100%);
			border-radius: 20rpx 0rpx 20rpx 0rpx;
			width: 98rpx;
			height: 42rpx;
			line-height: 42rpx;
			text-align: center;
			font-size: 26rpx;
		}

		.myVideos {
			width: 100%;
			height: 360rpx;
			overflow: hidden;
			padding: 10rpx;
			background-color: #000;
			border-radius: 20rpx 20rpx 0 0;
			box-sizing: border-box;
			z-index: 98;
			.myVideo {
				box-sizing: border-box;
				z-index: 98;
				width: 100%;
				height: 340rpx;
			}
			image{
				width: 100%;
				height: 360rpx;
			}
		}
		.pdnone{
			padding: 0;
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
				color: #49CAA4;
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
		text-align: center;

		image {
			width: 70rpx;
			height: 70rpx;
		}

		p {
			font-size: 26rpx;
		}

		.io {
			text-align: left;
			margin-left: 30rpx;
			background-color: #F6F7F9;
			padding: 20rpx;
			width: 600rpx;
			border-radius: 20rpx;

			text {
				font-size: 24rpx;
			}

			p {
				font-size: 24rpx;
			}
		}
	}

	.Swiper {
		padding: 40rpx 0;
		width: 100%;
		height: 300rpx;
		/deep/.u-swiper__wrapper__item__wrapper__image{
			height: 300rpx !important;
		}
		/deep/.uni-image{
			height: 300rpx !important;
		}
		/deep/.u-swiper{
			width: 100%;
			height: 300rpx !important;
			.u-swiper__wrapper{
				width: 100%;
				height: 300rpx !important;
			}
		}
		
	}
</style>