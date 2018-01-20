<template>
	<div class="main">

		<a class="back" @click="$router.back()">
			<i class="fa fa-chevron-circle-left"></i>
		</a>

		<div class="item">

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
			<h1>{{item.title}}</h1>
			<p>原价: {{item.reserve_price}}</p>
			<p>现价: {{item.zk_final_price}}</p>
		</div>

		<div class="content">

		</div>

	</div>
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
		},
		methods: {}
	};
</script>

<style>
	div.body a.back {
		color: #FFF;
		position: fixed;
		top: 60px;
		left: 20px;
		z-index: 6;
		font-size: 50px;
		text-shadow: 1px 1px 1px #000;
	}

	div.body.noHead a.back {
		top: 20px;
	}

	div.body a.back:hover {
		color: #4898F8;
	}

	div.item {
		position: relative;
		background: #FFF;
		padding-bottom: 10px;
	}

	div.item > div.images {
		margin-bottom: 10px;
	}

	div.item > div.images > ul {
		position: relative;
		margin: 0;
		padding: 0 0 100% 0;
		height: 0;
	}

	div.item > div.images > ul > li {
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

	div.item > div.images > ul > li > img {
		width: 100%;
		padding-top: 100%;
	}

	div.item > h1 {
		font-size: 16px;
		padding: 0 10px;
		font-weight: bold;
	}

	div.item > p {
		display: block;
		padding: 0 10px;
		margin-bottom: 0;
	}
</style>
