<template>
	<div v-html="content"></div>
</template>

<script>
import marked from "marked";

export default {
	path: "/:sha",
	name: "Post",
	title: "文章",
	data: function() {
		return {
			post: {
				title: "",
				content: ""
			}
		};
	},
	computed: {
		content: function() {
			marked.setOptions({
				renderer: new marked.Renderer(),
				gfm: true,
				tables: true,
				breaks: true,
				pedantic: false,
				sanitize: false,
				smartLists: true,
				smartypants: false
			});
			return marked(this.post.content);
		}
	},
	mounted: function() {
		this.$http(
			"https://api.github.com/repos/Ireoo/blog/contents/post?ref=master"
		).then(res => {
			res.data.forEach(v => {
				if (v.sha === this.$route.params.sha) {
					this.post.title = v.name.split(".")[0];
					document.title = `${this.post.title} - ${
						this.$store.state.site.page
					}`;
					this.$http(v.download_url).then(r => {
						this.post.content = r.data;
					});
				}
			});
		});
	}
};
</script>

<style scoped>

</style>
