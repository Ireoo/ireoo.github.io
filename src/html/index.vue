<template>
    <div class="main">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Essential Links2</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
        <qriously value="19980108@qq.com" :size="20" />
    </div>
</template>

<script>
	export default {
		name: "Index",
		data() {
			return {
				msg: "Welcome to Your Vue.js App"
			};
		}
	};
</script>

<style>

</style>
