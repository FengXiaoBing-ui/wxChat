<template>
	<view class="chatItem padding-lr-sm margin-top-sm">
		<!-- 显示时间 -->
		<view v-if="showTime" class="w100 flex align-center justify-center text-sm text-gray padding-tb-sm">
			{{ showTime }}
		</view>
		
		<!-- 系统消息 -->
		<view v-if="chatItem.type==10" class="w100 flex align-center justify-center text-sm text-gray padding-tb-sm">
			{{ chatItem.data }}
		</view>
		
		<!-- 撤回消息 -->
		<view v-if="chatItem.isRevoke" class="w100 flex align-center justify-center padding-tb-sm">
			<text class="text-sm text-gray text-light-muted">{{ isself ? '你' : '对方' }}撤回了一条信息  <text class="text-blue">重新编辑</text></text>
		</view>
		
		<!-- 消息内容 -->
		<view class="w100 flex" :class="isself?'justify-end':''" v-if="!chatItem.isRevoke">
			<image style="width: 80rpx;height: 80rpx;min-width: 80rpx;" class="radius" v-if="!isself" :src="chatItem.avatar" mode="aspectFill"></image>
			<!-- 消息气泡 -->
			<view class="flex flex-direction margin-lr-sm">
				<text v-if="showNickName" :class="isself?'text-right':'text-left'" class="margin-bottom-xs">{{ chatItem.nickName }}</text>
				<view :class="isself?'bg-green':'bg-white'" class="padding-sm radius" style="word-break: break-all;">{{ chatItem.text }}</view>
			</view>
			<image style="width: 80rpx;height: 80rpx;min-width: 80rpx;" class="radius" v-if="isself" :src="chatItem.avatar" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	import Time from "@/util/time.js"
	export default {
		props:{
			//每一条消息记录对象
			chatItem:{
				type: Object,
				default:function(){
					return {}
				}
			},
			//上一条消息的时间戳
			pretime:[Number,String],
			//是否显示用户昵称
			showNickName:{
				type:Boolean,
				default:true
			}
		},
		computed:{
			// 显示的时间
			showTime(){
				return Time.getChatTime(new Date(this.chatItem.createTime).getTime(),new Date(this.pretime).getTime())
			},
			isself(){
				return this.chatItem.userIdFrom == this.userId
			}
		},
		data(){
			return{
				userId:9527
			}
		}
	}
</script>

<style>
</style>