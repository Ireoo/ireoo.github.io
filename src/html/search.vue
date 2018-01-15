<template>
	<div class="main">
		<vue-list :items="items" :top="top" :bottom="bottom"></vue-list>
	</div>
</template>

<script>
	import VueList from "./include/vueList.vue";

	export default {
	    components: { VueList },
	    name: "Search",
	    data: function() {
	        return {
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
	    filters: {
	        itemFilter: function(val) {
	            return `/item/${val}`;
	        }
	    },
	    mounted: function() {
	        this.sql.other.skip = 0;
	        this.$db
	            .table(this.sql.table)
	            .where(this.sql.where)
	            .other(this.sql.other)
	            .get("find")
	            .then(items => {
	                this.page = 1;
	                this.items = items;
	            });
	        this.$nextTick(() => {
	            this.$store.commit("foot", !this.$route.meta.hideFooter);
	            this.$store.commit("title", `搜索 | ${this.$store.state.site.title}`);
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

</style>
