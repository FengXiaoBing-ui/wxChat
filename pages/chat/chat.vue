<template>
	<view class="content">
		<navBar autoBack :title="navTitle">
			<template #right>
				<view class="cuIcon-more margin-right" style="font-size: 40rpx;"></view>
			</template>
		</navBar>
		<view class="">
			<scroll-view scroll-y="true" @click="isMore = false" :scroll-top="scrollTop" :key="viewMore"
				:style="'height:'+viewBoxHeight+'px;'">
				<view id="scroll-view-content">
					<view v-for="(item,index) in chatList" :key="index">
						<chatListItem :chatItem="item" :pretime="index>0?chatList[index-1].createTime:0"></chatListItem>
					</view>
				</view>
			</scroll-view>
		</view>
		<view style="background-color: #f3f3f3;" class="inputContent">
			<view class="padding-xs flex align-center justify-between" style="min-height: 50px;">
				<view class="cuIcon-search text-center" style="font-size: 40rpx;width: 10vw;"></view>
				<textarea v-model="msg" @blur="isMore = false" @focus="" fixed :show-confirm-bar="false" auto-blur :adjust-position="false"
					class="bg-white radius padding-xs" auto-height style="width: 65vw;"></textarea>
				<view class="cuIcon-coin text-center" style="font-size: 40rpx;width: 10vw;"></view>
				<view v-show="!msg" @click="isMore = true" class="cuIcon-roundadd text-center" style="font-size: 40rpx;width: 10vw;"></view>
				<view @click="sending" v-show="msg" style="width: 10vw;" class="bg-green padding-tb-xs radius text-center text-sm">发送</view>
			</view>
			<view v-if="viewMore" class="w100 bg-red" :style="'height:'+moreBoxHeight+'px'">

			</view>
		</view>
	</view>
</template>

<script>
	import chatListItem from "./components/chat-list-item.vue"
	export default {
		components:{chatListItem},
		data() {
			return {
				navTitle: "老王",
				viewBoxHeight: "auto",//计算聊天记录盒子的高度
				keyHeight: 0,//系统键盘的高度
				scrollTop: 0,//聊天记录滚动的距离
				isMore:false,//是否显示更多
				moreBoxHeight:210,//更多显示功能的盒子高度
				inputContentHeight:'50px',//计算聊天输入框的总高度
				chatList:[],
				chatListConcat:[],
				msg:""
			};
		},
		computed:{
			viewMore(){
				let h = this.keyHeight?true:false
				let falg = this.isMore
				if(!falg) this.viewBoxHeight = this.windowHeight - this.statusBarHeight - 50 - this.keyHeight
				if(!falg&&!h){
					this.inputContentHeight = '50px'
				}else{
					this.inputContentHeight = (this.moreBoxHeight+50)+'px'
				}
				this.keyDownHeight()
				if(h) return false
				if(falg){
					this.viewBoxHeight = this.windowHeight - this.statusBarHeight - 50 - this.moreBoxHeight
					return true
				}
			}
		},
		onLoad(options) {
			this.chatLog(options.chatRoomNumber)
			this.viewBoxHeight = this.windowHeight - this.statusBarHeight - 50
			this.keyDownHeight()
			uni.onKeyboardHeightChange((res) => {
				this.keyHeight = res.height
				if(res.height>50){
					this.moreBoxHeight = res.height
					this.inputContentHeight = (res.height+50)+'px'
				}else if(!this.isMore){
					this.inputContentHeight = (res.height+50)+'px'
				}
			})
		},
		onUnload() {
			uni.offKeyboardHeightChange()
		},
		methods:{
			keyDownHeight() {
				this.$nextTick(() => {
					uni.createSelectorQuery().in(this).select('#scroll-view-content').boundingClientRect((res) => {
						let top = res.height - this.viewBoxHeight;
						this.scrollTop = top<0?0:top;
					}).exec()
				})
			},
			async chatLog(chatRoomNumber){
				const res = await this.$http.chatLog({chatRoomNumber,userId:9527})
				this.chatListConcat = res.rows.reverse().concat(this.chatListConcat)
				this.chatList = this.chatListConcat
			},
			sending(){
				let msg = this.msg
				this.msg = ''
				this.chatList.push({
					avatar: "http://192.168.3.20:30000/localUpload/view/20231109/b05eb50d611745abbc5251677e14cd7f.jpg",
					chatRoomNumber: "201512120",
					createBy: "",
					createTime: new Date(),
					id: 3,
					isRevoke: 0,
					nickName: "路人甲",
					remark: null,
					text: msg,
					type: "1",
					updateBy: "",
					updateTime: null,
					userIdFrom: 9527,
					userIdTo: null,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef MP-WEIXIN */
	textarea {
		min-height: 64rpx;
		/* 设置 min-height 是为了设置 textarea 的高度 */
		/* 因为行内样式优r先级比较高，所以曲线救国 */
		line-height: 40rpx;
	}

	/* #endif */

	.inputContent {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: v-bind(inputContentHeight);
	}
</style>