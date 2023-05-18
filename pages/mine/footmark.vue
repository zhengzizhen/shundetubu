<template>
	<view class="pd30 body">
		<p>我的活动</p>
		<view class="dis_f fk_cont">
			<view v-if="list[i].trip_data" class="bor_r im" v-for="(v,i) in list" :key="v.id" @click="toDetails(v.trip_id)">
				<image  :src="v.trip_data.master_image" mode=""></image>
				<label>{{v.city}}</label>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				page:1,
				bottom:false,//是否到底
			}
		},
		onLoad() {
			this.getlist(1)
		},
		onReachBottom() {
			if(this.bottom == true){
				uni.$u.toast('已经到底了哦')
			}
			this.page+=1
			this.getlist(this.page)
		},
		methods: {
			async getlist(page){
				uni.showLoading()
				const res = await this.$http('/trip/browsing/list',{
					page,
					limit:21
				})
				uni.hideLoading()
				if(res.data.data == ''){
					this.bottom = true
					return false
				}
				this.list = this.list.concat(res.data.data)
			},
			toDetails(id){
				this.$jump('/pages/index/Details/Details?id=','params',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	p {
		margin: 30rpx auto;
	}
	.body{
		padding-bottom: 100rpx;
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