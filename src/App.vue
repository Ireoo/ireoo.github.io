<template>
    <div id="app">
        <vue-header :site="site" :user="user"></vue-header>
        <router-view/>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
	import "bootstrap/dist/css/bootstrap.css";
	import "bootstrap-vue/dist/bootstrap-vue.css";

	import VueHeader from "./html/include/vueHeader.vue";
	import VueFooter from "./html/include/vueFooter.vue";

	export default {
		components: {
			VueFooter,
			VueHeader
		},
		name: "app",
		data() {
			return {
				site: {
					name: "爱淘客 - aTaoke"
				},
				user: undefined
			};
		}
	};
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        font-size: 12px;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    div.main {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        display: flex; /*Flex布局*/
        display: -webkit-flex; /* Safari */
        align-items: center; /*指定垂直居中*/
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
