<template>
	<view class="body">
		<view class="header">
			<view class="top pd30 dis_f">
				<view class="dis_f alitmc">
					<image :src="$store.state.userinfo.avatar" mode=""></image>
					<view class="text">
						<p>已经连续签到{{stats}}天</p>
						<text v-if="list[stats]">明天签到可获得{{list[stats].money}}圈币</text>
					</view>
				</view>
				<view class="right dis_f alitmc">
					<image src="@/static/image/mine/money.jpg" mode=""></image>
					<text>{{$store.state.userinfo.money}}</text>
				</view>
			</view>
		</view>

		<view class="views pd30">
			<p class="tit">连续签到领好礼<text style="font-size: 24rpx;color: #666;margin-left: 10rpx;" v-if="static">(今日已签到)</text> </p>
			<view class="dis_f send">
				<view @click="cheout(item)"  :class="item.state?'greendiv':'greendivs'" class=" dis_f" v-for="(item,index) in list" :key="index">
					<p>{{item.name}}</p>
					<image src="@/static/image/mine/money.jpg" mode=""></image>
					<p class="ns">{{item.money}}圈币</p>
				</view>
				
			</view>
		</view>
		
		
		
		<view class="views sn_hig pd30 mat">
			<p class="tit">做任务赚金币</p>
			<view class="dis_f sn_image alitmc" @click="tosign(3)">
				<image src="/static/image/mine/3day.jpg" mode=""></image>
				<view class="sn_mar20">
					<p>累计签到3天</p>
					<text>连续签到3天额外获得20圈币</text>
				</view>
				
				<view class="sn_logo dis_f">
					<image src="@/static/image/mine/money2.png" mode=""></image>
					<label>+{{task.continuous_3_day}}</label>
				</view>
			</view>
			
			<view class="dis_f sn_image alitmc" @click="tosign(7)">
				<image src="../../static/image/mine/7day.jpg" mode=""></image>
				<view class="sn_mar20">
					<p>累计签到7天</p>
					<text>连续签到7天额外获得50圈币</text>
				</view>
				<view class="sn_logo dis_f">
					<image src="@/static/image/mine/money2.png" mode=""></image>
					<label>+{{task.continuous_7_day}}</label>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'第一天',state:false,money:''},
					{name:'第二天',state:false,money:''},
					{name:'第三天',state:false,money:''},
					{name:'第四天',state:false,money:''},
					{name:'第五天',state:false,money:''},
					{name:'第六天',state:false,money:''},
					{name:'第七天',state:false,money:''},
				],
				day:[],
				task:[],
				stats:'',//连续签到天数
				static:null,//判断是否已签到
				static3:null,//判断3天任务
				static7:null,//判断7天任务
			}
		},
		onLoad() {
			this.getlist()
			
		},
		methods: {
			async getlist(){
				uni.showLoading({
					title:'加载中'
				})
				const res = await this.$http('/user/sign/detail')
				uni.hideLoading()
				this.day = res.data.data.set.day
				this.task = res.data.data.set.task
				for(let i = 0;i<this.day.length;i++){
					this.list[i].money = this.day[i]
				}
				this.stats = res.data.data.status.continuous_sign_number
				this.static = res.data.data.status.today_sign
				this.static3 = res.data.data.status.task_3day_get //3天任务状态：0未达标、1已达标、2已领取
				this.static7 = res.data.data.status.task_7day_get //7天任务状态：0未达标、1已达标、2已领取
				
				if(this.static == true){
					
				}else{
					this.list[this.stats].state = true
				}
			},
			async cheout(v){
				if(v.state == false){
					return false
				}
				if(this.static == true){
					uni.$u.toast('您今天已经签到过了哦，请明天再来')
					return false
				}
				uni.showLoading({
					title:'签到中'
				})
				const res = await this.$http('/user/sign')
				uni.$u.toast('签到成功！')
				uni.hideLoading()
				this.list.forEach((item,index)=>{
					item.state = false
				})
				this.static3 = res.data.data.status.task_3day_get
				this.static7 = res.data.data.status.task_7day_get
				this.$store.commit("set_sign",this.day[this.stats])
			},
			async tosign(e){
				let sum = 0
				if(e == 3){
					sum = this.task.continuous_3_day
				}else if(e == 7){
					sum = this.task.continuous_7_day
				}
				if(this.static3 == 0){
					uni.$u.toast('当前任务未达到领取条件')
					return false
				}else if(this.static3 == 2){
					uni.$u.toast('您已经领取过了')
					return false
				}
				uni.showLoading({
					title:'领取中'
				})
				const res = await this.$http('/user/sign/task',{
					task_day:e
				})
				uni.hideLoading()
				uni.$u.toast('领取成功！')
				this.$store.commit("set_sign",sum)
			},
			toback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		height: 1500rpx;
		background-color: #FAFAFA;
	}

	.header {
		background-color: #49CAA4;
		height: 429rpx;
		padding-top: 10rpx;
	}

	.top {
		margin-top: 210rpx;
		align-items: center;
		justify-content: space-between;

		image {
			width: 96rpx;
			height: 96rpx;
			border-radius: 50%;
		}
	}

	.text {
		margin-left: 20rpx;
		color: white;

		p {
			font-size: 30rpx;
		}

		text {
			font-size: 24rpx;
		}
	}

	.right {
		border: 1px solid white;
		padding: 10rpx 20rpx;
		border-radius: 50rpx;

		image {
			width: 50rpx;
			height: 50rpx;
		}

		text {
			margin-left: 10rpx;
			color: white;
			font-size: 30rpx;
		}
	}

	.views {
		margin: -50rpx 30rpx 0;
		border-radius: 20rpx;
		height: 460rpx;
		background-color: white;
	}

	.tit {
		padding: 20rpx 0;
		font-weight: bold;
	}

	.send {
		justify-content: start;
		flex-wrap: wrap;
	}
	.greendivs {
		flex-direction: column;
		width: 138rpx;
		height: 160rpx;
		background: #F4F4F4;
		border-radius: 20rpx;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		color: #000000;
		margin-top: 20rpx;
		margin-left: 20rpx;
		p {
			font-size: 22rpx;
		}
		.ns{
			color: #999999;
		}
		image {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
		}
	}
	.greendiv {
		flex-direction: column;
		width: 138rpx;
		height: 160rpx;
		background: #49CAA4;
		border-radius: 20rpx;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		color: white;
		margin-top: 20rpx;
		margin-left: 20rpx;
		p {
			font-size: 22rpx;
		}

		image {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
		}
	}
	.mat{
		margin-top: 50rpx !important;
	}
	.sn_image{
		margin-bottom: 50rpx;
		image{
			width: 56rpx;
			height: 56rpx;
		}
		p{
			font-size: 30rpx;
			font-weight: 500;
			color: #000000;
		}
		text{
			font-size: 22rpx;
			font-weight: 500;
			color: #999999;
		}
	}
	.sn_mar20{
		margin-left: 20rpx;
	}
	.sn_hig{
		padding-bottom: 10rpx;
		height: auto;
	}
	.sn_logo{
		align-items: center;
		margin-left: 120rpx;
		background-color: #49CAA4;
		padding: 15rpx 20rpx;
		width: 120rpx;
		height: 40rpx;
		border-radius: 50rpx;
		image{
			width: 40rpx;
			height: 40rpx;
		}
		label{
			color: white;
			margin-left: 10rpx;
		}
	}
	.fixed{
		position: fixed;
		top: 80rpx;
		left: 20rpx;
		.ops{
			width: 100%;
			color: white;
			text{
				margin-left: 290rpx;
			}
		}
	}
</style>