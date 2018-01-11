<template>
	<div class="main"></div>
</template>

<script>
	export default {
		name: "Item",
		data: function () {
			return {
				item: {}
			};
		},
		mounted: function () {
			this.$nextTick(() => {
				this.$db.table("items").where({_id: this.$route.params.id}).get("findone").then(item => {
					this.item = item;
					this.$store.commit("title", `${item.title} | ${this.$store.state.site.title}`);
				});
			});
		}
	};
</script>

<style>

</style>
