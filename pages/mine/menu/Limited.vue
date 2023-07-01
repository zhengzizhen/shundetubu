<template>
	<view class="pd30">
		<view class="hl_content">
			<view class="content dis_f" v-for="(item,index) in list" :key="index" @click="toshopDetail(item.id)">
				<image class="bor_r" :src="item.master_image" mode=""></image>
				<view class="text dis_f flex_c jscb">
					<p>{{item.name}}</p>
					<text>{{item.intro}}</text>
					<view  v-if="item.stock != 0" class="dis_f label">
						<label>￥{{item.price}}</label>
						<p>原价￥{{item.old_price}}</p>
					</view>
					<label v-else>火热售罄，正在补货中...</label>
				</view>
			</view>
			<view v-if="list.length == 0" class="nonemol">
				暂无商品
			</view>
		</view>

		<view class="fixed">
			<image src="@/static/image/mine/shop.png" @click="toShop()" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page:1,
				bottm:false,
				id:''
			}
		},
		onLoad(option) {
			this.getlist(option.id)
			this.id = option.id
		},
		onReachBottom() {
			if(this.bottom == true){
				return false
			}
			this.page+=1
			this.getlist(this.id)
		},
		methods: {
			async getlist(v){
				uni.showLoading({
					title:'加载中'
				})
				const res = await this.$http('/shop/goods/list',{
					page:this.page,
					limit:10,
					category_id:v
				})
				uni.hideLoading()
				if(res.data.data.length<10){
					this.bottom =true
				}
				this.list = res.data.data
			},
			toShop() {
				this.$jump('./MyCart')
			},
			toshopDetail(v) {
				this.$jump('./shopDetail?id=','params',v)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hl_content {
		.content {
			margin: 20rpx 0;
			padding-bottom: 30rpx;
			border-bottom: 1px solid #e6e6e6;

			image {
				width: 280rpx;
				height: 280rpx;
			}

			.text {
				margin-left: 20rpx;
				width: 400rpx;

				p {
					font-size: 30rpx;
					font-weight: 500;
					color: #222222;
				}

				text {
					font-size: 24rpx;
					font-weight: 500;
					color: #666666;
				}

				.label {
					margin-top: 70rpx;
					label{
						display: block;
						font-size: 26rpx;
						font-weight: 500;
						color: #FF4040;
					}
					p{
						margin-left: 10rpx;
						font-weight: 500;
						font-size: 26rpx;
						text-decoration: line-through;
						color: #999999;
					}
				}
			}
		}
	}

	.fixed {
		position: fixed;
		bottom: 160rpx;
		right: 50rpx;

		image {
			width: 114rpx;
			height: 114rpx;
		}
	}
	.nonemol{
		text-align: center;
		color: #ccc;
		font-family: 'PF';
		margin-top: 80rpx;
	}
</style>