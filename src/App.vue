<template>
	<div id="app">
		<vue-header></vue-header>
		<div :class="{'body': true, 'noHead': !$store.state.site.showHeader}">
			<router-view/>
		</div>
		<vue-footer></vue-footer>
	</div>
</template>

<script>
	import VueHeader from "./html/include/vueHeader.vue";
	import VueFooter from "./html/include/vueFooter.vue";

	export default {
		components: {
			VueFooter,
			VueHeader
		},
		name: "app",
		data: function () {
			return {
				showHeader: true
			};
		},
		watch: {
			"$store.state.site.page": {
				handler: function (val) {
					document.title = val;
				},
				deep: true,
				immediate: true
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				this.$store.commit('head', !this.$client.chat());
				console.log(`${this.$store.state.site.showHeader}`);
			});
		}
	};

</script>

<style>
	* {
		padding: 0;
		margin: 0;
		font-size: 12px;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
		"Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	div.body {
		position: fixed;
		top: 40px;
		left: 0;
		right: 0;
		bottom: 58px;
		padding: 10px;
		overflow-y: auto;
	}

	div.body.noHead {
		top: 0;
	}

	div.body>div.main {
		max-width: 900px;
		margin: auto;
	}

	a {
		display: flex;
		/*Flex布局*/
		display: -webkit-flex;
		/* Safari */
		align-items: center;
		/*指定垂直居中*/
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

</style>
