import { createStore } from 'vuex'

export default createStore({
	modules: {
	},
	state: {
		navBarHeight:0
	},
	mutations: {
		setNavBarHeight(state,val){
			state.navBarHeight = val
		}
	},
	actions: {},
	// strict: true
});
