<template>

</template>

<script>
	export default {
		name: "user",
		mounted: function () {
			this.$nextTick(function () {
				this.$store.commit("title", `我 | ${this.$store.state.site.title}`);
				if (!this.$store.state.user) this.$router.push({name: "Login"});
			});
		}
	};
</script>

<style>

</style>
