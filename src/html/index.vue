<template>
	<div>
		<ul>
			<li v-for="(post, key) in speechs" :key="key">
				<h1>
					<b-link>{{post}}</b-link>
				</h1>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Index",
	title: "首页",
	props: ["speechs"],
	data: function() {
		return {
			posts: [],
			page: 1
		};
	},
	filters: {
		href: function(v) {
			return `/post/${v}`;
		},
		title: function(v) {
			return v.split(".")[0];
		}
	},
	mounted: function() {
		this.$http(
			"https://api.github.com/repos/Ireoo/blog/contents/post?ref=master"
		).then(res => {
			this.posts = res.data;
		});
	}
};
</script>

<style scoped>
ul {
	list-style: none;
}

h1 > a {
	font-size: 24px;
}
</style>
