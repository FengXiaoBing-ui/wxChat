import store from "@/store"
export const mixinH = {
	data() {
		return {
			windowHeight:null,
			statusBarHeight:null
		}
	},
	onLoad() {
		uni.getSystemInfo({
			success:(e)=> {
				console.log(e);
				store.commit('setNavBarHeight',e.statusBarHeight + 40)
				this.statusBarHeight = e.statusBarHeight + 40
				this.windowHeight = e.windowHeight
				console.log(this.statusBarHeight);
			}
		})
	},
	methods: {}
}