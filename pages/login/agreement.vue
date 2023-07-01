<template>
	<view class="pd30">
		<u-parse :content="content"></u-parse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
			}
		},
		onLoad(option) {
			this.getlist(option.id)
		},
		methods: {
			async getlist(v){
				const res = await this.$http('/sys/article/detail',{
					id:v
				})
				this.content = res.data.data.content
			}
		}
	}
</script>

<style>

</style>
