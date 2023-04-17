<template>
	<view class="pd30 body">
		<p class="mycattitle dis_f" @click='displayRadio'>管理</p>
		<view class="content bor_r">
			<view class=" israido dis_f alitmc" v-for="(item,index) in list" :key="index">
				<view v-if="isRadio">
					<image v-show="!item.radio" @click="item.radio = !item.radio" class="radio"
						src="@/static/image/mine/radio.png" mode=""></image>
					<image v-show="item.radio" @click="item.radio = !item.radio" class="radio"
						src="@/static/image/mine/radio1.png" mode=""></image>
				</view>
				<image class="bor_r image" src="@/static/index/zheng.jpg" mode=""></image>
				<view class="text dis_f flex_c">
					<text class="txt">{{item.tit}}</text>
					<label>{{item.label}}</label>
					<p class="dis_f alitmc jscb">
						<text class="nix">￥{{item.money}}</text>
						<u-number-box button-size="28" v-model="item.value" @change="valChange"></u-number-box>
					</p>
				</view>
			</view>
		</view>

		<view class="dis_f alitmc lattle jscc">
			<p class="line"></p>
			<p class="tit">猜你喜欢</p>
			<p class="line"></p>
		</view>

		<view class="ix_block index_pad">
			<view class="ix_img dis_f">
				<view class="ix_flexs" v-for="(item,index) in moenylist" :key="index">
					<image :src="item.image"></image>
					<p class="ix_title">{{item.text}}</p>
					<p class="ix_yellow">￥{{item.money}}.00</p>
				</view>
			</view>
		</view>

		<view class="mt_fixed dis_f ">
			<view class="pd30 dis_f alitmc">
				<image v-show="!allRadio" @click="allRadios()" class="radio" src="@/static/image/mine/radio.png"
					mode=""></image>
				<image v-show="allRadio" @click="allRadios()" class="radio"
					src="@/static/image/mine/radio1.png" mode=""></image>
				<p class="tit">全选</p>
				<label>含运费</label>
				<p class="tit">合计</p>
				<text>￥0</text>
				<p class="btn">结算</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isRadio: true,
				allRadio: false, //全选
				list: [{
						tit: '铝合金外锁登山杖，不走寻常路',
						label: '绿色',
						money: '88',
						radio: false,
						value: 0,
					},
					{
						tit: '山外青山楼外楼，不走寻常路',
						label: '绿色',
						money: '100',
						radio: false,
						value: 0
					},
				],
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
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			displayRadio() {
				this.isRadio = !this.isRadio
			},
			allRadios(){
				this.allRadio = !this.allRadio
				if(this.allRadio === true){
					this.list.forEach((item,index)=>{
						item.radio = true
					})
				}
				if(this.allRadio === false){
					this.list.forEach((item,index)=>{
						item.radio = false
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 10rpx;
		background-color: #FAFAFA;
		padding-bottom: 170rpx;
	}

	.mycattitle {
		margin: 30rpx 0;
		font-size: 30rpx;
		font-weight: 500;
		color: #222222;
		justify-content: flex-end;
	}

	.content {
		padding: 20rpx;
		background-color: white;
		box-sizing: border-box;
		.israido {
			margin-bottom: 40rpx;
			box-sizing: border-box;
		}

		.image {
			width: 180rpx;
			height: 180rpx;
			margin-left: 20rpx;
		}

		.radio {
			width: 40rpx;
			height: 40rpx;
		}

		.text {
			margin-left: 30rpx;

			.txt {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}

			label {
				margin: 20rpx 0;
				display: block;
				width: 62rpx;
				height: 32rpx;
				line-height: 32rpx;
				text-align: center;
				color: #999999;
				font-size: 24rpx;
				background: #F0F0F0;
				border-radius: 6rpx;
			}
		}

		.nix {
			font-size: 30rpx;
			font-weight: 500;
			color: #FF4040;
		}
	}


	.lattle {
		.line {
			width: 81rpx;
			height: 2rpx;
			background: linear-gradient(82deg, #49CAA4 0%, #FAFAFA 100%);
		}

		.tit {
			margin: 80rpx 20rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #000000;
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

	.mt_fixed {
		position: fixed;
		bottom: 0%;
		right: 0%;
		width: 100%;
		height: 166rpx;
		background-color: white;
		box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);
		box-sizing: border-box;
		image {
			width: 40rpx;
			height: 40rpx;
		}

		label {
			display: block;
			margin-left: 120rpx;
			font-size: 22rpx;
			color: #999999;
		}
		.tit{
			margin-left: 20rpx;
			font-size: 28rpx;
		}
		text{
			font-size: 28rpx;
			color: #FF4040;
		}
		.btn{
			margin-left: 20rpx;
			width: 242rpx;
			height: 80rpx;
			background: #49CAA4;
			border-radius: 40rpx;
			color: white;
			line-height: 80rpx;
			font-size: 30rpx;
			text-align: center;
		}
	}
</style>