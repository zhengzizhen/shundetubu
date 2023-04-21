<template>
	<view>
		<view class="re_seach dis_f">
			<u-icon @click='back()' name="arrow-left" color='#222222' size='20'></u-icon>
			<u-search :showAction="true" actionText="取消" :animation="false"></u-search>
		</view>
		<view class="pd30">
			<p class="title">不添加标签</p>
		</view>
		<view class="al_content pd30">
			<p :class="(item.state?'success':'')" v-for="(item,index) in list1" :key="index"
				@click='clk(item,index)'>{{item.name}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchvalue: '',
				list: [1, 2, 3],
				labellist: ['#青蓝行动','#收到春天了#','#到海边吹吹风#'],
				list1: []
			}
		},
		onLoad() {
			this.labellist.forEach((item,index)=>{
				let tab = {}
				tab.name = item
				this.list1.push(tab)
			})
			this.list1.forEach((item,index)=>{
				item.state = false
			})
		},
		methods: {
			back() {
				this.$jump('./News', 'redirect')
			},
			clk(item, index) {
				item.state = !item.state
				console.log(item);
				this.$forceUpdate()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.re_seach {
		margin: 100rpx 20rpx 20rpx;

		input {
			margin-left: 10rpx;
		}
	}

	.title {
		margin: 30rpx 0 0;
	}

	.al_content {
		margin-top: 40rpx;

		p {
			margin: 20rpx 0;
		}


	}

	.success {
		background: url('@/static/image/mine/success.jpg') no-repeat 644rpx 8rpx;
		background-size: 5%;
	}
</style>