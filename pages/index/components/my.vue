<template>
	<view class="myBox bg-white">
		<view class="flex align-stretch justify-between padding-bottom-lg">
			<view class="flex-sub flex justify-center">
				<image style="width: 120rpx;height: 120rpx;" src="../../../static/logo.png" mode=""></image>
			</view>
			<view class="flex-treble flex flex-direction justify-around">
				<view class="text-bold text-xl">小兵</view>
				<view class="w100 flex justify-between align-center">
					<view class="text-lg">微信号：23465156</view>
					<view class="flex align-center text-lg">
						<text class="cuIcon-coin"></text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="margin-top-sm">
			<view class="w100 bg-white" v-for="(item,index) in list" :key="index">
				<view v-if="item.border" class="w100 bg-gray" style="height: 20rpx;"></view>
				<view class="w100 flex align-center justify-between padding-tb-sm">
					<view class="flex-sub flex justify-center">
						<image style="height: 80rpx;width: 80rpx;" src="../../../static/logo.png" mode=""></image>
					</view>
					<view class="flex align-center justify-between" style="flex: 5;">
						<view class="flex-treble flex flex-direction">
							<view style="width: 60vw;" class="text-bold text-cut">{{ item.name }}</view>
						</view>
						<view class="flex-sub flex flex-direction justify-around text-gray padding-right text-sm">
							<view class="text-right cuIcon-right"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list:[
					{
						name:"服务",
						page:"",
						border:true
					},
					{
						name:"收藏",
						page:"",
						border:true
					},
					{
						name:"朋友圈",
						page:""
					},
					{
						name:"卡包",
						page:""
					},
					{
						name:"表情",
						page:""
					},
					{
						name:"设置",
						page:"",
						border:true
					}
				]
			}
		}
	}
</script>

<style>
</style>