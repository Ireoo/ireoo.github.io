import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	// mode: "history",
	routes: [
		{
			path: "/",
			name: "Index",
			component: resolve => require(["./html/index.vue"], resolve)
		},
		{
			path: "/list",
			name: "List",
			component: resolve => require(["./html/list.vue"], resolve)
		},
		{
			path: "/login",
			name: "Login",
			component: resolve => require(["./html/login.vue"], resolve)
		},
		{
			path: "/reg",
			name: "Reg",
			component: resolve => require(["./html/reg.vue"], resolve)
		},
		{
			path: "/user",
			name: "User",
			component: resolve => require(["./html/user.vue"], resolve)
		},
		{
			path: "/hot",
			name: "Hot",
			component: resolve => require(["./html/hot.vue"], resolve)
		},
		{
			path: "/cart",
			name: "Cart",
			component: resolve => require(["./html/cart.vue"], resolve)
		},
		{
			path: "/search",
			name: "Search",
			component: resolve => require(["./html/search.vue"], resolve)
		},
		{
			path: "/:id",
			name: "Item",
			component: resolve => require(["./html/item.vue"], resolve),
			meta: {
				hideFooter: true
			}
		}
	]
});
