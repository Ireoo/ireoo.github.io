import Vue from "vue";

/**
 * cryptoJS
 */
import { decrypt, encrypt, md5 } from "../../libs/crypto";

Vue.prototype.$md5 = md5;
Vue.prototype.$crypto = {
    de: decrypt,
    en: encrypt
};

// 获取user信息
let user = undefined;
if (localStorage.getItem("user")) {
    user = JSON.parse(
        decrypt(localStorage.getItem("user"), "aTaoke in localhost")
    );
    if (user.timer <= new Date().getTime() + 15 * 60 * 1000) {
        localStorage.removeItem("user");
        user = undefined;
    }
}

/**
 * Vuex
 */
import Vuex from "vuex";

Vue.use(Vuex);

/**
 * 初始化$store
 * @type {Store}
 * How to use:
 * $store.state.<key>
 * $store.commit('<function name>', params)
 */
const store = new Vuex.Store({
    state: {
        site: {
            name: "Ireoo",
            title: "Ireoo - github.com/Ireoo",
            page: "Ireoo - github.com/Ireoo",
            keyword: "Ireoo，王超，Ireoo的博客，Ireoo's blog，王超的博客",
            description: "Ireoo's blogs.",
            avatar: "https://avatars2.githubusercontent.com/u/5162679?s=80&v=4",
            showHeader: true,
            showFooter: true
        },
        user: user
    },
    mutations: {
        title: function(state, title) {
            state.site.page = title;
        },
        login: function(state, user) {
            user.timer = new Date().getTime();
            localStorage.setItem(
                "user",
                encrypt(JSON.stringify(user), "aTaoke in localhost")
            );
            state.user = user;
        },
        logout: function(state) {
            state.user = undefined;
            localStorage.removeItem("user");
        },
        head: function(state, val = true) {
            state.site.showHeader = val;
        },
        foot: function(state, val = true) {
            state.site.showFooter = val;
        }
    }
});

module.exports = store;