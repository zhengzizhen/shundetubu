<template>
	<view class="body">
		<view class="grade posir">
			<image class="banner" src="@/static/image/mine/lv1.jpg" mode=""></image>
			<view class="position posia dis_f">
				<view class="left">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<p>850</p>
				</view>

				<view class="right">
					<p>初出茅驴</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts">当前等级 : 好宝宝</p>
									<p class="rights">1000</p>
								</view>
								<u-line-progress :percentage="30" :showText="false" height="8" activeColor = '#D8F6FF' inactiveColor = '#397F95'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<p class="posiss">2018年6月加入</p>
		</view>
		
		<p class="ge_tit pd30">等级权益</p>
		
		<view class="pd30 m20 dis_f flexw">
			<view class="content dis_f flex_c alitmc" v-for="(item,index) in list" :key="index">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>生日礼券</p>
				<text>点击查看</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5,6]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.body {
		height: 1500rpx;
		background: #272228;
		padding-top: 20rpx;
	}

	.grade {
		margin: 30rpx auto;
		width: 690rpx;
		height: 300rpx;
		border-radius: 20rpx;
		.banner {
			width: 690rpx;
			border-radius: 20rpx;
			height: 300rpx;
		}

		.position {
			top: 0;
			left: 0;
			margin: 30rpx;
			padding-bottom: 30rpx;
			border-bottom: 1px solid #7BB4C7;
			.left {
				text-align: center;

				p {
					font-size: 50rpx;
					font-weight: bold;
					color: #3A8096;
				}
			}

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
			}
		}
	}
	.right{
		margin-left: 40rpx;
	}
	.posiss{
		position: absolute;
		bottom: 20rpx;
		left: 30rpx;
		font-size: 20rpx;
		font-weight: 500;
		color: #3A8096;
	}
	.my_jd {
		justify-content: space-around;
		align-items: center;
		p {
			flex: 1.5;
			text-align: center;
			color: #49CAA4;
			font-size: 38rpx;

		}

		.my_txt {
			justify-content: space-between;
			width: 480rpx;
			margin-top: 70rpx;
			p {
				font-size: 20rpx;
				font-weight: 500;
				color: #999999;
				margin-bottom: 10rpx;
			}

			.lefts {
				text-align: left;
			}

			.rights {
				text-align: right;
			}
		}

		.my_line {
			flex: 4;
		}
	}
	.ge_tit{
		color: white;
		font-size: 34rpx;
		font-weight: 500;
		color: #FAE6B5;
	}
	.content{
		width: 33%;
		text-align: center;
		margin: 20rpx 0;
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
		p{
			font-size: 28rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin: 10rpx 0;
		}
		text{
			font-size: 24rpx;
			font-weight: 500;
			color: #FFFFFF;
		}
	}
</style>