<template>
	<view>
		<view class="pd30">
			<view class="dc_mod dis_f" v-for=" (item,index) in list" :key="index" @click.stop="toDeatil(item.id)">
				<image :src="item.master_image" mode=""></image>
				<view class="dc_god dis_f flex_c jscb">
					<p>{{item.title}}</p>
					<view class="dc_latt dis_f" v-if="item.trip_team[0]">
						<p class="text" v-for="(v,u) in item.trip_team">
							<text>{{v.start_day}}丨</text>
							<text>{{v.status_text}}</text>
						</p>
						<p class="dis_f">更多<u-icon name="arrow-right" color="#999999" size='12'></u-icon></p>
					</view>
					<view class="dc_span dis_f">
						<text>￥{{item.price}}</text>
						<label>{{item.grade}}分丨{{item.traveller_number}}人去过</label>
					</view>
					<view class="rd_content dis_f jscb alitmc">
						<text>{{item.time}}种草</text>
						<p class="dis_f alitmc" @click.stop="loveto(item)">
							<image v-show="!item.state" src="@/static/trends/ax.png" mode=""></image>
							<image v-show="item.state" src="@/static/image/trends/zan.png" mode=""></image>
							<text>{{item.num}}</text>
						</p>
					</view>
				</view>
			</view>
			<p class="bottom" v-if="bottom">已加载全部~</p>
			<u-overlay :show="overlay" @click="show = false"></u-overlay>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page: 1,
				overlay: true, //遮罩层
				bottom: false //是否到达底部
			}
		},
		onLoad() {
			this.getlist(this.page)
		},
		onReachBottom() {
			if(this.bottom == true){
				return false
			}
			this.page+=1
			this.getlist(this.page)
		},
		methods: {
			async getlist(page) {
				uni.showLoading({})
				const res = await this.$http('/trip/attention/list', {
					page,
					limit: 10
				})
				uni.hideLoading()
				this.overlay = false
				if(res.data.data.length < 10){
					this.bottom = true
				}
				uni.hideLoading()
				this.list = this.list.concat(res.data.data)
				for (let i = 0; i < this.list.length; i++) {
					this.list[i].state = true
				}
			},
			toDeatil(v) {
				this.$jump('/pages/index/Details/Details?id=', 'params', v)
			},
			async loveto(item) {
				item.state = !item.state
				this.$forceUpdate()
				const res = await this.$http('/trip/attention', {
					trip_id: item.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dc_mod {
		position: relative;
		background-color: white;
		padding: 30rpx 0rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #e6e6e6;

		image {
			width: 180rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			margin-left: 20rpx;

			p {
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
			.text {
				padding: 5rpx 8rpx;
				color: #FFFFFF;
				font-size: 22rpx;
				background-color: #49CAA4;
			}
			.text:nth-child(2){
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

	.rd_content {
		margin-top: 10rpx;
		width: 460rpx;

		text {
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
		}

		p {
			text {
				color: #FF404E;
			}

			image {
				margin-right: 10rpx;
				width: 34rpx;
				height: 34rpx;
			}
		}
	}

	.bottom {
		margin-top: 40rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: 500;
		color: #999999;
	}
</style>