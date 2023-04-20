<template>
	<view class="pd30">
		<p class="tit">报销项目</p>
		<input type="text" placeholder="请输入项目名称" v-model="name">

		<p class="tit">金额</p>
		<input type="number" placeholder="请输入金额" v-model="money">

		<p class="tit">截图上传</p>
		
		<view class="mt20">
			<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
				:maxCount="10"></u-upload>
		</view>
		
		<p class="btn">提交</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
				name:'',
				money:''
			}
		},
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
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
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tit {
		font-size: 30rpx;
		font-weight: 500;
		color: #000000;
		margin-top: 40rpx;
	}

	input {
		border: 1px solid #CCC;
		padding: 15rpx;
		margin-top: 20rpx;
	}
	.btn{
		width: 690rpx;
		height: 88rpx;
		line-height: 88rpx;
		background: #49CAA4;
		color: white;
		text-align: center;
		margin-top: 746rpx;
		border-radius: 44rpx;
	}
</style>