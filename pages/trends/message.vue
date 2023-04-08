<template>
	<view class="pd30">
		<view class="ts_tbs dis_f">
			<p :class="v.state?'green':''" v-for="(v,index) in tablist" :key="index" @click="chetbs(v)">
				{{v.name}}
			</p>
		</view>
		<view v-show="isShow" class="msgcont dis_f " v-for="(item,index) in pllist" :key="index">
			<image src="@/static/image/trends/wxx.jpg" mode=""></image>
			<view class="dis_f txt">
				<p>{{item.name}}</p>
				<label>评论了你的笔记 {{item.date}}</label>
				<text>{{item.cont}}</text>
			</view>
		</view>
		
		<view>
			<view v-show="isShow1" class="msgcont dis_f " v-for="(item,index) in godlist" :key="index">
				<image src="@/static/image/trends/qq.jpg" mode=""></image>
				<view class="dis_f txt jscc">
					<p>{{item.name}}赞了你</p>
					<label>{{item.date}}</label>
				</view>
			</view>
		</view>
		
		<view>
			<view v-show="isShow2" class="msgcont dis_f " v-for="(item,index) in godlist" :key="index">
				<image src="@/static/image/trends/qq.jpg" mode=""></image>
				<view class="dis_f txt jscc frist">
					<p>{{item.name}}</p>
					<text class="gz">关注</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tablist: [{
						name: '评论/回复',
						state: true
					},
					{
						name: '赞',
						state: false
					},
					{
						name: '关注',
						state: false
					}
				],
				pllist:[
					{name:'玉米粥',date:'11-12',cont:'不错不错'},
					{name:'玉米粥',date:'11-11',cont:'整的不赖'},
				],
				godlist:[
					{name:'世界的尽头',date:'11-12'},
					{name:'世界的尽头',date:'11-10'},
				],
				isShow:true,
				isShow1:false,
				isShow2:false,
			}
		},
		methods: {
			chetbs(e) {
				this.tablist.forEach(function(item, index) {
					item.state = false
				})
				e.state = true
				if (e.name == '评论/回复') {
					this.isShow = true
					this.isShow1 = false
					this.isShow2 = false
					return false
				} else if (e.name == '赞') {
					this.isShow = false
					this.isShow1 = true
					this.isShow2 = false
					return false
				}else if (e.name == '关注') {
					this.isShow = false
					this.isShow1 = false
					this.isShow2 = true
					return false
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.ts_tbs {
		text-align: center;

		p {
			width: 33%;
			padding: 20rpx;
		}

		.green {
			color: #49CAA4;
		}
	}
	.msgcont{
		margin-top: 30rpx;
		padding: 10rpx;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #f1f1f1;
		image{
			width: 84rpx;
			height: 84rpx;
			border-radius: 50%;
		}
		.txt{
			margin-left: 20rpx;
			flex-direction: column;
			p{
				font-size: 30rpx;
				font-weight: bold;
			}
			label{
				font-size: 26rpx;
				color: #666666;
			}
			text{
				display: block;
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #222;
				font-weight: 500;
			}
		}
	}
	.frist{
		width: 80%;
		flex-direction: row !important;
		justify-content: space-between !important;
		align-items: center;
	}
	
	.gz{
		width: 110rpx;
		height: 27rpx;
		line-height: 27rpx;
		padding: 15rpx 30rpx;
		background: #FFFFFF;
		border: 2rpx solid #999999;
		border-radius: 50rpx;
		font-size: 28rpx;
		text-align: center;
	}
</style>