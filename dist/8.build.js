webpackJsonp([8], {
	421: function(t, e, r) {
		"use strict";
		function a(t) {
			r(460);
		}
		Object.defineProperty(e, "__esModule", { value: !0 });
		var s = r(435),
			u = r.n(s);
		for (var n in s)
			"default" !== n &&
				(function(t) {
					r.d(e, t, function() {
						return s[t];
					});
				})(n);
		var o = r(462),
			v = r(18),
			l = a,
			i = v(u.a, o.a, !1, l, null, null);
		e.default = i.exports;
	},
	435: function(t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = {
				name: "Cart",
				data: function() {
					return { msg: "Welcome to Your Vue.js App" };
				}
			});
	},
	460: function(t, e, r) {
		var a = r(461);
		"string" == typeof a && (a = [[t.i, a, ""]]),
			a.locals && (t.exports = a.locals);
		r(14)("a406bfea", a, !0, {});
	},
	461: function(t, e, r) {
		(e = t.exports = r(13)(!1)), e.push([t.i, "", ""]);
	},
	462: function(t, e, r) {
		"use strict";
		var a = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r(
					"div",
					{ staticClass: "main" },
					[
						r("h1", [t._v(t._s(t.msg))]),
						t._v(" "),
						r("h2", [t._v("Essential Links2")]),
						t._v(" "),
						t._m(0),
						t._v(" "),
						r("h2", [t._v("Ecosystem")]),
						t._v(" "),
						t._m(1),
						t._v(" "),
						r("qriously", {
							attrs: { value: "19980108@qq.com", size: 20 }
						})
					],
					1
				);
			},
			s = [
				function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("ul", [
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "https://vuejs.org",
										target: "_blank"
									}
								},
								[t._v("Core Docs")]
							)
						]),
						t._v(" "),
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "https://forum.vuejs.org",
										target: "_blank"
									}
								},
								[t._v("Forum")]
							)
						]),
						t._v(" "),
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "https://chat.vuejs.org",
										target: "_blank"
									}
								},
								[t._v("Community Chat")]
							)
						]),
						t._v(" "),
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "https://twitter.com/vuejs",
										target: "_blank"
									}
								},
								[t._v("Twitter")]
							)
						])
					]);
				},
				function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("ul", [
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "http://router.vuejs.org/",
										target: "_blank"
									}
								},
								[t._v("vue-router")]
							)
						]),
						t._v(" "),
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "http://vuex.vuejs.org/",
										target: "_blank"
									}
								},
								[t._v("vuex")]
							)
						]),
						t._v(" "),
						r("li", [
							r(
								"a",
								{
									attrs: {
										href: "http://vue-loader.vuejs.org/",
										target: "_blank"
									}
								},
								[t._v("vue-loader")]
							)
						]),
						t._v(" "),
						r("li", [
							r(
								"a",
								{
									attrs: {
										href:
											"https://github.com/vuejs/awesome-vue",
										target: "_blank"
									}
								},
								[t._v("awesome-vue")]
							)
						])
					]);
				}
			],
			u = { render: a, staticRenderFns: s };
		e.a = u;
	}
});
