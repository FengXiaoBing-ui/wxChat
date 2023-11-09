<template>
	<view @click="chat" class="w100 flex justify-between align-center padding-top-sm bg-white">
		<view class="w100 flex align-stretch justify-between">
			<view class="flex-sub flex justify-center">
				<!-- <view style="width: 80rpx;height: 80rpx;" class="bg-gray flex flex-wrap justify-center align-center">
					<image style="height: 80rpx;width: 80rpx;" src="../../../static/logo.png" mode=""></image>
				</view> -->
				<view class="item-img">
					<image :class="'item-img-img'+(chatObj.avatarArr.length>9?9:chatObj.avatarArr.length)"
						v-for="(it,itIndex) in chatObj.avatarArr" :key="itIndex" :src="it"></image>
				</view>
			</view>
			<view class="flex flex-direction padding-bottom" style="border-bottom: 0.1rpx solid #f3f3f3;flex: 5;">
				<view class="flex justify-between align-center">
					<view class="flex-treble text-bold text-cut">{{ chatObj.nickName }}</view>
					<view class="flex-twice text-right text-sm text-gray padding-right">
						{{ getTime(chatObj.createTime) }}
					</view>
				</view>
				<view class="flex justify-between align-center">
					<view class="flex-treble text-sm text-gray text-cut">{{ chatObj.text }}</view>
					<view class="text-right cuIcon-medal text-sm text-gray padding-right"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Time from "@/util/time.js"
	export default {
		props: {
			chatObj: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		mounted() {
			console.log(this.chatObj);
		},
		methods: {
			chat() {
				uni.navigateTo({
					url: "/pages/chat/chat?chatRoomNumber="+this.chatObj.chatRoomNumber
				})
			},
			handlerAvatar() {

			},
			//时间处理
			getTime(time) {
				return Time.gettime(new Date(time).getTime())
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-img {
		width: 80rpx;
		height: 80rpx;
		border-radius: 6rpx;
		font-size: 34rpx;
		color: #0D0E15;
		overflow: hidden;
		display: flex;
		justify-content: center;
		flex-wrap: wrap-reverse;
		align-items: center;
		align-content: center;
		justify-items: center;
		background-color: rgb(221, 222, 224);
		flex: none;
	}

	.item-img image {
		background-color: rgb(240, 240, 241);
	}

	.item-img-img1 {
		height: 98%;
		width: 98%;
	}

	.item-img-img2,
	.item-img-img3,
	.item-img-img4 {
		justify-self: center;
		height: 46%;
		width: 46%;
		margin: 1%;
	}

	.item-img-img5,
	.item-img-img6,
	.item-img-img7,
	.item-img-img8,
	.item-img-img9 {
		height: 31.16666%;
		width: 31.16666%;
		margin: 1%;
	}
</style>