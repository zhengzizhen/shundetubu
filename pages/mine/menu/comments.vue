<template>
	<view class="pd30">
		<view class="cs_header dis_f">
			<text>总体评价</text>
			<u-rate activeColor='#F7B36B' inactiveColor='#CCCCCC' :count="count" v-model="value"></u-rate>
		</view>

		<view class="content posir">
			<textarea placeholder="与描述是否一致？商品怎么样？" class="textarea" v-model="content" cols="30" rows="10"></textarea>
			<p class="posi posia">{{content.length}}/200</p>
		</view>

		<view class="upload">
			<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" :deletable='false' name="1"
				multiple :maxCount="10"></u-upload>
		</view>

		<view class="cs_header dis_f">
			<text>物流服务</text>
			<u-rate activeColor='#F7B36B' inactiveColor='#CCCCCC' :count="count1" v-model="value1"></u-rate>
		</view>

		<view class="cs_header dis_f">
			<text>商家服务</text>
			<u-rate activeColor='#F7B36B' inactiveColor='#CCCCCC' :count="count2" v-model="value2"></u-rate>
		</view>

		<view class="bot dis_f alitmc">
			<image @click="isShow = !isShow" v-show="!isShow" src="@/static/login/wxz.png" mode=""></image>
			<image @click="isShow = !isShow" v-show="isShow" src="@/static/login/xz.png" mode=""></image>
			<p>匿名评论 （不公开头像和昵称）</p>
		</view>

		<p class="btn" @click='submit'>
			提交
		</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				count: 5, //总体评价
				value: 5, //总体评价
				count1: 5, //物流服务
				value1: 5, //物流服务
				count2: 5, //商家服务
				value2: 5, //商家服务
				content: '',
				fileList1: [],
				order_no: '',
				images: ''
			}
		},
		onLoad(option) {
			this.order_no = option.id
		},
		methods: {
			// 删除图片
			deletePic(event) {
				// this[`fileList${event.name}`].splice(event.index, 1)
				console.log(event);
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'https://www.tbq11.com/api/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
								this.images == '' ? this.images = JSON.parse(res.data).data
									.path : this.images = this.images + ',' + JSON.parse(res
										.data).data.path
								console.log(this.images);
							}, 1000)
						}
					});
				})
			},
			async submit() {
				let state;
				this.isShow == true ? state = 1 : state = 0
				const params = {
					order_no: this.order_no,
					all_grade: this.value,
					express_grade: this.value1,
					shop_grade: this.value2,
					content: this.content,
					images: this.images,
					is_anonymity:state
				}
				uni.showLoading({
					title:'提交中'
				})
				const res = await this.$http('/shop/order/comment', params)
				uni.hideLoading()
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cs_header {
		margin: 30rpx 0;

		text {
			margin-right: 20rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #000000;
		}
	}

	.content {
		.textarea {
			box-sizing: border-box;
			width: 100%;
			height: 240rpx;
			font-size: 22rpx;
			background-color: #F6F6F6;
			padding: 30rpx 20rpx;
			font-family: 'PF';
		}

		p {
			bottom: 20rpx;
			right: 20rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #999999;
		}
	}

	.upload {
		margin: 30rpx 0;
	}

	.bot {
		image {
			width: 33rpx;
			height: 33rpx;
		}

		p {
			font-size: 24rpx;
			font-weight: 500;
			color: #999999;
			margin-left: 20rpx;
		}
	}

	.btn {
		margin-top: 650rpx;
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #49CAA4;
		font-size: 30rpx;
		border-radius: 40rpx;
		color: white;
	}
</style>