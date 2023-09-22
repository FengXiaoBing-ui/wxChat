<template>
	<view class="navBox w100" :style="'height:'+navBarHeight+'px'">
		<view class="navBar w100 flex justify-between align-center" :style="'height:'+navBarHeight+'px'">
			<view class="flex-sub flex align-center justify-start" style="position: relative;">
				<text v-if="autoBack" class="cuIcon-back margin-left-sm" style="font-size: 38rpx;"></text>
				<slot name="left"></slot>
			</view>
			<view class="flex-treble flex align-center justify-center text-bold text-lg text-cut" style="position: relative;">{{ title }}</view>
			<view class="flex-sub flex align-center justify-end" style="position: relative;">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
	
</template>

<script>
	import { mapState } from "vuex"
	export default{
		props:{
			title:{
				type: String ,
				default: ''
			},
			autoBack:{
				type: Boolean ,
				default: true
			}
		},
		computed:{
			...mapState(["navBarHeight"])
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navBox{
		position: relative;
		.navBar{
			position: fixed;
			top: 0;
			left: 0;
		}
	}
	
</style>