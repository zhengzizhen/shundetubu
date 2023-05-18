<template>
	<view class="br_conent pd30">
		<view class="dc_mod dis_f" @click="toDetail(item.trip_id)" v-for="(item,index) in list" :key="index">
			<image :src="item.trip_data.master_image" mode=""></image>
			<view class="dc_god">
				<p>{{item.trip_data.title}}</p>
				<view class="dc_latt dis_f">
					<label>{{item.trip_team.start_day}} | {{item.trip_team.status_text}}</label>
				</view>
				<view class="dc_span dis_f alitmc jscb">
					<text>{{item.time}}浏览</text>
					<label class="green" v-if="item.trip_team.status == 0">报名中</label>
					<label class="green" v-if="item.trip_team.status == 1">即将成团</label>
					<label class="green" v-if="item.trip_team.status == 2">已成团</label>
					<label class="green" v-if="item.trip_team.status == 3">已满员</label>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				page:1,
				bottom:false
			}
		},
		onLoad() {
			this.getlist(1)
		},
		onReachBottom() {
			if(this.bottom == true){
				return false
			}
			this.page+=1
			this.getlist(this.page)
		},
		methods: {
			async getlist(page){
				uni.showLoading()
				const res = await this.$http('/trip/browsing/list',{
					page,
					limit:10
				})
				uni.hideLoading()
				if(res.data.data == ''){
					this.bottom = true
					uni.$u.toast('已经到底了哦')
					return false
				}
				this.list = this.list.concat(res.data.data)  
			},
			toDetail(e){
				this.$jump('/pages/index/Details/Details?id=','params',e)
			}
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
				font-weight: 500;
				color: #222222;
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
			margin-top: 20rpx;
	
			label {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
	
		}
		.dc_span{
			width: 450rpx;
			margin-top: 50rpx;
			text{
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
			label{
				width: 99rpx;
				height: 40rpx;
				line-height: 40rpx;
				background: #F2AD5A;
				font-size: 24rpx;
				color: white;
				text-align: center;
			}
		}
	
	}
	.green{
		background: #49CAA4 !important;
	}
</style>