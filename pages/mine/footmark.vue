<template>
	<view class="pd30">
		<p>我的活动</p>
		<view class="dis_f fk_cont">
			<view class="bor_r im" v-for="(v,i) in list" :key="i">
				<image src="../../static/index/zheng.jpg" mode=""></image>
				<label>泰国</label>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 2, 3, 4, 5]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	p {
		margin: 30rpx auto;
	}

	.fk_cont {
		flex-wrap: wrap;

		.im {
			width: 33%;
			text-align: center;
			position: relative;
		}

		image {
			width: 217rpx;
			height: 217rpx;
			border-radius: 20rpx;
		}

		label {
			position: absolute;
			left: 81rpx;
			top: 94rpx;
			color: white;
		}
	}
</style>