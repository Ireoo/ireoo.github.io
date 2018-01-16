<template>
	<div class="main">

		<div class="images">
			<ul ref="image">
				<li style="z-index: 5">
					<img :src="item.pict_url" :alt="item.title"/>
				</li>
				<li v-for="(img, index) of item.small_images.string" :key="index" :style="{zIndex: 4 - index}">
					<img :src="img" :alt="item.title"/>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
export default {
	name: "Item",
	data: function() {
		return {
			item: {}
		};
	},
	mounted: function() {
		this.$nextTick(() => {
			this.$store.commit("foot", !this.$route.meta.hideFooter);
			this.$db
				.table("items")
				.where({
					_id: this.$route.params.id
				})
				.get("findone")
				.then(item => {
					this.item = item;
					this.$store.commit(
						"title",
						`${item.title} | ${this.$store.state.site.title}`
					);
				});
		});
	}
};
</script>

<style>
div.images > ul {
	position: relative;
	margin: 0;
	padding: 0;
}

div.images > ul > li {
	margin: 0;
	width: 100%;
	overflow: hidden;
	height: 0;
	padding-bottom: 100%;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
}

div.images > ul > li > img {
	width: 100%;
	padding-top: 100%;
}
</style>
