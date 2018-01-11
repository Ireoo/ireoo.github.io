<template>
	<ul class="items" @touchstart="on" @touchmove="pull" @touchend="end" @touchcancel="cancel" :style="{paddingTop: height}">
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
		data: function () {
			return {
				height: 0,
				now: {
					x: 0,
					y: 0
				}
			};
		},
		mounted: function () {

		},
		methods: {
			on: function(e) {
				this.now.y = e.touches[0].pageY;
			},
			pull: function (e) {
				// e.preventDefault();
				if(e.touches[0].pageY < this.now.y) {
					this.height = this.now.y - e.touches[0].pageY;
					this.$store.commit('title', this.height);
				}
			},
			end: function (e) {

			},
			cancel: function(e) {

			}
		}
	};
</script>

<style>

</style>
