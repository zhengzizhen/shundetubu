<template>
	<view class="">
		<view class="about pd30">
			<image src="@/static/index/zheng.jpg" mode=""></image>
		</view>
		<view class="pd30 op">
			<p> 散文 (prose;essay )是与 诗歌、小说、戏剧 并称的一种文学体裁, 指不讲究韵律的散体文章,包括杂文、随笔、游记等。是最自由的文体,不讲究
				音韵,不讲究排比,没有任何的束缚及限制,也是中国最早出现的行文体例。通 常一篇散文具有一个或多个中心思想,以抒情、记叙、论理等方式表达。 (六) 杂谈:就是拉杂地谈论。 是一种快捷的对现实社会现象发表自己见解
				的一个文体, 它反应灵敏、 传递迅速、 观点明确, 会对现实有着振聋发聩的作用。</p>
			<p class="botm">笔记:1.用笔所做的记录。2.听课、听报告、读书时所做的记录。3.一种以随笔记录为主的著作体裁,多由分条的短篇汇集而成。</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.about {
		margin: 30rpx auto;
		text-align: center;
		image {
			width: 100%;
			margin: 0 auto;
			width: 200rpx;
			height: 200rpx;
			border-radius: 10rpx;
		}
	}
	.op{
		p {
			margin-top: 0rpx;
			text-indent: 2rem;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
		}
		.botm{
			margin-top: 20rpx;
		}
	}
</style>