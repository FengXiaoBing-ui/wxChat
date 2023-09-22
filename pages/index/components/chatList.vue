<template>
	<view class="w100 flex justify-between align-center padding-top-sm bg-white">
		<view class="w100 flex align-stretch justify-between">
			<view class="flex-sub flex justify-center">
				<image style="height: 80rpx;width: 80rpx;" src="../../../static/logo.png" mode=""></image>
			</view>
			<view class="flex align-stretch justify-between padding-bottom" style="border-bottom: 1rpx solid lightgray;flex: 5;">
				<view class="flex-treble flex flex-direction">
					<view style="width: 60vw;" class="text-bold text-cut">{{ chatObj.name }}</view>
					<view style="width: 60vw;" class="text-cut">{{ chatObj.text }}</view>
				</view>
				<view class="flex-sub flex flex-direction justify-around text-gray padding-right text-sm">
					<view class="text-right">{{ chatObj.time }}</view>
					<view class="text-right cuIcon-medal"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			chatObj:{
				type:Object,
				default:function(){
					return {}
				}
			}
		}
	}
</script>

<style>
</style>