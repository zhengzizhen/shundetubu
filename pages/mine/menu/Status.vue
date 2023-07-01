<template>
	<view class="body pd30">
		<!-- 已取消 -->
		<view v-if="params.status == -1">
			<p class="title">已取消</p>
			<label class="state">重新购买</label>
		</view>
		<!-- 待支付 -->
		<view v-else-if="params.status == 0">
			<p class="title">待支付</p>
			<label class="state">还未支付订单</label>
		</view>
		<!-- 代发货 -->
		<view v-else-if="params.status == 1">
			<p class="title">待发货</p>
			<label class="state">正在备货中...</label>
		</view>
		<!-- 代收货 -->
		<view v-else-if="params.status == 2">
			<p class="title">已发货</p>
			<label class="state">商品已发货</label>
		</view>
		<!-- 已完成 -->
		<view v-else-if="params.status == 3">
			<p class="title">已完成</p>
			<label class="state">订单已完成</label>
		</view>

		<view class="content dis_f alitmc mt20" v-for="(item,index) in params.goods" :key="index">
			<image class="bor_r" :src="item.goods_master_image" mode=""></image>
			<view class="textcont dis_f flex_c">
				<p>{{item.goods_name}}</p>
				<label class="label">{{item.sku}}</label>
				<view class="dis_f jscb bottext">
					<text>￥{{item.unit_price}}</text>
					<text>×{{item.number}}</text>
				</view>
			</view>
		</view>

		<view class="information bor_r mt20">
			<view class="bor dis_f jscb">
				<p>下单时间</p>
				<text>{{params.created_at}}</text>
			</view>
			<view class="bor dis_f jscb">
				<p>订单号</p>
				<view class="img dis_f alitmc">
					<text>{{params.order_no}}</text>
					<image @click="copy" src="@/static/image/mine/copy.png" mode=""></image>
				</view>
			</view>
			<view class="bor dis_f jscb">
				<p>支付方式</p>
				<text>线上支付</text>
			</view>
			<view class="bor dis_f jscb noborder">
				<p>订单金额</p>
				<text class="red">￥{{money.toFixed(2)}}</text>
			</view>
		</view>


		<!-- 待支付 -->
		<view class="fixed dis_f" v-if="params.status == 0">
			<p @click='cancelorder'>取消订单</p>
			<p @click='changeAddress'>修改地址</p>
			<p @click='goplays'>立即支付</p>
		</view>
		<!-- 待发货 -->
		<view class="fixed dis_f" v-else-if="params.status == 1">
			<p @click='cancelorder'>取消订单</p>
		</view>
		<!-- 待收货 -->
		<view class="fixed dis_f" v-else-if="params.status == 2">
			<p @click='over'>确认收货</p>
		</view>
		<!-- 已完成 -->
		<view class="fixed dis_f" v-else-if="params.status == 3">
			<!-- <p>删除订单</p> -->
			<p @click='tocomment'>去评价</p>
		</view>
		<!-- 已取消 -->
		<view class="fixed dis_f" v-else-if="params.status == -1">
			<!-- <p>删除订单</p> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:{},
				money:0
			}
		},
		onLoad(option) {
			this.params = JSON.parse(option.obj)
			this.params.goods.forEach((item,index)=>{
				this.money+= parseFloat(item.all_price)
			})
		},
		methods: {
			copy() {
				let result
				// #ifndef H5
				//uni.setClipboardData方法就是讲内容复制到粘贴板
				uni.setClipboardData({
					data: 2727727722, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				});
				// #endif

				// #ifdef H5 
				let textarea = document.createElement("textarea")
				textarea.value = this.params.order_no
				textarea.readOnly = "readOnly"
				document.body.appendChild(textarea)
				textarea.select() // 选中文本内容
				// textarea.setSelectionRange(0, 10) 截取下标
				uni.showToast({ //提示
					title: '复制成功',
					icon:'none'
				})
				result = document.execCommand("copy")
				textarea.remove()
				// #endif
			},
			async cancelorder(){
				uni.showLoading({
					
				})
				const res = await this.$http('/shop/order/cancel',{
					order_no:this.params.order_no
				})
				uni.hideLoading()
				uni.$u.toast('取消成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			},
			tocomment(){
				this.$jump('./comments?id=','params',this.params.order_no)
			},
			//完成订单
			async over(){
				uni.showLoading()
				const res = await this.$http('/shop/order/over',this.params.order_no)
				uni.hideLoading()
				this.params.status = 3
			},
			changeAddress(){
				uni.navigateTo({
					url:'./addAddress?id=' + this.params.address_id +  '&add=' + 1
				})
			},
			async goplays(){
				uni.showLoading()
				const res = await this.$http('/shop/order/pay',{
					order_no:this.params.order_no
				})
				uni.hideLoading()
				let form = res.data.data.pay_data
				const div = document.createElement('formdiv');
				div.innerHTML = form;
				document.body.appendChild(div);
				//document.forms[0].setAttribute('target', ' self');
				document.forms[0].submit();
				div.remove()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		min-height: 1500rpx;
		height: auto;
		background-color: #FAFAFA;
		padding-top: 30rpx;
		.title {
			font-size: 36rpx;
			font-weight: bold;
			color: #000000;
			margin-bottom: 10rpx;
		}

		.state {
			font-size: 26rpx;
			font-weight: 500;
			color: #666666;
		}

		.content {
			padding: 0 20rpx;
			box-sizing: border-box;
			width: 690rpx;
			height: 246rpx;
			background: #FFFFFF;
			border-radius: 20rpx;

			image {
				width: 180rpx;
				height: 180rpx;
			}
		}

		.textcont {
			width: 440rpx;
			margin-left: 20rpx;

			p {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}

			.label {
				margin-top: 18rpx;
				width: 100rpx;
				height: 32rpx;
				padding: 5rpx 10rpx;
				background: #F0F0F0;
				border-radius: 6rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
				text-align: center;
			}

			.bottext {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
				margin-top: 58rpx;

				text:first-child {
					color: red;
				}
			}
		}

		.information {
			width: 690rpx;
			min-height: 349rpx;
			height: auto;
			background: #FFFFFF;
			box-sizing: border-box;
			padding: 20rpx;

			.bor {
				border-bottom: 1px solid #E6E6E6;
				padding: 20rpx 0;

				p {
					font-size: 30rpx;
					font-weight: 500;
					color: #000000;
				}

				text {
					font-size: 30rpx;
					font-weight: 500;
					color: #666666;
				}

				.red {
					color: #FF4040;
				}
			}
		}

		.fixed {
			position: fixed;
			bottom: 0;
			right: 0;
			width: 750rpx;
			height: 166rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(4, 0, 0, 0.16);
			justify-content: flex-end;

			p {
				width: 148rpx;
				height: 54rpx;
				line-height: 54rpx;
				text-align: center;
				background: #FFFFFF;
				border: 1px solid #999999;
				border-radius: 31rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #999999;
				margin: 20rpx 20rpx 20rpx 10rpx;
			}
		}
	}

	.img {
		image {
			margin-left: 10rpx;
			width: 27rpx;
			height: 27rpx;
		}
	}
</style>