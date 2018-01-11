<template>
	<div class="main">
		<b-alert variant="danger" dismissible :show="errorShow" @dismissed="errorShow=false">
			{{errorMsg}}
		</b-alert>
		<b-form @submit="onSubmit" @reset="onReset">
			<b-input-group left="账号">
				<b-form-input type="tel" v-model="phone" required placeholder="输入手机号码"></b-form-input>
			</b-input-group>
			<b-input-group left="密码">
				<b-form-input type="password" v-model="password" required placeholder="输入账号密码"></b-form-input>
			</b-input-group>

			<b-button type="submit" variant="primary">登陆</b-button>
			<b-button type="reset" variant="danger">注册一个账号</b-button>
		</b-form>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data: function () {
			return {
				errorShow: false,
				errorMsg: "",
				phone: "",
				password: ""
			};
		},
		mounted: function () {
			this.$nextTick(() => {
				this.$store.commit("title", `登陆 | ${this.$store.state.site.title}`);
			});
		},
		methods: {
			onSubmit: function (evt) {
				evt.preventDefault();
				// alert(JSON.stringify({email: this.email, password: this.password}));
				let data = {
					phone: this.phone,
					password: this.$md5(this.password)
				};
				this.$db.table("users").where(data).get("findone").then(user => {
					if (user !== '') {
						this.$store.commit("login", user);
						this.$router.push({
							name: "User"
						});
					} else {
						this.errorMsg = "账号信息不存在,请确认后再提交!";
						this.errorShow = true;
						this.password = "";
					}
				}).catch(err => {
					this.errorMsg = `未知错误：${JSON.stringify(err)}`;
					this.errorShow = true;
					this.password = "";
				});
			},
			onReset: function (evt) {
				evt.preventDefault();
				this.$router.push({
					name: "Reg"
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
