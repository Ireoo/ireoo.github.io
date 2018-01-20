<template>
	<div class="main">

		<div class="item">
			<div class="images">
				<ul ref="image">
					<li style="z-index: 5">
						<img :src="item.pict_url" :alt="item.title" />
					</li>
					<li v-for="(img, index) of item.small_images.string" :key="index" :style="{zIndex: 4 - index}">
						<img :src="img" :alt="item.title" />
					</li>
				</ul>
			</div>
			<h1>{{item.title}}</h1>
			<p>原价: {{item.reserve_price}}</p>
			<p>现价: {{item.zk_final_price}}</p>
		</div>

		<div class="content">

		</div>

		<vue-list :items="items" :top="top" :bottom="bottom"></vue-list>

	</div>
</template>

<script>
import VueList from "./include/vueList.vue";

export default {
	components: { VueList },
	name: "Item",
	data: function() {
		return {
			item: {},
			sql: {
				table: "items",
				where: {
					click_url: {
						$ne: null
					}
				},
				other: {
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
			},
			items: [],
			page: 1
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

			// list
			this.sql.other.skip = 0;
			this.$db
				.table(this.sql.table)
				.where(this.sql.where)
				.other(this.sql.other)
				.get("find")
				.then(items => {
					this.page = 1;
					this.items = items;
				})
				.catch(alert);
			this.$nextTick(() => {
				this.$store.commit("foot", !this.$route.meta.hideFooter);
				this.$store.commit("title", `${this.$store.state.site.title}`);
			});
		});
	},
	methods: {
		top: function(cb) {
			this.sql.other.skip = 0;
			this.$db
				.table(this.sql.table)
				.where(this.sql.where)
				.other(this.sql.other)
				.get("find")
				.then(items => {
					this.page = 1;
					this.items = items;
					cb(null, "ok");
				})
				.catch(err => {
					alert(err);
					cb(err, null);
				});
		},
		bottom: function(cb) {
			this.sql.other.skip = this.page * 20;
			this.$db
				.table(this.sql.table)
				.where(this.sql.where)
				.other(this.sql.other)
				.get("find")
				.then(items => {
					this.page++;
					if (items.length > 0) {
						items.forEach(item => {
							this.items.push(item);
							cb(null, "ok");
						});
					} else {
						cb(null, "over");
					}
				})
				.catch(err => {
					cb(err, null);
					alert(err);
				});
		}
	}
};
</script>

<style>
div.images {
	margin-bottom: 10px;
}

div.images > ul {
	position: relative;
	margin: 0;
	padding: 0;
	height: 0;
	padding-bottom: 100%;
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

h1 {
	font-size: 14px;
}

p {
	margin-bottom: 0;
}
</style>
