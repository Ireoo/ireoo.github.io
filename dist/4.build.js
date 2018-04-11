webpackJsonp([4], {
	418: function(r, e, t) {
		"use strict";
		function o(r) {
			t(450);
		}
		Object.defineProperty(e, "__esModule", { value: !0 });
		var s = t(432),
			n = t.n(s);
		for (var i in s)
			"default" !== i &&
				(function(r) {
					t.d(e, r, function() {
						return s[r];
					});
				})(i);
		var a = t(452),
			p = t(18),
			u = o,
			d = p(n.a, a.a, !1, u, null, null);
		e.default = d.exports;
	},
	432: function(r, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = {
				name: "reg",
				data: function() {
					return {
						errorShow: !1,
						errorMsg: "",
						phone: "",
						nick: "",
						password: "",
						repassword: ""
					};
				},
				mounted: function() {
					var r = this;
					this.$nextTick(function() {
						r.$store.commit(
							"title",
							"注册 | " + r.$store.state.site.title
						);
					});
				},
				methods: {
					onSubmit: function(r) {
						var e = this;
						r.preventDefault();
						var t = { phone: this.phone, nick: this.nick };
						this.password === this.repassword
							? (delete this.repassword,
							  (t.password = this.$md5(this.password)),
							  this.$db
									.table("users")
									.data(t)
									.get("insert")
									.then(function(r) {
										console.log(r),
											r.code && 11e3 === r.code
												? ((e.errorMsg =
														"该手机号已经被注册！请更换手机！"),
												  (e.errorShow = !0),
												  (e.password = ""),
												  (e.repassword = ""))
												: (e.$store.commit("login", r),
												  e.$router.push({
														name: "User"
												  }));
									})
									.catch(function(r) {
										(e.errorMsg =
											"未知错误：" + JSON.stringify(r)),
											(e.errorShow = !0),
											(e.password = ""),
											(e.repassword = "");
									}))
							: ((this.errorMsg = "两次密码不一致，请重新输入！"),
							  (this.errorShow = !0),
							  (this.password = ""),
							  (this.repassword = ""));
					},
					onReset: function(r) {
						r.preventDefault(),
							this.$router.push({ name: "Login" });
					}
				}
			});
	},
	450: function(r, e, t) {
		var o = t(451);
		"string" == typeof o && (o = [[r.i, o, ""]]),
			o.locals && (r.exports = o.locals);
		t(14)("1560c9ba", o, !0, {});
	},
	451: function(r, e, t) {
		(e = r.exports = t(13)(!1)),
			e.push([
				r.i,
				".input-group{margin-bottom:20px}.input-group-addon{padding:0 10px;line-height:34px;background-color:#e9ecef;border:1px solid #ced4da;border-right:none;border-top-left-radius:3px;border-bottom-left-radius:3px;font-size:16px}.col-form-label{font-size:14px;color:#aaa}.form-control{padding:5px;font-size:16px}",
				""
			]);
	},
	452: function(r, e, t) {
		"use strict";
		var o = function() {
				var r = this,
					e = r.$createElement,
					t = r._self._c || e;
				return t(
					"div",
					{ staticClass: "main" },
					[
						t(
							"b-alert",
							{
								attrs: {
									variant: "danger",
									dismissible: "",
									show: r.errorShow
								},
								on: {
									dismissed: function(e) {
										r.errorShow = !1;
									}
								}
							},
							[r._v("\n\t\t" + r._s(r.errorMsg) + "\n\t")]
						),
						r._v(" "),
						t(
							"b-form",
							{ on: { submit: r.onSubmit, reset: r.onReset } },
							[
								t(
									"b-input-group",
									{ attrs: { left: "账号" } },
									[
										t("b-form-input", {
											attrs: {
												type: "tel",
												required: "",
												placeholder: "输入手机号码"
											},
											model: {
												value: r.phone,
												callback: function(e) {
													r.phone = e;
												},
												expression: "phone"
											}
										})
									],
									1
								),
								r._v(" "),
								t(
									"b-input-group",
									{ attrs: { left: "昵称" } },
									[
										t("b-form-input", {
											attrs: {
												type: "text",
												required: "",
												placeholder: "输入账号昵称"
											},
											model: {
												value: r.nick,
												callback: function(e) {
													r.nick = e;
												},
												expression: "nick"
											}
										})
									],
									1
								),
								r._v(" "),
								t(
									"b-input-group",
									{ attrs: { left: "密码" } },
									[
										t("b-form-input", {
											attrs: {
												type: "password",
												required: "",
												placeholder: "输入账号密码"
											},
											model: {
												value: r.password,
												callback: function(e) {
													r.password = e;
												},
												expression: "password"
											}
										})
									],
									1
								),
								r._v(" "),
								t(
									"b-input-group",
									{ attrs: { left: "验证" } },
									[
										t("b-form-input", {
											attrs: {
												type: "password",
												required: "",
												placeholder: "再次输入密码"
											},
											model: {
												value: r.repassword,
												callback: function(e) {
													r.repassword = e;
												},
												expression: "repassword"
											}
										})
									],
									1
								),
								r._v(" "),
								t(
									"b-button",
									{
										attrs: {
											type: "submit",
											variant: "primary"
										}
									},
									[r._v("注册")]
								),
								r._v(" "),
								t(
									"b-button",
									{
										attrs: {
											type: "reset",
											variant: "danger"
										}
									},
									[r._v("登陆账号")]
								)
							],
							1
						)
					],
					1
				);
			},
			s = [],
			n = { render: o, staticRenderFns: s };
		e.a = n;
	}
});
