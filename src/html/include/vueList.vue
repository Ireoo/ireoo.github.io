<template>
	<ul id="items" class="items" :style="{'padding-top': height + 'px'}">
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
			this.$nextTick(() => {
				this.$el.addEventListener("touchstart", this.touch, false);
				this.$el.addEventListener("touchmove", this.touch, false);
				this.$el.addEventListener("touchend", this.touch, false);
			});
		},
		methods: {
			touch: function (event) {
				var event = event || window.event;

				switch (event.type) {
					case "touchstart":

						this.now.y = event.touches[0].pageY;

						break;
					case "touchend":

						if (this.height === 100) {

						}
						this.height = 0;

						break;
					case "touchmove":

						let scrollTop = document.getElementsByClassName("body")[0].scrollTop;
						// console.log(scrollTop);
						if (event.touches[0].pageY > this.now.y && scrollTop === 0) {
							event.preventDefault();
							this.height = event.touches[0].pageY - this.now.y;
							if (this.height > 100) {
								this.height = 100;

							}
							// this.$store.commit("title", `${this.now.y}, ${e.touches[0].pageY}, ${this.height}`);
						}

						break;
				}


			}
		}
	};
</script>

<style>

</style>
