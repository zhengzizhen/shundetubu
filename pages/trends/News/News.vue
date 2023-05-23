<template>
	<view class="pd30">
		<view class="ns_upimg">
			<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
				:maxCount="10"></u-upload>
		</view>
		<view class="ns_title">
			<u--input maxlength='20' placeholder="填写标题会有更多赞哦~" v-model="title" border="bottom" clearable>
				<template slot="suffix">
					<label class="label">20</label>
				</template>
			</u--input>
			<u--textarea v-model="content" height='90' placeholder="说说此刻心情" border="bottom"
				confirmType='done'></u--textarea>
		</view>
		<view @click="goNews('关联记录')" class="ns_hot dis_f alitmc">
			<view class="ns_left">
				<image src="@/static/image/trends/link.jpg" mode=""></image>
			</view>
			<text>关联记录</text>
		</view>
		<view @click="goNews('添加地点')" class="ns_hot dis_f alitmc">
			<view class="ns_left">
				<image class="img" src="@/static/image/trends/location.jpg" mode=""></image>
			</view>
			<text>添加地点</text>
		</view>
		<view @click="goNews('添加标签')" class="ns_hot dis_f alitmc sio">
			<view class="ns_left">
				<p>#</p>
			</view>
			<text>添加标签</text>
		</view>
		<button @click="submit">发布笔记</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
				title: '',//标题
				content: '',//内容
				imagelist:[],//图片数组
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
						url: 'https://www.tbq11.com/api/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
								let image = JSON.parse(res.data).data.path
								this.imagelist = this.imagelist.concat(image)
							}, 1000)
						}
					});
				})
			},
			goNews(v) {
				switch (v) {
					case '关联记录':
						this.$jump('./relevance')
						break;
					case '添加标签':
						this.$jump('./addLabel')
						break;
				}
			},
			async submit(){ //提交
				uni.showLoading()
				// title: '',//标题
				// content: '',//内容
				// imagelist:[],//图片数组
				uni.showLoading()
				const res = this.$http('/circle/dynamic/add',{
					title: this.title,//标题
					content: this.content,//内容
					images:this.imagelist
				})
				uni.hideLoading()
				uni.$u.toast('发布成功')
				setTimeout(()=>{
					uni.navigateBack()
				},500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ns_upimg {
		margin-top: 20rpx;
	}

	.ns_title {
		margin-top: 20rpx;

		label {
			color: #999;
		}
	}

	.ns_hot {
		margin-top: 30rpx;
		padding: 0 10rpx;
		background: url('@/static/image/mine/right.jpg') no-repeat 670rpx 14rpx;
		background-size: 2%;
		padding-bottom: 40rpx;
		border-bottom: 1px solid #dadbde;

		.ns_left {
			width: 50rpx;
		}

		image {
			width: 26rpx;
			height: 26rpx;
		}

		.img {
			width: 28rpx;
			height: 34rpx;
		}

		text {
			font-size: 30rpx;
			font-weight: 500;
			color: #222222;
		}

		p {
			font-size: 38rpx;
		}
	}

	.sio {
		border-bottom: none !important;
	}

	button {
		height: 88rpx;
		background: #49CAA4;
		border-radius: 44rpx;
		color: white;
		margin-top: 560rpx;
	}
</style>