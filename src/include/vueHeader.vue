<template>
	<div class="header" v-if="$store.state.site.showHeader">
		<div class="main-header">
			<div class="content-header">
				<ul class="left">
					<li class="logo">
						<router-link to="/">
							<img :src="$store.state.site.avatar" />
							<span v-text="$store.state.site.name"></span>
						</router-link>
					</li>
					<li>
						<router-link to="/about">
							<span>简历</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "vue-header",
	data: function() {
		return {
			QRcodeShow: false
		};
	},
	mounted: function() {
		this.$nextTick(function() {
			// this.site.name = "123";
		});
	}
};
</script>

<style>
div.header {
	height: 100px;
}

div.header > div.main-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 100px;
	background: RGBA(0, 0, 0, 0.8);
	color: #fff;
	text-align: left;
	line-height: 90px;
	padding: 5px;
	z-index: 1;
}

div.header > div.main-header > div.content-header {
	margin: auto;
	max-width: 900px;
}

div.header > div.main-header > div.content-header > ul {
	line-height: 90px;
	width: 50%;
	display: inline-block;
	list-style-type: none;
	padding: 0;
	display: flex; /*Flex布局*/
	display: -webkit-flex; /* Safari */
	align-items: center; /*指定垂直居中*/
}

div.header > div.main-header > div.content-header > ul.left {
	float: left;
}

div.header > div.main-header > div.content-header > ul.right {
	text-align: right;
	float: right;
}

div.header > div.main-header > div.content-header > ul > li {
	line-height: 90px;
	display: inline-block;
	margin: 0 10px;
}

div.header > div.main-header > div.content-header > ul > li > button {
	display: flex;
	/*Flex布局*/
	display: -webkit-flex;
	/* Safari */
	align-items: center;
	/*指定垂直居中*/
}

div.header > div.main-header > div.content-header > ul > li > a {
	color: #fff;
	line-height: 90px;
}

div.header > div.main-header > div.content-header > ul > li > a > span {
	font-size: 30px;
}

div.header > div.main-header > div.content-header > ul > li > a:hover {
	color: #4898f8;
}

div.header > div.main-header > div.content-header > ul > li.logo > a:hover {
	text-decoration: none;
}

div.header > div.main-header > div.content-header > ul > li > a > i,
div.header > div.main-header > div.content-header > ul > li > a > svg,
div.header > div.main-header > div.content-header > ul > li > a > img {
	border-radius: 3px;
	margin-right: 5px;
}

div.header > div.main-header > div.content-header > ul > li.logo > a > i,
div.header > div.main-header > div.content-header > ul > li.logo > a > svg,
div.header > div.main-header > div.content-header > ul > li.logo > a > img {
	width: 40px;
	font-size: 30px;
	color: #4898f8;
}

div.header > div.main-header > div.content-header > ul > li.logo > a > span {
	font-size: 30px;
}

div.header
	> div.main-header
	> div.content-header
	> ul
	> li.logo
	> a
	> span:hover {
	color: #4898f8;
}
</style>
