<template>
	<view class="w100 bg-white" v-for="(item,index) in list" :key="index">
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
		<view v-if="item.border" class="w100 bg-gray" style="height: 20rpx;"></view>
	</view>
</template>

<script>
	export default{
		props:{
			findObj:{
				type:Object,
				default:function(){
					return {}
				}
			}
		},
		data(){
			return{
				list:[
					{
						name:"朋友圈",
						page:"",
						border:true
					},
					{
						name:"视频号",
						page:""
					},
					{
						name:"直播",
						page:"",
						border:true
					},
					{
						name:"扫一扫",
						page:""
					},
					{
						name:"摇一摇",
						page:"",
						border:true
					},
					{
						name:"看一看",
						page:""
					}
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>