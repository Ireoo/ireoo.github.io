import Vue from "vue";
import App from "./App.vue";
import Route from "./route";

/**
 * QRcode
 * How to use:
 * <qriously value="Hello World!" :size="200" />
 */
import VueQriously from "vue-qriously";

Vue.use(VueQriously);


/**
 * awesome 图标
 * How to use:
 * one:
 * <icon name="refresh" scale="2" spin></icon>
 * <icon name="comment" flip="horizontal"></icon>
 * <icon name="code-fork" label="Forked Repository"></icon>
 *
 * group:
 * <icon label="No Photos">
 *     <icon name="camera"></icon>
 *     <icon name="ban" scale="2" class="alert"></icon>
 * </icon>
 */
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.component("icon", Icon);

/**
 * Vue 滑块
 * How to use:
 * <vue-swiper></vue-swiper>
 */
// import VueAwesomeSwiper from "vue-awesome-swiper";
//
// Vue.use(VueAwesomeSwiper);

/**
 * Bootstarp Vue 组件
 * How to use:
 * see https://bootstrap-vue.js.org/docs/components/alert
 */
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

new Vue(
	{
		el: "#app",
		router: Route,
		render: h => h(App)
	}
);