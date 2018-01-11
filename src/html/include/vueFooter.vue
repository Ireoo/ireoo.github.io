<template>
	<div class="footer" v-if="$store.state.site.showFooter">
		<b-container class="footer-main">
			<b-row>
				<b-col class="footItem">
					<b-link :class="{'on': on('/')}" to="/">
						<span>
							<icon name="home" scale="1"></icon>
						</span>
						<span>首页</span>
					</b-link>
				</b-col>
				<b-col class="footItem">
					<b-link :class="{'on': on('/hot')}" to="/hot">
						<span>
							<icon name="heartbeat" scale="1"></icon>
						</span>
						<span>推荐</span>
					</b-link>
				</b-col>
				<b-col class="footItem">
					<b-link :class="{'on': on('/search')}" to="/search">
						<span>
							<icon name="search" scale="1"></icon>
						</span>
						<span>搜索</span>
					</b-link>
				</b-col>
				<!--<b-col class="footItem">-->
				<!--<b-link :class="{'on': on('/cart')}" to="/cart">-->
				<!--<span><icon name="shopping-cart" scale="1"></icon></span>-->
				<!--<span>购物车</span>-->
				<!--</b-link>-->
				<!--</b-col>-->
				<b-col class="footItem">
					<b-link :class="{'on': on(['/user', '/login', '/reg'])}" to="/user">
						<span>
							<icon name="user-circle" scale="1"></icon>
						</span>
						<span>我</span>
					</b-link>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: "vue-footer",
		methods: {
			on: function (url) {
				if (typeof url === "string") {
					return this.$route.path === url;
				} else {
					let result = false;
					url.forEach(v => {
						if (this.$route.path === v) result = true;
					});
					return result;
				}
			}
		}
	};

</script>

<style>
	div.footer {
		background: RGB(242, 242, 242);
		padding: 5px 0;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.footItem>a {
		padding: 5px 0;
		display: block;
		color: #4898F8;
		border-radius: 3px;
	}

	.footItem>a:hover {
		text-decoration: none;
	}

	.footItem>a.on {
		background: #4898F8;
		color: #FFF;
	}

	.footItem>a>span {
		display: block;
		text-align: center;
		font-size: 10px;
	}

</style>
