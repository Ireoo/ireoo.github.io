import Vue from "vue";
import App from "./App.vue";

/**
 * Load module
 */
import router from "./route";
import store from "./plugin/vuex";

/**
 * Load Plugin
 */
import "./plugin/client";
import "./plugin/Bootstarp";
import "./plugin/db";
import "./plugin/http";
import "./plugin/QRcode";

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});