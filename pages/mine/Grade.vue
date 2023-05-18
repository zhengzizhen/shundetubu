<template>
	<view class="body" v-if="userinfo">
		<!-- 等级2 -->
		<view class="grade posir" v-if="userinfo.level_data.level_id == 1">
			<image class="banner" src="@/static/image/mine/lv1.jpg" mode=""></image>
			<view class="position posia dis_f bor2">
				<view class="left">
					<image :src="userinfo.avatar" mode=""></image>
					<p style="color: #13903C;">{{userinfo.level_data.user_exp}}</p>
				</view>
				<view class="right">
					<p style="color: #13903C;">{{userinfo.level_data.level_name}}</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #13903C;">下一等级 : {{userinfo.level_data.next_level_name}}</p>
									<p class="rights" style="color: #13903C;">{{userinfo.level_data.next_level_exp}}</p>
								</view>
								<u-line-progress :percentage="(userinfo.level_data.level_exp/userinfo.level_data.next_level_exp)*100" :showText="false" height="8" activeColor = '#C4FFDB' inactiveColor = '#139F37'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <p class="posiss" style="color: #13903C;">2018年6月加入</p> -->
		</view>
		
		<!-- 等级1 -->
		<view class="grade posir" v-if="userinfo.level_data.level_id == 2">
			<image class="banner" src="@/static/image/mine/lv2.jpg" mode=""></image>
			<view class="position posia dis_f">
				<view class="left">
					<image :src="userinfo.avatar" mode=""></image>
					<p>{{userinfo.level_data.user_exp}}</p>
				</view>
				<view class="right">
					<p>{{userinfo.level_data.level_name}}</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts">下一等级 : {{userinfo.level_data.next_level_name}}</p>
									<p class="rights">{{userinfo.level_data.next_level_exp}}</p>
								</view>
								<u-line-progress :percentage="(userinfo.level_data.level_exp/userinfo.level_data.next_level_exp)*100" :showText="false" height="8" activeColor = '#D8F6FF' inactiveColor = '#397F95'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <p class="posiss">2018年6月加入</p> -->
		</view>
		
		
		<!-- 等级3 -->
		<view class="grade posir" v-if="userinfo.level_data.level_id == 3">
			<image class="banner" src="@/static/image/mine/lv3.jpg" mode=""></image>
			<view class="position posia dis_f bor3">
				<view class="left">
					<image :src="userinfo.avatar" mode=""></image>
					<p style="color: #AF7A19;">{{userinfo.level_data.user_exp}}</p>
				</view>
				<view class="right">
					<p style="color: #AF7A19;">{{userinfo.level_data.level_name}}</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #AF7A19;">下一等级 : {{userinfo.level_data.next_level_name}}</p>
									<p class="rights" style="color: #AF7A19;">{{userinfo.level_data.next_level_exp}}</p>
								</view>
								<u-line-progress :percentage="(userinfo.level_data.level_exp/userinfo.level_data.next_level_exp)*100" :showText="false" height="8" activeColor = '#FEF0B7' inactiveColor = '#AF7A19'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <p class="posiss" style="color: #AF7A19;">2018年6月加入</p> -->
		</view>
		
		<!-- 等级4 -->
		<view class="grade posir" v-if="userinfo.level_data.level_id == 4">
			<image class="banner" src="@/static/image/mine/lv4.jpg" mode=""></image>
			<view class="position posia dis_f bor4">
				<view class="left">
					<image :src="userinfo.avatar" mode=""></image>
					<p style="color: #C7337D;">{{userinfo.level_data.user_exp}}</p>
				</view>
				<view class="right">
					<p style="color: #C7337D;">{{userinfo.level_data.level_name}}</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #C7337D;">下一等级 : {{userinfo.level_data.next_level_name}}</p>
									<p class="rights" style="color: #C7337D;">{{userinfo.level_data.next_level_exp}}</p>
								</view>
								<u-line-progress :percentage="(userinfo.level_data.level_exp/userinfo.level_data.next_level_exp)*100" :showText="false" height="8" activeColor = '#FFD0EC' inactiveColor = '#C7337D'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <p class="posiss" style="color: #C7337D;">2018年6月加入</p> -->
		</view>
		
		<!-- 等级4 -->
		<view class="grade posir" v-if="userinfo.level_data.level_id == 5">
			<image class="banner" src="@/static/image/mine/lv5.jpg" mode=""></image>
			<view class="position posia dis_f bor5">
				<view class="left">
					<image :src="userinfo.avatar" mode=""></image>
					<p style="color: #4D3ED2;">{{userinfo.level_data.user_exp}}</p>
				</view>
				<view class="right">
					<p style="color: #4D3ED2;">{{userinfo.level_data.level_name}}</p>
					<view class="">
						<view class="dis_f my_jd">
							<view class="my_line">
								<view class="dis_f my_txt">
									<p class="lefts" style="color: #4D3ED2;">下一等级 : {{userinfo.level_data.next_level_name}}</p>
									<p class="rights" style="color: #4D3ED2;">{{userinfo.level_data.next_level_exp}}</p>
								</view>
								<u-line-progress :percentage="(userinfo.level_data.level_exp/userinfo.level_data.next_level_exp)*100" :showText="false" height="8" activeColor = '#D2C2FF' inactiveColor = '#4D3ED2'></u-line-progress>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <p class="posiss" style="color: #4D3ED2;">2018年6月加入</p> -->
		</view>
		
		<p class="ge_tit pd30">等级权益</p>
		
		<view class="pd30 m20 dis_f flexw">
			<view class="content dis_f flex_c alitmc" v-if="level_data.level_birthday_coupon">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>生日礼券</p>
				<text>点击查看</text>
			</view>
			
			<view class="content dis_f flex_c alitmc">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>赠送代金券</p>
				<text>{{level_data.level_coupon}}</text>
			</view>
			
			<view class="content dis_f flex_c alitmc">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>旅行折扣率</p>
				<text>{{level_data.level_trip_discount_rate}}</text>
			</view>
			
			<view class="content dis_f flex_c alitmc" v-if="level_data.level_dadge">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>专属定制徽章</p>
				<text>点击查看</text>
			</view>
			
			<view class="content dis_f flex_c alitmc" v-if="level_data.level_gift">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>不定期神秘礼物</p>
				<text>点击查看</text>
			</view>
			
			<view class="content dis_f flex_c alitmc" v-if="level_data.level_active">
				<image src="@/static/image/trends/wxx.jpg" mode=""></image>
				<p>不定期线下活动</p>
				<text>点击查看</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import store from '@/store/index.js';
	export default {
		computed:{
			...mapState(['userinfo']),
		},
		data() {
			return {
				level_data:{},
			}
		},
		onLoad() {
			this.level_data = this.$store.state.userinfo.level_data
			console.log(this.level_data);
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