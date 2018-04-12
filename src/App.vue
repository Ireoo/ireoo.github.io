<template>
	<div id="app">
		<vue-header></vue-header>
		<div :class="{'body': true, 'noHead': !$store.state.site.showHeader, 'noFoot': !$store.state.site.showFooter}">
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
	data: function() {
		return {
			showHeader: true
		};
	},
	watch: {
		"$route.meta.title": function(v) {
			document.title = `${v} - 爱淘客`;
		}
	},
	mounted: function() {
		document.title = `${this.$route.meta.title} - 爱淘客`;

		this.$nextTick(function() {});
	}
};
</script>

<style>
@import url("/css/style.css");
</style>
