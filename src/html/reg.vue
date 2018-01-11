<template>
	<div class="main">
		<b-alert variant="danger" dismissible :show="errorShow" @dismissed="errorShow=false">
			{{errorMsg}}
		</b-alert>

		<b-form @submit="onSubmit" @reset="onReset">
			<b-input-group left="账号">
				<b-form-input type="tel" v-model="phone" required placeholder="输入手机号码"></b-form-input>
			</b-input-group>
			<b-input-group left="昵称">
				<b-form-input type="text" v-model="nick" required placeholder="输入账号昵称"></b-form-input>
			</b-input-group>
			<b-input-group left="密码">
				<b-form-input type="password" v-model="password" required placeholder="输入账号密码"></b-form-input>
			</b-input-group>
			<b-input-group left="验证">
				<b-form-input type="password" v-model="repassword" required placeholder="再次输入密码"></b-form-input>
			</b-input-group>

			<b-button type="submit" variant="primary">注册</b-button>
			<b-button type="reset" variant="danger">登陆账号</b-button>
		</b-form>
	</div>
</template>

<script>
	export default {
		name: "reg",
		data: function () {
			return {
				errorShow: false,
				errorMsg: "",
				phone: "",
				nick: "",
				password: "",
				repassword: ""
			};
		},
		mounted: function () {
			this.$nextTick(() => {
				this.$store.commit("title", `注册 | ${this.$store.state.site.title}`);
			});
		},
		methods: {
			onSubmit: function (evt) {
				evt.preventDefault();
				let data = {
					phone: this.phone,
					nick: this.nick
				};
				if (this.password === this.repassword) {
					delete this.repassword;
					data.password = this.$md5(this.password);
					this.$db.table("users").data(data).get("insert").then(user => {
						console.log(user);
						if (user.code && user.code === 11000) {
							this.errorMsg = "该手机号已经被注册！请更换手机！";
							this.errorShow = true;
							this.password = "";
							this.repassword = "";
						} else {
							this.$store.commit("login", user);
							this.$router.push({
								name: "User"
							});
						}
					}).catch(err => {
						this.errorMsg = `未知错误：${JSON.stringify(err)}`;
						this.errorShow = true;
						this.password = "";
						this.repassword = "";
					});
				} else {
					this.errorMsg = "两次密码不一致，请重新输入！";
					this.errorShow = true;
					this.password = "";
					this.repassword = "";
				}
			},
			onReset: function (evt) {
				evt.preventDefault();
				this.$router.push({
					name: "Login"
				});
			}
		}
	};

</script>

<style>
	.input-group {
		margin-bottom: 20px;
	}

	.input-group-addon {
		padding: 0 10px;
		line-height: 34px;
		background-color: #e9ecef;
		border: 1px solid #ced4da;
		border-right: none;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		font-size: 16px;
	}

	.col-form-label {
		font-size: 14px;
		/*font-weight: bold;*/
		color: #AAA;
	}

	.form-control {
		padding: 5px;
		font-size: 16px;
	}

</style>
