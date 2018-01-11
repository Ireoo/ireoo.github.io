<template>
	<pull-to :top-load-method="refresh">
		<ul class="items">
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
	</pull-to>
</template>

<script>
	import "../css/list.css";
	import PullTo from "vue-pull-to";

	export default {
		name: "vue-list",
		components: {
			PullTo
		},
		props: ["items"],
		mounted: function () {

		},
		methods: {
			refresh: function(loaded) {
				setTimeout(() => {
					// this.dataList.reverse();
					loaded('done');
				}, 5000);
			}
		}
	};
</script>

<style>

</style>
