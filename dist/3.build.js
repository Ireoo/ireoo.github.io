webpackJsonp([3], {
	419: function(t, e, n) {
		"use strict";
		function i(t) {
			n(454);
		}
		Object.defineProperty(e, "__esModule", { value: !0 });
		var o = n(433),
			s = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function(t) {
					n.d(e, t, function() {
						return o[t];
					});
				})(r);
		var u = n(456),
			c = n(18),
			a = i,
			f = c(s.a, u.a, !1, a, null, null);
		e.default = f.exports;
	},
	433: function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = {
				name: "user",
				mounted: function() {
					this.$nextTick(function() {
						this.$store.commit(
							"foot",
							!this.$route.meta.hideFooter
						),
							this.$store.commit(
								"title",
								"我 | " + this.$store.state.site.title
							),
							this.$store.state.user ||
								this.$router.push({ name: "Login" });
					});
				}
			});
	},
	454: function(t, e, n) {
		var i = n(455);
		"string" == typeof i && (i = [[t.i, i, ""]]),
			i.locals && (t.exports = i.locals);
		n(14)("7b0fdee6", i, !0, {});
	},
	455: function(t, e, n) {
		(e = t.exports = n(13)(!1)), e.push([t.i, "", ""]);
	},
	456: function(t, e, n) {
		"use strict";
		var i = function() {
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)("div");
			},
			o = [],
			s = { render: i, staticRenderFns: o };
		e.a = s;
	}
});
