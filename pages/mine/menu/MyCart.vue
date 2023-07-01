<template>
	<view class="pd30 body">
		<view class="dis_f jscb">
			<p class="mycattitle dis_f" @click='displayRadio'>管理</p>
		</view>
		<view class="content bor_r">
			<view  v-if="list.length != 0" class=" israido dis_f alitmc" v-for="(item,index) in list" :key="index">
				<view v-if="isRadio">
					<image v-show="!item.radio" @click="runs(item)" class="radio"
						src="@/static/image/mine/radio.png" mode=""></image>
					<image v-show="item.radio" @click="runs(item)" class="radio"
						src="@/static/image/mine/radio1.png" mode=""></image>
				</view>
				<image class="bor_r image" :src="item.master_image" mode=""></image>
				<view class="text dis_f flex_c">
					<text class="txt">{{item.name}}</text>
					<view class="dis_f">
						<label v-for="(v,i) in item.sku" :key="i">{{v}}</label>
					</view>
					<p class="dis_f alitmc jscb">
						<text class="nix">￥{{item.price}}</text>
						<view class="number dis_f">
							<p class="reduce" @click='reduce(item)'>-</p>
							<text>{{item.number}}</text>
							<p class="add" @click='add(item)'>+</p>
						</view>
					</p>
				</view>
				<view v-if="isRadio" class="rundelete">
					<p class="deletes dis_f" @click='remove(item.id)'>删除</p>
				</view>
			</view>
			
			<view v-if="list.length == 0" class="nonemol israido dis_f alitmc">
				<p>暂无商品</p>
			</view>
		</view>

		<view class="dis_f alitmc lattle jscc">
			<p class="line"></p>
			<p class="tit">猜你喜欢</p>
			<p class="line"></p>
		</view>

		<view class="ix_block index_pad">
			<view class="ix_img dis_f">
				<view @click="toDetail(item.id)" class="ix_flexs" v-for="(item,index) in moenylist" :key="index">
					<image :src="item.master_image"></image>
					<p class="ix_title">{{item.name}}</p>
					<p class="ix_yellow">￥{{item.price}}</p>
				</view>
			</view>
		</view>

		<view class="mt_fixed dis_f ">
			<view class="pd30 dis_f alitmc">
				<image v-show="!allRadio" @click="allRadios()" class="radio" src="@/static/image/mine/radio.png"
					mode=""></image>
				<image v-show="allRadio" @click="allRadios()" class="radio" src="@/static/image/mine/radio1.png"
					mode=""></image>
				<p class="tit">全选</p>
				<label>含运费</label>
				<p class="tit">合计</p>
				<text class="mondy">￥{{count}}</text>
				<p class="btn" @click='submit'>结算</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isRadio: false,
				allRadio: true, //全选
				list: [],
				moenylist: [],
				page:1,
				bottom:false
			}
		},
		computed: {
			//总价格
			count() {
				let totalPrice = 0
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i].radio == true) {
						totalPrice += this.list[i].number * parseFloat(this.list[i].price);
					}
				}
				return totalPrice;
			},
			//总数量
			total: function() {
				let totalCount = 0;
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i].radio == true) {
						totalCount += this.list[i].number;
					}
				}
				return totalCount;
			},
		},
		onReachBottom() {
			if(this.bottom== true){
				return false
			}
			this.page+=1
			this.youlike()
		},
		onLoad() {
			this.youlike()
		},
		onShow() {
			this.getlist()
		},
		methods: {
			async getlist() {
				const res = await this.$http('/shop/car/list')
				res.data.data.forEach((item,index)=>{
					item.radio = true
				})
				this.list = res.data.data
				this.list.forEach((item,index)=>{
					
				})
			},
			async youlike(){
				const res = await this.$http('/shop/goods/list',{
					is_recommend:1,
					page:this.page,
					limit:10
				})
				if(res.data.data.length<10){
					this.bottom = true
				}
				this.moenylist = res.data.data
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			displayRadio() {
				this.isRadio = !this.isRadio
			},
			allRadios() {
				this.allRadio = !this.allRadio
				if (this.allRadio === true) {
					this.list.forEach((item, index) => {
						item.radio = true
					})
				}
				if (this.allRadio === false) {
					this.list.forEach((item, index) => {
						item.radio = false
					})
				}
			},
			runs(v){
				v.radio = !v.radio
			},
			toDetail(v) {
				this.$jump('./shopDetail?id=','params',v)
			},
			async reduce(v) {
				if (v.number == 1) {
					return false
				}
				let timer = null
				if (timer) {
					clearTimeout(timer)
					timer = null
				}
				timer = setTimeout(async () => {
					v.number--
					const res = await this.$http('/shop/car/update', {
						car_id: v.id,
						number: -1
					})
				}, 200)
			},
			async add(v) {
				let timer = null
				if (timer) {
					clearTimeout(timer)
					timer = null
				}
				timer = setTimeout(async () => {
					v.number++
					const res = await this.$http('/shop/car/update', {
						car_id: v.id,
						number:1
					})
				}, 200)
			},
			async remove(v) {
				uni.showLoading()
				const res = await this.$http('/shop/car/delete',{
					car_ids:v
				})
				uni.hideLoading()
				uni.$u.toast('删除成功')
				this.getlist()
			},
			async submit(){
				if(this.total == 0){
					uni.$u.toast('请选择商品')
					return false
				}
				var params = []
				this.list.forEach((item,index)=>{
					if(item.radio == true){
						params = params.concat(item)
					}
				})
				this.$jump('./goPlay?obj=','params',JSON.stringify(params))
			}
		},
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 10rpx;
		background-color: #FAFAFA;
		padding-bottom: 170rpx;
		min-height: 1500rpx;
		height: auto;
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
			flex: 1;

			.txt {
				font-size: 30rpx;
				font-weight: 500;
				color: #222222;
			}

			label {
				margin: 20rpx 0;
				display: block;
				margin-left: 10rpx;
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
			margin-left: 80rpx;
			font-size: 22rpx;
			width: 70rpx;
			color: #999999;
		}

		.tit {
			width: 80rpx;
			margin-left: 10rpx;
			font-size: 28rpx;
		}

		text {
			font-size: 28rpx;
			color: #FF4040;
			width: 80rpx;
		}

		.btn {
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

	.number {
		background: #fafafa;
		height: 45rpx;
		line-height: 45rpx;

		text {
			margin: 0 6rpx;
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
			width: 50rpx;
			text-align: center;
			background-color: #fafafa;
		}

		p {
			width: 45rpx;
			height: 45rpx;
			line-height: 42rpx;
			border-radius: 10rpx;
			text-align: center;
		}

		.reduce {
			color: #999;
		}

		.add {
			color: #222;
		}
	}

	.rundelete {
		width: 80rpx;
		height: 80rpx;
		background-color: red;
		border-radius: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.deletes {
			color: white;
			font-size: 28rpx;
			text-align: center;
		}
	}
	.nonemol{
		text-align: center;
		color: #ccc;
		justify-content: center;
		font-size: 26rpx;
	}
</style>