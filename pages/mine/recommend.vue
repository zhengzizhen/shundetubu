<template>
	<view>
		<view class="pd30">
			<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index">
				<image src="@/static/image/index/banners.jpg" mode=""></image>
				<view class="dc_god">
					<p>{{item.title}}</p>
					<view class="dc_latt dis_f">
						<label>04.02丨剩3名额</label>
						<text>03.18丨已满员</text>
						<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="dc_span dis_f">
						<text>￥88</text>
						<label>4.91分丨291人去过</label>
					</view>
					<view class="rd_content dis_f jscb alitmc">
						<text>6小时前种草</text>
						<p class="dis_f alitmc">
							<image v-show="!item.state" @click="item.state= !item.state"
								src="@/static/trends/ax.png" mode=""></image>
							<image v-show="item.state" @click="item.state = !item.state"
								src="@/static/image/trends/zan.png" mode=""></image>
							<text>1212</text>
						</p>
					</view>
				</view>
			</view>
			
			<p class="bottom">已加载全部~</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{title:'亭可马里季 四立卡春晚九天',state:false},
					{title:'亭可马里季 四立卡春晚1天',state:false},
					{title:'亭可马里季 四立卡春晚2天',state:false},
					{title:'亭可马里季 四立卡春晚九天',state:false},
					{title:'亭可马里季 四立卡春晚1天',state:false},
					{title:'亭可马里季 四立卡春晚2天',state:false},
					{title:'亭可马里季 四立卡春晚九天',state:false},
					{title:'亭可马里季 四立卡春晚1天',state:false},
					{title:'亭可马里季 四立卡春晚2天',state:false},
					{title:'亭可马里季 四立卡春晚九天',state:false},
					{title:'亭可马里季 四立卡春晚1天',state:false},
					{title:'亭可马里季 四立卡春晚2天',state:false},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.dc_mod {
		position: relative;
		background-color: white;
		padding: 30rpx 20rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #e6e6e6;

		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;
			p{
				font-size: 30rpx;
			}
		}

		.posw {
			position: absolute;
			top: 30rpx;
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
				background-color: #49CAA4;
				margin-left: 10rpx;
			}

			label {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #F2AD5A;
			}

			p {
				font-size: 22rpx;
				align-items: center;
				margin-left: 10rpx;
			}
		}

	}

	.dc_span {
		align-items: center;
		margin-top: 10rpx;
		label {
			color: #999999;
			font-size: 24rpx;
			margin-left: 20rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}
	.rd_content{
		margin-top: 10rpx;
		text{
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}
		p{
			text{
				color: #FF404E;
			}
			image{
				margin-right: 10rpx;
				width: 34rpx;
				height: 34rpx;
			}
		}
	}
	.bottom{
		margin-top: 40rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: 500;
		color: #999999;
	}
</style>
