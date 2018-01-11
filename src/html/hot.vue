<template>
	<div class="main">
		<vue-list :items="items"></vue-list>
	</div>
</template>

<script>
	import VueList from "./include/vueList.vue";

	export default {
		components: {VueList},
		name: "Hot",
		data: function () {
			return {
				items: []
			};
		},
		filters: {
			itemFilter: function (val) {
				return `/item/${val}`;
			}
		},
		mounted: function () {
			this.$db.table("items").where(
				{
					click_url: {
						$ne: null
					}
				}
			).other(
				{
					limit: 20,
					skip: 0,
					show: {
						_id: 1,
						title: 1,
						shop_title: 1,
						zk_final_price: 1,
						reserve_price: 1,
						provcity: 1,
						volume: 1,
						pict_url: 1
					}
				}
			).get("find").then(items => {
				this.items = items;
			});
			this.$nextTick(() => {
				this.$store.commit("foot", !this.$route.meta.hideFooter);
				this.$store.commit("title", `推荐 | ${this.$store.state.site.title}`);
			});
		}
	};

</script>

<style>


</style>
