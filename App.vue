<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "main.css";
	@import "icon.css";
	/*每个页面公共css */
	body{
		background: $uni-bg-color-grey;
	}
	.content{
		background: $uni-bg-color-grey;
	}
</style>
