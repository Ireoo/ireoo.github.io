import Vue from "vue";

/**
 * cryptoJS
 */
import {
	decrypt,
	encrypt,
	md5
} from "../../libs/crypto";

Vue.prototype.$md5 = md5;
Vue.prototype.$crypto = {
	de: decrypt,
	en: encrypt
};

// 获取user信息
let user = undefined;
if (localStorage.getItem("user")) {
	user = JSON.parse(decrypt(localStorage.getItem("user"), "aTaoke in localhost"));
	if (user.timer <= (new Date()).getTime() + 15 * 60 * 1000) {
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
			name: "爱淘客",
			title: "爱淘客 - aTaoke.cc",
			page: "爱淘客 - aTaoke.cc",
			keyword: "爱淘客，淘宝客，淘客平台",
			description: "《爱淘客》是专注淘宝客营销的平台，集成众多社交平台，集成3级分销系统。在购物的同时还可以赚钱，一切都是那么的简单！",
			showHeader: true,
			showFooter: true
		},
		user: user
	},
	mutations: {
		title: function (state, title) {
			state.site.page = title;
		},
		login: function (state, user) {
			user.timer = (new Date()).getTime();
			localStorage.setItem("user", encrypt(JSON.stringify(user), "aTaoke in localhost"));
			state.user = user;
		},
		logout: function (state) {
			state.user = undefined;
			localStorage.removeItem("user");
		},
		head: function (state, val = true) {
			state.site.showHeader = val;
		},
		foot: function (state, val = true) {
			state.site.showFooter = val;
		}
	}
});

module.exports = store;
