<template>
	<view class="body">
		<view class="content pd30">
			<u--textarea height='140' border='none' confirmType='done' v-model="content"
				placeholder="请描述您遇到的相关问题(必填)"></u--textarea>
			<p>上传图片</p>
			<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
				:maxCount="10"></u-upload>
		</view>
		
		<view class="m20 dis_f pd30 phone">
			<label>联系电话</label>
			<input v-model="phone" type="number" maxlength="11" placeholder="请输入联系方式,更好的解决问题">
		</view>
		
		<p class="btn" @click='submit'>提交反馈</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				fileList1: [],
				imagelist:[],
				phone:''
			}
		},
		methods: {
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
								this.imagelist = this.imagelist.concat(JSON.parse(res.data).data.path)
								console.log(this.imagelist);
							}, 1000)
						}
					});
				})
			},
			async submit(){
				let reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
				if(this.content == ''){
					uni.$u.toast('问题描述不能为空')
					return false
				}else if(!reg.test(this.phone)){
					uni.$u.toast('手机号格式不正确')
					return false
				}
				const params = {
					images:this.imagelist,
					content:this.content,
					phone:this.phone
				}
				uni.showLoading({
					title:'提交中'
				})
				const res = await this.$http('/feedback/feedback',params)
				uni.hideLoading()
				uni.showToast({
					title:'提交成功！',
					icon:'success'
				})
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		height: 1500rpx;
		background-color: #FAFAFA;
		padding-top: 20rpx;

		.content {
			background-color: white;
			p{
				margin: 30rpx 0;
				font-size: 30rpx;
			}
		}
		.phone{
			background-color: white;
			padding: 30rpx;
			label{
				font-size: 30rpx;
			}
			input{
				margin-left: 30rpx;
				width: 500rpx;
				font-size: 30rpx;
			}
		}
	}
	.btn{
		margin: 600rpx auto 0;
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		background: #49CAA4;
		border-radius: 40rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #FFFFFF;
	}
</style>