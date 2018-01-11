<template>
	<div class="main">
		<ul class="items">
			<b-media tag="li" v-for="item of items" :key="item._id" @click="$router.push({path:`/${item._id}`})">
				<b-img slot="aside" :src="item.pict_url" width="100" height="100" :alt="item.title" />
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
	</div>
</template>

<script>
	export default {
		name: "Index",
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
			this.$db.table("items").where({
				click_url: {
					$ne: null
				}
			}).other({
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
			}).get("find").then(items => {
				this.items = items;
			});
			this.$nextTick(() => {
				this.$store.commit('foot', !this.$route.meta.hideFooter);
				this.$store.commit("title", `${this.$store.state.site.title}`);
			});
		}
	};

</script>

<style>
	ul.items>li {
		margin: 0;
		padding: 10px;
		cursor: pointer;
	}

	ul.items>li:hover {
		background: #92baff;
	}

	ul.items>li>div.media-body>p {
		margin-bottom: 0;
	}

	ul.items>li>div.media-body>p>br {
		clear: both;
	}

	ul.items>li>div.media-body>p>span {
		float: right;
	}

	ul.items>li>div.media-body>p>span:first-child {
		float: left;
	}

</style>
