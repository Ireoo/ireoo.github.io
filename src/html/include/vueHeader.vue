<template>
	<div class="header" v-if="$store.state.site.showHeader">
		<div class="main-header">
			<ul class="left">
				<li class="logo">
					<router-link to="/">
						<icon name="ravelry" scale="1.6"></icon>
						<span v-text="$store.state.site.name"></span>
					</router-link>
				</li>
			</ul>
			<ul class="right" v-if="!$store.state.user">
				<li>
					<router-link to="/login">
						<icon name="user-circle-o"></icon>
						<span>登陆</span>
					</router-link>
				</li>
				<li>
					<router-link to="/reg">
						<icon name="user-plus"></icon>
						<span>注册</span>
					</router-link>
				</li>
			</ul>
			<ul class="right" v-if="$store.state.user">
				<li>
					<!--<router-link to="/user">-->
					<b-btn id="user" variant="primary">
						<icon name="user-circle-o" style="margin-right: 5px;"></icon>
						<span v-text="$store.state.user.nick"></span>
					</b-btn>
					<!--</router-link>-->
					<b-popover target="user" placement="bottomright" triggers="focus">
						<!--<template slot="title">Content via Slots</template>-->
						<b-list-group>
							<b-list-group-item>
								<b-link to="/user">
									<icon name="user-circle" style="margin-right: 5px;"></icon>
									个人中心
								</b-link>
							</b-list-group-item>
							<b-list-group-item>
								<a href="javascript:void(0);" @click="$store.commit('logout');$router.push({name: 'Login'});">
									<icon name="sign-out" style="margin-right: 5px;"></icon>
									<span>退出</span>
								</a>
							</b-list-group-item>
						</b-list-group>
					</b-popover>
				</li>
				<!--<li>-->
				<!--<a href="javascript:void(0);" @click="$store.commit('logout');$router.push({name: 'Login'});">-->
				<!--<icon name="sign-out"></icon>-->
				<!--<span>退出</span>-->
				<!--</a>-->
				<!--</li>-->
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vue-header",
		data: function () {
			return {
				QRcodeShow: false
			};
		},
		mounted: function () {
			this.$nextTick(function () {
				// this.site.name = "123";
			});
		}
	};

</script>

<style>
	div.header {
		height: 40px;
	}

	div.header>div.main-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 40px;
		background: RGBA(0, 0, 0, 0.8);
		color: #fff;
		text-align: left;
		line-height: 40px;
		padding: 5px;
		z-index: 1;
	}

	div.header>div.main-header>ul {
		line-height: 30px;
		width: 50%;
		display: inline-block;
		list-style-type: none;
		padding: 0;
	}

	div.header>div.main-header>ul.left {
		float: left;
	}

	div.header>div.main-header>ul.right {
		text-align: right;
		float: right;
	}

	div.header>div.main-header>ul>li {
		line-height: 30px;
		display: inline-block;
		margin: 0 10px;
	}

	div.header>div.main-header>ul>li>button {
		display: flex;
		/*Flex布局*/
		display: -webkit-flex;
		/* Safari */
		align-items: center;
		/*指定垂直居中*/
	}

	div.header>div.main-header>ul>li>a {
		color: #FFF;
		line-height: 30px;
	}

	div.header>div.main-header>ul>li>a:hover {
		color: #ff7272;
	}

	div.header>div.main-header>ul>li.logo>a:hover {
		text-decoration: none;
	}

	div.header>div.main-header>ul>li>a>i,
	div.header>div.main-header>ul>li>a>svg,
	div.header>div.main-header>ul>li>a>img {
		margin-right: 5px;
	}

	div.header>div.main-header>ul>li.logo>a>i,
	div.header>div.main-header>ul>li.logo>a>svg,
	div.header>div.main-header>ul>li.logo>a>img {
		font-size: 12px;
		color: #ff0000;
	}

	div.header>div.main-header>ul>li.logo>a>span {
		font-size: 14px;
	}

	div.header>div.main-header>ul>li.logo>a>span:hover {
		color: red;
	}

</style>
