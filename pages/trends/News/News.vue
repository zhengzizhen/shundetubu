<template>
	<view class="pd30">
		<u-picker :show="isShow" :columns="columns" @close='close' @cancel='cancel' @confirm='confirm'></u-picker>
		<view v-if='shows'>
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


		<view v-else>
			<view class="pd30">
				<p class="title" @click='nochecks'>不关联记录</p>
			</view>
			<view class="re_content" @click="checks(item)" v-for="(item,index) in lists" :key="index">
				<!-- 内容 -->
				<view class="dc_mod dis_f">
					<image :src="item.trip_master_image" mode=""></image>
					<view class="dc_god">
						<p>{{item.trip_title}}</p>
						<label>订单号:{{item.order_no}}</label>
						<view class="dc_span dis_f">
							<text>￥{{item.all_price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
				title: '', //标题
				content: '', //内容
				imagelist: [], //图片数组
				shows: true,
				lists: [],
				page: 1,
				bottom: false,
				order_no: '',
				label: [],
				isShow: false,
				columns: []
			}
		},
		onReachBottom() {
			if (this.shows == false) {
				if (this.bottom == true) {
					return false
				}
				this.page += 1
				this.getruns()
			}
		},
		onLoad() {
			this.getlabel()
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
						this.shows = false
						this.getruns()
						break;
					case '添加标签':
						this.isShow = true
						break;
				}
			},
			close() {
				this.isShow = false
			},
			cancel() {
				this.isShow = false
			},
			confirm(e) {
				console.log(e);
				this.labels = e.value
				this.isShow = false
			},
			async getlabel() {
				const res = await this.$http('/sys/circle/label')
				this.columns.push(res.data.data)
			},
			async getruns() {
				const res = await this.$http('/trip/order/list', {
					page: this.page,
					limit: 10,
				})
				if (res.data.data.length < 10) {
					this.bottom = true
				}
				this.lists = this.lists.concat(res.data.data)
			},
			checks(v) {
				this.order_no = v.order_no
				uni.$u.toast('关联成功')
				this.shows = true
			},
			nochecks() {
				this.order_no = ''
				this.shows = true
			},
			async submit() { //提交
				uni.showLoading()
				const res = this.$http('/circle/dynamic/add', {
					title: this.title, //标题
					content: this.content, //内容
					images: this.imagelist,
					order_no: this.order_no,
					label:this.label
				})
				uni.hideLoading()
				uni.$u.toast('发布成功')
				setTimeout(() => {
					uni.navigateBack()
				}, 500)
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

	.re_seach {
		margin: 100rpx 20rpx 20rpx;

		input {
			margin-left: 10rpx;
		}
	}

	.title {
		margin: 30rpx 0 0;
	}

	.dc_mod {
		position: relative;
		background-color: white;
		border-radius: 20rpx;
		padding: 30rpx 0rpx;

		image {
			width: 240rpx;
			height: 240rpx;
			border: 20rpx;
			border-radius: 20rpx;
		}

		.dc_god {
			width: 388rpx;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			p {
				font-size: 26rpx;
			}

			label {
				font-size: 26rpx;
				color: #666;
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
			margin-top: 10rpx;

			text {
				padding: 5rpx 15rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				background-color: #FFA1AD;
			}

			label {
				margin-left: 10rpx;
				padding: 5rpx 20rpx;
				color: #FFFFFF;
				font-size: 24rpx;
				background-color: #F2AD5A;
			}
		}

		.dc_out {
			margin-top: 20rpx;

			text {
				padding: 5rpx 15rpx;
				color: #E49332;
				font-size: 24rpx;
				background-color: #FFECD6;
			}
		}
	}

	.re_content {
		padding: 0 30rpx;
	}

	.dc_span {
		margin-top: 10rpx;
		justify-content: space-between;
		align-items: center;

		label {
			color: #999999;
			font-size: 24rpx;
		}

		text {
			color: #FF4040;
			font-weight: bold;
		}
	}
</style>