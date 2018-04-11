webpackJsonp([2], {
	420: function(t, e, i) {
		"use strict";
		function o(t) {
			i(456);
		}
		Object.defineProperty(e, "__esModule", { value: !0 });
		var s = i(434),
			n = i.n(s);
		for (var a in s)
			"default" !== a &&
				(function(t) {
					i.d(e, t, function() {
						return s[t];
					});
				})(a);
		var l = i(458),
			r = i(18),
			c = o,
			u = r(n.a, l.a, !1, c, null, null);
		e.default = u.exports;
	},
	424: function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = {
				name: "vue-list",
				props: ["items", "top", "bottom"],
				data: function() {
					return {
						height: 0,
						loading: { top: !1, bottom: !1 },
						text: { top: "", bottom: "加载中..." },
						now: { x: 0, y: 0 }
					};
				},
				mounted: function() {
					var t = this;
					this.$nextTick(function() {
						document.addEventListener("touchstart", t.touch, !1),
							document.addEventListener("touchmove", t.touch, !1),
							document.addEventListener("touchend", t.touch, !1),
							document
								.getElementsByClassName("body")[0]
								.addEventListener("scroll", t.scroll, !1);
					});
				},
				destroyed: function() {
					document.removeEventListener("touchstart", this.touch, !1),
						document.removeEventListener(
							"touchmove",
							this.touch,
							!1
						),
						document.removeEventListener(
							"touchend",
							this.touch,
							!1
						),
						document
							.getElementsByClassName("body")[0]
							.removeEventListener("scroll", this.scroll, !1);
				},
				methods: {
					touch: function(t) {
						var e = this,
							t = t || window.event;
						switch (t.type) {
							case "touchstart":
								this.now.y = t.touches[0].pageY;
								break;
							case "touchend":
								100 !== this.height || this.loading.top
									? (this.height = 0)
									: ((this.loading.top = !0),
									  this.top(function(t) {
											(e.loading.top = !1),
												(e.height = 0);
									  }));
								break;
							case "touchmove":
								var i = document.getElementsByClassName(
									"body"
								)[0].scrollTop;
								if (
									t.touches[0].pageY > this.now.y &&
									0 === i
								) {
									t.preventDefault();
									var o = t.touches[0].pageY - this.now.y;
									(this.height = o / 3),
										this.height > 100 &&
											(this.height = 100);
								}
						}
					},
					scroll: function(t) {
						var e = this,
							i = t.target.clientHeight;
						t.target.scrollHeight - i - t.target.scrollTop <= 100 &&
							!this.loading.bottom &&
							((this.loading.bottom = !0),
							this.bottom(function(t, i) {
								"ok" === i
									? (e.loading.bottom = !1)
									: (e.text.bottom = "我是有底线的!");
							}));
					}
				}
			});
	},
	425: function(t, e, i) {
		"use strict";
		function o(t) {
			i(426);
		}
		Object.defineProperty(e, "__esModule", { value: !0 });
		var s = i(424),
			n = i.n(s);
		for (var a in s)
			"default" !== a &&
				(function(t) {
					i.d(e, t, function() {
						return s[t];
					});
				})(a);
		var l = i(428),
			r = i(18),
			c = o,
			u = r(n.a, l.a, !1, c, null, null);
		e.default = u.exports;
	},
	426: function(t, e, i) {
		var o = i(427);
		"string" == typeof o && (o = [[t.i, o, ""]]),
			o.locals && (t.exports = o.locals);
		i(14)("e222d938", o, !0, {});
	},
	427: function(t, e, i) {
		(e = t.exports = i(13)(!1)),
			e.push([
				t.i,
				"ul.items{padding:10px;background:#fff}ul.items>li.loading{text-align:center;color:#aaa}ul.items>li.media>div.media-body{height:100px;position:relative}ul.items>li.media>div.media-body>div.bottom{position:absolute;bottom:0;left:0;right:0}ul.items{margin:0}ul.items>li{margin:0 0 10px;padding:0;cursor:pointer}ul.items>li:last-child{margin:0}ul.items>li>div.media-body>div.bottom>p{margin-bottom:0;color:#999}ul.items>li>div.media-body>div.bottom>p>br{clear:both}ul.items>li>div.media-body>div.bottom>p>span{float:right;display:flex;display:-webkit-flex;align-items:center}ul.items>li>div.media-body>div.bottom>p>span:first-child{float:left}ul.items>li>div.media-body>div.bottom>p>span>i{color:#ffb8cf;margin-right:2px}ul.items>li>div.media-body>div.bottom>p>span.money>span{font-size:18px;margin-right:2px;color:red}ul.items>li>div.media-body>div.bottom>p>span.money>i{font-size:16px}",
				""
			]);
	},
	428: function(t, e, i) {
		"use strict";
		var o = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					"ul",
					{
						staticClass: "items",
						style: { "margin-top": t.height + "px" }
					},
					[
						t._l(t.items, function(e) {
							return i(
								"b-media",
								{
									key: e._id,
									attrs: { tag: "li" },
									on: {
										click: function(i) {
											t.$router.push({
												path: "/" + e._id
											});
										}
									}
								},
								[
									i("b-img", {
										attrs: {
											slot: "aside",
											src: e.pict_url,
											width: "100",
											height: "100",
											alt: e.title
										},
										slot: "aside"
									}),
									t._v(" "),
									i("h5", {
										staticClass: "mt-0",
										domProps: { textContent: t._s(e.title) }
									}),
									t._v(" "),
									i("div", { staticClass: "bottom" }, [
										i("p", [
											i(
												"span",
												{ staticClass: "money" },
												[
													i("i", {
														staticClass: "fa fa-rmb"
													}),
													i("span", [
														t._v(
															t._s(
																e.zk_final_price
															)
														)
													]),
													i("s", [
														t._v(
															t._s(
																e.reserve_price
															)
														)
													])
												]
											),
											t._v(" "),
											i("span", [
												i("i", {
													staticClass:
														"fa fa-shopping-bag"
												}),
												t._v(t._s(e.volume))
											]),
											t._v(" "),
											i("br")
										]),
										t._v(" "),
										i("p", [
											i("span", [
												i("i", {
													staticClass: "fa fa-at"
												}),
												t._v(t._s(e.shop_title))
											]),
											t._v(" "),
											i("span", [t._v(t._s(e.provcity))]),
											t._v(" "),
											i("br")
										])
									])
								],
								1
							);
						}),
						t._v(" "),
						t.loading.bottom
							? i("li", {
									staticClass: "loading",
									domProps: {
										textContent: t._s(t.text.bottom)
									}
							  })
							: t._e()
					],
					2
				);
			},
			s = [],
			n = { render: o, staticRenderFns: s };
		e.a = n;
	},
	434: function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 });
		var o = i(425),
			s = (function(t) {
				return t && t.__esModule ? t : { default: t };
			})(o);
		e.default = {
			components: { VueList: s.default },
			name: "Hot",
			data: function() {
				return {
					sql: {
						table: "items",
						where: { click_url: { $ne: null } },
						other: {
							limit: 20,
							skip: 0,
							show: {
								_id: 1,
								title: 1,
								shop_title: 1,
								zk_final_price: 1,
								reserve_price: 1,
								provcity: 1,
								volume: 1,
								pict_url: 1
							}
						}
					},
					items: [],
					page: 1
				};
			},
			filters: {
				itemFilter: function(t) {
					return "/item/" + t;
				}
			},
			mounted: function() {
				var t = this;
				(this.sql.other.skip = 0),
					this.$db
						.table(this.sql.table)
						.where(this.sql.where)
						.other(this.sql.other)
						.get("find")
						.then(function(e) {
							(t.page = 1), (t.items = e);
						}),
					this.$nextTick(function() {
						t.$store.commit("foot", !t.$route.meta.hideFooter),
							t.$store.commit(
								"title",
								"推荐 | " + t.$store.state.site.title
							);
					});
			},
			methods: {
				top: function(t) {
					var e = this;
					(this.sql.other.skip = 0),
						this.$db
							.table(this.sql.table)
							.where(this.sql.where)
							.other(this.sql.other)
							.get("find")
							.then(function(i) {
								(e.page = 1), (e.items = i), t(null, "ok");
							})
							.catch(function(e) {
								alert(e), t(e, null);
							});
				},
				bottom: function(t) {
					var e = this;
					(this.sql.other.skip = 20 * this.page),
						this.$db
							.table(this.sql.table)
							.where(this.sql.where)
							.other(this.sql.other)
							.get("find")
							.then(function(i) {
								e.page++,
									i.length > 0
										? i.forEach(function(i) {
												e.items.push(i), t(null, "ok");
										  })
										: t(null, "over");
							})
							.catch(function(e) {
								t(e, null), alert(e);
							});
				}
			}
		};
	},
	456: function(t, e, i) {
		var o = i(457);
		"string" == typeof o && (o = [[t.i, o, ""]]),
			o.locals && (t.exports = o.locals);
		i(14)("b32b4810", o, !0, {});
	},
	457: function(t, e, i) {
		(e = t.exports = i(13)(!1)), e.push([t.i, "", ""]);
	},
	458: function(t, e, i) {
		"use strict";
		var o = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					"div",
					{ staticClass: "main" },
					[
						i("vue-list", {
							attrs: {
								items: t.items,
								top: t.top,
								bottom: t.bottom
							}
						})
					],
					1
				);
			},
			s = [],
			n = { render: o, staticRenderFns: s };
		e.a = n;
	}
});
