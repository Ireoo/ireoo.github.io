<template>
	<div class="main">
		<vue-list :items="items" :top="top" :bottom="bottom"></vue-list>
	</div>
</template>

<script>
	import VueList from "./include/vueList.vue";

	export default {
	    components: { VueList },
	    name: "Index",
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
	            })
	            .catch(alert);
	        this.$nextTick(() => {
	            this.$store.commit("foot", !this.$route.meta.hideFooter);
	            this.$store.commit("title", `${this.$store.state.site.title}`);
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
	                    cb(null);
	                })
	                .catch(err => {
	                    alert(err);
	                    cb(err);
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
	                    if (items.length === 20) this.page++;
	                    items.forEach(item => {
	                        this.items.push(item);
	                        cb();
	                    });
	                })
	                .catch(err => {
	                    cb(err);
	                    alert(err);
	                });
	        }
	    }
	};
</script>

<style>

</style>
