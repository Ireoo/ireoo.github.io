<template>
	<ul class="items" :style="{'margin-top': height + 'px'}">
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
	    props: ["items", "top", "bottom"],
	    data: function() {
	        return {
	            height: 0,
	            now: {
	                loading: false,
	                x: 0,
	                y: 0
	            }
	        };
	    },
	    mounted: function() {
	        this.$nextTick(() => {
	            document.addEventListener("touchstart", this.touch, false);
	            document.addEventListener("touchmove", this.touch, false);
	            document.addEventListener("touchend", this.touch, false);
	            document
	                .getElementsByClassName("body")[0]
	                .addEventListener("scroll", this.scroll, false);
	        });
	    },
	    destroyed: function() {
	        document.removeEventListener("touchstart", this.touch, false);
	        document.removeEventListener("touchmove", this.touch, false);
	        document.removeEventListener("touchend", this.touch, false);
	        document
	            .getElementsByClassName("body")[0]
	            .removeEventListener("scroll", this.scroll, false);
	    },
	    methods: {
	        touch: function(event) {
	            var event = event || window.event;
	            switch (event.type) {
	                case "touchstart":
	                    this.now.y = event.touches[0].pageY;
	                    break;
	                case "touchend":
	                    if (this.height === 100 && !this.now.loading) {
	                        this.now.loading = true;
	                        this.top(msg => {
	                            this.now.loading = false;
	                            this.height = 0;
	                        });
	                    } else {
	                        this.height = 0;
	                    }
	                    break;
	                case "touchmove":
	                    let scrollTop = document.getElementsByClassName("body")[0]
	                        .scrollTop;
	                    if (
	                        event.touches[0].pageY > this.now.y &&
	                        scrollTop === 0
	                    ) {
	                        event.preventDefault();
	                        let h = event.touches[0].pageY - this.now.y;
	                        this.height = h / 3;
	                        if (this.height > 100) {
	                            this.height = 100;
	                        }
	                    }
	                    break;
	            }
	        },
	        scroll: function(e) {
	            let viewH = e.target.clientHeight, //可见高度
	                contentH = e.target.scrollHeight, //内容高度
	                scrollTop = e.target.scrollTop; //滚动高度
	            if (contentH - viewH - scrollTop <= 100 && !this.now.loading) {
	                this.now.loading = true;
	                this.bottom(err => {
	                    this.now.loading = false;
	                });
	            }
	        }
	    }
	};
</script>

<style>
	ul.items {
	    padding: 10px;
	    background: #fff;
	}
</style>
