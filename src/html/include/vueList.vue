<template>
		<ul class="items" @touchmove="pull">
			<b-media tag="li" v-for="item of items" :key="item._id" @click="$router.push({path:`/${item._id}`})">
				<b-img slot="aside" :src="item.pict_url" width="100" height="100" :alt="item.title"/>
				<h5 class="mt-0" v-text="item.title"></h5>
				<p>
					<span>现价:{{item.zk_final_price}} 原价:{{item.reserve_price}}</span>
					<span>销量:{{item.volume}}</span>
					<br/>
				</p>
				<p>
					<span>@{{item.shop_title}}</span>
					<span>{{item.provcity}}</span>
					<br/>
				</p>
			</b-media>
		</ul>
</template>

<script>
	import "../css/list.css";

	export default {
		name: "vue-list",
		props: ["items"],
		mounted: function () {

		},
		methods: {
			pull: function(e) {
				e.preventDefault();
			}
		}
	};
</script>

<style>

</style>
