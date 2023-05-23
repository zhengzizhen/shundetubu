<template>
	<view class="body pd30">
		<view class="m30" v-for="(v,i) in list" :key="i" @click="todeil(v.id)">
			<!-- <p class="title">3月29日</p> -->
			<view class="cont">
				<image class="banner" :src="v.image" mode=""></image>
				<view class="txt">
					<p>{{v.title}}</p>
					<text>{{v.intro}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page:1
			}
		},
		onLoad() {
			this.getlist()
		},
		methods: {
			async getlist(){
				const res = await this.$http('/user/message/article/list',{
					page:this.page,
					limit:10,
					category_id:11
				})
				this.list = res.data.data
			},
			todeil() {
				this.$jump('./deil')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding-top: 20rpx;
		background-color: #FAFAFA;
		height: 1500rpx;
	}

	.title {
		padding: 5rpx;
		width: 104rpx;
		height: 34rpx;
		text-align: center;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin: 0 auto;
		background: #DEDFE1;
		line-height: 34rpx;
	}

	.cont {
		border-radius: 20rpx;
		margin-top: 30rpx;
		background-color: white;

		.banner {
			border-radius: 20rpx 20rpx 0 0;
			width: 100%;
			height: 300rpx;
		}
	}

	.txt {
		padding: 20rpx;

		p {
			color: #222222;
		}

		text {
			font-size: 24rpx;
			color: #666666;
		}
	}

	.m30 {
		margin-top: 40rpx;
	}
</style>