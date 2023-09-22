<template>
	<view class="content">

		<!-- 顶部导航栏 -->
		<navBar :autoBack="false" :title="navTitle" v-show="current!=3">
			<template #right>
				<view class="flex align-center">
					<text class="cuIcon-search padding-xs" style="font-size: 36rpx;"></text>
					<text class="cuIcon-roundadd margin-lr-sm padding-xs" style="font-size: 36rpx;"></text>
				</view>
			</template>
		</navBar>

		<!-- 内容列表 -->
		<swiper @change="swiperChange" :current="current" :style="'height:'+(windowHeight-navBarHeight-54)+'px'">
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" :style="'height:'+(windowHeight-navBarHeight-54)+'px'">
						<chatList v-for="item in child" :key="item" :chatObj="item"></chatList>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<friendsList v-for="item in child" :key="item" :chatObj="item"></friendsList>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<find :findObj="{}"></find>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<my></my>
				</view>
			</swiper-item>
		</swiper>

		<!-- 底部导航栏 -->
		<view class="w100 grid col-4 fixed">
			<view v-for="(item,index) in tabbar" :key="index" @click="switchTabBar(index)"
				class="tabbar flex flex-direction align-center justify-center padding-tb-xs">
				<image style="width: 50rpx;height: 50rpx;" src="../../static/logo.png" mode=""></image>
				<text>{{ item.title }}</text>
			</view>
		</view>

	</view>
</template>

<script>
	import chatList from "@/pages/index/components/chatList"
	import friendsList from "@/pages/index/components/friendsList"
	import find from "@/pages/index/components/find"
	import my from "@/pages/index/components/my"
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			chatList,
			friendsList,
			find,
			my
		},
		data() {
			return {
				child: [{
						name: "牛逼",
						text: "你是？",
						time: "13:55"
					},
					{
						name: "牛逼红黄牌那几个",
						text: "发动机哦啊三个",
						time: "13:50"
					}
				],
				navTitle: "微信",
				chatList: [],
				current: 0,
				tabbar: [
					{
						title: "微信",
						icon: "",
						activeIcon: "",
						pages: "/pages/index/index"
					},
					{
						title: "通讯录",
						icon: "",
						activeIcon: "",
						pages: "/pages/index/index"
					},
					{
						title: "发现",
						icon: "",
						activeIcon: "",
						pages: "/pages/index/index"
					},
					{
						title: "我",
						icon: "",
						activeIcon: "",
						pages: "/pages/index/index"
					}
				]
			}
		},
		onLoad() {
			this.getChatList(0)
		},
		computed: {
			...mapState(["navBarHeight"]),
			heig() {
				return this.navBarHeight + 'px'
			}
		},
		methods: {
			async getUserInfo(index) {
			},
			async getFind(index) {
			},
			async getFriends(index) {
			},
			async getChatList(index) {
			},
			swiperChange(e) {
				this.navTitle = this.tabbar[e.detail.current].title
				this.current = e.detail.current
				console.log(this.navTitle);
			},
			switchTabBar(index) {
				this.current = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabbar {
		background-color: $uni-bg-tabbar;
	}

	.myBox {
		padding-top: v-bind(heig);
	}
</style>