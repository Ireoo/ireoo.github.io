import Vue from "vue";
import App from "./App.vue";
import router from "./route";

/**
 * Load Plugin
 */
import "./plugin/client";
import "./plugin/Bootstarp";
import "./plugin/db";
import "./plugin/http";
import "./plugin/QRcode";
import store from "./plugin/vuex";


new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
});
