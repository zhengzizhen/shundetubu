<template>
	<view class="body">
		<!-- 等级2 -->
		<view class="grade posir" v-if="lv == 1">
			<image class="banner" src="@/static/image/mine/lv1.jpg" mode=""></image>
			<view class="position posia dis_f bor2">
				<view class="left">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<p style="color: #13903C;">850</p>
				</view>
				<view class="right">
					<p style="color: #13903C;">好奇宝宝</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #13903C;">下一等级 : 初出毛驴</p>
									<p class="rights" style="color: #13903C;">1000</p>
								</view>
								<u-line-progress :percentage="30" :showText="false" height="8" activeColor = '#C4FFDB' inactiveColor = '#139F37'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<p class="posiss" style="color: #13903C;">2018年6月加入</p>
		</view>
		
		<!-- 等级1 -->
		<view class="grade posir" v-if="lv == 2">
			<image class="banner" src="@/static/image/mine/lv2.jpg" mode=""></image>
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
									<p class="lefts">下一等级 : 探路先锋</p>
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
		
		
		<!-- 等级3 -->
		<view class="grade posir" v-if="lv == 3">
			<image class="banner" src="@/static/image/mine/lv3.jpg" mode=""></image>
			<view class="position posia dis_f bor3">
				<view class="left">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<p style="color: #AF7A19;">850</p>
				</view>
				<view class="right">
					<p style="color: #AF7A19;">探路先锋</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #AF7A19;">下一等级 : 冒险达人</p>
									<p class="rights" style="color: #AF7A19;">1000</p>
								</view>
								<u-line-progress :percentage="30" :showText="false" height="8" activeColor = '#FEF0B7' inactiveColor = '#AF7A19'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<p class="posiss" style="color: #AF7A19;">2018年6月加入</p>
		</view>
		
		<!-- 等级4 -->
		<view class="grade posir" v-if="lv == 4">
			<image class="banner" src="@/static/image/mine/lv4.jpg" mode=""></image>
			<view class="position posia dis_f bor4">
				<view class="left">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<p style="color: #C7337D;">850</p>
				</view>
				<view class="right">
					<p style="color: #C7337D;">冒险达人</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #C7337D;">下一等级 : 环旅玩家</p>
									<p class="rights" style="color: #C7337D;">1000</p>
								</view>
								<u-line-progress :percentage="30" :showText="false" height="8" activeColor = '#FFD0EC' inactiveColor = '#C7337D'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<p class="posiss" style="color: #C7337D;">2018年6月加入</p>
		</view>
		
		<!-- 等级4 -->
		<view class="grade posir" v-if="lv == 5">
			<image class="banner" src="@/static/image/mine/lv5.jpg" mode=""></image>
			<view class="position posia dis_f bor5">
				<view class="left">
					<image src="@/static/image/trends/qq.jpg" mode=""></image>
					<p style="color: #4D3ED2;">850</p>
				</view>
				<view class="right">
					<p style="color: #4D3ED2;">环旅玩家</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #4D3ED2;">下一等级 : 环旅玩家</p>
									<p class="rights" style="color: #4D3ED2;">1000</p>
								</view>
								<u-line-progress :percentage="30" :showText="false" height="8" activeColor = '#D2C2FF' inactiveColor = '#4D3ED2'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<p class="posiss" style="color: #4D3ED2;">2018年6月加入</p>
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
				list:[1,2,3,4,5,6],
				lv:1,
			}
		},
		onLoad(option) {
			this.lv = option.lv
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
		color: #3A8096;
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
				color: #3A8096;
			}

			.rights {
				text-align: right;
				color: #3A8096;
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
	.bor2{
		border-bottom: 1px solid #49DB77 !important;
	}
	.bor3{
		border-bottom: 1px solid #DAA443 !important;
	}
	.bor4{
		border-bottom: 1px solid #FC7FBF !important;
	}
	.bor5{
		border-bottom: 1px solid #8173FF !important;
	}
</style>