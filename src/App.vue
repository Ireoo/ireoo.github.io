<template>
	<div id="app">
		<vue-header></vue-header>
		<router-view class="main"></router-view>
		<!-- <vue-footer></vue-footer> -->
	</div>
</template>

<script>
import VueHeader from "./include/vueHeader.vue";
// import VueFooter from "./include/vueFooter.vue";

export default {
	components: {
		// VueFooter,
		VueHeader
	},
	name: "app",
	data: function() {
		return {
			showHeader: true
		};
	},
	watch: {
		"$route.meta.title": function(v) {
			document.title = `${v} - ${this.$store.state.site.page}`;
		}
	},
	mounted: function() {
		document.title = `${this.$route.meta.title} - ${
			this.$store.state.site.page
		}`;

		this.$nextTick(function() {});
	}
};
</script>

<style>
@import url("/css/style.css");
</style>
