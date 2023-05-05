<template>
	<view>
		<view class="minebanner pd30">
			<view class="dis_f mine">
				<image src="@/static/trends/user.png" mode=""></image>
				<view class="sp dis_f">
					<view>
						<p>一个阳光明媚的人</p>
						<text>级别：好奇宝宝</text>
					</view>
					<text class="attention" v-show="isShow" @click="isShow = !isShow">
						+关注
					</text>
					<text class="attention" v-show="!isShow" @click="isShow = !isShow">
						已关注
					</text>
				</view>
			</view>
		</view>

		<view class="dis_f dos">
			<view class="hot">
				<p>3</p>
				<text>活动</text>
			</view>
			<view class="hot">
				<p>1</p>
				<text>轻季</text>
			</view>
			<view class="hot">
				<p>0</p>
				<text>关注</text>
			</view>
			<view class="hot">
				<p>993</p>
				<text>粉丝</text>
			</view>
		</view>


		<view class="cont pd30 dis_f" v-for="(item,index) in list" :key="index">
			<p><label>{{item.day}}</label>/{{item.mone}}月</p>
			<view class="is">
				<view class="right" >
					<image  @click='$Resize(item.img,i)' v-for="(v,i) in item.img" :key="i" :src="v" mode=""></image>
					
				</view>
				<view class="io">
					<p>{{item.cont}}</p>
				</view>
				<view class="dis_f plq">
					<image class="sn" src="@/static/trends/pl.png"></image>
					<view class="dis_f ssss">
						<image v-show="!item.show" @click="love(item)" src="@/static/trends/ax.png"></image>
						<image v-show="item.show" @click="love(item)" src="@/static/image/trends/zan.png" mode=""></image>
						<span style="margin-left: 10rpx;color:#666">{{item.lovenum}}</span>
					</view>
				</view>
			</view>
		</view>
		
		<view class="fixed">
			<u-icon @click='toback' name="arrow-left" size='20' color='#FFFFFF'></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				list: [
					{
						mone: '9',
						day: '14',
						img: [
							'../../static/index/zheng.jpg',
							'../../static/index/zheng.jpg',
						],
						cont: "分币不掏就是转，主打的就是一个陪伴。",
						show:false,
						lovenum:56
					},
					{
						mone: '9',
						day: '13',
						img: [
							'../../static/index/zheng.jpg',
							'../../static/index/zheng.jpg',
							'../../static/index/zheng.jpg',
							'../../static/index/zheng.jpg',
						],
						cont: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
						show:false,
						lovenum:99
					},
				]
			}
		},
		methods: {
			love(item){
				item.show = !item.show
				if(item.show == false){
					item.lovenum--
				}else{
					item.lovenum++
				}
				
			},
			toback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.minebanner {
		box-sizing: border-box;
		height: 442rpx;
		background: linear-gradient(32deg, #49CAA4 0%, #49CA7A 100%);
		padding-top: 282rpx;

		image {
			width: 129rpx;
			height: 129rpx;
		}

		.mine {
			align-items: center;

			.sp {
				width: 540rpx;
				margin-left: 20rpx;
				justify-content: space-between;
				align-items: center;
				color: white;

				text {
					font-size: 22rpx;
				}
			}
		}
	}

	.attention {
		display: block;
		font-size: 28rpx !important;
		width: 148rpx;
		height: 64rpx;
		line-height: 64rpx;
		text-align: center;
		border: 2rpx solid #FFFFFF;
		border-radius: 50rpx;

	}

	.dos {
		margin: 30rpx 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #E6E6E6;

		.hot {
			width: 25%;
			text-align: center;

			p {
				font-size: 40rpx;
				font-weight: bold;
			}

			text {
				font-size: 26rpx;
				font-weight: 500;
				color: #666666;
			}
		}
	}

	.cont {
		margin-top: 20rpx;

		p {
			font-size: 28rpx;
			label {
				font-size: 34rpx;
				font-weight: bold;
			}
		}

		.right {
			width: 590rpx;

			image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 20rpx;
				margin: 5rpx;
			}
		}
	}

	.io {
		p {
			width: 500rpx;
		}
	}

	.plq {
		margin-top: 20rpx;
		align-items: center;
		margin-left: 400rpx;

		.sn {
			margin-right: 30rpx;
		}

		.ssss {
			align-items: center;
		}

		image {
			width: 40rpx;
			height: 40rpx;
		}
	}
	.is{
		// margin-left: 20rpx;
	}
	.fixed{
		position: fixed;
		top: 80rpx;
		left: 20rpx;
	}
</style>