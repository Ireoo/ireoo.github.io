webpackJsonp([7], {
	423: function(t, i, e) {
		"use strict";
		function a(t) {
			e(466);
		}
		Object.defineProperty(i, "__esModule", { value: !0 });
		var n = e(437),
			o = e.n(n);
		for (var s in n)
			"default" !== s &&
				(function(t) {
					e.d(i, t, function() {
						return n[t];
					});
				})(s);
		var d = e(468),
			r = e(18),
			l = a,
			c = r(o.a, d.a, !1, l, null, null);
		i.default = c.exports;
	},
	437: function(t, i, e) {
		"use strict";
		Object.defineProperty(i, "__esModule", { value: !0 }),
			(i.default = {
				name: "Item",
				data: function() {
					return { item: {} };
				},
				mounted: function() {
					var t = this;
					this.$nextTick(function() {
						t.$store.commit("foot", !t.$route.meta.hideFooter),
							t.$db
								.table("items")
								.where({ _id: t.$route.params.id })
								.get("findone")
								.then(function(i) {
									(t.item = i),
										t.$store.commit(
											"title",
											i.title +
												" | " +
												t.$store.state.site.title
										);
								});
					});
				},
				methods: {}
			});
	},
	466: function(t, i, e) {
		var a = e(467);
		"string" == typeof a && (a = [[t.i, a, ""]]),
			a.locals && (t.exports = a.locals);
		e(14)("e76a25d8", a, !0, {});
	},
	467: function(t, i, e) {
		(i = t.exports = e(13)(!1)),
			i.push([
				t.i,
				"div.body a.back{color:#fff;position:fixed;top:60px;left:20px;z-index:6;font-size:50px;text-shadow:1px 1px 1px #000}div.body.noHead a.back{top:20px}div.body a.back:hover{color:#4898f8}div.item{position:relative;background:#fff;padding-bottom:10px}div.item>div.images{margin-bottom:10px}div.item>div.images>ul{position:relative;margin:0;padding:0 0 100%;height:0}div.item>div.images>ul>li{margin:0;width:100%;overflow:hidden;height:0;padding-bottom:100%;display:flex;display:-webkit-flex;align-items:center;position:absolute;top:0;left:0}div.item>div.images>ul>li>img{width:100%;padding-top:100%}div.item>h1{font-size:16px;padding:0 10px;font-weight:700}div.item>p{display:block;padding:0 10px;margin-bottom:0}",
				""
			]);
	},
	468: function(t, i, e) {
		"use strict";
		var a = function() {
				var t = this,
					i = t.$createElement,
					e = t._self._c || i;
				return e("div", { staticClass: "main" }, [
					e(
						"a",
						{
							staticClass: "back",
							on: {
								click: function(i) {
									t.$router.back();
								}
							}
						},
						[e("i", { staticClass: "fa fa-chevron-circle-left" })]
					),
					t._v(" "),
					e("div", { staticClass: "item" }, [
						e("div", { staticClass: "images" }, [
							e(
								"ul",
								{ ref: "image" },
								[
									e(
										"li",
										{ staticStyle: { "z-index": "5" } },
										[
											e("img", {
												attrs: {
													src: t.item.pict_url,
													alt: t.item.title
												}
											})
										]
									),
									t._v(" "),
									t._l(t.item.small_images.string, function(
										i,
										a
									) {
										return e(
											"li",
											{
												key: a,
												style: { zIndex: 4 - a }
											},
											[
												e("img", {
													attrs: {
														src: i,
														alt: t.item.title
													}
												})
											]
										);
									})
								],
								2
							)
						]),
						t._v(" "),
						e("h1", [t._v(t._s(t.item.title))]),
						t._v(" "),
						e("p", [t._v("原价: " + t._s(t.item.reserve_price))]),
						t._v(" "),
						e("p", [t._v("现价: " + t._s(t.item.zk_final_price))])
					]),
					t._v(" "),
					e("div", { staticClass: "content" })
				]);
			},
			n = [],
			o = { render: a, staticRenderFns: n };
		i.a = o;
	}
});
