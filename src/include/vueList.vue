<template>
	<ul class="items" :style="{'margin-top': height + 'px'}">
		<b-media tag="li" v-for="item of items" :key="item._id" @click="$router.push({path:`/${item._id}`})">
			<b-img slot="aside" :src="item.pict_url" width="100" height="100" :alt="item.title"/>
			<h5 class="mt-0" v-text="item.title"></h5>
			<div class="bottom">
				<p>
					<span class="money"><i class="fa fa-rmb"></i><span>{{item.zk_final_price}}</span><s>{{item.reserve_price}}</s></span>
					<span><i class="fa fa-shopping-bag"></i>{{item.volume}}</span>
					<br/>
				</p>
				<p>
					<span><i class="fa fa-at"></i>{{item.shop_title}}</span>
					<span>{{item.provcity}}</span>
					<br/>
				</p>
			</div>
		</b-media>
		<li class="loading" v-if="loading.bottom" v-text="text.bottom"></li>
	</ul>
</template>

<script>
	export default {
		name: "vue-list",
		props: ["items", "top", "bottom"],
		data: function () {
			return {
				height: 0,
				loading: {
					top: false,
					bottom: false
				},
				text: {
					top: "",
					bottom: "加载中..."
				},
				now: {
					x: 0,
					y: 0
				}
			};
		},
		mounted: function () {
			this.$nextTick(() => {
				document.addEventListener("touchstart", this.touch, false);
				document.addEventListener("touchmove", this.touch, false);
				document.addEventListener("touchend", this.touch, false);
				document
					.getElementsByClassName("body")[0]
					.addEventListener("scroll", this.scroll, false);
			});
		},
		destroyed: function () {
			document.removeEventListener("touchstart", this.touch, false);
			document.removeEventListener("touchmove", this.touch, false);
			document.removeEventListener("touchend", this.touch, false);
			document
				.getElementsByClassName("body")[0]
				.removeEventListener("scroll", this.scroll, false);
		},
		methods: {
			touch: function (event) {
				var event = event || window.event;
				switch (event.type) {
					case "touchstart":
						this.now.y = event.touches[0].pageY;
						break;
					case "touchend":
						if (this.height === 100 && !this.loading.top) {
							this.loading.top = true;
							this.top(msg => {
								this.loading.top = false;
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
			scroll: function (e) {
				let viewH = e.target.clientHeight, //可见高度
					contentH = e.target.scrollHeight, //内容高度
					scrollTop = e.target.scrollTop; //滚动高度
				if (contentH - viewH - scrollTop <= 100 && !this.loading.bottom) {
					this.loading.bottom = true;
					this.bottom((err, msg) => {
						if (msg === "ok") {
							this.loading.bottom = false;
						} else {
							this.text.bottom = "我是有底线的!";
						}
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

	ul.items > li.loading {
		text-align: center;
		color: #AAA;
	}

	ul.items > li.media > div.media-body {
		height: 100px;
		position: relative;
	}

	ul.items > li.media > div.media-body > div.bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	ul.items {
		margin: 0;
	}

	ul.items > li {
		margin: 0 0 10px 0;
		padding: 0;
		cursor: pointer;
	}

	ul.items > li:last-child {
		margin: 0;
	}

	ul.items > li > div.media-body > div.bottom > p {
		margin-bottom: 0;
		color: #999;
	}

	ul.items > li > div.media-body > div.bottom > p > br {
		clear: both;
	}

	ul.items > li > div.media-body > div.bottom > p > span {
		float: right;
		display: flex;
		display: -webkit-flex;
		align-items: center;
	}

	ul.items > li > div.media-body > div.bottom > p > span:first-child {
		float: left;
	}

	ul.items > li > div.media-body > div.bottom > p > span > i {
		color: #ffb8cf;
		margin-right: 2px;
	}

	ul.items > li > div.media-body > div.bottom > p > span.money > span {
		font-size: 18px;
		margin-right: 2px;
		color: #ff0000;
	}

	ul.items > li > div.media-body > div.bottom > p > span.money > i {
		font-size: 16px;
	}
</style>
